$(document).ready(function () {

    // Define global variables
    var wins = 0;
    var losses = 0;
    var message = "";

    // Initializing function
    function Initializing() {
        randomnumber = Math.floor(Math.random() * 102) + 19;
        $("#randomnumber").text(randomnumber);
        totalscore = 0;
        $("#totalscore").text(totalscore);
        bluegem = Math.floor(Math.random() * 12) + 1;
        greengem = Math.floor(Math.random() * 12) + 1;
        pinkgem = Math.floor(Math.random() * 12) + 1;
        yellowgem = Math.floor(Math.random() * 12) + 1;
    };

    // On click functions
    $("#bluegem").on("click", function () {
        $("#bluegem").val(bluegem);
        totalscore += bluegem;
        $("#totalscore").text(totalscore);
        if (totalscore === randomnumber) {
            wins++;
            $("#wins").text(wins);
            message = "Score!";
            $("#message").text(message);
            Initializing();
        } else if (totalscore > randomnumber) {
            losses++;
            $("#losses").text(losses);
            message = "Too bad.";
            $("#message").text(message);
            Initializing();
        }
    });

    $("#greengem").on("click", function () {
        $("#greengem").val(greengem);
        totalscore += greengem;
        $("#totalscore").text(totalscore);
        if (totalscore === randomnumber) {
            wins++;
            $("#wins").text(wins);
            message = "Score!";
            $("#message").text(message);
            Initializing();
        } else if (totalscore > randomnumber) {
            losses++;
            $("#losses").text(losses);
            message = "Too bad.";
            $("#message").text(message);
            Initializing();
        }
    });

    $("#pinkgem").on("click", function () {
        $("#pinkgem").val(pinkgem);
        totalscore += pinkgem;
        $("#totalscore").text(totalscore);
        if (totalscore === randomnumber) {
            wins++;
            $("#wins").text(wins);
            message = "Score!";
            $("#message").text(message);
            Initializing();
        } else if (totalscore > randomnumber) {
            losses++;
            $("#losses").text(losses);
            message = "Too bad.";
            console.log(message);
            $("#message").text(message);
            Initializing();
        }
    });

    $("#yellowgem").on("click", function () {
        $("#yellowgem").val(yellowgem);
        totalscore += yellowgem;
        $("#totalscore").text(totalscore);
        if (totalscore === randomnumber) {
            wins++;
            $("#wins").text(wins);
            message = "Score!";
            $("#message").text(message);
            Initializing();
        } else if (totalscore > randomnumber) {
            losses++;
            $("#losses").text(losses);
            message = "Too bad.";
            $("#message").text(message);
            Initializing();
        }
    });

    Initializing();

});