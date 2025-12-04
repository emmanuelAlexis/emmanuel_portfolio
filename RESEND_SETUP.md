# 📧 Configuration Resend pour le Formulaire de Contact

Ce guide vous explique comment configurer Resend pour que le formulaire de contact fonctionne sur Vercel.

## 🚀 Étapes de Configuration

### 1. Créer un compte Resend

1. Allez sur [resend.com](https://resend.com)
2. Créez un compte gratuit (3000 emails/mois gratuits)
3. Vérifiez votre email

### 2. Obtenir votre clé API

1. Une fois connecté, allez dans **API Keys** dans le menu
2. Cliquez sur **Create API Key**
3. Donnez-lui un nom (ex: "Portfolio Production")
4. Sélectionnez les permissions : **Sending access**
5. Cliquez sur **Add**
6. **Copiez la clé API** (elle commence par `re_...`)
   ⚠️ **Important** : Vous ne pourrez plus la voir après avoir fermé la fenêtre !

### 3. Configurer les variables d'environnement

#### 🔧 En local (.env.local)

Créez ou modifiez le fichier `.env.local` à la racine du projet :

```env
RESEND_API_KEY=re_votre_cle_api_ici
CONTACT_EMAIL=emmanueladolphe0401@gmail.com
```

#### ☁️ Sur Vercel

1. Allez sur [vercel.com/dashboard](https://vercel.com/dashboard)
2. Sélectionnez votre projet **emmanuel_portfolio**
3. Allez dans **Settings** → **Environment Variables**
4. Ajoutez ces variables :

| Name | Value | Environment |
|------|-------|-------------|
| `RESEND_API_KEY` | `re_votre_cle_api_ici` | Production, Preview, Development |
| `CONTACT_EMAIL` | `emmanueladolphe0401@gmail.com` | Production, Preview, Development |

5. Cliquez sur **Save**
6. **Redéployez** votre application pour que les changements prennent effet

### 4. Vérifier votre domaine (Optionnel mais recommandé)

Par défaut, Resend utilise `onboarding@resend.dev` comme expéditeur. Pour utiliser votre propre domaine :

1. Dans Resend, allez dans **Domains**
2. Cliquez sur **Add Domain**
3. Entrez votre domaine (ex: `emmanuelportfolio.com`)
4. Suivez les instructions pour ajouter les enregistrements DNS
5. Une fois vérifié, mettez à jour le code dans `src/app/api/contact/route.ts` :

```typescript
from: 'Portfolio Contact <contact@votredomaine.com>',
```

## 🧪 Tester en local

1. Assurez-vous que `.env.local` contient votre clé API
2. Lancez le serveur de développement :
   ```bash
   pnpm dev
   ```
3. Allez sur `http://localhost:3000`
4. Remplissez le formulaire de contact
5. Vérifiez votre boîte email

## 📊 Vérifier les emails envoyés

1. Connectez-vous à [resend.com](https://resend.com)
2. Allez dans **Emails** dans le menu
3. Vous verrez tous les emails envoyés avec leur statut :
   - ✅ **Delivered** : Email livré avec succès
   - ⏳ **Queued** : En cours d'envoi
   - ❌ **Failed** : Échec (voir les détails pour la raison)

## 🔍 Dépannage

### Erreur : "RESEND_API_KEY is not configured"
- Vérifiez que la variable d'environnement est bien définie
- Sur Vercel, redéployez après avoir ajouté la variable

### Les emails n'arrivent pas
- Vérifiez les spams
- Consultez le dashboard Resend pour voir le statut
- Vérifiez les logs Vercel : `vercel logs`

### Erreur 429 (Too Many Requests)
- Vous avez dépassé la limite gratuite (3000 emails/mois)
- Passez à un plan payant ou attendez le mois prochain

## 📝 Limites du plan gratuit

- ✅ 3000 emails/mois
- ✅ 100 emails/jour
- ✅ Support par email
- ❌ Pas de domaine personnalisé (utilise `onboarding@resend.dev`)

Pour un domaine personnalisé, passez au plan Pro (20$/mois).

## 🎯 Avantages de Resend vs Gmail

| Fonctionnalité | Resend | Gmail (Nodemailer) |
|----------------|--------|-------------------|
| Configuration | ✅ Simple | ❌ Complexe (App Password) |
| Fiabilité sur Vercel | ✅ Excellente | ⚠️ Variable |
| Limite gratuite | 3000/mois | 500/jour |
| Délivrabilité | ✅ Optimale | ⚠️ Peut être bloqué |
| Logs détaillés | ✅ Dashboard complet | ❌ Limité |
| Domaine personnalisé | ✅ Oui (plan Pro) | ❌ Non |

## 📚 Ressources

- [Documentation Resend](https://resend.com/docs)
- [Resend + Next.js](https://resend.com/docs/send-with-nextjs)
- [Dashboard Resend](https://resend.com/emails)

---

**✅ Une fois configuré, votre formulaire de contact fonctionnera parfaitement sur Vercel !**
