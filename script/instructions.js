function getInstructionsFromDB(recipe_id) {
    fetch('http:107.171.153.230:8080/recipe_book/services/recipe_handler/instructions/' + recipe_id, {
        method: "GET", headers: {
            'Accept': 'application/json',
            'Connection': 'close'
        }
    })
        .then(response => response.json())
        .then(function (json) {
            for (let i = 0; i < json['instructions'].length; i++) {

                createInstructionItem(json['instructions'][i], recipe_id);

            }

        }).catch(err => console.log(err))
}

function createInstructionItem(instruction, recipe_id) {
    const instructions_results = document.querySelector('#instruction_items_' + recipe_id);
    const div = document.createElement("div");
    div.className = "list-group-item";

    div.innerHTML = '<li class="list-group-item">' + instruction + '</li>';

    instructions_results.append(div);
}