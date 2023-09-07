// import React, { useState } from "react"

// export const Frontendcloudinary=()=>{
//     const [image,setImage]=useState("")

//     const addProfile = async (event) => {
//         // setProfileBtnLoading(true);
//         let img = event.target.files[0];
//         console.log(img);
//         const dataImg = new FormData();
//         dataImg.append("file", img);
//         dataImg.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
//         dataImg.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
//         let { data } = await axios.post(
//           `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
//           dataImg
//         );
//         setImage(data.url);
//         // setProfileBtnLoading(false);
//       };

//       const handleSubmit=()=>{
//         console.log(image)
//       }

//     return(
//         <>
//         {/* <div>
//             <input type="file" placeholder ="select image" onChange={addProfile}/>
//             <button onClick={handleSubmit}>submit</button>
//         </div> */}

//         {condition &&<></>}
//         {condition &&<></>}
//         {condition &&<></>}
//         </>
//     )
// }