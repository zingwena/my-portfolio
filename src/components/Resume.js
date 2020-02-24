import React from 'react';
import { Grid, Cell } from 'react-mdl';
import PersonalProf from './PersonalProf.js';
import Experience from './Experience.js';
import Skills from './Skills.js'
import Education from './Education';
function Resume() {

    return (
        <div>
            <Grid>
                <Cell col={4}>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src={require('./img/Warren.png')}
                            alt="avatar"
                            className="avatar-img"
                            style={{ height: '200px' }}
                        ></img>
                    </div>
                    <h2 style={{ paddingTop: '2em' }}>Warren Zingwena</h2>
                    <h4 style={{ color: 'grey' }}>Programmer</h4>
                    <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
                    <p>Individual with well-honed skills
                        in computer science and technical expertise in
                        the support of specialized programming projects using
                        web based and client server tools. Interested in the job
                        of a Software Developer. Coming with strong ability
                         to design, develop, and maintain software applications.
          </p>
                    <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />
                    <h5>Address</h5>
                    <p>119 FairView Estate, Wastegate Harare</p>
                    <h5>Phone</h5>
                    <p>{+263} 78 281 3035</p>
                    <h5>Email</h5>
                    <p>warrenzingwena@gmail.com</p>
                    <h5>Phone</h5>
                    <p>mywebsite.com</p>
                    <hr style={{ borderTop: '3px solid #833fb2', width: '100%' }} />

                </Cell>
                <Cell className="resume-right-col" col={8}>
                    <h2>Personal Details</h2>
                    <PersonalProf
                    DOB="Date of Birth"
                    dateOfBirth="02 April 1997"
                    Gender="Gender"
                    genderId="Male"
                    citizen="Citizenship"
                    citizenship="Zimbabwean"
                    id="National Identity"
                    NationalId="13-270307 W13"
                    marital="Marital Status"
                    MariStatus="Single"
                    language="Language"
                    lang="English and Shona"

                    />
                 <hr style={{borderTop:'3px solid #e22947'}}/>
                    <h2>Education</h2>
                   <Education
                   degreeId="Degree"
                   degree="Bachelor of Business and Computer Science (University of Zimbabwe)"
                   highSchoolId="Advanced Level"
                   highSchool="Mathematics A, Economics A , Business Studies A (Mafumise High School)"
                   ordnarySchoolId="Ordinary level"
                   ordnarySchool="4A's , 3B's ,1C (Ratelshoek High school)"
                   
                   />
                  <hr style={{borderTop:'3px solid #e22947'}}/>
                  <h2>Experience</h2>
                  <Experience
                  startYear={2018}
                  endYear={2018}
                  JobName="Till Operator"
                  JobDescription="I was a till operator and a Mechandaiser at Spar Supermarket.
                  I also specialise in hot and cold Deli"
                  />

                <Experience
                  startYear={2019}
                  endYear={2020}
                  JobName="Software Developer Inten"
                  JobDescription="I was a software developer intern at Health Informatics and Advancement Center(HITRAC)
                  .I was specialising in both Web and mobile Application"
                  />

                <hr style={{borderTop:'3px solid #e22947'}}/>
                <h2>Skills</h2>
                <Skills 
                Skills="Spring"
                progress={100}
                />
                <Skills 
                Skills="HTML/CSS"
                progress={100}
                />
                 <Skills 
                Skills="React"
                progress={95}
                />
               
                <Skills 
                Skills="JAVA"
                progress={90}
                />
                <Skills 
                Skills="JavaScript"
                progress={80}
                />
                <Skills 
                Skills="Flutter/Dart"
                progress={80}
                />
               
   
                </Cell>
            </Grid>
        </div>
    )
}
export default Resume;