

/*generates two random numbers*/
function displayDieOne(dieNum){
    let parOne = document.getElementById("die_one");
    parOne.innerHTML = dieNum;
}
function displayDieTwo(dieNum){
    let parOne = document.getElementById("die_two");
    parOne.innerHTML = dieNum;
}

/* function to output text to 'text_display' will output whatever is typed into 'displayOutPut*/
function displayDirection(displayOutPut){
    let parOne = document.getElementById("text_display");
    parOne.innerHTML = displayOutPut;
}
/* function to add user drink input to "drink_display <p>" use for when dice 1=1,2=2,5=5,6=6*/
function drinkSubOne(){
    let drinkInputOne = document.getElementById("drinkOne").value;
    let drinkOut = document.getElementById("drink_display");
    document.getElementById("drink_display").style.visibility = 'visible';
    drinkOut.innerHTML = drinkInputOne
}
function drinkSubTwo(){
    let drinkInputTwo = document.getElementById("drinkTwo").value;
    let drinkOut = document.getElementById("drink_display");
    document.getElementById("drink_display").style.visibility = 'visible';
    drinkOut.innerHTML = drinkInputTwo
}

/*function hids drink, used for when dice 1 and 2 are not equal or 3=3, 4=4 */
function hidDrink(){
    document.getElementById("drink_display").style.visibility = 'hidden';
}

/* hides form when drinks are inputted, adds button to return form*/
function hidForm(){
    document.getElementById("formOne").style.display = "none";
    document.getElementById("hiddenButton").style.display = "block";
    alert("Your Drinks were Submitted!")
}
document.getElementById("subButton").addEventListener("click", hidForm);

/*returns form to add drinks and hides button*/
function returnForm(){
    document.getElementById("formOne").style.display = "block";
    document.getElementById("hiddenButton").style.display = "none";

}
document.getElementById("hiddenButton").addEventListener("click", returnForm)

/*executes one round when button is clicked*/
function round(){
    let randomNumA = Math.floor(Math.random() * 6) + 1;
        displayDieOne(randomNumA);
    let randomNumB = Math.floor(Math.random() * 6) + 1;
        displayDieTwo(randomNumB);
    if(randomNumA !== randomNumB){
        displayDirection("Next Player Roll");
        hidDrink();
    } else if (randomNumA === 1 && randomNumB === 1) {
        displayDirection("You Drink:");
        drinkSubOne();
    } else if (randomNumA === 2 && randomNumB === 2) {
        displayDirection("You drink:");
        drinkSubTwo();
    } else if (randomNumA === 3 && randomNumB === 3) {
        displayDirection("Make A Rule!"); 
        hidDrink();
    } else if (randomNumA === 4 && randomNumB === 4) {
        displayDirection("Roll Again"); 
        hidDrink();
    } else if (randomNumA === 5 && randomNumB === 5) {
        displayDirection("Pick Someone to Drink:"); 
        drinkSubOne();
    } else if (randomNumA === 6 && randomNumB === 6) {
        displayDirection("Pick Someone to Drink:"); 
        drinkSubTwo();
    } else {
        displayDirection("Roll again");
        hidDrink();
    }
}
document.getElementById("roll_button").addEventListener("click", round);

/*add rules*/
/*rule one*/
function postRuleOne(){
    let ruleOneInput = document.getElementById("ruleOne").value;
    let ruleOneOut = document.getElementById("ruleOneText");
    ruleOneOut.innerHTML = ruleOneInput;
    document.getElementById("ruleOneForm").style.display = "none";
    document.getElementById("ruleOneButton").style.display = "block";
}
document.getElementById("ruleButton1").addEventListener("click", postRuleOne);

function returnRuleOne(){
    document.getElementById("ruleOneForm").style.display = "block";
    document.getElementById("ruleOneButton").style.display = "none";
}
document.getElementById("ruleOneButton").addEventListener("click", returnRuleOne);

/*rule two*/
function postRuleTwo(){
    let ruleTwoInput = document.getElementById("ruleTwo").value;
    let ruleTwoOut = document.getElementById("ruleTwoText");
    ruleTwoOut.innerHTML = ruleTwoInput;
}
document.getElementById("ruleButton2").addEventListener("click", postRuleTwo);

/*rule three*/
function postRuleThree(){
    let ruleThreeInput = document.getElementById("ruleThree").value;
    let ruleThreeOut = document.getElementById("ruleThreeText");
    ruleThreeOut.innerHTML = ruleThreeInput;
}
document.getElementById("ruleButton3").addEventListener("click", postRuleThree);
/*end rules*/