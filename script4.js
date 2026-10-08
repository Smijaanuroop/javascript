function display() {
    var text="", i=1;
    var ch=Number(document.getElementById("demo1").value)
    do
    {
        
       text+= i+"<br>";
       i++
        
    }
     while (i<=ch)
    document.getElementById("result").innerHTML=text;
    
}