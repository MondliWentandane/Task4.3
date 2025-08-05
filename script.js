
//== Here I was working on allowing the slides to only show one card which the user choose using the button

document.getElementById("card1").style.display = "block";
function displayCard(cardID){
    //== First I want to make sure that the output field doesn't display
    document.getElementById("theDisplayer").style.display = "none";
    //=== Here making sure that the input filed get to be cleared
    let inputs = document.getElementsByTagName("input");
    for (let x = 0; x < inputs.length; x++) {
        inputs[x].value = "";        
    }
    for(let card of document.getElementsByClassName("card")){
        card.style.display = "none";
    }
    document.getElementById(cardID).style.display = "block";
}

//=== Now I am working on doing calculations based on the user requirements
//======= For File Transfere ====

function calcSpeed(fileSize, fileType, intSpeed, intType){
    if(fileType === "g"){
        switch (intType) {
            case "g":
                if(fileSize < intSpeed){
                    return fileSize*3;
                }else{
                    return fileSize/3;
                }
            case "m":
               return fileSize/(2+intSpeed);
            case "k":
                return fileSize/intSpeed
            default:
                break;
        }
    }else if(fileType === "m"){
        switch (intType) {
            case "g":
                return (fileSize/2)*intSpeed
            case "m":   
                if(fileSize < intSpeed){
                    return (intSpeed/2)*fileSize;
                }else{
                    return fileSize/intSpeed;
                }
            case "k":
                return (fileSize/3)*intSpeed;
            default:
                break;
        }
    }else{
        switch (intType) {
            case "g":
                return intSpeed/3;
            case "m":   
                return intSpeed/2;
            case "k":
                return fileSize*1.2;
            default:
                break;
        }
    }
}

function getSpeed(){

    //== The following line I am retreiving userValues
    let fileSizeChecker = document.getElementById("userFileSize");
    let fileSize = fileSizeChecker.value;
    let fileType = document.getElementById("userFileType").value;

    let intSpeedChecker = document.getElementById("userIntSpeed");
    let intSpeed = intSpeedChecker.value;
    let intType = document.getElementById("userIntType").value;

    //=== Checking if the user entered any value or not ====
    if(fileSize !== "" && intSpeed !== ""){
        fileSize = Number(fileSize);
        intSpeed = Number(intSpeed);
        let ansValue = calcSpeed(fileSize,fileType,intSpeed,intType);
        ansValue = ansValue.toFixed(2);
        document.getElementById("theDisplayer").innerHTML = `<strong>Outcome:</strong><br> ${ansValue}`;
       document.getElementById("theDisplayer").style.display = "block";
    }else{//== Here will only function f the user did not enter any value, the following will happen
        if(fileSize === ""){
            alert("Please choose the File Size");
            fileSizeChecker.style.border ='2px solid red';
        }
        if(intSpeed === ""){
            alert("Please give the Internet Speed")
            intSpeedChecker.style.border = '2px solid red';
        }
    }
}

//===================================== For Temperature Conversion ====================================
//== The function below is for calculating based on the user choices
function getConvertedTemp(userValue, tempFromType){
    if(tempFromType === "c"){
        return userValue*(9/5)+32;
    }else{
        return (userValue-32)*(5/9);
    }
}

//===   Below if the function that will take place if the user presses the convert button betwen 
//==   temperature types
function convertValue(){
    let userValueF = document.getElementById("userValue");
    let userValue = userValueF.value;
    let userValueType = document.getElementById("userFromType").value;
   
    if(userValue !== ""){
        userValue = Number(userValue);
        let ansValue = getConvertedTemp(userValue,userValueType);
        ansValue = ansValue.toFixed(2);
        document.getElementById("theDisplayer").innerHTML =
                       `<strong>Outcome:</strong><br> ${ansValue}`;
       document.getElementById("theDisplayer").style.display = "block";
    }else{
        alert("Please enter temperature value");
        userValueF.style.border= '2px solid red';
    }
}

//================================== For Scientific Notation Converter ===============================
// ===== The function below I am calcu;ation the scientific Value ===
function getScientificValue(userValue){

}
//==== Below is the function that will take place if the user press under Scientific convertion
function getScientificValue(){
    let userValueInp = document.getElementById("userValueSci");
    let userValue = userValueInp.value;

    if(userValue !== ""){

    }else{
        alert("Please enter value to convert...!!!")
        userValueInp.style.border= "2px solid red";
    }
}

// =================================== For Metric =================================
//==== Here I am doin a conversion identifying from which type to which one
function convertToNewMetric(userValue, fromType, toType){
    const factors = {
        gg: 1000000000,    
        mg: 1000000,       
        kl: 1000,          
        bu: 1,             
        ml: 0.001,         
        mc: 0.000001       
    };
   //=== At first I convert userValue they want to convert to be a Base Unit
    let valueInBase = userValue * factors[fromType];
    //=== Now I just work with that Base Unit easly.
    return valueInBase / factors[toType];
}   


function getNewMetric(){
    let checkField = document.getElementById("userVal");
    let userValue = checkField.value;
    let fromType = document.getElementById("fromType").value;
    let totype = document.getElementById("toType").value;

    if( userValue !== ""){
        userValue = Number(userValue);
        let ansValue = convertToNewMetric(userValue,fromType,totype);
        ansValue = ansValue.toFixed(2);
        document.getElementById("theDisplayer").innerHTML =
                       `<strong>Outcome:</strong><br> ${ansValue}`;
       document.getElementById("theDisplayer").style.display = "block";

    }else{
        checkField.style.border= "2px solid red";
        alert("Please enter the value to convert..!!!");
    }
}






