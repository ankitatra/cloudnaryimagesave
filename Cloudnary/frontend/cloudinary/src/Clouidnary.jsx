import React, { useState } from "react";

export const SaveImageCloudinary =()=>{
    const [image,setImage]=useState()
    const savedata=()=>{
        console.log(image)
        const data=new FormData()
        data.append("file",image)
        data.append("upload_preset","imageridedost",)
        data.append("cloud_name","dlrgh9gam",)
        fetch("https://api.cloudinary.com/v1_1/dlrgh9gam/image/upload",
       {
            method:"post",
            body:data
        })
        .then((res)=>res.json())
        .then((data)=>console.log(data))
        .catch((err)=>{
            console.log(err)
        })
    }
    return(
        <>
          <div>
            <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
            <button onClick={savedata}>save</button>
          </div>
        </>
    )
}