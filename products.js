const products = [
    // MANGAS
    { id: "one-piece-100", title: "One Piece Vol. 100", author: "Eiichiro Oda", price: 6.90, img: "images/one-piece-vol100.jpg", category: "manga", badge: "NOUVEAU", badgeColor: "bg-shonen-red" },
    { id: "naruto-50", title: "Naruto Vol. 50", author: "Masashi Kishimoto", price: 6.90, img: "images/naruto-vol50.jpg", category: "manga" },
    { id: "demon-slayer-20", title: "Demon Slayer Vol. 20", author: "Koyoharu Gotouge", price: 7.20, img: "images/demon-slayer-20.jpg", category: "manga", badge: "NOUVEAU", badgeColor: "bg-shonen-red" },
    { id: "my-hero-30", title: "My Hero Academia Vol. 30", author: "Kohei Horikoshi", price: 6.99, img: "images/my-hero-30.jpg", category: "manga" },
    { id: "jujutsu-18", title: "Jujutsu Kaisen Vol. 18", author: "Gege Akutami", price: 7.20, img: "images/jujutsu-18.jpg", category: "manga" },
    { id: "spy-x-family-7", title: "Spy x Family Vol. 7", author: "Tatsuya Endo", price: 7.50, img: "images/spy-x-family-7.jpg", category: "manga" },
    { id: "death-note-1", title: "Death Note Vol. 1", author: "Tsugumi Ohba", price: 6.50, img: "images/death-note-1.jpg", category: "manga" },
    { id: "dragon-ball-42", title: "Dragon Ball Vol. 42", author: "Akira Toriyama", price: 6.90, img: "images/dragon-ball-42.jpg", category: "manga", badge: "CLASSIQUE", badgeColor: "bg-blue-700" },
    { id: "one-punch-10", title: "One Punch Man Vol. 10", author: "ONE & Yusuke Murata", price: 7.10, img: "images/one-punch-10.jpg", category: "manga" },
    { id: "tokyo-ghoul-5", title: "Tokyo Ghoul Vol. 5", author: "Sui Ishida", price: 7.20, img: "images/tokyo-ghoul-5.jpg", category: "manga" },

    // COMICS
    { id: "batman-year-one", title: "Batman: Year One", author: "Frank Miller", price: 15.00, img: "images/batman-year-one.jpg", category: "comics" },
    { id: "spiderman-blue", title: "Spider-Man: Blue", author: "Jeph Loeb & Tim Sale", price: 17.50, img: "images/spiderman-blue.jpg", category: "comics", badge: "COUP DE COEUR", badgeColor: "bg-green-700" },
    { id: "watchmen", title: "Watchmen", author: "Alan Moore", price: 22.00, img: "images/watchmen.jpg", category: "comics" },
    { id: "xmen-dark-phoenix", title: "X-Men: Dark Phoenix", author: "Chris Claremont", price: 19.90, img: "images/xmen-dark-phoenix.jpg", category: "comics" },
    { id: "superman-red-son", title: "Superman: Red Son", author: "Mark Millar", price: 16.90, img: "images/superman-red-son.jpg", category: "comics" },
    { id: "ironman-extremis", title: "Iron Man: Extremis", author: "Warren Ellis", price: 14.90, img: "images/ironman-extremis.jpg", category: "comics" },
    { id: "batman-hush", title: "Batman: Hush", author: "Jeph Loeb & Jim Lee", price: 21.00, img: "images/batman-hush.jpg", category: "comics" },
    { id: "avengers-ultimates", title: "Avengers: The Ultimates", author: "Mark Millar", price: 18.50, img: "images/avengers-ultimates.jpg", category: "comics" },
    { id: "deadpool-classic", title: "Deadpool Classic", author: "Fabian Nicieza", price: 16.00, img: "images/deadpool-classic.jpg", category: "comics" },

    // BD
    { id: "asterix-gaul", title: "Astérix en Gaule", author: "Uderzo & Goscinny", price: 8.99, img: "images/asterix-gaul.jpg", category: "bd", badge: "SOLDE", badgeColor: "bg-orange-600" },
    { id: "tintin-lune", title: "Objectif Lune", author: "Hergé", price: 10.50, img: "images/tintin-lune.jpg", category: "bd" },
    { id: "lucky-luke-daltons", title: "Les Dalton se rachètent", author: "Morris & Goscinny", price: 9.20, img: "images/lucky-luke-daltons.jpg", category: "bd" },
    { id: "blake-mortimer", title: "Le Secret de l'Espadon", author: "Edgar P. Jacobs", price: 11.00, img: "images/blake-mortimer.jpg", category: "bd" },
    { id: "gaston-lagaffe", title: "Gaston Lagaffe Tome 1", author: "André Franquin", price: 8.50, img: "images/gaston-lagaffe.jpg", category: "bd" },
    { id: "titeuf-15", title: "Titeuf Tome 15", author: "Zep", price: 8.90, img: "images/titeuf-15.jpg", category: "bd" },
    { id: "boulle-bill", title: "Boule & Bill Tome 5", author: "Jean Roba", price: 7.90, img: "images/boulle-bill.jpg", category: "bd" },
    { id: "le-chat", title: "Le Chat Tome 1", author: "Philippe Geluck", price: 9.50, img: "images/le-chat.jpg", category: "bd" },
    { id: "lou-tome1", title: "Lou! Tome 1", author: "Julien Neel", price: 8.20, img: "images/lou-tome1.jpg", category: "bd" },
    { id: "valerian-ambassadeurs", title: "Valérian: Les Ambassadeurs de la Galaxie", author: "Mézières & Christin", price: 12.00, img: "images/valerian-ambassadeurs.jpg", category: "bd" }
    // ➕ tu ajoutes autant de produits que tu veux ici
];

