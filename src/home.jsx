import React from "react";
import Sidebar from "./sidebar";
import Chats from "./chat";

const Home= () =>{
    return(
        <div className="home">
            <div className="container">
                <Sidebar />
                <Chats />
            </div>
        </div>
    )
}

export default Home;