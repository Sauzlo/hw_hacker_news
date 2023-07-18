import React from 'react';

function FilterForm({handleFilterSubmit}){

    const handleSubmit = (event) =>{
        const result = event.target.value;
        handleFilterSubmit(result);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <input type="submit" value="Filter"/>
        </form>
    )

}

export default FilterForm;