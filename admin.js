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
let uploadedImages = [];
let manualImages = [];

function parseList(raw) {
  return raw.split(/[\n,]/).map((entry) => entry.trim()).filter(Boolean);
}

function clearForm() {
  form.reset();
  uploadedImages = [];
  manualImages = [];
  fields.images.value = '';
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
  manualImages = (product.images || []).filter((img) => !img.startsWith('data:image')).slice(0, 4);
  fields.images.value = manualImages.join('\n');
  uploadedImages = (product.images || []).filter((img) => img.startsWith('data:image')).slice(0, 4 - manualImages.length);
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
    images: row.images || []
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

function setAuthUI(session) {
  const loggedIn = !!session;
  logoutBtn.hidden = !loggedIn;
  managerCard.hidden = !loggedIn;
  listCard.hidden = !loggedIn;
  document.body.classList.toggle('logged-in', loggedIn);
  authStatus.textContent = loggedIn ? `Autenticada como ${session.user.email}` : 'No autenticada.';
}

function renderImagePreview() {
  imagePreview.innerHTML = '';
  const allImages = [
    ...uploadedImages.map((src) => ({ src, source: 'upload' })),
    ...manualImages.map((src) => ({ src, source: 'manual' }))
  ].slice(0, 4);

  allImages.forEach((item, index) => {
    const box = document.createElement('div');
    box.className = 'preview-item';
    box.innerHTML = `
      <img src="${item.src}" alt="Imagen ${index + 1}" />
      <span>${index + 1}</span>
      <button type="button" class="remove-image-btn" data-index="${index}">Eliminar</button>
    `;
    imagePreview.appendChild(box);
  });
}

function syncManualImagesFromTextarea() {
  manualImages = parseList(fields.images.value).slice(0, 4);
  const maxManualBySlots = Math.max(0, 4 - uploadedImages.length);
  if (manualImages.length > maxManualBySlots) {
    manualImages = manualImages.slice(0, maxManualBySlots);
    fields.images.value = manualImages.join('\n');
    alert('Maximo 4 imagenes por producto entre subidas y URLs/rutas.');
  }
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

  result.sort(sorters[sort] || sorters.newest);
  return result;
}

function renderList() {
  const visible = filteredProducts();
  count.textContent = `${visible.length} / ${products.length} producto(s)`;
  productList.innerHTML = '';

  visible.forEach((product) => {
    const row = document.createElement('article');
    row.className = 'row';
    row.innerHTML = `
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
}

async function loadProducts() {
  const { data, error } = await supabaseClient.from('products').select('*').order('id', { ascending: true });
  if (error) {
    alert(`No se pudieron cargar productos: ${error.message}`);
    return;
  }
  products = (data || []).map(mapRowToProduct);
  updateCategorySuggestions();
  renderList();
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
  syncManualImagesFromTextarea();
  const files = Array.from(imageUpload.files || []);
  if (!files.length) return;

  const allowed = 4 - (uploadedImages.length + manualImages.length);
  if (allowed <= 0) {
    alert('Maximo 4 imagenes por producto.');
    imageUpload.value = '';
    return;
  }

  const toUse = files.slice(0, allowed);
  for (const file of toUse) {
    const compressed = await compressImage(file);
    uploadedImages.push(compressed);
  }

  renderImagePreview();
  imageUpload.value = '';
});

fields.images.addEventListener('input', () => {
  syncManualImagesFromTextarea();
  renderImagePreview();
});

imagePreview.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement) || !target.classList.contains('remove-image-btn')) return;

  const index = Number(target.dataset.index);
  if (Number.isNaN(index)) return;

  if (index < uploadedImages.length) {
    uploadedImages.splice(index, 1);
  } else {
    const manualIndex = index - uploadedImages.length;
    manualImages.splice(manualIndex, 1);
    fields.images.value = manualImages.join('\n');
  }

  renderImagePreview();
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

  syncManualImagesFromTextarea();
  const images = [...uploadedImages, ...manualImages].slice(0, 4);
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

async function init() {
  clearForm();
  await supabaseClient.auth.signOut();
  setAuthUI(null);
}

init();
