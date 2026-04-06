/* ============================================================
   ZestyDrop — Main JavaScript
   ============================================================ */

"use strict";

// ============================================================
// DATA
// ============================================================
const RESTAURANTS = [
  { id:1, name:"Spice Theory",  emoji:"🌶️", cuisine:"North Indian, Mughlai", rating:4.7, time:"25-35 min", badge:"TOP",   price:"₹300 for two",  tags:["Butter Chicken","Biryani","Kebab"] },
  { id:2, name:"Burger Bliss",  emoji:"🍔", cuisine:"American, Fast Food",   rating:4.5, time:"20-30 min", badge:"PROMO", price:"₹200 for two",  tags:["Burgers","Fries","Shakes"] },
  { id:3, name:"Pasta Planet",  emoji:"🍝", cuisine:"Italian, Continental",  rating:4.3, time:"30-40 min", badge:"NEW",   price:"₹400 for two",  tags:["Pasta","Pizza","Risotto"] },
  { id:4, name:"Biryani Box",   emoji:"🍛", cuisine:"Hyderabadi, Mughlai",   rating:4.8, time:"25-35 min", badge:"TOP",   price:"₹250 for two",  tags:["Biryani","Haleem","Kebab"] },
  { id:5, name:"Pizza Pulse",   emoji:"🍕", cuisine:"Italian, American",     rating:4.4, time:"20-30 min", badge:"PROMO", price:"₹350 for two",  tags:["Pizza","Garlic Bread","Wings"] },
  { id:6, name:"Sweet Crumbs",  emoji:"🍰", cuisine:"Desserts, Bakery",      rating:4.6, time:"15-25 min", badge:"NEW",   price:"₹150 for two",  tags:["Cakes","Brownies","Waffles"] },
];

