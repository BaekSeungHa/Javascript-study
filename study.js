const button = document.querySelector('button')

let interId;
interId = setInterval(function(){
    console.log("Hello")
}, 1000)
console.log(interId)

button.addEventListener("click", function(){
    clearInterval(interId)
})