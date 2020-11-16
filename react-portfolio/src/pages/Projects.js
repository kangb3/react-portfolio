import React from 'react';
import Carousel from '../components/Carousel';
import Jumbo from '../components/Jumbo';

function Project(props){
    //console.log(props)

    return(
        <div>

            <Jumbo title={props.title}  />
            <Carousel />

        </div>
    );

}

export default Project;
