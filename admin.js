const SUPABASE_URL = 'https://qrlvbiosynsaqqadjrub.supabase.co';
const SUPABASE_KEY = 'sb_publishable_2vDzHGf-1ZdxdRQUU5so7w_Yz1iTVlE';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const defaultProducts = [
  { name: 'Camisero Animal Print', price: 42000, priceCard: 46200, category: 'pijamas', subCategory: 'corto', badge: 'Nuevo', sizes: ['S', 'M', 'L', 'XL'], images: ['img/camisero-animalprint/WhatsApp Image 2026-03-29 at 13.12.41.jpeg', 'img/camisero-animalprint/WhatsApp Image 2026-03-29 at 13.12.42 (1).jpeg', 'img/camisero-animalprint/WhatsApp Image 2026-03-29 at 13.12.42 (2).jpeg', 'img/camisero-animalprint/WhatsApp Image 2026-03-29 at 13.12.42.jpeg'] },
  { name: 'Camisero Negro', price: 42000, priceCard: 46200, category: 'pijamas', subCategory: 'corto', sizes: ['S', 'M', 'L', 'XL'], images: ['img/camisero-negro/3A5EAD30-8E6A-4266-B9AB-0B85A606E9FD (1).JPEG', 'img/camisero-negro/B6796FFD-336C-41D5-A911-ECA3B5C08311.jpg (1).jpeg'] },
  { name: 'Camisolin Rayado', price: 30000, priceCard: 36000, category: 'pijamas', subCategory: 'corto', badge: 'Tendencia', sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'], images: ['img/camisolin-rayado/camisolin-rayado-1.jpg', 'img/camisolin-rayado/camisolin-rayado-2.jpg', 'img/camisolin-rayado/camisolin-rayado-3.jpg', 'img/camisolin-rayado/camisolin-rayado-4.jpg'] },
  { name: 'Camisero Rosa', price: 42000, priceCard: 46200, category: 'pijamas', subCategory: 'corto', sizes: ['S', 'M', 'L', 'XL'], images: ['img/camisero-rosa/WhatsApp Image 2026-03-29 at 13.13.01 (1).jpeg', 'img/camisero-rosa/WhatsApp Image 2026-03-29 at 13.13.01 (2).jpeg', 'img/camisero-rosa/WhatsApp Image 2026-03-29 at 13.13.01.jpeg', 'img/camisero-rosa/WhatsApp Image 2026-03-29 at 13.13.02.jpeg'] },
  { name: 'Conjunto Musculosa Negro', price: 36000, priceCard: 39600, category: 'pijamas', subCategory: 'corto', sizes: ['S', 'M', 'L', 'XL'], images: ['img/conjunto-musculosa-negro/WhatsApp Image 2026-03-26 at 22.25.02 (1).jpeg', 'img/conjunto-musculosa-negro/WhatsApp Image 2026-03-26 at 22.25.02 (2).jpeg', 'img/conjunto-musculosa-negro/WhatsApp Image 2026-03-26 at 22.25.02.jpeg', 'img/conjunto-musculosa-negro/WhatsApp Image 2026-03-26 at 22.25.03.jpeg'] },
  { name: 'Conjunto Musculosa Rayado', price: 36000, priceCard: 39600, category: 'pijamas', subCategory: 'corto', sizes: ['S', 'M', 'L', 'XL'], images: ['img/conjunto-musculosa-rayado/WhatsApp Image 2026-03-29 at 13.13.41.jpeg', 'img/conjunto-musculosa-rayado/WhatsApp Image 2026-03-29 at 13.13.42 (1).jpeg', 'img/conjunto-musculosa-rayado/WhatsApp Image 2026-03-29 at 13.13.42.jpeg'] },
  { name: 'Bata Rayada', price: 45000, priceCard: 49500, category: 'batas', sizes: ['Talle Unico'], images: ['img/bata/bata.jpeg', 'img/bata/WhatsApp Image 2026-03-30 at 10.11.03.jpeg'] },
  { name: 'Conjunto Camisero Rayado', price: 42000, priceCard: 46200, category: 'pijamas', subCategory: 'corto', badge: 'Nuevo', sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'], images: ['img/camisero-rayado/WhatsApp Image 2026-03-30 at 23.13.45.jpeg', 'img/camisero-rayado/WhatsApp Image 2026-03-30 at 23.13.46 (1).jpeg', 'img/camisero-rayado/WhatsApp Image 2026-03-30 at 23.13.46 (2).jpeg', 'img/camisero-rayado/WhatsApp Image 2026-03-30 at 23.13.46.jpeg'] },
  { name: 'Bata Negra', price: 45000, priceCard: 49500, category: 'batas', sizes: ['Talle Unico'], images: ['img/bata-negra/WhatsApp Image 2026-03-31 at 12.54.32.jpeg', 'img/bata-negra/WhatsApp Image 2026-03-31 at 12.54.33.jpeg'] },
  { name: 'Bata Rosa', price: 45000, priceCard: 49500, category: 'batas', sizes: ['Talle Unico'], images: ['img/bata-Rosa/WhatsApp Image 2026-03-31 at 12.54.33.jpeg'] }
];

const form = document.getElementById('product-form');
const idInput = document.getElementById('product-id');
const count = document.getElementById('count');
const productList = document.getElementById('product-list');
const cancelBtn = document.getElementById('cancel-edit');
const formTitle = document.getElementById('form-title');
const saveBtn = document.getElementById('save-btn');
const authForm = document.getElementById('auth-form');
const authEmail = document.getElementById('auth-email');
const authPassword = document.getElementById('auth-password');
const authStatus = document.getElementById('auth-status');
const logoutBtn = document.getElementById('logout-btn');
const managerCard = document.getElementById('manager-card');
const listCard = document.getElementById('list-card');
const statsCard = document.getElementById('stats-card');
const imageUpload = document.getElementById('images-upload');
const imagePreview = document.getElementById('image-preview');
const searchProducts = document.getElementById('search-products');
const filterCategory = document.getElementById('filter-category');
const sortProducts = document.getElementById('sort-products');
const categoryOptions = document.getElementById('category-options');
const subcategoryOptions = document.getElementById('subcategory-options');

const fields = {
  name: document.getElementById('name'),
  price: document.getElementById('price'),
  priceCard: document.getElementById('priceCard'),
  category: document.getElementById('category'),
  subCategory: document.getElementById('subCategory'),
  badge: document.getElementById('badge'),
  sizes: document.getElementById('sizes'),
  images: document.getElementById('images')
};

let products = [];
let selectedImages = [];

function parseList(raw) {
  return raw.split(/[\n,]/).map((entry) => entry.trim()).filter(Boolean);
}

function clearForm() {
  form.reset();
  selectedImages = [];
  renderImagePreview();
  idInput.value = '';
  formTitle.textContent = 'Nuevo producto';
  saveBtn.textContent = 'Guardar producto';
  cancelBtn.hidden = true;
}

function fillForm(product) {
  idInput.value = product.id;
  fields.name.value = product.name || '';
  fields.price.value = product.price || 0;
  fields.priceCard.value = product.priceCard || 0;
  fields.category.value = product.category || '';
  fields.subCategory.value = product.subCategory || '';
  fields.badge.value = product.badge || '';
  fields.sizes.value = (product.sizes || []).join(', ');
  selectedImages = (product.images || []).slice(0, 4);
  syncImagesField();
  renderImagePreview();
  formTitle.textContent = `Editar producto #${product.id}`;
  saveBtn.textContent = 'Guardar cambios';
  cancelBtn.hidden = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function mapRowToProduct(row) {
  return {
    id: row.id,
    name: row.name,
    price: Number(row.price || 0),
    priceCard: Number(row.price_card || 0),
    category: row.category || '',
    subCategory: row.sub_category || '',
    badge: row.badge || '',
    sizes: row.sizes || [],
    images: row.images || [],
    sortOrder: row.sort_order != null ? Number(row.sort_order) : row.id
  };
}

function toDbPayload(product) {
  return {
    name: product.name,
    price: product.price,
    price_card: product.priceCard,
    category: product.category,
    sub_category: product.subCategory || null,
    badge: product.badge || null,
    sizes: product.sizes,
    images: product.images
  };
}

async function saveSortOrder() {
  const updates = products.map((p, index) =>
    supabaseClient.from('products').update({ sort_order: index }).eq('id', p.id)
  );
  await Promise.all(updates);
}

function switchTab(tabName) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  
  if (tabName === 'stats') {
    if (statsCard) statsCard.hidden = false;
    managerCard.hidden = true;
    listCard.hidden = true;
  } else {
    if (statsCard) statsCard.hidden = true;
    managerCard.hidden = false;
    listCard.hidden = false;
  }
}

document.getElementById('admin-tabs')?.addEventListener('click', (e) => {
  const btn = e.target.closest('.tab-btn');
  if (btn) {
    switchTab(btn.dataset.tab);
  }
});

function setAuthUI(session) {
  const loggedIn = !!session;
  logoutBtn.hidden = !loggedIn;
  document.body.classList.toggle('logged-in', loggedIn);
  authStatus.textContent = loggedIn ? `Autenticada como ${session.user.email}` : 'No autenticada.';
  
  const adminTabs = document.getElementById('admin-tabs');
  if (adminTabs) adminTabs.hidden = !loggedIn;

  if (loggedIn) {
    switchTab('stats');
  } else {
    managerCard.hidden = true;
    listCard.hidden = true;
    if (statsCard) statsCard.hidden = true;
  }
}

function renderImagePreview() {
  imagePreview.innerHTML = '';
  selectedImages.forEach((src, index) => {
    const box = document.createElement('div');
    box.className = 'preview-item';
    box.innerHTML = `
      <img src="${src}" alt="Imagen ${index + 1}" />
      <span>${index + 1}</span>
      <button type="button" class="remove-image-btn" data-index="${index}" style="width: 100%; padding: 8px; background: rgba(220, 53, 69, 0.9); font-size: 0.85rem; font-weight: bold; color: white; border: none; cursor: pointer;">🗑️ Eliminar</button>
    `;
    imagePreview.appendChild(box);
  });
}

function syncImagesField() {
  fields.images.value = selectedImages
    .filter((img) => !img.startsWith('data:image'))
    .join('\n');
}

function updateCategorySuggestions() {
  const categories = [...new Set(products.map((item) => item.category).filter(Boolean))].sort();
  const subcats = [...new Set(products.map((item) => item.subCategory).filter(Boolean))].sort();

  categoryOptions.innerHTML = categories.map((cat) => `<option value="${cat}"></option>`).join('');
  subcategoryOptions.innerHTML = subcats.map((sub) => `<option value="${sub}"></option>`).join('');

  filterCategory.innerHTML = '<option value="all">Todas las categorias</option>' + categories.map((cat) => `<option value="${cat}">${cat}</option>`).join('');
}

function filteredProducts() {
  const term = searchProducts.value.trim().toLowerCase();
  const cat = filterCategory.value;
  const sort = sortProducts.value;

  let result = [...products];

  if (term) {
    result = result.filter((item) => item.name.toLowerCase().includes(term));
  }

  if (cat !== 'all') {
    result = result.filter((item) => item.category === cat);
  }

  const sorters = {
    newest: (a, b) => b.id - a.id,
    oldest: (a, b) => a.id - b.id,
    name_asc: (a, b) => a.name.localeCompare(b.name),
    name_desc: (a, b) => b.name.localeCompare(a.name),
    price_asc: (a, b) => a.price - b.price,
    price_desc: (a, b) => b.price - a.price
  };

  if (sorters[sort]) {
    result.sort(sorters[sort]);
  }
  // If sort === 'default', keep the existing order from Supabase (sort_order)
  return result;
}

function renderList() {
  const isFiltered = searchProducts.value.trim() || filterCategory.value !== 'all' || sortProducts.value !== 'default';
  const visible = filteredProducts();
  count.textContent = `${visible.length} / ${products.length} producto(s)`;
  productList.innerHTML = '';

  // Show/hide drag hint based on whether we can actually reorder
  let dragHint = document.getElementById('drag-order-hint');
  if (!dragHint) {
    dragHint = document.createElement('p');
    dragHint.id = 'drag-order-hint';
    dragHint.className = 'drag-hint';
    productList.before(dragHint);
  }
  if (!isFiltered) {
    dragHint.textContent = '✋ Arrastrá desde el ícono ≡ para cambiar el orden. El orden se guarda automáticamente.';
    dragHint.style.display = 'block';
  } else {
    dragHint.textContent = '⚠️ Desactivá filtros y ordenamiento para poder reordenar.';
    dragHint.style.display = 'block';
  }

  visible.forEach((product) => {
    const row = document.createElement('article');
    row.className = 'row';
    row.dataset.id = product.id;
    row.draggable = !isFiltered;
    row.innerHTML = `
      <div class="drag-handle${isFiltered ? ' drag-handle--disabled' : ''}" title="Arrastrar para reordenar">≡</div>
      <img src="${product.images?.[0] || ''}" alt="${product.name}">
      <div>
        <h3>#${product.id} - ${product.name}</h3>
        <p><strong>$${Number(product.price).toLocaleString()}</strong> ef/transf | $${Number(product.priceCard).toLocaleString()} tarjeta</p>
        <p>Categoria: ${product.category || '-'}${product.subCategory ? ` / ${product.subCategory}` : ''}</p>
        <p>Talles: ${(product.sizes || []).join(', ') || '-'}</p>
        <p>Imagenes: ${(product.images || []).length}</p>
        ${product.badge ? `<p>Badge: ${product.badge}</p>` : ''}
      </div>
      <div class="row-actions">
        <button type="button" data-action="edit" data-id="${product.id}">Editar</button>
        <button type="button" class="delete" data-action="delete" data-id="${product.id}">Borrar</button>
      </div>
    `;
    productList.appendChild(row);
  });

  if (!isFiltered) {
    initDragAndDrop();
  }
}

function updateDashboardStats() {
  const totalProducts = products.length;
  const statTotalProducts = document.getElementById('stat-total-products');
  if (statTotalProducts) statTotalProducts.textContent = totalProducts;

  // Categories
  const categories = [...new Set(products.map(p => p.category).filter(Boolean))];
  const statTotalCategories = document.getElementById('stat-total-categories');
  if (statTotalCategories) statTotalCategories.textContent = categories.length;

  // Average Prices
  const statAvgPrice = document.getElementById('stat-avg-price');
  const statAvgCardPrice = document.getElementById('stat-avg-card-price');
  if (statAvgPrice && statAvgCardPrice) {
    if (totalProducts > 0) {
      const sumPrice = products.reduce((sum, p) => sum + (p.price || 0), 0);
      const sumPriceCard = products.reduce((sum, p) => sum + (p.priceCard || 0), 0);
      const avgPrice = Math.round(sumPrice / totalProducts);
      const avgPriceCard = Math.round(sumPriceCard / totalProducts);
      statAvgPrice.textContent = `$${avgPrice.toLocaleString()}`;
      statAvgCardPrice.textContent = `$${avgPriceCard.toLocaleString()}`;
    } else {
      statAvgPrice.textContent = '$0';
      statAvgCardPrice.textContent = '$0';
    }
  }

  // Min / Max Price
  const statMaxPriceName = document.getElementById('stat-max-price-name');
  const statMinPriceName = document.getElementById('stat-min-price-name');
  if (statMaxPriceName && statMinPriceName) {
    if (totalProducts > 0) {
      const sortedByPrice = [...products].sort((a, b) => a.price - b.price);
      const minProduct = sortedByPrice[0];
      const maxProduct = sortedByPrice[sortedByPrice.length - 1];
      statMaxPriceName.textContent = `${maxProduct.name} ($${maxProduct.price.toLocaleString()})`;
      statMinPriceName.textContent = `${minProduct.name} ($${minProduct.price.toLocaleString()})`;
    } else {
      statMaxPriceName.textContent = '-';
      statMinPriceName.textContent = '-';
    }
  }

  // Common sizes & badges count
  const sizeCounts = {};
  let badgesCount = 0;
  products.forEach(p => {
    if (p.badge) badgesCount++;
    if (Array.isArray(p.sizes)) {
      p.sizes.forEach(s => {
        const trimmed = s.trim().toUpperCase();
        if (trimmed) {
          sizeCounts[trimmed] = (sizeCounts[trimmed] || 0) + 1;
        }
      });
    }
  });

  const statCommonSize = document.getElementById('stat-common-size');
  if (statCommonSize) {
    let commonSize = '-';
    let maxCount = 0;
    for (const [sz, cnt] of Object.entries(sizeCounts)) {
      if (cnt > maxCount) {
        maxCount = cnt;
        commonSize = `${sz} (${cnt} prod)`;
      }
    }
    statCommonSize.textContent = commonSize;
  }

  const statBadgesCount = document.getElementById('stat-badges-count');
  if (statBadgesCount) statBadgesCount.textContent = badgesCount;

  // Category Distribution Progress Bars
  const categoryDistContainer = document.getElementById('category-distribution-list');
  if (categoryDistContainer) {
    categoryDistContainer.innerHTML = '';
    const catCounts = {};
    products.forEach(p => {
      if (p.category) {
        const cat = p.category.trim().toLowerCase();
        catCounts[cat] = (catCounts[cat] || 0) + 1;
      }
    });

    const sortedCats = Object.entries(catCounts).sort((a, b) => b[1] - a[1]);
    sortedCats.forEach(([catName, cnt]) => {
      const percentage = totalProducts > 0 ? Math.round((cnt / totalProducts) * 100) : 0;
      const capitalized = catName.charAt(0).toUpperCase() + catName.slice(1);
      
      const item = document.createElement('div');
      item.className = 'chart-row-item';
      item.innerHTML = `
        <div class="chart-row-label-row">
          <span>${capitalized}</span>
          <span>${cnt} (${percentage}%)</span>
        </div>
        <div class="chart-bar-container">
          <div class="chart-bar-fill" style="width: ${percentage}%"></div>
        </div>
      `;
      categoryDistContainer.appendChild(item);
    });
  }
}

async function loadProducts() {
  const { data, error } = await supabaseClient.from('products').select('*').order('sort_order', { ascending: true }).order('id', { ascending: true });
  if (error) {
    alert(`No se pudieron cargar productos: ${error.message}`);
    return;
  }
  products = (data || []).map(mapRowToProduct);
  updateCategorySuggestions();
  renderList();
  updateDashboardStats();
}

async function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function compressImage(file) {
  const dataUrl = await fileToDataUrl(file);
  const img = new Image();
  await new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = reject;
    img.src = dataUrl;
  });

  const maxSide = 1280;
  const ratio = Math.min(1, maxSide / Math.max(img.width, img.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(img.width * ratio);
  canvas.height = Math.round(img.height * ratio);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL('image/jpeg', 0.82);
}

imageUpload.addEventListener('change', async () => {
  const files = Array.from(imageUpload.files || []);
  if (!files.length) return;

  const allowed = 4 - selectedImages.length;
  if (allowed <= 0) {
    alert('Maximo 4 imagenes por producto.');
    imageUpload.value = '';
    return;
  }

  const toUse = files.slice(0, allowed);
  for (const file of toUse) {
    const compressed = await compressImage(file);
    selectedImages.push(compressed);
  }

  renderImagePreview();
  syncImagesField();
  imageUpload.value = '';
});

imagePreview.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  if (!target.classList.contains('remove-image-btn')) return;

  const index = Number(target.dataset.index);
  if (Number.isNaN(index) || index < 0 || index >= selectedImages.length) return;

  selectedImages.splice(index, 1);
  renderImagePreview();
  syncImagesField();
});

authForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: authEmail.value.trim(),
    password: authPassword.value
  });

  if (error) {
    alert(`Error de login: ${error.message}`);
    return;
  }

  authPassword.value = '';
  setAuthUI(data.session);
  await loadProducts();
});

logoutBtn.addEventListener('click', async () => {
  await supabaseClient.auth.signOut();
  setAuthUI(null);
  products = [];
  renderList();
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const manualImages = parseList(fields.images.value);
  const dataImages = selectedImages.filter((img) => img.startsWith('data:image'));
  const images = [...dataImages, ...manualImages].slice(0, 4);
  const sizes = parseList(fields.sizes.value);

  if (!images.length || !sizes.length) {
    alert('Debes cargar al menos una imagen y un talle.');
    return;
  }

  const payload = {
    name: fields.name.value.trim(),
    price: Number(fields.price.value),
    priceCard: Number(fields.priceCard.value),
    category: fields.category.value.trim().toLowerCase(),
    subCategory: fields.subCategory.value.trim().toLowerCase(),
    badge: fields.badge.value.trim(),
    sizes,
    images
  };

  if (idInput.value) {
    const id = Number(idInput.value);
    const { error } = await supabaseClient.from('products').update(toDbPayload(payload)).eq('id', id);
    if (error) {
      alert(`No se pudo actualizar: ${error.message}`);
      return;
    }
  } else {
    const { error } = await supabaseClient.from('products').insert(toDbPayload(payload));
    if (error) {
      alert(`No se pudo crear: ${error.message}`);
      return;
    }
  }

  clearForm();
  await loadProducts();
});

