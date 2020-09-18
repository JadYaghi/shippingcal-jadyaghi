const calculateButton = document.querySelector('label')
const shippingWeight = document.querySelector('input')
const shippingRateDisplay = document.querySelector('p')
const shippingRate = 10;

calculateButton.addEventListener('click',function(){
    // reading in = user input
    // data type of text field = string
    // string number boolean t/f
    // console.log(typeof(weight)) for type
    // string +
    // Numbers * + - ? arathmetics operators
    let weight = shippingWeight.value
    // console.log(weight*10)
    weight = Number(weight)
    let rate = weight * shippingRate;
    shippingRateDisplay.textContent = '$' + rate + '.00'
    shippingRateDisplay.style.fontSize = "3rem"
})

// NaN is a number, also hiccup of the language
// Typescript
