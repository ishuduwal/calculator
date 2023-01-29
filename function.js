function addInput(input){
    document.getElementById("input").value += input; 
}
function calculate(){
    var input = document.getElementByID("input").value;
    document.getElementByID("input").value = eval(input);
}