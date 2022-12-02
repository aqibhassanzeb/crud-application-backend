import mongoose from "mongoose"

mongoose.connect("mongodb://aqibhassanzeb:test1234@cluster0-shard-00-00.g12wu.mongodb.net:27017,cluster0-shard-00-01.g12wu.mongodb.net:27017,cluster0-shard-00-02.g12wu.mongodb.net:27017/?ssl=true&replicaSet=atlas-ix6xgo-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('database connected.')
    })
    .catch((err) => console.log(err.message))