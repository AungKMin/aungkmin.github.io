import { makeStyles } from '@material-ui/core/styles';
import { DRAWERWIDTH, DARKBLUE, LIGHTGRAY, LIGHTBLUE, SEMIBLUE } from '../../constants/constants';

export default makeStyles((theme) => ({ 
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