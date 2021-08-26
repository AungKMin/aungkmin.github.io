import {makeStyles} from '@material-ui/core';

import { DARKBLUE, LIGHTBLUE, LIGHTGRAY, DARKGRAY, SEMIBLUE, SEMIGRAY } from '../../constants/constants.js';

export default makeStyles((theme) => ({
        content: {
            flexGrow: 1,
            height: `calc(99vh - ${theme.mixins.toolbar.minHeight}px)`,
            backgroundColor: LIGHTGRAY
        },

        toolbarHeight: theme.mixins.toolbar,

        // box containing everything
        container: { 
            display: 'flex',
            alignItems: 'center',
            height: '100%', 
            backgroundColor: SEMIGRAY,
            [theme.breakpoints.down('md')]: {  // making content start at top instead of middle
                alignItems: 'start',
                marginTop: theme.spacing(3),
            },
        },

        "@media only screen and (max-height: 550px)": { // to prevent part of the text box from going into navbar when the screen is too short
            container: { 
                alignItems: 'start',
            }
        },

        // box containing profile pic and text
        aboutBox: { 
            width: '100%',
            // height: '50%',
            // overflow: 'overlay',
            display: 'flex',
            // alignItems: 'stretch',
            flexFlow: 'no-wrap',
            [theme.breakpoints.down('md')]: { // let the text box wrap down if the screen is small
                flexFlow: 'wrap',
            },
        },

        // box with about profile pic
        profileBox: { 
            backgroundColor: LIGHTGRAY,
            // height: 568,
            height: 500,
            flexShrink: 0,
            [theme.breakpoints.down('md')]: { // make the profile pic box span the screen and let it shrink to fit smaller screen 
                flexShrink: 1, 
                width: '100%', 
                display: 'flex',
                justifyItems: 'center',
            }
        },

        // actual profile pic
        profileImage: { 
            height: '100%',
            [theme.breakpoints.down('md')]: { // center profile image if screen is small
                marginLeft: 'auto',
                marginRight: 'auto'
            }
        },

        // box with about text
        textBox: { 
            backgroundColor: LIGHTGRAY,
            height: 'auto',
            flexGrow: 1,
            flexShrink: 1,
            position: 'relative',
            // padding: '1.5rem 2.25rem', 
            [theme.breakpoints.down('md')]: { // make the text box span the entire screen and reduce padding if screen is small
                width: '100%',
                // padding: '0.5rem, 0.75rem'
            },
            display: 'flex',
            flexDirection: 'column',
        },

        // container with the introduction, text, button
        initialBox: { 
            margin: '1.5rem 2.25rem 1.5rem 2.25rem',
            backgroundColor: LIGHTGRAY,
            // marginBottom: '0', 
            [theme.breakpoints.down('md')]: { // make the text box span the entire screen and reduce padding if screen is small
                margin: '0.5rem, 0.75rem'
            },
        },

        // introduction text
        introduction: { 
            color: DARKBLUE,
            fontSize: '1.8rem',
        },

        // detaiiled text
        text: { 
            marginTop: '1.5rem',
            fontSize: '1rem',
        },

        button: { 
            backgroundColor: DARKBLUE,
            color: LIGHTGRAY,
            marginTop: '2rem',
            '&:hover': { 
                backgroundColor: SEMIBLUE
            }
        },

        // for icons that are img tags
        imgIcon: { 
            width: 28,
        },

        // container for link bar (necessary to fix resizing error for small screens)
        linkBarContainer: { 
            marginTop: 'auto',
            width: '100%',
            backgroundColor: 'pink'
        },

        // container containing the links
        linkBar: { 
            display: 'flex',
            flexFlow: 'wrap',
            backgroundColor: LIGHTGRAY,
            padding: '1.5rem 2.25rem', 
            [theme.breakpoints.down('md')]: { // make the text box span the entire screen and reduce padding if screen is small
                margin: '0.5rem, 0.75rem'
            },
            '& > *': { 
                marginLeft: '0.5rem',
                marginRight: '0.5rem'
            },
        },

        // containers containing the link text and icon
        link: { 
            textDecoration: 'none',
            color: 'inherit',
            display: 'flex',
            alignItems: 'center'
        },

    })
)