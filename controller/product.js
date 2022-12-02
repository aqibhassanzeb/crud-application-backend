import { Product } from "../modal/product.js";


// Add new product 

export const addProduct = async (req, res) => {
  
  const { name, price, quantity } = req.body
  if (!name || !price || !quantity) {
    return res.status(422).json({ error: "please fill all fields" })
  }
  try {
  
    const Data = new Product({name, price, quantity})
    const result = await Data.save()
    if (result) {
      return res.json({ message: "added successfull" })
    }
  } catch (error) {
    console.log(error)
  }
}

// show product 

export const showProduct = async (req, res) => {
    try {
      
  
        const result = await Product.find()
        return res.status(200).json({ product: result });  
    } catch (error) {
      console.log(error)
    }
  }

// update product 

export const updateProduct = async (req, res) => {
  if(!req.params._id){
    return res.status(422).json({ error: "product id is required" })
  }
  const { name, price, quantity } = req.body
  if (!name || !price || !quantity) {
    return res.status(422).json({ error: "please fill all fields" })
  }
  try {
    const updated = await Product.findByIdAndUpdate(req.params._id, { name, price, quantity });
    return res.status(200).json({ message: "updated successfully" });

  } catch (error) {
    console.log(error)
  }
}

// delete product 

export const deleteProduct = async (req, res) => {
  if (!req.params._id) {
    return res.status(422).json({ error: "id is required" })
  }
  try {
    const result = await Product.findByIdAndDelete(req.params._id);
    return res.status(200).json({ message: "deleted successfully" });

  } catch (error) {
    console.log(error)
  }
}

// find by id 

export const ViewOneProduct = async (req, res) => {
  if (!req.params._id) {
    return res.status(422).json({ error: "id is required" })
  }
  try {
    const result = await Product.findById(req.params._id);
    return res.status(200).json({ product: result });

  } catch (error) {
    console.log(error)
  }
}
