//PROJECT OVERVIEW SHOW AND HIDE
function show(id) {
    document.getElementById(id).style.display = "block";
}
function hide(id) {
    document.getElementById(id).style.display = "none";
}
//Scroll Magic and TweenMax
const controller = new ScrollMagic.Controller();
//DHVSU OVERVIEW
const dhvsutl = new TimelineMax();
const dhvsutl2 = new TimelineMax();
//Effects
dhvsutl.from("#project-overview-dhvsu", .5, {
    opacity: 1
});
dhvsutl2.from("#project-overview-dhvsu-images", 2, {
    opacity: 0,
    y: -100
});
//Trigger Scenes
const dhvsuScene1 = new ScrollMagic.Scene({
    triggerElement: "#project-overview-dhvsu-trigger"
})
    .setTween(dhvsutl)
    .addTo(controller)
const dhvsuScene2 = new ScrollMagic.Scene({
    triggerElement: "#project-overview-dhvsu-image-trigger"
})
    .setTween(dhvsutl2)
    .addTo(controller)
//UNIVERSE OVERVIEW
const universetl = new TimelineMax();
const universetl2 = new TimelineMax();
//Effects
universetl.from("#project-overview-universe", .5, {
    opacity: 1
});
universetl2.from("#project-overview-universe-images", 2, {
    opacity: 0,
    y: -100
});
//Trigger Scenes
const universeScene1 = new ScrollMagic.Scene({
    triggerElement: "#project-overview-universe-trigger"
})
    .setTween(universetl)
    .addTo(controller)
const universeScene2 = new ScrollMagic.Scene({
    triggerElement: "#project-overview-universe-image-trigger"
})
    .setTween(universetl2)
    .addTo(controller)
//GAMING PC OVERVIEW
const gamingPctl = new TimelineMax();
const gamingPctl2 = new TimelineMax();
//Effects
gamingPctl.from("#project-overview-gaming-pc", .5, {
    opacity: 1
});
gamingPctl2.from("#project-overview-gaming-pc-images", 2, {
    opacity: 0,
    y: -100
});
//Trigger Scenes
const gamingPcScene1 = new ScrollMagic.Scene({
    triggerElement: "#project-overview-gaming-pc-trigger"
})
    .setTween(gamingPctl)
    .addTo(controller)
const gamingPcScene2 = new ScrollMagic.Scene({
    triggerElement: "#project-overview-gaming-pc-images-trigger"
})
    .setTween(gamingPctl2)
    .addTo(controller)
//BMI CALCULATOR OVERVIEW
const bmiCalculatortl = new TimelineMax();
const bmiCalculatortl2 = new TimelineMax();
//Effects
bmiCalculatortl.from("#project-overview-bmi-calculator", .5, {
    opacity: 1
});
bmiCalculatortl2.from("#project-overview-bmi-calculator-images", 2, {
    opacity: 0,
    y: -100
});
//Trigger Scenes
const bmiCalculatorScene1 = new ScrollMagic.Scene({
    triggerElement: "#project-overview-bmi-calculator-trigger"
})
    .setTween(bmiCalculatortl)
    .addTo(controller)
const bmiCalculatorScene2 = new ScrollMagic.Scene({
    triggerElement: "#project-overview-bmi-calculator-images-trigger"
})
    .setTween(bmiCalculatortl2)
    .addTo(controller)


