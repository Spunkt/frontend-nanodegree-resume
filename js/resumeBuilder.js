var name = "Sebastian Olsson";
var role = "Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
  "name" : "Sebastian",
  "role" : "Developer",
  "contacts":{
    "mobile" : "+46(0)7123456789",
    "email" : "S.Olsson91@gmail.com",
    "github" : "Spunkt",
    "twitter" : "SOlsson91",
    "location" : "Gothenburg"
  },
  "welcome-message" : "WELCOME!",
  "skills" : ["C++", "Javascript", "HTML/CSS", "Design", "Ruby", "Python"],
  "bioPic" : "images/fry.jpg"
};

var work = {
  "Skara Sommarland" : [
    {
      "title" : "Teamleader",
      "city" : "Skara",
      "time" : "Summer of 2015"
    }
  ],
  "Minalyze" : [
    {
      "title" : "Developer",
      "city" : "Gothenburg",
      "time" : 0.5
    }
  ]
};

var education = {
  "schools" : [
    {
      "name" : "University of Skövde",
      "city" : "Skövde",
      "major": "Game programming"
    }
  ]
};
