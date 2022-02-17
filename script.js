$(document).ready(function(){
    $("#form-submit").submit(function(event){
        performSearch(event);
    });
});

function performSearch(event) {
    var request;
    event.preventDefault();
    $("#the-word").text("");
    $("#the-phonetic").text("");
    
    request = $.ajax({
        url: 'https://api.dictionaryapi.dev/api/v2/entries/en/' + $("#word").val(),
        type: "GET",
    });

    request.done(function(response){
        formatSearch(response);
    });

    request.fail(function (){
        $("#the-word").text("Please try again, incorrect input!");
    });
}

function formatSearch(jsonObject) {
    var the_word = jsonObject[0].word;
    var the_definition = jsonObject[0].meanings[0].definitions[0].definition;
    var the_phonetic = jsonObject[0].phonetic;
    var the_example = jsonObject[0].meanings[0].definitions[0].example;
    var the_origin = jsonObject[0].origin;
    
    $("#the-word").text(the_word);
    $("#the-definition").text(the_definition);
    $("#the-phonetic").text(the_phonetic);
    $("#the-example").text("Example: " + the_example);
    $("#the-origin").text("Origin: " + the_origin);
}