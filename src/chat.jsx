import React from "react";
import Messages from "./messages";
import Input from "./input";

function Chats(){
    return <div className="chats">
        <div className="chatinfo">
            <span>jundsde</span>
        </div>
        <Messages />
        <Input />
    </div>
}
export default Chats;