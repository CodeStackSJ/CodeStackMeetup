var CodeStackImage = /** @class */ (function () {
    // Custom Classes with constructors that are type strict
    function CodeStackImage(width, src, alt) {
        this.width = width;
        this.src = src;
        this.alt = alt;
    }
    CodeStackImage.prototype.toImgEle = function () {
        var imgEle = document.createElement('img');
        imgEle.src = this.src;
        imgEle.alt = this.alt;
        imgEle.width = this.width;
        return imgEle;
    };
    return CodeStackImage;
}());
function addNote() {
    // Built in element types 
    var unorderedList = document.getElementById('notes-list');
    // Type casting elements by id
    var noteEntryEle = document.getElementById('note');
    // Referencing custom models
    var note = {
        text: noteEntryEle.value,
        date: new Date(),
        priority: 1
    };
    // Type strict params
    unorderedList.appendChild(createNewNoteItem(note));
}
function createNewNoteItem(note) {
    // implicit types
    var newListItem = document.createElement('li');
    var trashButton = createTrashButton();
    // special syntax for including variable in strings
    newListItem.innerHTML = "NOTE: " + note.text + " <br> DATE: " + note.date + " <br> PRIORITY: " + note.priority + "<br>";
    newListItem.appendChild(trashButton);
    // Type strict return values
    return newListItem;
}
function createTrashButton() {
    var label = document.createElement('label');
    label.htmlFor = 'trash';
    label.innerHTML = 'DELETE (Make Me Work)';
    label.classList.add('delete-btn');
    // Instantiate custom classes
    var img = new CodeStackImage(20, './assets/images/trash-icon.png', 'Trash');
    label.appendChild(img.toImgEle());
    return label;
}
