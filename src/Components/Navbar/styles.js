import { makeStyles } from '@material-ui/core/styles';
import { DRAWERWIDTH } from '../../constants/constants';

export default makeStyles((theme) => ({ 
    appBar: { 
        [theme.breakpoints.up('sm')]: { 
            width: `calc(100% - ${DRAWERWIDTH}px)`,
            marginLeft: DRAWERWIDTH,
        },
    },

    menuButton: { 
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: { 
            display: 'none'
        },
    }, 
}));