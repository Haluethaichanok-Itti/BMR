function calculateBMR() 
{
    let age = parseInt(document.getElementById("age").value);
    //console.log(age);
    let weight = parseInt(document.getElementById("weight").value);
    //console.log(weight);
    let height = parseInt(document.getElementById("height").value);
    //console.log(hight);
    let gender = parseInt(document.getElementById("gender").value);
    console.log(gender);
    let BMR = 0;
    // Male
    if (gender == 0) 
    {  BMR = parseInt(maleBMR(age,weight,height));  
       document.getElementById("result").innerHTML = parseInt(BMR) + "กิโลแคลอรี่";
    
}
// Female
    else
    //(gender == 1) 
    {
       BMR = parseInt(femaleBMR(age,weight,height));
        document.getElementById("result").innerHTML = parseInt(BMR) + "กิโลแคลอรี่";
   
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



       