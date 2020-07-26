//Intial Run
date_time();
load();

//Runs every often to update the information
setInterval(function(){
    date_time();
    save();
},
1000);

//Sets the date, time, and Morning/Afternoon
function date_time(){
    var info = new Date();
    //Date
    var date = info.toLocaleDateString('en-US', {getUTCDate: 'numeric'});
    document.getElementById("date").innerHTML = date;

    //Day of week
    var dayofweek = info.getDay();
    var dayArray = {0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday"}
    document.getElementById("dayofweek").innerHTML = dayArray[dayofweek];

    //Time
    var time = info.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    document.getElementById("time").innerHTML = time;

    //Morning/Afternoon
    if(time.slice(-2) == 'AM'){
        document.getElementById("ampm").innerHTML = "Morning!"
    }
    else{
        document.getElementById("ampm").innerHTML = "Afternoon!"
    }
}

function load(){
    var tester = localStorage.getItem("TB");
    document.getElementById("textBox").innerHTML = tester;
}

document.getElementById("textBox").addEventListener("input", save);

function save(){
    //Gets value in the textBox
    var test = document.getElementById("textBox").value ;
    //Sets local storage to what is in the textbox
    localStorage.setItem("TB", test);
}

//Resizing Testing
