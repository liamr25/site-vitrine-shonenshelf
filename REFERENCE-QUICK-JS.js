// 🎯 RÉFÉRENCE RAPIDE - FONCTIONS JAVASCRIPT DU SÉLECTEUR DE QUANTITÉ

// ============================================================================
// 1. FONCTION PRINCIPALE: addToCart()
// ============================================================================

function addToCart(productId, productName, productPrice) {
    // DESCRIPTION: Ajoute un produit au panier avec la quantité sélectionnée
    // PARAMÈTRES:
    //   - productId (string): ID unique du produit (ex: 'one-piece-100')
    //   - productName (string): Nom du produit (ex: 'One Piece Vol. 100')
    //   - productPrice (number): Prix du produit (ex: 6.90)

    // ÉTAPE 1: Récupère l'input de quantité du DOM
    const quantityInput = document.querySelector(`[data-product-id="${productId}"] .product-quantity`);

    // ÉTAPE 2: Récupère la valeur de la quantité (ou 1 par défaut)
    const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;

    // ÉTAPE 3: Cherche si le produit est déjà dans le panier
    const existingItem = cart.find(item => item.id === productId);

    // ÉTAPE 4: Ajoute ou met à jour le panier
    if (existingItem) {
        // Le produit existe déjà: ajoute à la quantité existante
        existingItem.quantity += quantity;
    } else {
        // Nouveau produit: l'ajoute au panier
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: quantity
        });
    }

    // ÉTAPE 5: Sauvegarde et met à jour l'affichage
    saveCart();

    // ÉTAPE 6: Affiche une notification personnalisée
    showNotification(`${quantity}x ${productName} ajouté au panier !`);

    // ÉTAPE 7: Réinitialise la quantité sur la carte
    if (quantityInput) {
        quantityInput.value = 1;
    }
}

// EXEMPLE D'UTILISATION (depuis le HTML):
// <button onclick="addToCart('one-piece-100', 'One Piece Vol. 100', 6.90)">
//     Ajouter
// </button>

// ============================================================================
// 2. FONCTION: increaseProductQuantity()
// ============================================================================

function increaseProductQuantity(productId) {
    // DESCRIPTION: Augmente la quantité sélectionnée d'1 (maximum 99)
    // PARAMÈTRE: productId (string) - L'ID du produit

    // ÉTAPE 1: Cherche l'input de quantité
    const quantityInput = document.querySelector(`[data-product-id="${productId}"] .product-quantity`);

    // ÉTAPE 2: Si l'input existe, augmente la valeur
    if (quantityInput) {
        // Math.min s'assure que la valeur ne dépasse pas 99
        quantityInput.value = Math.min(parseInt(quantityInput.value) + 1, 99);
    }
}

// EXEMPLE D'UTILISATION (depuis le HTML):
// <button class="quantity-btn-product" onclick="increaseProductQuantity('one-piece-100')">
//     +
// </button>

// RÉSULTATS POSSIBLES:
// 1 → 2, 2 → 3, ..., 98 → 99, 99 → 99 (ne change pas)

// ============================================================================
// 3. FONCTION: decreaseProductQuantity()
// ============================================================================

function decreaseProductQuantity(productId) {
    // DESCRIPTION: Diminue la quantité sélectionnée d'1 (minimum 1)
    // PARAMÈTRE: productId (string) - L'ID du produit

    // ÉTAPE 1: Cherche l'input de quantité
    const quantityInput = document.querySelector(`[data-product-id="${productId}"] .product-quantity`);

    // ÉTAPE 2: Si l'input existe, diminue la valeur
    if (quantityInput) {
        // Math.max s'assure que la valeur ne descend pas sous 1
        quantityInput.value = Math.max(parseInt(quantityInput.value) - 1, 1);
    }
}

// EXEMPLE D'UTILISATION (depuis le HTML):
// <button class="quantity-btn-product" onclick="decreaseProductQuantity('one-piece-100')">
//     −
// </button>

// RÉSULTATS POSSIBLES:
// 2 → 1, 3 → 2, ..., 99 → 98, 1 → 1 (ne change pas)

// ============================================================================
// 4. DÉTAIL: Sélecteur de Quantité dans le HTML
// ============================================================================

// STRUCTURE HTML COMPLÈTE:
/*
<div data-product-id="one-piece-100" class="product-card">
    <div class="p-4">
        <h3>One Piece Vol. 100</h3>
        <p>Eiichiro Oda</p>
        <div class="flex justify-between items-center mb-3">
            <span class="text-shonen-red font-bold text-xl">6.90 €</span>
        </div>
        <div class="product-controls">
            <!-- CONTENEUR DU SÉLECTEUR -->
            <div class="quantity-selector">
                <!-- BOUTON DIMINUER -->
                <button class="quantity-btn-product" 
                        onclick="decreaseProductQuantity('one-piece-100')">
                    −
                </button>
                <!-- INPUT DE QUANTITÉ -->
                <input type="number" 
                       class="product-quantity" 
                       value="1" 
                       min="1" 
                       max="99">
                <!-- BOUTON AUGMENTER -->
                <button class="quantity-btn-product" 
                        onclick="increaseProductQuantity('one-piece-100')">
                    +
                </button>
            </div>
            <!-- BOUTON AJOUTER AU PANIER -->
            <button class="flex-1 text-sm border border-gray-600 
                           hover:border-shonen-red hover:bg-shonen-red 
                           px-3 py-1 rounded transition-colors add-to-cart-btn"
                    onclick="addToCart('one-piece-100', 'One Piece Vol. 100', 6.90)">
                Ajouter
            </button>
        </div>
    </div>
</div>
*/

