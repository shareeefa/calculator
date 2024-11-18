function displayContent(content){
    result.value+=content
}
// clear input
function calcClear(){
    result.value=""
}
// result
function calcOutput(){
    result.value=eval(result.value)
}
function removeLastDigit(){
    result.value =result.value.slice(0,-1)
}