import React from 'react';
import Story from './Story';
import './StoryList.css';

function StoryList({stories}){
    console.log(stories);
    const storyItems = stories.map((story)=>{
        return <Story key={story.id} story={story}/>
    })

    return(
        <div>
            <ul>
                {storyItems}
            </ul>
        </div>
    )

}

export default StoryList