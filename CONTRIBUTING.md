# Guide de Contribution - TAAJI CONSULTING

Merci de votre intérêt pour le site web de TAAJI CONSULTING !

## 🔒 Propriété et Confidentialité

Ce projet est la **propriété exclusive de TAAJI CONSULTING**. Toute contribution doit respecter les politiques internes de l'entreprise.

## 👥 Contributeurs Autorisés

Seuls les membres de l'équipe TAAJI CONSULTING ou les partenaires sous contrat peuvent contribuer à ce projet.

## 📋 Processus de Contribution

### 1. Configuration de l'Environnement

```bash
# Cloner le repository (accès restreint)
git clone https://github.com/taajii-consulting/website.git
cd website

# Créer une branche pour vos modifications
git checkout -b feature/nom-de-la-fonctionnalite
```

### 2. Standards de Code

#### HTML
- Utilisez HTML5 sémantique (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Ajoutez des attributs `alt` descriptifs sur toutes les images
- Validez votre HTML avec [W3C Validator](https://validator.w3.org/)

#### CSS
- Respectez la palette de couleurs existante
- Utilisez les classes existantes avant d'en créer de nouvelles
- Maintenez le responsive design (breakpoint à 768px)
- Commentez les sections importantes

```css
/* ===== Nouvelle Section ===== */
.nouvelle-classe {
    /* Propriétés CSS */
}
```

#### JavaScript
- Utilisez du JavaScript vanilla (pas de frameworks)
- Commentez les fonctions complexes
- Testez la compatibilité navigateur

### 3. Conventions de Nommage

- **Fichiers** : `kebab-case.html`, `style.css`
- **Classes CSS** : `.kebab-case`, `.component-name`
- **IDs** : `camelCase` ou `kebab-case`
- **Images** : `descriptive-name.jpg` (minuscules)

### 4. Tests Avant Commit

Avant de soumettre vos modifications :

```bash
# Testez localement
python -m http.server 8000

# Vérifiez :
✓ Toutes les pages chargent correctement
✓ Les liens fonctionnent
✓ Le responsive design est intact
✓ Les formulaires sont fonctionnels
✓ Pas d'erreurs console
✓ Images chargent correctement
```

### 5. Commit et Push

```bash
# Ajoutez vos modifications
git add .

# Commit avec un message descriptif
git commit -m "Type: Description courte

Description détaillée des changements apportés.
Inclut les fichiers modifiés et la raison des modifications."

# Push vers la branche
git push origin feature/nom-de-la-fonctionnalite
```

### 6. Pull Request

Créez une Pull Request avec :
- **Titre clair** : "Ajout de [fonctionnalité]" ou "Correction de [bug]"
- **Description** : Expliquez ce qui a été modifié et pourquoi
- **Screenshots** : Ajoutez des captures d'écran pour les changements visuels
- **Tests effectués** : Listez les navigateurs et appareils testés

## 🐛 Rapporter un Bug

### Template de Bug Report

```markdown
**Description du bug**
Description claire et concise du problème.

**Étapes pour reproduire**
1. Allez sur '...'
2. Cliquez sur '...'
3. Scrollez jusqu'à '...'
4. Le bug apparaît

**Comportement attendu**
Ce qui devrait normalement se passer.

**Screenshots**
Ajoutez des captures d'écran si pertinent.

**Environnement**
- Navigateur: [ex. Chrome 120]
- OS: [ex. Windows 11]
- Appareil: [ex. Desktop, iPhone 14]
```

## 💡 Proposer une Amélioration

### Template de Feature Request

```markdown
**Fonctionnalité souhaitée**
Description claire de la fonctionnalité.

**Problème résolu**
Quel problème cette fonctionnalité résoudrait-elle ?

**Solution proposée**
Comment imaginez-vous l'implémentation ?

**Alternatives considérées**
Avez-vous pensé à d'autres approches ?

**Impact**
- Utilisateurs concernés: [tous/certains]
- Priorité: [haute/moyenne/basse]
- Complexité estimée: [facile/moyenne/complexe]
```

## 📝 Checklist Pré-Merge

Avant que votre Pull Request soit acceptée :

- [ ] Le code respecte les conventions de nommage
- [ ] Le HTML est valide (W3C)
- [ ] Le CSS est organisé et commenté
- [ ] Le responsive design fonctionne (mobile, tablette, desktop)
- [ ] Les images ont des attributs `alt`
- [ ] Pas d'erreurs dans la console navigateur
- [ ] Les liens internes et externes fonctionnent
- [ ] Les formulaires sont testés
- [ ] Le site charge en < 3 secondes
- [ ] Compatible Chrome, Firefox, Safari, Edge
- [ ] La documentation est mise à jour si nécessaire

## 🔐 Sécurité

Si vous découvrez une faille de sécurité :
- **NE PAS** créer de ticket public
- Contactez directement : security@taajii-consulting.com
- Incluez une description détaillée et des étapes de reproduction

## 📞 Contact

Pour toute question sur les contributions :
- **Email** : dev@taajii-consulting.com
- **Slack** : #website (pour les membres de l'équipe)

---

## 🎯 Priorités Actuelles

### À Implémenter
- [ ] Page mentions légales complète
- [ ] Intégration formulaire avec backend
- [ ] Google Analytics
- [ ] Optimisation SEO avancée
- [ ] Version anglaise

### En Discussion
- [ ] Espace client
- [ ] Blog/Actualités
- [ ] Portfolio projets
- [ ] Témoignages clients

---

**Merci de contribuer au succès de TAAJI CONSULTING ! 🚀**
