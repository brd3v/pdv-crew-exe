exports.addUser = async (req, res) => {
     const  newUser =  req.body

     await newUser.save()

     res.status(200).json('success')

}

exports.allUser = (req, res) => {
 
    res.send({message: 'hello world'})

}