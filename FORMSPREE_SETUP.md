# Configuration Formspree - TAAJI CONSULTING

## 🚀 Setup Formspree pour les Formulaires

Ce guide explique comment configurer Formspree pour activer l'envoi des emails de contact et de devis.

## 📋 Étapes de Configuration

### 1. Créer un Compte Formspree

1. Allez sur [formspree.io](https://formspree.io)
2. Cliquez sur **"Get Started"**
3. Connectez-vous avec votre email (ou créez un compte)
4. Vérifiez votre email

### 2. Créer un Formulaire Contact

1. Dans le dashboard Formspree, cliquez sur **"New Form"** ou **"Create Form"**
2. Nommez-le : `contact` (ou `contact-taaji`)
3. Cliquez sur **"Create"**
4. Vous recevrez un **FORM ID** sous la forme : `xyz123abc`
5. Copiez cet ID

### 3. Créer un Formulaire Devis

1. Répétez l'étape 2
2. Nommez-le : `devis` (ou `devis-taaji`)
3. Copiez le **FORM ID**

### 4. Remplacer les Placeholders dans le Code

**Pour le formulaire de Contact (contact.html) :**
```html
<!-- Avant -->
<form id="contactForm" class="contact-form" method="POST" action="https://formspree.io/f/YOUR_FORM_ID">

<!-- Après (remplacez YOUR_FORM_ID par votre ID) -->
<form id="contactForm" class="contact-form" method="POST" action="https://formspree.io/f/xyz123abc">
```

**Pour le formulaire de Devis (solutions.html) :**
```html
<!-- Avant -->
<form id="quoteForm" class="quote-form-modern" method="POST" action="https://formspree.io/f/YOUR_FORM_ID">

<!-- Après (remplacez YOUR_FORM_ID par votre ID) -->
<form id="quoteForm" class="quote-form-modern" method="POST" action="https://formspree.io/f/abc456xyz">
```

### 5. Vérifier que ça Marche

1. Testez le formulaire de contact en local ou en prod
2. Vous devriez recevoir un email de Formspree pour confirmer votre première soumission
3. Une fois confirmé, vous recevrez tous les emails futurs directement

---

## 💡 Fonctionnalités Incluées

✅ **Validation côté client** (JavaScript)
✅ **Anti-spam** avec `_captcha: false` (pas de reCAPTCHA, mais protection basique)
✅ **Protection honeypot** avec `_gotcha` (hidden field)
✅ **Ligne d'objet personnalisée** (`_subject`)
✅ **Messages de chargement/succès/erreur** dynamiques
✅ **Redirection optionnelle** (voir plus bas)

---

## 🎯 Options Avancées (Optionnel)

### Redirection Après Soumission

Ajouter une ligne cachée dans chaque formulaire pour rediriger après envoi :

```html
<input type="hidden" name="_next" value="https://taajii-consulting.com/merci.html">
```

Ensuite, créez une page `merci.html` pour remercier l'utilisateur.

### Recevoir les Emails à une Adresse Personnalisée

Par défaut, les emails vont à l'adresse de votre compte Formspree. Pour les envoyer ailleurs :

1. Dans le dashboard Formspree
2. Allez dans **"Settings"** du formulaire
3. Modifiez **"Send to"** avec votre adresse email souhaitée
4. Vérifiez l'email de confirmation

### Activer reCAPTCHA

Si vous voulez une meilleure protection anti-spam :

```html
<input type="hidden" name="_captcha" value="true">
```

Puis configurez reCAPTCHA dans les settings Formspree.

---

## 📧 Tarification Formspree

- **Plan Gratuit** : 50 soumissions/mois
- **Plan Pro** : À partir de $25/mois pour 1000 soumissions
- **Plan Enterprise** : Illimité

Pour TAAJI CONSULTING, le plan gratuit devrait suffire initialement. Vous pouvez upgrader plus tard si nécessaire.

---

## 🔧 Dépannage

### ❌ Les emails n'arrivent pas

1. Vérifiez que vous avez remplacé `YOUR_FORM_ID` par votre vrai ID
2. Vérifiez que le formulaire a `method="POST"`
3. Vérifiez les logs dans le dashboard Formspree
4. Attendez 30 secondes après soumission

### ❌ Les champs ne sont pas reçus

- Vérifiez que les attributs `name=""` correspondent à ce qui est attendu
- Vérifiez que le formulaire valide (erreurs JavaScript)
- Consultez les détails de la soumission dans Formspree

### ❌ Erreur CORS

Si vous testez en local et avez une erreur CORS :
- C'est normal, Formspree va bloquer les requêtes locales
- Déployez en prod pour tester les formulaires
- Ou utilisez un outil comme ngrok pour exposer votre localhost

---

## 📞 Support

- **Formspree Docs** : [docs.formspree.io](https://docs.formspree.io)
- **Email** : support@formspree.io
- **Status Page** : [status.formspree.io](https://status.formspree.io)

---

**Configuration complétée ! Vos formulaires sont maintenant opérationnels. 🎉**
