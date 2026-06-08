// ==========================================
// LIFELINE — script.js FINAL v6.0
// All 4 Sheet URLs connected & all bugs fixed
// ==========================================

const BLOOD_URL     = "https://script.google.com/macros/s/AKfycbyDJOawSPUbu-xvtBZz9PmWyr3wlP79VmRk7Dyp1j2omZAQ-XZWe5o1ALICZGFL8oGSyA/exec";
const JOB_URL       = "https://script.google.com/macros/s/AKfycby4OLj8ZUVUTlFbl4y3n9jvBLwYsm3s3mGCAU7r4nl1txJfoKrdB-v6fDcVQ1uQbiTg/exec";
const EMERGENCY_URL = "https://script.google.com/macros/s/AKfycbzeIMKePsJwLA84G3MB5pVG8JwaVDcdClKG0vE9YGL5t1xe-nnSb0uW-YAsPWfM6f-d1g/exec";
const FOOD_URL      = "https://script.google.com/macros/s/AKfycbxsB2Gx2Lix5TyOgzambU4HNMnbdLrojzKWMdLSw3eRmSAATuJxYExkebIxO2yyeSM_kQ/exec";
const PHARMACY_URL = "https://script.google.com/macros/s/AKfycbwAapcK3LSvWv6NUNZUURRSmza0zAFOJqqufoLVg-IGCReB8EOO8jNMB7xlJ6oUIP-A/exec"; // আপনার কপি করা URL টি এখানে বসবে

const ADMIN_PASSWORD = "lifeline2025";

// ==========================================
// UPAZILA → UNION DATA
// ==========================================
const upazilaUnions = {
  sadar: {
    label: "ব্রাহ্মণবাড়িয়া সদর",
    unions: ["মাছিহাতা","বাসুদেব","তালশহর (পূর্ব)","নাটাই (উত্তর)","নাটাই (দক্ষিণ)","রামরাইল","সুলتانপুর","مজলিষপুর","বুধল","সুহিলপুর"],
    aliases: ["machihata","basudev","talshahr","natai","ramrail","sultanpur","majlishpur","budhol","suhilpur","sadar"]
  },
  kasba: {
    label: "কসবা",
    unions: ["কসবা পশ্চিম","কুটি","মেহারী","বাদৈর","খাড়েরা","বিনাউটি","গোপীনাথপুর","বায়েক","কায়েমপুর","মূলগ্রাম"],
    aliases: ["kasba paschim","kasba sadar","kasba west","kuti","mehari","badair","kherera","binauti","gopinathpur","bayek","kaimpur","mulgram","kasba"]
  },
  nabinagar: {
    label: "নবীনগর",
    unions: ["নবীনগর পূর্ব","নবীনগর পশ্চিম","ইব্রাহিমপুর","শ্রীরামপুর","রসুল্লাবাদ","লাউর ফতেহপুর","জিনোদপুর","সাতমোড়া","শ্যামগ্রাম","সলিমগঞ্জ","বড়াইল","শিবপুর","বিটঘর","কাইতলা (উত্তর)","কাইতলা (দক্ষিণ)","কৃষ্ণনগর","বীরগাঁও","নাঠঘর","বিদ্যাকুট","বড়িকান্দি"],
    aliases: ["nabinagar","ibrahimpur","srirampur","rasullabad","laur","jinodpur","satmora","shyamgram","solimoanj","borail","shibpur","bitghar","kaitola","krishnanagar","birgaon","nathghar","bidyakut","borikandi"]
  },
  sarail: {
    label: "সরাইল",
    unions: ["সরাইল সদর","নোয়াগাঁও","কালিকচ্ছ","অরুয়াইল","পাকশিমুল","চুনটা","শাহজাদাপুর","পানিশ্বর","শাহবাজপুর"],
    aliases: ["sarail","noagaon","kalikaccha","aruail","pakshimul","chunta","shahzadapur","panishwar","shahbazpur"]
  },
  nasirnagar: {
    label: "নাসিরনগর",
    unions: ["নাসিরনগর","চাতলপাড়","ভলাকুট","কুণ্ডা","গোয়ালনগর","নাসিরপুর","বুড়িশ্বর","ফান্দাউক","গুনিয়াউক","চাপরতলা","পাগলা","পূর্বভাগ","গোকর্ণ"],
    aliases: ["nasirnagar","chatalpar","bholakut","kunda","goalnagar","nasirpur","burishwar","fandauk","guniuk","chaportola","pagla","purbobhag","gokarna"]
  },
  ashuganj: {
    label: "আশুগঞ্জ",
    unions: ["আশুগঞ্জ সদর","চর চারতলা","দুর্গাপুর","তারুয়া","শরিফপুর","আড়ল-সিধা","লালপুর","তালশহর (পশ্চিম)"],
    aliases: ["ashuganj","char chartala","durgapur","taruya","sharifpur","arol","lalpur","talshahr"]
  },
  bancharampur: {
    label: "বাঞ্ছারামপুর",
    unions: ["বাঞ্ছারামপুর","আইয়ুবপুর","দরিয়াদৌলত","ফরদাবাদ","রুপসদী","ছয়ফুল্লাকান্দি","তেজখালী","পাহাড়িয়াকান্দি","দরিয়াপুর","সোনারামপুর","মানিকপুর","উজানচর","সালেহাবাদ"],
    aliases: ["bancharampur","ayubpur","dariadaulat","faridabad","rupsodi","chhaifullakandi","tejkhali","pahariyakandi","dariyapur","sonarampur","manikpur","ujanchhar","salehaabad"]
  },
  akhaura: {
    label: "আখাউড়া",
    unions: ["আখাউড়া উত্তর","আখাউড়া দক্ষিণ","মোগড়া","মনিয়ন্দ"],
    aliases: ["akhaura","mogra","moniyond"]
  },
  bijoynagar: {
    label: "বিজয়নগর",
    unions: ["বুধন্তি","চান্দুরা","ইছাপুরা","চম্পকনগর","হরষপুর","পত্তন","সিংগারবিল","বিষ্ণুপুর","পাহাড়পুর","চর ইসলামপুর"],
    aliases: ["budhanti","chandura","ichapura","champaknogar","harashpur","potton","singarbil","bishnupur","paharpur","char islampur","bijoynagar"]
  }
};

