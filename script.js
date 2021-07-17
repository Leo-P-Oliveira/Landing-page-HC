const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let Nome = document.getElementById('Nome').value;
    let Email = document.getElementById('Email').value;
    let data = {
        Nome,
        Email
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)
})