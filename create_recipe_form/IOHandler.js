const postUrl = 'http:107.171.153.230:8080/recipe_book/services/recipe_handler/recipes';

/**
 * Generic function to get the value of a selected input field. Hanldes radio buttons, text fields, and text areas.
 * Other types can easily be added with extra if statements or switch.
 * */
function getSelectedInput(inputName, index, type) {
    let selectedItem;
    let input;

    if (type.includes('radio')) {//If a radio button,
        selectedItem = document.querySelectorAll('input[name="' + inputName + '"]:checked');
        try {
            input = selectedItem.item(index).id;
            //     console.log(removeLastChar(input));
        } catch (e) {
            console.log(e.toString());
            alert("Please select a " + inputName + " option");
            return;
        }
        if (inputName.includes('difficulty')) {//Difficulty has only one char as static id so return it, this is the only non-generic element in this method
            return input;
        }
        // } else if (inputName.includes('cooking_times')) {
        //     return input;
        // }


        return removeLastChar(input);
    } else if (type.includes('option')) {//If option
        selectedItem = document.querySelectorAll('select[name="' + inputName + '"]');
        try {
            input = selectedItem.item(index).value;
            //    console.log(input);
        } catch (e) {
            console.log(e.toString());
            alert("Please select a " + inputName + " option");
            return;
        }
        return input;
    } else if (type.includes('textarea')) {//If textarea
        selectedItem = document.querySelectorAll('textarea[name="' + inputName + '"]');
        try {
            input = selectedItem.item(index).value;
            //  console.log(input);
        } catch (e) {
            console.log(e.toString());
            alert("Please select a " + inputName + " option");
            return;
        }
        return input;
    } else if (type.includes('text')) {//If text
        selectedItem = document.querySelectorAll('input[name="' + inputName + '"]');
        input = selectedItem.item(index).value;
        return input;
    }
    console.log(input);
    let test;
    return alert('Invalid input type');
}

var elemIndex = 0;

function queryDB(queryParam, querySelector, columnName, elementType, elementClass, elementName, boostrapType) {

    console.log("queryDB");
    var query_results = document.querySelector(querySelector);
    fetch('http:107.171.153.230:8080/recipe_book/services/recipe_handler' + queryParam, {
        method: "GET", headers: {
            'Accept': 'application/json',
            'Connection': 'close'
        }
    })
        .then(response => response.json())
        .then(function (json) {
            console.log(json);
            if (queryParam.includes('cooking')) {//TODO find a better way to do this extremely costly and inefficient way as it is now
                for (const [key, value] of Object.entries(json [columnName])) {
                    console.log(`${key} = ${value}`);
                    prep_times_map.set(key, value);
                    values.push(value);
                }
                var sortedbyValue = new Map([...prep_times_map].sort((a, b) => a[1] - b[1])); //sortHashMapByValue();
                for (const [key] of sortedbyValue) {
                    appendResults(key, elementType, elementClass, elementName, boostrapType, query_results, elemIndex);
                }
            } else if (queryParam.includes('/units')) {//If the query is for units, then
                unitJson = json;
                unitsWasFetched = true;
            }
            for (let i = 0; i < json[columnName].length; i++) {
                appendResults(json[columnName][i], elementType, elementClass, elementName, boostrapType, query_results, elemIndex);
            }
            elemIndex++;

        }).catch(err => console.log(err))
}

function appendResults(tags, elementType, elementClass, elementName, boostrapType, query_results, index) {
    const div = document.createElement(elementType)
    div.innerHTML = '<input class="' + elementClass + '" type="' + boostrapType + '" id="' + tags + index + '" name=' + elementName + '>' + '<label class="form-check-label" value="' + tags + '" for="flexCheckDefault">' + tags + '</label>' + '</div>'
    query_results.append(div);
}

function removeLastChar(str) {
    return str.substring(0, str.length - 1);
}

function postToDB(json) {
    console.log("postToDB: " + json);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", postUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(json));
}


