/* Cedeg/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: prompt & if
 *
 * coded by Leny
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    var gift = prompt("you want a gift:");
    if (gift === "yes") {
        alert("congratulate!");
    } else {
        alert("get the hell out of here !");
        window.location = "https://www.youtube.com/watch?v=zP_10bDxaVo";

        
    } 

})();


