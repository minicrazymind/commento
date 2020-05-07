let vowels = ["a", "e", "i", "o", "u", "y"];
let consnts = ["q", "w", "r", "t", "p", "s", "d" ,"f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
let letters = ["a", "e", "i", "o", "u", "y", "q", "w", "r", "t", "p", "s", "d" ,"f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
let capLet = ["Q", "E", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D" ,"F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
let colors = ["Tomato", "AliceBlue", "Azure", "CornflowerBlue", "DeepSkyBlue", "FloralWhite", "GhostWhite", "LightBlue", "LightCyan", "LightSkyBlue", "PaleTurquoise", "PowderBlue", "RoyalBlue", "SkyBlue", "SteelBlue", "White", "WhiteSmoke", "Silver", "DeepPink", "Fuchsia", "HotPink", "Ivory", "HoneyDew", "LavenderBlush", "LightPink", "LightCoral", "Pink", "PaleVioletRed", "Violet"];

let presets = ["HAHAHAHA ", "Oh, my goodnesss ", "But I still don't get it ", "I literally can't rn xD ", "LOL XD ", "That's pretty funny, 5/7", "DID YOU JUST", "OMG IM SCREAMING", "bruh", "same", "But is that the whole story?", "4/20 blaze it ", "IM DEAD", "Laughs in laughing", "Wow really? No way.", "Sure, whatever you say", "Why are we friends again?", "That's a yikes from me bro", "I'm stealing this post", "Still a better love story than Twilight", "This guy gets it", "uwu", "owo", "I'm telling", "I like that, and I respect that", "Hmmmmm", "i cri evertim", "nice", "Haha get it cuz the chicken doesn't have any hands", "@"+generateName() + " you seeing this?", "It be like that sometimes", "Absolute mad lad", "Username checks out", "No.", "This post made me commit sudoku", "ZOOWEEMAMA!", "Ayyyyyyy", "relatable", "Absolutely disgusting", "I guess...", "A small price to pay for salvation", "That's deep", "A fellow of culture I see", "What?", "It exists and it confuses me", "*you're", "**yourr''ee'r'r'er", "*yurrr", "I wish this was real", "The law requires that I answer \"no\"", "i understood this immediately"];
let pAttack = ["Yo @", "@", "Hey @", "Wow @", "Oh my goodness @", "I can't believe you @"];
let pResponse = [" I didn't think you were this kind of person.", " did you really just say that?", " I totally agree", " needs a life", " reported.", " did you even consider my feelings!?", " we're not friends anymore", " I don't know you", " that's pretty funny"];

let randWords = ["which reminds me of this one time, ", "I walked down a long cobblestone road, ", "and that's when I met " + generateName() + ", ", generateName() + " and I decided that it was too late ", "it was all in good fun of course. ", "I looked up at the burning orange sky, ", "we went fishing for hours, it was a good time, ",  generateName() + " thought it was a good idea to keep going, ", "so we drove across the country, taking few stops, ", "I pressed on, believing that if I kept going, I would be rewarded, ", "the coffee shop around the corner was quaint and served delicious pastries, ", "but of course I couldn't stay forever, so I didn't worry too much about it. ", "I grilled so many burgers and hot dogs that even I lost count, ", "we stopped by the homeless person who told us the secret to life was hidden in the color \"pink\", ", "of course, I found it quite silly, ", "I could feel the wind gently caress my body, ", "my hands were still a little sticky from the pastry I had earlier ", "I liked that me and " + generateName() + " wore matching clothing. ", "that night I would see the most beautiful night sky, you should've been there, " , "the flowers blossomed quite nicely, I especially liked the red ones, ", "I remembered a story from a couple years ago, ", "maybe there's a moral to my story, that's for you to figure out. ", generateName() + " told me a wonderful story, I ought to share it with you guys. ", "the smell of coffee in the air reminded me of my childhood, "];



var postButton = document.getElementById("post-button");
var darkButton = document.getElementById("dark-button");
//Buttons will now trigger functions
postButton.addEventListener("click", post);
darkButton.addEventListener("click", darkPost);
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
  var frenNum = Math.floor(Math.random() * 8) + 2;


  if(document.getElementById("name-input").value == "EVERYONE KNOWS") {
    darkBGColor();
    for (let i = 0; i < frenNum; i++) {
      darkFriend();
    }
  }
  else {
    changeBGColor();
    for (let i = 0; i < frenNum; i++) {
      makeFriend();
    }
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

  //0 - 70 gives presets, 71 - 80 copy pasta, 81-90 personal attack, 91 - 100 random anecdote
  let commentType = Math.floor(Math.random() * 100);

  //Preset comment
  if(commentType <= 70) {
    output = presets[Math.floor(Math.random() * presets.length)];
  }

  //Copy pasta the post
  else if(commentType > 70 && commentType <= 80) {
    output = "I can't believe you just said \"" +  document.getElementById("post-input").value + "\"";
  }

  //Personal attack
  else if(commentType > 80 && commentType <= 90) {
    output = pAttack[Math.floor(Math.random() * pAttack.length)] + document.getElementById("name-input").value + pResponse[Math.floor(Math.random() * pResponse.length)];
  }

  //Generate random anecdote
  else {
    let numWords = Math.floor(Math.random() * 10) + 5;

    for(let i = 0; i < numWords; i++) {
      output = output + randWords[Math.floor(Math.random() * randWords.length)];
    }
  }

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






///THESE ARE JUST ALL THE SAME FUNCTIONS BUT DARK COLOR/////



function darkBGColor() {
  let background = document.body;
  background.style.backgroundImage = "linear-gradient(45deg, black, red, black, red, black)";

  background.style.backgroundPosition = "center";
  background.style.backgroundSize = "cover";
  background.style.backgroundRepeat = "no-repeat";
  background.style.backgroundAttachment = "fixed";
}

function darkPost() {
  //Name
  var currPostId = "post" + postNum;

  var newDiv = document.createElement("DIV"); //Create new <div> element
  newDiv.id = currPostId; //give id to div

  newDiv.style.backgroundColor = "red"; //give bg color to div
  newDiv.style.padding = "10px";
  newDiv.style.borderRadius = "15px"
  newDiv.className += "singlePost";
  document.getElementById("posts").appendChild(newDiv); //add to contentGrid

  //Profile picture
  var image = document.createElement("IMG");   //Create an <img> element
  image.src = "data/prof.jpg";     //Image
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
    darkComment();
  }




  postNum = postNum + 1;
}




function darkComment() {
  //Name
  var currPostId = "post" + postNum;
  var currComId = "comment" + commentNum;
  commentNum = commentNum + 1;

  var newDiv = document.createElement("DIV"); //Create new <div> element
  newDiv.id = currComId; //give id to div

  //New Div for comment
  newDiv.style.backgroundColor = "red"; //give bg color to div
  newDiv.style.padding = "10px";
  newDiv.style.borderRadius = "15px"
  newDiv.className += "singleComment";
  document.getElementById("posts").appendChild(newDiv); //add to contentGrid

  //Profile picture
  var image = document.createElement("IMG");   //Create an <img> element
  image.src = "data/prof.jpg"     //Image
  image.className += "profilePic";
  document.getElementById(currComId).appendChild(image);  // Append Image to our div

  //Username
  var username = document.createElement("H1");  //Create an <h1> element
  username.innerHTML = "DON'T CARE";
  username.className += "username";
  document.getElementById(currComId).appendChild(username);     // Append Header to our div

  var para = document.createElement("P"); //Create a <p> element
  para.innerHTML = "HAHAHAHA"; //Insert text
  para.className += "postText";
  document.getElementById(currComId).appendChild(para); //Apend to block

}



function darkFriend() {
  //Name
  var currFrenId = "friend" + friendNum;
  friendNum = friendNum + 1;

  var newDiv = document.createElement("DIV"); //Create new <div> element
  newDiv.id = currFrenId; //give id to div

  //New Div for comment
  newDiv.style.backgroundColor = "black"; //give bg color to div
  newDiv.style.padding = "10px";
  newDiv.style.borderRadius = "15px"
  newDiv.className += "friendBlock";
  document.getElementById("friendsList").appendChild(newDiv); //add to contentGrid


  //Profile picture
  var image = document.createElement("IMG");   //Create an <img> element
  image.src = "data/prof.jpg"      //Image
  image.className += "profilePic";
  document.getElementById(currFrenId).appendChild(image);  // Append Image to our div

  //Username
  var username = document.createElement("H1");  //Create an <h1> element
  username.innerHTML = "FAKE FAKE";
  username.className += "usernameFren";
  document.getElementById(currFrenId).appendChild(username);     // Append Header to our div


  var para = document.createElement("P"); //Create a <p> element
  para.innerHTML = "offline"; //Insert text
  para.className += "postText";
  document.getElementById(currFrenId).appendChild(para); //Apend to block

}
