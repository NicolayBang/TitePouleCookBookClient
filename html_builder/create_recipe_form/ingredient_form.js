var ingredientAddBtnWasMade = false;
var ingredientBtnWasClicked = false;
var ingredientNb = 0;
var clickCounter = 0;

function addIngredientForm() {
    const div = document.createElement("div");
    const page2 = document.querySelector('#post_step_2');
    div.innerHTML +=
        '        <label for="ingredient_post'+ingredientNb+'">Ingredient </label>\n' +
        '                                <div class="card" id="ingredient_post'+ingredientNb+'">\n' +
        '\n' +
        '                                    <p><input placeholder="name" type="text" oninput="this.className = \'\'" name="ingredient_name' +ingredientNb+'"' +
        'onkeyup="\n' +
        '                                        var start = this.selectionStart;\n' +
        '                                        var end = this.selectionEnd;\n' +
        '                                            if(this.value.length > 0){\n' +
        '                                                this.value = this.value[0].toUpperCase() + this.value.slice(1);\n' +
        '                                            }\n' +
        '                                                this.setSelectionRange(start, end);\n' +
        '                                                ">' +
        '</p>\n' +
        '<!--                                </div>-->\n' +
        '                                <div class="row">\n' +
        '\n' +
        '                                    <div class="col-sm">\n' +
        '                                        <p><input placeholder="qty" oninput="this.className = \'\'" name="ingredient_amount'+ingredientNb+'" type="text"  onkeypress="return onlyNumberKey(event)" \n' +
        '                   maxlength="4" \n' +
        '                   size="1%"></p>\n' +
        '                                    </div>\n' +
        '                                    <div class="col-sm">\n' +
        '\n' +
        '\n' +
        '                                        <div class="dropdown" id="dropdown_unit'+ingredientNb+'">\n' +
        '                                            <button aria-expanded="false" aria-haspopup="true"\n' +
        '                                                    class="btn btn-secondary dropdown-toggle"\n' +
        '                                                    data-bs-toggle="dropdown" id="unit_dropdown'+ingredientNb+'"\n' +
        '                                                    type="button">\n' +
        '                                                unit\n' +
        '                                            </button>\n' +
        '                                          \n' +
        '                                            <div class="dropdown-menu">\n' +
        '                                                <div class="form-check">  <div id="unit-options'+ingredientNb+'"></div>'+
        '                                                </div>\n' +
        '                                            </div>\n' +
        '                                        </div>\n' +
        '                                </div>\n' +
        '\n' +
        '\n' +
        '                            </div>\n' +
        '                        </div>';
    page2.append(div);

    if ((currentTab == 1) && (ingredientAddBtnWasMade == false)) {
        const addIngredientBtn = document.createElement("div");
        const page2_footer = document.querySelector('#add_btn_placeholder');
        addIngredientBtn.innerHTML = '<button className="btn btn-primary" id="add_ingredient" type="button">Add Ingredient</button>';
        page2_footer.append(addIngredientBtn);
        addIngredientOnClickListener();
        ingredientAddBtnWasMade = true;
    }

}

/**
 * Every time add button is pressed, a new ingredient form is added to the page and units are appended to the dropdown
 * from memory (not from database)
 */

function addIngredientOnClickListener() {
    var addIngredientButton = document.getElementById("add_ingredient");
    addIngredientButton.addEventListener("click", function () {
        if (!validateForm()) return false;
        ingredientNb++;
        addIngredientForm();
        ingredientBtnWasClicked = true;
        for (let i = 0; i < unitJson["units"].length; i++) {

            appendResults(unitJson["units"][i],"div", "form-check-input","units"+ingredientNb, "radio",
                document.querySelector("#unit-options"+ingredientNb), ingredientNb);

        }

    });
}
