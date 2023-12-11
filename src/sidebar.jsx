import React from "react";
import Navbar from "./navbar";
import Search from "./search";
import Chat from "./chats";
const Sidebar= () =>{
    return(
        <div className="sidebar">
            <Navbar />
            <Search />
            <Chat />
        </div>
    )
}

export default Sidebar;