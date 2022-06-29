


$("button").click(function () {
    if ($("container").is(":visible")) {
        $("container").hide();
        $("button").text("mostrar");
    } else {
        $("container").show();
        $("button").text("ocultar");
    }


})




