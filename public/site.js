// const tag = document.getElementById('tags')

// tag.addEventListener('click',showPage )
document.getElementById("tags").addEventListener("click", showPage);

function showPage(){
    var x = document.getElementById("contactss")
    if(x.style.display === "none"){
        x.style.display ="block";
    }else{
        x.style.display = "none"
    }
    console.log(x)

    // tag.classList.add('.contactss')
    // console.log(showPage)
}

