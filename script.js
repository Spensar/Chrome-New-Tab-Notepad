//Intial Run
date_time();
load();

//Runs every often to update the information
setInterval(function(){
    date_time();
    save();
    //document.getElementById("textBox").onchange = function() {save()};
},
1000);

//Sets the date, time, and Morning/Afternoon
function date_time(){
    var info = new Date();
    //Date
    var date = info.toLocaleDateString('en-US', {getUTCDate: 'numeric'});
    //console.log(date);
    document.getElementById("date").innerHTML = date;

    //Day of week
    var dayofweek = info.getDay();
    var dayArray = {0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday"}
    //console.log(dayArray[dayofweek]);
    document.getElementById("dayofweek").innerHTML = dayArray[dayofweek];

    //Time
    var time = info.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    //console.log(time);
    document.getElementById("time").innerHTML = time;

    //Morning/Afternoon
    if(time.slice(-2) == 'AM'){
        //console.log('Morning');
        document.getElementById("ampm").innerHTML = "Morning!"
    }
    else{
        //console.log('Afternoon');
        document.getElementById("ampm").innerHTML = "Afternoon!"
    }
}

function load(){
    //console.log("Checking for any changes")
    var tester = localStorage.getItem("TB");
    console.log(tester);
    document.getElementById("textBox").innerHTML = tester;
}

document.getElementById("textBox").addEventListener("input", save);

function save(){
    var test = document.getElementById("textBox").value ;
    localStorage.setItem("TB", test);
    document.getElementById("textBox").innerHTML = localStorage.getItem("TB");
    //console.log(test);
}
