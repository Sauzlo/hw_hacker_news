import React, {useState, useEffect} from 'react';
import StoryList from './StoryList';
import FilterForm from './FilterForm';

function MainContainer(){
    const [storyIds, setStoryIds] = useState([]);
    const [stories, setStories] = useState([]);

    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    useEffect(()=>{
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
            .then(res => res.json())
            .then(data => setStoryIds(data))
            console.log(storyIds);
    },[]);

    useEffect(()=>{
        if(storyIds){
            const slicedStories = storyIds.slice(0,10)
            const storyPromises = slicedStories.map(async (id)=>{
                console.log(id);
                const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
                return await res.json();
            });
            Promise.all(storyPromises)
            .then((data) => {
                setStories(data)
            });
        }
    },[storyIds]);

    const handleFilterSubmit = (filter) =>{
        const storiesToBeFiltered = stories;
        const filteredStories = storiesToBeFiltered.filter(story => story.title.includes(filter));
        setStories(filteredStories)
    }
    
    return(
        <div>
            <h2>Top 10 Hacker Stories</h2>
            <FilterForm handleFilterSubmit={handleFilterSubmit}/>
            <StoryList stories={stories}/>
        </div>
    )
    
}

export default MainContainer;