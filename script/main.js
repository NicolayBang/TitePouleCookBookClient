


function init() {
    createSearchBtnListener()
    getTagsFromDB()
    getFeaturedRecipesFromDB()//This also calls the getIngredientsFromDB() function after getting the recipe_id and trimming it
    autocomplete(document.getElementById("tag_input"), tags_input);
}