const FOODS = [
  { id:1,  name:"Margherita Royale",        rest:"Pizza Pulse",   emoji:"🍕", price:299, rating:4.8, time:"22 min", veg:true,  cat:"pizza",   desc:"Classic Italian pizza with San Marzano tomatoes, fresh mozzarella, and basil on a hand-tossed crust." },
  { id:2,  name:"Spicy Chicken Biryani",    rest:"Biryani Box",   emoji:"🍛", price:199, rating:4.9, time:"28 min", veg:false, cat:"biryani", desc:"Fragrant basmati rice cooked with tender chicken, whole spices, and saffron. A royal meal in a box." },
  { id:3,  name:"Double Smash Burger",      rest:"Burger Bliss",  emoji:"🍔", price:249, rating:4.6, time:"18 min", veg:false, cat:"burger",  desc:"Double smashed beef patties with American cheese, special sauce, pickles, and onions in a brioche bun." },
  { id:4,  name:"Truffle Carbonara",        rest:"Pasta Planet",  emoji:"🍝", price:349, rating:4.5, time:"32 min", veg:true,  cat:"pasta",   desc:"Al dente spaghetti with creamy egg sauce, crispy pancetta, and shaved black truffle." },
  { id:5,  name:"Chocolate Lava Cake",      rest:"Sweet Crumbs",  emoji:"🍫", price:149, rating:4.9, time:"15 min", veg:true,  cat:"dessert", desc:"Warm chocolate cake with a molten centre, served with vanilla ice cream and berry coulis." },
  { id:6,  name:"Green Detox Bowl",         rest:"Pasta Planet",  emoji:"🥗", price:279, rating:4.3, time:"20 min", veg:true,  cat:"healthy", desc:"Spinach, kale, avocado, quinoa, roasted chickpeas, and a lemon tahini dressing." },
  { id:7,  name:"Mango Lassi",              rest:"Biryani Box",   emoji:"🥭", price:79,  rating:4.7, time:"10 min", veg:true,  cat:"drinks",  desc:"Thick, creamy yoghurt blended with Alphonso mango pulp and a hint of cardamom." },
  { id:8,  name:"BBQ Chicken Pizza",        rest:"Pizza Pulse",   emoji:"🍕", price:359, rating:4.7, time:"25 min", veg:false, cat:"pizza",   desc:"Smoky BBQ sauce base with grilled chicken, caramelised onions, and melted mozzarella." },
  { id:9,  name:"Crispy Paneer Tikka",      rest:"Spice Theory",  emoji:"🧀", price:189, rating:4.6, time:"20 min", veg:true,  cat:"healthy", desc:"Marinated paneer grilled in a tandoor with bell peppers and onions. Smoky, spiced perfection." },
  { id:10, name:"Oreo Shake",               rest:"Burger Bliss",  emoji:"🥤", price:129, rating:4.4, time:"10 min", veg:true,  cat:"drinks",  desc:"Thick milkshake blended with Oreo cookies, vanilla ice cream, topped with whipped cream." },
  { id:11, name:"Veg Cheese Burger",        rest:"Burger Bliss",  emoji:"🍔", price:179, rating:4.3, time:"15 min", veg:true,  cat:"burger",  desc:"Crispy veggie patty with cheddar, lettuce, tomato, and chipotle mayo in a toasted sesame bun." },
  { id:12, name:"Gulab Jamun Cheesecake",   rest:"Sweet Crumbs",  emoji:"🍰", price:199, rating:4.8, time:"20 min", veg:true,  cat:"dessert", desc:"Classic cheesecake topped with rose-syrup soaked gulab jamuns. A fusion masterpiece." },
  { id:13, name:"Mutton Rogan Josh",        rest:"Spice Theory",  emoji:"🍖", price:329, rating:4.7, time:"35 min", veg:false, cat:"biryani", desc:"Slow-cooked mutton in a rich Kashmiri gravy with aromatic spices. Served with tandoori roti." },
  { id:14, name:"Penne Arrabbiata",         rest:"Pasta Planet",  emoji:"🍝", price:259, rating:4.2, time:"25 min", veg:true,  cat:"pasta",   desc:"Penne pasta in a fiery tomato sauce with garlic, chili flakes, and fresh basil." },
  { id:15, name:"Cold Coffee Frappe",       rest:"Sweet Crumbs",  emoji:"☕", price:99,  rating:4.5, time:"8 min",  veg:true,  cat:"drinks",  desc:"Strong cold brew blended with milk, ice cream, topped with chocolate drizzle and cream." },
  { id:16, name:"Chicken Wings",            rest:"Burger Bliss",  emoji:"🍗", price:229, rating:4.6, time:"20 min", veg:false, cat:"burger",  desc:"12 crispy chicken wings tossed in Buffalo, BBQ, or Peri-Peri sauce. Served with ranch dip." },
];

const REST_MENU = {
  starters: [
    { name:"Paneer Tikka",        price:189, emoji:"🧀", desc:"Marinated paneer grilled in tandoor",         veg:true  },
    { name:"Chicken Seekh Kebab", price:229, emoji:"🍢", desc:"Minced chicken with herbs on skewers",        veg:false },
    { name:"Veg Spring Rolls",    price:129, emoji:"🥗", desc:"Crispy rolls with mixed vegetables",          veg:true  },
  ],
  mains: [
    { name:"Butter Chicken",  price:299, emoji:"🍗", desc:"Creamy tomato-based chicken curry",              veg:false },
    { name:"Dal Makhani",     price:199, emoji:"🫘", desc:"Slow cooked black lentils with butter & cream",  veg:true  },
    { name:"Mutton Rogan Josh",price:349,emoji:"🍖", desc:"Aromatic slow-cooked Kashmiri mutton curry",     veg:false },
    { name:"Palak Paneer",    price:219, emoji:"🥬", desc:"Cottage cheese in spiced spinach gravy",         veg:true  },
  ],
  desserts: [
    { name:"Gulab Jamun",  price:79, emoji:"🟤", desc:"Soft milk-solid dumplings in rose syrup",    veg:true },
    { name:"Phirni",       price:89, emoji:"🍮", desc:"Creamy rice pudding with cardamom & saffron", veg:true },
  ],
  drinks: [
    { name:"Mango Lassi",  price:79,  emoji:"🥭", desc:"Thick yoghurt smoothie with Alphonso mango",      veg:true },
    { name:"Masala Chai",  price:49,  emoji:"☕", desc:"Spiced milk tea with ginger and cardamom",        veg:true },
    { name:"Rose Sharbat", price:59,  emoji:"🌹", desc:"Chilled rose-flavoured drink with basil seeds",   veg:true },
  ],
};

