import React, { useState } from "react";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "./firebase";
import { ref,uploadBytesResumable,getDownloadURL }from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { storage,db } from "./firebase";


const Register= ()=>{
    const [err,setErr]=useState(false)
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const displayname=e.target[0].value;
        const email=e.target[1].value;
        const password=e.target[2].value;
        const file=e.target[3].file[0];
    try{
        const res = createUserWithEmailAndPassword(auth, email, password);
        const storageRef = ref(storage, displayname);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            (error) => {
                setErr(true);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
                await updateProfile((await res).user,{
                displayname,
                photoURL: downloadURL,
            });
            await setDoc(doc(db, "users",res.user.uid),{
            uid: res.user.uid,
            displayname,
            email,
            photoURL: downloadURL,
        });
    });
}
);
}catch(err){
    setErr(true);
}
};
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">AAAAAA</span>
                <span className="title">chatbox</span>
                    <form onSubmit={handleSubmit}> 
                        <input type="text" placeholder="name" />
                        <input type="email" placeholder="email" />
                        <input type="password" placeholder="pass" />
                        <input style={{display:"none"}}type="file" id="file"></input>
                        <label htmlFor="file">
                            <img src="" alt=""></img>
                            <span>
                                add a avatar
                            </span>
                        </label>
                        <button>sign up</button>
                        {err &&<span>something went rong</span>}
                    </form>
            </div>
        </div>
    );
};
export default Register;