/* -----------------------------
    PANIER - SHONEN SHELF v3
--------------------------------*/

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ----- UTILITAIRES ----- */

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartBadge() {
    const badges = document.querySelectorAll(".cart-badge");
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    badges.forEach(b => {
        b.textContent = totalQty;
        b.style.display = totalQty === 0 ? 'none' : 'flex';
    });
}

/* ----- TOAST NOTIFICATION ----- */

function showToast(title) {
    const existing = document.getElementById('cart-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'cart-toast';
    toast.innerHTML = `
        <div style="display:flex;align-items:center;gap:10px;">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
            </svg>
            <span><strong>${title}</strong> ajouté au panier !</span>
        </div>
    `;
    toast.style.cssText = `
        position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(80px);
        background:#16a34a;color:#fff;padding:14px 24px;border-radius:10px;
        box-shadow:0 8px 32px rgba(0,0,0,0.4);z-index:9999;font-size:14px;font-weight:500;
        transition:transform 0.35s cubic-bezier(.34,1.56,.64,1),opacity 0.3s;opacity:0;
        white-space:nowrap;
    `;
    document.body.appendChild(toast);
    requestAnimationFrame(() => {
        toast.style.transform = 'translateX(-50%) translateY(0)';
        toast.style.opacity = '1';
    });
    setTimeout(() => {
        toast.style.transform = 'translateX(-50%) translateY(80px)';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 350);
    }, 2800);
}

/* ----- AJOUTER UN PRODUIT ----- */

function addToCart(id, title, price, skipOpen) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ id, title, price, qty: 1 });
    }
    saveCart();
    updateCart();
    showToast(title);
    if (!skipOpen) openCart();
}

/* ----- MODIFIER QUANTITÉ ----- */

function changeQuantity(id, delta) {
    const item = cart.find(p => p.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(p => p.id !== id);
    }
    saveCart();
    updateCart();
}

/* ----- SUPPRIMER UN PRODUIT ----- */

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCart();
}

/* ----- VIDER LE PANIER ----- */

function clearCart() {
    cart = [];
    saveCart();
    updateCart();
}

/* ----- AFFICHAGE DU PANIER ----- */

function updateCart() {
    const container = document.getElementById("cartItems");
    const summary = document.getElementById("cartSummary");
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div style="text-align:center;padding:40px 20px;">
                <svg style="width:48px;height:48px;margin:0 auto 12px;color:#6b7280" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                <p style="color:#9ca3af">Votre panier est vide.</p>
            </div>`;
        if (summary) summary.innerHTML = "";
        updateCartBadge();
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="flex justify-between items-center bg-shonen-black p-3 rounded-lg mb-2 border border-gray-700 hover:border-red-800 transition-colors">
            <div class="flex-1 min-w-0 mr-3">
                <p class="font-bold text-sm truncate">${item.title}</p>
                <p class="text-shonen-red text-sm font-semibold">${item.price.toFixed(2)} €</p>
            </div>
            <div class="flex items-center gap-2 shrink-0">
                <button onclick="changeQuantity('${item.id}', -1)"
                    class="w-8 h-8 bg-shonen-gray hover:bg-shonen-red rounded text-white font-bold text-lg leading-none transition-colors">−</button>
                <span class="font-bold w-5 text-center">${item.qty}</span>
                <button onclick="changeQuantity('${item.id}', 1)"
                    class="w-8 h-8 bg-shonen-gray hover:bg-shonen-red rounded text-white font-bold text-lg leading-none transition-colors">+</button>
                <button onclick="removeFromCart('${item.id}')"
                    class="w-8 h-8 text-gray-500 hover:text-red-500 text-xl font-bold transition-colors">×</button>
            </div>
        </div>
    `).join("");

    const subtotal = cart.reduce((t, i) => t + i.price * i.qty, 0);
    const vat = subtotal * 0.055;
    const total = subtotal + vat;
    const itemCount = cart.reduce((s, i) => s + i.qty, 0);

    if (summary) summary.innerHTML = `
        <div class="bg-shonen-black p-4 rounded-lg border border-gray-700 mt-2">
            <div class="flex justify-between text-sm text-gray-400 mb-1">
                <span>${itemCount} article${itemCount > 1 ? 's' : ''}</span>
                <span>${subtotal.toFixed(2)} €</span>
            </div>
            <div class="flex justify-between text-sm text-gray-400 mb-3">
                <span>TVA (5.5%)</span>
                <span>${vat.toFixed(2)} €</span>
            </div>
            <hr class="border-gray-700 mb-3"/>
            <div class="flex justify-between font-bold text-lg text-white mb-4">
                <span>Total TTC</span>
                <span class="text-shonen-red">${total.toFixed(2)} €</span>
            </div>
            <button class="w-full bg-shonen-red hover:bg-red-700 text-white font-bold py-3 rounded-lg tracking-widest uppercase transition-colors text-sm">
                Commander →
            </button>
            <button onclick="clearCart()" class="w-full mt-2 text-gray-500 hover:text-gray-300 text-xs py-2 transition-colors">
                Vider le panier
            </button>
        </div>
    `;

    updateCartBadge();
}

/* ----- MODAL ----- */

function openCart() {
    const modal = document.getElementById("cartModal");
    if (!modal) return;
    modal.style.display = "flex";
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => modal.classList.add("show"));
}

function closeCart() {
    const modal = document.getElementById("cartModal");
    if (!modal) return;
    modal.classList.remove("show");
    document.body.style.overflow = '';
    setTimeout(() => { modal.style.display = "none"; }, 200);
}

// Fermer en cliquant en dehors
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("cartModal");
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeCart();
        });
    }
});

/* ----- INIT ----- */
document.addEventListener('DOMContentLoaded', () => {
    updateCart();
    updateCartBadge();
});
