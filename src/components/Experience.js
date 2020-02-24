import React from 'react';
import { Grid, Cell } from 'react-mdl';
function Experience(props) {
    return (
        <div>
            <Grid>
                <Cell col={4}>
                    <p>{props.startYear}-{props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{ marginTop: '0px' }}>{props.JobName}</h4>
                    <p>{props.JobDescription}</p>
                </Cell>
            </Grid>
        </div>
    )
}
export default Experience;