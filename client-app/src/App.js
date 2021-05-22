import React from 'react'
import { Grid, Container, Grow, Typography, AppBar } from '@material-ui/core'
import memories from './images/memories.png'
import useStyle from './style'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

const App = () => {
    const classes = useStyle()

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
                            <Posts></Posts>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <Form></Form>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container >
    )
}

export default App