productList.addEventListener('click', async (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const action = target.dataset.action;
  const id = Number(target.dataset.id);
  if (!action || !id) return;

  const product = products.find((item) => item.id === id);
  if (!product) return;

  if (action === 'edit') {
    fillForm(product);
    return;
  }

  if (action === 'delete') {
    const confirmed = window.confirm(`Borrar producto "${product.name}"?`);
    if (!confirmed) return;

    const { error } = await supabaseClient.from('products').delete().eq('id', id);
    if (error) {
      alert(`No se pudo borrar: ${error.message}`);
      return;
    }

    if (Number(idInput.value) === id) clearForm();
    await loadProducts();
  }
});

cancelBtn.addEventListener('click', clearForm);
searchProducts.addEventListener('input', renderList);
filterCategory.addEventListener('change', renderList);
sortProducts.addEventListener('change', renderList);

// ============================================================
// DRAG & DROP REORDER (desktop + mobile touch)
// ============================================================
function initDragAndDrop() {
  const rows = Array.from(productList.querySelectorAll('.row[draggable="true"]'));
  if (!rows.length) return;

  let dragSrc = null;
  let touchDragging = false;
  let ghost = null;
  let touchOffsetX = 0;
  let touchOffsetY = 0;
  let lastTarget = null;

  // ---- Desktop drag events ----
  rows.forEach((row) => {
    const handle = row.querySelector('.drag-handle');

    handle.addEventListener('mousedown', () => { row.draggable = true; });

    row.addEventListener('dragstart', (e) => {
      dragSrc = row;
      row.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', row.dataset.id);
    });

    row.addEventListener('dragend', () => {
      row.classList.remove('dragging');
      productList.querySelectorAll('.row').forEach(r => r.classList.remove('drag-over'));
      dragSrc = null;
    });

    row.addEventListener('dragover', (e) => {
      e.preventDefault();
      if (!dragSrc || dragSrc === row) return;
      e.dataTransfer.dropEffect = 'move';
      productList.querySelectorAll('.row').forEach(r => r.classList.remove('drag-over'));
      row.classList.add('drag-over');
    });

    row.addEventListener('drop', async (e) => {
      e.preventDefault();
      if (!dragSrc || dragSrc === row) return;
      row.classList.remove('drag-over');

      const srcId = Number(dragSrc.dataset.id);
      const dstId = Number(row.dataset.id);

      const srcIndex = products.findIndex(p => p.id === srcId);
      const dstIndex = products.findIndex(p => p.id === dstId);
      if (srcIndex === -1 || dstIndex === -1) return;

      // Reorder in-memory
      const [moved] = products.splice(srcIndex, 1);
      products.splice(dstIndex, 0, moved);

      renderList();
      showSaveOrderIndicator();
      await saveSortOrder();
      hideSaveOrderIndicator();
    });
  });

  // ---- Touch drag events (mobile) ----
  rows.forEach((row) => {
    const handle = row.querySelector('.drag-handle');

    handle.addEventListener('touchstart', (e) => {
      e.preventDefault();
      touchDragging = true;
      dragSrc = row;
      lastTarget = null;

      const touch = e.touches[0];
      const rect = row.getBoundingClientRect();
      const handleRect = handle.getBoundingClientRect();
      // Offset from center of handle so the ghost follows the finger naturally
      touchOffsetX = touch.clientX - handleRect.left - handleRect.width / 2 + (handleRect.left - rect.left);
      touchOffsetY = touch.clientY - handleRect.top - handleRect.height / 2 + (handleRect.top - rect.top);

      // Create ghost clone
      ghost = row.cloneNode(true);
      ghost.id = 'drag-ghost';
      ghost.style.cssText = `
        position: fixed;
        top: ${rect.top}px;
        left: ${rect.left}px;
        width: ${rect.width}px;
        pointer-events: none;
        opacity: 0.88;
        z-index: 9999;
        border-radius: 14px;
        box-shadow: 0 14px 40px rgba(0,0,0,0.28);
        transform: scale(1.03);
        background: var(--color-bg, #fff);
      `;
      document.body.appendChild(ghost);
      row.classList.add('dragging');
    }, { passive: false });

    handle.addEventListener('touchmove', (e) => {
      if (!touchDragging || !ghost) return;
      e.preventDefault();

      const touch = e.touches[0];
      ghost.style.top = `${touch.clientY - touchOffsetY}px`;
      ghost.style.left = `${touch.clientX - touchOffsetX}px`;

      // Find element under touch (excluding ghost)
      ghost.style.display = 'none';
      const el = document.elementFromPoint(touch.clientX, touch.clientY);
      ghost.style.display = '';

      const targetRow = el ? el.closest('.row[draggable="true"]') : null;
      if (targetRow && targetRow !== dragSrc) {
        productList.querySelectorAll('.row').forEach(r => r.classList.remove('drag-over'));
        targetRow.classList.add('drag-over');
        lastTarget = targetRow;
      }
    }, { passive: false });

    handle.addEventListener('touchend', async (e) => {
      if (!touchDragging) return;
      touchDragging = false;

      if (ghost) { ghost.remove(); ghost = null; }
      dragSrc.classList.remove('dragging');
      productList.querySelectorAll('.row').forEach(r => r.classList.remove('drag-over'));

      if (lastTarget && lastTarget !== dragSrc) {
        const srcId = Number(dragSrc.dataset.id);
        const dstId = Number(lastTarget.dataset.id);
        const srcIndex = products.findIndex(p => p.id === srcId);
        const dstIndex = products.findIndex(p => p.id === dstId);

        if (srcIndex !== -1 && dstIndex !== -1) {
          const [moved] = products.splice(srcIndex, 1);
          products.splice(dstIndex, 0, moved);
          renderList();
          showSaveOrderIndicator();
          await saveSortOrder();
          hideSaveOrderIndicator();
        }
      }

      dragSrc = null;
      lastTarget = null;
    }, { passive: false });
  });
}

