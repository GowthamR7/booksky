let a = document.querySelector(".popup-overlay");
let b = document.querySelector(".popup-box");
let c = document.getElementById("add-popup-button");

c.addEventListener("click",function(){
    a.style.display="block";
    b.style.display="block";

})

//select cancel button
let cancelbutton=document.getElementById("cancel-popup")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    a.style.display="none"
    b.style.display="none"
})

//select containeer,add-book,book-title-input,book-author-input,book-description-input

let container=document.querySelector(".container")
let addbook=document.getElementById("add-book")

addbook.addEventListener("click",function(event){
    const bookTitleInput=document.getElementById("Book-title-input")
    const bookAuthorInput=document.getElementById("book-author-input")        
    const bookDescriptionInput=document.getElementById("book-description-input")
    event.preventDefault();
    let div=document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML=`<h2>${bookTitleInput.value}</h2>
            <h5>${bookAuthorInput.value}</h5>
            <p>${bookDescriptionInput.value}</p>
            <button onclick="deletebook(event)">Delete</button>`;
    container.append(div);
    a.style.display="none";
    b.style.display="none";
    bookAuthorInput.value = '';
    bookDescriptionInput.value='';
    bookTitleInput.value = '';
});

function deletebook(event){
    event.target.parentElement.remove()
}