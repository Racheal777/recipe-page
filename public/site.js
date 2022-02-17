

    //function to display data
    const forms = document.getElementById('formzz')
    const search = document.querySelector('#search')
        

    forms.addEventListener("submit", (e) => {
        e.preventDefault()

        const tag = search.value
        
        // using the req.query in the browser to fetch the results
        window.location.href = `http://localhost:9000/search?search=${tag}`
    })

    
   