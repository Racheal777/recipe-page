
const form = document.getElementById('form-input')
const emailError = document.querySelector('#email-el');
const userNameError = document.querySelector('#user-el');
const passwordError = document.querySelector('#password-el');
const ConfirmPasswordError = document.querySelector('#Confirmpassword-el');

//adding an event listener

form.addEventListener('submit', async (e) =>{
    e.preventDefault()

    //grabbing the values of the input
    const fullName = form.fullName.value
    const email     = form.email.value
    const userName  = form.userName.value
    const password  = form.password.value

    emailError.textContent = ""
    passwordError.textContent = ""
    userNameError.textContent = ""

    console.log(fullName, email,userName, password)



try {
    const response = await fetch("/signup", {
      method: "POST",
      body: JSON.stringify({fullName, email,userName, password }),
      headers: { "Content-Type": "application/json"}
    });

    const data = await response.json();

    //confirming the password
    const passwordd = document.getElementById('password').value
    const confirm = document.getElementById('confirmPass').value
    console.log(passwordd, confirm)
    if(passwordd != confirm){
      console.log('password do not match')
      ConfirmPasswordError.textContent = "password do not match"
      
    }else{
      data.User
      console.log("Password matched")

      if(data.User){
        location.assign('/home')
      }
     
    }
    console.log(data);

    // if (data.User) {
    //   location.assign("/home");
    // }

    if(data.errors) {
      emailError.textContent = data.errors.email;
      userNameError.textContent = data.errors.userName;
      passwordError.textContent = data.errors.password;
  }
    
    
  } catch (error) {
    console.log(error)
  }
})