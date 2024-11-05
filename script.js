
let buttons = document.querySelectorAll(".box");

buttons.forEach((button) => {
    // console.log(button);// Logs the button element
    button.addEventListener('click', function (event) {
        console.log(button);       
        console.log(event);         // Logs the event object
        console.log(event.target);  // Logs the clicked element
        switch(event.target.id){
            case "b1":
                document.body.style.backgroundColor="grey"
                break;
            case "b2":
                document.body.style.backgroundColor="white"
                break;
            case "b3":
                document.body.style.backgroundColor="blue"
                break;
            case "b4":
                document.body.style.backgroundColor="yellow"
                break;
            default:
                document.body.style.color="white"
        }
    });
});




