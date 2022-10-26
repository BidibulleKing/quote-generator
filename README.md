# Citations

Un peu comme [www.webagencyfail.com](https://www.webagencyfail.com/page/2/index.html), on va se créer un petit site de citations des plus beaux râtés issus du monde du développement web, le tout en Javascript :tada:

## Étapes

### 1. Charger la première excuse

- Au chargement du DOM, afficher la première excuse de dév du tableau (dans `quote.js`)
- Coder et utiliser la méthode `app.displayCurrentQuote()` qui permet d'afficher la _citation courante_
- _citation courante_ signifie la citation pour l'index `app.currentQuoteIndex` dans le tableau des citations (dans `quote.js`)

### 2. Pagination

- Au clic sur le bouton "next"
  - modifier la propriété `app.currentQuoteIndex`
  - afficher la citation suivante
- Au clic sur le bouton "previous"
  - modifier la propriété `app.currentQuoteIndex`
  - afficher la citation précédente
- Au clic sur le bouton "first"
  - modifier la propriété `app.currentQuoteIndex`
  - afficher la première citation
- Au clic sur le bouton "last"
  - modifier la propriété `app.currentQuoteIndex`
  - afficher la dernière citation

### 3. Ajout d'une citation

- Lors de la soumission du formulaire d'ajout
  - intercepter le formulaire en JS
  - ajouter la citation et l'auteur dans le tableau de citations
  - en utilisant la pagination, la nouvelle citation devrait apparaître en dernier
- Bien entendu, l'ajout n'est pas persistant, donc au refresh de la page, tous les ajouts seront perdus (on verra en S07 comment améliorer cela :wink:)
