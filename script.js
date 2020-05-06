let vowels = ["a", "e", "i", "o", "u", "y"];
let consnts = ["q", "w", "r", "t", "p", "s", "d" ,"f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
let letters = ["a", "e", "i", "o", "u", "y", "q", "w", "r", "t", "p", "s", "d" ,"f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
let capLet = ["Q", "E", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D" ,"F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
let colors = ["Tomato", "AliceBlue", "Azure", "CornflowerBlue", "DeepSkyBlue", "FloralWhite", "GhostWhite", "LightBlue", "LightCyan", "LightSkyBlue", "PaleTurquoise", "PowderBlue", "RoyalBlue", "SkyBlue", "SteelBlue", "White", "WhiteSmoke", "Silver", "DeepPink", "Fuchsia", "HotPink", "Ivory", "HoneyDew", "LavenderBlush", "LightPink", "LightCoral", "Pink", "PaleVioletRed", "Violet"];

let presets = ["HAHAHAHA ", "Oh, my goodnesss ", "But I still don't get it ", "I literally can't rn xD ", "LOL XD ", "That's pretty funny, 5/7", "DID YOU JUST", "OMG IM SCREAMING", "bruh", "same", "But is that the whole story?", "4/20 blaze it ", "IM DEAD", "Laughs in laughing", "Wow really? No way.", "Sure, whatever you say", "Why are we friends again?", "That's a yikes from me bro", "I'm stealing this post", "Still a better love story than Twilight", "This guy gets it", "uwu", "owo"];
let randWords = [];



var postButton = document.getElementById("post-button");
//Buttons will now trigger functions
postButton.addEventListener("click", post);

//Counter variables for posts, comments, and friends
let postNum = 1;
let commentNum = 1;
let friendNum = 1;

let postInputBar = document.getElementById("post-input");

// postInputBar.setAttribute("width", "50");
// postInputBar.setAttribute("height", "20");

startup();

//All functions that run on startup
function startup() {
  changeBGColor();

  var frenNum = Math.floor(Math.random() * 8) + 2;

  for (let i = 0; i < frenNum; i++) {
    makeFriend();
  }

}


function changeBGColor() {
  let background = document.body;
  let luckyNum = Math.floor(Math.random() * 6) + 2; //Number of colors in bg

  let bgOutput = "linear-gradient(45deg";

  //Pull some random colors from array
  for (let i = 0; i < luckyNum; i++) {
    let randColor = colors[Math.floor(Math.random() * colors.length)];
    // console.log(randColor);
    bgOutput = bgOutput + " ,";
    bgOutput = bgOutput + randColor;


  }

  bgOutput = bgOutput + ")";

  background.style.backgroundImage = bgOutput;

  //Styling the gradient to look good and cover the whole background
  background.style.backgroundPosition = "center";
  background.style.backgroundSize = "cover";
  background.style.backgroundRepeat = "no-repeat";
  background.style.backgroundAttachment = "fixed";

}

//Creaets random name
function generateName() {
  let output = ""; //Final output
  let luckyNum = Math.floor(Math.random() * 8); //Number of letters in name


  //Gets first two letters of name (random letters)
  output = output + capLet[Math.floor(Math.random() * capLet.length)];
  output = output + letters[Math.floor(Math.random() * letters.length)];

  //Proceeds to have a vowel consonant vowel consonant pattern
  for(let i = 0; i < luckyNum; i++) {
    if(i%2 == 0) {
      output = output + vowels[Math.floor(Math.random() * vowels.length)];
    }
    else {
      output = output + consnts[Math.floor(Math.random() * consnts.length)];
    }
  }

  return output;
}



function post() {
  //Name
  var currPostId = "post" + postNum;

  var newDiv = document.createElement("DIV"); //Create new <div> element
  newDiv.id = currPostId; //give id to div

  newDiv.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; //give bg color to div
  newDiv.style.padding = "10px";
  newDiv.style.borderRadius = "15px"
  newDiv.className += "singlePost";
  document.getElementById("posts").appendChild(newDiv); //add to contentGrid

  //Profile picture
  var image = document.createElement("IMG");   //Create an <img> element
  image.src = "https://picsum.photos/200";     //Image
  image.className += "profilePic";
  document.getElementById(currPostId).appendChild(image);  // Append Image to our div

  //Name
  var username = document.createElement("H1");  //Create an <h1> element
  username.innerHTML = document.getElementById("name-input").value; //Insert name
  username.className += "username";
  document.getElementById(currPostId).appendChild(username);     // Append Header to our div

  var para = document.createElement("P"); //Create a <p> element
  para.innerHTML = document.getElementById("post-input").value; //Insert text
  para.className += "postText";
  document.getElementById(currPostId).appendChild(para); //Apend to block


  //Gets a random number of comments
  var commentNum = Math.floor(Math.random() * 4) + 2;

  for (let i = 0; i < commentNum; i++) {
    comment();
  }




  postNum = postNum + 1;
}




function comment() {
  //Name
  var currPostId = "post" + postNum;
  var currComId = "comment" + commentNum;
  commentNum = commentNum + 1;

  var newDiv = document.createElement("DIV"); //Create new <div> element
  newDiv.id = currComId; //give id to div

  //New Div for comment
  newDiv.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; //give bg color to div
  newDiv.style.padding = "10px";
  newDiv.style.borderRadius = "15px"
  newDiv.className += "singleComment";
  document.getElementById("posts").appendChild(newDiv); //add to contentGrid

  //Profile picture
  var image = document.createElement("IMG");   //Create an <img> element
  image.src = "https://picsum.photos/" + Math.floor(Math.random() * 500);     //Image
  image.className += "profilePic";
  document.getElementById(currComId).appendChild(image);  // Append Image to our div

  //Username
  var username = document.createElement("H1");  //Create an <h1> element
  username.innerHTML = generateName() + " " + generateName(); //Insert name
  username.className += "username";
  document.getElementById(currComId).appendChild(username);     // Append Header to our div

  var para = document.createElement("P"); //Create a <p> element
  para.innerHTML = generateComment(); //Insert text
  para.className += "postText";
  document.getElementById(currComId).appendChild(para); //Apend to block

}


function generateComment() {
  let output = "";

  output = presets[Math.floor(Math.random() * presets.length)];


  return output;
}



function makeFriend() {
  //Name
  var currFrenId = "friend" + friendNum;
  friendNum = friendNum + 1;

  var newDiv = document.createElement("DIV"); //Create new <div> element
  newDiv.id = currFrenId; //give id to div

  //New Div for comment
  newDiv.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; //give bg color to div
  newDiv.style.padding = "10px";
  newDiv.style.borderRadius = "15px"
  newDiv.className += "friendBlock";
  document.getElementById("friendsList").appendChild(newDiv); //add to contentGrid


  //Profile picture
  var image = document.createElement("IMG");   //Create an <img> element
  image.src = "https://picsum.photos/" + Math.floor(Math.random() * 500);     //Image
  image.className += "profilePic";
  document.getElementById(currFrenId).appendChild(image);  // Append Image to our div

  //Username
  var username = document.createElement("H1");  //Create an <h1> element
  username.innerHTML = generateName() + " " + generateName(); //Insert name
  username.className += "usernameFren";
  document.getElementById(currFrenId).appendChild(username);     // Append Header to our div


  var para = document.createElement("P"); //Create a <p> element
  para.innerHTML = "online"; //Insert text
  para.className += "postText";
  document.getElementById(currFrenId).appendChild(para); //Apend to block

}
