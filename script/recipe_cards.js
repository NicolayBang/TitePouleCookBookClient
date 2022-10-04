let cards = [];
let i = 0;

function getRecipeTagsFromDB(recipe_id) {
    fetch('https://tite-poule-recipe-book.herokuapp.com/recipe_book/services/recipe_handler/tags/' + recipe_id, {
        method: "GET", headers: {
            'Accept': 'application/json',
            'Connection': 'close'
        }
    })
        .then(response => response.json())
        .then(function (json) {

            console.log(json);

            for (let i = 0; i < json['tags'].length; i++) {
                createTagItem(json['tags'][i], recipe_id);
            }

        }).catch(err => console.log(err))
    // return tags_string;
}

function createTagItem(tag, recipe_id) {
    const tags_results = document.querySelector('#tags_' + recipe_id);
    const span = document.createElement("span");
    span.className = "badge bg-primary";
    span.innerHTML = ' <div className="badge bg-primary">#' + tag + '</div> ';
    tags_results.append(span);
}

function getFeaturedRecipesFromDB() {

    fetch('https://tite-poule-recipe-book.herokuapp.com/recipe_book/services/recipe_handler/recipes', {
        method: "GET", headers: {
            'Accept': 'application/json',
            'Connection': 'close',
            //     'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            //  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Origin' : '*'
            // 'Access-Control-Allow-Headers': 'Content-Type, Accept, X-Requested-With, remember-me'

        }
    })
        .then(response => response.json())
        .then(function (json) {
            const json_data = json[0];

            for (let i = 0; i < json.length; i++) {

                sendCard(json[i]);

            }

        }).catch(err => console.log(err))
}

function getRecipeFromDB(input) {

    console.log(input);

    fetch('https://tite-poule-recipe-book.herokuapp.com/recipe_book/services/recipe_handler/recipes' + input, {
        method: "GET", headers: {
            'Accept': 'application/json',
            'Connection': 'close'
        }
    })
        .then(response => response.json())
        .then(function (json) {
            const json_data = json[0];

            for (let i = 0; i < json.length; i++) {

                sendCard(json[i]);

            }

        }).catch(err => console.log(err))
}


function sendCard(card) {
    if (card == null) {
        alert("No results found")
        return
    }

    try {

        cards[i] = card;

        const name = card ['recipe'][0].name
        const posted_by = " " + card ['recipe'][0].posted_by;//THIS IS HOW TO ACCESS THE JSON
        const creation_date = " " + card ['recipe'][0].creation_date;
        const difficulty = " " + card['recipe'][0].difficulty;
        const cook_time = " " + card['recipe'][0].cook_time
        const servings = " " + card['recipe'][0].servings
        const popularity = " " + card['recipe'][0].popularity
        const description = " " + card['recipe'][0].description
        const recipe_id = " " + card['recipe'][0].recipe_id


        parseCard(name, posted_by, creation_date, difficulty, cook_time, servings, popularity, description, recipe_id);

    } catch (err) {

    }

    i++;

}

function parseCard(name, posted_by, creation_date, difficulty, cook_time, servings, popularity, description, recipe_id) {
    const trimmedID = recipe_id.trim();
    const results = document.querySelector('#results')
    const div = document.createElement("div")
    div.className += "col "
    div.innerHTML = '  <div class="card shadow-lg" id="recipe_cards" >' +
        '<div className="card-body">' +
        '<br><h5 class="card-title ">' + name + '</h5><div class="card-subtitle mb-2 "></h5>'
        + '<br><div class="card-subtitle mb-2 ">' + '<b>Posted By: ' + '</b>' + posted_by
        + '<br><b>Created:</b>'
        + creation_date +
        '<br><b>Difficulty:</b>'
        + difficulty +
        '<br><b>Cooking Time:</b>'
        + cook_time +
        '<br><b>Servings:</b>'
        + servings +
        '<br><b>Likes:</b>' // + '<span class="badge bg-primary" id="#tags_'+trimmedID+'">'+ recipe_tags +'</span>'
        + popularity + '<br><span class="badge bg-primary" id="tags_'
        + trimmedID + '"></span>' +
        '</div>' + '</div>' + '<div class="card-text" style="font-style: bold">' + description + '    <br>\n' +
        '                <p>\n' +
        '                    <!--                        onclick="getTagsFromDB()"-->\n' +
        '                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#ingredients_' + trimmedID + '"" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Ingredients</a>\n' +
        '                </p>\n' +
        '                <div class="row">\n' +
        '                    <div class="col">\n' +
        '                        <div class="collapse multi-collapse" id="ingredients_' + trimmedID + '">\n' +
        '                            <div id="ingredient_items_' + trimmedID + '">\n' +
        '                            </div>\n' +
        '\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <p>\n' +
        '                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#instructions_' + trimmedID + '" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Instructions</a>\n' +
        '                </p>\n' +
        '                <div class="row">\n' +
        '                    <div class="col">\n' +
        '                        <div class="collapse multi-collapse" id="instructions_' + trimmedID + '">\n' +
        '                            <div id="instruction_items' + '_' + trimmedID + '">\n' +
        '                            </div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '\n' +
        '                </div></div></div></div></div>'

    results.append(div)
    getIngredientsFromDB(trimmedID);
    getInstructionsFromDB(trimmedID);
    getRecipeTagsFromDB(trimmedID);

    // '<img class="img-fluid" src="' + image_url + '"' +
}