const COUPONS = [
  { code:"ZESTY50",   icon:"🎁", title:"50% off your first order",        desc:"Max discount ₹150. Min order ₹199",         exp:"Expires: 31 Jan 2025" },
  { code:"FREERIDE",  icon:"🛵", title:"Free delivery all week",          desc:"No minimum order required. Limited slots",  exp:"Expires: 12 Jan 2025" },
  { code:"FEAST100",  icon:"🎉", title:"₹100 off on orders above ₹499",  desc:"Valid on all cuisines. Use once per day",   exp:"Expires: 20 Jan 2025" },
  { code:"BOGO50",    icon:"🍕", title:"Buy 1 Get 1 Free on Pizzas",      desc:"At selected restaurants only",              exp:"Expires: 10 Jan 2025" },
  { code:"FLASH30",   icon:"⚡", title:"30% off all burgers today",       desc:"Valid today only. Min order ₹149",          exp:"Expires: Today" },
  { code:"NEWSPOT",   icon:"🌟", title:"20% off at new restaurants",      desc:"Discover new places, save more",            exp:"Expires: 28 Feb 2025" },
];

// ============================================================
// STATE
// ============================================================
let cart       = [];
let menuCat    = "all";
let menuSearch = "";
let sortMode   = "popular";
let modalFood  = null;
let modalQty   = 1;
let promoCode  = null;
let promoDisc  = 0;

// ============================================================
// CURSOR
// ============================================================
(function initCursor() {
  if (window.matchMedia("(pointer:coarse)").matches) return;
  const dot  = document.getElementById("cursor");
  const ring = document.getElementById("cursorRing");
  if (!dot || !ring) return;
  let rx = 0, ry = 0;
  document.addEventListener("mousemove", e => {
    dot.style.left  = e.clientX + "px";
    dot.style.top   = e.clientY + "px";
    rx += (e.clientX - rx) * 0.14;
    ry += (e.clientY - ry) * 0.14;
    ring.style.left = rx + "px";
    ring.style.top  = ry + "px";
  });
  document.addEventListener("mousedown", () => { dot.classList.add("active"); ring.classList.add("active"); });
  document.addEventListener("mouseup",   () => { dot.classList.remove("active"); ring.classList.remove("active"); });
  (function loopRing() {
    rx += (parseFloat(dot.style.left||0) - rx) * 0.14;
    ry += (parseFloat(dot.style.top||0)  - ry) * 0.14;
    ring.style.left = rx + "px";
    ring.style.top  = ry + "px";
    requestAnimationFrame(loopRing);
  })();
})();

// ============================================================
// NAVIGATION
// ============================================================
function navigate(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active", "page-enter"));
  document.querySelectorAll(".nav-link, .mob-menu .nav-link").forEach(l => l.classList.remove("active"));
  const el = document.getElementById("page-" + page);
  if (el) {
    el.classList.add("active");
    requestAnimationFrame(() => el.classList.add("page-enter"));
    window.scrollTo({ top: 0, behavior: "instant" });
  }
  const nl = document.querySelector(`.nav-link[data-page="${page}"]`);
  if (nl) nl.classList.add("active");

  // page-specific init
  if (page === "menu")       renderFoodGrid();
  if (page === "restaurant") renderRestPage();
  if (page === "cart")       renderCartPage();
  if (page === "offers")     renderCoupons();
  if (page === "profile")    renderFavGrid();
  closeMobMenu();
}

// ============================================================
// MOBILE MENU
// ============================================================
function openMobMenu()  { document.getElementById("mobMenu").classList.add("open"); document.getElementById("mobOverlay").classList.add("open"); }
function closeMobMenu() { document.getElementById("mobMenu").classList.remove("open"); document.getElementById("mobOverlay").classList.remove("open"); }

