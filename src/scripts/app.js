//PROJECT OVERVIEW SHOW AND HIDE
function show(id) {
    document.getElementById(id).style.display = "block";
}
function hide(id) {
    document.getElementById(id).style.display = "none";
}

//Typing Effect
const TypeWriter = function(txtElement,words,wait = 5000){
    this.txtElement = txtElement;
    this.words = words; 
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting = false;
}

    //Type Method
    TypeWriter.prototype.type = function(){
        //Current index of word
        const current = this.wordIndex % this.words.length;
        //Get full text of current
        const fullTxt = this.words[current];

        if(this.isDeleting){
            //Remove Char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            //Add Char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }


        //Insert txt into element
        this.txtElement.innerHTML = `<span class="pointer">${this.txt}</span>`;

        //Initial Type Speed
        typeSpeed = 300;

        if(this.isDeleting){
            typeSpeed /= 2;
        }

        if(!this.isDeleting && this.txt === fullTxt){
            //Makes pause at end
            typeSpeed = this.wait;
            if( fullTxt == this.words[0]){
                document.querySelector(".contact-txt").innerHTML += ".";
            }
            if( fullTxt == this.words[1]){
                document.querySelector(".contact-txt").innerHTML += "..";
            }
            if( fullTxt == this.words[2]){
                document.querySelector(".contact-txt").innerHTML += "...";
            }
           
            document.querySelector(".pointer").style.animationName = "pointer-blink-stop";
            //Set delete to true
            this.isDeleting = true;
        }else if(this.isDeleting && this.txt === ''){
            this.isDeleting = false;
              // Move to next word
      this.wordIndex++;
            this.typeSpeed = 500;
        }

 
        setTimeout(()=> this.type(), typeSpeed)
    }


   
    //Init on DOM Load
document.addEventListener("DOMContentLoaded",init);
    //Init App
function init(){
    const txtElement = document.querySelector(".contact-txt");
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    //Initialize Typewriter
    new TypeWriter(txtElement,words,wait)
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



//ABOUT
const abouttl = new TimelineMax();
//Effects
abouttl.from("#about", 2, {
    opacity: 0,
    y: -100
});
//Trigger Scenes
const aboutScene1 = new ScrollMagic.Scene({
    triggerElement: "#about-trigger"
})
    .setTween(abouttl)
    .addTo(controller)


//HOW DO I WORK
const processtl = new TimelineMax();
const processtl2 = new TimelineMax();
//Effects
processtl .from("#design-process", 1, {
    opacity: 0,
    x: -100
});
processtl2 .from("#development-process", 1, {
    opacity: 0,
    x: 100
});
//Trigger Scenes
const processScene1 = new ScrollMagic.Scene({
    triggerElement: "#design-process-trigger"
})
    .setTween(processtl )
    .addTo(controller)
const processScene2 = new ScrollMagic.Scene({
    triggerElement: "#development-process-trigger"
})
    .setTween(processtl2)
    .addTo(controller)

    
//INTRODUCTION   
const introtl = new TimelineMax();
//Effects
introtl.from("#introduction-information", 3, {x:400,opacity: 0});
introtl.from("#introduction-information2", 3, {x:400,opacity: 0}, '=-2');
introtl.from("#introduction-information3", 3, {x:400,opacity: 0}, '=-2');
introtl.from("#introduction-information4", 3, {opacity: 0}, '=-2');
//Trigger Scenes
const introScene1 = new ScrollMagic.Scene({
    triggerElement: "#introduction-information-trigger"
})
    .setTween(introtltl)
    .addTo(controller)




