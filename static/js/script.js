const items = document.querySelectorAll('.item');
const columns = document.querySelectorAll('.column');
let dragItem = null;

// Initialize Sortable for each column
columns.forEach((column) => {
    new Sortable(column, {
        group: "shared",
        animation: 150,
        ghostClass: "blue-background-class"
    });
});

// Add drag event listeners to items
items.forEach(item => {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
});

// Drag event handlers
function handleDragStart() {
    dragItem = this;
    setTimeout(() => this.classList.add('invisible'), 0);
}

function handleDragEnd() {
    this.classList.remove('invisible');
    dragItem = null;
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDragEnter() {
    // Handle drag enter logic if needed
}

function handleDragLeave() {
    // Handle drag leave logic if needed
}

function handleDrop() {
    if (dragItem) {
        this.appendChild(dragItem);
    }
}