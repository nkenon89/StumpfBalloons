console.log('app.js successfully linked');

const button = document.getElementById('myButton');
const form = document.getElementById('myForm');

button.addEventListener('click', () => {
    console.log('you clicked a button idiot');
    form.innerHTML = `
        <label>First Name:</label>
        <input type="text" placeholder="Suz">
        <label>Last Name:</label>
        <input type="text" placeholder="Something">
        <label>Email:</label>
        <input type="text" placeholder="Something@SomethingElse.com">
        <button btn btn-dark>Submit</button>
        `

    button.classList.toggle('hidden');


})