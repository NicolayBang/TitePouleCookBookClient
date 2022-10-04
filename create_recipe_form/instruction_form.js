
var instructionAddBtnWasMade = false;
var instructionBtnWasClicked = false;
var instructionNb = 0;

function addInstructionForm(){
    const div = document.createElement("div");
    const page3 = document.querySelector('#post_step_3');
    div.innerHTML += ' <p><input placeholder="instruction" onInput="this.className" type="text" name="instruction'+instructionNb+'"'+
        'onkeyup="\n' +
        '                                        var start = this.selectionStart;\n' +
        '                                        var end = this.selectionEnd;\n' +
        '                                            if(this.value.length > 0){\n' +
        '                                                this.value = this.value[0].toUpperCase() + this.value.slice(1);\n' +
        '                                            }\n' +
        '                                                this.setSelectionRange(start, end);\n' +
        '                                                ">' +
        '</p>'
    page3.append(div);
    if((currentTab == 2)&&(instructionAddBtnWasMade==false)){
        const addInstructionBtn = document.createElement("div");
        const page3_footer = document.querySelector('#add_btn_placeholder');
        addInstructionBtn.innerHTML = '<button className="btn btn-primary" id="add_instruction" type="button">Add Instruction</button>';
        page3_footer.replaceWith(addInstructionBtn);
        addInstructionOnClickListener();
        instructionAddBtnWasMade = true;
    }
}

function addInstructionOnClickListener() {
    var addInstructionButton = document.getElementById("add_instruction");
    addInstructionButton.addEventListener("click", function () {
        if (!validateForm()) return false;
        instructionNb++;
        addInstructionForm();
        instructionAddBtnWasClicked = true;
    });
}