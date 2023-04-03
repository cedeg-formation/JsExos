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
    // Demdander si l'utilisateur veut un gateau
    // J'ai ajouté .toLowerCase() à la fin dans le but de réduir tout ce que je récupère en minuscule pour que les
    // différentes façon d'écrire Oui / oui / OUI soient toutes correctement interpretées
    const isCake = window.prompt('Voulez-vous du gateau ?').toLowerCase();

    let message = 'Du gateau ça ne se refuse pas !'
    if (isCake === 'oui') {
         message = 'Bravo !';
    }
    window.alert(message);
})();
