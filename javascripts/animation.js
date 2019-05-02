
document.body.onload= typing;

$('.enterWebsite').click(function(){
    // $(".introPage").fadeOut("normal", function(){
    //     $(this).remove();
    // });
    $(this).parent("#test").fadeOut(500);
    $(".introPage").removeClass("splash").addClass("postSplash");
    $(".homePage").removeClass("postSplash").addClass("splash");
});

// This website was very helpful in figuring out how to do the typing effect I wanted:
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_typewriter
let i =0;
let text = "Welcome to my portfolio website!";
let speedTyping = 100;

function typing(){
    if(i< text.length){
        document.getElementById("introText").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, speedTyping);
    }

}

// https://stackoverflow.com/questions/20823767/welcome-screen-before-website-loads-click-to-enter-splash-screen
