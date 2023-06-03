let guess_btn = document.getElementById("g_btn");
let result = document.getElementById("result");
guess_btn.addEventListener('click', gameResult);

// game guess main function here
function gameResult() {
    let correcr_ans = (Math.ceil(Math.random()*10));
    for (let i = 0; i < 3; i++) {
        let user_num = parseInt(prompt("Please enter guess number from 1 to 10!"));
        if (correcr_ans == user_num) {
            result.innerText = "You Win";
            break;
        } else {
            if (i == 2) {
                result.innerText = `You lose! Correct answer is ${correcr_ans}`;
            }
            else if (correcr_ans < user_num) {
                alert("Correct answer is smaller!")
            } else if (correcr_ans > user_num) {
                alert("Correct answer is greater!")
            } 
        }
    }
}