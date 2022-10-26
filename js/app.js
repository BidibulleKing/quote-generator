// --- Events ---
// une liste d'évènements est mise à disposition par JS et le navigateur
// par exemple, l'évènement "click"
// Quand l'évènement arrive/survient, JS exécute toutes les fonctions attachées à cet évènement
// => l'exécution de la fonction attachée est désynchronisée

// On place notre code dans un module
const app = {
    // Propriété "counter"
    currentQuoteIndex: 0,
    // Méthode appelée au chargement du DOM
    init: function() {
        // attache la méthode app.handleClickOnDisplayAddFormButton à l'évènement "click" sur le bouton "ajouter une citation"
        document.getElementById('btnDisplayAddForm').addEventListener('click', app.handleClickOnDisplayAddFormButton);

        // TODO afficher la première citation de fail

        // TODO attacher la méthode app.handleClickOnNextButton à l'évènement "click" sur le bouton "next" (id="nav-next")
    },
    // Méthode gérant le click pour afficher le form d'ajout
    handleClickOnDisplayAddFormButton: function(evt) {
        console.log('click to display form');

        document.getElementById('divAddQuote').classList.remove('d-none');
    },
    // Méthode permettant de modifier le DOM pour afficher la quote "courante"
    displayCurrentQuote: function() {
        // TODO se baser sur app.currentQuoteIndex pour afficher la quote "courante"
    },
    // Je crée une méthode dédiée à la gestion du click sur le bouton "Next"
    handleClickOnNextButton: function() {
      console.log('click on next');

    }
  };
  
  // Appel "synchronisé" de la méthode init
  // app.init();
  
  // Permet d'exécuter notre code une fois le DOM chargé
  // => lorsque l'event DOMContentLoaded survient => la méthode app.init est appelée
  // donc app.init n'est pas exécuter lorsque JS lit cette ligne de code
  document.addEventListener('DOMContentLoaded', app.init); // ici, ne jamais mettre les (), sinon, la fonction/méthode sera aussitôt exécutée
  
  // Attention à la syntaxe, on ne doit pas mettre les () après la fonction, sinon elle est appelée aussitôt
  // Explications :
  // envoie de l'eau, au lancement du détecteur
  // document.addEventListener('fuméeDetectée', envoyerDeLeau());
  // Lorsque de la fumée sera détectée, envoie de l'eau
  // document.addEventListener('fuméeDetectée', envoyerDeLeau);
