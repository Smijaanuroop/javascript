function display() {
    var text="", i;
    var ch=Number(document.getElementById("demo1").value)
    for (i= 1; i < ch; i++) {
       text+= i+"<br>";
        
    }
    document.getElementById("result").innerHTML=text;
    
}