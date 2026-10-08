function display() {
    var text="", i=1;
    var ch=Number(document.getElementById("demo1").value)
    while (i<=ch) {
        
       text+= i+"<br>";
       i++
        
    }
    document.getElementById("result").innerHTML=text;
    
}