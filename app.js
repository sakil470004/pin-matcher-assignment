const genarteText = document.getElementById("genarte-text");
const textShowBox = document.getElementById("text-show-box");
const notifyWrongPassText = document.querySelector(".notify-wrong-pass");
const notifyRightPassText = document.querySelector(".notify-right-pass");

const generateBtn = document.querySelector(".generate-btn");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");
const button6 = document.querySelector(".button6");
const button7 = document.querySelector(".button7");
const button8 = document.querySelector(".button8");
const button9 = document.querySelector(".button9");
const button0 = document.querySelector(".button0");
const buttonC = document.querySelector(".buttonC");
const buttonBacksapce = document.querySelector(".button-backsapce");
const submitBtn = document.querySelector(".submit-btn");


 function  setRandomNumber() {
    let randomNumber = Math.floor((Math.random() * 8999) + 1000);
    genarteText.value = randomNumber;
    
}

function button1Work(){
    var textValue = textShowBox.value
    if(textValue==null){
        textValue= "1";
    }else {
        textValue=textValue+"1"
    }
    textShowBox.value=textValue;
}
function button2Work(){
    var textValue = textShowBox.value
    if(textValue==null){
        textValue= "2";
    }else {
        textValue=textValue+"2"
    }
    textShowBox.value=textValue;
}
function button3Work(){
    var textValue = textShowBox.value
    if(textValue==null){
        textValue= "3";
    }else {
        textValue=textValue+"3"
    }
    textShowBox.value=textValue;
}

function button4Work(){
    var textValue = textShowBox.value
    if(textValue==null){
        textValue= "4";
    }else {
        textValue=textValue+"4"
    }
    textShowBox.value=textValue;
}

function button5Work(){
    var textValue = textShowBox.value
    if(textValue==null){
        textValue= "5";
    }else {
        textValue=textValue+"5"
    }
    textShowBox.value=textValue;
}

function button6Work(){
    var textValue = textShowBox.value
    if(textValue==null){
        textValue= "6";
    }else {
        textValue=textValue+"6"
    }
    textShowBox.value=textValue;
}

function button7Work(){
    var textValue = textShowBox.value
    if(textValue==null){
        textValue= "7";
    }else {
        textValue=textValue+"7"
    }
    textShowBox.value=textValue;
}

function button8Work(){
    var textValue = textShowBox.value
    if(textValue==null){
        textValue= "8";
    }else {
        textValue=textValue+"8"
    }
    textShowBox.value=textValue;
}

function button9Work(){
    var textValue = textShowBox.value
    if(textValue==null){
        textValue= "9";
    }else {
        textValue=textValue+"9"
    }
    textShowBox.value=textValue;
}

function button0Work(){
    var textValue = textShowBox.value
    if(textValue==null){
        textValue= "0";
    }else {
        textValue=textValue+"0"
    }
    textShowBox.value=textValue;
}

function buttonCWork(){
    var textValue = textShowBox.value
    if(textValue!=null){
        textValue=""
    }
    textShowBox.value=textValue;
    
}

function buttonBacksapceWork(){
    var textValue = textShowBox.value
    if(textValue==null){
        
    }else {
       textValue= textValue.substring(0, textValue.length - 1);
    }
    textShowBox.value=textValue;
}

function submitBtnWork(){
    let ganarateTextPassword =genarteText.value;
    let yourTypeTextPassword=textShowBox.value;
    if(ganarateTextPassword!=null && ganarateTextPassword==yourTypeTextPassword){
            notifyRightPassText.style.display="block";
            notifyWrongPassText.style.display="none";
    }else{
        notifyRightPassText.style.display="none";
        notifyWrongPassText.style.display="block";
    }
}





generateBtn.addEventListener("click", setRandomNumber)
button1.addEventListener("click", button1Work)
button2.addEventListener("click", button2Work)
button3.addEventListener("click", button3Work)
button4.addEventListener("click", button4Work)
button5.addEventListener("click", button5Work)
button6.addEventListener("click", button6Work)
button7.addEventListener("click", button7Work)
button8.addEventListener("click", button8Work)
button9.addEventListener("click", button9Work)
button0.addEventListener("click", button0Work)
buttonC.addEventListener("click", buttonCWork)
buttonBacksapce.addEventListener("click", buttonBacksapceWork)
submitBtn.addEventListener("click", submitBtnWork)


