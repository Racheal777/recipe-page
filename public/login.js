

//form to grab the values of the signup form



const formm = document.getElementById('form-input')

formm.addEventListener('submit', async (e) => {
  e.preventDefault()


  const firstName = formm.firstName.value
  const lastName = formm.lastName.value
  const email    = formm.email.value
  const userName = formm.userName.value
  const password = formm.password.value

  console.log(firstName, lastName, email, userName, password);

  try {
      const response = await fetch("/signup", {
          method: "POST",
            body: JSON.stringify({firstName, lastName, email, userName, password}),
            headers: {"Content-Type": "application/json"}      
        })

        const data = await response.json()
        console.log(data)
  } catch (error) {
      console.log(error)
  }
})