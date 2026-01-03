# Guide de Déploiement - TAAJI CONSULTING

Ce guide vous aide à déployer le site web de TAAJI CONSULTING sur différentes plateformes.

## 🚀 Déploiement Rapide

### Option 1 : GitHub Pages (Recommandé pour démarrer)

#### Étape 1 : Initialiser Git

```bash
# Dans le dossier du projet
cd "/Users/steve/Taajii Consulting"

# Initialiser le repository
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "🎉 Initial commit - TAAJI CONSULTING Website v1.0"
```

#### Étape 2 : Créer le Repository GitHub

1. Allez sur [github.com](https://github.com) et connectez-vous
2. Cliquez sur **New repository**
3. Nom : `taajii-consulting-website` (ou autre)
4. Description : "Site web officiel de TAAJI CONSULTING"
5. **Important** : Laissez en **Private** (site propriétaire)
6. Ne cochez aucune option (pas de README, .gitignore, etc.)
7. Cliquez sur **Create repository**

#### Étape 3 : Lier et Pousser

```bash
# Remplacez USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/USERNAME/taajii-consulting-website.git

# Renommer la branche principale
git branch -M main

# Pousser vers GitHub
git push -u origin main
```

#### Étape 4 : Activer GitHub Pages

1. Dans votre repository, allez dans **Settings** (⚙️)
2. Menu latéral : **Pages**
3. Source : **Deploy from a branch**
4. Branch : Sélectionnez **main** et **/ (root)**
5. Cliquez sur **Save**
6. Attendez 1-2 minutes
7. Le site sera disponible à : `https://USERNAME.github.io/taajii-consulting-website`

#### ✅ Configuration Custom Domain (Optionnel)

Si vous avez un nom de domaine (ex: www.taajii-consulting.com) :

1. Dans GitHub Pages settings, ajoutez votre domaine dans **Custom domain**
2. Dans votre registrar de domaine, créez un enregistrement CNAME :
   ```
   www.taajii-consulting.com → USERNAME.github.io
   ```
3. Cochez **Enforce HTTPS** une fois le domaine validé

---

### Option 2 : Netlify (Recommandé pour Production)

#### Méthode A : Déploiement Direct (Glisser-Déposer)

1. Allez sur [netlify.com](https://www.netlify.com/)
2. Créez un compte (gratuit)
3. Glissez-déposez le dossier `Taajii Consulting` sur [app.netlify.com/drop](https://app.netlify.com/drop)
4. Site déployé instantanément ! 🎉
5. Vous obtenez une URL : `random-name-123.netlify.app`

#### Méthode B : Connexion Git (Mises à jour automatiques)

1. Poussez votre code sur GitHub (voir Option 1, étapes 1-3)
2. Sur Netlify, cliquez sur **Add new site** > **Import an existing project**
3. Sélectionnez **GitHub** et autorisez l'accès
4. Choisissez le repository `taajii-consulting-website`
5. Configuration :
   - Branch : `main`
   - Build command : (laisser vide)
   - Publish directory : `.` (point)
6. Cliquez sur **Deploy site**
7. ✅ Chaque push sur GitHub redéploiera automatiquement !

#### Configuration Netlify

**Custom Domain :**
1. Dans Site settings > Domain management
2. Ajoutez votre domaine personnalisé
3. Suivez les instructions DNS

**HTTPS :**
- Automatiquement activé via Let's Encrypt

**Formulaires :**
Pour activer l'envoi de formulaires Netlify :
```html
<!-- Dans contact.html et solutions.html -->
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact">
  <!-- Vos champs existants -->
</form>
```

---

### Option 3 : Vercel

```bash
# Installer Vercel CLI
npm install -g vercel

# Dans le dossier du projet
cd "/Users/steve/Taajii Consulting"

# Déployer
vercel

# Suivre les instructions :
# - Set up and deploy? Yes
# - Which scope? Votre compte
# - Link to existing project? No
# - Project name? taajii-consulting
# - In which directory? ./
# - Override settings? No
```

Votre site sera disponible à : `taajii-consulting.vercel.app`

**Custom Domain sur Vercel :**
```bash
vercel domains add www.taajii-consulting.com
```

---

### Option 4 : Hébergement Traditionnel (cPanel/FTP)

#### Services recommandés :
- **OVH** (France/Europe)
- **O2Switch** (France)
- **Hostinger** (International)
- **Kinamo** (RDC - pour localisation)

#### Étapes :

1. **Acheter un hébergement web**
   - Choisir un plan de base (suffisant pour site statique)
   - Enregistrer un domaine : `www.taajii-consulting.com`

2. **Accéder via FTP**
   - Télécharger FileZilla : [filezilla-project.org](https://filezilla-project.org/)
   - Récupérer identifiants FTP depuis cPanel
   - Se connecter :
     - Hôte : `ftp.votre-domaine.com`
     - Utilisateur : fourni par hébergeur
     - Mot de passe : fourni par hébergeur
     - Port : 21

3. **Uploader les fichiers**
   - Naviguer vers `public_html` ou `www` sur le serveur
   - Glisser-déposer tous les fichiers du projet
   - Structure après upload :
     ```
     public_html/
     ├── index.html
     ├── about.html
     ├── contact.html
     ├── css/
     ├── js/
     └── images/
     ```

4. **Configurer le domaine**
   - Le domaine pointe automatiquement vers `public_html`
   - Forcer HTTPS dans cPanel (SSL/TLS)
   - Configurer redirections www → non-www (ou inverse)

5. **Tester**
   - Visitez `www.votre-domaine.com`
   - Vérifiez toutes les pages
   - Testez les formulaires

---

## 🔧 Configurations Recommandées

### Fichiers `.htaccess` (Serveurs Apache)

Créez `.htaccess` à la racine :

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Redirection www vers non-www (ou inverse)
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]

# Cache des ressources statiques
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Compression GZIP
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>

# Pages d'erreur personnalisées
ErrorDocument 404 /index.html
```

### Google Maps API

Si vous utilisez votre propre clé API :

1. Allez sur [console.cloud.google.com](https://console.cloud.google.com/)
2. Créez un projet "TAAJII Website"
3. Activez "Maps JavaScript API"
4. Créez une clé API
5. Dans `contact.html`, remplacez :
```html
<iframe src="https://www.google.com/maps/embed?...&key=VOTRE_CLE_API"></iframe>
```

---

## 📊 Analytique & Monitoring

### Google Analytics

1. Créez un compte sur [analytics.google.com](https://analytics.google.com/)
2. Créez une propriété "TAAJII CONSULTING"
3. Récupérez l'ID de mesure (G-XXXXXXXXXX)
4. Ajoutez avant `</head>` dans tous les fichiers HTML :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Google Search Console

1. Allez sur [search.google.com/search-console](https://search.google.com/search-console)
2. Ajoutez votre domaine
3. Vérifiez via méthode HTML tag ou DNS
4. Soumettez le sitemap (créez `sitemap.xml`)

---

## 🧪 Tests Pré-Déploiement

Avant de déployer, vérifiez :

```bash
# Serveur local
python -m http.server 8000

# Ouvrir dans navigateur
open http://localhost:8000
```

### Checklist :
- [ ] Toutes les pages chargent (7 pages)
- [ ] Navigation fonctionne (menu + footer)
- [ ] Formulaires fonctionnent
- [ ] Images chargent correctement
- [ ] Logo s'affiche (preloader + navigation)
- [ ] Google Maps s'affiche
- [ ] Responsive fonctionne (mobile/tablet/desktop)
- [ ] Pas d'erreurs console (F12)
- [ ] Liens externes s'ouvrent dans nouvel onglet
- [ ] Toutes les couleurs correspondent à la charte

---

## 🔐 Sécurité

### Avant Déploiement :

1. **Vérifier .gitignore**
   - Pas de fichiers sensibles dans Git
   - Pas de `.DS_Store`, `.env`

2. **Formulaires**
   - Ajouter protection anti-spam (reCAPTCHA)
   - Implémenter validation backend

3. **HTTPS**
   - Forcer HTTPS sur production
   - Certificat SSL actif

4. **Headers de Sécurité**
   - X-Frame-Options: DENY
   - X-Content-Type-Options: nosniff
   - Content-Security-Policy

---

## 📞 Support

En cas de problème de déploiement :

- **Email technique** : dev@taajii-consulting.com
- **Documentation** : Voir README.md
- **Issues** : GitHub Issues (si repository public)

---

## 🎉 Après Déploiement

1. **Vérifier le site en production**
2. **Tester sur différents appareils**
3. **Configurer monitoring** (Google Analytics)
4. **Sauvegarder la configuration**
5. **Documenter l'URL de production**
6. **Former l'équipe** sur les mises à jour

---

**Site déployé avec succès ! 🚀**

TAAJI CONSULTING - Transforming Africa's Digital Future
