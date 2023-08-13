
const QuestionLink1 = document.getElementById("QuestionLink1");
const QuestionLink2 = document.getElementById("QuestionLink2");
const QuestionLink3 = document.getElementById("QuestionLink3");
const QuestionLink4 = document.getElementById("QuestionLink4");
const QuestionLink5 = document.getElementById("QuestionLink5");
const QuestionLink6 = document.getElementById("QuestionLink6");
const QuestionLink7 = document.getElementById("QuestionLink7");
const QuestionLink8 = document.getElementById("QuestionLink8");
const QuestionLink9 = document.getElementById("QuestionLink9");

const Question1 = document.getElementById("Question1");
const Question2 = document.getElementById("Question2");
const Question3 = document.getElementById("Question3");
const Question4 = document.getElementById("Question4");
const Question5 = document.getElementById("Question5");
const Question6 = document.getElementById("Question6");
const Question7 = document.getElementById("Question7");
const Question8 = document.getElementById("Question8");
const Question9 = document.getElementById("Question9");

QuestionLink1.addEventListener('click', (e) => {
    QuestionLink1.classList.add("ActiveQuestion");
    QuestionLink2.classList.remove("ActiveQuestion");
    QuestionLink3.classList.remove("ActiveQuestion");
    QuestionLink4.classList.remove("ActiveQuestion");
    QuestionLink5.classList.remove("ActiveQuestion");
    QuestionLink6.classList.remove("ActiveQuestion");
    QuestionLink7.classList.remove("ActiveQuestion");
    QuestionLink8.classList.remove("ActiveQuestion");
    QuestionLink9.classList.remove("ActiveQuestion");

    Question1.classList.remove("UnactiveQuestion");
    Question2.classList.add("UnactiveQuestion");
    Question3.classList.add("UnactiveQuestion");
    Question4.classList.add("UnactiveQuestion");
    Question5.classList.add("UnactiveQuestion");
    Question6.classList.add("UnactiveQuestion");
    Question7.classList.add("UnactiveQuestion");
    Question8.classList.add("UnactiveQuestion");
    Question9.classList.add("UnactiveQuestion");

})

QuestionLink2.addEventListener('click', (e) => {
    QuestionLink2.classList.add("ActiveQuestion");
    QuestionLink1.classList.remove("ActiveQuestion");
    QuestionLink3.classList.remove("ActiveQuestion");
    QuestionLink4.classList.remove("ActiveQuestion");
    QuestionLink5.classList.remove("ActiveQuestion");
    QuestionLink6.classList.remove("ActiveQuestion");
    QuestionLink7.classList.remove("ActiveQuestion");
    QuestionLink8.classList.remove("ActiveQuestion");
    QuestionLink9.classList.remove("ActiveQuestion");

    Question1.classList.add("UnactiveQuestion");
    Question2.classList.remove("UnactiveQuestion");
    Question3.classList.add("UnactiveQuestion");
    Question4.classList.add("UnactiveQuestion");
    Question5.classList.add("UnactiveQuestion");
    Question6.classList.add("UnactiveQuestion");
    Question7.classList.add("UnactiveQuestion");
    Question8.classList.add("UnactiveQuestion");
    Question9.classList.add("UnactiveQuestion");

})

QuestionLink3.addEventListener('click', (e) => {
    QuestionLink1.classList.remove("ActiveQuestion");
    QuestionLink2.classList.remove("ActiveQuestion");
    QuestionLink3.classList.add("ActiveQuestion");
    QuestionLink4.classList.remove("ActiveQuestion");
    QuestionLink5.classList.remove("ActiveQuestion");
    QuestionLink6.classList.remove("ActiveQuestion");
    QuestionLink7.classList.remove("ActiveQuestion");
    QuestionLink8.classList.remove("ActiveQuestion");
    QuestionLink9.classList.remove("ActiveQuestion");

    Question1.classList.add("UnactiveQuestion");
    Question2.classList.add("UnactiveQuestion");
    Question3.classList.remove("UnactiveQuestion");
    Question4.classList.add("UnactiveQuestion");
    Question5.classList.add("UnactiveQuestion");
    Question6.classList.add("UnactiveQuestion");
    Question7.classList.add("UnactiveQuestion");
    Question8.classList.add("UnactiveQuestion");
    Question9.classList.add("UnactiveQuestion");

})

