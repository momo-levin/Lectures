document.getElementById("bla-bla").onkeydown = function (ev) {

    let str = "йцукенгшщзхъфывапролджэячсмитьбюё";
    if (str.indexOf(ev.key.toLowerCase()) !== -1) {
        ev.preventDefault();
    }
}