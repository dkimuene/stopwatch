function init(){

    let minute = "00";
    let second = 0;
    let centisecond = 0;
    let Interval;



    const minuteElement = document.getElementById("minute");
    const secondElement = document.getElementById("second");
    const centisecondElement = document.getElementById("centisecond");
    const startBtn = document.getElementById("start");
    const stopBtn = document.getElementById("stop");
    const resetBtn = document.getElementById("reset");

    centisecondElement.textContent = "0"+centisecond;
    secondElement.textContent = "0"+second+".";
    minuteElement.textContent = "" + minute+":"

    startBtn.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer,10)};
    stopBtn.onclick = function(){clearInterval(Interval)};
    resetBtn.onclick = function(){
        clearInterval(Interval);
        minute = 0;
        second = 0;
        centisecond = 0;
        centisecondElement.textContent = "0"+centisecond;
    secondElement.textContent = "0"+second+".";
    minuteElement.textContent = "0" + minute+":"
    };

    function startTimer() {

            centisecond++;
            if(centisecond<=9){
                centisecondElement.textContent = "0"+centisecond;
            }

            if(centisecond >9){
                centisecondElement.textContent = centisecond;
            }
            if(centisecond > 99){
                second++;
                secondElement.textContent ="0"+second+".";
                centisecond=0
                centisecondElement.textContent = "0"+centisecond;
            }
            
            if(second > 9){
                secondElement.textContent = second+".";
            }
            if(second > 59){
               minute++;
               minuteElement.textContent = "0"+minute+":"
               second=0
               secondElement.textContent = "0"+second+".";
            }

            if(minute>9){
                minuteElement.textContent = minute+":"
            } 
    }

    function stopTimer(){
        setInterval(clearInterval)
        
    }
    function resetTimer(){
        setInterval(clearInterval)
        console.log("reset");
        start=false;
        centisecond=0
        second=0
        minute=0
        centisecondElement.textContent = centisecond;
        secondElement.textContent = second+".";
        minuteElement.textContent = minute+":"
    }

}

window.addEventListener("load", init)

