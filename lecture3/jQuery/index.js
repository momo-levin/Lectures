// watch jQuery selector documetation - https://www.w3schools.com/jquERY/jquery_ref_selectors.asp
// watch some jQuery selector examples - https://www.w3schools.com/jquERY/trysel.asp
// watch jQuery event documetation - https://www.w3schools.com/jquERY/jquery_ref_events.asp
// watch jQuery traversing documetation - https://www.w3schools.com/jquERY/jquery_ref_traversing.asp

$("#mark").css("background", "yellow");

$('input[type="text"]').css("background", "yellow");



$(document).ready(function () {
    //$("p").text("The DOM is now loaded and can be manipulated.");

    $("p").click(function () {
        $(this).slideUp();
    });

    $(".btn-one").click(function () {
        var str = $("p").text();
        alert(str);
    });
    $(".btn-two").click(function () {
        var str = $("p:first").text();
        alert(str);
    });
    $(".btn-three").click(function () {
        var str = $("p.extra").text();
        alert(str);
    });
  
    $("#redirectButton").click(function () {
        $("#box").load("./form.html", function (responseTxt, statusTxt, jqXHR) {
            if (statusTxt == "success") {
                alert("New content loaded successfully!");
            }
            if (statusTxt == "error") {
                alert("Error: " + jqXHR.status + " " + jqXHR.statusText);
            }
        });
    });
   
        $("#sendButton").click(function(){
            $.get("./form.html", function(data){
                // Display the returned data in browser
                $("#result").html(data);
            });
        });
   
});