import { Avatar, Button, Container, Grid, Paper, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import useStyle from './style'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input'
import { GoogleLogin } from 'react-google-login'
import Icon from './Icon'
import { useDispatch } from 'react-redux'
import { AUTH, LOGOUT } from '../../constants/actionTypes'
import { useHistory } from 'react-router-dom'
import { signup, signin } from '../../actions/auth'

const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const Auth = () => {

    const [isShowPassword, setIsShowPassword] = useState(false)
    const [isSignup, setIsSignup] = useState(false)
    const [formData, setFormData] = useState(initialFormState)

    const classes = useStyle()
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isSignup) {
            dispatch(signup(formData, history))
        } else {
            dispatch(signin(formData, history))
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleShowPassword = () => {
        setIsShowPassword((prevValue) => !prevValue)
    }

    const switchMode = () => {
        setIsSignup((prevValue) => !prevValue)
    }

    const googleSuccess = async (res) => {
        const [result, token] = [res?.profileObj, res?.tokenId]

        try {
            dispatch({ type: AUTH, data: { result, token } })
            history.push('/')
        } catch (error) {
            console.error(error)
        }
    }

    const googleFailure = (error) => {
        console.error(error)
        console.log('Google sign in failure')
    }


    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First name" handleChange={handleChange} half />
                                    <Input name="lastName" label="Last name" handleChange={handleChange} half />

                                </>
                            )
                        }
                        <Input name="email" type="email" label="Email" handleChange={handleChange} />
                        <Input name="password" type={isShowPassword ? "text" : "password"} label="Password" handleChange={handleChange} handleShowPassword={handleShowPassword} />
                        {isSignup && <Input name="confirmPassword" handleChange={handleChange} type="password" label="Repeat password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin
                        clientId="638976598050-6g0kssomfsfttm3gfioaaf37a1gfco0o.apps.googleusercontent.com"
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        render={(renderProps) => (
                            <Button
                                variant="contained"
                                fullWidth
                                color="primary"
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className={classes.googleButton}
                                startIcon={<Icon />}
                            >
                                Google Sign In
                            </Button>
                        )} />
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth