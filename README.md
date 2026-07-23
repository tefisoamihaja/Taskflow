# TaskFlow — Application To-Do List avec React & Vite

TaskFlow est une application web de gestion de tâches moderne et intuitive développée en React.js. 
Ce projet met en pratique les fondamentaux de React (états, hooks, propriétés, découpage en composants) à travers une approche de développement UI-First.

---

## I - Fonctionnalités

### Gestion des tâches (CRUD)
* Création (Create) : Ajout de tâches avec génération d'identifiants uniques.
* Modification (Edit) : Marquage des tâches comme complétées ou actives.
* Suppression (Delete) : Retrait instantané des tâches de la liste.

### Persistance des données
* Sauvegarde locale (localStorage) : Les tâches sont automatiquement enregistrées dans le navigateur de l'utilisateur. Elles persistent et ne disparaissent pas, même après avoir actualisé la page ou fermé le navigateur.

### Suivi dynamique et UI
* Indicateurs en temps réel : Compteur dynamique des tâches réalisées et des tâches restantes.
* Adaptation textuelle : Gestion automatique des accords et des pluriels selon le nombre de tâches.
* Affichage conditionnel : Messages personnalisés lorsque toutes les tâches sont accomplies.

### Architecture modulaire
* Composants isolés : Découpage propre de l'interface pour une meilleure maintenabilité (Header, Input, List, Item, Footer).
* Styles encapsulés : Utilisation des CSS Modules pour éviter les conflits de styles globaux.

---

## II - Tech Stack & Outils

* Framework / Bibliothèque : React.js (Hooks useState, useEffect)
* Tooling & Bundler : Vite (npm create vite@latest)
* Styling : CSS / CSS Modules
* Langage : JavaScript (ES6+)
* Hébergement & Déploiement : Vercel

---

## III - Installation et Lancement

### 1. Cloner le dépôt
Ouvrez votre terminal et exécutez les commandes suivantes :
```bash
git clone https://github.com
cd task-flow
```

### 2. Installer les dépendances
Installez les paquets requis par le projet :
```bash
npm install
```

### 3. Lancer le serveur de développement
Démarrez l'application localement :
```bash
npm run dev
```

### 4. Ouvrir dans le navigateur
Rendez-vous sur l'adresse locale générée par Vite : http://localhost:5173.


*****WIP*****
