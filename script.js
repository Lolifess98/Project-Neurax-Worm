var happyImages = [
    "https://images.lifealth.com/uploads/2018/03/commitments-to-make-if-you-want-to-be-happy.jpg", 
   
];
var sadImages = ["https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Sad_Emoji_large.png?v=1542436016","https://i.pinimg.com/originals/b2/79/66/b27966140db68d0621628f2309f8a443.gif","https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/630x315/format/jpg/quality/85/http%3A%2F%2Fi.huffpost.com%2Fgen%2F4082068%2Fimages%2Fn-VIOLENCE-WOMEN-628x314.jpg"];
var tiredImages = ["https://gkng5olag22mpz1r551iq1dd-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/feeling-tired-2560x1280.jpg","https://media3.giphy.com/media/NWg7M1VlT101W/giphy.gif","https://media.self.com/photos/57d88ab246d0cb351c8c4cef/4:3/w_728,c_limit/always-tired-feat.jpeg"];
var hungryImages = ["","https://media.tenor.com/images/f85c932039fc7e45c6c1f946502a5f2b/tenor.gif","http://clipart-library.com/img/419107.jpg","https://i.ytimg.com/vi/ySNTW8jZT-s/maxresdefault.jpg" ];
var ohMood;
var impossibleMood;
var aaaaMood;
var easterMood;
var YunoMood;
$('button').click(function(){
    var mood = $('input').val();
    var input = $('input').val();
    $(".images").html("");
  if(input === "happy") { 
      happyMood();   
    } else if(input==="sad") {
      sadMood();  
    }
    else if(input==="angry"){
      angryMood();
     }
    else if(input==="confused"){
      confusedMood();
     } else if(input==="tired"){
      tiredMood();
     } else if(input==="hungry"){
      hungryMood();
      }else if(input==="average"){
      averageMood();
    }else if(input==="OH GOD NO"){
      ohMood();
    }
     else if (input==="AAAAAAAAAAAAAA") {
    aaaaMood();
    
    }
    else if(input==="impossible"){
      impossibleMood();
    }
    
    else if(input==="easteregg"){
      easterMood();
    }
    else if(input==="Yuno Gasai"){
      YunoMood();
    }
    
    
    
    else{
     alert("Error! Please type out a known feeling.");   
    }
  
   
});




function changeTextColor(color){
    $('body').css('color', color);
}


function displayImage(image){
    $('.images').append('<img src ='+ image + '>');

}

function changeBackgroundcolor(color){
    console.log("hello");
    $('body').css('background-color', color);
}

function changeTextColor(color){
}

function displayImages(images){
  
}

function changeText(p) {
$("p").text(p);
}



function happyMood(){
changeBackgroundcolor("pink");
changeText("Sometimes, happpines comes from ignorace.");

$(".images").html("");
displayImage("https://images.lifealth.com/uploads/2018/03/commitments-to-make-if-you-want-to-be-happy.jpg");
}





function sadMood(){
changeBackgroundcolor("blue");
changeText("Don't let it win, it's only a challenge to overcome.");

$(".images").html("");
displayImage("https://scontent-lga3-1.cdninstagram.com/vp/02d94cdc4c9a7b401f3aa65721f920f9/5D6950D0/t51.2885-15/e35/c2.0.715.715a/s480x480/42448651_2137131212977121_645420098898785958_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com");    
}

function angryMood(){
changeBackgroundcolor("red");
changeText("Let it go, but not at anyone. Even your friends.");

$(".images").html("");
displayImage("http://www.kzwafm.com/wp-content/uploads/sites/6/2017/04/bomb-clipart-171-bomb-clipart-1864_1864.jpg");    
}

function confusedMood(){
changeBackgroundcolor("gray");
changeText("Yes, you may not understand, but at least confusion isn't negativity. Wait.. is it? Now I'm confused.");

$(".images").html("");
displayImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/26a479c4-486a-41a1-8d5a-30a3769b104d/dcvkq01-0cb438c7-9151-4bfb-b138-54fb6ad94887.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI2YTQ3OWM0LTQ4NmEtNDFhMS04ZDVhLTMwYTM3NjliMTA0ZFwvZGN2a3EwMS0wY2I0MzhjNy05MTUxLTRiZmItYjEzOC01NGZiNmFkOTQ4ODcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.P6eHhCdfRAMVsJqSi8Z4VBYPvexU_hML_z58a9PLF7k");    
}