// ============================================================
// THEME
// ============================================================
function toggleTheme() {
  const html = document.documentElement;
  const isLight = html.getAttribute("data-theme") === "light";
  html.setAttribute("data-theme", isLight ? "dark" : "light");
  document.getElementById("themeBtn").textContent = isLight ? "☀️" : "🌙";
}

// ============================================================
// RENDER RESTAURANTS (home grid)
// ============================================================
function renderRestaurants() {
  const grid = document.getElementById("restGrid");
  if (!grid) return;
  const badgeClass = { TOP:"badge-saf", PROMO:"badge-mag", NEW:"badge-grn" };
  grid.innerHTML = RESTAURANTS.map(r => `
    <div class="rcard reveal" onclick="navigate('restaurant')">
      <div class="rcard-img">
        <div class="rcard-img-bg" style="background:linear-gradient(135deg,#1a0900,#4d1f00);font-size:7rem;display:flex;align-items:center;justify-content:center;">${r.emoji}</div>
        <span class="rcard-badge ${badgeClass[r.badge]||'badge-saf'}">${r.badge}</span>
        <span class="rcard-heart" onclick="event.stopPropagation();toggleHeart(this)">🤍</span>
      </div>
      <div class="rcard-body">
        <div class="rcard-name">${r.name}</div>
        <div class="rcard-meta">
          <i>⭐ ${r.rating}</i><i>🕐 ${r.time}</i><i>🛵 Free</i>
        </div>
        <div class="rcard-meta" style="color:var(--ghost);font-size:.75rem">${r.cuisine}</div>
        <div class="rcard-tags">${r.tags.map(t=>`<span class="rtag">${t}</span>`).join("")}</div>
      </div>
    </div>
  `).join("");
}

function toggleHeart(el) {
  el.classList.toggle("lit");
  el.textContent = el.classList.contains("lit") ? "❤️" : "🤍";
  toast(el.classList.contains("lit") ? "ok" : "inf", el.classList.contains("lit") ? "Added to favourites ❤️" : "Removed from favourites");
}

// ============================================================
// TRENDING
// ============================================================
function renderTrending() {
  const w = document.getElementById("trendWrap");
  if (!w) return;
  w.innerHTML = FOODS.slice(0, 9).map(f => `
    <div class="tcard" onclick="openModal(${f.id})">
      <div class="tcard-img">${f.emoji}</div>
      <div class="tcard-body">
        <div class="tcard-name">${f.name}</div>
        <div class="tcard-rest">${f.rest}</div>
        <div class="tcard-price">₹${f.price}</div>
      </div>
    </div>
  `).join("");
}

// ============================================================
// FOOD GRID (menu page)
// ============================================================
function renderFoodGrid() {
  let items = [...FOODS];
  if (menuCat !== "all") items = items.filter(f => f.cat === menuCat);
  if (menuSearch) items = items.filter(f =>
    f.name.toLowerCase().includes(menuSearch) || f.rest.toLowerCase().includes(menuSearch)
  );
  if (sortMode === "priceLow")  items.sort((a,b) => a.price - b.price);
  if (sortMode === "priceHigh") items.sort((a,b) => b.price - a.price);
  if (sortMode === "rating")    items.sort((a,b) => b.rating - a.rating);
  if (sortMode === "time")      items.sort((a,b) => parseInt(a.time) - parseInt(b.time));

  const rc = document.getElementById("resultCount");
  if (rc) rc.textContent = `${items.length} dish${items.length !== 1 ? "es" : ""} found`;

  const grid = document.getElementById("foodGrid");
  if (!grid) return;
  if (items.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:4rem;color:var(--ghost)"><div style="font-size:3rem;margin-bottom:1rem">🔍</div><p>No dishes found. Try a different search.</p></div>`;
    return;
  }
  grid.innerHTML = items.map(f => `
    <div class="fcard" onclick="openModal(${f.id})">
      <div class="fcard-img">
        <div class="fimg-bg" style="background:linear-gradient(135deg,var(--card),var(--card2));display:flex;align-items:center;justify-content:center;font-size:3.5rem;">${f.emoji}</div>
        <span class="fcard-diet ${f.veg ? "diet-v" : "diet-n"}">${f.veg ? "VEG" : "NON-VEG"}</span>
      </div>
      <div class="fcard-body">
        <div class="fcard-name">${f.name}</div>
        <div class="fcard-rest">${f.rest}</div>
        <div class="fcard-meta"><span class="fcard-star">★</span> ${f.rating} &nbsp;🕐 ${f.time}</div>
        <div class="fcard-row">
          <div class="fcard-price">₹${f.price}</div>
          <div class="fcard-add" onclick="event.stopPropagation();addToCart(${f.id})">+</div>
        </div>
      </div>
    </div>
  `).join("");
}

