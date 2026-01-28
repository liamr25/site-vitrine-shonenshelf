// Gestion du panier - Fichier externe
let cart = JSON.parse(localStorage.getItem('shonenshelfCart')) || [];
let productQuantities = {}; // Stocker les quantités sélectionnées sur les cartes

function saveCart() {
    localStorage.setItem('shonenshelfCart', JSON.stringify(cart));
    updateCartBadge();
}

function addToCart(productId, productName, productPrice) {
    // Récupérer la quantité sélectionnée sur la carte, ou utiliser 1 par défaut
    const quantityInput = document.querySelector(`[data-product-id="${productId}"] .product-quantity`);
    const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            quantity: quantity
        });
    }

    saveCart();
    showNotification(`${quantity}x ${productName} ajouté au panier !`);

    // Réinitialiser la quantité sur la carte après l'ajout
    if (quantityInput) {
        quantityInput.value = 1;
    }
}

function increaseProductQuantity(productId) {
    const quantityInput = document.querySelector(`[data-product-id="${productId}"] .product-quantity`);
    if (quantityInput) {
        quantityInput.value = Math.min(parseInt(quantityInput.value) + 1, 99);
    }
}

function decreaseProductQuantity(productId) {
    const quantityInput = document.querySelector(`[data-product-id="${productId}"] .product-quantity`);
    if (quantityInput) {
        quantityInput.value = Math.max(parseInt(quantityInput.value) - 1, 1);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    displayCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            displayCart();
        }
    }
}

function updateCartBadge() {
    const badge = document.querySelector('.cart-badge');
    if (badge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.textContent = totalItems;
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'toast-notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function openCart() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.classList.add('show');
        displayCart();
    }
}

function closeCart() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    const cartSummary = document.getElementById('cartSummary');

    if (!cartItems || !cartSummary) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Votre panier est vide</div>';
        cartSummary.innerHTML = '';
        return;
    }

    let totalPrice = 0;
    let html = '';

    cart.forEach(item => {
        const itemTotal = (item.price * item.quantity).toFixed(2);
        totalPrice += parseFloat(itemTotal);

        html += `
            <div class="cart-item">
                <div class="cart-item-details">
                    <p class="font-bold text-white">${item.name}</p>
                    <p class="text-gray-400 text-sm">${item.price.toFixed(2)} € × ${item.quantity}</p>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">−</button>
                    <span class="text-white font-bold w-8 text-center">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart('${item.id}')">Supprimer</button>
            </div>
        `;
    });

    cartItems.innerHTML = html;
    cartSummary.innerHTML = `
        <div class="flex justify-between mb-4">
            <span class="text-lg font-bold text-white">Sous-total :</span>
            <span class="text-lg font-bold text-shonen-red">${totalPrice.toFixed(2)} €</span>
        </div>
        <button class="checkout-btn" onclick="checkout()">Procéder au paiement</button>
    `;
}

function checkout() {
    showNotification('Redirection vers le paiement...');
    setTimeout(() => {
        alert('Merci pour votre achat ! (Fonction de paiement à implémenter)');
        cart = [];
        saveCart();
        closeCart();
        displayCart();
    }, 1500);
}

function filterProducts(category) {
    // Mettre à jour les boutons de filtre
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Filtrer les produits
    document.querySelectorAll('.product-card').forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Initialiser le panier au chargement
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();

    // Fermer le modal en cliquant en dehors
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.addEventListener('click', (e) => {
            if (e.target.id === 'cartModal') {
                closeCart();
            }
        });
    }
});
