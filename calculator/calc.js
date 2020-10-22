function calc(val){
    document.getElementById("head").value+=val;
}
function erase(){
    document.getElementById('head').value="";
}
function equalClick(){
    var text=document.getElementById("head").value;
    var result=eval(text);
    document.getElementById("head").value=result;
}