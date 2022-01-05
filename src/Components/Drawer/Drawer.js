import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core';
import { useLocation } from 'react-router-dom';
// icons
import MailIcon from '@material-ui/icons/MailRounded';
import MenuIcon from '@material-ui/icons/Menu';
import DescriptionIcon from '@material-ui/icons/Description';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import DevpostIcon from '../../images/devpost.png'

import { DRAWERWIDTH, DARKBLUE, LIGHTGRAY } from '../../constants/constants';

// import useStyles from './styles.js';

const useStyles = makeStyles((theme) => ({ 
  drawer: { 
      [theme.breakpoints.up('sm')]: { 
          width: DRAWERWIDTH,
          flexShrink: 0,
      },
  },
  
  appBar: { 
      [theme.breakpoints.up('sm')]: { 
          width: `calc(100% - ${DRAWERWIDTH}px)`,
          marginLeft: DRAWERWIDTH,
      },
      backgroundColor: DARKBLUE,
      color: LIGHTGRAY,
  },

  menuButton: { 
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: { 
          display: 'none'
      },
  }, 

  toolbarHeight: theme.mixins.toolbar,

  drawerPaper: { 
      width: DRAWERWIDTH,
      backgroundColor: LIGHTGRAY,
  },

  drawerNameBox: { 
      padding: theme.spacing(2),
      paddingLeft: theme.spacing(3),
      fontSize: '1rem'
  },

  drawerFirstName: { 
      color: DARKBLUE,
      fontSize: '1.8rem',
  },
  
  drawerLastName: { 
      color: DARKBLUE, 
      fontWeight: 'bold',
      fontSize: '1.8rem',
  },

  icon: {
      minWidth: 40,
  },

  item: { 
      paddingLeft: 35,
  },

  drawerContentBox: { 
      overflow: 'hidden'
  },

  imgIcon: { 
      width: 25,
      maxHeight: 25,
  },

  link: { 
      textDecoration: 'none',
      color: 'inherit',
  },

  content: {
      flexGrow: 1,
      padding: theme.spacing(3),
  },
}));


export default (props) => { 

  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false); // drawer open or closed for mobile

  // Handler for drawer opening and closing
  const handleDrawerToggle = () => { 
    setMobileOpen(!mobileOpen);
  }

  // the components to be contained in drawer
  const drawerContents = (
    <div className={classes.drawerContentBox}>
      <Link to="/about" className={classes.link}>
        <div className={classes.drawerNameBox}>
          <Typography variant="h5" className={classes.drawerFirstName}>Aung Khant</Typography>
          <Typography variant="h5" className={classes.drawerLastName}>Min</Typography>
          <Typography variant="p">Software Developer</Typography>
        </div>
      </Link>
      <List>
        <Link className={classes.link} to="/about">
          <ListItem className={classes.item} button>
            <ListItemIcon className={classes.icon} button><AccountCircleIcon/></ListItemIcon>
            <ListItemText primary={"About"}/>
          </ListItem>
        </Link>
        <Link className={classes.link} to="/projects">
          <ListItem className={classes.item} button>
            <ListItemIcon className={classes.icon} button><SettingsIcon/></ListItemIcon>
            <ListItemText primary={"Projects"}/>
          </ListItem>
        </Link>
      </List>
      <Divider/>
      <List>
        <a className={classes.link} target="_blank" href="https://www.linkedin.com/in/aung-khant-min/">
        <ListItem className={classes.item} button>
          <ListItemIcon className={classes.icon} button><LinkedInIcon/></ListItemIcon>
          <ListItemText primary={"Linkedin"}/>
        </ListItem>
        </a>
        <a className={classes.link} target="_blank" href="https://drive.google.com/file/d/1rcfbY0dtadCyouyKBviOY1M45z5qhCPx/view?usp=sharing">
        <ListItem className={classes.item} button>
          <ListItemIcon className={classes.icon} button><DescriptionIcon/></ListItemIcon>
          <ListItemText primary={"Resume"}/>
        </ListItem>
        </a>
        <a className={classes.link} target="_blank" href="https://github.com/AungKMin">
        <ListItem className={classes.item} button>
          <ListItemIcon className={classes.icon} button><GitHubIcon/></ListItemIcon>
          <ListItemText primary={"GitHub"}/>
        </ListItem>
        </a>
        <a className={classes.link} target="_blank" href="https://devpost.com/AungKMin">
        <ListItem className={classes.item} button>
          <ListItemIcon className={classes.icon} button><img src={DevpostIcon} className={classes.imgIcon}/></ListItemIcon>
          <ListItemText primary={"Devpost"}/>
        </ListItem>
        </a>
        <a className={classes.link} target="_blank" href="mailto:aungkhantmin2014@gmail.com">
        <ListItem className={classes.item} button>
          <ListItemIcon className={classes.icon} button><MailIcon/></ListItemIcon>
          <ListItemText primary={"Email"}/>
        </ListItem>
        </a> 
      </List>
    </div>
  );

  return (
    <div>
      <CssBaseline />

      {/*Navbar*/}
      <AppBar position="fixed" className={classes.appBar} elevation={2}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon/>
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            {
              useLocation().pathname === '/about' ? <AccountCircleIcon/> : useLocation().pathname === '/projects' ? <SettingsIcon/> : null
            }
          </IconButton>
          <Typography variant="h6" noWrap>
            {`${useLocation().pathname.charAt(1).toUpperCase()}${useLocation().pathname.slice(2)}`}
          </Typography>
        </Toolbar>
      </AppBar>

      {/*Navigation Drawer*/}
      <nav className={classes.drawer} aria-label="navigation">

        {/*Temporary Drawer for mobile*/}
        <Hidden smUp implementation="js">
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
            elevation={0}
          >  
            {drawerContents}
          </Drawer>
        </Hidden>
        
        {/*Permanent Drawer for desktop*/}
        <Hidden xsDown implementation="js">
            <Drawer
              variant="permanent"
              classes = {{
                paper: classes.drawerPaper
              }}
              open
            >
              {drawerContents}
            </Drawer>
        </Hidden>
      </nav>
    </div>
  )



}
