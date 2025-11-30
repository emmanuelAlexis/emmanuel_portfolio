# Remplacement DevTracker par Bibliothèque Numérique

## Résumé des modifications

Le projet **DevTracker** a été remplacé par le projet **Bibliothèque Numérique (Biblio)** dans le portfolio.

## Fichiers modifiés

### 1. `src/lib/translations.ts`

#### Traduction française (lignes 192-196)
- **Ancien** : `devTracker`
- **Nouveau** : `biblio`
- **Titre** : "Bibliothèque Numérique"
- **Description courte** : "Application web de bibliothèque numérique avec gestion des utilisateurs, livres, auteurs et interactions sociales."
- **Description détaillée** : Plateforme complète avec Next.js 15 (frontend) et Spring Boot (backend), incluant :
  - Gestion des utilisateurs avec photos de profil
  - Publication et gestion de livres
  - Gestion des auteurs
  - Espace de discussion et notation par livre
  - Téléchargement sécurisé des livres
  - React Query, TailwindCSS, React Hook Form + Zod
  - Spring Security (JWT), Spring Data JPA, PostgreSQL/H2

#### Traduction anglaise (lignes 407-411)
- **Titre** : "Digital Library"
- **Description** : Traduction anglaise complète des mêmes fonctionnalités

### 2. `src/lib/data.tsx`

#### Projet (lignes 454-504)
- **ID** : 2 (conservé)
- **Technologies** :
  - Next.js
  - Spring Boot
  - PostgreSQL
  - TailwindCSS
  - Java
- **Images** :
  - `imageUrl`: `/biblio/illustration_1.png`
  - Images du carousel :
    - `/biblio/illustration_1.png`
    - `/biblio/illustration_2.png`
- **Date** : 2024-11
- **Accès** : private
- **Featured** : true

## Images disponibles

Les images sont déjà présentes dans `public/biblio/` :
- ✅ `illustration_1.png` (755 KB)
- ✅ `illustration_2.png` (1.28 MB)
- ✅ `biblio-1.png` (610 KB)
- ✅ `biblio-2.png` (443 KB)

## Technologies du projet Biblio

### Frontend
- Next.js 15
- TypeScript
- TailwindCSS
- React Query (@tanstack/react-query)
- Axios
- React Hook Form
- Zod
- Framer Motion

### Backend
- Spring Boot 3+
- Java 17+
- Spring Security (JWT)
- Spring Data JPA
- PostgreSQL / H2
- Stockage de fichiers (images et PDF)

## Fonctionnalités principales

1. **Gestion des utilisateurs**
   - Inscription / Connexion
   - Photos de profil
   - Rôles : USER / ADMIN

2. **Gestion des auteurs**
   - CRUD complet
   - Photos optionnelles

3. **Gestion des livres**
   - Publication par utilisateurs
   - Upload de couverture et PDF
   - Modification/suppression protégée

4. **Interactions sociales**
   - Commentaires et réponses
   - Système de notation (1-5)
   - Calcul de moyenne

5. **Téléchargement sécurisé**
   - Accès réservé aux utilisateurs connectés
   - Statistiques de téléchargement

## Prochaines étapes

Pour tester les modifications :
1. Démarrer le serveur de développement du portfolio
2. Vérifier que le projet Biblio s'affiche correctement
3. Tester les traductions FR/EN
4. Vérifier l'affichage des images

---

**Date de modification** : 2025-11-30
**Modifié par** : Antigravity AI Assistant
