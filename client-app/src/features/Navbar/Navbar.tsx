import {
  AppBar,
  Avatar,
  Button,
  createStyles,
  makeStyles,
  Theme,
  Toolbar,
  Typography
} from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { useAppDispatch } from 'app/hooks';
import { decode } from 'jsonwebtoken';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { logOut } from '../Auth/authSlice';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,

      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
      avatar: {
        backgroundColor: '#B381B3',
        marginLeft: theme.spacing(1)

      }
    })
  );

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const getLocalStorageUser = () => {
    return localStorage.getItem('profile')
      ? JSON.parse(localStorage.getItem('profile') || '')
      : null;
  };

  const [user, setUser] = useState(getLocalStorageUser());

  const handleClickAvatar = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const logout = () => {
    dispatch(logOut());
    closeUserMenu()
    history.push('/');
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken: any = decode(token);
      if (decodedToken && decodedToken.exp * 1000 < new Date().getTime())
        logout();
    }

    setUser(getLocalStorageUser());
  }, [location, user?.token]);

  const renderLogInButton = () => {
    if (!user || !user?.token) {
      return (
          <Button color="inherit" onClick={() => history.push('/auth')}>Login</Button>
      )
    }
    return
  }

  const closeUserMenu = () => {
    setAnchorEl(null)
  }

  const renderAvatar = () => {
    if (user && user?.result) {
      const {name, imageUrl} = user.result
      return (
        <>
          <Typography variant="h6" >{name}</Typography>
          <Avatar onClick={(event) => handleClickAvatar(event as React.MouseEvent<HTMLElement>)} aria-controls="user-menu" className={classes.avatar} alt={name} src={imageUrl} >{name.charAt(0).toUpperCase()}</Avatar>
          <Menu
        id="user-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeUserMenu}
      >
        <MenuItem onClick={closeUserMenu}>Profile</MenuItem>
        <MenuItem onClick={closeUserMenu}>My account</MenuItem>
        <MenuItem onClick={() => logout()}>Logout</MenuItem>
      </Menu>
        </>
      )
    }
    return
  }

  return (
    <div className={classes.root}>
      <AppBar position="absolute" color="inherit">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            LocknLock Mall
          </Typography>
          {renderLogInButton()}
          {renderAvatar()}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
