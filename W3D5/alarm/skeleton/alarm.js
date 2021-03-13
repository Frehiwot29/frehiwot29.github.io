"use strict"
/**
 * 
 */
function startLoading() {
    let buttonAlarm = document.getElementById("go");
    let bodyStyel = document.getElementById("bodyPart")
    buttonAlarm.onclick = setAlarm;
    let countMin;
    let myTime;
    /**
     * 
     */
    function setAlarm() {
        let min = Number(document.getElementById("min").value);
        let sec = Number(document.getElementById("sec").value)
        myTime = setInterval(setAlarmCount, 1000);
        /**
         * 
         * @return{};
         */
        function setAlarmCount() {
            if (min === 0 && sec === 0) {
                stopAlarm()
                clearAll();
                bodyStyel.className = "bodyStyle"
                return;
            }
            else if (sec === 0) {
                min--;
                document.getElementById("sec").value = 59;
                sec = Number(document.getElementById("sec").value)
                document.getElementById("min").value = min;
            }
            document.getElementById("sec").value = sec
            sec--;
        }
    }
    /**
     * 
     */
    function clearAll() {
        document.getElementById("min").value = "";
        document.getElementById("sec").value = "";
    }

    /**
     * 
     */
    function stopAlarm() {
        clearInterval(myTime);
        clearInterval(countMin);
    }
}
/**
 * 
 */
function initlaztion() {
    window.onload = startLoading;
}

initlaztion();