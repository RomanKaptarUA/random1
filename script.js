const button = document.getElementById('btn')
button.addEventListener('click', () => {
    let seconds = 0;
    let timerId = setInterval(function() {
        seconds ++;
        console.log(seconds);
    

    if(seconds === 20){
        clearInterval(timerId)
    }
}, 1000)
})


