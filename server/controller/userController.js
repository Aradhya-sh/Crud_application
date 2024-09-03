
import User from '../models/userModel.js';

// export const createItem = async (data) => {
//   const UserData = new User(data);
//   return await UserData.save();
// };


export const createItem = async (data) => {
  const existingUser = await User.findOne({ email: data.email });
  if (existingUser) {
    throw new Error('Email already exists');
  }
  const UserData = new User(data);
  return await UserData.save();
};


export const getItems = async () => {
  return await User.find();
};

export const getItemById = async (id) => { 
  return await User.findById(id);
};

export const updateItem = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

export const deleteItem = async (id) => {
  return await User.findByIdAndDelete(id);
};  


