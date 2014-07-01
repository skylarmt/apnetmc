var xmlhttp;
var strings;
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        strings = eval("(" + xmlhttp.responseText + ")");
        var randomIndex = Math.floor(Math.random() * strings.length);
        var randomString = strings[randomIndex];
        document.getElementById("quote").innerHTML = randomString;
    }
}
xmlhttp.open("GET", "http://apnetmc.tk/quotes.json", true);
xmlhttp.send();
