
// function to display the comment form
const btn = document.getElementById('tags');

btn.addEventListener('click', () => {
  const form = document.getElementById('conts');

  if (form.style.display === 'block') {
    //  this SHOWS the form
    form.style.display = 'none';
  } else {
    //  this HIDES the form
    form.style.display = 'block';
  }

  // console.log(form)
});