function setMenuCat(cat, el) {
  menuCat = cat;
  document.querySelectorAll(".cbar-btn").forEach(b => b.classList.remove("active"));
  if (el) el.classList.add("active");
  renderFoodGrid();
}

function setSort(mode, el) {
  sortMode = mode;
  document.querySelectorAll(".sort-pill").forEach(p => p.classList.remove("on"));
  if (el) el.classList.add("on");
  renderFoodGrid();
}

function onMenuSearch(val) {
  menuSearch = val.toLowerCase();
  renderFoodGrid();
}

// ============================================================
// RESTAURANT PAGE
// ============================================================
function renderRestPage() {
  const buildRows = (list, cid) => {
    const c = document.getElementById(cid);
    if (!c) return;
    c.innerHTML = list.map(item => `
      <div class="mrow">
        <div class="mrow-img">${item.emoji}</div>
        <div class="mrow-info">
          <div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.2rem">
            <span class="fcard-diet ${item.veg?"diet-v":"diet-n"}" style="font-size:.58rem;padding:.12rem .4rem">${item.veg?"V":"NV"}</span>
            <div class="mrow-name">${item.name}</div>
          </div>
          <div class="mrow-desc">${item.desc}</div>
          <div class="mrow-price">₹${item.price}</div>
        </div>
        <div class="fcard-add" onclick="addByItem('${item.name}',${item.price},'${item.emoji}','Spice Theory')">+</div>
      </div>
    `).join("");
  };
  buildRows(REST_MENU.starters, "starterItems");
  buildRows(REST_MENU.mains,    "mainItems");
  buildRows(REST_MENU.desserts, "dessertItems");
  buildRows(REST_MENU.drinks,   "drinkItems");
  renderCartWidget();
}

// ============================================================
// CART
// ============================================================
function addToCart(id) {
  const f = FOODS.find(x => x.id === id);
  if (!f) return;
  const ex = cart.find(c => c.id === id);
  if (ex) { ex.qty++; }
  else { cart.push({ id:f.id, name:f.name, price:f.price, emoji:f.emoji, rest:f.rest, qty:1 }); }
  updateBadge();
  renderCartWidget();
  toast("ok", `${f.emoji} ${f.name} added to cart!`);
}

function addByItem(name, price, emoji, rest) {
  const ex = cart.find(c => c.name === name);
  if (ex) { ex.qty++; }
  else { cart.push({ id: Date.now(), name, price, emoji, rest, qty:1 }); }
  updateBadge();
  renderCartWidget();
  toast("ok", `${emoji} ${name} added to cart!`);
}

function changeQtyCart(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
  updateBadge();
  renderCartWidget();
  renderCartPage();
  updateSummary();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateBadge();
  renderCartWidget();
  renderCartPage();
  toast("err", "Item removed from cart");
}

function updateBadge() {
  const b = document.getElementById("cartCount");
  if (b) b.textContent = cart.reduce((s,c) => s + c.qty, 0);
}

