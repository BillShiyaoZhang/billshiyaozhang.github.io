// Static translated URLs work without JavaScript. Keep the current section or
// publication filter when the visitor uses the language switch.
(() => {
  const link = document.getElementById("language-switch");
  if (!link) return;
  const destination = link.getAttribute("href");
  const updateLink = () => {
    const url = new URL(destination, window.location.href);
    url.search = window.location.search;
    url.hash = window.location.hash;
    link.href = url.pathname + url.search + url.hash;
  };
  updateLink();
  window.addEventListener("hashchange", updateLink);
})();
