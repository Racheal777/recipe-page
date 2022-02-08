
    //function to display data
    const forms = document.getElementById('formzz')
    const search = document.querySelector('#search')
        


    forms.addEventListener("submit", (e) => {
        e.preventDefault()

        const tag = search.value

        console.log(tag)
        const endpoint = `/search/${tag}`
        
        console.log(endpoint)
        fetch(endpoint, {
            method: "GET"
        }).then(result => result.json())
        
        .then(res => window.location.href = `/search/${tag}`)
        console.log(fetch)
    }).catch(err => console.log(err))






