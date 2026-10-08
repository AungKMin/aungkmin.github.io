import React from 'react';
import {Link} from 'react-router-dom';
import {Typography, Button, CardActions, IconButton} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import MailIcon from '@mui/icons-material/Mail';

import devpost from '../../images/devpost.png';
import profile from '../../images/profile.jpg';
import {introText} from '../../data';
import useStyles from './styles.js';


export default () => { 

    const { classes } = useStyles();

    return ( 
        <main className={classes.content}>
            <div className={classes.toolbarHeight}/>
            <div className={classes.container}>
                <div className={classes.aboutBox}>
                    <div className={classes.profileBox}>
                        <img className={classes.profileImage} src={profile}/>
                    </div>
                    <div className={classes.textBox}>
                        <div className={classes.initialBox}>
                            <Typography component="h1" className={classes.introduction}>{introText.introduction}</Typography>
                            <Typography component="p" className={classes.text}>{introText.text}</Typography>
                            <Typography component="p" className={classes.text}>{introText.text2}</Typography>
                            <Typography component="p" className={classes.text}>{introText.text3}</Typography>
                            <Link style={{textDecoration: 'none'}} to="/projects"><Button className={classes.button}>See my projects!</Button></Link>
                        </div>
                        <div className={classes.linkBarContainer}>
                            <div className={classes.linkBar}>
                                {
                                    Object.entries(introText.links).map(([key, value], index) => ( 
                                            (key === 'Linkedin') ? (<a key={key} href={`${value}`} target="_blank" className={classes.link}> <IconButton> <LinkedInIcon/> </IconButton> <Typography>Linkedin</Typography> </a>) :
                                            (key === 'Resume') ? (<a key={key} href={`${value}`} target="_blank" className={classes.link}> <IconButton> <DescriptionIcon/> </IconButton> <Typography>Resume</Typography> </a>) :
                                            (key === 'GitHub') ? (<a key={key} href={`${value}`} target="_blank" className={classes.link}> <IconButton> <GitHubIcon/> </IconButton> <Typography>GitHub</Typography> </a>) :
                                            (key === 'Devpost') ? (<a key={key} href={`${value}`} target="_blank" className={classes.link}> <IconButton> <img className={classes.imgIcon} src={devpost}/> </IconButton> <Typography>Devpost</Typography> </a>) : 
                                            (<a key={key} href={`${value}`} target="_blank" className={classes.link}> <IconButton> <MailIcon/> </IconButton>  <Typography>Email</Typography> </a>) 
                                        )   
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
