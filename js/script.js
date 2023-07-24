$(document).ready(function(){
    const date = new Date();
    const hour = date.getHours();
    let message = '';
    if(hour<=12){
        message = "Good Morning,";
    }
    if(hour>=12){
        message = "Good Afternoon,"
    }
    if(hour>=17){
        message = "Good Evening,";
    }
    $('#MorningText').empty().append(message + " I'm Chivon");
})