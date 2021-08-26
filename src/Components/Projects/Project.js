import React, {useState} from 'react';
import clsx from 'clsx';
import {Card, CardMedia, CardContent, CardActions, Collapse, Typography, IconButton, List, ListItem, ListItemIcon, ListItemText, Chip} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import devpost from '../../images/devpost.png';

import useStyles from './styles.js';

export default (props) => { 

    const classes = useStyles();

    const [isExpanded, setIsExpanded] = useState(false);

    // handle when user clicks expand button
    const handleOpen = function () { 
        setIsExpanded(!isExpanded);
    }

    return (
        <Card className={classes.projectBox}>
            <CardMedia 
                className={classes.media}
                image={props.img}
                title="Project image"
                classes={{root: classes.mediaImage}}
            />
            <CardContent className={classes.cardContent}>
                <div className={classes.chipContainer}>
                    {
                        props.technologies.map((item) => ( 
                            <Chip size="small" label={item} className={classes.chip}/>
                        ))
                    }
                </div>
                <Typography gutterBottom variant="h5" component="h2" className={classes.projectTitle}>
                    {props.title}
                </Typography> 
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>
                <div className={classes.spaceFill}> </div>
            </CardContent>
            <CardActions className={classes.cardActions} disableSpacing>
                {
                    Object.entries(props.links).map(([key, value], index) => ( 
                            (key === 'GitHub') ? (<a href={`${value}`} target="_blank"> <IconButton> <GitHubIcon/> </IconButton> </a>) :
                            (key === 'Devpost') ? (<a href={`${value}`} target="_blank"> <IconButton> <img className={classes.imgIcon} src={devpost}/> </IconButton> </a>) : 
                            (<a href={`${value}`} target="_blank"> <IconButton> <LinkIcon/> </IconButton> </a>)
                        )   
                    )
                }
                <IconButton aria-label="more information" className={isExpanded ? classes.expandButtonExpanded : classes.expandButtonUnexpanded} onClick={handleOpen}>
                    <MoreVertIcon/>
                </IconButton>
            </CardActions>
            <CardContent className={clsx({[classes.expandedContent]: true, [classes.expandedContentShow]: isExpanded, [classes.expandedContentHide]: !isExpanded})}>
               <div className={classes.chipContainer}>
                    {
                        props.technologies.map((item) => ( 
                            <Chip size="small" label={item} className={classes.chip}/>
                        ))
                    }
                </div>
                <Typography gutterBottom variant="h5" component="h2" className={classes.projectTitle}>
                    {props.title}
                </Typography> 
                <List className={classes.list}>
                    {
                        props.points.map((item) => ( 
                            <ListItem className={classes.listItem}>
                                <ListItemIcon className={classes.dotIcon}><span className={classes.dot}></span></ListItemIcon>
                                <ListItemText primary={<Typography className={classes.listText}>{item}</Typography>}/>
                            </ListItem>
                        ))
                    }
                </List>
            </CardContent>

        </Card>
    )
}