function averageMood() {
changeBackgroundcolor("white");
changeText("Why did you resort to a parasite for this mood? Just any watch youtube gamer, then you'll feel average.");
$(".images").html("");
displayImage("https://live.staticflickr.com/5217/5471047557_4dc13f5376.jpg");    
}

function tiredMood(){
changeBackgroundcolor("#000080");
changeText("Help Me. My bed is at help123!");
changeTextColor("white");
$(".images").html("");
displayImage("https://www.ikea.com/us/en/images/products/utaker-stackable-bed-with-mattresses__0534587_PE649177_S4.JPG"); 
}
function hungryMood(){
changeBackgroundcolor("#800000");
changeText("GIVE ME FOOD DA-I mean.. please.");
displayImage("https://media1.giphy.com/media/R6oW8JAJxqRxe/giphy.gif?cid=790b76115ce538e96f6572494de8506f&rid=giphy.gif");    
}

function ohMood() {
changeBackgroundcolor("#FF00FF");
changeText("TIME FOR YUKARI'S TRAIN!");
displayImage("https://raikou2.donmai.us/0d/42/__yakumo_yukari_touhou_drawn_by_luko__0d42d4c433c7669c1f37943507d69cb1.jpg");    
}

function impossibleMood() {
changeBackgroundcolor("orange");
displayImage("https://vignette.wikia.nocookie.net/impossible-quiz/images/1/1f/Q50.png/revision/latest?cb=20140819012531");
changeText("Remember this! You'll never know when you need it.");
}


function aaaaMood() {
changeBackgroundcolor("orange");
changeText("Um.. we said type in a mood, not SMASH YOUR KEYBOARD WITH A DAMN HAMMER.");
}

function easterMood() {
changeBackgroundcolor("yellow");
displayImage("https://images-na.ssl-images-amazon.com/images/I/61VML6hujhL._SY450_.jpg");
changeText("Oh,you.");
}

function YunoMood() {
changeBackgroundcolor("pink");
displayImage("https://66.media.tumblr.com/831a2b904e01396ea94249b64dbdf5b6/tumblr_pbo0jsBeUZ1x93do8o1_400.gif");
changeText("Congratulations. You found the true mood to feel, and found her! You win!");
}


$(".happy").click(function() {
changeBackgroundcolor("pink");
displayImage("https://raikou2.donmai.us/0d/42/__yakumo_yukari_touhou_drawn_by_luko__0d42d4c433c7669c1f37943507d69cb1.jpg");
});


$(".sad").click(function() {
changeBackgroundcolor("blue");
displayImage("");
});



$(".angry").click(function() {
changeBackgroundcolor("red");
displayImage("");
});

$(".confused").click(function() {
changeBackgroundcolor("grey");
displayImage("");
});

$(".average").click(function() {
changeBackgroundcolor("white");
displayImage("");
});

$(".OH GOD NO").click(function() {
changeBackgroundcolor("#FF00FF");
displayImage("https://raikou2.donmai.us/0d/42/__yakumo_yukari_touhou_drawn_by_luko__0d42d4c433c7669c1f37943507d69cb1.jpg");
});

$(".impossible").click(function() {
changeBackgroundcolor("orange");
displayImage("https://vignette.wikia.nocookie.net/impossible-quiz/images/1/1f/Q50.png/revision/latest?cb=20140819012531");
});

$(".AAAAAAAAAAAAAA").click(function() {
changeBackgroundcolor("orange");

});

$(".easteregg").click(function() {
changeBackgroundcolor("yellow");
changeText("Oh,you.");
});

$(".Yuno Gasai").click(function() {
changeBackgroundcolor("pink");
changeText("Congratulations.You found the true mood to feel, and found her! You win!");
displayImage("https://66.media.tumblr.com/831a2b904e01396ea94249b64dbdf5b6/tumblr_pbo0jsBeUZ1x93do8o1_400.gif");
});

//https://66.media.tumblr.com/831a2b904e01396ea94249b64dbdf5b6/tumblr_pbo0jsBeUZ1x93do8o1_400.gif

