import express from "express";
import {createItem,getItems,getItemById,updateItem,deleteItem} from "../controller/userController.js";
const router = express.Router();

// Define the route for creating a new item
router.post('/user', async (req, res) => {
  try {
    const user = await createItem(req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Define th route for getting all items
router.get('/', async (req, res) => {
  try {
    const user = await getItems();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Define the route for getting an item by ID
router.get('/user/:id', async (req, res) => { 
  
  try {
    const user = await getItemById(req.params.id);
    if (!user) return res.status(404).json({ message: 'Item not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Define the route for updating an item by ID
router.put('/user/:id', async (req, res) => {
  try {
    const user = await updateItem(req.params.id, req.body);
    if (!user) return res.status(404).json({ message: 'Item not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Define the route for deleting an item by ID
router.delete('/user/:id', async (req, res) => {
  try {
    const user = await deleteItem(req.params.id);
    if (!user) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item deleted' }); 
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Define the route for getting all users
// export const getAll = async(req,res) =>{
//   try{
//     const User = await User.find();
//     if(!User){
//       return res.status
//       (404).json({message: 'User data not found'});
//     }
//     res.status(200).json(User);
//   }catch(error) {
//     res.status(500).json({error: error});
//   }
// }

 

export default router;  
  