// ==========================================
// FALLBACK DATA (Sheet খালি থাকলে)
// ==========================================
const emergencyFallback = [
  { title:"জাতীয় জরুরি",            number:"999",          desc:"পুলিশ, ফায়ার, অ্যাম্বুলেন্স", upazila:"all",           category:"জরুরি"   },
  { title:"স্বাস্থ্য বাতায়ন",         number:"16263",        desc:"স্বাস্থ্য তথ্য (২৪/৭)",        upazila:"all",           category:"স্বাস্থ্য" },
  { title:"নারী সহায়তা",             number:"109",          desc:"টোল-ফ্রি হেল্পলাইন",           upazila:"all",           category:"নারী"    },
  { title:"জাতীয় তথ্য",             number:"333",          desc:"সরকারি সেবা ও অভিযোগ",        upazila:"all",           category:"তথ্য"    },
  { title:"দুর্যোগ সতর্কতা",          number:"1090",         desc:"আবহাওয়া তথ্য",                upazila:"all",           category:"দুর্যোগ"  },
  { title:"সদর ফায়ার স্টেশন",        number:"01730-336639", desc:"ফায়ার সার্ভিস",               upazila:"sadar",         category:"ফায়ার"   },
  { title:"আশুগঞ্জ ফায়ার স্টেশন",    number:"01730-336643", desc:"ফায়ার সার্ভিস",               upazila:"ashuganj",      category:"ফায়ার"   },
  { title:"কসবা ফায়ার স্টেশন",       number:"01901-021745", desc:"ফায়ার সার্ভিস",               upazila:"kasba",         category:"ফায়ার"   },
  { title:"আখাউড়া ফায়ার স্টেশন",    number:"01730-336644", desc:"ফায়ার সার্ভিস",               upazila:"akhaura",       category:"ফায়ার"   },
  { title:"নবীনগর ফায়ার স্টেশন",     number:"01730-336647", desc:"ফায়ার সার্ভিস",               upazila:"nabinagar",     category:"ফায়ার"   },
  { title:"সরাইল ফায়ার স্টেশন",      number:"01901-021749", desc:"ফায়ার সার্ভিস",               upazila:"sarail",        category:"ফায়ার"   },
  { title:"বাঞ্ছারামপুর ফায়ার",       number:"01730-336646", desc:"ফায়ার সার্ভিস",               upazila:"bancharampur",  category:"ফায়ার"   },
  { title:"নাসিরনগর ফায়ার",          number:"01901-021748", desc:"ফায়ার সার্ভিস",               upazila:"nasirnagar",    category:"ফায়ার"   },
  { title:"সাইদুল ইসলাম",            number:"01642496318",  desc:"NTV করেসপন্ডেন্ট",            upazila:"all",           category:"মিডিয়া"  }
];

const bloodFallback = [
  { name:"Kasba Life Care Diagnostic",   group:"Any", area:"kasba",      phone:"01977964599", type:"Center"       },
  { name:"Ashuganj Blood Bank",          group:"Any", area:"ashuganj",   phone:"",            type:"Center"       },
  { name:"Nabinagar Red Crescent Unit",  group:"Any", area:"nabinagar",  phone:"",            type:"Center"       },
  { name:"Nasirnagar Youth Blood Group", group:"Any", area:"nasirnagar", phone:"",            type:"Organization" },
  { name:"Sarail Seva Sangstha",         group:"Any", area:"sarail",     phone:"",            type:"Organization" }
];

const medicineDB = {
  napa:    { name:"Napa / Paracetamol", shop:"Maa Pharmacy",                 area:"ব্রাহ্মণবাড়িয়া সদর নতুন বাজার", map:"https://www.google.com/maps/search/Pharmacy+Brahmanbaria+Sadar"                   },
  seclo:   { name:"Seclo 20mg",         shop:"Station View Medical",         area:"রেলওয়ে স্টেশন রোড, সদর",          map:"https://www.google.com/maps/search/Pharmacy+Brahmanbaria+Railway+Station"        },
  alatrol: { name:"Alatrol",            shop:"Health Complex Gate Pharmacy", area:"জেলা সদর হাসপাতাল গেট",           map:"https://www.google.com/maps/search/Pharmacy+Brahmanbaria+District+Hospital"     },
  monas:   { name:"Monas 10",           shop:"Popular Pharmacy",             area:"কসবা নতুন বাজার",                  map:"https://www.google.com/maps/search/Pharmacy+Kasba+Natun+Bazar"                  },
  flagyl:  { name:"Flagyl 400mg",       shop:"Bhai Bhai Medical",            area:"আশুগঞ্জ বাজার",                    map:"https://www.google.com/maps/search/Pharmacy+Ashuganj+Bazar+Brahmanbaria"        }
};

// ==========================================
// HELPERS
// ==========================================
function maskPhone(p) {
  const c = (p || "").replace(/\D/g, "");
  if (c.length < 6) return "নম্বর সুরক্ষিত";
  return c.slice(0, 4) + "****" + c.slice(-2);
}

async function fetchGet(url) {
  try {
    const r = await fetch(url, { redirect: "follow" });
    const d = await r.json();
    return Array.isArray(d) ? d : (d.data ? d.data : []);
  } catch(e) { console.error("fetchGet error:", e); return []; }
}

async function fetchPost(url, body) {
  const r = await fetch(url, {
    method:  "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body:    JSON.stringify(body)
  });
  return r.json();
}

// ==========================================
// PAGE NAVIGATION
// ==========================================
let currentPage = "home";

