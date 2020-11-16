import React from 'react';
import Content from '../components/Content';
import Jumbo from '../components/Jumbo';

function About(props){

    return(
        <div>
            <Jumbo title={props.title} />

            <Content>
                <p>My name is Baldeep Kang. Currently, I am a System Administrator for the State of Washington.</p>

                <p>I graduated from University of Washington Tacoma with Bachelors degree in information Technology.</p>

                <p>I am enrolled in Bootcamp offered by University of Washington. I want to gain new skills in order to advance my career.</p>
            </Content>
        </div>
    )

}

export default About;
