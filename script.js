const form = document.querySelector("form");
const inputUser = document.getElementById("input-user");
const listGroup = document.querySelector(".list-group");
let list_item = [];

//local storage
if(localStorage.getItem("TO DO ITEMS")){
    const itemLocalStorage = JSON.parse(localStorage.getItem("TO DO ITEMS"));
    itemLocalStorage.forEach(function(itemTodo){
        listGroup.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <h3>${itemTodo}</h3>
            <span class="fs-3"><i class="bi bi-x-octagon-fill text-danger" id="remove"></i></span>
        </li>`;

        list_item.push(itemTodo);
    });
}

function manageLocalStorage(action, item){
    switch(action){
        case 'TAMBAH':
            list_item.push(item);
            break;
        case 'HAPUS':
            list_item = list_item.filter(function(todoItem){
               return todoItem != item
            });
            break;
    }

    localStorage.setItem("TO DO ITEMS", JSON.stringify(list_item));
}


//Todo List
form.addEventListener("submit",function(event){

    listGroup.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <h3>${inputUser.value}</h3>
                <span class="fs-3"><i class="bi bi-x-octagon-fill text-danger" id="remove"></i></span>
            </li>`;
    
    //Menambahkan Item baru ke local storage
    manageLocalStorage("TAMBAH", inputUser.value);

    inputUser.value="";
    event.preventDefault();
});

listGroup.addEventListener("click", function (event){
    if (event.target.id == "remove") {
        event.target.parentElement.parentElement.remove();
        manageLocalStorage("HAPUS", event.target.parentElement.parentElement.texContent.trim());
    }
});