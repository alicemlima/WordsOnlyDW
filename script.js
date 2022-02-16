$(document).ready(function(){
    $("#form-submit").submit(function(event){
        performSearch(event);
    });
});

function performSearch(event) {
    var request;
    event.preventDefault();
    $("#the-word").text("welcome");

    request = $.ajax({
        url: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
        type: "GET",
        data: $("#word").val(),
    });

    request.done(function(response){
        console.log(response);
        formatSearch(response);
        console.log(response);
    });

    request.fail(function (){
        $("#the-word").text("Please try again, incorrect input!");
    });
}

function formatSearch(jsonObject) {
    var the_word = jsonObject.word;
    var the_phonetic = jsonObject.phonetic;
    console.log(word);
    
    $("#the-word").text(the_word);
    $("#the-phonetic").text(the_phonetic);
}