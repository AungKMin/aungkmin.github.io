import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import {makeStyles} from 'tss-react/mui';
import { useLocation } from 'react-router-dom';
// icons
import MailIcon from '@mui/icons-material/MailRounded';
import MenuIcon from '@mui/icons-material/Menu';
import DescriptionIcon from '@mui/icons-material/Description';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import DevpostIcon from '../../images/devpost.png'

import { DRAWERWIDTH, DARKBLUE, LIGHTGRAY } from '../../constants/constants';

const useStyles = makeStyles()((theme) => ({ 
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

  const { classes } = useStyles();

  const theme = useTheme();
  const location = useLocation();

  // Replaces the removed <Hidden implementation="js"> component: the drawers are
  // mounted conditionally at the same 600px boundary as before.
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

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
          <ListItem disablePadding>
            <ListItemButton className={classes.item}>
              <ListItemIcon className={classes.icon}><AccountCircleIcon/></ListItemIcon>
              <ListItemText primary={"About"}/>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link className={classes.link} to="/projects">
          <ListItem disablePadding>
            <ListItemButton className={classes.item}>
              <ListItemIcon className={classes.icon}><SettingsIcon/></ListItemIcon>
              <ListItemText primary={"Projects"}/>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider/>
      <List>
        <a className={classes.link} target="_blank" href="https://www.linkedin.com/in/aung-khant-min/">
        <ListItem disablePadding>
          <ListItemButton className={classes.item}>
            <ListItemIcon className={classes.icon}><LinkedInIcon/></ListItemIcon>
            <ListItemText primary={"Linkedin"}/>
          </ListItemButton>
        </ListItem>
        </a>
        <a className={classes.link} target="_blank" href="https://drive.google.com/file/d/1rcfbY0dtadCyouyKBviOY1M45z5qhCPx/view?usp=sharing">
        <ListItem disablePadding>
          <ListItemButton className={classes.item}>
            <ListItemIcon className={classes.icon}><DescriptionIcon/></ListItemIcon>
            <ListItemText primary={"Resume"}/>
          </ListItemButton>
        </ListItem>
        </a>
        <a className={classes.link} target="_blank" href="https://github.com/AungKMin">
        <ListItem disablePadding>
          <ListItemButton className={classes.item}>
            <ListItemIcon className={classes.icon}><GitHubIcon/></ListItemIcon>
            <ListItemText primary={"GitHub"}/>
          </ListItemButton>
        </ListItem>
        </a>
        <a className={classes.link} target="_blank" href="https://devpost.com/AungKMin">
        <ListItem disablePadding>
          <ListItemButton className={classes.item}>
            <ListItemIcon className={classes.icon}><img src={DevpostIcon} className={classes.imgIcon}/></ListItemIcon>
            <ListItemText primary={"Devpost"}/>
          </ListItemButton>
        </ListItem>
        </a>
        <a className={classes.link} target="_blank" href="mailto:aungkhantmin2014@gmail.com">
        <ListItem disablePadding>
          <ListItemButton className={classes.item}>
            <ListItemIcon className={classes.icon}><MailIcon/></ListItemIcon>
            <ListItemText primary={"Email"}/>
          </ListItemButton>
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
              location.pathname === '/about' ? <AccountCircleIcon/> : location.pathname === '/projects' ? <SettingsIcon/> : null
            }
          </IconButton>
          <Typography variant="h6" noWrap>
            {`${location.pathname.charAt(1).toUpperCase()}${location.pathname.slice(2)}`}
          </Typography>
        </Toolbar>
      </AppBar>

      {/*Navigation Drawer*/}
      <nav className={classes.drawer} aria-label="navigation">

        {/*Temporary Drawer for mobile*/}
        {isMobile && (
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
        )}
        
        {/*Permanent Drawer for desktop*/}
        {isDesktop && (
            <Drawer
              variant="permanent"
              classes = {{
                paper: classes.drawerPaper
              }}
              open
            >
              {drawerContents}
            </Drawer>
        )}
      </nav>
    </div>
  )



}
