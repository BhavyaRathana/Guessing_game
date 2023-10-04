let btn=document.getElementById('btn');
let output=document.getElementById('output text')

let number=[Math.floor(Math.random()*10)]
btn.addEventListener('click',function(){
    let input=document.getElementById('user input').value;
    if(input==number){
        output.innerHTML="congrats 😍 you guessed right!!!"
    }else if(input<number){
        output.innerHTML="you guessed too low😒";
    };
    if(input>number){
        output.innerHTML="you guessed too high😯";
    }
});