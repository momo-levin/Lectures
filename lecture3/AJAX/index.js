var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://xhr.spec.whatwg.org/', false);
xhr.send();
if (xhr.status != 200) {
    alert(xhr.status + ': ' + xhr.statusText);
} else {

    alert(xhr.responseText);
}