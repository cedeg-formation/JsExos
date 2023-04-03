/* Cedeg/javascript
 *
 * /01-base/02-var-prompt/script.js - 1.2: var & prompt
 *
 * coded by Leny
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // Demander le prénom à l'utilisateur
    const name = window.prompt('Quel est ton nom ?');
    // Dire bonjour avec le nom
    window.alert(`Bonjour ${name}`);

})();
