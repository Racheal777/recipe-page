

const form = document.querySelector('form')
// const form = document.getElementById('form-field')
const emailError = document.querySelector('#email-el');
const passwordError = document.querySelector('#password-el');

//adding an event listener

form.addEventListener('submit', async (e) =>{
    e.preventDefault()

    //grabbing the values of the input
    // const fullName = form.fullName.value
    const email     = form.email.value
    const password  = form.password.value

    emailError.textContent = ""
    passwordError.textContent = ""

    console.log( email, password)

        try {
          const response = await fetch("/login", {
            method: "POST",
            body: JSON.stringify({email, password }),
            headers: { "Content-Type": "application/json" },
          });
          
          console.log(response);

          const data = await response.json();
          console.log(data)

          
          if (data.user) {
            location.assign("/");
          }
        //   error handling on the client side 

        if (data.error) {
          
          if (data.error.split(" ").includes("Email")) {
            emailError.textContent = data.error;
          } else {
            passwordError.textContent = data.error;
          }
        }


          
        //   if (data.user) {
        //     location.assign("/");
        //   }
        } catch (error) {
          console.log(error);
        }


      });