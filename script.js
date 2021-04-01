var menuIcon = document.querySelector('.hamburger-menu');
var itemList = document.querySelector(".item-list");
//console.log(itemList);
menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle("change");
    itemList.classList.toggle("changed");
})
var subheading = document.querySelector('.subheading');
var textContainer = document.querySelector('.text-container');
var heading = document.querySelector('.heading-top');
var headingTwo = document.querySelector('.heading-bottom');
var header = document.querySelector('.header');
const distance = textContainer.offsetTop - (subheading.offsetTop + (subheading.offsetHeight) / 2);
const distanceTwo = textContainer.offsetTop - (heading.offsetTop + heading.offsetHeight);
const distanceThree = textContainer.offsetTop - (headingTwo.offsetTop + headingTwo.offsetHeight);
window.addEventListener('scroll', function () {
    var scrolledDistance = window.scrollY;
    //console.log(scrolledDistance);
    if (window.scrollY >= distance)
        // console.log(window.scrollY);
        subheading.classList.add("black");
    else
        subheading.classList.remove("black");
    if (window.scrollY >= distanceTwo)
        heading.classList.add("black");
    else
        heading.classList.remove("black");
    if (window.scrollY >= distanceThree)
        headingTwo.classList.add("black");
    else
        headingTwo.classList.remove("black");
});
var textContent = document.querySelector('.div-text1');
var textLine = document.querySelector('.un');
//const distanceFour = textContent.offsetTop-subheading.offsetTop;
/* $(window).scroll(function(){
    if($(document).scrollTop()>=textContent.offset().top)
    $('.header').fadeOut();
 });*/
window.addEventListener('scroll', function () {
    if (window.scrollY >= (textContent.offsetTop + 150)) {
        header.classList.add("none");
        subheading.classList.add("none");
    }
    else {
        header.classList.remove("none");
        subheading.classList.remove("none");
    }
});
var scrollMarker = document.querySelector('.overlay');
var imgsTwo = document.querySelector('.imgs.two');
var imgsOne = document.querySelector('.imgs.one');
var imgsThree = document.querySelector('.imgs.three');
console.log(imgsTwo);
window.addEventListener('scroll', function () {
    // if (textContent.offsetTop<=imgs.offsetTop)
    if (window.scrollY >= /*scrollMarker.offsetHeight*/ textContainer.offsetTop) {
        document.querySelector('.left-flex').style.display="none";
        document.querySelector('.right-flex').style.display="none";
        document.querySelector('.hamburger-menu').style.backgroundColor = "#d3d3d3";
        const difference = window.scrollY -/* scrollMarker.offsetHeight*/ textContainer.offsetTop;
        //console.log(difference);
        if(window.scrollY<1.36*(imgsTwo.offsetHeight))
        document.querySelector('.two').style.transform = `translateY(${difference * -2}px)`;
        document.querySelector('.one').style.transform = `translateY(${difference * -1.4}px)`;
        document.querySelector('.three').style.transform = `translateY(${difference * -1.2}px)`;
        var textList = document.querySelector('.scroll-marker');
        if (window.scrollY >= 1.25 * (imgsTwo.offsetHeight)) {
            console.log(window.scrollY);
            document.querySelector('.second').style.color = "white";
            document.querySelector('.deux').style.backgroundColor = "white";
        }
        else{
            document.querySelector('.second').style.color = "black";
            document.querySelector('.deux').style.backgroundColor = "black";
        }
        /*if (window.scrollY >= 1.39 * (imgsTwo.offsetHeight)) {
            imgsTwo.classList.add("sticky");
        }*/
        if (window.scrollY >= 1.2971 * (imgsOne.offsetHeight)) {
            console.log(window.scrollY);
            document.querySelector('.first').style.color = "white";
            document.querySelector('.un').style.backgroundColor = "white";
        }
        else{
            document.querySelector('.first').style.color = "black";
            document.querySelector('.un').style.backgroundColor = "black";
        }
        if (window.scrollY >= 1.3166 * (imgsThree.offsetHeight)) {
            console.log(window.scrollY);
            document.querySelector('.third').style.color = "white";
            document.querySelector('.tri').style.backgroundColor = "white";
        }
        else{
            document.querySelector('.third').style.color = "black";
            document.querySelector('.tri').style.backgroundColor = "black";
        }
         textContent.classList.add("fixed");
         textLine.classList.add("fixed-mod");
         document.querySelector('.second').classList.add("fixed");
         document.querySelector('.deux').classList.add("fixed-mod");
         document.querySelector('.third').classList.add("fixed");
         document.querySelector('.tri').classList.add("fixed-mod");
         
    }
    else{
        textContent.classList.remove("fixed");
        textLine.classList.remove("fixed-mod");
        document.querySelector('.hamburger-menu').style.background = "none";
    }
});
console.log(textContent.parentElement);
var leftArrow =document.getElementById('left');
var rightArrow = document.getElementById('right');
var slideWrapper = document.querySelector('.slide-wrapper');
var leftPosition = slideWrapper.getBoundingClientRect().left;
rightArrow.addEventListener('click',function (){
    if(leftPosition>=-197.8){
    slideWrapper.style.left = `${leftPosition-49.45}vw`;
    leftPosition-=49.45;
    }
});
leftArrow.addEventListener('click',function (){
    if(leftPosition){
    slideWrapper.style.left = `${leftPosition+49.45}vw`;
    leftPosition+=49.45;
    }
});