QuestionLink4.addEventListener('click', (e) => {
    QuestionLink1.classList.remove("ActiveQuestion");
    QuestionLink2.classList.remove("ActiveQuestion");
    QuestionLink3.classList.remove("ActiveQuestion");
    QuestionLink4.classList.add("ActiveQuestion");
    QuestionLink5.classList.remove("ActiveQuestion");
    QuestionLink6.classList.remove("ActiveQuestion");
    QuestionLink7.classList.remove("ActiveQuestion");
    QuestionLink8.classList.remove("ActiveQuestion");
    QuestionLink9.classList.remove("ActiveQuestion");

    Question1.classList.add("UnactiveQuestion");
    Question2.classList.add("UnactiveQuestion");
    Question3.classList.add("UnactiveQuestion");
    Question4.classList.remove("UnactiveQuestion");
    Question5.classList.add("UnactiveQuestion");
    Question6.classList.add("UnactiveQuestion");
    Question7.classList.add("UnactiveQuestion");
    Question8.classList.add("UnactiveQuestion");
    Question9.classList.add("UnactiveQuestion");

})

QuestionLink5.addEventListener('click', (e) => {
    QuestionLink1.classList.remove("ActiveQuestion");
    QuestionLink2.classList.remove("ActiveQuestion");
    QuestionLink3.classList.remove("ActiveQuestion");
    QuestionLink4.classList.remove("ActiveQuestion");
    QuestionLink5.classList.add("ActiveQuestion");
    QuestionLink6.classList.remove("ActiveQuestion");
    QuestionLink7.classList.remove("ActiveQuestion");
    QuestionLink8.classList.remove("ActiveQuestion");
    QuestionLink9.classList.remove("ActiveQuestion");

    Question1.classList.add("UnactiveQuestion");
    Question2.classList.add("UnactiveQuestion");
    Question3.classList.add("UnactiveQuestion");
    Question4.classList.add("UnactiveQuestion");
    Question5.classList.remove("UnactiveQuestion");
    Question6.classList.add("UnactiveQuestion");
    Question7.classList.add("UnactiveQuestion");
    Question8.classList.add("UnactiveQuestion");
    Question9.classList.add("UnactiveQuestion");

})

QuestionLink6.addEventListener('click', (e) => {
    QuestionLink1.classList.remove("ActiveQuestion");
    QuestionLink2.classList.remove("ActiveQuestion");
    QuestionLink3.classList.remove("ActiveQuestion");
    QuestionLink4.classList.remove("ActiveQuestion");
    QuestionLink5.classList.remove("ActiveQuestion");
    QuestionLink6.classList.add("ActiveQuestion");
    QuestionLink7.classList.remove("ActiveQuestion");
    QuestionLink8.classList.remove("ActiveQuestion");
    QuestionLink9.classList.remove("ActiveQuestion");

    Question1.classList.add("UnactiveQuestion");
    Question2.classList.add("UnactiveQuestion");
    Question3.classList.add("UnactiveQuestion");
    Question4.classList.add("UnactiveQuestion");
    Question5.classList.add("UnactiveQuestion");
    Question6.classList.remove("UnactiveQuestion");
    Question7.classList.add("UnactiveQuestion");
    Question8.classList.add("UnactiveQuestion");
    Question9.classList.add("UnactiveQuestion");

})

QuestionLink7.addEventListener('click', (e) => {
    QuestionLink1.classList.remove("ActiveQuestion");
    QuestionLink2.classList.remove("ActiveQuestion");
    QuestionLink3.classList.remove("ActiveQuestion");
    QuestionLink4.classList.remove("ActiveQuestion");
    QuestionLink5.classList.remove("ActiveQuestion");
    QuestionLink6.classList.remove("ActiveQuestion");
    QuestionLink7.classList.add("ActiveQuestion");
    QuestionLink8.classList.remove("ActiveQuestion");
    QuestionLink9.classList.remove("ActiveQuestion");

    Question1.classList.add("UnactiveQuestion");
    Question2.classList.add("UnactiveQuestion");
    Question3.classList.add("UnactiveQuestion");
    Question4.classList.add("UnactiveQuestion");
    Question5.classList.add("UnactiveQuestion");
    Question6.classList.add("UnactiveQuestion");
    Question7.classList.remove("UnactiveQuestion");
    Question8.classList.add("UnactiveQuestion");
    Question9.classList.add("UnactiveQuestion");


})

