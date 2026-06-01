// Product Data
const products = [
    { 
        id: 1, 
        name: 'Camisero Animal Print', 
        price: 42000, 
        priceCard: 46200,
        category: 'pijamas', 
        subCategory: 'corto',
        badge: 'Nuevo 🎀',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'img/camisero-animalprint/WhatsApp Image 2026-03-29 at 13.12.41.jpeg',
            'img/camisero-animalprint/WhatsApp Image 2026-03-29 at 13.12.42 (1).jpeg',
            'img/camisero-animalprint/WhatsApp Image 2026-03-29 at 13.12.42 (2).jpeg',
            'img/camisero-animalprint/WhatsApp Image 2026-03-29 at 13.12.42.jpeg'
        ]
    },
    { 
        id: 2, 
        name: 'Camisero Negro', 
        price: 42000, 
        priceCard: 46200,
        category: 'pijamas', 
        subCategory: 'corto',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'img/camisero-negro/3A5EAD30-8E6A-4266-B9AB-0B85A606E9FD (1).JPEG',
            'img/camisero-negro/B6796FFD-336C-41D5-A911-ECA3B5C08311.jpg (1).jpeg'
        ]
    },
    { 
        id: 3, 
        name: 'Camisolin Rayado', 
        price: 30000, 
        priceCard: 36000,
        category: 'pijamas', 
        subCategory: 'corto',
        badge: 'Tendencia ✨',
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        images: [
            'img/camisolin-rayado/camisolin-rayado-1.jpg',
            'img/camisolin-rayado/camisolin-rayado-2.jpg',
            'img/camisolin-rayado/camisolin-rayado-3.jpg',
            'img/camisolin-rayado/camisolin-rayado-4.jpg'
        ]
    },
    { 
        id: 4, 
        name: 'Camisero Rosa', 
        price: 42000, 
        priceCard: 46200,
        category: 'pijamas', 
        subCategory: 'corto',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'img/camisero-rosa/WhatsApp Image 2026-03-29 at 13.13.01 (1).jpeg',
            'img/camisero-rosa/WhatsApp Image 2026-03-29 at 13.13.01 (2).jpeg',
            'img/camisero-rosa/WhatsApp Image 2026-03-29 at 13.13.01.jpeg',
            'img/camisero-rosa/WhatsApp Image 2026-03-29 at 13.13.02.jpeg'
        ]
    },
    { 
        id: 5, 
        name: 'Conjunto Musculosa Negro', 
        price: 36000, 
        priceCard: 39600,
        category: 'pijamas', 
        subCategory: 'corto',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'img/conjunto-musculosa-negro/WhatsApp Image 2026-03-26 at 22.25.02 (1).jpeg',
            'img/conjunto-musculosa-negro/WhatsApp Image 2026-03-26 at 22.25.02 (2).jpeg',
            'img/conjunto-musculosa-negro/WhatsApp Image 2026-03-26 at 22.25.02.jpeg',
            'img/conjunto-musculosa-negro/WhatsApp Image 2026-03-26 at 22.25.03.jpeg'
        ]
    },
    { 
        id: 6, 
        name: 'Conjunto Musculosa Rayado', 
        price: 36000, 
        priceCard: 39600,
        category: 'pijamas', 
        subCategory: 'corto',
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'img/conjunto-musculosa-rayado/WhatsApp Image 2026-03-29 at 13.13.41.jpeg',
            'img/conjunto-musculosa-rayado/WhatsApp Image 2026-03-29 at 13.13.42 (1).jpeg',
            'img/conjunto-musculosa-rayado/WhatsApp Image 2026-03-29 at 13.13.42.jpeg'
        ]
    },
    { 
        id: 7, 
        name: 'Bata Rayada', 
        price: 45000, 
        priceCard: 49500,
        category: 'batas', 
        sizes: ['Talle Único'],
        images: [
            'img/bata/bata.jpeg',
            'img/bata/WhatsApp Image 2026-03-30 at 10.11.03.jpeg'
        ]
    },
    { 
        id: 8, 
        name: 'Conjunto Camisero Rayado', 
        price: 42000, 
        priceCard: 46200,
        category: 'pijamas', 
        subCategory: 'corto',
        badge: 'Nuevo 💗',
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        images: [
            'img/camisero-rayado/WhatsApp Image 2026-03-30 at 23.13.45.jpeg',
            'img/camisero-rayado/WhatsApp Image 2026-03-30 at 23.13.46 (1).jpeg',
            'img/camisero-rayado/WhatsApp Image 2026-03-30 at 23.13.46 (2).jpeg',
            'img/camisero-rayado/WhatsApp Image 2026-03-30 at 23.13.46.jpeg'
        ]
    },
    { 
        id: 9, 
        name: 'Bata Negra', 
        price: 45000, 
        priceCard: 49500,
        category: 'batas', 
        sizes: ['Talle Único'],
        images: [
            'img/bata-negra/WhatsApp Image 2026-03-31 at 12.54.32.jpeg',
            'img/bata-negra/WhatsApp Image 2026-03-31 at 12.54.33.jpeg'
        ]
    },
    { 
        id: 10, 
        name: 'Bata Rosa', 
        price: 45000, 
        priceCard: 49500,
        category: 'batas', 
        sizes: ['Talle Único'],
        images: [
            'img/bata-Rosa/WhatsApp Image 2026-03-31 at 12.54.33.jpeg'
        ]
    }
];

