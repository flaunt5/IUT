
if(document.querySelector("#contact-form") != null) {
    var form = document.form;

    function formValidateText(inputSelect) {
        if(form.inputSelect.value == "") {
            badInputs = emptyInputs.push(String(inputSelect));
        }
    }
    function formValidateNumber(inputSelect) {
        if(isNaN(form.inputSelect.value) == true) {
            badInputs = emptyInputs.push(String(inputSelect));
        }
    }

    form.addEventListener("submit", function(e) {
        console.log("root");
        e.preventDefault();
        var checkInputText = ["nom", "prenom", "email"];
        var checkInputNumbers = ["telephone", "mobile"];
        var emptyInputs = new Array(0);
        var badInputs = new Array(0);
        var warningText = "";

        for( i = checkInputText.length; i >= 0; i--) {
            formValidateText(checkInputText[i]);
            console.log(checkInputText[i]);
        }
        for( i = checkInputNumbers.length; i >= 0; i--) {
            formValidateNumber(checkInputNumbers[i]);
        }
        for ( i = badInputs.length; i >= 0; i--) {
            warningText += "<li>" + badInputs[i] + "</li>";
        }

        if (badInputs.length < 0 ) {

            warningToggle("block");
            document.querySelector("#warning-toFill").innerHTML = warningText;
        }
    });
}

function warningToggle(val) {
    document.querySelector("#warning-bg").style.display = val;
}

function windowChange(theUrl) {
    window.location.href = theUrl;
}

if(document.querySelector("#cart-contain") != null) {
    document.querySelector("#cart-contain").style.display = "none";
}

function purchase(price) {
    var cart = document.querySelector("#cart-contain");
    var totalPrice = parseInt(document.querySelector("#cart-total").innerHTML, 10);
    console.log(totalPrice)

    if (cart.style.display == "none") {
        cart.style.display = "inline-block";
    }
    totalPrice = totalPrice + price;
    console.log("called " + totalPrice);

    document.querySelector("#cart-total").innerHTML = totalPrice;

}