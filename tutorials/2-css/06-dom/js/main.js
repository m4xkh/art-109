// console.log('ts loaded');

// select html element
const header = document.querySelector('#header');
const changeHeaderButton = document.querySelector('#change-header-button');
const changeThemeButton = document.querySelector('#change-theme-button');
const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');
//change button with click

changeHeaderButton.addEventListener('click',() => {
    header.innerHTML = "boom!";

});

//switch the text

//create func for changing text

function changeButtonText(){
    if (document.body.classList.contains('dark')) {
        changeThemeButton.textContent= "light";
    } else {
        changeThemeButton.textContent="dark";
    }
}

//theme switch
changeThemeButton.addEventListener('click',() => {
    // add and remove dark class to button 
    document.body.classList.toggle('dark');
    changeButtonText();
});


//img vis

img1.addEventListener("click", () => {
    img2.classList.remove('hidden');

})

img2.addEventListener("click", () => {
    img3.classList.remove('hidden');

})