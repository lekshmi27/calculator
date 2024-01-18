//display content 
function appendToDisplay(value){
    document.getElementById("display").value += value;
}
function clearDisplay(value){
    document.getElementById("display").value ="";
}
function calculate(){
    try{
        document.getElementById("display").value = eval(document.getElementById("display").value )
    }
    catch (error){
        document.getElementById("display").value  = "error"
    }
}
function del(){
    document.getElementById("display").value = display.value.slice(0,-1)
}