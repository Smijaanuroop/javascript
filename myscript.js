function display() {
    var text="";
    var ch=Number(document.getElementById("demo1").value)
    switch (ch) {
        case 1:text="case1 match";
            
            break;

         case 2:text="case2 match";
            
            break;    
    
        default: text="no match";
            break;
    }
    document.getElementById("result").innerHTML=text;
    document.getElementById("demo2").value=text;
    
}