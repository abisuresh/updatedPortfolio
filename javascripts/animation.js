
document.body.onload= typing;

// https://stackoverflow.com/questions/20823767/welcome-screen-before-website-loads-click-to-enter-splash-screen
$('.enterWebsite').click(function(){
    // $(".introPage").fadeOut("normal", function(){
    //     $(this).remove();
    // });
    $(this).parent("#test").fadeOut(500);
    $(".introPage").removeClass("splash").addClass("postSplash");
    $(".homePage").removeClass("postSplash").addClass("splash");
    let index =0;
    runCarousel(index);
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

//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_tabs
// https://stackoverflow.com/questions/1601933/how-do-i-stop-a-web-page-from-scrolling-to-the-top-when-a-link-is-clicked-that-t
// were helpful in figuring out how to move between
//html pages

function openPage(pageName){
    let i,pageContent, pages, homePageContent;
    pageContent = document.getElementsByClassName("pageContent");

    for(i =0; i < pageContent.length; i++){
        pageContent[i].style.display = "none";
    }
    // pages = document.getElementsByClassName("pages");
    // for(i=0; i < pages.length; i++){
    //     pages[i].className= pages[i].className.replace(" active", "");
    // }

    // if(pageName==="home"){
    //     document.getElementById(pageName).style.display="none";
    // }else{
    //
    // }

    document.getElementById(pageName).style.display="block";
    this.event.preventDefault();
    // this.event.stopPropagation();
    // this.event.currentTarget.className += " active";

}

// "http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php"

function setValues(){

}
function runCarousel(index){
    let imageIndex = index;
    let i;
    let images = document.getElementsByClassName("Feature");
    let placeMarks = document.getElementsByClassName("dot");
    for(i=0; i < images.length; i++){
        images[i].style.display ="none";
    }

    for(i=0; i < placeMarks.length; i++){
        placeMarks[i].className = placeMarks[i].className.replace(" active", "");
    }
    imageIndex++;
    if(imageIndex> images.length){
        imageIndex= 1;
    }
    images[imageIndex-1].style.display = "block";
    placeMarks[imageIndex-1].className += " active";
    // setTimeout(runCarousel, 3000);
    setTimeout(function(){
        runCarousel(imageIndex);
    }, 4000);
}

function submitForm(){


}

function moveSlide(){
    let i, imageIndex;
}

function selectedSlide(currentSlide){

}
