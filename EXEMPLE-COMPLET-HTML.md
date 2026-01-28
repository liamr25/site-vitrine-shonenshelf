═══════════════════════════════════════════════════════════════════════════════
                    EXEMPLE COMPLET D'IMPLÉMENTATION HTML
═══════════════════════════════════════════════════════════════════════════════

Ce fichier montre l'intégration COMPLÈTE du sélecteur de quantité dans une
carte produit du catalogue.

───────────────────────────────────────────────────────────────────────────────
STRUCTURE COMPLÈTE D'UNE CARTE PRODUIT (avec sélecteur)
───────────────────────────────────────────────────────────────────────────────

<div data-category="manga" data-product-id="one-piece-100"
     class="product-card bg-shonen-gray group hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] 
             transition-all duration-300 border border-shonen-gray hover:border-shonen-red">
    
    <!-- IMAGE DU PRODUIT -->
    <div class="h-64 overflow-hidden bg-black relative">
        <span class="absolute top-2 left-2 bg-shonen-red text-white text-xs font-bold px-2 py-1 z-10">
            NOUVEAU
        </span>
        <img src="images/one-piece-vol100.jpg" alt="One Piece Volume 100"
             class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
    
    <!-- CONTENU (Titre, Auteur, Prix, Sélecteur) -->
    <div class="p-4">
        <!-- TITRE -->
        <h3 class="font-bold text-lg mb-1 text-white">
            One Piece Vol. 100
        </h3>
        
        <!-- AUTEUR -->
        <p class="text-gray-400 text-sm mb-3">
            Eiichiro Oda
        </p>
        
        <!-- PRIX -->
        <div class="flex justify-between items-center mb-3">
            <span class="text-shonen-red font-bold text-xl">
                6.90 €
            </span>
        </div>
        
        <!-- SÉLECTEUR DE QUANTITÉ ET BOUTON AJOUTER -->
        <div class="product-controls">
            
            <!-- CONTENEUR DU SÉLECTEUR -->
            <div class="quantity-selector">
                
                <!-- BOUTON MOINS (-) -->
                <button class="quantity-btn-product" 
                        onclick="decreaseProductQuantity('one-piece-100')">
                    −
                </button>
                
                <!-- INPUT QUANTITÉ (EDITABLE) -->
                <input type="number" 
                       class="product-quantity" 
                       value="1" 
                       min="1" 
                       max="99">
                
                <!-- BOUTON PLUS (+) -->
                <button class="quantity-btn-product" 
                        onclick="increaseProductQuantity('one-piece-100')">
                    +
                </button>
                
            </div>
            
            <!-- BOUTON AJOUTER AU PANIER -->
            <button class="flex-1 text-sm border border-gray-600 
                           hover:border-shonen-red hover:bg-shonen-red 
                           px-3 py-1 rounded transition-colors add-to-cart-btn"
                    aria-label="Ajouter One Piece Vol. 100 au panier"
                    onclick="addToCart('one-piece-100', 'One Piece Vol. 100', 6.90)">
                Ajouter
            </button>
            
        </div>
        
    </div>
    
</div>

───────────────────────────────────────────────────────────────────────────────
ÉLÉMENTS CRITIQUES EXPLIQUÉS
───────────────────────────────────────────────────────────────────────────────

1. ATTRIBUT data-product-id
   ├─ PURPOSE: Identifier le produit de façon unique
   ├─ LOCATION: Sur la carte principale <div>
   ├─ EXEMPLE: data-product-id="one-piece-100"
   ├─ USAGE: Les fonctions JS l'utilisent pour trouver l'input
   └─ IMPORTANT: Doit être UNIQUE par produit

2. CLASS product-quantity
   ├─ PURPOSE: Marquer l'input de quantité pour sélection par JS
   ├─ LOCATION: Sur l'input de quantité
   ├─ SÉLECTEUR CSS: .product-quantity
   ├─ ATTRIBUTS: type="number" min="1" max="99" value="1"
   └─ CONTENU: Valeur numérique (1-99)

3. CLASSE product-controls
   ├─ PURPOSE: Conteneur pour le sélecteur et le bouton
   ├─ DISPLAY: flex avec gap
   ├─ CHILDREN: quantity-selector + bouton ajouter
   └─ LAYOUT: Sélecteur à gauche, bouton à droite

