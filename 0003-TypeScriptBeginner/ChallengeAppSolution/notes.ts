
// ******** Models *********
interface CodeStackNote {
    // Custom Models for Objects that are type strict
    text: string;
    date: Date;
    priority: number;
}

interface CodeStackTodo {
    // Custom Model for todo item
    text: string;
    date: Date;
    isFinished: boolean;
}

// ******** Classes *********
class CodeStackImage {
    // Custom Classes with constructors that are type strict
    constructor(
        public width: number, 
        public src: string,
        public alt: string,
        public id: string
    ){}

    public toImgEle(): HTMLImageElement{
        let imgEle: HTMLImageElement = document.createElement('img');
        imgEle.src = this.src;
        imgEle.alt = this.alt;
        imgEle.width = this.width;
        imgEle.id = this.id;
        
        return imgEle;
    }
}

class CheckboxBuilder {
    constructor(
        public title: string
    ){}

    public createTextbox(isFinished: boolean): HTMLInputElement {
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.checked = isFinished;
        checkbox.classList.add('checkbox');
        checkbox.title = this.title;
        return checkbox;
    }

    public addEvent(checkbox: HTMLInputElement, callback: () => void ) {
        checkbox.addEventListener('change', callback);
    }
}

// ******** Functions *********
function addNote(): void {
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
    const id = Math.random();
    newListItem.id = id.toString();
    let trashButton: HTMLElement = createTrashButton(id);

    // special syntax for including variable in strings
    newListItem.innerHTML = `NOTE: ${note.text} <br> DATE: ${note.date} <br> PRIORITY: ${note.priority} <br>`;
    newListItem.appendChild(trashButton);
    // Type strict return values
    return newListItem;
}

function createTrashButton(id: number): HTMLElement {
    let label = document.createElement('label');
    label.htmlFor = 'trash';
    label.innerHTML = 'DELETE ';
    label.classList.add('delete-btn');

    label.addEventListener('click', () => { clickDelete(id) });

    // Instantiate custom classes
    let img: CodeStackImage = new CodeStackImage(20, './assets/images/trash-icon.png',  'Trash', 'trash');
    label.appendChild(img.toImgEle());
    return label;
}

function clickDelete(id: number): void {
    let listEle: HTMLLIElement = <HTMLLIElement>document.getElementById(`${id}`);
    let notesList: HTMLUListElement = <HTMLUListElement>document.getElementById('notes-list');
    notesList.removeChild(listEle);
}

function addTodo(): void {
    // Get div element to display list
    const divTodoList: HTMLDivElement = <HTMLDivElement>document.getElementById('todo-list');
    // Get input element
    const noteEntryEle = <HTMLInputElement>document.getElementById('todo');
    
    // Referencing custom model for todo
    let todo: CodeStackTodo = {
        text: noteEntryEle.value,
        date: new Date(),
        isFinished: false
    }

    // add new todo element as child to list
    divTodoList.appendChild(createTodoItem(todo));
}

function createTodoItem(todo: CodeStackTodo): HTMLDivElement {
    // implicit types
    let newTodoItem = document.createElement('div');
    const id = Math.random();
    newTodoItem.id = id.toString();
    newTodoItem.classList.add('todoListItem');

    newTodoItem.innerHTML = `TODO: ${todo.text} <br> DATE ENTERED: ${todo.date}`;

    let checkboxBuilder = new CheckboxBuilder('Mark As Done');
    let checkbox = checkboxBuilder.createTextbox(todo.isFinished);
    checkboxBuilder.addEvent(checkbox, () => {
        addDeleteButton(id);
    })

    newTodoItem.prepend(checkbox);

    // Type strict return values
    return newTodoItem;
}

function removeTodoItem(id: number): void{
    let divTodoList = <HTMLDivElement>document.getElementById('todo-list');
    let todoItem = <HTMLDivElement>document.getElementById(id.toString());
    divTodoList.removeChild(todoItem);
}

function addDeleteButton(id: number): void {
    let todoItem = <HTMLDivElement>document.getElementById(id.toString());
    let deleteButton =  document.createElement('button');
    deleteButton.innerText = 'REMOVE ITEM';
    deleteButton.addEventListener('click', () => {
        removeTodoItem(id);
    });
    todoItem.append(deleteButton);
}

