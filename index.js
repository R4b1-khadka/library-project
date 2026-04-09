let myLibrary = [];

function Book(name,author,pages,isRead) {
  this.name=name;
  this.author=author;
  this.pages=pages;
  this.isRead=isRead;
  this.uuid = crypto.randomUUID();
  
}
const addBook= document.querySelector('#addBook');
addBook.addEventListener('click',hideForm);

function addBookToLibrary(e) {
  e.preventDefault();

  const form= document.querySelector('#form');
 const name= document.getElementById('name').value ;
  const author= document.getElementById('author').value ;
  const pages= document.getElementById('pages').value ;
  const isRead= document.getElementById('isRead').checked ;

 
 const book1= new Book(name,author, parseInt(pages), isRead);

  myLibrary.push(book1);
  document.querySelector("#form").reset();

  handleDom(myLibrary);
  
 }


function handleDom(books){
     const container= document.querySelector('.container');
      container.innerHTML='';

  let read;
  for(let book of books){

    
    if (book.isRead==true){
      read= "i have read it";
    }else{
     read= " i haven't read it ";
    }
    console.log(`book name is : ${book.name} and it's author is ${book.author} and it has ${book.pages} pages and ${read}`)
 
    const content=  document.createElement('div');
    content.classList.add("content");
    const title= document.createElement('h4');
    title.textContent=`${book.name}`;
    const aboutBook= document.createElement('div');
    aboutBook.innerHTML=`<p>By: ${book.author}</p>
                         <div>pages: ${book.pages}</div>
                         <p>${read}</p>`;

    const buttons= document.createElement('button');
    buttons.textContent=`remove`
    container.appendChild(content);
    content.appendChild(title);
    title.appendChild(aboutBook);
    aboutBook.appendChild(buttons);
    buttons.addEventListener('click',()=>removeCard(book.uuid))
  }
  // hideForm();

}

function hideForm(){
    document.querySelector("#form-div").classList.toggle('hide');
}


const submitBtn= document.querySelector('#submit');
submitBtn.addEventListener('click',addBookToLibrary)

function removeCard(id){
  myLibrary= myLibrary.filter(book=>book.uuid!==id);
  handleDom(myLibrary);
}