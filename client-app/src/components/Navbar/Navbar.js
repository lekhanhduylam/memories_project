import React, { useEffect, useState } from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import useStyles from './style';
import memories from '../../images/memories.png'
import { Link } from 'react-router-dom'
import { useLocation, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LOGOUT } from '../../constants/actionTypes'

const Navbar = () => {
    const classes = useStyles()
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    const handleLogout = () => {
        dispatch({ type: LOGOUT, data: null })
        history.push('/')
    }


    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"></img>
            </div>
            <Toolbar className={classes.toolbar}>
                {
                    user ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user.result.imageUrl}>
                                {user.result.name.charAt(0)}
                            </Avatar>
                            <Typography className={classes.userName} variant="h6">
                                {user.result.name}
                            </Typography>
                            <Button variant="contained" className={classes.logout} color="secondary" onClick={handleLogout}>
                                Logout
                            </Button>
                        </div>
                    ) : (
                        <Button component={Link} to="/auth" variant="contained" color="primary">Sign in</Button>
                    )
                }
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
