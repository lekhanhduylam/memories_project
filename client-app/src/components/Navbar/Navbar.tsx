import { useEffect, useState } from 'react';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import useStyles from './style';
import memories from '../../images/memories.png';
import { Link } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';
import { decode } from 'jsonwebtoken';

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const getLocalStorageUser = () => {
    return localStorage.getItem('profile')
      ? JSON.parse(localStorage.getItem('profile') || '')
      : null;
  }

  const [user, setUser] = useState(getLocalStorageUser())

  const logout = () => {
    dispatch({ type: LOGOUT, data: null });
    history.push('/');
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken: any = decode(token);
      if (decodedToken && decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(getLocalStorageUser());
  }, [location, user?.token]);



  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        ></img>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.result.imageUrl}>
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