4. CLASSE quantity-selector
   ├─ PURPOSE: Conteneur du sélecteur (- │ N │ +)
   ├─ DISPLAY: flex avec gap 8px
   ├─ BACKGROUND: Gris clair (#f3f4f6)
   ├─ PADDING: 4px 8px
   ├─ BORDER-RADIUS: 6px
   └─ CHILDREN: 3 éléments (bouton, input, bouton)

5. CLASSE quantity-btn-product
   ├─ PURPOSE: Boutons +/- du sélecteur
   ├─ WIDTH/HEIGHT: 28x28px
   ├─ BACKGROUND: White (#ffffff)
   ├─ COLOR: Red (#DC2626)
   ├─ BORDER: 1px solid #d1d5db
   ├─ HOVER: Background becomes red, text white
   └─ CURSOR: pointer

6. ONCLICK HANDLERS
   ├─ Bouton "-": onclick="decreaseProductQuantity('one-piece-100')"
   ├─ Bouton "+": onclick="increaseProductQuantity('one-piece-100')"
   ├─ Bouton Ajouter: onclick="addToCart('one-piece-100', 'One Piece Vol. 100', 6.90)"
   └─ IMPORTANT: ID doit être identique dans tous les handlers

───────────────────────────────────────────────────────────────────────────────
FLUX D'INTERACTION
───────────────────────────────────────────────────────────────────────────────

SCÉNARIO: Utilisateur veut ajouter 3 exemplaires de One Piece

ÉTAPE 1: Utilisateur voit la carte
┌────────────────────────────────┐
│ One Piece Vol. 100             │
│ Eiichiro Oda                   │
│ 6.90 €                         │
│                                │
│ [ − │ 1 │ + ] [ AJOUTER ]     │
└────────────────────────────────┘

ÉTAPE 2: Clique + deux fois
└─ Clic 1: 1 → 2
   ├─ JavaScript: Math.min(1 + 1, 99) = 2
   ├─ Input: value="1" → value="2"
   └─ DOM: [ − │ 2 │ + ]

└─ Clic 2: 2 → 3
   ├─ JavaScript: Math.min(2 + 1, 99) = 3
   ├─ Input: value="2" → value="3"
   └─ DOM: [ − │ 3 │ + ]

RÉSULTAT APRÈS 2 CLICS:
┌────────────────────────────────┐
│ [ − │ 3 │ + ] [ AJOUTER ]     │
└────────────────────────────────┘

ÉTAPE 3: Clique "AJOUTER"
├─ JavaScript: addToCart('one-piece-100', 'One Piece Vol. 100', 6.90)
├─ 1. Récupère l'input: document.querySelector('[data-product-id="one-piece-100"] .product-quantity')
├─ 2. Récupère la quantité: parseInt(input.value) = 3
├─ 3. Crée l'objet pour le panier: {id: "one-piece-100", name: "One Piece Vol. 100", price: 6.90, quantity: 3}
├─ 4. Ajoute au panier (localStorage)
├─ 5. Affiche notification: "3x One Piece Vol. 100 ajouté au panier!"
├─ 6. Réinitialise l'input: input.value = 1
└─ 7. Met à jour le compteur du panier

ÉTAPE 4: DOM revient à l'état initial
┌────────────────────────────────┐
│ [ − │ 1 │ + ] [ AJOUTER ]     │
└────────────────────────────────┘

ÉTAPE 5: Notification affichée pendant 3 secondes
┌──────────────────────────────────────────────┐
│ 3x One Piece Vol. 100 ajouté au panier! ✓   │
└──────────────────────────────────────────────┘
(Auto-fermeture après 3 sec)

ÉTAPE 6: Panier mis à jour
Icône panier: [🛒 3] ← Compteur devient 3

───────────────────────────────────────────────────────────────────────────────
VARIANTES POUR DIFFÉRENTS PRODUITS
───────────────────────────────────────────────────────────────────────────────

PRODUIT: Naruto Vol. 50 (Manga - 6.90€)
<button onclick="decreaseProductQuantity('naruto-50')">−</button>
<input class="product-quantity" value="1">
<button onclick="increaseProductQuantity('naruto-50')">+</button>
<button onclick="addToCart('naruto-50', 'Naruto Vol. 50', 6.90)">Ajouter</button>

PRODUIT: Batman: Year One (Comics - 15.00€)
<button onclick="decreaseProductQuantity('batman-year-one')">−</button>
<input class="product-quantity" value="1">
<button onclick="increaseProductQuantity('batman-year-one')">+</button>
<button onclick="addToCart('batman-year-one', 'Batman: Year One', 15.00)">Ajouter</button>

PRODUIT: Astérix en Gaule (BD - 8.99€)
<button onclick="decreaseProductQuantity('asterix-gaul')">−</button>
<input class="product-quantity" value="1">
<button onclick="increaseProductQuantity('asterix-gaul')">+</button>
<button onclick="addToCart('asterix-gaul', 'Astérix en Gaule', 8.99)">Ajouter</button>

⚠️ RÈGLES À RESPECTER:
├─ ID doit être unique et sans espaces
├─ ID dans data-product-id doit matcher tous les onclick
├─ Prix doit être correct (au format nombre: 6.90, pas "6,90")
├─ Nom doit être correct (affiché dans la notification)
└─ Classe product-quantity doit être sur l'input

───────────────────────────────────────────────────────────────────────────────
CSS UTILISÉ
───────────────────────────────────────────────────────────────────────────────

PRODUIT-CARD:
.product-card {
    background-color: #1e293b;
    border: 1px solid #1e293b;
    hover: shadow et border rouge
    animation: slideIn 0.5s ease-out
}

PRODUCT-CONTROLS:
.product-controls {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 12px;
}

QUANTITY-SELECTOR:
.quantity-selector {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: #f3f4f6;  (gris clair)
    border-radius: 6px;
    padding: 4px 8px;
    width: fit-content;
}

QUANTITY-BTN-PRODUCT:
.quantity-btn-product {
    width: 28px;
    height: 28px;
    border: 1px solid #d1d5db;
    background-color: white;
    color: #DC2626;           (rouge)
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    transition: all 0.2s ease;
    
    hover: {
        background-color: #DC2626;  (rouge)
        color: white;
        border-color: #DC2626;
    }
    
    active: {
        transform: scale(0.95);
    }
}

PRODUCT-QUANTITY:
.product-quantity {
    width: 40px;
    text-align: center;
    border: none;
    background-color: transparent;
    font-weight: bold;
    font-size: 16px;
    color: #1f2937;
    
    focus: {
        outline: none;
    }
}

───────────────────────────────────────────────────────────────────────────────
JAVASCRIPT APPELÉ
───────────────────────────────────────────────────────────────────────────────

FONCTION 1: addToCart(productId, productName, productPrice)

    PARAMÈTRES:
    ├─ productId: "one-piece-100" (string, unique)
    ├─ productName: "One Piece Vol. 100" (string, lisible)
    └─ productPrice: 6.90 (number, exact)
    
    ACTIONS:
    ├─ 1. Récupère l'input de quantité
    ├─ 2. Récupère la valeur (1-99)
    ├─ 3. Cherche si le produit existe dans le panier
    ├─ 4. Ajoute ou met à jour le panier
    ├─ 5. Sauvegarde dans localStorage
    ├─ 6. Affiche la notification
    └─ 7. Réinitialise à 1

FONCTION 2: increaseProductQuantity(productId)
    
    PARAMÈTRE: productId (string, doit matcher data-product-id)
    
    ACTION:
    ├─ Récupère l'input de quantité
    └─ Augmente de 1 (max 99): Math.min(val + 1, 99)

FONCTION 3: decreaseProductQuantity(productId)
    
    PARAMÈTRE: productId (string, doit matcher data-product-id)
    
    ACTION:
    ├─ Récupère l'input de quantité
    └─ Diminue de 1 (min 1): Math.max(val - 1, 1)

───────────────────────────────────────────────────────────────────────────────
DONNEES STOCKÉES DANS LOCALSTORAGE
───────────────────────────────────────────────────────────────────────────────

CLÉS:
├─ Key: 'shonenshelfCart'
└─ Value: JSON stringifié du tableau cart

CONTENU:
[
    {
        "id": "one-piece-100",
        "name": "One Piece Vol. 100",
        "price": 6.90,
        "quantity": 3
    },
    {
        "id": "naruto-50",
        "name": "Naruto Vol. 50",
        "price": 6.90,
        "quantity": 1
    }
]

COMMENT INSPECTER:
├─ Ouvrir F12 (Console)
├─ Aller à Application > localStorage
├─ Trouver la clé 'shonenshelfCart'
├─ Voir le JSON
└─ Ou taper: console.log(JSON.parse(localStorage.getItem('shonenshelfCart')))

───────────────────────────────────────────────────────────────────────────────
TESTS & VALIDATION
───────────────────────────────────────────────────────────────────────────────

POUR VÉRIFIER QUE C'EST CORRECT:

1. Ouvrir catalogue.html
2. Inspecter une carte avec F12
3. Vérifier:
   ├─ ✓ data-product-id présent et unique
   ├─ ✓ Class "product-quantity" sur l'input
   ├─ ✓ input type="number" avec min/max
   ├─ ✓ Classe "quantity-selector" sur le conteneur
   ├─ ✓ Classe "product-controls" sur le parent
   ├─ ✓ Trois boutons/inputs avec les bons onclick
   └─ ✓ Pas d'erreurs JavaScript dans console

4. Tester l'interaction:
   ├─ Cliquer "-" et "+" → Quantité change
   ├─ Éditer le chiffre → Validation min/max
   ├─ Cliquer "Ajouter" → Notification et réinitialisation
   ├─ Ouvrir panier → Produit présent
   └─ Rafraîchir (F5) → Produit toujours présent

═══════════════════════════════════════════════════════════════════════════════
                            FIN DE L'EXEMPLE COMPLET
═══════════════════════════════════════════════════════════════════════════════
