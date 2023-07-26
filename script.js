const pythonExp = document.querySelector('.pythonexp h2');
const h1 = document.querySelector('h1');
const button = document.querySelector('.click-button');

h1.addEventListener('animationend', () => {
    pythonExp.style.opacity = '1';
    pythonExp.classList.add('fadeIn');
    button.style.display = 'block';
    button.classList.add('fadeIn');
});


button.addEventListener('click', () => {
    window.location.href = 'prev_work.html'; // Redirect to newpage.html on button click
});