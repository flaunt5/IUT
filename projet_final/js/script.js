
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
document.querySelector("#logo").addEventListener("click", function (e) {
   e.preventDefault();

    window.location.href = "index.html";
});

if(document.querySelector("#warningToggle") != null) {
    document.querySelector("#warningToggle").addEventListener("click", function(e) {
        document.querySelector("#warning-bg").style.display = "none";
    });
}

if(document.querySelector("#contact-form") != null) {
    document.querySelector(".img-produit").addEventListener("click", function(e) {
        window.location.href = this.getAttribute('data-url');
    });

}

if(document.querySelector("#contact-form") != null) {
    if(document.querySelector("#cart-contain") != null) {
        document.querySelector("#cart-contain").style.display = "none";
    }
}

var button = document.getElementsByClassName("buyButton");

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
        var price = parseInt(this.getAttribute("data-price"));
        var cart = document.querySelector("#cart-contain");
        var totalPrice = parseInt(document.querySelector("#cart-total").innerHTML, 10);

        if (cart.style.display == "none") {
            cart.style.display = "inline-block";
        }
        totalPrice = totalPrice + price;

        document.querySelector("#cart-total").innerHTML = totalPrice;
    });
}
