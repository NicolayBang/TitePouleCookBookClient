function getIngredientsFromDB(recipe_id) {
    fetch('http:107.171.153.230:8080/recipe_book/services/recipe_handler/ingredients/' + recipe_id, {
        method: "GET", headers: {
            'Accept': 'application/json',
            'Connection': 'close'
        }
    })
        .then(response => response.json())
        .then(function (json) {
            // const json_data = json['ingredients'][0];
            // const test = null;

            for (let i = 0; i < json['ingredients'].length; i++) {

                createIngredientItem(json['ingredients'][i], recipe_id);

            }

        }).catch(err => console.log(err))
}

function createIngredientItem(ingredient, recipe_id) {
    const ingredients_results = document.querySelector('#ingredient_items_' + recipe_id);
    const div = document.createElement("div");
    div.className = "list-group-item";

    div.innerHTML = '<li class="list-group-item">' + ingredient + '</li>';

    ingredients_results.append(div);
}

