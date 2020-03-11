// ******** Classes *********
var CodeStackImage = /** @class */ (function () {
    // Custom Classes with constructors that are type strict
    function CodeStackImage(width, src, alt, id) {
        this.width = width;
        this.src = src;
        this.alt = alt;
        this.id = id;
    }
    CodeStackImage.prototype.toImgEle = function () {
        var imgEle = document.createElement('img');
        imgEle.src = this.src;
        imgEle.alt = this.alt;
        imgEle.width = this.width;
        imgEle.id = this.id;
        return imgEle;
    };
    return CodeStackImage;
}());
var CheckboxBuilder = /** @class */ (function () {
    function CheckboxBuilder(title) {
        this.title = title;
    }
    CheckboxBuilder.prototype.createTextbox = function (isFinished) {
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.checked = isFinished;
        checkbox.classList.add('checkbox');
        checkbox.title = this.title;
        return checkbox;
    };
    CheckboxBuilder.prototype.addEvent = function (checkbox, callback) {
        checkbox.addEventListener('change', callback);
    };
    return CheckboxBuilder;
}());
// ******** Functions *********
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
    var id = Math.random();
    newListItem.id = id.toString();
    var trashButton = createTrashButton(id);
    // special syntax for including variable in strings
    newListItem.innerHTML = "NOTE: " + note.text + " <br> DATE: " + note.date + " <br> PRIORITY: " + note.priority + " <br>";
    newListItem.appendChild(trashButton);
    // Type strict return values
    return newListItem;
}
function createTrashButton(id) {
    var label = document.createElement('label');
    label.htmlFor = 'trash';
    label.innerHTML = 'DELETE ';
    label.classList.add('delete-btn');
    label.addEventListener('click', function () { clickDelete(id); });
    // Instantiate custom classes
    var img = new CodeStackImage(20, './assets/images/trash-icon.png', 'Trash', 'trash');
    label.appendChild(img.toImgEle());
    return label;
}
function clickDelete(id) {
    var listEle = document.getElementById("" + id);
    var notesList = document.getElementById('notes-list');
    notesList.removeChild(listEle);
}
function addTodo() {
    // Get div element to display list
    var divTodoList = document.getElementById('todo-list');
    // Get input element
    var noteEntryEle = document.getElementById('todo');
    // Referencing custom model for todo
    var todo = {
        text: noteEntryEle.value,
        date: new Date(),
        isFinished: false
    };
    // add new todo element as child to list
    divTodoList.appendChild(createTodoItem(todo));
}
function createTodoItem(todo) {
    // implicit types
    var newTodoItem = document.createElement('div');
    var id = Math.random();
    newTodoItem.id = id.toString();
    newTodoItem.classList.add('todoListItem');
    newTodoItem.innerHTML = "TODO: " + todo.text + " <br> DATE ENTERED: " + todo.date;
    var checkboxBuilder = new CheckboxBuilder('Mark As Done');
    var checkbox = checkboxBuilder.createTextbox(todo.isFinished);
    checkboxBuilder.addEvent(checkbox, function () {
        addDeleteButton(id);
    });
    newTodoItem.prepend(checkbox);
    // Type strict return values
    return newTodoItem;
}
function removeTodoItem(id) {
    var divTodoList = document.getElementById('todo-list');
    var todoItem = document.getElementById(id.toString());
    divTodoList.removeChild(todoItem);
}
function addDeleteButton(id) {
    var todoItem = document.getElementById(id.toString());
    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'REMOVE ITEM';
    deleteButton.addEventListener('click', function () {
        removeTodoItem(id);
    });
    todoItem.append(deleteButton);
}
