const validator = require("validator")

const validate = (req,res,next) => {
    const {name,email,password} = req.body
    if (!(name && email && password)) {
        return res.send("Please give fully information..")
    }
    
    if (!validator.isEmail(email)) {
        return res.send({massage:"Please enter valid email.."})
    }
    if (!validator.isStrongPassword(password,{minLength:8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:1})) {
        return res.send({massage:"Your password is not strong."})
    }
    next()

}

module.exports = {validate}
