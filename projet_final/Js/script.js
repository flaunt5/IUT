var checkInputText[nom, prenom, email];
var checkInputNumbers[telephone, mobile];
var badInputs[];

function formValidateText(var inputSelect) {
    //noinspection JSAnnotator
    if(form.inputSelect.value == "") {
        badInputs = emptyInputs.push(String(inputSelect));
    }
}
function formValidateNumber(var inputSelect) {
    if(isNaN(form.inputSelect.value) == true) {
        badInputs = emptyInputs.push(String(inputSelect));
    }
}

document.querySelector("#contact-submit").addEventListener("submit", function(e) {
   for( i = checkInputText.length; i >= 0; i--) {
       formValidateText(checkInputText[i]);
   }
   for( i = checkInputNumbers.length; i >= 0; i--) {
       formValidateText(checkInputNumbers[i]);
   }
   for ( i = badInputs,length; i >= o; i--) {

   }
});