function renderCartWidget() {
  const cw = document.getElementById("cartWidget");
  const ct = document.getElementById("cartWidgetTotal");
  const cs = document.getElementById("cartWidgetSub");
  if (!cw) return;
  if (cart.length === 0) {
    cw.innerHTML = `<div class="cbox-empty">Your cart is empty. Add something delicious!</div>`;
    if (ct) ct.style.display = "none";
    return;
  }
  cw.innerHTML = cart.map(c => `
    <div class="cbox-item">
      <span>${c.emoji}</span>
      <span class="cbox-name">${c.name}</span>
      <div class="cbox-qty">
        <div class="cbox-qbtn" onclick="changeQtyCart(${c.id},-1)">−</div>
        <span>${c.qty}</span>
        <div class="cbox-qbtn" onclick="changeQtyCart(${c.id},1)">+</div>
      </div>
      <span class="cbox-price">₹${c.price*c.qty}</span>
    </div>
  `).join("");
  const sub = cart.reduce((s,c) => s + c.price * c.qty, 0);
  if (cs) cs.textContent = "₹" + sub;
  if (ct) ct.style.display = "block";
}

function renderCartPage() {
  const con = document.getElementById("cartItems");
  if (!con) return;
  if (cart.length === 0) {
    con.innerHTML = `<div style="text-align:center;padding:4rem;color:var(--ghost)"><div style="font-size:3.5rem;margin-bottom:1rem">🛒</div><p style="margin-bottom:1.25rem">Your cart is empty!</p><button class="btn btn-saffron" onclick="navigate('menu')">Browse Menu →</button></div>`;
    updateSummary();
    return;
  }
  con.innerHTML = cart.map(c => `
    <div class="cart-full-item">
      <div class="cfi-img">${c.emoji}</div>
      <div class="cfi-info">
        <div class="cfi-name">${c.name}</div>
        <div class="cfi-from">${c.rest}</div>
        <div class="cfi-bot">
          <div class="qty-row">
            <div class="qbtn" onclick="changeQtyCart(${c.id},-1)">−</div>
            <div class="qnum">${c.qty}</div>
            <div class="qbtn" onclick="changeQtyCart(${c.id},1)">+</div>
          </div>
          <div style="font-weight:700;color:var(--saffron)">₹${c.price*c.qty}</div>
          <button class="rm-btn" onclick="removeFromCart(${c.id})">✕ Remove</button>
        </div>
      </div>
    </div>
  `).join("");
  updateSummary();
}

function updateSummary() {
  const sub  = cart.reduce((s,c) => s + c.price*c.qty, 0);
  const tax  = Math.round(sub * 0.05);
  const del  = cart.length > 0 ? 30 : 0;
  const tot  = Math.max(0, sub + tax + del - promoDisc);
  const set  = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set("sumItems",   "₹" + sub);
  set("sumTax",     "₹" + tax);
  set("sumDel",     "₹" + del);
  set("sumTotal",   "₹" + tot);
  set("sumDisc",    "-₹" + promoDisc);
  const dr = document.getElementById("sumDiscRow");
  if (dr) dr.style.display = promoCode ? "flex" : "none";
}

function applyPromo() {
  const inp = document.getElementById("promoInput");
  const msg = document.getElementById("promoMsg");
  if (!inp) return;
  const code = inp.value.trim().toUpperCase();
  const sub  = cart.reduce((s,c) => s + c.price*c.qty, 0);
  if (code === "ZESTY50") {
    promoCode = code; promoDisc = Math.min(150, Math.round(sub * 0.5));
    toast("ok", "ZESTY50 applied — 50% off (max ₹150) 🎉");
    if (msg) msg.innerHTML = `<div style="color:var(--neon);font-size:.8rem;margin-top:.25rem">✅ ZESTY50 applied!</div>`;
  } else if (code === "FEAST100" && sub >= 499) {
    promoCode = code; promoDisc = 100;
    toast("ok", "FEAST100 applied — ₹100 off 🎉");
    if (msg) msg.innerHTML = `<div style="color:var(--neon);font-size:.8rem;margin-top:.25rem">✅ FEAST100 applied!</div>`;
  } else {
    toast("err", "Invalid or expired code. Try ZESTY50 or FEAST100");
    if (msg) msg.innerHTML = `<div style="color:var(--red);font-size:.8rem;margin-top:.25rem">❌ Invalid code.</div>`;
  }
  updateSummary();
}

