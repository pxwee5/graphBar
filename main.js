var inputField = document.querySelectorAll('.c-input__field');
var submitBtn = document.querySelector('.c-input__submit');

submitBtn.addEventListener("click", function() {
  for (var i=0; i<inputField.length; i++) {
    var inputName = inputField[i].name;
    var inputVal = inputField[i].value;
    var currentBar = document.querySelector('.c-graph__bar[name='+inputName+']');
    currentBar.style.height = inputVal + "%";
  }
})
