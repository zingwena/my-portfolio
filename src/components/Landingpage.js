import React from 'react';
import { Grid, Cell } from 'react-mdl';
function Landingpage() {
    return (
        <div style={{ width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid" >
                <Cell col={4}>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src={require('./img/Warren.png')}
                            alt="avatar"
                            className="avatar-img"
                            style={{ height: '200px' }}
                        ></img>
                    </div>
                    <h4 style={{ color: 'grey' }}>A full stack web and mobile developer!</h4>
                    <p style={{ color: 'grey' }}>Java|Spring | HTML/CSS| Bootstrap| Javascrpt| React| Flutter| MySql</p>
                </Cell>

                <Cell col={8}>
                    <div className="welcome-note">
                        <h1>Welcome to my Online Portfolio!</h1>
                    </div>
                    <hr style={{ borderTop: '3px dotted white', width: '100%', margin: 'auto' }} />
                    <div className="parafter-welcmnote">
                    <p>
                        I am a passionate web and mobile application developer capable to
                        create recent mobile and web solutions for any communicational issue.I love to design clean
                        ,smart and effective softwares.Most of my projects focuses on addressing
                        workplace-related problems throgh web and mobile applicatiob design
                    </p>
                    </div>
                   
                    <div className="banner-text">
                    <p>
                        On this website you are able to check out my work,skills and education , 
                        also feel free to download my CV here.And follow me on my social links below
                    </p>
                        <div className="social-links">
                            {/* LinkedIn*/}
                            <a href="https://www.linkedin.com/in/warren-zingwena-70077b172/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>
                            {/* Facebook*/}
                            <a href="https://www.facebook.com/warren.zingwena.7" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                            </a>

                            {/* Twitter*/}
                            <a href="https://twitter.com/7740Warren" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-twitter-square" aria-hidden="true"></i>
                            </a>

                            {/* Youtube*/}
                            <a href="https://www.youtube.com/channel/UCqARYMMStt2l1Te6UFvpycA/featured?view_as=subscriber" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true"></i>
                            </a>
                    
                        </div>
                       
                    </div>
                
                </Cell>

            </Grid>
        </div>
    )
}
export default Landingpage;