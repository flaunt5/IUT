document.getElementById("calc-submit").onclick = function() {
    var val1 = parseInt(document.getElementById("val1").value);
    var val2 = parseInt(document.getElementById("val2").value);
    var calcOp = document.getElementById("calc-select");
    var operator = calcOp.options[calcOp.selectedIndex].value;
    var result = 0;

    switch (operator) {
        case ("plus"):
            result = val1 + val2;
            break;
        case ("minus"):
            result = val1 - val2;
            break;
        case ("multiply"):
            result = val1 * val2;
            break;
        case ("divide"):
            result = val1 / val2;
            break;
    }

    var resultPrint = document.getElementById("calc-result");
    resultPrint.innerHTML = result;

}
