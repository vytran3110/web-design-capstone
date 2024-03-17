window.addEventListener('DOMContentLoaded', function(){
    var images = document.querySelectorAll('#recipes img');

    images.forEach(function(image, index){
        image.setAttribute('tabindex', index+1);
    });
});

const columns = document.querySelectorAll('.droppable');
const recipes = document.getElementById('recipes').querySelectorAll('img');

recipes.forEach(recipe => {
    recipe.setAttribute('draggable', 'true');
    recipe.addEventListener('dragstart', dragStart);
});

columns.forEach(column => {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('drop', drop);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.alt);
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const recipeAlt = e.dataTransfer.getData('text/plain');
    const recipe = document.querySelector(`img[alt="${recipeAlt}"]`);
    if (recipe) {
        this.appendChild(recipe);
    }
}