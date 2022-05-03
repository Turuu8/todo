const input = document.getElementsByTagName("input")[0];

const clear = document.getElementById("clear");

const search = document.getElementById("search")

const text = document.getElementById("text")

input.addEventListener("keypress" , (event) =>{
    for (let i = 0; i < input.value.length; i++) {
        if(event.keyCode === 13){
            var c = input.value;
            input.value = ""
            console.log(c);
            text.style.display = "block"
            text.textContent = c
        }
    }
})














// input.addEventListener("keypress" , (event)=>{
//     // if (event.keyCode = 13) {
//     //     input.value = ""
//     // }
//     console.log(input.value);
//     // while (event.keyCode = 13) {
//     //     input.value += c;
//     //     console.log(input.value);
//     // }

// })

// function keep(){if (input.keyCode = 13) {
//     input.value  = ""
// }}
// search.addEventListener("keypress" , (event) => {
//     keep();
// })

