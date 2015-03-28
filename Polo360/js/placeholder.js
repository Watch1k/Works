function ClearPlaceHolder (input) {
if (input.value == input.defaultValue) {
input.value = "";
}
}
function SetPlaceHolder (input) {
if (input.value == "") {
input.value = input.defaultValue;
}
}
function ClearPlaceHolderr (textarea) {
if (textarea.value == textarea.defaultValue) {
textarea.value = "";
}
}
function SetPlaceHolderr (textarea) {
if (textarea.value == "") {
textarea.value = textarea.defaultValue;
}
}