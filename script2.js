function display() {
    var text="", i;
    var ch=Number(document.getElementById("demo1").value)
    for (i= 1; i <= 10; i++) {
       text+= i+"*"+ch+"=" +i*ch+ "<br>";
        
    }
    document.getElementById("result").innerHTML=text;
    
}