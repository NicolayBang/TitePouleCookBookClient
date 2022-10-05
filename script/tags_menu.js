function getTagsFromDB() {
    tags_results = document.querySelector('#checkBoxItems');
    fetch('http:192.168.0.120:8080/recipe_book/services/recipe_handler/tags', {
        method: "GET", headers: {
            'Accept': 'application/json',
            'Connection': 'close'
        }
    })
        .then(response => response.json())
        .then(function (json) {
            const test = json['tags'][0];
            const json_data = json[0];

            for (let i = 0; i < json['tags'].length; i++) {

                createCheckBoxItem(json['tags'][i]);

            }

        }).catch(err => console.log(err))
}

function createCheckBoxItem(tags) {

    const div = document.createElement("div")
    div.className = "form-check";

    div.innerHTML =
        // '<div class="form-check" >' +
        '<input class="form-check-input" type="checkbox" id="' + tags +
        '" name="tags">' +
        '<label class="form-check-label" value="' + tags +
        '" for="flexCheckDefault">' +
        tags +
        '</label>' +
        '</div>'
    tags_results.append(div);
}

function getCheckedBoxes() {
    let checkboxes = document.querySelectorAll('input[name="tags"]:checked');
    let labels = [];
    let id;
    checkboxes.forEach((checkbox) => {
        id = removeComas(checkbox.id);
        console.log(id);
        if (labels == null) {
            labels.push(id);
        } else {
            labels.push('&=' + id);
        }

    });
    return labels;
}
function removeComas(str) {
    return str.replace(/,/g, '');
}