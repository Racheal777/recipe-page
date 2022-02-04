
    //function to display data
    const forms = document.getElementById('formzz')
    const search = document.querySelector('#search')
        


    forms.addEventListener("submit", (e) => {

        const tag = search.value

        console.log(tag)
        const endpoint = `/search/${tag}`
        e.preventDefault()

        console.log(endpoint)
        fetch(endpoint, {
            method: "GET"
        }).then(result => result.json())
        
        .then(res => window.location.href = 'http://localhost:9000/search')
        console.log(fetch)
    }).catch(err => console.log(err))






