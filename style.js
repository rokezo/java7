const bookList = document.getElementById("bookList");

let selectedBooks = [];

bookList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    const bookItem = event.target;
    const bookIndex = Array.prototype.indexOf.call(bookList.children, bookItem);

    bookItem.classList.toggle('selected');

    const isSelected = selectedBooks.includes(bookIndex);

    if (event.ctrlKey) {
      if (isSelected) {
        selectedBooks = selectedBooks.filter((index) => index !== bookIndex);
      } else {
        selectedBooks.push(bookIndex);
      }
    } else {
      selectedBooks = [];
      selectedBooks.push(bookIndex);
    }

    if (event.shiftKey) {
      const previousIndex = selectedBooks[selectedBooks.length - 1];
      const startIndex = Math.min(previousIndex, bookIndex);
      const endIndex = Math.max(previousIndex, bookIndex);

      for (let i = startIndex; i <= endIndex; i++) {
        bookList.children[i].classList.add('selected');
        selectedBooks.push(i);
      }
    }
  }
});