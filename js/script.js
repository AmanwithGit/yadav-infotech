/* ==========================================================================
   Doodhwala — shared interactivity + in-memory mock data
   (No backend: state lives in memory for this front-end structure/demo.)
   ========================================================================== */

const DOW = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

const MILK_TYPES = [
  { id: "cow", name: "Cow Milk", price: 58 },
  { id: "buffalo", name: "Buffalo Milk", price: 66 },
  { id: "toned", name: "Toned Milk", price: 50 },
  { id: "full-cream", name: "Full Cream", price: 70 },
  { id: "a2", name: "A2 Desi Cow", price: 90 },
  { id: "organic", name: "Organic Mix", price: 85 },
];

const MILKMEN = [
  { id: 1, name: "Ramesh Kumar", area: "Model Town, Ludhiana", rating: 4.8, types: ["Cow","Buffalo","Toned"], price: 58, since: "2016" },
  { id: 2, name: "Suresh Dairy Farm", area: "Sarabha Nagar, Ludhiana", rating: 4.9, types: ["A2","Cow","Organic"], price: 90, since: "2012" },
  { id: 3, name: "Gurpreet Milk Co.", area: "BRS Nagar, Ludhiana", rating: 4.6, types: ["Buffalo","Full Cream"], price: 66, since: "2019" },
  { id: 4, name: "Happy Cow Dairy", area: "Civil Lines, Ludhiana", rating: 4.7, types: ["Cow","A2","Toned"], price: 62, since: "2015" },
  { id: 5, name: "Punjab Fresh Milk", area: "Dugri, Ludhiana", rating: 4.5, types: ["Buffalo","Cow"], price: 55, since: "2020" },
  { id: 6, name: "Amrit Dairy", area: "Ferozepur Rd, Ludhiana", rating: 4.9, types: ["Organic","A2"], price: 88, since: "2014" },
];

/* ---------------- Mobile nav ---------------- */
function initNavToggle(){
  const btn = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if(!btn || !links) return;
  btn.addEventListener("click", () => {
    const open = links.style.display === "flex";
    links.style.display = open ? "none" : "flex";
    links.style.cssText += open ? "" : "position:absolute; top:64px; left:0; right:0; background:var(--surface); flex-direction:column; padding:18px 28px; border-bottom:1px solid var(--line); gap:16px;";
  });
}

/* ---------------- Hero ledger (toggleable) ---------------- */
function initHeroLedger(){
  const grid = document.getElementById("heroLedger");
  if(!grid) return;
  const activeCount = document.getElementById("ledgerActiveCount");
  DOW.forEach((d, i) => {
    const cell = document.createElement("div");
    cell.className = "ledger-day" + (i < 5 ? " on" : "");
    cell.innerHTML = `<span class="d">${d}</span><span class="punch"></span>`;
    cell.addEventListener("click", () => {
      cell.classList.toggle("on");
      updateCount();
    });
    grid.appendChild(cell);
  });
  function updateCount(){
    const on = grid.querySelectorAll(".ledger-day.on").length;
    if(activeCount) activeCount.textContent = on;
  }
  updateCount();
}

/* ---------------- Role tabs (How it works: Customer / Milkman) ---------------- */
function initRoleTabs(){
  const tabs = document.querySelectorAll("[data-role-tab]");
  const panels = document.querySelectorAll("[data-role-panel]");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      document.querySelector(`[data-role-panel="${tab.dataset.roleTab}"]`).classList.add("active");
    });
  });
}

/* ---------------- Render milkman cards on homepage ---------------- */
function renderMilkmanCards(){
  const grid = document.getElementById("milkmanGrid");
  if(!grid) return;
  grid.innerHTML = MILKMEN.slice(0,6).map(m => `
    <div class="milkman-card">
      <div class="mc-top">
        <div class="avatar">${m.name.split(" ").map(w=>w[0]).slice(0,2).join("")}</div>
        <div>
          <div class="mc-name">${m.name}</div>
          <div class="mc-area">${m.area}</div>
        </div>
        <div class="mc-rating">★ ${m.rating}</div>
      </div>
      <div class="mc-body">
        <div class="tag-row">${m.types.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
        <div class="mc-price"><span class="amt">₹${m.price}</span><span class="unit">/ litre · from</span></div>
        <a class="btn btn-primary btn-block" href="login.html?role=customer">View &amp; subscribe</a>
      </div>
    </div>
  `).join("");
}

