function includeHTML() {
  document.querySelectorAll('[data-include]').forEach(async el => {
    const file = el.getAttribute('data-include');
    const resp = await fetch(file);
    if (resp.ok) el.innerHTML = await resp.text();
  });
}
window.addEventListener('DOMContentLoaded', includeHTML); 