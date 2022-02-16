

    //function to display data
    const forms = document.getElementById('formzz')
    const search = document.querySelector('#search')
        

    forms.addEventListener("submit", (e) => {
        e.preventDefault()

        const tag = search.value
        
        // using the req.query in the browser to fetch the results
        window.location.href = `http://localhost:9000/search?search=${tag}`
    })

    // forms.addEventListener("submit", async (e) => {
    //     e.preventDefault()

    //     const tag = search.value

    //     console.log(tag)
    //     const endpoint = `http://localhost:9000/search?search=${tag}`
        
    //     console.log(endpoint)

    //     try {
            
        
    //     const response = await fetch(endpoint, {
    //         method: "GET"
    //     })
    //     console.log(response);

    //     const data = await response.json();
    //     console.log(data)

    //     if (data) {
    //         window.location.href = endpoint;
    //       }
        
    //     } catch (error) {
    //         console.log(error)
    //     } 
    // })






   