// ============================================================================
// 5. FLUX DE DONNÉES
// ============================================================================

// VARIABLE GLOBALE (stockée dans localStorage):
let cart = [
    {
        id: "one-piece-100",
        name: "One Piece Vol. 100",
        price: 6.90,
        quantity: 3  // Quantité totale dans le panier
    },
    {
        id: "naruto-50",
        name: "Naruto Vol. 50",
        price: 6.90,
        quantity: 1
    }
]

// LOCALSTORAGE:
// Clé: 'shonenshelfCart'
// Valeur: JSON stringifié du tableau cart
localStorage.getItem('shonenshelfCart')
// → '{"id":"one-piece-100","name":"One Piece Vol. 100","price":6.90,"quantity":3},...'

// ============================================================================
// 6. INTÉGRATION AVEC LE PANIER MODAL
// ============================================================================

// FONCTION: displayCart() (existante, modifiée)
// DESCRIPTION: Affiche le contenu du panier dans une modal
// FONCTIONNALITÉ: Les boutons +/- dans le modal modifient les quantités

function displayCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p class="text-center text-gray-400">Votre panier est vide</p>';
        return;
    }

    // Crée l'HTML pour chaque article du panier
    cartItemsDiv.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div>
                <h3 class="font-bold">${item.name}</h3>
                <p class="text-gray-400">${item.price}€</p>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">−</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                <button class="remove-btn" onclick="removeFromCart('${item.id}')">Supprimer</button>
            </div>
        </div>
    `).join('');
}

// ============================================================================
// 7. VALIDATION ET LIMITES
// ============================================================================

// RÈGLES DE VALIDATION:
// ├─ Minimum: 1 article
// ├─ Maximum: 99 articles
// ├─ Pas de décimales (entier uniquement)
// ├─ Pas de valeurs négatives
// └─ Pas de valeurs au-delà du maximum

// IMPLÉMENTATION:
// AUGMENTER: Math.min(valeur + 1, 99)  // Ne peut pas dépasser 99
// DIMINUER:  Math.max(valeur - 1, 1)   // Ne peut pas descendre sous 1

// ============================================================================
// 8. NOTIFICATIONS
// ============================================================================

// FONCTION: showNotification() (existante)
// DESCRIPTION: Affiche une notification toast
// PARAMÈTRE: message (string)

// EXEMPLE:
showNotification("5x One Piece Vol. 100 ajouté au panier !");

// RENDU:
// ┌──────────────────────────────────────────┐
// │ 5x One Piece Vol. 100 ajouté au panier ! │ ← Toast notification
// └──────────────────────────────────────────┘
// (Disparaît après 3 secondes)

// ============================================================================
// 9. SAUVEGARDES ET MISES À JOUR
// ============================================================================

// FONCTION: saveCart()
// DESCRIPTION: Sauvegarde le panier dans localStorage et met à jour le badge

function saveCart() {
    // Sauvegarde dans localStorage
    localStorage.setItem('shonenshelfCart', JSON.stringify(cart));

    // Met à jour le compteur du badge du panier
    updateCartBadge();
}

// FONCTION: updateCartBadge()
// DESCRIPTION: Met à jour le compteur visible du panier

function updateCartBadge() {
    // Calcule le nombre total d'articles
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Affiche le nombre dans le badge
    document.querySelector('.cart-badge').textContent = totalItems;
}

// ============================================================================
// 10. GUIDE D'UTILISATION POUR LES DÉVELOPPEURS
// ============================================================================

// POUR AJOUTER UN NOUVEAU PRODUIT:
/*
1. Ajouter une carte produit dans le HTML avec:
   - data-product-id unique
   - Les trois input/boutons du sélecteur
   - Le bouton "Ajouter" avec onclick

2. Exemple complet:
   <div data-product-id="nouveau-produit-1" class="product-card">
       <div class="product-controls">
           <div class="quantity-selector">
               <button onclick="decreaseProductQuantity('nouveau-produit-1')">−</button>
               <input type="number" class="product-quantity" value="1" min="1" max="99">
               <button onclick="increaseProductQuantity('nouveau-produit-1')">+</button>
           </div>
           <button onclick="addToCart('nouveau-produit-1', 'Nom du Produit', 9.99)">
               Ajouter
           </button>
       </div>
   </div>

3. C'est tout! Les fonctions JS s'en chargeront automatiquement.
*/

// POUR DÉBOGUER DANS LA CONSOLE:
console.log(cart);                              // Affiche le panier
console.log(localStorage.getItem('shonenshelfCart')); // Affiche localStorage
increaseProductQuantity('one-piece-100');      // Teste l'augmentation
decreaseProductQuantity('one-piece-100');      // Teste la diminution
addToCart('one-piece-100', 'Test', 6.90);      // Teste l'ajout

// ============================================================================
// 11. DIAGNOSTIC RAPIDE
// ============================================================================

// SI LES BOUTONS NE FONCTIONNENT PAS:
// 1. Vérifier la console (F12) pour les erreurs JavaScript
// 2. Vérifier que data-product-id est unique
// 3. Vérifier que .product-quantity existe
// 4. Vérifier que cart.js est chargé

// SI LES QUANTITÉS NE SAUVEGARDENT PAS:
// 1. Vérifier localStorage (F12 > Application > localStorage)
// 2. Vérifier que saveCart() est appelée
// 3. Vérifier que updateCartBadge() fonctionne
// 4. Vérifier les permissions du navigateur

// ============================================================================
// FIN DE LA RÉFÉRENCE
// ============================================================================