QuestionLink8.addEventListener('click', (e) => {
    QuestionLink1.classList.remove("ActiveQuestion");
    QuestionLink2.classList.remove("ActiveQuestion");
    QuestionLink3.classList.remove("ActiveQuestion");
    QuestionLink4.classList.remove("ActiveQuestion");
    QuestionLink5.classList.remove("ActiveQuestion");
    QuestionLink6.classList.remove("ActiveQuestion");
    QuestionLink7.classList.remove("ActiveQuestion");
    QuestionLink8.classList.add("ActiveQuestion");
    QuestionLink9.classList.remove("ActiveQuestion");

    Question1.classList.add("UnactiveQuestion");
    Question2.classList.add("UnactiveQuestion");
    Question3.classList.add("UnactiveQuestion");
    Question4.classList.add("UnactiveQuestion");
    Question5.classList.add("UnactiveQuestion");
    Question6.classList.add("UnactiveQuestion");
    Question7.classList.add("UnactiveQuestion");
    Question8.classList.remove("UnactiveQuestion");
    Question9.classList.add("UnactiveQuestion");
})

QuestionLink9.addEventListener('click', (e) => {
    QuestionLink1.classList.remove("ActiveQuestion");
    QuestionLink2.classList.remove("ActiveQuestion");
    QuestionLink3.classList.remove("ActiveQuestion");
    QuestionLink4.classList.remove("ActiveQuestion");
    QuestionLink5.classList.remove("ActiveQuestion");
    QuestionLink6.classList.remove("ActiveQuestion");
    QuestionLink7.classList.remove("ActiveQuestion");
    QuestionLink8.classList.remove("ActiveQuestion");
    QuestionLink9.classList.add("ActiveQuestion");

    Question1.classList.add("UnactiveQuestion");
    Question2.classList.add("UnactiveQuestion");
    Question3.classList.add("UnactiveQuestion");
    Question4.classList.add("UnactiveQuestion");
    Question5.classList.add("UnactiveQuestion");
    Question6.classList.add("UnactiveQuestion");
    Question7.classList.add("UnactiveQuestion");
    Question8.classList.add("UnactiveQuestion");
    Question9.classList.remove("UnactiveQuestion");

})







//*Question Number 4
const testDemoHeading = document.getElementById("testDemoHeading");
//! this line of code change the inner text of h1, Hello to Hello World
testDemoHeading.innerHTML = "Hello World";


//*Question Number 5
let FunctionalityHeading = document.getElementById("FunctionalityHeading");
let changeHeadingBtn = document.getElementById("changeHeadingBtn");
changeHeadingBtn.addEventListener('click', ()=>{
    FunctionalityHeading.innerText = "Welcome to Elevation academy";
})

//*Question Number 6
const Test6 = document.getElementsByClassName("Test6");
Test6[0].setAttribute("style", "color: red");
Test6[0].setAttribute("id", "heading");

//*Question Number 7
const FlexContainer = document.getElementById("Flex-Container");
const ChangeDirection = document.getElementById("ChangeDirection");
ChangeDirection.addEventListener('click', (e)=>{
    FlexContainer.classList.add("FlexColumn");
})

//*Question Number 9
let hourLabel = document.getElementById("hourLabel");
let minLabel = document.getElementById("minLabel");
let secLabel = document.getElementById("secLabel");
let AMPMLabel = document.getElementById("AMPM");
function Clock(){
    let newDate = new Date();
    let newHour = newDate.getHours();
    let newMin = newDate.getMinutes();
    let newSec = newDate.getSeconds();
    let AMPM = "AM"
    if(newHour > 12){
        newHour -= 12;
        AMPM = "PM"
    }
     hourLabel.innerText = newHour;
    minLabel.innerText = newMin;
    secLabel.innerText = newSec;
    AMPMLabel.innerText = AMPM;
}
setInterval(Clock, 1000);