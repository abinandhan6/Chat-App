import React from "react";

const Navbar= () =>{
    return(
        <div className="navbar">
            <span className="logo">Chat</span>
            <div className="user">
                <img src="https://thumbs.dreamstime.com/b/beautiful-golden-autumn-scenery-trees-golden-leaves-sunshine-scotland-united-kingdom-beautiful-golden-autumn-124278811.jpg" alt="" />
                <span>john</span>
                <button>sign in</button>
            </div>
        </div>
    )
}

export default Navbar;