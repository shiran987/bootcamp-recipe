class Renderer { 
    constructor(){
        this.source = $('#recipes-template').html();
        this.template = Handlebars.compile(this.source);
      }
      render(recipes){
        $('#meals-container').empty()
        const newHTML = this.template({ recipes });
        $('#meals-container').append(newHTML);  
      }
    }