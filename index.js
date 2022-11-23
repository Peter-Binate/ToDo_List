let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

// ACTIVATION DU BOUTON AJOUTER SI INPUT EST REMPLIE:
// Lorsqu'on écrit une nouvelle tâche on active alors le bouton ajouter
input.addEventListener('keyup', () => {
    // Si l'input est vide (car on a rien écrit):
    if (input.value.trim() != 0) { // .trim() supprime les espace dans le string
        addBtn.classList.add('active');
    } else{
        addBtn.classList.remove('active');
    }
})

// AJOUT DE NOUVELLE TACHE DANS LA LISTE:
addBtn.addEventListener('click', () => {
    if (input.value.trim() != 0) {
        let newItem = document.createElement("div");
        newItem.classList.add('item');
        newItem.innerHTML = `<p>${input.value}</p>
                            <div class="item-btn">
                                <i class="fa-solid fa-pen-to-square"></i>
                                <i class="fa-solid fa-trash"></i>
                            </div>`;
        tasks.appendChild(newItem);
        input.value = '';                     
    } else{
        alert('Veuillez entrer une nouvelle tâche s\'il vous plait')
    }
})
// VALIDATION D'UNE TACHE:
tasks.addEventListener('click', (event) => {
    if (event.target.classList.contains('fa-pen-to-square')) {
        event.target.parentElement.parentElement.classList.toggle('completed');
        console.log(event.target.parentElement.parentElement.input.value);
    }
})

// SUPRESSION D'ITEM DANS LA LISTE:
tasks.addEventListener('click', (event) => {
    if (event.target.classList.contains('fa-trash')) {
        event.target.parentElement.parentElement.remove();
    }
})