
function displayHomePage() {
    document.getElementById('shopping').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('logoutBtn').style.display = 'block';
    document.getElementById('loginErrorMsg').textContent = '';
    getBooks();
}

function displayLoginPage() {
    document.getElementById('shopping').style.display = 'none';
    document.getElementById('logoutBtn').style.display = 'none';
}

window.onload = function () {
    if (sessionStorage.getItem('accessToken')) {
        displayHomePage();
    } else {
        displayLoginPage();
    }
    document.getElementById('loginBtn').onclick = async function (event) {
        event.preventDefault();
        let result = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                username: document.getElementById('username').value,
                password: document.getElementById('password').value
            })
        }).then(response => response.json());

        if (result.accessToken) {
            sessionStorage.setItem('accessToken', result.accessToken);
            displayHomePage()
        } else {
            document.getElementById('loginErrorMsg').textContent = result.error;
        }
    }
    document.getElementById('logoutBtn').onclick = function (event) {
        sessionStorage.removeItem('accessToken');
        location.reload();
    }
    //add/update Book
    document.getElementById('book-btn').onclick = function (event) {
        event.preventDefault();
        if (!document.getElementById('book-btn').dataset.id) {
            addNewBook();
        } else {
            editBook()
        }
    }
}
async function getBooks() {
    let books = await fetch('http://localhost:3000/books/', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken')
        }
    }).then(response => response.json());
    books.forEach(prod => renderBook(prod))
}

function renderBook(prod) {
    const div = document.createElement('div');
    div.classList = 'col-lg-4';
    div.id = prod.id;
    div.innerHTML = `<svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140" preserveAspectRatio="xMidYMid slice" focusable="false">
  <title>Placeholder</title>
  <rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777"
      dy=".3em">Geez</text>
  </svg>`;

    const h2 = document.createElement('h2');
    h2.textContent = prod.title;

    const title = document.createElement('p');
    title.textContent = prod.title;

    const isbn = document.createElement('p');
    isbn.textContent = prod.isbn;

    const publishedDate = document.createElement('p');
    publishedDate.textContent = prod.publishedDate;

    const author = document.createElement('p');
    author.textContent = prod.author;



    div.appendChild(h2);
    div.appendChild(title);
    div.appendChild(isbn);
    div.appendChild(publishedDate);
    div.appendChild(author);

    const actions = document.createElement('p');
    const updateBtn = document.createElement('a');
    updateBtn.classList = 'btn btn-primary';
    updateBtn.textContent = 'UPDATE';
    updateBtn.addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('book-heading').textContent = 'Edit Book';
        document.getElementById('title').value = prod.title;
        document.getElementById('isbn').value = prod.isbn;
        document.getElementById('publishedDate').value = prod.publishedDate;
        document.getElementById('author').value = prod.author;
        document.getElementById('book-btn').dataset.id = prod.id;

    })

    const deleteBtn = document.createElement('a');
    deleteBtn.classList = 'btn btn-primary';
    deleteBtn.textContent = 'DELETE';

    deleteBtn.addEventListener('click', function (event) {
        event.preventDefault();
        fetch('http://localhost:3000/books/' + prod.id, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + sessionStorage.getItem('accessToken')
            }
        }).then(response => {
            alert('Delete Successfully!');
            div.remove();
        });
    });
    actions.appendChild(updateBtn);
    actions.appendChild(deleteBtn);
    div.appendChild(actions);
    document.getElementById('books').appendChild(div);
}
async function addNewBook() {
    let result = await fetch('http://localhost:3000/books/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer ' + sessionStorage.getItem('accessToken')
        },
        body: JSON.stringify({
            title: document.getElementById('title').value,
            isbn: document.getElementById('isbn').value,
            publishedDate: document.getElementById('publishedDate').value,
            author: document.getElementById('author').value,
            description: document.getElementById('description').value
        })
    }).then(res => res.json());
    document.getElementById('book-form').reset();
    renderBook(result);
}

function editBook() {
    const prodId = document.getElementById('book-btn').dataset.id;
    const title = document.getElementById('title').value;
    const isbn = document.getElementById('isbn').value;
    const publishedDate = document.getElementById('publishedDate').value;
    const author = document.getElementById('author').value;
    const description = document.getElementById('description').value;

    fetch('http://localhost:3000/books/' + prodId, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer ' + sessionStorage.getItem('accessToken')
        },
        body: JSON.stringify({
            title: title,
            isbn: isbn,
            publishedDate: publishedDate,
            author: author,
            description: description
        })
    }).then(response => response.json())
        .then(jsonObj => {
            const bookDiv = document.getElementById(prodId);
            bookDiv.querySelector('h2').textContent = title;

            const updatedArr = bookDiv.querySelectorAll('p');
            updatedArr[0].textContent = title;
            updatedArr[1].textContent = isbn;
            updatedArr[2].textContent = publishedDate;
            updatedArr[3].textContent = author;
            updatedArr[4].textContent = description;
            document.getElementById('book-heading').textContent = 'Add a new Book';
            document.getElementById('book-btn').dataset.id = '';
            document.getElementById('book-form').reset();
        })
}
llet 