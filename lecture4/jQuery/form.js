$(document).ready(function () {
    $("form").submit(function (event) {
      
        event.preventDefault();

        var actionFile = $(this).attr("action");

         var formValues = $(this).serialize();

        $.post(actionFile, formValues, function (data) {
            $("#result").html(data);
        });
    });
});