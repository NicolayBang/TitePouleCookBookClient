/*
@Path("/recipe_handler")
public interface RecipeHandler {

    @Path("/recipes")
    @GET
    String getRecipes();

    @Path("/recipe/{id}")
    @GET
    String getRecipe(@PathParam("id") Long id);

    @Path("/recipes")
    @POST
    Response createRecipe(String gsonPost) throws IOException;

    @Path("/recipes")
    @PUT
    Response updateRecipe(String gsonPut);

    @Path("/recipe/{id}")
    @DELETE
    Response deleteRecipe(@PathParam("id") Long id);

    /*
   GET recipes: localhost:8080/recipe_book/services/recipe_handler/recipes
   GET recipe: localhost:8080/recipe_book/services/recipe_handler/recipe/1
   POST --> localhost:8080/recipe_book/services/recipe_handler/recipes

GET books: localhost:8080/a2/services/bookhandler/books
GET book: localhost:8080/a2/services/bookhandler/book/123
POST --> localhost:8080/a2/services/bookhandler/books

web service client:
In javascript
*/




class Recipe{


    constructor(name, description, ingredients, directions){
        this.id = Math.floor(Math.random() * 1000000);
        this.name = name;
        this.desciption = description;
        this.ingredients = ingredients;
        this.directions= directions;
        this.Recipe = this.parseToJSON(this.toJSON());
    }

    parseToJSON(str) {
        console.log(str);
        return JSON.parse(str);
    }
}

class DataService {
    constructor() {
        this.recipe = new Observable(new Recipe("", "", [], []));
        this.postRecipe(this.recipe);
    }
    getRecipe() {
        const client = new XMLHttpRequest();
        client.open("GET", "http://localhost:8080/recipe_book/services/recipe_handler/recipe/1");
        client.onreadystatechange = function () {
            if (client.readyState === 4) {
                const response = client.responseText;
                const recipe = JSON.parse(response);
                console.log(recipe.name);
            }
        }
        client.send();
    }
    postRecipe(recipe) {
        const client = new XMLHttpRequest();
        client.open("POST", "http://localhost:8080/recipe_book/services/recipe_handler/recipes");
        client.onreadystatechange = function () {
            if (client.readyState === 4) {
                const response = client.responseText;
                const recipe = JSON.parse(response);
                console.log(recipe.name);
            }
        }
        client.send();
    }
}

class Observable {

    constructor(value) {
        this._listeners = [];
        this._value = value;
    }

    notify() {
        this._listeners.forEach(listener => listener(this._value));
    }

    subscribe(listener) {
        this._listeners.push(listener);
    }

    get value() {
        return this._value;
    }

    set value(val) {
        if (val !== this._value) {
            this._value = val;
            this.notify();
        }
    }
}

class RecipeClient {


    getRecipes() {
        const client = new XMLHttpRequest();
        client.open("GET", "http://localhost:8080/recipe_book/services/recipe_handler/recipes");
        client.onreadystatechange = function () {
            if (client.readyState == 4) {
                const response = client.responseText;
                const recipes = JSON.parse(response);
                for (let i = 0; i < recipes.length; i++) {
                    console.log(recipes[i].name);
                }
            }
        }
        client.send();
    }

    getRecipe(id) {
        const client = new XMLHttpRequest();
        client.open("GET", "http://localhost:8080/recipe_book/services/recipe_handler/recipe/1");
        client.onreadystatechange = function () {
            if (client.readyState == 4) {
                const response = client.responseText;
                const recipe = JSON.parse(response);
                console.log(recipe.name);
            }
        }
        client.send();
    }


}



function parseToJSON(str) {
    console.log(str);
    return JSON.parse(str);
}
//
// var client = new XMLHttpRequest();
// client.open("POST", "http://localhost:8080/recipe_book/services/recipe_handler/recipes");
// client.onreadystatechange = function() {
//     if (client.readyState == 4) {
//         var response = client.responseText;
//         var recipe = JSON.parse(response);
//         console.log(recipe.name);
//     }
// }
// client.send();
//
// var client = new XMLHttpRequest();
// client.open("PUT", "http://localhost:8080/recipe_book/services/recipe_handler/recipes");
// client.onreadystatechange = function() {
//     if (client.readyState == 4) {
//         var response = client.responseText;
//         var recipe = JSON.parse(response);
//         console.log(recipe.name);
//     }
// }
// client.send();
//
// var client = new XMLHttpRequest();
// client.open("DELETE", "http://localhost:8080/recipe_book/services/recipe_handler/recipes");