// --- Gestion du tri, filtre et compteur produits ---
function renderProducts(category = 'all', sort = 'default') {
    const grid = document.getElementById("productGrid");
    const productCount = document.getElementById("productCount");
    let filtered = products.filter(p => category === 'all' || p.category === category);
    switch (sort) {
        case 'price-asc':
            filtered.sort((a, b) => a.price - b.price); break;
        case 'price-desc':
            filtered.sort((a, b) => b.price - a.price); break;
        case 'name-asc':
            filtered.sort((a, b) => (a.title || '').localeCompare(b.title || '')); break;
        case 'name-desc':
            filtered.sort((a, b) => (b.title || '').localeCompare(a.title || '')); break;
    }
    grid.innerHTML = filtered.map(p => `
        <div class="product-card cursor-pointer bg-shonen-gray border border-shonen-gray hover:border-shonen-red group transition-all" data-category="${p.category}" data-id="${p.id}">
            <div class="h-64 overflow-hidden relative bg-black">
                ${p.badge ? `<span class="absolute top-2 left-2 ${p.badgeColor || 'bg-shonen-red'} text-white text-xs font-bold px-2 py-1">${p.badge}</span>` : ""}
                <img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover" />
            </div>
            <div class="p-4">
                <h3 class="font-bold text-lg">${p.title}</h3>
                <p class="text-gray-400 text-sm mb-3">${p.author || ''}</p>
                <span class="text-shonen-red font-bold text-xl">${p.price.toFixed(2)} €</span>
                <button class="mt-3 w-full border border-gray-600 hover:bg-shonen-red px-3 py-2 rounded" onclick="addToCart('${p.id}', '${p.title}', ${p.price})">Ajouter</button>
            </div>
        </div>
    `).join("");
    if (productCount) productCount.textContent = filtered.length;
}

// REND LA VARIABLE products ACCESSIBLE GLOBALEMENT POUR LA MODALE
window.products = products;

// Initialisation et gestion des filtres/tri
document.addEventListener('DOMContentLoaded', function () {
    let currentCategory = 'all';
    let currentSort = 'default';
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sortSelect');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            renderProducts(currentCategory, currentSort);
        });
    });

    if (sortSelect) {
        sortSelect.addEventListener('change', function () {
            currentSort = this.value;
            renderProducts(currentCategory, currentSort);
        });
    }

    renderProducts(currentCategory, currentSort);
});