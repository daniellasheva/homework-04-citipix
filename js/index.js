$(function(){

//$(document).ready(changePic()){
  $("#submit-btn").click(changePic);
//});

var city;

function changePic(event) {
  event.preventDefault();
  city=$("#city-type").val();

  if (city == "austin" || city =="Austin"){
    //background should be set equal to austin.jpg
    $("body").css("background", "url(images/austin.jpg)");
  }
  else if (city == "LA" || city =="Los Angeles"){
    //background should be set equal to austin.jpg
    $("body").css("background", "url(images/la.jpg)");
  }
  else if (city == "NYC" || city =="New York City"){
    //background should be set equal to austin.jpg
    $("body").css("background", "url(images/nyc.jpg)");
  }
  else if (city == "sf" || city =="San Francisco" || city=="san fran"){
    //background should be set equal to austin.jpg
    $("body").css("background", "url(images/sf.jpg)");
  }
  else if (city == "Sydney"){
    //background should be set equal to austin.jpg
    $("body").css("background", "url(images/sydney.jpg)");
  }
}




  }); 


//Call $.val() on inputs to get the string value of your user's input
//Store user input in var city
//Use $.on(submit) or $.click to figure out when the user clicks the "submit" button
//Create if / else if / else conditionals to control the flow of your application
//Write at least six different lines of pseudocode and display them inline as JavaScript comments
//Prevent a form submission using the event.preventDefault() function
//Use the $.ready() handler to delay your code from executing until all DOM assets have been loaded
//Use the || operator in your conditionals to allow for multiple string values to execute if/else if statement code