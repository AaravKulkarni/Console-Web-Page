function set(){
    var Number1= document.getElementById("n1").value;
    console.log("First number is "+Number1);
    var Number2= document.getElementById("n2").value;
    console.log("Second number is "+Number2);
    var SquareRoot1= Math.sqrt(Number1);
    console.log("Square root of "+Number1+" is "+SquareRoot1)
    var Root= Math.sqrt(Number2);
    console.log("Square root of "+Number2+" is "+Root);
    var Cube1= Math.cbrt(Number1);
    console.log("Cube root of "+Number1+" is "+Cube1);
    var Cube2= Math.cbrt(Number2);
    console.log("Cube root of "+Number2+" is "+Cube2);
}