function placeOrder() {
  if (cart.length === 0) { toast("err", "Your cart is empty!"); return; }
  cart = []; promoCode = null; promoDisc = 0;
  updateBadge(); renderCartWidget();
  toast("ok", "🎉 Order placed successfully!");
  setTimeout(() => { navigate("tracking"); toast("inf", "Track your order in real-time 📍"); }, 800);
}

// ============================================================
// MODAL
// ============================================================
function openModal(id) {
  const f = FOODS.find(x => x.id === id);
  if (!f) return;
  modalFood = f; modalQty = 1;
  const set = (sel, v) => { const el = document.querySelector(sel); if (el) el.textContent = v; };
  set("#modalEmoji",    f.emoji);
  set("#modalName",     f.name);
  set("#modalFrom",     "by " + f.rest);
  set("#modalDesc",     f.desc);
  set("#modalRating",   `⭐ ${f.rating} (${Math.floor(Math.random()*400+100)} reviews)`);
  set("#modalTime",     `🕐 ${f.time}`);
  set("#modalQtyNum",   1);
  set("#modalTotalP",   "₹" + f.price);
  const dietEl = document.getElementById("modalDiet");
  if (dietEl) { dietEl.className = `fcard-diet ${f.veg ? "diet-v" : "diet-n"}`; dietEl.textContent = f.veg ? "VEG" : "NON-VEG"; }
  document.getElementById("foodModal").classList.add("open");
}

function closeModal() { document.getElementById("foodModal").classList.remove("open"); }
function closeModalBg(e) { if (e.target === document.getElementById("foodModal")) closeModal(); }

function changeModalQty(d) {
  modalQty = Math.max(1, modalQty + d);
  const qn = document.getElementById("modalQtyNum");
  const tp = document.getElementById("modalTotalP");
  if (qn) qn.textContent = modalQty;
  if (tp && modalFood) tp.textContent = "₹" + modalFood.price * modalQty;
}

function addModalToCart() {
  if (!modalFood) return;
  for (let i = 0; i < modalQty; i++) addToCart(modalFood.id);
  closeModal();
}

// ============================================================
// COUPONS
// ============================================================
function renderCoupons() {
  const g = document.getElementById("couponGrid");
  if (!g) return;
  g.innerHTML = COUPONS.map(c => `
    <div class="coupon" onclick="copyCoupon('${c.code}')">
      <span class="coupon-icon">${c.icon}</span>
      <div class="coupon-info">
        <div class="coupon-code">${c.code}</div>
        <div class="coupon-title">${c.title}</div>
        <div class="coupon-meta">${c.desc}<br>${c.exp}</div>
      </div>
      <div class="copy-lbl">COPY</div>
    </div>
  `).join("");
}

function copyCoupon(code) {
  if (navigator.clipboard) navigator.clipboard.writeText(code).catch(()=>{});
  toast("ok", `Code <strong>${code}</strong> copied! 🎉`);
}

// ============================================================
// FLASH TIMER
// ============================================================
function startTimer() {
  let sec = 2 * 3600 + 34 * 60 + 59;
  setInterval(() => {
    sec = sec > 0 ? sec - 1 : 9 * 3600;
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    const pad = n => String(n).padStart(2, "0");
    const setT = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    setT("tH", pad(h)); setT("tM", pad(m)); setT("tS", pad(s));
  }, 1000);
}

// ============================================================
// PROFILE TABS
// ============================================================
function switchProfileTab(tab, el) {
  document.querySelectorAll("[data-tab]").forEach(t => t.style.display = "none");
  document.querySelectorAll(".pro-nav-item").forEach(n => n.classList.remove("on"));
  const t = document.querySelector(`[data-tab="${tab}"]`);
  if (t) t.style.display = "block";
  if (el) el.classList.add("on");
}

