import React, {useState} from 'react';
import clsx from 'clsx';
import {Card, CardMedia, CardContent, CardActions, Collapse, Typography, IconButton, List, ListItem, ListItemIcon, ListItemText, Chip, makeStyles} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import devpost from '../../images/devpost.png';

import { LIGHTGRAY, DARKGRAY, LIGHTBLUE, DARKBLUE, SEMIBLUE, SEMIGRAY, ICONGRAY } from "../../constants/constants";
// import useStyles from './styles.js';


const useStyles = makeStyles((theme) => ({ 

    chip: { 
        backgroundColor: `${DARKBLUE}!important`,
        color: `${LIGHTGRAY}!important`
    },

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor: SEMIGRAY
    },

    toolbarHeight: theme.mixins.toolbar,

    // the container holding the project
    projectBox: { 
        position: 'relative',
        margin: theme.spacing(1),
    },

    // button to expand the expanded content
    expandButtonUnexpanded: { 
        marginLeft: 'auto',
        color: ICONGRAY
    },

    // expand button when expanded
    expandButtonExpanded: { 
        marginLeft: 'auto',
        color: DARKBLUE,
    },

    // for icons that are img tags
    imgIcon: { 
        width: 28,
    },
    
    media: { 
        height: 0,
        // paddingTop: '56.25%',
        paddingTop: '56.25%',
    },

    // image inside media
    mediaImage: { 
        objectFit: 'contain',           
    },
    
    projectTitle: { 
        color: DARKBLUE,
    },
    
    cardContent: { 
        backgroundColor: LIGHTGRAY  
    },
    
    cardActions: { 
        backgroundColor: LIGHTGRAY  
    },
    
    // container for the chips
    chipContainer: { 
        marginBottom: theme.spacing(0.7),
        '& > *': {
            marginLeft: 0,
            marginRight: theme.spacing(0.5),
            marginBottom: theme.spacing(0.5)
        },
    },
    
    // expanded content
    expandedContent: { 
        position: 'absolute',
        width: '100%',
        backgroundColor: LIGHTGRAY,
    },
    
    // thee expanded content when hidden
    expandedContentHide: { 
        opacity: 0,
        visibility: 'hidden',
        bottom: '14%', // the icons bar is 14%
        width: '100%',
        height: 0,
        filter: `drop-shadow(.5rem .5rem 1rem ${DARKGRAY})`,
        transition: '300ms ease-out',
    },
    
    // the expanded content when visible 
    expandedContentShow: { 
        bottom: '14%', 
        height: '85%', // 100% - 1%[the top margin] - 14%[the bottom icons bar]  
        transition: 'height 300ms ease-out',
    },
    
    dot: { 
        height: '0.5rem',
        width: '0.5rem',
        backgroundColor: DARKBLUE,
        borderRadius: '50%',
        display: 'inline-block',
        marginRight: '0.5rem',
    }, 
    
    // ListItemIcon that holds the dot in the list 
    dotIcon: { 
        minWidth: 25
    },
    
    // list inside expanded content
    list: { 
        paddingTop: 0,
    },
    
    // list items in expanded content
    listItem: { 
        padding: theme.spacing(0.5)
    },
    
    listText: { 
        fontSize: '0.9rem',
    },

    // take some space for very thin screens (galaxy fold)
    '@media only screen and (max-width: 300px)': { 
        spaceFill: { 
            height: 150
        }
    },
    })
)


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
                            <Chip className={classes.chip} size="small" label={item}/>
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