function showSaveOrderIndicator() {
  let indicator = document.getElementById('save-order-indicator');
  if (!indicator) {
    indicator = document.createElement('div');
    indicator.id = 'save-order-indicator';
    indicator.className = 'save-order-indicator';
    document.body.appendChild(indicator);
  }
  indicator.textContent = '💾 Guardando orden...';
  indicator.classList.add('visible');
}

function hideSaveOrderIndicator() {
  const indicator = document.getElementById('save-order-indicator');
  if (!indicator) return;
  indicator.textContent = '✅ Orden guardado';
  setTimeout(() => indicator.classList.remove('visible'), 1800);
}

document.getElementById('import-local-products').addEventListener('click', async () => {
  const local = JSON.parse(localStorage.getItem('rame_products') || '[]');
  if (!Array.isArray(local) || local.length === 0) {
    alert('No hay productos guardados en esta pagina para importar.');
    return;
  }

  const confirmed = window.confirm(`Se importaran ${local.length} productos desde esta pagina a Supabase. Continuar?`);
  if (!confirmed) return;

  const normalized = local.map((item) => ({
    name: String(item.name || '').trim(),
    price: Number(item.price || 0),
    priceCard: Number(item.priceCard || 0),
    category: String(item.category || 'general').trim().toLowerCase(),
    subCategory: String(item.subCategory || '').trim().toLowerCase(),
    badge: String(item.badge || '').trim(),
    sizes: Array.isArray(item.sizes) ? item.sizes : [],
    images: Array.isArray(item.images) ? item.images.slice(0, 4) : []
  })).filter((p) => p.name && p.images.length > 0);

  if (normalized.length === 0) {
    alert('Los productos locales no tienen formato valido para importar.');
    return;
  }

  const { error: deleteError } = await supabaseClient.from('products').delete().gt('id', 0);
  if (deleteError) {
    alert(`No se pudo limpiar Supabase: ${deleteError.message}`);
    return;
  }

  const payload = normalized.map(toDbPayload);
  const { error: insertError } = await supabaseClient.from('products').insert(payload);
  if (insertError) {
    alert(`No se pudo importar: ${insertError.message}`);
    return;
  }

  await loadProducts();
  alert('Importacion completada. Ya puedes editar esos productos en admin.');
});

document.getElementById('reset-products').addEventListener('click', async () => {
  const confirmed = window.confirm('Esto reemplaza el catalogo por el inicial. Continuar?');
  if (!confirmed) return;

  const { error: deleteError } = await supabaseClient.from('products').delete().gt('id', 0);
  if (deleteError) {
    alert(`No se pudo limpiar la tabla: ${deleteError.message}`);
    return;
  }

  const payload = defaultProducts.map(toDbPayload);
  const { error: insertError } = await supabaseClient.from('products').insert(payload);
  if (insertError) {
    alert(`No se pudo restaurar: ${insertError.message}`);
    return;
  }

  clearForm();
  await loadProducts();
});

// Theme Toggle Click Handler (Admin)
const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

async function init() {
  clearForm();
  await supabaseClient.auth.signOut();
  setAuthUI(null);

  // Theme initialization check
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.documentElement.classList.add('dark-theme');
  } else {
    document.documentElement.classList.remove('dark-theme');
  }
}

init();
