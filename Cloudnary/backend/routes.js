const cloudinary=require("./cloudnary")

const express = require('express');
const { User } = require('./model');

const router = express.Router();

// POST route to add a new user
router.get('/', async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  });
  
 
  
  
  
// router.post('/users', async (req, res) => {
//   try {
//     const { username} = req.body;
//     console.log(username)
//    const result= cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg").then(result=>console.log(result));
//    const newUser = new User({ username
//         ,id_proof: {
//         public_id: result.public_id,
//         url: result.secure_url
//   })

//     const savedUser = await newUser.save();
    
//     res.status(201).json(savedUser);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to add user' });
//     return error
//   }
// });

router.post('/users', async (req, res) => {
    const { username,id_proof} = req.body;
    console.log(username,id_proof);
    try {
        if (id_proof) {
          const uploadedResponse = await cloudinary.uploader.upload(id_proof, {
            upload_preset: "ridedost",
            folder:"ridedost"
          });
    
          if (uploadedResponse) {
            const user = new User({
              username,
              id_proof: uploadedResponse,
            });
    
            const savedProduct = await user.save();
            res.status(200).send(savedProduct);
          }
        }
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
  
  });
module.exports = router;