/* ---------------- Login / signup role switch ---------------- */
function initAuthRoleSwitch(){
  const tabs = document.querySelectorAll("[data-auth-role]");
  if(!tabs.length) return;
  const milkmanFields = document.querySelectorAll(".milkman-only");
  const customerFields = document.querySelectorAll(".customer-only");
  const quote = document.getElementById("authQuote");
  const who = document.getElementById("authWho");
  const params = new URLSearchParams(window.location.search);
  const initialRole = params.get("role") === "milkman" ? "milkman" : "customer";

  function setRole(role){
    tabs.forEach(t => t.classList.toggle("active", t.dataset.authRole === role));
    milkmanFields.forEach(f => f.classList.toggle("hidden", role !== "milkman"));
    customerFields.forEach(f => f.classList.toggle("hidden", role !== "customer"));
    if(quote && who){
      if(role === "milkman"){
        quote.textContent = "“I used to write every order in a notebook. Now every subscriber, every litre, is one screen away.”";
        who.textContent = "— Ramesh Kumar, Doodhwala since 2016";
      } else {
        quote.textContent = "“No more missed calls to the milkman. I set my schedule once and it just shows up.”";
        who.textContent = "— Priya S., customer in Model Town";
      }
    }
    const submitBtn = document.getElementById("authSubmit");
    if(submitBtn) submitBtn.textContent = role === "milkman" ? "Create milkman account" : "Create customer account";
  }
  tabs.forEach(t => t.addEventListener("click", () => setRole(t.dataset.authRole)));
  setRole(initialRole);

  const form = document.getElementById("authForm");
  if(form){
    form.addEventListener("submit", e => {
      e.preventDefault();
      const role = document.querySelector("[data-auth-role].active").dataset.authRole;
      window.location.href = role === "milkman" ? "milkman-dashboard.html" : "customer-dashboard.html";
    });
  }
}

/* ---------------- Login/signup toggle (within same form) ---------------- */
function initLoginSignupToggle(){
  const linkToSignup = document.getElementById("toSignup");
  const linkToLogin = document.getElementById("toLogin");
  const loginOnly = document.querySelectorAll(".login-only");
  const signupOnly = document.querySelectorAll(".signup-only");
  const title = document.getElementById("authTitle");
  const sub = document.getElementById("authSub");
  const submitBtn = document.getElementById("authSubmit");
  const footLink = document.getElementById("authFootLink");

  function showSignup(show){
    loginOnly.forEach(el => el.classList.toggle("hidden", show));
    signupOnly.forEach(el => el.classList.toggle("hidden", !show));
    if(title) title.textContent = show ? "Create your account" : "Welcome back";
    if(sub) sub.textContent = show ? "Set up your profile in under two minutes." : "Log in to manage your daily milk.";
    if(submitBtn){
      const role = document.querySelector("[data-auth-role].active")?.dataset.authRole || "customer";
      submitBtn.textContent = show ? (role === "milkman" ? "Create milkman account" : "Create customer account") : "Log in";
    }
    if(footLink){
      footLink.innerHTML = show
        ? `Already have an account? <a href="#" id="toLogin2">Log in</a>`
        : `New to Doodhwala? <a href="#" id="toSignup2">Sign up</a>`;
      const l = document.getElementById(show ? "toLogin2" : "toSignup2");
      l.addEventListener("click", e => { e.preventDefault(); showSignup(!show); });
    }
  }
  if(linkToSignup) linkToSignup.addEventListener("click", e => { e.preventDefault(); showSignup(true); });
  if(linkToLogin) linkToLogin.addEventListener("click", e => { e.preventDefault(); showSignup(false); });
}

/* ---------------- Modal ---------------- */
function openModal(id){ document.getElementById(id)?.classList.add("open"); }
function closeModal(id){ document.getElementById(id)?.classList.remove("open"); }
function initModals(){
  document.querySelectorAll("[data-open-modal]").forEach(btn => {
    btn.addEventListener("click", () => openModal(btn.dataset.openModal));
  });
  document.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", () => closeModal(btn.dataset.closeModal));
  });
  document.querySelectorAll(".modal-overlay").forEach(ov => {
    ov.addEventListener("click", e => { if(e.target === ov) ov.classList.remove("open"); });
  });
}

