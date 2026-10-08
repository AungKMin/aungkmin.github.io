import React from 'react';
import {Grid} from '@mui/material';
import {makeStyles} from 'tss-react/mui';

import Project from './Project.jsx'; 
import { projectsArray } from '../../data';
import { SEMIGRAY } from '../../constants/constants';

const useStyles = makeStyles()((theme) => ({

    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor: SEMIGRAY
    },

    toolbarHeight: theme.mixins.toolbar,

}));

export default (props) => { 

    const { classes } = useStyles();

    return ( 
      <main className={classes.content}>
        <div className={classes.toolbarHeight} />
        <Grid container spacing={1}>
            {
                projectsArray.map((item, index) => (
                        <Grid key={item.title} size={{ xs: 12, sm: 12, md: 6, lg: 3 }}>
                            <Project
                                title = {item.title}
                                description = {item.description}
                                technologies = {item.technologies}
                                links = {item.links}
                                points = {item.points}
                                img = {`${import.meta.env.BASE_URL}images/${item.img}`}
                            />
                        </Grid>
                    )
                )
            }
        </Grid>
      </main>
    )
}
