const button = document.querySelector('.submit');
const weight = document.querySelector('.container input');
const resultDOM= document.querySelector(".result")

resultDOM.textContent ="";

button.addEventListener ("click", function(e){
    e.preventDefault;  
      weightInput = weight.value;


    if (weightInput === "" || weightInput <="0"){
        resultDOM.textContent = "Please prvide a valid weight"
        setTimeout(function(){
            resultDOM.textContent ="";
        }, 4000);
    }
    else{
        const calculateWeight= function(weightInput){
            answer = (weightInput * 0.45359237).toFixed(2);
            return [answer]
        }
        result = calculateWeight(weightInput);
        resultDOM.textContent = `Your  weight in KG is ${result}`
    }
})