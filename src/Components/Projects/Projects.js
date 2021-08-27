import React from 'react';
import {Grid, makeStyles} from '@material-ui/core';

import Project from './Project.js'; 
import { projectsArray } from '../../data';
import { SEMIGRAY } from '../../constants/constants';

// images
import devpost from '../../images/devpost.png';

// import useStyles from './styles.js';

const useStyles = makeStyles((theme) => ({

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor: SEMIGRAY
    },

    toolbarHeight: theme.mixins.toolbar,

}));

export default (props) => { 

    const classes = useStyles();

    return ( 
      <main className={classes.content}>
        <div className={classes.toolbarHeight} />
        <Grid container spacing={1}>
            {
                projectsArray.map((item, index) => (
                        <Grid item xs={12} sm={12} md={6} lg={3}>
                            <Project
                                title = {item.title}
                                description = {item.description}
                                technologies = {item.technologies}
                                links = {item.links}
                                points = {item.points}
                                img = {process.env.PUBLIC_URL + `/images/${item.img}`}
                            />
                        </Grid>
                    )
                )
            }
        </Grid>
      </main>
    )
}