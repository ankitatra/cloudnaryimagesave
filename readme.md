# backend 
 # route.js 
   if (id_proof) {
          const uploadedResponse = await cloudinary.uploader.upload(id_proof, {
            upload_preset: "ridedost", 
            folder:"ridedost"
    });
 #  upload_preset: "ridedost", 
  upload_preaset we have to set  under cloudinary setting

  setting-> upload-> add upload preset

  cloud_name
  api_key
  api_secret



