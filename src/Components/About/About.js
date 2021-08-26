import React from 'react';
import {Link} from 'react-router-dom';
import {Typography, Button, CardActions, IconButton} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import MailIcon from '@material-ui/icons/Mail';

import devpost from '../../images/devpost.png';
import profile from '../../images/profile.jpg';
import {introText} from '../../data';
import useStyles from './styles.js';


export default () => { 

    const classes = useStyles();

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
                            <div className={classes.linkBar} disableSpacing={false}>
                                {
                                    Object.entries(introText.links).map(([key, value], index) => ( 
                                            (key === 'Linkedin') ? (<a href={`${value}`} target="_blank" className={classes.link}> <IconButton> <LinkedInIcon/> </IconButton> <Typography>Linkedin</Typography> </a>) :
                                            (key === 'Resume') ? (<a href={`${value}`} target="_blank" className={classes.link}> <IconButton> <DescriptionIcon/> </IconButton> <Typography>Resume</Typography> </a>) :
                                            (key === 'GitHub') ? (<a href={`${value}`} target="_blank" className={classes.link}> <IconButton> <GitHubIcon/> </IconButton> <Typography>GitHub</Typography> </a>) :
                                            (key === 'Devpost') ? (<a href={`${value}`} target="_blank" className={classes.link}> <IconButton> <img className={classes.imgIcon} src={devpost}/> </IconButton> <Typography>Devpost</Typography> </a>) : 
                                            (<a href={`${value}`} target="_blank" className={classes.link}> <IconButton> <MailIcon/> </IconButton>  <Typography>Email</Typography> </a>) 
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