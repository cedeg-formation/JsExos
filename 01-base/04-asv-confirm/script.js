/* Cedeg/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by Leny
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    var name = prompt("your name :");
    var age = prompt("age :");
    var gender = prompt("gender :");

    
        if (confirm("please confirm : " + name + " " + age + " " + gender) === true) {
          return true;
        } else {
            window.location = "https://i.pinimg.com/originals/59/54/b4/5954b408c66525ad932faa693a647e3f.jpg";
           //alert("please confirm again : " + name + " " + age + " " + gender);
          return false;
        }
      
    //Boombastic = confirm(name + " " + age + " " + gender);
})();









