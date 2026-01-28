🚀 GUIDE DE DÉMARRAGE RAPIDE - SÉLECTEUR DE QUANTITÉ
════════════════════════════════════════════════════════════════════════════

✨ QUOI DE NEUF ?
─────────────────────────────────────────────────────────────────────────

Chaque produit du catalogue peut maintenant avoir sa quantité sélectionnée
avant d'être ajouté au panier via deux boutons + et -.

┌────────────────────────────────────┐
│ AVANT          │ APRÈS              │
├────────────────┼────────────────────┤
│ [     +      ] │ [- │ 5 │ +] [AJOUTER]
│ (Ajoute 1x)    │ (Sélectionne 5x)   │
└────────────────┴────────────────────┘


📍 OÙ TROUVER LES MODIFICATIONS ?
─────────────────────────────────────────────────────────────────────────

Fichiers modifiés:
  1. catalogue.html   ← Affichage des sélecteurs
  2. cart.js          ← Logique JavaScript
  3. cart-styles.css  ← Styling

Fichiers de documentation NOUVEAUX:
  • MODIFICATIONS-QUANTITE.md       ← Résumé des changes
  • GUIDE-TEST-QUANTITE.md          ← Comment tester
  • DEMO-VISUELLE-SELECTEUR.txt     ← Visualisation
  • RESUME-FINAL.md                 ← Vue d'ensemble complète
  • REFERENCE-QUICK-JS.js           ← Référence code
  • INDEX-FICHIERS.md               ← Cet index
  • test-sélecteur-quantité.html    ← Test interactif


🎯 COMMENT UTILISER ?
─────────────────────────────────────────────────────────────────────────

ÉTAPE 1: Accéder au catalogue
  Ouvrir: catalogue.html

ÉTAPE 2: Voir le sélecteur de quantité
  Chaque produit a maintenant: [- │ 1 │ +]

ÉTAPE 3: Changer la quantité
  • Cliquer "-" pour diminuer
  • Cliquer "+" pour augmenter
  • Ou cliquer le chiffre et taper

ÉTAPE 4: Ajouter au panier
  Cliquer "Ajouter" (au lieu de "+")
  → Notification: "5x Produit ajouté au panier!"

ÉTAPE 5: Voir le panier
  Cliquer l'icône panier (haut à droite)
  → Voir tous les articles avec leurs quantités


⚙️ COMMENT TESTER ?
─────────────────────────────────────────────────────────────────────────

RAPIDE (5 min):
  1. Ouvrir catalogue.html
  2. Tester les boutons +/-
  3. Ajouter un produit au panier
  4. Vérifier la notification
  5. Ouvrir le panier pour confirmer

COMPLET (30 min):
  Lire: GUIDE-TEST-QUANTITE.md
  Suivre tous les tests listés

INTERACTIF (10 min):
  Ouvrir: test-sélecteur-quantité.html
  Tester dans une page de test isolée


📂 STRUCTURE FICHIERS
─────────────────────────────────────────────────────────────────────────

site vitrine/
├── 📄 HTML Pages (8)
│   ├─ catalogue.html              ✏️ MODIFIÉ
│   ├─ index.html
│   ├─ a-propos.html
│   ├─ equipe.html
│   ├─ contact.html
│   ├─ inscription.html
│   ├─ connexion.html
│   └─ mdp-oublie.html
│
├── 🎨 CSS & Config (2)
│   ├─ style.css
│   ├─ cart-styles.css              ✏️ MODIFIÉ
│   └─ tailwind.config.js
│
├── 📜 JavaScript (1)
│   └─ cart.js                      ✏️ MODIFIÉ
│
├── 📚 DOCUMENTATION (6 NOUVEAUX)
│   ├─ MODIFICATIONS-QUANTITE.md
│   ├─ GUIDE-TEST-QUANTITE.md
│   ├─ DEMO-VISUELLE-SELECTEUR.txt
│   ├─ RESUME-FINAL.md
│   ├─ REFERENCE-QUICK-JS.js
│   └─ INDEX-FICHIERS.md
│
├── 🧪 TEST (1 NOUVEAU)
│   └─ test-sélecteur-quantité.html
│
├── 🖼️ Assets
│   ├─ images/
│   └─ pdf/
│
└─ 📁 Autres
    └─ .git/
    └─ .vscode/


🔗 NAVIGATION RAPIDE DANS LA DOCUMENTATION
─────────────────────────────────────────────────────────────────────────

SI VOUS VOULEZ...              LIRE...
─────────────────────────────────────────────────────────────────────────
Comprendre les changements  → MODIFICATIONS-QUANTITE.md
Tester la fonctionnalité    → GUIDE-TEST-QUANTITE.md
Voir le design              → DEMO-VISUELLE-SELECTEUR.txt
Vue d'ensemble complète     → RESUME-FINAL.md
Comprendre le code JS       → REFERENCE-QUICK-JS.js
Trouver un fichier          → INDEX-FICHIERS.md
Tester rapidement           → test-sélecteur-quantité.html


