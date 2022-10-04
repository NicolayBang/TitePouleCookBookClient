function addRecipeForm(){
    const div = document.createElement("div");
    const recipeForm = document.querySelector('#recipe_form');

    div.innerHTML += '<button class="btn btn-primary" data-bs-target="#post_modal" data-bs-toggle="modal" type="button">\n' +
        '    Post a new Recipe...\n' +
        '</button>\n' +
        '\n' +
        '\n' +
        '<!--<div class="container mt-5">-->\n' +
        '<!--    <div class="row d-flex justify-content-center align-items-center">-->\n' +
        '<!--        <div class="col-md-6">-->\n' +
        '<form id="regForm">\n' +
        '    <div aria-hidden="true" aria-labelledby="staticBackdropLabel" class="modal fade" data-bs-backdrop="static"\n' +
        '         data-bs-keyboard="false"\n' +
        '         id="post_modal" tabindex="-1">\n' +
        '        <div class="modal-dialog">\n' +
        '            <div class="modal-content">\n' +
        '                <!--                        <form id="regForm">-->\n' +
        '                <div class="modal-header">\n' +
        '\n' +
        '                    <h5 class="modal-title" id="register">New Recipe</h5>\n' +
        '                    <button aria-label="Close" class="btn-close" data-bs-dismiss="modal" type="button"></button>\n' +
        '                </div>\n' +
        '                <div class="modal-body">\n' +
        '\n' +
        '\n' +
        '                    <div class="card d-flex align-items-center justify-content-center">\n' +
        '                        <div class="card-body">\n' +
        '                            <div class="all-steps" id="all-steps"><span class="step"></span> <span class="step"></span>\n' +
        '                                <span class="step"></span> <span class="step"></span></div>\n' +
        '                            <div class="tab">\n' +
        '                                <h2>\n' +
        '                                    Title\n' +
        '                                </h2>\n' +
        '                                <input class="form-control" name="recipe_title" id="title_recipe" placeholder="Recipe name..." type="text"\n' +
        '                                       onkeyup="\n' +
        '                                        var start = this.selectionStart;\n' +
        '                                        var end = this.selectionEnd;\n' +
        '                                            if(this.value.length > 0){\n' +
        '                                                this.value = this.value[0].toUpperCase() + this.value.slice(1);\n' +
        '                                            }\n' +
        '                                                this.setSelectionRange(start, end);\n' +
        '                                                ">\n' +
        '                                <br>\n' +
        '                                <label for="difficulty-rating" style="margin-left: 3%">Difficulty: </label>\n' +
        '                                <div class="container-wrapper" id="difficulty-rating">\n' +
        '                                    <div class="container">\n' +
        '                                        <div class="row">\n' +
        '\n' +
        '                                            <div class="col-sm">\n' +
        '\n' +
        '                                                <input id="1" name="difficulty_btn" type="radio"\n' +
        '                                                       value="1">\n' +
        '                                                <label for="1">\n' +
        '                                                </label>\n' +
        '\n' +
        '                                                <h6 class="card-subtitle mb-2 text-muted" style="font-size: xx-small">\n' +
        '                                                    Very Easy</h6>\n' +
        '                                            </div>\n' +
        '                                            <div class="col-sm">\n' +
        '\n' +
        '                                                <input id="2" name="difficulty_btn" type="radio"\n' +
        '                                                       value="2">\n' +
        '                                                <label for="2">\n' +
        '                                                </label>\n' +
        '                                                <h6 class="card-subtitle mb-2 text-muted" style="font-size: xx-small">\n' +
        '                                                    Easy</h6>\n' +
        '                                            </div>\n' +
        '                                            <div class="col-sm">\n' +
        '                                                <input id="3" name="difficulty_btn" type="radio"\n' +
        '                                                       value="3">\n' +
        '                                                <label for="3">\n' +
        '                                                </label>\n' +
        '                                                <h6 class="card-subtitle mb-2 text-muted" style="font-size: xx-small">\n' +
        '                                                    Medium</h6>\n' +
        '                                            </div>\n' +
        '                                            <div class="col-sm">\n' +
        '                                                <input id="4" name="difficulty_btn" type="radio"\n' +
        '                                                       value="4">\n' +
        '                                                <label for="4">\n' +
        '                                                </label>\n' +
        '                                                <h6 class="card-subtitle mb-2 text-muted" style="font-size: xx-small">\n' +
        '                                                    Difficult</h6>\n' +
        '                                            </div>\n' +
        '                                            <div class="col-sm">\n' +
        '                                                <input id="5" name="difficulty_btn" type="radio"\n' +
        '                                                       value="5">\n' +
        '                                                <label for="5">\n' +
        '                                                </label>\n' +
        '                                                <h6 class="card-subtitle mb-2 text-muted" style="font-size: xx-small">\n' +
        '                                                    Very Difficult</h6>\n' +
        '                                            </div>\n' +
        '                                            <br>\n' +
        '                                            <br>\n' +
        '                                            <label for="cooking-time-dropdown">Cooking Time: </label>\n' +
        '                                            <div class="dropdown" id="cooking-time-dropdown">\n' +
        '                                                <button aria-expanded="false" aria-haspopup="true"\n' +
        '                                                        class="btn btn-secondary dropdown-toggle"\n' +
        '                                                        data-bs-toggle="dropdown" id="dropdown_cooking_time"\n' +
        '                                                        type="button">\n' +
        '                                                    Select Cooking Time\n' +
        '                                                </button>\n' +
        '                                                <!--Send cooking time options here from backend -->\n' +
        '                                                <div aria-labelledby="dropdown_cooking_time" class="dropdown-menu">\n' +
        '                                                    <div class="form-check">\n' +
        '                                                        <div id="cooking-time-options"></div>\n' +
        '                                                    </div>\n' +
        '                                                </div>\n' +
        '                                            </div>\n' +
        '                                            <br><br>\n' +
        '\n' +
        '                                            <label for="servings">Servings </label>\n' +
        '                                            <div class="form-group">\n' +
        '                                                <select class="form-control" name="servings_options" id="servings">\n' +
        '                                                    <option>1</option>\n' +
        '                                                    <option>2</option>\n' +
        '                                                    <option>3</option>\n' +
        '                                                    <option>4</option>\n' +
        '                                                    <option>5</option>\n' +
        '                                                    <option>6</option>\n' +
        '                                                    <option>7</option>\n' +
        '                                                    <option>8</option>\n' +
        '                                                    <option>9</option>\n' +
        '                                                    <option>10</option>\n' +
        '                                                    <option>11</option>\n' +
        '                                                    <option>12</option>\n' +
        '                                                </select>\n' +
        '                                            </div>\n' +
        '                                            <label for="description_text">Description: </label>\n' +
        '                                            <textarea class="form-control" id="description_text" name="description"\n' +
        '                                                      placeholder="Write a short description of the recipe..."\n' +
        '                                                      rows="5"onkeyup="\n' +
        '                                        var start = this.selectionStart;\n' +
        '                                        var end = this.selectionEnd;\n' +
        '                                            if(this.value.length > 0){\n' +
        '                                                this.value = this.value[0].toUpperCase() + this.value.slice(1);\n' +
        '                                            }\n' +
        '                                                this.setSelectionRange(start, end);\n' +
        '                                                "></textarea>\n' +
        '                                            <br><br>\n' +
        '                                        </div>\n' +
        '                                    </div>\n' +
        '                                </div>\n' +
        '                                <br>\n' +
        '                            </div>\n' +
        '                            <!--                            <label for="ingredient_post">Ingredients </label>-->\n' +
        '                            <div class="tab" id="post_step_2">\n' +
        '                            </div>\n' +
        '                            <div class="tab" id="post_step_3">\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <div class="modal-footer">\n' +
        '                        <div id="add_btn_placeholder" style="margin-right: 50%"></div>\n' +
        '                        <!--                        <div id="add_instruction_btn_placeholder" style="margin-right: 50%"></div>-->\n' +
        '                        <!--                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Create</button>-->\n' +
        '                        <div id="nextprevious" style="overflow:auto;">\n' +
        '                            <div style="float:right;">\n' +
        '                                <button id="prevBtn" onclick="nextPrev(-1)" type="button">Previous</button>\n' +
        '                                <button id="nextBtn" onclick="nextPrev(1)" type="button">Next</button>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</form> '
    recipeForm.append(div)

}