import React from "react";

const Search= () =>{
    return(
        <div className="search">
            <div className="searchform">
                <input type="text" placeholder="find name"></input>
            </div>
            <div className="userchat">
                <img src="https://thumbs.dreamstime.com/b/beautiful-golden-autumn-scenery-trees-golden-leaves-sunshine-scotland-united-kingdom-beautiful-golden-autumn-124278811.jpg" alt=""></img>
                <div className="userchatinfo">
                    <span>jane</span>
                </div>
            </div>
        </div>
    )
}

export default Search;