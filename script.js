// ====== Edit these when you have the details ======
// WhatsApp number in international format, digits only (e.g. "971501234567").
// Leave empty to hide the WhatsApp button.
const WHATSAPP = "";
// ==================================================

const PRODUCTS = [
  // Threads
  { name: "Overlock Thread", cat: "Threads", img: "overlock-thread" },
  { name: "Jeans Thread", cat: "Threads", img: "jeans-thread" },
  { name: "Sewing Thread", cat: "Threads", img: "thread" },
  // Zippers
  { name: "YKK Zip", cat: "Zippers", img: "ykk-zip" },
  { name: "Openable Zipper", cat: "Zippers", img: "openable-zipper" },
  { name: "Concealed Zipper", cat: "Zippers", img: "concealed-zipper" },
  // Buttons & Fasteners
  { name: "Pant Button", cat: "Buttons & Fasteners", img: "pant-button" },
  { name: "Denim Button", cat: "Buttons & Fasteners", img: "denim-button" },
  { name: "Cover Button", cat: "Buttons & Fasteners", img: "cover-button" },
  { name: "Press Button (Kohinoor)", cat: "Buttons & Fasteners", img: "press-button" },
  { name: "Dress Hook & Eye", cat: "Buttons & Fasteners", img: "dress-hook-eye" },
  { name: "Trouser Hook", cat: "Buttons & Fasteners", img: "trouser-hook" },
  { name: "Velcro", cat: "Buttons & Fasteners", img: "velcro" },
  // Elastic, Lining & Interlining
  { name: "Elastic", cat: "Elastic & Linings", img: "elastic" },
  { name: "Lining Material", cat: "Elastic & Linings", img: "lining-material" },
  { name: "Canvas Hung Roll", cat: "Elastic & Linings", img: "canvas-hung-roll" },
  { name: "Shirt Patti Roll", cat: "Elastic & Linings", img: "shirt-patti-roll" },
  { name: "Shirt Collar Bone", cat: "Elastic & Linings", img: "shirt-collar-bone" },
  { name: "Blouse Cup", cat: "Elastic & Linings", img: "blouse-cup" },
  // Tools & Machine Parts
  { name: "Tailoring Scissors", cat: "Tools & Parts", img: "tailoring-scissors" },
  { name: "Thread Cutter", cat: "Tools & Parts", img: "thread-cutter" },
  { name: "Seam Ripper", cat: "Tools & Parts", img: "seam-ripper" },
  { name: "Measuring Tape", cat: "Tools & Parts", img: "measuring-tape" },
  { name: "Sewing Needles", cat: "Tools & Parts", img: "sewing-needles" },
  { name: "Household Needle Set", cat: "Tools & Parts", img: "needle-set" },
  { name: "Glue Gun", cat: "Tools & Parts", img: "glue-gun" },
  { name: "Bobbin Case", cat: "Tools & Parts", img: "bobbin-case" },
  { name: "Machine Belt", cat: "Tools & Parts", img: "machine-belt" },
  { name: "Tag Gun", cat: "Tools & Parts", img: "tag-gun" },
  { name: "Tag Pin", cat: "Tools & Parts", img: "tag-pin" },
];

const cats = ["All", ...new Set(PRODUCTS.map(p => p.cat))];
const filters = document.getElementById("filters");
const grid = document.getElementById("grid");

function render(cat) {
  grid.innerHTML = "";
  PRODUCTS.filter(p => cat === "All" || p.cat === cat).forEach(p => {
    const el = document.createElement("article");
    el.className = "item";
    el.innerHTML = `<img loading="lazy" src="images/${p.img}.jpg" alt="${p.name}">
      <div class="info"><small>${p.cat}</small><h3>${p.name}</h3></div>`;
    grid.appendChild(el);
  });
  filters.querySelectorAll("button").forEach(b => b.classList.toggle("active", b.dataset.cat === cat));
}

cats.forEach(c => {
  const b = document.createElement("button");
  b.textContent = c;
  b.dataset.cat = c;
  b.addEventListener("click", () => render(c));
  filters.appendChild(b);
});
render("All");

// WhatsApp
const waCard = document.querySelector("[data-wa-card]");
if (WHATSAPP) {
  document.querySelectorAll("[data-wa]").forEach(a => {
    a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello Thread House Trading, I'd like to enquire about...")}`;
  });
} else if (waCard) {
  waCard.hidden = true;
}

document.getElementById("year").textContent = new Date().getFullYear();
