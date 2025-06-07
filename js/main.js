function openModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) {
    overlay.style.display = 'flex';
  }
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) {
    overlay.style.display = 'none';
  }
}

// Event listeners
window.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openModalBtn');
  if (openBtn) {
    openBtn.addEventListener('click', openModal);
  }

  const closeBtn = document.getElementById('modalClose');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
});
