var isStop =true;  //means time is currently is rest condition
var ms =0;
var s=0;
var min=0;
var hr =0;
var laps=[];


function start()
{
    if(isStop == true){
        isStop = false;
        timer();


    }
 
}

function timer()
{
    ms= parseInt(ms);   // converting into into int so that we don't face problem while adding zero in front
    s= parseInt(s);
    min= parseInt(min);
    hr= parseInt(hr);

    if(isStop==false){
        ms++;
        if(ms<100 ){  // showing zero in front
            ms= "0" + ms;
        }
        if(ms==1000){
            ms=0;
            s++;
            if(s<10){
                s="0" + s;
            }
            if(s==60){
                s=0;
                min++;
                if(min<10){
                    min="0" + min;
                }
                if(min==60){
                    min=0;
                    hr++;
                    if(hr<10){
                        hr="0" + hr;
                    }
                    if(hr==24){
                        hr=0;
                    }
                }
            }
        }
        // console.log(ms);  // to check its working or not
        stopwatch.innerHTML = hr + " : " + min + " : " + s + " : " + ms;
        setTimeout("timer()",1);   // In milliseconds
    }

}

function stop(){
    isStop=true; 
}

function reset()
{
    isStop=true;
    ms=0;
    s=0;
    min=0;
    hr=0;

    stopwatch.innerHTML="00 : 00 : 00 : 000";
    document.getElementById("laps").innerHTML = "";
    laps.length=0;
    
}
function lap(){
    if (isStop == false) {
        var lapTime = hr + " : " + min + " : " + s + " : " + ms;
        laps.push(lapTime);
        var lapText = "Lap " + laps.length + ": " + lapTime;
        var lapElement = document.createElement("div");
        lapElement.textContent = lapText;
        document.getElementById("laps").appendChild(lapElement);
    }
}