let guess_btn = document.getElementById("g_btn");
let result = document.getElementById("result");
guess_btn.addEventListener('click', gameResult);

// game guess main function here
function gameResult() {
    let random_num = Math.ceil(Math.random()*10);
    console.log(random_num);
    for (let i = 0; i < 3; i++) {
        let user_num = parseInt(prompt("Please enter guess number!"));
        if (random_num == user_num) {
            result.innerText = "You Win";
            break;
        } else {
            if (i == 2) {
                console.log("You lose!");
                result.innerText = "You lose!";
            }
            else if (random_num < user_num) {
                alert("Correct answer is smaller!")
            } else if (random_num > user_num) {
                alert("Correct answer is greater!")
            } 
        }
    }
}