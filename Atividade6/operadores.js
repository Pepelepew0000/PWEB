register=()=>{
    var n1= document.getElementById("num1").value
    var n2= document.getElementById("num2").value
    show_values(n1,n2)
}

show_values=(number1,number2)=>{
    alert(number1)
    alert(number2)
}

calculate=()=>{
    var n1= parseFloat(document.getElementById("num1").value)
    var n2= parseFloat(document.getElementById("num2").value)
    alert(n1+n2)
    alert(n1-n2)
    alert(n1*n2)
    alert(n1/n2)
    alert(n1%n2)
}

