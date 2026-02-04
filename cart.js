/* -----------------------------
    PANIER - SHONEN SHELF v2
--------------------------------*/

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ----- UTILITAIRES ----- */

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartBadge() {
    const badge = document.querySelector(".cart-badge");
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    badge.textContent = totalQty;
}

/* ----- AJOUTER UN PRODUIT ----- */

function addToCart(id, title, price) {
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({
            id,
            title,
            price,
            qty: 1
        });
    }

    saveCart();
    updateCart();
    openCart();
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

/* ----- AFFICHAGE DU PANIER ----- */

function updateCart() {
    const container = document.getElementById("cartItems");
    const summary = document.getElementById("cartSummary");

    if (cart.length === 0) {
        container.innerHTML = `
            <p class="text-gray-400 text-center py-4">Votre panier est vide.</p>
        `;
        summary.innerHTML = "";
        updateCartBadge();
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="flex justify-between items-center bg-shonen-gray p-3 rounded mb-3 border border-gray-700">
            <div>
                <p class="font-bold">${item.title}</p>
                <p class="text-sm text-gray-400">${item.price.toFixed(2)} €</p>
            </div>

            <div class="flex items-center gap-3">
                <button onclick="changeQuantity('${item.id}', -1)" 
                        class="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded">−</button>

                <span class="font-bold">${item.qty}</span>

                <button onclick="changeQuantity('${item.id}', 1)"
                        class="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded">+</button>

                <button onclick="removeFromCart('${item.id}')" 
                        class="text-red-500 hover:text-red-700 text-xl font-bold">×</button>
            </div>
        </div>
    `).join("");

    // ---- Calculs ----
    const subtotal = cart.reduce((t, i) => t + i.price * i.qty, 0);
    const vat = subtotal * 0.055; // TVA livres = 5.5%
    const total = subtotal + vat;

    summary.innerHTML = `
        <div class="bg-shonen-black p-4 rounded border border-gray-700">
            <p class="flex justify-between"><span>Sous-total :</span> <strong>${subtotal.toFixed(2)} €</strong></p>
            <p class="flex justify-between"><span>TVA (5.5%) :</span> <strong>${vat.toFixed(2)} €</strong></p>
            <hr class="my-3 border-gray-700" />
            <p class="flex justify-between text-xl font-bold text-shonen-red">
                <span>Total TTC :</span> <span>${total.toFixed(2)} €</span>
            </p>

            <button class="mt-4 bg-shonen-red hover:bg-red-700 w-full py-2 rounded font-bold">
                Passer la commande
            </button>
        </div>
    `;

    updateCartBadge();
}

/* ----- MODAL ----- */

function openCart() {
    const modal = document.getElementById("cartModal");
    modal.style.display = "flex";
    modal.classList.add("animate-fade-in");
}

function closeCart() {
    const modal = document.getElementById("cartModal");
    modal.classList.remove("animate-fade-in");
    modal.style.display = "none";
}

/* ----- INIT ----- */

updateCart();