function goPage(name) {
  if (name === currentPage) return;
  const outEl = document.getElementById("page-" + currentPage);
  const inEl  = document.getElementById("page-" + name);
  if (!outEl || !inEl) return;
  outEl.classList.remove("active");
  outEl.classList.add("slide-out");
  setTimeout(() => outEl.classList.remove("slide-out"), 240);
  inEl.classList.add("active");
  currentPage = name;
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
  const navEl = document.getElementById("nav-" + name);
  if (navEl) navEl.classList.add("active");
  document.getElementById("fab").classList.toggle("hidden", name !== "blood");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================
// UPAZILA → UNION CASCADE
// ==========================================
function onUpazilaChange() {
  const val  = document.getElementById("blood-area").value;
  const wrap = document.getElementById("union-wrap");
  const sel  = document.getElementById("blood-union");
  if (!val || !upazilaUnions[val]) { wrap.style.display = "none"; sel.value = ""; return; }
  sel.innerHTML = `<option value="">সব ইউনিয়ন</option>` +
    upazilaUnions[val].unions.map(u => `<option value="${u}">${u}</option>`).join("");
  wrap.style.display = "block";
  wrap.style.animation = "fadeUp 0.28s ease both";
}

function onNewDonorUpazilaChange() {
  const val  = document.getElementById("new-donor-area").value;
  const wrap = document.getElementById("new-union-wrap");
  const sel  = document.getElementById("new-donor-union");
  if (!val || !upazilaUnions[val]) { wrap.style.display = "none"; return; }
  sel.innerHTML = `<option value="">ইউনিয়ন বেছে নিন (ঐচ্ছিক)</option>` +
    upazilaUnions[val].unions.map(u => `<option value="${u}">${u}</option>`).join("");
  wrap.style.display = "block";
  wrap.style.animation = "fadeUp 0.28s ease both";
}

// ==========================================
// SKELETON LOADERS
// ==========================================
function skeletonDonorList() {
  return Array(3).fill(0).map(() => `
    <div class="sk-card" style="margin:0 16px 10px;display:flex;justify-content:space-between;align-items:center;gap:12px;">
      <div style="flex:1">
        <div class="skeleton sk-line w80" style="height:16px;margin-bottom:10px;"></div>
        <div style="display:flex;gap:6px;margin-bottom:8px;">
          <div class="skeleton" style="height:22px;width:50px;border-radius:100px;"></div>
          <div class="skeleton" style="height:22px;width:70px;border-radius:100px;"></div>
        </div>
        <div class="skeleton sk-line w40" style="height:12px;"></div>
      </div>
      <div class="skeleton" style="height:38px;width:72px;border-radius:100px;flex-shrink:0;"></div>
    </div>`).join("");
}
function skeletonEmergency() {
  return Array(4).fill(0).map(() => `<div class="skeleton sk-pill"></div>`).join("");
}
function skeletonCardList(n = 3) {
  return `<div class="sk-card">` + Array(n).fill(0).map(() => `
    <div style="margin-bottom:14px;padding-bottom:14px;border-bottom:1px solid var(--border);">
      <div class="skeleton sk-line w60" style="height:15px;margin-bottom:8px;"></div>
      <div class="skeleton sk-line w80" style="height:12px;"></div>
      <div class="skeleton" style="height:28px;width:80px;border-radius:100px;margin-top:8px;"></div>
    </div>`).join("") + `</div>`;
}

// ==========================================
// RENDER: EMERGENCY
// ==========================================
let _emergencyAll = [];

async function renderEmergency(filterUpazila = "all", filterCategory = "all") {
  const sc = document.getElementById("emergency-scroll");
  if (!sc) return;
  sc.innerHTML = skeletonEmergency();
  const sheet = await fetchGet(EMERGENCY_URL);
  _emergencyAll = [...emergencyFallback, ...sheet];
  _renderEmCards(_emergencyAll, filterUpazila, filterCategory);
}

function onEmergencyFilter() {
  const u = document.getElementById("em-filter-upazila")?.value  || "all";
  const c = document.getElementById("em-filter-category")?.value || "all";
  _renderEmCards(_emergencyAll, u, c);
}

function _renderEmCards(all, fu, fc) {
  const sc = document.getElementById("emergency-scroll");
  if (!sc) return;
  const list = all.filter(e => {
    const mu = fu === "all" || e.upazila === "all" || e.upazila === fu;
    const mc = fc === "all" || (e.category || "") === fc;
    return mu && mc;
  });
  if (!list.length) {
    sc.innerHTML = `<div style="padding:20px;color:var(--text3);font-size:13px;text-align:center">এই ফিল্টারে কোনো নম্বর নেই</div>`;
    return;
  }
  sc.innerHTML = list.map((e, i) => `
    <a href="tel:${e.number}" class="e-pill" style="animation:fadeUp 0.4s ease ${i*0.06}s both">
      <div class="e-number">${e.number}</div>
      <div class="e-title">${e.title}</div>
      <div class="e-desc">${e.desc}</div>
      ${e.upazila !== "all" ? `<div class="e-desc" style="color:var(--red);font-weight:700;margin-top:2px">📍 ${upazilaUnions[e.upazila]?.label || e.upazila}</div>` : ""}
    </a>`).join("");
}

// ── Emergency Admin ──
function openEmergencyAdminModal()   { document.getElementById("emergency-admin-modal").classList.add("open"); }
function closeEmergencyAdminModal(e) {
  if (!e || e.target === document.getElementById("emergency-admin-modal"))
    document.getElementById("emergency-admin-modal").classList.remove("open");
}

function initEmergencyAdminForm() {
  const btn = document.getElementById("submit-emergency-btn");
  if (!btn) return;
  btn.addEventListener("click", async function() {
    const pass     = document.getElementById("em-admin-pass").value.trim();
    const title    = document.getElementById("em-title").value.trim();
    const number   = document.getElementById("em-number").value.trim();
    const desc     = document.getElementById("em-desc").value.trim();
    const upazila  = document.getElementById("em-upazila").value;
    const category = document.getElementById("em-category").value;

    if (pass !== ADMIN_PASSWORD) { toast("❌ পাসওয়ার্ড ভুল!", "red"); return; }
    if (!title || !number)       { toast("নাম ও নম্বর দিন!", "red"); return; }

    this.disabled    = true;
    this.textContent = "⏳ সেভ হচ্ছে...";
    try {
      await fetchPost(EMERGENCY_URL, { title, number, desc, upazila, category });
      toast("✅ নম্বর যোগ হয়েছে!", "green");
      closeEmergencyAdminModal();
      ["em-admin-pass","em-title","em-number","em-desc"].forEach(id => {
        const el = document.getElementById(id); if (el) el.value = "";
      });
      await renderEmergency();
    } catch(e) { toast("সমস্যা হয়েছে!", "red"); }
    finally {
      this.disabled    = false;
      this.textContent = "✅ নম্বর যোগ করুন";
    }
  });
}

// ==========================================
// RENDER: HOSPITALS (static)
// ==========================================
function renderHospitals() {
  const govt  = document.getElementById("hospital-govt");
  const priv  = document.getElementById("hospital-private");
  const pharm = document.getElementById("hospital-pharmacy");
  if (!govt) return;
  govt.innerHTML = priv.innerHTML = pharm.innerHTML = skeletonCardList(3);

  const govtData = [
    { name:"Brahmanbaria District Hospital (250-bed)",  loc:"জেলা সদর",            map:"https://www.google.com/maps/search/Brahmanbaria+District+Hospital" },
    { name:"Brahmanbaria Sadar Upazila Health Complex", loc:"সদর উপজেলা",          map:"https://www.google.com/maps/search/Brahmanbaria+Sadar+Upazila+Health+Complex" },
    { name:"Ashuganj Upazila Health Complex",           loc:"আশুগঞ্জ উপজেলা",      map:"https://www.google.com/maps/search/Ashuganj+Upazila+Health+Complex+Brahmanbaria" },
    { name:"Akhaura Upazila Health Complex",            loc:"আখাউড়া উপজেলা",      map:"https://www.google.com/maps/search/Akhaura+Upazila+Health+Complex+Brahmanbaria" },
    { name:"Bancharampur Upazila Health Complex",       loc:"বাঞ্ছারামপুর উপজেলা",  map:"https://www.google.com/maps/search/Bancharampur+Upazila+Health+Complex+Brahmanbaria" },
    { name:"Bijoynagar Upazila Health Complex",         loc:"বিজয়নগর উপজেলা",     map:"https://www.google.com/maps/search/Bijoynagar+Upazila+Health+Complex+Brahmanbaria" },
    { name:"Kasba Upazila Health Complex",              loc:"কসবা উপজেলা",          map:"https://www.google.com/maps/search/Kasba+Upazila+Health+Complex+Brahmanbaria" },
    { name:"Nabinagar Upazila Health Complex",          loc:"নবীনগর উপজেলা",       map:"https://www.google.com/maps/search/Nabinagar+Upazila+Health+Complex+Brahmanbaria" },
    { name:"Nasirnagar Upazila Health Complex",         loc:"নাসিরনগর উপজেলা",     map:"https://www.google.com/maps/search/Nasirnagar+Upazila+Health+Complex+Brahmanbaria" },
    { name:"Sarail Upazila Health Complex",             loc:"সরাইল উপজেলা",        map:"https://www.google.com/maps/search/Sarail+Upazila+Health+Complex+Brahmanbaria" }
  ];
  const privData = [
    { name:"Ibn Sina Hospital Brahmanbaria",         loc:"সদর",                          map:"https://www.google.com/maps/search/Ibn+Sina+Hospital+Brahmanbaria" },
    { name:"Popular Diagnostic Centre Brahmanbaria", loc:"সদর",                          map:"https://www.google.com/maps/search/Popular+Diagnostic+Centre+Brahmanbaria" },
    { name:"Amir Hossain Shishu General Hospital",   loc:"কসবা সদর",                     map:"https://www.google.com/maps/search/Amir+Hossain+Shishu+General+Hospital+Kasba" },
    { name:"Central Hospital & Diagnostic Center",   loc:"কুটি, কসবা",                   map:"https://www.google.com/maps/search/Central+Hospital+Kuti+Kasba" },
    { name:"Ashuganj General Hospital & Diagnostic", loc:"আশুগঞ্জ বাজার",                map:"https://www.google.com/maps/search/Ashuganj+General+Hospital+Brahmanbaria" },
    { name:"Akhaura Railway Hospital",               loc:"আখাউড়া রেলওয়ে স্টেশন সংলগ্ন",  map:"https://www.google.com/maps/search/Akhaura+Railway+Hospital+Brahmanbaria" },
    { name:"Brahmanbaria Eye Hospital",              loc:"সদর",                          map:"https://www.google.com/maps/search/Eye+Hospital+Brahmanbaria" }
  ];
  const pharmData = [
    { name:"জেলা সদর হাসপাতাল গেট",        loc:"সদর",              map:"https://www.google.com/maps/search/Pharmacy+Brahmanbaria+District+Hospital" },
    { name:"কসবা নতুন বাজার ফার্মেসি জোন", loc:"কসবা",             map:"https://www.google.com/maps/search/Pharmacy+Kasba+Natun+Bazar" },
    { name:"আশুগঞ্জ বাজার ফার্মেসি",       loc:"আশুগঞ্জ",          map:"https://www.google.com/maps/search/Pharmacy+Ashuganj+Bazar+Brahmanbaria" },
    { name:"আখাউড়া বাজার ফার্মেসি জোন",   loc:"আখাউড়া",          map:"https://www.google.com/maps/search/Pharmacy+Akhaura+Bazar+Brahmanbaria" },
    { name:"নবীনগর বাজার ফার্মেসি",        loc:"নবীনগর",           map:"https://www.google.com/maps/search/Pharmacy+Nabinagar+Brahmanbaria" }
  ];

  const buildCard = items => `<div class="card"><div class="info-list">
    ${items.map(i => `<div class="info-item"><strong>${i.name}</strong><small>${i.loc}</small>
      ${i.map ? `<br/><a href="${i.map}" target="_blank" class="a-map">🗺️ ম্যাপ</a>` : ""}
    </div>`).join("")}
  </div></div>`;

  setTimeout(() => {
    govt.innerHTML  = buildCard(govtData);
    priv.innerHTML  = buildCard(privData);
    pharm.innerHTML = buildCard(pharmData);
  }, 400);
}

// ==========================================
// RENDER: FOOD
// ==========================================
async function renderFood() {
  const list = document.getElementById("food-list");
  const orgs = document.getElementById("food-orgs");
  if (!list) return;
  list.innerHTML = skeletonCardList(3);
  if (orgs) orgs.innerHTML = skeletonCardList(2);

  const posts = await fetchGet(FOOD_URL);

  list.innerHTML = posts.length ? `
    <div style="padding:4px 20px 8px;font-size:12px;font-weight:600;color:var(--text3);">
      <span class="live-dot"></span>
      <span class="live-label">${posts.length}টি সক্রিয় পোস্ট</span>
    </div>
    ${posts.map((f,i) => `
      <div class="donor-card" style="animation-delay:${i*0.06}s;flex-direction:column;align-items:flex-start;gap:8px;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;width:100%">
          <h4 style="margin:0 0 4px">🍽️ ${f.name}</h4>
          <button onclick="openDeleteFoodModal('${f.id}')"
            style="background:none;border:1px solid var(--border);border-radius:8px;padding:4px 10px;font-size:12px;color:var(--text3);cursor:pointer;flex-shrink:0">
            🗑️ মুছুন
          </button>
        </div>
        <div style="font-size:13px;color:var(--text2);line-height:1.5">${f.desc}</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;font-size:12px;">
          <span class="dtag blood">🎁 ${f.offer}</span>
          ${f.time    ? `<span class="dtag area">🕒 ${f.time}</span>` : ""}
          ${f.maplink ? `<a href="${f.maplink}" target="_blank" class="dtag type" style="text-decoration:none">📍 ম্যাপ</a>` : ""}
        </div>
        <div style="font-size:11px;color:var(--text4)">🕐 ${f.timestamp}</div>
      </div>`).join("")}
    <button class="btn-submit green" onclick="openFoodModal()" style="margin:8px 16px;width:calc(100% - 32px)">
      🍱 নতুন খাবারের তথ্য পোস্ট করুন
    </button>` : `
    <div style="text-align:center;padding:32px 16px;">
      <div style="font-size:40px;margin-bottom:8px">🍽️</div>
      <p style="color:var(--text3);font-size:14px;margin-bottom:16px">এখন কোনো খাবারের পোস্ট নেই</p>
      <button class="btn-submit green" onclick="openFoodModal()" style="max-width:240px;margin:0 auto">
        🍱 খাবারের তথ্য পোস্ট করুন
      </button>
    </div>`;

  if (orgs) orgs.innerHTML = `<div class="card"><div class="info-list">
    <div class="info-item"><strong>স্থানীয় স্বেচ্ছাসেবী ও যুব সংগঠন</strong><small>ছাত্র কল্যাণ পরিষদ, ব্লাড ডোনেশন ক্লাব, আলোকিত কসবা</small></div>
    <div class="info-item"><strong>আস-সুন্নাহ ফাউন্ডেশন</strong><small>জাতীয় পর্যায়ের ফাউন্ডেশনের স্থানীয় স্বেচ্ছাসেবকরা</small></div>
    <div class="info-item"><strong>বিদ্যানন্দ ফাউন্ডেশন</strong><small>স্থানীয় স্বেচ্ছাসেবী কার্যক্রম</small></div>
    <div class="info-item"><strong>বাংলাদেশ রেড ক্রিসেন্ট সোসাইটি — ব্রাহ্মণবাড়িয়া ইউনিট</strong><small>দুর্যোগ ও মানবিক সহায়তা</small></div>
  </div></div>`;
}

function openFoodModal()  { document.getElementById("food-modal").classList.add("open"); }
function closeFoodModal(e) {
  if (!e || e.target === document.getElementById("food-modal"))
    document.getElementById("food-modal").classList.remove("open");
}

let _deleteFoodId = null;
function openDeleteFoodModal(id) {
  _deleteFoodId = id;
  document.getElementById("food-delete-modal").classList.add("open");
}
function closeDeleteFoodModal(e) {
  if (!e || e.target === document.getElementById("food-delete-modal"))
    document.getElementById("food-delete-modal").classList.remove("open");
}

function initFoodForm() {
  const addBtn = document.getElementById("submit-food-btn");
  if (addBtn) {
    addBtn.addEventListener("click", async function() {
      const name    = document.getElementById("food-name").value.trim();
      const desc    = document.getElementById("food-desc").value.trim();
      const offer   = document.getElementById("food-offer").value;
      const time    = document.getElementById("food-time-input").value.trim();
      const maplink = document.getElementById("food-map").value.trim();
      const pin     = document.getElementById("food-pin").value.trim();

      if (!name || !desc)               { toast("নাম ও বিবরণ দিন!", "red"); return; }
      if (!pin || !/^\d{4}$/.test(pin)) { toast("৪ সংখ্যার PIN দিন!", "red"); return; }

      this.disabled = true;
      const btnText = document.getElementById("food-btn-text");
      if (btnText) btnText.textContent = "⏳ পোস্ট হচ্ছে...";
      try {
        await fetchPost(FOOD_URL, { action:"add", name, desc, offer, time, maplink, pin });
        toast("✅ পোস্ট হয়েছে!", "green");
        closeFoodModal();
        ["food-name","food-desc","food-time-input","food-map","food-pin"]
          .forEach(id => { const el = document.getElementById(id); if (el) el.value = ""; });
        setTimeout(() => renderFood(), 1200);
      } catch(e) { toast("সমস্যা হয়েছে!", "red"); }
      finally {
        this.disabled = false;
        if (btnText) btnText.textContent = "🍱 পোস্ট করুন";
      }
    });
  }

  const delBtn = document.getElementById("confirm-delete-food-btn");
  if (delBtn) {
    delBtn.addEventListener("click", async function() {
      const pin = document.getElementById("food-delete-pin").value.trim();
      if (!pin) { toast("PIN দিন!", "red"); return; }
      this.disabled = true;
      try {
        const res = await fetchPost(FOOD_URL, { action:"delete", id: _deleteFoodId, pin });
        if (res.status === "ok") {
          toast("✅ পোস্ট মুছে গেছে!", "green");
          closeDeleteFoodModal();
          document.getElementById("food-delete-pin").value = "";
          renderFood();
        } else {
          toast("❌ " + (res.msg || "PIN ভুল!"), "red");
        }
      } catch(e) { toast("সমস্যা হয়েছে!", "red"); }
      finally { this.disabled = false; }
    });
  }
}

// ==========================================
// RENDER: JOBS
// ==========================================
async function renderJobs() {
  const jobsList   = document.getElementById("jobs-list");
  const skillsList = document.getElementById("skills-list");
  if (!jobsList) return;
  jobsList.innerHTML   = skeletonCardList(3);
  skillsList.innerHTML = skeletonCardList(3);

  const jobs = await fetchGet(JOB_URL);
  const typeClass = { "Full-Time":"ft","Part-Time":"pt","Intern":"in" };

  jobsList.innerHTML = `<div class="card">
    ${jobs.length ? jobs.map(j => `
      <div class="job-item">
        <div class="job-top">
          <strong>🏢 ${j.org || ""}</strong>
          <span class="jbadge ${typeClass[j.type] || "ft"}">${j.type || "Full-Time"}</span>
        </div>
        <div class="job-detail">📌 ${j.role || ""}</div>
        ${j.work ? `<div class="job-detail">📅 ${j.work}</div>` : ""}
        <div class="job-seats">🪑 খালি পদ: ${j.seats || ""} টি</div>
      </div>`).join("") : `<div style="text-align:center;padding:20px;color:var(--text3);font-size:14px">এখন কোনো চাকরির পোস্ট নেই</div>`}
    <button class="btn-submit green" onclick="openJobModal()" style="margin-top:8px">📢 নতুন চাকরি পোস্ট করুন</button>
  </div>`;

  skillsList.innerHTML = `<div class="card"><div class="info-list">
    <div class="info-item"><strong>ব্রাহ্মণবাড়িয়া টেকনিক্যাল ট্রেনিং সেন্টার (TTC)</strong><small>সদর — ইলেকট্রিক্যাল, ওয়েল্ডিং, অটোমোটিভ</small><br/><a href="https://www.google.com/maps/search/Technical+Training+Center+Brahmanbaria" target="_blank" class="a-map">🗺️ ম্যাপ</a></div>
    <div class="info-item"><strong>জেলা যুব উন্নয়ন অধিদপ্তর</strong><small>সদর — কম্পিউটার বেসিক, সেলাই, ড্রাইভিং</small><br/><a href="https://www.google.com/maps/search/Youth+Development+Office+Brahmanbaria" target="_blank" class="a-map">🗺️ ম্যাপ</a></div>
    <div class="info-item"><strong>ব্রাহ্মণবাড়িয়া পলিটেকনিক ইন্সটিটিউট</strong><small>সদর — সিভিল, ইলেকট্রিক্যাল, কম্পিউটার ডিপ্লোমা</small><br/><a href="https://www.google.com/maps/search/Brahmanbaria+Polytechnic+Institute" target="_blank" class="a-map">🗺️ ম্যাপ</a></div>
    <div class="info-item"><strong>BLC — Bangladesh Livelihood Cluster</strong><small>সদর — আয়বর্ধক প্রশিক্ষণ ও উদ্যোক্তা সহায়তা</small><br/><a href="https://www.google.com/maps/search/BLC+Brahmanbaria+Livelihood" target="_blank" class="a-map">🗺️ ম্যাপ</a></div>
    <div class="info-item"><strong>এমএফ কম্পিউটার সেন্টার</strong><small>ইমাম পাড়া, কসবা সদর</small></div>
    <div class="info-item"><strong>ধন্যবাদ প্রিন্টার্স</strong><small>কসবা — গ্রাফিক্স ডিজাইন</small><br/><a href="https://dhonnobadprinters.com/" target="_blank" class="a-web">🌐 ওয়েবসাইট</a></div>
    <div class="info-item"><strong>BRAC Skills Development — ব্রাহ্মণবাড়িয়া</strong><small>সদর ও উপজেলা পর্যায়</small><br/><a href="https://www.google.com/maps/search/BRAC+Office+Brahmanbaria" target="_blank" class="a-map">🗺️ ম্যাপ</a></div>
  </div></div>`;
}

// ── Job Modal Toggle ──
function openJobModal()          { document.getElementById("job-modal").classList.add("open"); }
function closeJobModalOutside(e) {
  if (e.target === document.getElementById("job-modal"))
    document.getElementById("job-modal").classList.remove("open");
}

function initJobForm() {
  document.getElementById("submit-job-btn").addEventListener("click", async function() {
    const org   = document.getElementById("job-org").value.trim();
    const role  = document.getElementById("job-role").value.trim();
    const type  = document.getElementById("job-type").value;
    const seats = document.getElementById("job-seats").value.trim();

    if (!org || !role || !seats) { toast("সব তথ্য দিন!", "red"); return; }

    this.disabled = true;
    const btnText = document.getElementById("job-btn-text");
    if (btnText) btnText.textContent = "⏳ পোস্ট হচ্ছে...";
    try {
      await fetchPost(JOB_URL, { org, role, type, seats });
      toast("✅ চাকরির খবর যোগ হয়েছে!", "green");
      closeJobModalOutside({ target: document.getElementById("job-modal") });
      ["job-org","job-role","job-seats"].forEach(id => document.getElementById(id).value = "");
      setTimeout(() => renderJobs(), 1200);
    } catch(e) { toast("সমস্যা হয়েছে। ইন্টারনেট চেক করুন।", "red"); }
    finally {
      this.disabled = false;
      if (btnText) btnText.textContent = "📢 চাকরি পোস্ট করুন";
    }
  });
}

// ==========================================
// BLOOD SEARCH
// ==========================================
async function searchBlood() {
  const group      = document.getElementById("blood-group").value;
  const upazilaKey = document.getElementById("blood-area").value;
  const unionBn    = (document.getElementById("blood-union")?.value || "").trim();
  const res        = document.getElementById("blood-results");

  res.innerHTML = skeletonDonorList();

  const sheetData = await fetchGet(BLOOD_URL);
  const all = [...bloodFallback, ...sheetData];

  await new Promise(r => setTimeout(r, 500));

  const aliases = upazilaKey ? (upazilaUnions[upazilaKey]?.aliases || []) : [];
  const unionEnMap = {};
  if (upazilaKey && upazilaUnions[upazilaKey]) {
    upazilaUnions[upazilaKey].unions.forEach((bn, i) => {
      unionEnMap[bn] = (upazilaUnions[upazilaKey].aliases[i] || bn).toLowerCase();
    });
  }

  const filtered = all.filter(d => {
    const dArea = (d.area || "").toLowerCase().trim();
    const matchGroup = !group || d.group === "Any" || d.group === group;
    const matchArea  = !upazilaKey || aliases.some(a => dArea === a || dArea.includes(a) || a.includes(dArea));
    let matchUnion   = true;
    if (unionBn) {
      if (d.union) {
        matchUnion = d.union === unionBn;
      } else {
        const uEn = (unionEnMap[unionBn] || unionBn).toLowerCase();
        matchUnion = dArea === uEn || dArea.includes(uEn) || uEn.includes(dArea);
      }
    }
    return matchGroup && matchArea && matchUnion;
  });

  res.innerHTML = "";
  if (!filtered.length) {
    res.innerHTML = `<div class="no-result"><div class="nri">😔</div><p>কোনো ডোনার পাওয়া যায়নি।<br/><small>ভিন্ন গ্রুপ বা এলাকা দিয়ে চেষ্টা করুন।</small></p></div>`;
    return;
  }

  res.innerHTML = `<div style="padding:4px 20px 8px;font-size:12px;font-weight:600;color:var(--text3);">
    <span class="live-dot"></span>
    <span class="live-label">${filtered.length} জন ডোনার পাওয়া গেছে</span>
  </div>`;

  filtered.forEach((d, i) => {
    const clean    = (d.phone || "").replace(/\D/g, "");
    const hasPhone = clean.length >= 6;
    const el       = document.createElement("div");
    el.className   = "donor-card";
    el.style.animationDelay = `${i * 0.06}s`;
    el.innerHTML = `
      <div class="donor-left">
        <h4>${d.name}</h4>
        <div class="donor-tags">
          <span class="dtag blood">🩸 ${d.group}</span>
          <span class="dtag area">📍 ${d.area}</span>
          ${d.union ? `<span class="dtag type">🏘️ ${d.union}</span>` : ""}
          ${d.type  ? `<span class="dtag type">${d.type}</span>`  : ""}
        </div>
        ${hasPhone ? `<div class="donor-masked">📞 ${maskPhone(d.phone)}</div>` : ""}
      </div>
      ${hasPhone ? `<a href="tel:${clean}" class="call-btn-pill">📞 কল</a>`
                 : `<span style="font-size:12px;color:var(--text4)">সরাসরি আসুন</span>`}`;
    res.appendChild(el);
  });
}

// ── Donor Modal ──
function openModal()          { document.getElementById("donor-modal").classList.add("open"); }
function closeModalOutside(e) {
  if (e.target === document.getElementById("donor-modal"))
    document.getElementById("donor-modal").classList.remove("open");
}

function initDonorForm() {
  document.getElementById("submit-donor-btn").addEventListener("click", async function() {
    const name  = document.getElementById("donor-name").value.trim();
    const group = document.getElementById("new-donor-group").value;
    const area  = document.getElementById("new-donor-area").value;
    const union = document.getElementById("new-donor-union")?.value || "";
    const phone = document.getElementById("donor-phone").value.trim();

    if (!name || !group || !area || !phone) { toast("সব তথ্য দিন!", "red"); return; }
    if (!/^01[0-9]{9}$/.test(phone))        { toast("সঠিক মোবাইল নম্বর দিন!", "red"); return; }

    this.disabled = true;
    document.getElementById("donor-btn-text").textContent = "⏳ সেভ হচ্ছে...";
    try {
      await fetchPost(BLOOD_URL, { name, group, area, union, phone: "'" + phone });
      toast("✅ ডোনার হিসেবে যুক্ত হয়েছেন!", "green");
      closeModalOutside({ target: document.getElementById("donor-modal") });
      ["donor-name","donor-phone"].forEach(id => document.getElementById(id).value = "");
      document.getElementById("new-donor-group").value = "";
      document.getElementById("new-donor-area").value  = "";
      const nu = document.getElementById("new-donor-union");
      const nw = document.getElementById("new-union-wrap");
      if (nu) nu.value = "";
      if (nw) nw.style.display = "none";
    } catch(e) { toast("সমস্যা হয়েছে। ইন্টারনেট চেক করুন।", "red"); }
    finally {
      this.disabled = false;
      document.getElementById("donor-btn-text").textContent = "❤️ ডোনার লিস্টে যুক্ত করুন";
    }
  });
}

// ==========================================
// MEDICINE FINDER
// ==========================================
function findMed() {
  const id  = document.getElementById("medicine-select").value;
  const div = document.getElementById("med-result");
  if (!id) { div.classList.remove("show"); return; }
  const m = medicineDB[id];
  div.innerHTML = `✅ <strong>${m.name}</strong> — ${m.shop}<br/><small>📍 ${m.area}</small> <a href="${m.map}" target="_blank" class="a-map" style="margin-top:6px">🗺️ ম্যাপ</a>`;
  div.classList.add("show");
}

// ==========================================
// TOAST
// ==========================================
function toast(msg, color = "green") {
  const t = document.getElementById("toast");
  t.textContent      = msg;
  t.style.background = color === "green" ? "var(--green)" : "var(--red)";
  t.style.opacity    = "1";
  t.style.transform  = "translateX(-50%) translateY(0) scale(1)";
  setTimeout(() => {
    t.style.opacity   = "0";
    t.style.transform = "translateX(-50%) translateY(20px) scale(0.95)";
  }, 3000);
}

// ==========================================
// OFFLINE / PWA
// ==========================================
function checkOnline() {
  document.getElementById("offline-notice").classList.toggle("hidden", navigator.onLine);
}
window.addEventListener("online",  checkOnline);
window.addEventListener("offline", checkOnline);
checkOnline();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}

