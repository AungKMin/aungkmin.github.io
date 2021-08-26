import { makeStyles } from "@material-ui/core";
import { LIGHTGRAY, DARKGRAY, LIGHTBLUE, DARKBLUE, SEMIBLUE, SEMIGRAY, ICONGRAY } from "../../constants/constants";

export default makeStyles((theme) => ({ 

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
            height: '76%', // 100% - 10%[the top margin] - 14%[the bottom icons bar]  
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