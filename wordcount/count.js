var letterElement = document.getElementById("letter_no");
var letterElementWithoutSpace = document.getElementById("letter_no_without_space");
var wordElement = document.getElementById("word_no");
var textElement = document.getElementById("text");

textElement.addEventListener("input", function() {
  console.log("input event fired");
  var text = textElement.value;
  var words = text.split(/\s+/).filter(function(word) {
    return word.length > 0;
  });
  wordElement.value = words.length;
  letterElement.value = text.length;
  letterElementWithoutSpace.value = text.replace(/\s+/g, "").length;
});