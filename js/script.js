function ChangeTitle() {
    let newTitle = document.querySelector('#newTitle');
    let inputValue = newTitle.value;

    let oldTitile = document.querySelector('.card-title');
    oldTitile.textContent = inputValue;
}
function ChangeText() {
    let newText = document.querySelector('#newText');
    let inputValue = newText.value;

    let oldText = document.querySelector('.card-text');
    oldText.textContent = inputValue;
}
function ChangeLink() {
    let newLink = document.querySelector('#newLink');
    let inputValue = newLink.value;

    let oldLink = document.querySelector('.card-link');
    oldLink.textContent = inputValue;
}
function ChangeHref() {
    let newHref = document.querySelector('#newHref');
    let inputValue = newHref.value;

    let oldHref = document.querySelector('.card-link');
    oldHref.href = inputValue;
}
function ChangeSize() {
    let newSize = document.querySelector('#newSize');
    let inputValue = newSize.value;

    let oldColor = document.querySelector('.card-text');
    oldColor.style.fontSize = inputValue + 'px';
}
function TitleColor() {
    let newColor = document.querySelector('#title-color');
    let inputValue = newColor.value;

    let oldColor = document.querySelector('.card-title');
    oldColor.style.color = inputValue;
}
function TextColor() {
    let newColor = document.querySelector('#text-color');
    let inputValue = newColor.value;

    let oldColor = document.querySelector('.card-text');
    oldColor.style.color = inputValue;
}
function CardColor() {
    let newColor = document.querySelector('#cardBG');
    let inputValue = newColor.value;

    let oldColor = document.querySelector('#card');
    oldColor.style.backgroundColor = inputValue;
}
function BodyColor() {
    let newColor = document.querySelector('#bodyBG');
    let inputValue = newColor.value;

    let oldColor = document.querySelector('body');
    oldColor.style.backgroundColor = inputValue;
}

function validate() {
    let cardTitle = document.forms.myForm.title.value;
    let cardText = document.forms.myForm.text.value;
    let cardLink = document.forms.myForm.link.value;
    let cardHref = document.forms.myForm.href.value;
    let success = true;
    if(cardTitle == ""){
        let myAler1 = document.querySelector('.alert1');
        myAler1.textContent = "Card Title is Required!";
        success = false;
    }
    if(cardText == ""){
        let myAlert2 = document.querySelector('.alert2');
        myAlert2.textContent = "Card Text is Required!";
        success = false;
    }
    if(cardLink == ""){
        let myAlert3 = document.querySelector('.alert3');
        myAlert3.textContent = "Card Link is Required!";
        success = false;
    }
    if(cardHref == ""){
        let myAlert4 = document.querySelector('.alert4');
        myAlert4.textContent = "Card href is Required!";
        success = false;
    }
    return success;
}