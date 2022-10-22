function calculateBMR() 
{
    let age = parseFloat(document.getElementById("age").value);
    //console.log(age);
    let weight = parseFloat(document.getElementById("weight").value);
    //console.log(weight);
    let height = parseFloat(document.getElementById("height").value);
    //console.log(hight);
    let gender = parseFloat(document.getElementById("gender").value);
    console.log(gender);
    let BMR = 0;
    // Male
    if (gender == 0) 
    {  BMR = maleBMR(age,weight,height);  
       document.getElementById("result").innerHTML = Math.round((BMR)) + "กิโลแคลอรี่";
    
}
// Female
    else
    //(gender == 1) 
    {
       BMR = parseFloat(femaleBMR(age,weight,height));
        document.getElementById("result").innerHTML = Math.round((BMR)) + "กิโลแคลอรี่";
   
    }    
   
    function maleBMR(age,weight,height)
{
    let BMR = 66 + (13.7 * weight) + (5 * height) - (6.8 * age)
    return BMR; 
}
function femaleBMR(age,weight,height)
{
    let BMR = 665 + (9.6 * weight) + (1.8 * height) - (4.7 * age)
    return BMR;
}
   
   
}






       