let deferredPrompt = null;
window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById("install-banner").classList.remove("hidden");
});
document.getElementById("install-btn").addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  document.getElementById("install-banner").classList.add("hidden");
  toast("✅ অ্যাপ ইন্সটল হচ্ছে!", "green");
});
document.getElementById("install-close").addEventListener("click", () => {
  document.getElementById("install-banner").classList.add("hidden");
});

// ── Pharmacy Modal Toggle ──
function openPharmacyModal() {
  document.getElementById("pharmacy-modal").classList.add("open");
}
function closePharmacyModalOutside(e) {
  if (e.target === document.getElementById("pharmacy-modal")) {
    document.getElementById("pharmacy-modal").classList.remove("open");
  }
}

// ── Fetch and Render Registered Pharmacies ──
async function renderPharmacies() {
  const container = document.getElementById("pharmacy-list-container");
  if (!container) return;

  container.innerHTML = `<div style="text-align:center; padding:20px; color:var(--text3);">🏪 ফার্মেসি লোড হচ্ছে...</div>`;

  try {
    const pharmacies = await fetchGet(PHARMACY_URL);

    if (!pharmacies || pharmacies.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding:20px; color:var(--text3);">🛑 কোনো ফার্মেসি এখনো যুক্ত হয়নি।</div>`;
      return;
    }

    let html = "";
    pharmacies.forEach(ph => {
      const name     = String(ph["Name"]     || ph["name"]     || "নামহীন ফার্মেসি");
      const phone    = String(ph["Phone"]    || ph["phone"]    || "");
      const whatsapp = String(ph["WhatsApp"] || ph["whatsapp"] || phone);
      const area     = String(ph["Area"]     || ph["area"]     || "");
      const mapLink  = String(ph["MapLink"]  || ph["map"]      || "#");
      const details  = String(ph["Details"]  || ph["details"]  || "");

      const waNumber = whatsapp.startsWith("88") ? whatsapp : "88" + whatsapp;
      const waMessage = encodeURIComponent("আসসালামু আলাইকুম, আমি LifeLine অ্যাপ থেকে যোগাযোগ করছি। আপনাদের কাছে কি এই ঔষধটি এভেইলেবল আছে?");
      const whatsappLink = `https://wa.me/${waNumber}?text=${waMessage}`;

      html += `
        <div class="card" style="background:var(--card); border-radius:16px; padding:16px; margin-bottom:12px; box-shadow:0 4px 12px rgba(0,0,0,0.03); border:1px solid var(--border);">
          <h3 style="font-size:16px; font-weight:700; color:var(--text); margin:0 0 4px 0;">🏪 ${name}</h3>
          <p style="font-size:12px; color:var(--text3); margin:0 0 8px 0;">📍 ${area}</p>
          ${details ? `<p style="font-size:12px; color:var(--text2); background:var(--bg); padding:6px 10px; border-radius:8px; margin:0 0 12px 0;">📝 ${details}</p>` : ""}
          <div style="display:flex; gap:8px; margin-top:8px;">
            ${phone ? `<a href="tel:${phone}" style="flex:1; text-align:center; background:var(--blue-soft); color:var(--blue); padding:8px; border-radius:10px; font-size:12px; font-weight:700; text-decoration:none;">📞 কল করুন</a>` : ""}
            ${whatsapp ? `<a href="${whatsappLink}" target="_blank" style="flex:1; text-align:center; background:#E3F7EA; color:#25D366; padding:8px; border-radius:10px; font-size:12px; font-weight:700; text-decoration:none; display:flex; align-items:center; justify-content:center; gap:4px;">💬 হোয়াটসঅ্যাপ</a>` : ""}
            ${mapLink && mapLink !== "#" ? `<a href="${mapLink}" target="_blank" style="flex:1; text-align:center; background:var(--orange-soft); color:var(--orange); padding:8px; border-radius:10px; font-size:12px; font-weight:700; text-decoration:none;">📍 ম্যাপ</a>` : ""}
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  } catch (error) {
    console.error("Pharmacy load error:", error);
    container.innerHTML = `<div style="text-align:center; padding:20px; color:var(--text3);">🛑 কোনো ফার্মেসি এখনো যুক্ত হয়নি।</div>`;
  }
}

// ── Handle Pharmacy Form Submission ──
function initPharmacyForm() {
  const btn = document.getElementById("submit-pharmacy-btn");
  if (!btn) return;

  btn.addEventListener("click", async function() {
    const name     = document.getElementById("ph-name").value.trim();
    const phone    = document.getElementById("ph-phone").value.trim();
    const whatsapp = document.getElementById("ph-whatsapp").value.trim();
    const area     = document.getElementById("ph-area").value.trim();
    const map      = document.getElementById("ph-map").value.trim();
    const details  = document.getElementById("ph-details").value.trim();

    if (!name || !phone || !whatsapp || !area || !map) {
      toast("⚠️ অনুগ্রহ করে সব বাধ্যতামূলক তথ্য দিন!", "red");
      return;
    }
    if (!/^01[0-9]{9}$/.test(phone) || !/^01[0-9]{9}$/.test(whatsapp)) {
      toast("❌ সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন!", "red");
      return;
    }

    this.disabled = true;
    document.getElementById("ph-btn-text").textContent = "⏳ প্রোফাইল তৈরি হচ্ছে...";

    try {
      await fetch(PHARMACY_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ name, phone, whatsapp, area, map, details })
      });

      toast("✅ ফার্মেসি প্রোফাইল সফলভাবে লাইভ হয়েছে!", "green");
      document.getElementById("pharmacy-modal").classList.remove("open");

      ["ph-name", "ph-phone", "ph-whatsapp", "ph-area", "ph-map", "ph-details"].forEach(id => {
        document.getElementById(id).value = "";
      });

      setTimeout(() => renderPharmacies(), 2000);

    } catch (e) {
      console.error("Pharmacy submit error:", e);
      toast("❌ সমস্যা হয়েছে। আবার চেষ্টা করুন।", "red");
    } finally {
      this.disabled = false;
      document.getElementById("ph-btn-text").textContent = "🚀 প্রোফাইল লাইভ করুন";
    }
  });
}

// ==========================================
// INIT
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  renderEmergency();
  renderHospitals();
  renderFood();
  renderJobs();
  renderPharmacies();
  initDonorForm();
  initJobForm();
  initEmergencyAdminForm();
  initFoodForm();
  initPharmacyForm();
});
