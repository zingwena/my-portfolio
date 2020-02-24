import React from 'react';
import { Grid } from 'react-mdl';
function Aboutme() {

    return (
        <div >
            <Grid style={{ paddingLeft: '10em', paddingTop: '3em'}}>
                <h2 style={{ fontSize: '5em', fontFamily:'Lobster' }}>About Me</h2>
                <hr style={{ borderTop: '3px dotted black', width: '80%'}} />
                <p style={{  width: '80%' , fontSize:'1.5em' , fontStyle:'italic', fontWeight:'200'}}>
                I am a full-stack Web Developer and Mobile developer,
                currently living Harare ,Zimbabwe. I have a Bachelor of Business Studies and Computer Science from University of Zimbabwe.
                 I am self-motivated and constantly learning and exploring new technologies and techniques. 
                I am very passionate about solving problems, and always strive to better my self as a software developer.
                As a freelancer I'm fully dedicated towards bringing value to my clients.
                 My focus is on delivering targeted solutions to lower the cost and drive my client's mission success.
</p>
            </Grid>
        </div>
    )
}
export default Aboutme;