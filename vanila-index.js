const entries = document.getElementById('entries');
const form = document.getElementById('form');
const bookTitle = document.getElementById('bookTitle');
const heading = document.getElementById('heading');
const notes = document.getElementById('notes');

//Convert input string to Upper Camel Case
function caseConverter (str) {
    return str.split(' ').map(x => {
      return x.charAt(0)
      .toUpperCase() + x.slice(1)
      .toLowerCase();
    })
    .join(' ');
  }

//Add new entry
function addNewBook (event) {
    event.preventDefault();
    let titleValue = caseConverter(bookTitle.value);
    bookTitle.value = '';
    let notesValue = notes.value;
    notes.value = '';

    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const delBtn = document.createElement('button')
    const para = document.createElement('p');

    div.appendChild(h3);
    h3.textContent = titleValue;
    h3.appendChild(delBtn);
    delBtn.textContent = 'Delete'
    h3.appendChild(para);
    para.textContent = notesValue;
    entries.appendChild(div);

    delBtn.onclick = () => div.remove();

    bookTitle.focus();
}

form.addEventListener('submit', addNewBook);
// document.addEventListener('keydown', )
