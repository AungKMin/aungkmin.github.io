import React from 'react';
import {Typography, Grid} from '@material-ui/core';

import useStyles from './styles.js';
import Project from './Project.js'; 
import { projectsArray } from '../../data';

// images
import devpost from '../../images/devpost.png';

export default (props) => { 

    const classes = useStyles();

    return ( 
      <main className={classes.content}>
        <div className={classes.toolbarHeight} />
        <Grid container spacing={1}>
            {
                projectsArray.map((item, index) => (
                        <Grid item xs={12} sm={6} lg={3}>
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