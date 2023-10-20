//******************************Chapter 46, 48 (Events)********************
//**************************Question No 1 ********************************/

// function clicked(){
//     alert("Hello user")
// }

//**************************Question No 2 ********************************/

// var textTohide = document.getElementById("textTohide");

// document.addEventListener("click",function(clickedTotexthide){
//     if (clickedTotexthide.target !== textTohide)
//     textTohide.style.display = "none";
// });

//**************************Question No 3 ********************************/

// var linkElement = document.getElementById("myLink");

//     linkElement.addEventListener("mouseover", function() {
//       linkElement.style.color = "red";
//     });

//     linkElement.addEventListener("mouseout", function() {
//       linkElement.style.color = "blue";
//     });

//**************************Question No 4 ********************************/

// var scrollToTopLink = document.getElementById("scrollToTopLink");

//     scrollToTopLink.addEventListener("click", function(event) {
//       event.preventDefault();

//       window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//       });
//     });

//**************************Question No 5 ********************************/

// var playSoundLink = document.getElementById("playSoundLink");
//     var audio = document.getElementById("myAudio");
//     playSoundLink.addEventListener("click", function(event) {
//       event.preventDefault();

//       audio.play();
//     });

//**************************Question No 6 ********************************/

// var openNewWindowLink = document.getElementById("openNewWindowLink");

//     openNewWindowLink.addEventListener("click", function(event) {
//       event.preventDefault();
//       var newWindow = window.open("https://www.google.com", "_blank");

//       if (newWindow) {

//       } else {
//         alert("The new window was blocked by a pop-up blocker.");
//       }
//     });

//  **************************Question No 7 ********************************

// var buttonElement = document.getElementById("Alert")

//  buttonElement.onclick = function(){
//     alert("Welcome To This Page")
//  }

//  **************************Question No 8 ********************************

// var button = document.getElementById("hoverButton");

//  **************************Question No 9 ********************************

// var playSoundLink = document.getElementById("SoundButton");
//     var audio = document.getElementById("myAudio");
//     playSoundLink.addEventListener("click", function(event) {
//       event.preventDefault();

//       audio.play();
//     });

//  **************************Question No 10 ********************************

// var mouseOverElement = document.getElementById("mouseOverElement");

//     mouseOverElement.addEventListener("mouseover", function() {
//       alert("Mouse over event triggered!");
    // });

    //  **************************Question No 11 ********************************

// var textToHide = document.getElementById("textToHide");

//     textToHide.addEventListener("mouseout", function() {
//       textToHide.classList.add("hidden");
//     });

    //  **************************Question No 12 ********************************


//  var openWindowLink = document.getElementById("openWindowLink");

//  openWindowLink.addEventListener("click", function(event) {
//    event.preventDefault();

//    var windowWidth = window.screenX + (event.clientX || window.innerWidth / 2);
//    var windowHeight = window.screenY + (event.clientY || window.innerHeight / 2);

//    var newWindow = window.open("about:blank", "_blank", "width=" + windowWidth + ",height=" + windowHeight);

//    if (newWindow) {
//      newWindow.document.write("<button onclick='window.close()'>Close</button>");
//    } else {
//      alert("The new window was blocked by a pop-up blocker.");
//    }
//  });

//******************************Chapter 46, 48 (Events) Work Done********************


// ******************************Chapter 49, 50 (Reading and Setting field values)********************

//*******************************Question No 1 ******************************** */

    // var userInput = document.getElementById("userInput");
    // var submitButton = document.getElementById("submitButton");

    // submitButton.addEventListener("click", function() {
    //   var inputValue = userInput.value;
    //   console.log("User input:", inputValue);
    // });

    //*******************************Question No 2 ******************************** */

    // var checkbox = document.getElementById("checkbox");
    // var submitButton = document.getElementById("submitButton");

    // // Add a click event listener to the submit button
    // submitButton.addEventListener("click", function() {
    //   // Read the value of the checkbox
    //   var isChecked = checkbox.checked;

    //   // Print the value to the console
    //   console.log("Checkbox value:", isChecked);
    // });

    //*******************************Question No 3 ******************************** */

    // var selectBox = document.getElementById("selectBox");
    // var submitButton = document.getElementById("submitButton");

    // submitButton.addEventListener("click", function() {
    //   var selectedValue = selectBox.value;

    //   console.log("Selected value:", selectedValue);
    // });

    //*******************************Question No 4 ******************************** */

    // var inputField = document.getElementById("myInputField");

        //*******************************Question No 5 ******************************** */

        // var married = confirm("Are you married? Click OK for yes, or Cancel for no.");

        // var statusSelect = document.getElementById("status");

        // if (!married) {
        //   statusSelect.value = "single";
        // }

        //*******************************Question No 6 ******************************** */

        // var inputField = document.getElementById("myInput");
        // var fillButton = document.getElementById("fillButton");
    
        // fillButton.addEventListener("click", function() {
        //   if (inputField.value.trim() === "") {
        //     inputField.value = "Default Text";
        //   }
        // });

        //*******************************Question No 7 ******************************** */


        // function validateForm() {
        //     var name = document.getElementById("name").value;
        //     var email = document.getElementById("email").value;
        //     var password = document.getElementById("password").value;
      
        //     if (name === "") {
        //       alert("Please enter your name.");
        //       return false;
        //     }
      
        //     if (email === "") {
        //       alert("Please enter your email.");
        //       return false;
        //     }
      
        //     if (password === "" || password.length < 6) {
        //       alert("Please enter a password with at least 6 characters.");
        //       return false;
        //     }
            
        //     alert("Registration successful!");
        //     return true;
        //   }

        //******************************All Chapters Completed ********************
