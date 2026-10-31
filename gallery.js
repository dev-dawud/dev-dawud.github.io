const imageViewer = document.getElementById('image-viewer');
const largeNote = document.getElementById('large-note');
const imageTitle = document.getElementById('image-title');
const noteLinks = document.querySelectorAll('.notes-gallery a');
let selectedNote;

// Das Bild öffnen, ohne den Blog zu verlassen.
for (const link of noteLinks) {
  link.addEventListener('click', function (event) {
    // Strg-Klick und ähnliche Browserfunktionen weiter erlauben.
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();
    selectedNote = link;
    largeNote.src = link.href;
    largeNote.alt = link.querySelector('img').alt;
    imageTitle.textContent = link.textContent.trim();
    imageViewer.showModal();
    document.body.classList.add('image-open');
  });
}

// Ein Klick neben das Bild schließt die Ansicht ebenfalls.
imageViewer.addEventListener('click', function (event) {
  if (event.target === imageViewer) {
    imageViewer.close();
  }
});

// Escape und der Close-Button werden vom HTML-Dialog übernommen.
imageViewer.addEventListener('close', function () {
  document.body.classList.remove('image-open');
  selectedNote.focus({ preventScroll: true });
});
