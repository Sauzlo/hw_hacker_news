import React from 'react';
import './Story.css';

function Story({story}){

    return(
        <li>{story.title} <br></br>by {story.by}</li>
    )

}

export default Story;