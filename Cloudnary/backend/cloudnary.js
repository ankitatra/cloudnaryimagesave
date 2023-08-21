// const cloudinary = require('cloudinary').v2;

// cloudinary.config({ 
//     cloud_name: "dlrgh9gam", 
//     api_key:"254299893452357", 
//     api_secret:"4mZorIis9DEEdRy2MkrqO-6lapo"
//   });

//   module.exports= cloudinary;
  
const cloudinary = require('cloudinary');

cloudinary.v2.config({
  cloud_name: 'dlrgh9gam',
  api_key: '254299893452357',
  api_secret: '4mZorIis9DEEdRy2MkrqO-6lapo',
  secure: true,
});
module.exports= cloudinary