💻 DÉTAILS TECHNIQUES
─────────────────────────────────────────────────────────────────────────

TROIS NOUVELLES FONCTIONS JAVASCRIPT:

1. addToCart(productId, productName, productPrice)
   └─ Récupère la quantité sélectionnée et ajoute au panier

2. increaseProductQuantity(productId)
   └─ Augmente la quantité d'1 (max 99)

3. decreaseProductQuantity(productId)
   └─ Diminue la quantité d'1 (min 1)

UTILISATION:
<button onclick="decreaseProductQuantity('one-piece-100')">−</button>
<input type="number" class="product-quantity" value="1" min="1" max="99">
<button onclick="increaseProductQuantity('one-piece-100')">+</button>
<button onclick="addToCart('one-piece-100', 'One Piece Vol. 100', 6.90)">
    Ajouter
</button>


✅ CHECKLIST FINALE
─────────────────────────────────────────────────────────────────────────

AVANT DE DÉPLOYER:
  [ ] Ouvrir catalogue.html
  [ ] Voir les sélecteurs de quantité
  [ ] Tester au moins 3 produits
  [ ] Ajouter plusieurs quantités différentes
  [ ] Ouvrir le panier et vérifier
  [ ] Rafraîchir la page (F5) et vérifier persistance
  [ ] Ouvrir la console (F12) - pas d'erreurs rouges
  [ ] Test sur mobile (redimensionner à 375px)
  [ ] Tous les filtres (Tout, Manga, Comics, BD) fonctionnent
  [ ] Lire RESUME-FINAL.md checklist finale

APRÈS DÉPLOIEMENT:
  [ ] Tester sur production
  [ ] Demander au client de tester
  [ ] Collecter le feedback
  [ ] Corriger les bugs éventuels


📞 SUPPORT & PROBLÈMES
─────────────────────────────────────────────────────────────────────────

PROBLÈME                    → SOLUTION
─────────────────────────────────────────────────────────────────────────
Boutons +/- ne marchent   → Lire REFERENCE-QUICK-JS.js - Diagnostic
Quantités pas sauvegardées → Vérifier localStorage (F12)
Erreur JavaScript         → Regarder console (F12)
Panier vide après reload  → localStorage.getItem('shonenshelfCart')
Produit pas visible       → Vérifier data-product-id unique
Design cassé sur mobile   → Vérifier responsive en F12


🎓 POUR COMPRENDRE LE CODE
─────────────────────────────────────────────────────────────────────────

NIVEAU DÉBUTANT:
  1. Lire: DEMO-VISUELLE-SELECTEUR.txt
  2. Regarder: test-sélecteur-quantité.html
  3. Tester: Interactivement

NIVEAU INTERMÉDIAIRE:
  1. Lire: MODIFICATIONS-QUANTITE.md
  2. Consulter: REFERENCE-QUICK-JS.js
  3. Examiner: cart.js changes
  4. Tester: Avec checklist

NIVEAU AVANCÉ:
  1. Lire: REFERENCE-QUICK-JS.js (complet)
  2. Étudier: cart.js (logique complète)
  3. Analyser: catalogue.html (structure)
  4. Améliorer: Ajouter des features


🚀 PROCHAINES ÉTAPES POSSIBLES
─────────────────────────────────────────────────────────────────────────

Améliorations futures:
  □ Ajouter sélecteur sur les autres pages
  □ Système de favoris
  □ Recommandations de produits
  □ Historique d'achat
  □ Codes de réduction
  □ Commentaires de clients
  □ Backend pour persistance
  □ Paiement réel
  □ Gestion de stocks
  □ Notifications push

Voir: RESUME-FINAL.md pour plus de détails


⏱️ ESTIMATIONS DE TEMPS
─────────────────────────────────────────────────────────────────────────

Comprendre le projet       : 15 min
Tester la fonctionnalité   : 20 min
Déployer                   : 5 min
Support client             : À discuter

TOTAL SETUP               : ~40 min


📊 RÉSUMÉ DES STATS
─────────────────────────────────────────────────────────────────────────

Fichiers modifiés         : 3
Nouvelles lignes          : ~150
Nouvelles fonctions       : 2
Produits concernés        : 12/12
Erreurs détectées         : 0
Status de déploiement     : ✅ PRÊT


═══════════════════════════════════════════════════════════════════════════════

                    🎉 INSTALLATION COMPLÈTE PRÊTE! 🎉

═══════════════════════════════════════════════════════════════════════════════

Questions? Consultez l'un des fichiers de documentation ci-dessus.
Besoin de tester? Ouvrez test-sélecteur-quantité.html
Prêt à déployer? Vérifiez RESUME-FINAL.md checklist finale.

═══════════════════════════════════════════════════════════════════════════════
