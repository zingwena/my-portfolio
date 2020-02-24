import React from 'react';
import { Grid, Cell } from 'react-mdl';
function PersonalProf(props) {
    return (
        <div>
            <Grid>
                <Cell col={4}>
                    <p>{props.DOB}</p>
                    <p>{props.Gender}</p>
                    <p>{props.citizen}</p>
                    <p>{props.id}</p>
                    <p>{props.marital}</p>
                    <p>{props.language}</p>
                </Cell>
                <Cell col={8}>
                    <p style={{ marginTop: '0px',fontSize:'1.5em' }}>{props.dateOfBirth}</p>
                    <p style={{ marginTop: '0px',fontSize:'1.5em' }}>{props.genderId}</p>
                    <p style={{ marginTop: '0px',fontSize:'1.5em' }}>{props.citizenship}</p>
                    <p style={{ marginTop: '0px',fontSize:'1.5em' }}>{props.NationalId}</p>
                    <p style={{ marginTop: '0px',fontSize:'1.5em' }}>{props.MariStatus}</p>
                    <p style={{ marginTop: '0px',fontSize:'1.5em' }}>{props.lang}</p>
                    
                </Cell>
            </Grid>
        </div>
    )
}
export default PersonalProf;