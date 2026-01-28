# Guide de Test - Sélecteur de Quantité

## Comment Tester les Modifications

### 1. **Accéder à la Page Catalogue**
- Ouvrir `catalogue.html` dans votre navigateur
- Observer les cartes produits avec le nouveau design

### 2. **Tests Fonctionnels - Sélecteur de Quantité**

#### Test 2.1: Augmentation de Quantité
```
1. Localiser une carte produit (ex: "One Piece Vol. 100")
2. Cliquer le bouton "+" plusieurs fois
3. Résultat attendu: La quantité augmente (1 → 2 → 3 → ... → 99)
4. Limite: Le bouton "+" ne fonctionne plus à 99
```

#### Test 2.2: Diminution de Quantité
```
1. Sélectionner une quantité de 5
2. Cliquer le bouton "-" plusieurs fois
3. Résultat attendu: La quantité diminue (5 → 4 → 3 → 2 → 1)
4. Limite: Le bouton "-" ne fonctionne plus à 1
```

#### Test 2.3: Édition Manuelle
```
1. Cliquer sur le chiffre de quantité
2. Effacer et entrer une nouvelle valeur (ex: 15)
3. Résultat attendu: La valeur se met à jour
4. Test des limites: Essayer 0, 100, 150 (devrait être limité à 1-99)
```

### 3. **Tests d'Ajout au Panier**

#### Test 3.1: Ajouter avec Quantité 1
```
1. Laisser la quantité à 1 (défaut)
2. Cliquer le bouton "Ajouter"
3. Résultats attendus:
   - Notification: "1x [Produit] ajouté au panier!"
   - Counter du panier augmente de 1
   - Quantité revient à 1
```

#### Test 3.2: Ajouter avec Quantité 5
```
1. Augmenter la quantité à 5 (clic sur + 4 fois)
2. Cliquer le bouton "Ajouter"
3. Résultats attendus:
   - Notification: "5x [Produit] ajouté au panier!"
   - Counter du panier augmente de 5
   - Quantité revient à 1
```

#### Test 3.3: Ajouter le Même Produit Plusieurs Fois
```
1. Ajouter "One Piece" x3 (quantité = 3, clic Ajouter)
2. Sélectionner à nouveau quantité 2
3. Ajouter "One Piece" x2 (quantité = 2, clic Ajouter)
4. Ouvrir le panier (icône panier)
5. Résultat attendu: "One Piece" affiche quantité totale = 5
```

### 4. **Tests du Panier Modal**

#### Test 4.1: Vérifier le Contenu
```
1. Ajouter plusieurs produits avec différentes quantités
2. Cliquer sur l'icône panier (en haut à droite)
3. Résultats attendus:
   - Tous les produits sont listés
   - Quantités correctes affichées
   - Totaux calculés correctement
   - Boutons +/- fonctionnels dans le modal
```

#### Test 4.2: Vérifier le Total
```
1. Ajouter:
   - 2x produit 6.90€ = 13.80€
   - 1x produit 15.00€ = 15.00€
2. Total attendu: 28.80€
```

### 5. **Tests de Responsive Design**

#### Test 5.1: Desktop (1920px)
```
1. Redimensionner la fenêtre à 1920px de large
2. Vérifier l'affichage de 4 colonnes de produits
3. Sélecteur doit être bien aligné
```

#### Test 5.2: Tablette (768px)
```
1. Redimensionner la fenêtre à 768px de large
2. Vérifier l'affichage de 2 colonnes de produits
3. Sélecteur doit rester accessible
```

#### Test 5.3: Mobile (375px)
```
1. Redimensionner la fenêtre à 375px de large
2. Vérifier l'affichage de 1 colonne de produits
3. Sélecteur doit être facile à utiliser avec le doigt
4. Boutons doivent être assez grands (min 28x28px)
```

### 6. **Tests du Filtrage**

#### Test 6.1: Filtrer par Catégorie
```
1. Cliquer "Manga" (bouton de filtre)
2. Vérifier que seuls les mangas s'affichent
3. Ajouter un manga au panier
4. Cliquer "Comics"
5. Ajouter un comic au panier
6. Vérifier que les deux sont dans le panier (modal)
```

#### Test 6.2: Filtrer "TOUT"
```
1. Cliquer "TOUT"
2. Tous les 12 produits doivent être visibles
3. Le sélecteur doit fonctionner sur chacun
```