function renderFavGrid() {
  const g = document.getElementById("favGrid");
  if (!g) return;
  g.innerHTML = RESTAURANTS.slice(0,4).map(r => `
    <div class="rcard" onclick="navigate('restaurant')">
      <div class="rcard-img">
        <div class="rcard-img-bg" style="background:linear-gradient(135deg,#1a0900,#4d1f00);display:flex;align-items:center;justify-content:center;font-size:6rem;opacity:.5">${r.emoji}</div>
      </div>
      <div class="rcard-body">
        <div class="rcard-name">${r.name}</div>
        <div class="rcard-meta"><i>⭐ ${r.rating}</i><i>🕐 ${r.time}</i></div>
      </div>
    </div>
  `).join("");
}

// ============================================================
// AUTH
// ============================================================
function switchAuth(tab, el) {
  document.querySelectorAll(".auth-tab").forEach(t => t.classList.remove("on"));
  if (el) el.classList.add("on");
  const login  = document.getElementById("authLogin");
  const signup = document.getElementById("authSignup");
  if (login)  login.style.display  = tab === "login"  ? "block" : "none";
  if (signup) signup.style.display = tab === "signup" ? "block" : "none";
}

function togglePw(id) {
  const el = document.getElementById(id);
  if (el) el.type = el.type === "password" ? "text" : "password";
}

// ============================================================
// FAQ
// ============================================================
function toggleFaq(el) { el.classList.toggle("open"); }

// ============================================================
// NEWSLETTER
// ============================================================
function subNewsletter() {
  const inp = document.getElementById("nlEmail");
  if (!inp || !inp.value || !inp.value.includes("@")) {
    toast("err", "Enter a valid email address"); return;
  }
  toast("ok", "Welcome to ZestyDrop! Check your inbox 📬");
  inp.value = "";
}

// ============================================================
// TOAST
// ============================================================
function toast(type, msg) {
  const shelf = document.getElementById("toastShelf");
  if (!shelf) return;
  const cls = { ok:"t-ok", err:"t-err", inf:"t-inf" };
  const ico = { ok:"✅", err:"❌", inf:"ℹ️" };
  const el = document.createElement("div");
  el.className = `toast-item ${cls[type] || "t-inf"}`;
  el.innerHTML = `<span>${ico[type]||"ℹ️"}</span><span>${msg}</span>`;
  shelf.appendChild(el);
  setTimeout(() => { el.classList.add("bye"); setTimeout(() => el.remove(), 320); }, 3200);
}

// ============================================================
// SCROLL EFFECTS
// ============================================================
window.addEventListener("scroll", () => {
  const stt = document.getElementById("stt");
  if (stt) { window.scrollY > 300 ? stt.classList.add("show") : stt.classList.remove("show"); }
  document.querySelectorAll(".reveal, .reveal-l, .reveal-r").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 70) el.classList.add("visible");
  });
});

function scrollTop() { window.scrollTo({ top:0, behavior:"smooth" }); }

// ============================================================
// CHIP TOGGLE
// ============================================================
function toggleChip(el) { el.classList.toggle("on"); }

// ============================================================
// CATEGORY SELECT (home)
// ============================================================
function selectHomeCat(el) {
  document.querySelectorAll(".cat-chip").forEach(c => c.classList.remove("active"));
  el.classList.add("active");
}

// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  renderRestaurants();
  renderTrending();
  startTimer();
  updateBadge();
  updateSummary();

  // initial reveal pass
  setTimeout(() => {
    document.querySelectorAll(".reveal, .reveal-l, .reveal-r").forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), i * 80);
    });
  }, 200);

  // cursor ring raf
  const ring = document.getElementById("cursorRing");
  const dot  = document.getElementById("cursor");
  if (ring && dot) {
    let rx = 0, ry = 0;
    (function loop() {
      rx += (parseFloat(dot.style.left || 0) - rx) * 0.14;
      ry += (parseFloat(dot.style.top  || 0) - ry) * 0.14;
      ring.style.left = rx + "px";
      ring.style.top  = ry + "px";
      requestAnimationFrame(loop);
    })();
  }
});
