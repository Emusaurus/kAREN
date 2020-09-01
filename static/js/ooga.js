  
function getBotResponse() {
    var rawText = $("#textInput").val();

    //this entire user input sanitization method might come back to bite me in the --- later so please don't exploit it. JS CONSOLE *cough cough*

    while (rawText.includes(">")) {
        rawText = rawText.replace('>', ' ');
    }

    while (rawText.includes("<")) {
        rawText = rawText.replace('<', ' ');
    }

    while (rawText.includes("{")) {
        rawText = rawText.replace('{', ' ');
    }

    while (rawText.includes("}")) {
        rawText = rawText.replace('}', ' ');
    }

    while (rawText.length > 175) {
        alert("input is too long uwu") // <-- you can figure this out on your own.
        rawText = "hi"
    }


    var userHtml = '<p class="userText"><span>' + rawText + '</span></p>';
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById('userInput').scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });

    $.get("/get", {
        msg: rawText
    }).done(function(data) {

        matches2 = ['bruh'] //I'm a ------- preschooler.

        if (rawText.includes("send nudes")) { //if input contains "send nudes"
            var botHtml = '<image src="/static/images/back2.jpg" height="247" width="329"></image>'; //send "nudes"

        } else if (matches2.some(rawText.includes.bind(rawText))) { //Again, I'm a ------- preschooler.
            document.getElementById("audio2").src = "/static/sounds/sound2.ogg";
            var sound2 = document.getElementById("audio2"); // <-- I worked on this for an hour.
            sound2.play();
            var botHtml = '<p class="botText"><span>' + 'Yes.' + '</span></p>';

        } else var botHtml = '<p class="botText"><span>' + data + '</span></p>'; //if not, be "normal"

        $("#chatbox").append(botHtml);
        document.getElementById('userInput').scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
    });
}
$("#textInput").keypress(function(e) {
    if (e.which == 13) {
        getBotResponse();
    }
});
$("#buttonInput").click(function() {
    getBotResponse();
})
