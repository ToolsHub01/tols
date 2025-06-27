// List of all tools (add more as needed)
const tools = [
  { name: "Image to PNG Converter", category: "Image Tools", file: "tools/image-to-png.html" },
  { name: "Image to JPG Converter", category: "Image Tools", file: "tools/image-to-jpg.html" },
  { name: "Image Resizer", category: "Image Tools", file: "tools/image-resizer.html" },
  { name: "Meta Tag Generator", category: "SEO Tools", file: "tools/meta-tag-generator.html" },
  { name: "Word Counter", category: "Text Tools", file: "tools/word-counter.html" },
  { name: "JSON Formatter", category: "Developer Tools", file: "tools/json-formatter.html" },
  { name: "Percentage Calculator", category: "Math & Calculators", file: "tools/percentage-calculator.html" },
  { name: "Length Converter", category: "Unit Converters", file: "tools/length-converter.html" },
  { name: "MD5 Hash Generator", category: "Security & Encryption Tools", file: "tools/md5-hash-generator.html" },
  { name: "YouTube Thumbnail Downloader", category: "Social Media Tools", file: "tools/youtube-thumbnail-downloader.html" },
  { name: "Barcode Generator", category: "Miscellaneous Tools", file: "tools/barcode-generator.html" },
  // ...add the rest of the 100+ tools here as you expand
];

function renderTools() {
  const categories = {};
  tools.forEach(tool => {
    if (!categories[tool.category]) categories[tool.category] = [];
    categories[tool.category].push(tool);
  });
  for (const [cat, toolsArr] of Object.entries(categories)) {
    const row = document.getElementById(cat.toLowerCase().replace(/\s|&/g, '-') + '-tools');
    if (row) {
      row.innerHTML = toolsArr.map(tool => `
        <div class="col-md-3 col-sm-6 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">${tool.name}</h5>
              <a href="${tool.file}" class="btn btn-primary w-100">Open</a>
            </div>
          </div>
        </div>
      `).join('');
    }
  }
}

function setupSearch() {
  const search = document.getElementById('tool-search');
  if (!search) return;
  search.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    document.querySelectorAll('.card-title').forEach(card => {
      const match = card.textContent.toLowerCase().includes(query);
      card.closest('.col-md-3, .col-sm-6').style.display = match ? '' : 'none';
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  renderTools();
  setupSearch();
}); 