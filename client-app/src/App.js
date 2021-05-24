import React, { useEffect, useState } from 'react'
import { Grid, Container, Grow, Typography, AppBar } from '@material-ui/core'
import memories from './images/memories.png'
import useStyle from './style'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'

const App = () => {
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyle()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"></img>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={4}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container >
    )
}

export default (App)