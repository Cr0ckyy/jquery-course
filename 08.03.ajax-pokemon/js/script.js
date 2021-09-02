$(function () {

    // As another example of AJAX calls in jQuery, we access the PokéAPI to build
    // a Pokédex.

    const pokeapi = "https://pokeapi.co/api/v2/generation/1";

    // TODO: getting the JSON data from pokeapi
    $.getJSON(pokeapi).done(function (data) {

        console.log(data);  // Explore available data in the Developer Tools Console

        //  use the $.each method to obtain relevant Pokemon data from the API
        $.each(data.pokemon_species, function (index, pokemon) {
            const name = toString(pokemon.name);
            const paragraph = $("<p>").html("Pokémon species no. " + (index + 1) + " is " + name);

            // add the paragraph to pokedex div
            paragraph.appendTo("#pokedex");
        });

    }).fail(function () {
        // Handle error case
        console.log("Call to PokéAPI failed.");

    }).always(function () {
        // Will always be executed (in either case).
        console.log("Pokémon is awesome.")
    });

});

// Capitalizes a given string.
function toString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
