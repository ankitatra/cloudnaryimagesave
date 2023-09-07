import React, { useState } from 'react';

function Imageadd() {
  const [imageUrl, setImageUrl] = useState('');
  const [username, setUsername] = useState('');
  const [Cname,setCname]=useState("")
  const [Cowner,setCowner]=useState("")
  const [CLogo,setClogo]=useState("")
  const [Address,setAddress]=useState("")
  const [threshold,setThreshole]=useState("")
  const[email,setEmail]=useState("")
  const [phone,setPhone]=useState("")

 const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGI0ZDFjNGNkZDE4MjYyNWM1NjBiMTEiLCJpYXQiOjE2OTI2ODcxODJ9.sLyi08w16EZ8py0noVqzxeHFAv9Ms6PvctPZkJdMQr4"
  const senddata = async () => {
    console.log("url",imageUrl)
    try {
      const formData = {name:username,email,phoneNumber:phone,companyName:Cname,id_proof:imageUrl,companyOwner:username,companyLogo:CLogo,address:Address,thresholdvalue:threshold}
      //  const formData={id_proof:imageUrl,companyLogo:CLogo}
      console.log(formData);
      const response = await fetch('http://localhost:4200/admin/add/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
          },
        body:JSON.stringify(formData)
      });

    
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };


  const handleIdProof = (e) => {
    const file = e.target.files[0];

    TransformFileData(file);
   
  };
  const handleLogo= (e) => {
    const file = e.target.files[0];

    TransformFile(file);
   
  };
  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
    } else {
        setImageUrl("");
    }
  };
  
  const TransformFile = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setClogo(reader.result);
      };
    } else {
        setClogo("");
    }
  };

  return (
    <div>
          <input type="text" id="usernameInput" placeholder="company name" onChange={(e)=>setCname(e.target.value)}/>
          <input type="text" id="usernameInput" placeholder="company owner" onChange={(e)=>setCowner(e.target.value)}/>
          <input type="file" id="usernameInput" placeholder="company logo" onChange={handleLogo}/>
          <input type="text" id="usernameInput" placeholder="address" onChange={(e)=>setAddress(e.target.value)}/>
          <input type="text" id="usernameInput"  placeholder="thresholdvalue" onChange={(e)=>setThreshole(e.target.value)}/>
          <input type="text" id="usernameInput" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>   
           <input type="text" id="usernameInput" placeholder="phonenumber" onChange={(e)=>setPhone(e.target.value)} />
           

      <label htmlFor="usernameInput">Enter owner Username:</label>
      <input type="text" id="usernameInput" onChange={handleUsernameChange} /> 

      <label htmlFor="imageInput">id proof:</label>
      <input
        type="file"
        id="imageInput"
        accept="image/*"
        onChange={ handleIdProof }
      />
      <button onClick={senddata}>Add User</button>

      
    </div>
  );
}

export default Imageadd;
