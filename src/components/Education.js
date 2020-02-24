import React from 'react';
import { Grid, Cell } from 'react-mdl';
function Education(props){
    return(
<div>
    <Grid>
        <Cell col={4}>
        <p>{props.degreeId}</p>
        <p>{props.highSchoolId}</p>
        <p>{props.ordnarySchoolId}</p>
        </Cell>
        <Cell col={8}>
        <p style={{fontSize:'1.2em'}}>{props.degree}</p>
        <p style={{fontSize:'1.2em'}}>{props.highSchool}</p>
        <p style={{fontSize:'1.2em'}}>{props.ordnarySchool}</p>
        </Cell>
    </Grid>
</div>
    )
}
export default Education;