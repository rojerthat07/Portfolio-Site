dhvsuProject = document.getElementById("dhvsuProject");
navigation = document.getElementById("navigation");

function show() {
    dhvsuProject.style.display = "block";

}

function hide() {
    dhvsuProject.style.display = "none";
}


//Scroll Magic and TweenMax
const tl = new TimelineMax();
const tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from("#project__overview--introduction", .5, {
    opacity: 1
});
tl2.from("#project__overview--images", 2, {
    opacity: 0,
    y: -50
});

const scene1 = new ScrollMagic.Scene({
    triggerElement: "#project__overview--introduction-trigger"
})
    .setTween(tl)
    .addTo(controller)
const scene2 = new ScrollMagic.Scene({
    triggerElement: "#project__overview--image-trigger"
})
    .setTween(tl2)
    .addTo(controller)



function updatePercentage() {
    tl.progress();
}