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
  init: () => {
    // attache la méthode app.handleClickOnDisplayAddFormButton à l'évènement "click" sur le bouton "ajouter une citation"

    // TODO afficher la première citation de fail
    app.displayCurrentQuote(
      quotes[app.currentQuoteIndex].quote,
      quotes[app.currentQuoteIndex].author
    );

    // TODO attacher la méthode app.handleClickOnNextButton à l'évènement "click" sur le bouton "next" (id="nav-next")
    const nextButton = document.querySelector("#nav-next");
    const prevButton = document.querySelector("#nav-prev");
    const firstButton = document.querySelector("#nav-first");
    const lastButton = document.querySelector("#nav-last");

    const card = document.querySelector(".card-body");
    const form = document.querySelector("#addQuoteForm");

    nextButton.addEventListener("click", () => {
      app.handleClickOnNextButton();
      app.displayCurrentQuote(
        quotes[app.currentQuoteIndex].quote,
        quotes[app.currentQuoteIndex].author
      );
    });

    prevButton.addEventListener("click", () => {
      app.handleClickOnPrevButton();
      app.displayCurrentQuote(
        quotes[app.currentQuoteIndex].quote,
        quotes[app.currentQuoteIndex].author
      );
    });

    firstButton.addEventListener("click", () => {
      app.handleClickOnFirstButton();
      app.displayCurrentQuote(
        quotes[app.currentQuoteIndex].quote,
        quotes[app.currentQuoteIndex].author
      );
    });

    lastButton.addEventListener("click", () => {
      app.handleClickOnLastButton();
      app.displayCurrentQuote(
        quotes[app.currentQuoteIndex].quote,
        quotes[app.currentQuoteIndex].author
      );
    });

    if (card) {
      document
        .getElementById("btnDisplayAddForm")
        .addEventListener("click", app.handleClickOnDisplayAddFormButton);
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const inputQuote = form.querySelector("#input-quote").value;
      const inputAuthor = form.querySelector("#input-author").value;

      quotes.push({
        quote: inputQuote,
        author: inputAuthor,
      });

      form.reset();
    });
  },
  // Méthode gérant le click pour afficher le form d'ajout
  handleClickOnDisplayAddFormButton: (evt) => {
    document.getElementById("divAddQuote").classList.remove("d-none");
  },
  // Méthode permettant de modifier le DOM pour afficher la quote "courante"
  displayCurrentQuote: (quoteText, authorName) => {
    // TODO se baser sur app.currentQuoteIndex pour afficher la quote "courante"
    const template = document.querySelector("#card-template");
    const clone = document.importNode(template.content, true);

    const quote = clone.querySelector("#quote");
    const author = clone.querySelector("#author");

    const card = document.querySelector(".card");

    quote.textContent = quoteText;
    author.textContent = authorName;
    card.replaceWith(clone);
  },
  // Je crée une méthode dédiée à la gestion du click sur le bouton "Next"
  handleClickOnNextButton: () => {
    app.currentQuoteIndex < quotes.length - 1
      ? (app.currentQuoteIndex += 1)
      : null;
  },
  handleClickOnPrevButton: () => {
    app.currentQuoteIndex > 0 ? (app.currentQuoteIndex -= 1) : null;
  },
  handleClickOnFirstButton: () => {
    app.currentQuoteIndex = 0;
  },
  handleClickOnLastButton: () => {
    app.currentQuoteIndex = quotes.length - 1;
  },
};

// Appel "synchronisé" de la méthode init
// app.init();

// Permet d'exécuter notre code une fois le DOM chargé
// => lorsque l'event DOMContentLoaded survient => la méthode app.init est appelée
// donc app.init n'est pas exécuter lorsque JS lit cette ligne de code
document.addEventListener("DOMContentLoaded", app.init); // ici, ne jamais mettre les (), sinon, la fonction/méthode sera aussitôt exécutée

// Attention à la syntaxe, on ne doit pas mettre les () après la fonction, sinon elle est appelée aussitôt
// Explications :
// envoie de l'eau, au lancement du détecteur
// document.addEventListener('fuméeDetectée', envoyerDeLeau());
// Lorsque de la fumée sera détectée, envoie de l'eau
// document.addEventListener('fuméeDetectée', envoyerDeLeau);
