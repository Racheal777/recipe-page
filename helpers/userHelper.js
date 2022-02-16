const res = require("express/lib/response");
const jwt = require("jsonwebtoken");


// }

//generating token
//passing the id to it and also the private key and expires in 3days
module.exports.generateToken = (id) =>{
  return jwt.sign({id}, process.env.privateKey, {
    expiresIn: 3 * 24 * 60 * 60* 1000
  })
}

//handling error
module.exports.handleErrors = (err) => {

  //if email and password is empty, it means no error
   let errors = { email: "", password: "" };

  if (err.code === 11000) {
    errors.email = "Email already exist please Login";
  }
  // To check if err.message contains user validation failed
  if (err.message.includes("user validation failed")) {

    //  console.log(err.message);

//If it does, it should display the values which come in an array format
//and then we ca run a for each function to display it one by one
    Object.values(err.errors).forEach((prop) => {

      // console.log(prop);
      //If prop assigned to the foreach function has a path of email, it 
      //should display the message it comes with
      if (prop.path === "email") {
        errors.email = prop.message;
      }
//If prop assigned to the foreach function has a path of password, it 
      //should display the message it comes with
      if (prop.path === "password") {
        errors.password = prop.message;
      }
    });
  }
  return errors
  
};


