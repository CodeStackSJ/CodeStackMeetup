interface CodeStackNote {
    // Custom Models for Objects that are type strict
    text: string;
    date: Date;
    priority: number;
}

class CodeStackImage {
    // Custom Classes with constructors that are type strict
    constructor(
        public width: number, 
        public src: string,
        public alt: string
    ){}

    public toImgEle(): HTMLImageElement{
        let imgEle: HTMLImageElement = document.createElement('img');
        imgEle.src = this.src;
        imgEle.alt = this.alt;
        imgEle.width = this.width;
        
        return imgEle;
    }
}

function addNote() {
    // Built in element types 
    const unorderedList: HTMLUListElement = <HTMLUListElement>document.getElementById('notes-list');
    // Type casting elements by id
    const noteEntryEle = <HTMLInputElement>document.getElementById('note');
    
    // Referencing custom models
    let note: CodeStackNote = {
        text: noteEntryEle.value,
        date: new Date(),
        priority: 1
    }

    // Type strict params
    unorderedList.appendChild(createNewNoteItem(note));
}

function createNewNoteItem(note: CodeStackNote): HTMLLIElement {

    // implicit types
    let newListItem = document.createElement('li');
    let trashButton: HTMLElement = createTrashButton();

    // special syntax for including variable in strings
    newListItem.innerHTML = `NOTE: ${note.text} <br> DATE: ${note.date} <br> PRIORITY: ${note.priority}<br>`;
    newListItem.appendChild(trashButton);

    // Type strict return values
    return newListItem;
}

function createTrashButton(): HTMLElement {
    let label = document.createElement('label');
    label.htmlFor = 'trash';
    label.innerHTML = 'DELETE (Make Me Work)';
    label.classList.add('delete-btn');

    // Instantiate custom classes
    let img: CodeStackImage = new CodeStackImage(20, './assets/images/trash-icon.png',  'Trash');
    label.appendChild(img.toImgEle());
    return label;
}
