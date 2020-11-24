const renderer = new Renderer()

const getRecipe= function () {
    let input = $("#ingredient-input").val()

    $.get(`recipes/${input}`, function (recipes) {

        renderer.render(recipes.meals)
    })
}