let cart = JSON.parse(localStorage.getItem('rame_cart')) || [];

// UI Elements
const productsGrid = document.getElementById('products-grid');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartFloatingIcon = document.getElementById('cart-floating-icon');
const closeCart = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalValue = document.getElementById('cart-total-value');
const cartCount = document.getElementById('cart-count');
const checkoutBtn = document.getElementById('checkout-btn');
const searchInput = document.getElementById('search-input');
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinksContainer = document.querySelector('.nav-links');

// Special Modals Logic
function showModal(title, contentHTML) {
    const modal = document.createElement('div');
    modal.className = 'info-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2 style="margin-bottom:20px; color:var(--color-primary-dark); font-family:var(--font-title);">${title}</h2>
            <div class="modal-body-content" style="max-height:70vh; overflow-y:auto; padding:10px;">
                ${contentHTML}
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    modal.querySelector('.close-modal').onclick = () => modal.remove();
    modal.onclick = (e) => { if(e.target === modal) modal.remove(); };
    
    if(!document.getElementById('modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.innerHTML = `
            .info-modal { position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 3000; display: flex; align-items: center; justify-content: center; padding: 20px; animation: fadeIn 0.3s ease; }
            .modal-content { background: white; padding: 30px; border-radius: 20px; max-width: 800px; width: 100%; position: relative; text-align: center; box-shadow: var(--shadow-strong); }
            .close-modal { position: absolute; right: 20px; top: 15px; font-size: 1.5rem; cursor: pointer; color: #999; }
            .size-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; font-size: 0.9rem; }
            .size-table th, .size-table td { border: 1px solid #ffeef1; padding: 12px 8px; text-align: center; }
            .size-table th { background-color: var(--color-primary-light); color: var(--color-primary-dark); font-family: var(--font-title); }
            .size-table tr:nth-child(even) { background-color: #fff9fa; }
            .table-title { background: #fdf2f4; padding: 10px; margin-top: 20px; margin-bottom: 10px; font-weight: 700; color: var(--color-primary-dark); border-radius: 5px; }
            .care-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; margin-top: 20px; }
            .care-item { padding: 15px; border: 1px solid #eee; border-radius: 15px; transition: var(--transition-smooth); }
            .care-item:hover { border-color: var(--color-primary); box-shadow: var(--shadow-soft); }
            .care-item i { font-size: 2rem; color: var(--color-primary-dark); margin-bottom: 10px; display: block; }
            .care-item span { font-size: 0.9rem; color: #666; }
        `;
        document.head.appendChild(style);
    }
}

// Nav events for Talles and Cuidados
document.querySelector('a[href="#talles"]').onclick = (e) => { 
    e.preventDefault(); 
    const content = `
        <div class="table-title">Conjuntos Musculosa</div>
        <table class="size-table">
            <thead>
                <tr><th>Medida (cm)</th><th>S</th><th>M</th><th>L</th><th>XL</th></tr>
            </thead>
            <tbody>
                <tr><td>Busto</td><td>96</td><td>100</td><td>106</td><td>114</td></tr>
                <tr><td>Largo Muscu</td><td>56</td><td>58</td><td>61</td><td>66</td></tr>
                <tr><td>Cintura Short</td><td>64</td><td>66</td><td>68</td><td>70</td></tr>
                <tr><td>Cadera Short</td><td>102</td><td>104</td><td>106</td><td>110</td></tr>
                <tr><td>Largo Short</td><td>30</td><td>33</td><td>36</td><td>39</td></tr>
            </tbody>
        </table>

        <div class="table-title">Camisolines</div>
        <table class="size-table">
            <thead>
                <tr><th>Medida (cm)</th><th>S</th><th>M</th><th>L</th><th>XL</th><th>XXL</th></tr>
            </thead>
            <tbody>
                <tr><td>Busto</td><td>90</td><td>95</td><td>100</td><td>107</td><td>112</td></tr>
                <tr><td>Cintura</td><td>70</td><td>78</td><td>82</td><td>90</td><td>94</td></tr>
                <tr><td>Cadera</td><td>95</td><td>104</td><td>108</td><td>115</td><td>120</td></tr>
            </tbody>
        </table>

        <div class="table-title">Conjuntos Camiseros</div>
        <table class="size-table">
            <thead>
                <tr><th>Medida (cm)</th><th>S</th><th>M</th><th>L</th><th>XL</th><th>XXL</th><th>XXXL</th></tr>
            </thead>
            <tbody>
                <tr><td>Busto</td><td>90</td><td>94</td><td>98</td><td>102</td><td>114</td><td>120</td></tr>
                <tr><td>Cintura</td><td>60-80</td><td>64-90</td><td>66-100</td><td>68-100</td><td>98</td><td>106</td></tr>
                <tr><td>Cadera</td><td>102</td><td>108</td><td>112</td><td>116</td><td>120</td><td>126</td></tr>
            </tbody>
        </table>
        <p style="font-size: 0.8rem; color: #999; margin-top: 10px;">* Las medidas son aproximadas y pueden variar levemente según el modelo.</p>
    `;
    showModal('Tabla de Talles 🎀', content); 
};

document.querySelector('a[href="#cuidados"]').onclick = (e) => { 
    e.preventDefault(); 
    const content = `
        <p style="margin-bottom: 20px; color: #555;">Para que tu prenda Ramé te acompañe por mucho más tiempo, te recomendamos:</p>
        <div class="care-grid">
            <div class="care-item">
                <i class="fas fa-hands-wash"></i>
                <span>Lavar a mano o en ciclo delicado</span>
            </div>
            <div class="care-item">
                <i class="fas fa-temperature-low"></i>
                <span>Siempre con agua fría</span>
            </div>
            <div class="care-item">
                <i class="fas fa-soap"></i>
                <span>Jabón suave</span>
            </div>
            <div class="care-item">
                <i class="fas fa-vial-slash"></i>
                <span>Nada de lavandina</span>
            </div>
            <div class="care-item">
                <i class="fas fa-cloud-sun"></i>
                <span>Dejar secar a la sombra</span>
            </div>
            <div class="care-item">
                <i class="fas fa-tshirt"></i>
                <span>Plancha baja (si hace falta)</span>
            </div>
        </div>
    `;
    showModal('Cuidado de tus Prendas ✨', content); 
};

// Category filtering from cards
function filterCategory(cat) {
    const filterBtn = document.querySelector(`.filter-btn[data-filter="${cat}"]`);
    if (filterBtn) {
        filterBtn.click();
        window.location.href = '#productos';
    }
}

// Initialize Products
function renderProducts(filter = 'all', searchTerm = '') {
    productsGrid.innerHTML = '';
    
    let filtered = products;
    if (filter !== 'all') {
        filtered = filtered.filter(p => p.category === filter || p.subCategory === filter);
    }
    if (searchTerm) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    
    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        // Size options
        const sizeOptions = product.sizes.map(s => `<option value="${s}">${s}</option>`).join('');
        
        // Generating dots and slides for carousel
        const slides = product.images.map(img => `<div class="product-slide"><img src="${img}" alt="${product.name}"></div>`).join('');
        const dots = product.images.map((_, i) => `<div class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`).join('');
        
        card.innerHTML = `
            ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            <div class="product-slider-container" id="slider-${product.id}">
                <div class="product-slides" style="transform: translateX(0%)">
                    ${slides}
                </div>
                <div class="slider-nav">
                    <button class="nav-btn prev" onclick="moveSlider(${product.id}, -1)"><i class="fas fa-chevron-left"></i></button>
                    <button class="nav-btn next" onclick="moveSlider(${product.id}, 1)"><i class="fas fa-chevron-right"></i></button>
                </div>
                <div class="slider-dots">
                    ${dots}
                </div>
            </div>
            <div class="product-info">
                <div>
                    <h3 class="product-title">${product.name}</h3>
                    <div class="size-selector-container" style="margin-bottom: 10px;">
                        <label style="font-size: 0.8rem; display: block; margin-bottom: 5px; color: #888;">Seleccionar Talle:</label>
                        <select id="size-${product.id}" style="width: 100%; padding: 8px; border-radius: 10px; border: 1px solid #ddd; outline: none; font-family: var(--font-body); color: var(--color-text);">
                            ${sizeOptions}
                        </select>
                    </div>
                    <p class="product-price">$${product.price.toLocaleString()} <small>(Ef/Transf)</small></p>
                    <p class="product-price-alt">$${product.priceCard.toLocaleString()} <small>(Tarjeta)</small></p>
                </div>
                <button class="add-to-cart" onclick="triggerAddToCart(${product.id})">Agregar al Carrito 🛍️</button>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// Carousel Logic
const sliderPositions = {}; // Store current index for each product slider

function moveSlider(productId, direction) {
    const product = products.find(p => p.id === productId);
    if (!sliderPositions[productId]) sliderPositions[productId] = 0;
    
    const maxIndex = product.images.length - 1;
    sliderPositions[productId] += direction;
    
    if (sliderPositions[productId] < 0) sliderPositions[productId] = maxIndex;
    if (sliderPositions[productId] > maxIndex) sliderPositions[productId] = 0;
    
    updateSliderUI(productId);
}

function updateSliderUI(productId) {
    const slider = document.getElementById(`slider-${productId}`);
    const slides = slider.querySelector('.product-slides');
    const dots = slider.querySelectorAll('.dot');
    const index = sliderPositions[productId];
    
    slides.style.transform = `translateX(-${index * 100}%)`;
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function triggerAddToCart(id) {
    const sizeSelect = document.getElementById(`size-${id}`);
    const selectedSize = sizeSelect.value;
    addToCart(id, selectedSize);
    
    // Add visual feedback to floating cart icon
    cartFloatingIcon.classList.add('bump');
    setTimeout(() => cartFloatingIcon.classList.remove('bump'), 300);
}

// Cart Logic
function addToCart(id, size) {
    const product = products.find(p => p.id === id);
    // Find item with same ID AND same Size
    const existing = cart.find(item => item.id === id && item.selectedSize === size);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1, selectedSize: size });
    }
    
    updateCart();
    toggleCart(true);
}

function updateCart() {
    localStorage.setItem('rame_cart', JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    let count = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        count += item.quantity;
        
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <img src="${item.images[0]}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p style="font-size: 0.8rem; color: var(--color-primary-dark); font-weight: 600;">Talle: ${item.selectedSize}</p>
                <p>${item.quantity} x $${item.price.toLocaleString()}</p>
                <button onclick="removeFromCart(${index})" style="border:none; background:none; color:#ff4d4d; cursor:pointer; font-size:0.8rem;">Eliminar</button>
            </div>
        `;
        cartItemsContainer.appendChild(itemEl);
    });

    cartTotalValue.innerText = `$${total.toLocaleString()}`;
    cartCount.innerText = count;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function toggleCart(show) {
    if (show) {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
    } else {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
    }
}

// WhatsApp Checkout
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return alert('El carrito está vacío');
    
    let message = "¡Hola Ramé! 🎀 Quiero hacer un pedido:\n\n";
    let total = 0;
    
    cart.forEach(item => {
        message += `• ${item.name} (Talle: ${item.selectedSize}) (x${item.quantity}) - $${(item.price * item.quantity).toLocaleString()}\n`;
        total += item.price * item.quantity;
    });
    
    message += `\n*Total: $${total.toLocaleString()}*`;
    
    const whatsappUrl = `https://wa.me/5491130068804?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
});

// Event Listeners
cartFloatingIcon.addEventListener('click', () => toggleCart(true));
closeCart.addEventListener('click', () => toggleCart(false));
cartOverlay.addEventListener('click', () => toggleCart(false));
document.getElementById('continue-shopping').addEventListener('click', () => toggleCart(false));

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const target = e.currentTarget;
        document.querySelector('.filter-btn.active').classList.remove('active');
        target.classList.add('active');
        
        const filter = target.dataset.filter;
        const subFiltersValue = document.getElementById('sub-filters');
        
        // Show sub-filters only when "Pijamas" is selected
        if (filter === 'pijamas') {
            subFiltersValue.style.display = 'block';
            setTimeout(() => {
                subFiltersValue.style.transform = 'translateY(0)';
                subFiltersValue.style.opacity = '1';
            }, 10);
            
            // Set "Todo" as active sub-filter by default
            document.querySelectorAll('.sub-filter-btn').forEach(s => s.classList.remove('active'));
            const defaultSub = document.querySelector('.sub-filter-btn[data-sub="pijamas"]');
            if(defaultSub) defaultSub.classList.add('active');
        } else {
            subFiltersValue.style.transform = 'translateY(-10px)';
            subFiltersValue.style.opacity = '0';
            setTimeout(() => subFiltersValue.style.display = 'none', 300);
        }
        
        renderProducts(filter, searchInput.value);
    });
});

// Event Listeners for Sub-filter buttons
document.querySelectorAll('.sub-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const target = e.currentTarget;
        document.querySelector('.sub-filter-btn.active').classList.remove('active');
        target.classList.add('active');
        
        const subFilter = target.dataset.sub;
        renderProducts(subFilter, searchInput.value);
    });
});

