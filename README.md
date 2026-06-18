# RenoHab – notes projet

## Flux produit PAC (Google Sheet)

Les cartes « offres » de la page `/pompe-a-chaleur` (version V2) peuvent être alimentées dynamiquement via une Google Sheet publiée :

1. Créez un onglet dédié avec une ligne par offre et, au minimum, les colonnes : `Titre`, `Ref`, `Description`, `Photo`, `Prix de base`, `Prix post financement`. Les intitulés peuvent varier : le parser se base sur ces mots-clés (accents ignorés).
2. Dans Google Sheets : `Fichier > Publier sur le Web > Onglet ciblé > Web page`. Copiez l’URL gviz :  
   `https://docs.google.com/spreadsheets/d/<SHEET_ID>/gviz/tq?tqx=out:json&sheet=<NOM_ONGLET>`
3. Ajoutez cette URL au front via l’environnement : `REACT_APP_PAC_PRODUCTS_SHEET_URL="https://docs.google.com/..."`.  
   (Tu peux coller directement l’URL `.../pubhtml?...` fournie par Google : le hook la convertit automatiquement en `.../gviz/tq?...&tqx=out:json`.)
4. La page `/pompe-a-chaleur` utilise désormais la V2 par défaut. L’ancienne version reste accessible via l’URL cachée `/pompe-a-chaleur-classique` (pratique pour comparer ou faire des captures).

Au runtime, `useSheetProducts` va :

- Télécharger le JSON gviz, normaliser les en-têtes, et mapper chaque ligne vers `{ title, reference, description, photo, basePrice, financedPrice }`.
- Afficher automatiquement les cartes dans la section « Nos offres PAC ».  
Si l’URL n’est pas définie, la section est masquée. En cas d’erreur réseau, un message d’état s’affiche.

> Astuce : gardez l’accès « Visible via lien » ou « Public » sur l’onglet pour éviter les erreurs 403 côté navigateur.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
