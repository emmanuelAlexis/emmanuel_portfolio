# 📸 Guide de Capture d'Écran pour le Portfolio

Ce document liste les pages à capturer pour chaque projet afin de compléter le portfolio.

## 🎯 Instructions Générales

- **Format** : PNG ou WebP
- **Résolution** : 1920x1080 minimum
- **Qualité** : Haute qualité, sans compression excessive
- **Emplacement** : `public/[nom-projet]/[nom-page].png`

---

## 1. ChessAssist ♟️

**Dossier** : `public/chess/`

### Pages à capturer :

1. **home.png** - Page d'accueil
   - Écran de sélection de couleur (blanc/noir)
   - Afficher le titre "ChessAssist" et les boutons de choix
   - Mode clair

2. **game.png** - Interface de jeu
   - Échiquier avec une partie en cours
   - Panneau latéral avec historique des coups
   - Suggestions de l'IA visibles (cases mises en surbrillance)
   - Mode clair

3. **dark.png** - Mode sombre
   - Même vue que game.png mais en mode sombre
   - Montrer les effets glassmorphiques et gradients

**Chemin du projet** : `d:\PROJECT\L3\NEEDED\ChessAssist\next_front_startup_with_dark_mode`

---

## 2. DevTracker 📊

**Dossier** : `public/devtracker/`

### Pages à capturer :

1. **home.png** - Page d'accueil
   - Landing page avec Hero Section
   - Sections "How It Works" et "Stats"
   - Design moderne avec animations

2. **dashboard.png** - Dashboard de gestion
   - Vue d'ensemble des projets
   - Statistiques et métriques
   - Interface avec mode sombre activé

3. **projects.png** - Liste des projets
   - Grille de projets avec cartes
   - Filtres et options de tri
   - Détails des projets (titre, description, technologies, statut)

**Chemin du projet** : `d:\PROJECT\L3\NEEDED\DEV_TRACKER\frontend`

---

## 3. Globydep / Mofidra 💰

**Dossier** : `public/globydep/`

### Pages à capturer :

1. **dashboard.png** - Dashboard principal
   - Affichage du solde total et solde de la semaine
   - Graphiques (Pie chart et Bar chart)
   - Statistiques d'emprunts
   - Boutons d'actions rapides

2. **expenses.png** - Gestion des dépenses
   - Liste des dépenses de la semaine
   - Formulaire d'ajout de dépense
   - Distinction dépenses fixes/variables

3. **loans.png** - Gestion des emprunts
   - Liste des emprunts
   - Statut (remboursé/en cours)
   - Interface de sélection de contact

**Chemin du projet** : `d:\PROJECT\L3\NEEDED\globydep`

**Note** : Utiliser un émulateur Android ou iOS pour capturer les écrans

---

## 4. Room Application 🏨

**Dossier** : `public/room/`

### Pages à capturer :

1. **home.png** - Page d'accueil
   - Landing page de l'application
   - Présentation des fonctionnalités
   - Design responsive avec Material-UI

2. **rooms.png** - Liste des chambres
   - Grille de chambres disponibles
   - Filtres de recherche
   - Informations de disponibilité en temps réel

3. **booking.png** - Interface de réservation
   - Formulaire de réservation
   - Détails de la chambre sélectionnée
   - Calendrier de disponibilité

**Chemin du projet** : `d:\PROJECT\L3\NEEDED\room-app\frontend`

---

## 5. Portail Région Diana 🏛️

**Dossier** : `public/region/`

### Pages à capturer :

1. **home.png** - Portail citoyen
   - Page d'accueil du portail client
   - Navigation principale
   - Sections de services disponibles
   - Design moderne et responsive

2. **admin.png** - Interface d'administration
   - Dashboard administrateur
   - Menu de navigation admin
   - Gestion des contenus

3. **services.png** - Page de services
   - Liste des services de la région
   - Informations détaillées
   - Interface utilisateur moderne

**Chemins du projet** :
- Portail client : `d:\PROJECT\L3\NEEDED\REGION-DIANA\front-region-client`
- Interface admin : `d:\PROJECT\L3\NEEDED\REGION-DIANA\frontend-administration`

---

## 📝 Checklist de Validation

Avant de finaliser les captures :

- [ ] Toutes les images sont en haute résolution (1920x1080 min)
- [ ] Les noms de fichiers correspondent exactement à ceux spécifiés
- [ ] Les dossiers sont créés dans `public/`
- [ ] Les captures montrent les fonctionnalités principales
- [ ] Le design est propre et professionnel
- [ ] Pas d'informations sensibles visibles (mots de passe, données réelles)
- [ ] Les modes clairs/sombres sont bien représentés

---

## 🚀 Commandes pour Lancer les Projets

### ChessAssist
```bash
cd d:\PROJECT\L3\NEEDED\ChessAssist\next_front_startup_with_dark_mode
npm install
npm run dev
# Ouvrir http://localhost:3000
```

### DevTracker Frontend
```bash
cd d:\PROJECT\L3\NEEDED\DEV_TRACKER\frontend
pnpm install
pnpm dev
# Ouvrir http://localhost:3000
```

### DevTracker Backend (à lancer en parallèle)
```bash
cd d:\PROJECT\L3\NEEDED\DEV_TRACKER\ProjectTracker
dotnet run
# API sur http://localhost:5000
```

### Globydep
```bash
cd d:\PROJECT\L3\NEEDED\globydep
flutter pub get
flutter run
# Sélectionner un émulateur
```

### Room-App Frontend
```bash
cd d:\PROJECT\L3\NEEDED\room-app\frontend
npm install
npm run dev
# Ouvrir http://localhost:3000
```

### Room-App Backend (à lancer en parallèle)
```bash
cd d:\PROJECT\L3\NEEDED\room-app\backend
pnpm install
pnpm run start:dev
# API sur http://localhost:3000 (ou port configuré)
```

### Région Diana - Portail Client
```bash
cd d:\PROJECT\L3\NEEDED\REGION-DIANA\front-region-client
npm install
npm run dev
# Ouvrir http://localhost:3000
```

### Région Diana - Interface Admin
```bash
cd d:\PROJECT\L3\NEEDED\REGION-DIANA\frontend-administration
npm install
npm run dev
# Ouvrir http://localhost:3000 (utiliser un port différent si le client est déjà lancé)
```

---

## 💡 Conseils pour de Belles Captures

1. **Utiliser des données de démonstration réalistes** mais non sensibles
2. **Désactiver les outils de développement** du navigateur
3. **Masquer la barre de favoris** et autres éléments du navigateur
4. **Utiliser le mode plein écran** (F11) pour les captures
5. **Capturer en mode "Responsive"** pour montrer l'adaptabilité
6. **Ajouter des données variées** pour montrer les fonctionnalités
7. **Vérifier l'orthographe** et les textes affichés
8. **Utiliser des couleurs cohérentes** avec le design du projet

---

## 🎨 Outils Recommandés

- **Windows** : Outil Capture d'écran (Win + Shift + S)
- **Navigateur** : DevTools > Device Toolbar (Ctrl + Shift + M)
- **Éditeur** : GIMP, Photoshop, ou Paint.NET pour retouches
- **Compression** : TinyPNG ou Squoosh pour optimiser sans perte de qualité

---

**Date de création** : 2025-11-30  
**Dernière mise à jour** : 2025-11-30
