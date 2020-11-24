const express = require('express')
const path = require('path')
const app = express()
const urllib = require('urllib');

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

//  get route called sanity that responds with OK
app.get('/sanity', function (request, response) {
    response.send("OK")
})

app.get('/recipes/:ingredient', function(request, response){
    urllib.request('https://recipes-goodness.herokuapp.com', function ( err, data, res) {
        let recipe=JSON.parse(data).results
        let meal = request.params.ingredient
        const recipes = []
        
          for(let index of recipe){
            if(index.ingredients == meal){
                recipes.push(
                    {
                        ingredients: [index.ingredients],
                        title: index.title,
                        thumbnail:  `https://www.themealdb.com/images/media/meals/index.title`,
                        href: `https://www.youtube.com/watch?/index.href`
                    })
                }
            }
            response.send({meals : recipes })
        });
        
        })

const port = 8080
app.listen(port, function(){
    console.log(`Server is up and running smoothly ${port}`)


})