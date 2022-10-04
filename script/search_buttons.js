function createSearchBtnListener() {
    const searchBtn = document.getElementById('search_btn');
    const searchByNameBtn = document.getElementById('search_by_name_btn');
    const results = document.querySelector('#results')
    const input = document.getElementById('search_bar_input');
    searchBtn.addEventListener('click', function (e) {
        let tags = '/' + getCheckedBoxes();

        console.log(tags);
        results.innerHTML = "";
        getRecipeFromDB(tags);
        //TODO: send tags to backend to get recipes

    });

    searchByNameBtn.addEventListener('click', function (e) {
        let name = '_by_name/' + input.value;
        console.log(name);
        results.innerHTML = "";
        getRecipeFromDB(name);

    });

    input.addEventListener("keypress", function (e) {
        if (event.key === "Enter") {
            searchByNameBtn.click();
        }


    });
}
