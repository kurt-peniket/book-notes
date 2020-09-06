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

$(document).ready(function(){

  //Add new entry
  function addNewBook (event) {
      event.preventDefault();
      let titleValue = caseConverter(bookTitle.value);
      bookTitle.value = '';
      let notesValue = notes.value;
      notes.value = '';

      $('#entries').append(
        `<div>
          <h3>${titleValue}</h3>
          <p>${notesValue}</p>
          <button class="delBtn">Delete</button>
        </div>`
        )
      
        bookTitle.focus();
        
        $(".delBtn").click(function(){$(this).parent('div').remove()});
 }
      
  $('#submit').click(addNewBook);

});