### 7. **Tests d'Edge Cases**

#### Test 7.1: Quantité à la Limite
```
1. Sélectionner 99 (maximum)
2. Cliquer + (ne devrait rien faire)
3. Ajouter au panier
4. Vérifier notification: "99x [Produit] ajouté au panier!"
```

#### Test 7.2: Quantité Minimale
```
1. Sélectionner 1 (minimum)
2. Cliquer - (ne devrait rien faire)
3. Ajouter au panier
4. Vérifier notification: "1x [Produit] ajouté au panier!"
```

#### Test 7.3: Panier Vide
```
1. Rafraîchir la page (F5)
2. Cliquer sur le panier
3. Résultat attendu: "Votre panier est vide"
4. Ajouter un produit
5. Vérifier qu'il apparaît dans le panier
```

### 8. **Tests de Persistance (localStorage)**

#### Test 8.1: Persistance Entre Pages
```
1. Ajouter 3x "One Piece" au panier
2. Naviguer vers "À propos" (a-propos.html)
3. Ouvrir le panier
4. Résultat attendu: "One Piece" x3 toujours présent
5. Naviguer vers "Catalogue"
6. Vérifier que le panier est toujours correct
```

#### Test 8.2: Persistance après Fermeture
```
1. Ajouter des produits au panier
2. Fermer le navigateur complètement
3. Rouvrir et aller sur catalogue.html
4. Ouvrir le panier
5. Résultat attendu: Tous les produits sont toujours présents
```

### 9. **Tests de Validation des Entrées**

#### Test 9.1: Entrée Non-Numérique
```
1. Cliquer sur le chiffre de quantité
2. Essayer d'entrer du texte (abc)
3. Résultat attendu: Seuls les chiffres sont acceptés
```

#### Test 9.2: Valeurs Négatives
```
1. Entrer -5 dans le chiffre
2. Cliquer "Ajouter"
3. Résultat attendu: Traité comme 1 (minimum)
```

### 10. **Checklist Finale**

```
[ ] Tous les 12 produits ont le sélecteur de quantité
[ ] Bouton "-" fonctionne correctement
[ ] Bouton "+" fonctionne correctement
[ ] Chiffre de quantité affiche la valeur correcte
[ ] Limite minimale (1) respectée
[ ] Limite maximale (99) respectée
[ ] "Ajouter" ajoute la bonne quantité au panier
[ ] Notification affiche la bonne quantité
[ ] Quantité se réinitialise après ajout
[ ] Panier persiste (localStorage)
[ ] Responsive design fonctionne (mobile, tablette, desktop)
[ ] Filtrage par catégorie fonctionne
[ ] Aucune erreur dans la console (F12)
[ ] Accessibilité OK (aria-labels)
[ ] Performance acceptable
[ ] Design cohérent avec le site existant
```

## Commandes Utiles

### Ouvrir la Console pour Déboguer
```
1. Appuyer sur F12
2. Aller à l'onglet "Console"
3. Taper: console.log(cart) pour voir le contenu du panier
4. Taper: localStorage.getItem('shonenshelfCart') pour voir le stockage
```

### Vider le Panier (pour réinitialiser)
```
Dans la console:
localStorage.removeItem('shonenshelfCart');
location.reload();
```

### Vérifier une Fonction
```
Dans la console:
increaseProductQuantity('one-piece-100')
decreaseProductQuantity('one-piece-100')
```

## Résultats Attendus

### Après les Tests Réussis
- ✅ Le site fonctionne correctement
- ✅ Tous les utilisateurs peuvent sélectionner les quantités
- ✅ Les notifications sont claires
- ✅ Le panier persiste
- ✅ Aucune erreur JavaScript
- ✅ Design cohérent et intuitif

### Signaux d'Alerte
- ❌ Erreur JavaScript dans la console
- ❌ Quantité ne se sauvegarde pas
- ❌ Panier ne persiste pas après rechargement
- ❌ Boutons +/- ne fonctionnent pas
- ❌ Notification ne s'affiche pas
- ❌ Design cassé sur mobile

## Notes de Test

- Date de test: [À remplir]
- Navigateur: [À remplir]
- Appareil: [À remplir]
- Résultat global: [À remplir]
- Bugs trouvés: [À remplir]
- Commentaires: [À remplir]
