import React from 'react';
import {useSpring, animated } from 'react-spring';
function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <div>
            <animated.div className="b-card-info" style={style}>
                <p className="b-card-title">{props.title}</p>
                <p className="b-card-sub-title">{props.subTitle}</p>
                <a href ={props.repoLink} target="_blank" rel="noopener noreferrer">Repo </a>
                <a href ={props.link} target="_blank" rel="noopener noreferrer">Application</a>
            </animated.div>
        </div>
    )
}

export default CardInfo;