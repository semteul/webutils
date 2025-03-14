var letterElement = document.getElementById("letter_no");
var letterElementWithoutSpace = document.getElementById("letter_no_without_space");
var wordElement = document.getElementById("word_no");
var textElement = document.getElementById("text");
var copyButton = document.getElementById("copy");
var deleteButton = document.getElementById("delete");

deleteButton.addEventListener("click", function() {
    textElement.value = "";
    textElement.dispatchEvent(new Event("input"));
}   );

var alertElement = document.body.appendChild(document.createElement("div"));
alertElement.style.position = "fixed";
alertElement.style.top = "0";
alertElement.style.left = "0";
alertElement.style.width = "100%";
alertElement.style.height = "100%";
alertElement.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
alertElement.style.display = "none";
alertElement.style.justifyContent = "center";
alertElement.style.alignItems = "center";
alertElement.style.zIndex = "999";

var alertBox = document.createElement("div");
alertBox.style.padding = "20px";
alertBox.style.backgroundColor = "cyan";
alertBox.style.borderRadius = "5px";
alertElement.appendChild(alertBox);
document.body.appendChild(alertElement);

function queueAlert(text) {
    alertBox.innerText = text;
    alertElement.style.display = "flex";
    setTimeout(function() {
        alertElement.style.display = "none";
        alertBox.innerText = "";
    }, 500);
}

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

copyButton.addEventListener("click", function() {
    textElement.select();
    if(!navigator.clipboard) {
        document.execCommand("copy");
        queueAlert("복사완료");
        return;
    }
    navigator.clipboard.writeText(textElement.value).then(function() {
        queueAlert("복사완료");
    });
});