searchInput.addEventListener('input', (e) => {
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    renderProducts(activeFilter, e.target.value);
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    revealSections();
});

// Interactive Collage Parallax
document.addEventListener('mousemove', (e) => {
    const collage = document.querySelector('.hero-collage');
    if (!collage) return;
    
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;
    
    const p1 = collage.querySelector('.collage-p1');
    const p2 = collage.querySelector('.collage-p2');
    const p3 = collage.querySelector('.collage-p3');
    
    if(p1) p1.style.transform = `translate(${x}px, ${y}px) rotate(-3deg)`;
    if(p2) p2.style.transform = `translate(${x * -1.5}px, ${y * -1.5}px) rotate(2deg)`;
    if(p3) p3.style.transform = `translate(${x * 2}px, ${y * 2}px) rotate(-1deg)`;
});

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
    });
});

// Reveal on Scroll Logic
function revealSections() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

// Global Category filtering from cards
function filterCategory(cat) {
    const filterBtn = document.querySelector(`.filter-btn[data-filter="${cat}"]`);
    if (filterBtn) {
        filterBtn.click();
        window.location.href = '#productos';
    }
}

// Init
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1000); // 1s to enjoy the bow
});

renderProducts();
renderCart();
revealSections(); // Check for visible sections on load

console.log('Ramé Shop System ready! 🛍️🎀');
