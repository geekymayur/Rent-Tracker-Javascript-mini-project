function calculate() {
    var gethours = document.getElementById("get_hours").value;
    var getrate = document.getElementById("get_rate").value;

    var fixedhour = 24;

    if (gethours <= 24) {
        var amount = gethours * getrate;
        document.getElementById("showAmount").innerHTML = "Rs." + amount;
    } else {
        var extrahours = gethours - 24;

        var amount1 = 24 * getrate;
        var amount2 = (getrate * 2) * extrahours;
        var amount = amount1 + amount2;
        document.getElementById("showAmount").innerHTML = "Rs." + amount;
    }
}
