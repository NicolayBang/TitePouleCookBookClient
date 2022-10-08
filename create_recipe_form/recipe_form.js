var currentTab = 0;
var nextListenerSet = false;
var title;
var difficulty;
var servings;
var prep_time;
var description;
var unit = [];
//var prep_times = [];//TODO no need for both array and hash map, this is not optimized
const prep_times_map = new Map();
var unitJson = [];
var recipe_ingredient = [];
var amount = [];
var recipe_instructions=[];
var submitClicks = 0;
var postJson = [];
let cookingTimesWasFetched = false;
let unitsWasFetched = false;
var values = [];


// import {nextOnClickListener, submitOnClickListener, addIngredientOnClickListener} from 'ingredient_form.js';

document.addEventListener("DOMContentLoaded", function (event) {

    addRecipeForm();
   // addTagBtnOnClickListener();
    showTab(currentTab);

});

/*
*  TODO: 1) Retrieve ingredient name and amount, store in array
*        2) Retrieve instructions and store in an array.
*        3) Create a JSON object with all the information that matches recipe.json
*        4) Send the JSON object to the server
*  */

function showTab(n) {
    var x = document.getElementsByClassName("tab");
   // x[n].style.display = "block";
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        const nextBtn = document.getElementById("nextBtn");
        nextBtn.innerHTML = "Submit";
        nextBtn.addEventListener("click", function () {
            submitClicks++;
         //  if ((currentTab == 3) && (!validateForm())) {
           // if (currentTab == 3) {

                for(let i=0; i<=instructionNb; i++){
                    recipe_instructions[i] = getSelectedInput("instruction"+i, 0, "text");
                    console.log(i + recipe_instructions[i]);
                }
                postToDB(parseToJson()) ;
                document.getElementById("regForm").requestSubmit();//If last tab, submit form

          //  }
        });
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";

        if (nextListenerSet == true) {
            return;
        }
        if (currentTab == 0) {
            nextOnClickListener();
            //      queryParam,           querySelector,          columnName, elementType,    elementClass,     elementName,
            queryDB("/cooking_times", "#cooking-time-options", "cooking_times", "div", "form-check-input", "cooking_times", "radio");

            nextListenerSet = true;
        }
    }
    fixStepIndicator(n)
}

function nextPrev(n) {
    var x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
        // document.getElementById("regForm").submit();
        // return false;
        // alert("sdf");
        document.getElementById("nextprevious").style.display = "none";
        document.getElementById("all-steps").style.display = "none";
        document.getElementById("register").style.display = "none";
      //  document.getElementById("text-message").style.display = "block";
    }
    showTab(currentTab);
}

function validateForm() {
    console.log("Validate Form ==> currentTab: " + currentTab);
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    try {
        y = x[currentTab].getElementsByTagName("input");
    } catch (e) {

    }
    for (i = 0; i < y.length; i++) {
        if (y[i].value == "") {
            y[i].className += " invalid";
            valid = false;
        }
    }
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid;
}

function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    x[n].className += " active";
}

function onlyNumberKey(evt) {

    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
    return true;
}

/*Every time next is pressed, it gets the radio button associated with the tab and makes sure one is selected */
function nextOnClickListener() {
    var nextButton = document.getElementById("nextBtn");
    nextButton.addEventListener("click", function () {

        if ((currentTab == 1) && (ingredientAddBtnWasMade == false)) {//When next is pressed, get all the tabs input fields and store them
            prep_time = getSelectedInput("cooking_times", 0, "radio");
            title = getSelectedInput("recipe_title", 0, "text");
            difficulty = getSelectedInput("difficulty_btn", 0, "radio");
            servings = getSelectedInput("servings_options", 0, "option");
            description = getSelectedInput("description", 0, "textarea");
            console.log("description: " + description);
            addIngredientForm();

            if(unitsWasFetched==false) {
                //      queryParam, querySelector,          columnName, elementType,    elementClass,     elementName,          boostrapType
                queryDB("/units", "#unit-options" + ingredientNb, "units", "div", "form-check-input", "units" + ingredientNb, "radio");
   //             ingredientNb++;
                unitsWasFetched = true;
            }

        } else if ((currentTab == 2) && (instructionAddBtnWasMade == false)) {
            addInstructionForm();
            for (let i = 0; i <= ingredientNb; i++) {
                unit[i] = getSelectedInput("units" + i, 0, "radio");
                recipe_ingredient[i] = getSelectedInput("ingredient_name" + i, 0, "text");
                amount[i] = getSelectedInput("ingredient_amount" + i, 0, "text");
                console.log(i + unit[i]);
                console.log(i + recipe_ingredient[i]);
                console.log(i + amount[i]);
            }
        }
    });
}

function removeDoubleQuotes(str) {
    return str.replace(/"/g, "");
}
//TODO change hard coded tags to receive data from form
function parseToJson(){
    console.log("HASHMAP "+prep_times_map.size);
    let prep_time_id = prep_times_map.get(prep_time);
    var json = {
        "title": title,
        "user_id": "1",
        "nb_of_servings": servings,
        "difficulty_id": difficulty,
        "prep_time_id":prep_time_id,
        "description": description,
        "tags": ["American", "Dessert"],
        "ingredients": [],
        "instructions": []
    };
    for (let i = 0; i <= ingredientNb; i++) {
        var ingredient = {
            "ingredient": {
                "name": recipe_ingredient[i],
                "amount": amount[i],
                "unit": unit[i]
            }
        };
        json.ingredients.push(ingredient);
    }
    for (let i = 0; i <= instructionNb; i++) {
        var instruction = {
            "instruction": {
                "name": recipe_instructions[i]
            }
        };
        json.instructions.push(instruction);
    }
    return json;
}
