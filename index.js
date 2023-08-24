//A for loop to iterate over all the buttons with the class drum because querySelectorAll selects all button with the class drum as an array.
for(var i=0; i < document.querySelectorAll(".drum").length; i++) {

    //click event listener added to all the button to perfom certain action when the buttons are clicked.
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        //variable create to get the character inside the buttom from index.html
        var buttonInnerHTML = this.innerHTML;

        /*makeSound function and buttonAnimation function called to make the sound 
        according to the type of drum clicked and animation to know which button is clicked.*/
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    } ); 
}

//keydown event listener added to perform certain actions when relevant character shown in button are pressed.
document.addEventListener("keydown", function(event) {

    /*makeSound function and buttonAnimation function called to make the sound 
    according to the type of drum clicked and animation to know which button is clicked.
    Here event.key returns string value of the key pressed*/
    makeSound(event.key);
    buttonAnimation(event.key);
});

/*function to make sound according to the character. 
So, the string value of key is passed from the keydown event listener and
the text inside button is passed from click event listener to make sound when it is clicked or typed.*/
function makeSound(key) {
     switch(key) {

            //Built in object Audio in javascript used to play audio using the play method.
            case "w":
                var tom1 = new Audio('./sounds/tom-1.mp3');
                tom1.play();
            break;

            case "a":
                var tom2 = new Audio('./sounds/tom-2.mp3');
                tom2.play();
            break;

            case "s":
                var tom3 = new Audio('./sounds/tom-3.mp3');
                tom3.play();
            break;

            case "d":
                var tom4 = new Audio('./sounds/tom-4.mp3');
                tom4.play();
            break;

            case "j":
                var snare = new Audio('./sounds/snare.mp3');
                snare.play();
            break;

            case "k":
                var crash = new Audio('./sounds/crash.mp3');
                crash.play();
            break;

            case "l":
                var kick = new Audio('./sounds/kick-bass.mp3');
                kick.play();
            break;

            default:
                console.log(buttonInnerHTML);
        }
}

/*function to create a short animation to show which button is pressed or clicked where 
the string value of key is passed from the keydown event listener and
the text inside button is passed from click event listener.*/
function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },200);
}