/* ---------------- Subscribe modal: milk type, qty, schedule ---------------- */
function initSubscribeFlow(){
  const radioCards = document.querySelectorAll("#milkTypeGrid .radio-card");
  const priceOut = document.getElementById("subUnitPrice");
  const qtyOut = document.querySelector("#subStepper .qty");
  const totalOut = document.getElementById("subTotal");
  const dowBtns = document.querySelectorAll("#subDow .dow-btn");
  const daysCountOut = document.getElementById("subDaysCount");
  if(!radioCards.length) return;

  let selectedPrice = MILK_TYPES[0].price;
  let qty = 1;

  radioCards.forEach(card => {
    card.addEventListener("click", () => {
      radioCards.forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      selectedPrice = Number(card.dataset.price);
      priceOut.textContent = selectedPrice;
      recompute();
    });
  });
  radioCards[0]?.classList.add("selected");

  document.querySelectorAll("#subStepper button").forEach(btn => {
    btn.addEventListener("click", () => {
      if(btn.dataset.step === "inc") qty = Math.min(qty + 0.5, 10);
      else qty = Math.max(qty - 0.5, 0.5);
      qtyOut.textContent = qty + " L";
      recompute();
    });
  });

  dowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("selected");
      recompute();
    });
  });

  function recompute(){
    const daysSelected = document.querySelectorAll("#subDow .dow-btn.selected").length || 0;
    if(daysCountOut) daysCountOut.textContent = daysSelected;
    const monthly = Math.round(selectedPrice * qty * (daysSelected || 0) * 4.33);
    if(totalOut) totalOut.textContent = "₹" + monthly.toLocaleString("en-IN");
  }
  recompute();
}

/* ---------------- Filter chips (browse milkmen) ---------------- */
function initFilterChips(){
  document.querySelectorAll(".chip[data-filter]").forEach(chip => {
    chip.addEventListener("click", () => {
      const group = chip.closest(".filters");
      group.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
    });
  });
}

/* ---------------- Delivery calendar (monthly ledger) ---------------- */
function renderCalendar(containerId, month, year){
  const el = document.getElementById(containerId);
  if(!el) return;
  const first = new Date(year, month, 1);
  const startDow = (first.getDay() + 6) % 7; // Monday-first
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const dows = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

  let html = dows.map(d => `<div class="cal-dow">${d}</div>`).join("");
  for(let i=0;i<startDow;i++) html += `<div class="cal-cell empty"></div>`;

  for(let day=1; day<=daysInMonth; day++){
    const today = new Date();
    let state = "pending";
    if(year === today.getFullYear() && month === today.getMonth()){
      if(day < today.getDate()) state = (day % 7 === 0) ? "skipped" : "delivered";
      else if(day === today.getDate()) state = "pending";
      else state = "future";
    } else if (new Date(year, month) < new Date(today.getFullYear(), today.getMonth())) {
      state = (day % 9 === 0) ? "skipped" : "delivered";
    } else {
      state = "future";
    }
    const cls = state === "future" ? "" : state;
    html += `<div class="cal-cell ${cls}"><span class="n">${day}</span></div>`;
  }
  el.innerHTML = html;
}

/* ---------------- Mark delivered toggle (milkman route list) ---------------- */
function initRouteChecklist(){
  document.querySelectorAll(".route-check").forEach(cb => {
    cb.addEventListener("change", () => {
      const row = cb.closest("tr");
      const badge = row?.querySelector(".badge");
      if(!badge) return;
      if(cb.checked){
        badge.textContent = "Delivered";
        badge.className = "badge green";
      } else {
        badge.textContent = "Pending";
        badge.className = "badge gold";
      }
    });
  });
}

/* ---------------- Sidebar active link (highlight based on filename) ---------------- */
function initActiveSidebarLink(){
  const page = window.location.pathname.split("/").pop();
  document.querySelectorAll(".side-nav a").forEach(a => {
    if(a.getAttribute("href") === page) a.classList.add("active");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initHeroLedger();
  initRoleTabs();
  renderMilkmanCards();
  initAuthRoleSwitch();
  initLoginSignupToggle();
  initModals();
  initSubscribeFlow();
  initFilterChips();
  initRouteChecklist();
  initActiveSidebarLink();

  const now = new Date();
  renderCalendar("customerCalendar", now.getMonth(), now.getFullYear());
  renderCalendar("milkmanCalendar", now.getMonth(), now.getFullYear());
});
