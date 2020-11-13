import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { DiRuby } from "react-icons/di";
import { Link } from 'react-router-dom';
// import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  export default function ButtonAppBar() {
    const classes = useStyles();
  
    return (
    <div className='nav'>
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                <strong> <DiRuby color='lightblue' size="90" /> CHAT <span className></span> APP</strong> 
                </Typography>
                  <Link to="/Signup" className='text1'><strong>Create Account</strong></Link>
                {/* <Button color="inherit">Create Account</Button> */}
              </Toolbar>
            </AppBar>
          </div>
    </div>
      
    );
  }
