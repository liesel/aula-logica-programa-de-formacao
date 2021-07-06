$( document ).ready(function() {
    
    
    var resultado  = function( data ) {
        var pokemon =  data;
        // console.log(pokemon);
        document.getElementById("txtNomePokemon").value = pokemon.abilities[0].ability.name
      };
    

    document.getElementById("btnClique").addEventListener("click", function() {
      $.get("https://pokeapi.co/api/v2/pokemon/ditto", resultado );
    });
  
});

// var frutas = ["mamao", "mação", "goiaba", "LARANJA"];

// for (let index = 0; index < frutas.length; index++) {
//   console.log(frutas[index]);
// }