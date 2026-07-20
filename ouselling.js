// =========================
// FAQ ACCORDION
// =========================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
  question.addEventListener("click", () => {

    const answer = question.nextElementSibling;

    document.querySelectorAll(".faq-answer")
    .forEach(item => {

        if(item !== answer){
            item.style.maxHeight = null;
            item.style.padding = "0 22px";
        }

    });

    if(answer.style.maxHeight){
        answer.style.maxHeight = null;
        answer.style.padding = "0 22px";
    }else{
        answer.style.maxHeight =
        answer.scrollHeight + "px";

        answer.style.padding =
        "20px 22px";
    }

});

  
 });

// =========================
// TESTIMONIAL SLIDER
// =========================

const testimonials =
document.querySelectorAll(".testimonial");

let testimonialIndex = 0;

function showTestimonial(index){ 


  testimonials.forEach(item => {
    item.classList.remove("active");
});

testimonials[index].classList.add("active");

  }

function nextTestimonial(){

  testimonialIndex++;

if(
    testimonialIndex >= testimonials.length
){
    testimonialIndex = 0;
}

showTestimonial(testimonialIndex);

  }

setInterval(nextTestimonial, 5000);

// =========================
// SCROLL REVEAL
// =========================

const reveals =
document.querySelectorAll(
".service-card,.why-card,.step,.safe-content,.safe-image,.testimonial,.faq-item,.request-form,.section-title"
);
const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},

{
threshold:0.15
}

);

reveals.forEach(item=>{

item.classList.add("reveal");

observer.observe(item);

});

// =========================
// FORM VALIDATION
// =========================

const form =
document.querySelector(".request-form form");

if(form){

form.addEventListener(
"submit",
function(e){

e.preventDefault();

const inputs =
form.querySelectorAll(
"input, textarea, select"
);

let valid = true;

inputs.forEach(input=>{

if(
input.value.trim() === ""
){

valid = false;

input.style.border =
"2px solid red";

}else{

input.style.border =
"2px solid transparent";

}

});

if(valid){

alert(
"Counseling request submitted successfully."
);

form.reset();

}else{

alert(
"Please complete all required fields."
);

}

});
}

// =========================
// HERO BUTTON RIPPLE
// =========================

const buttons =
document.querySelectorAll(
".primary-btn,.secondary-btn"
);

buttons.forEach(button=>{

button.addEventListener(
"mouseenter",
()=>{

button.style.transform =
"translateY(-4px)";

});

button.addEventListener(
"mouseleave",
()=>{

button.style.transform =
"translateY(0)";

});

});

// =========================
// COUNTER ANIMATION
// OPTIONAL
// =========================

function animateValue(
element,
start,
end,
duration
){

let startTime = null;

function animation(currentTime){

if(!startTime){

startTime = currentTime;

}

const progress =
Math.min(
(currentTime - startTime)
/ duration,
1
);

element.textContent =
Math.floor(
progress * (end - start)

* start
    );

if(progress < 1){

requestAnimationFrame(animation);

}

}

requestAnimationFrame(animation);

}

// =========================
// PARALLAX HERO
// =========================

window.addEventListener(
“scroll”,
()=>{

const hero =
document.querySelector(”.gc-hero”);

if(hero){

let offset =
window.pageYOffset;

hero.style.backgroundPositionY =
offset * 0.5 + “px”;

}

});

// =========================
// SMOOTH ACTIVE NAVIGATION
// =========================

const links =
document.querySelectorAll(
‘a[href^=”#”]’
);

links.forEach(link=>{

link.addEventListener(
“click”
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute(“href”)
);

if(target){

target.scrollIntoView({

behavior:“smooth”

});

}

});

});

// =========================
// FLOATING EFFECT FOR CARDS
// =========================

const cards =
document.querySelectorAll(
“.service-card”
);

cards.forEach(card=>{

card.addEventListener(
“mousemove”,
(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

card.style.transform =
perspective(1000px) rotateX(${-(y - rect.height/2)/20}deg) rotateY(${(x - rect.width/2)/20}deg) translateY(-10px);

});

card.addEventListener(
“mouseleave”,
()=>{

card.style.transform =
“translateY(0)”;

});

});

// =========================
// PAGE LOADER FADE IN
// =========================

window.addEventListener(
“load”,
()=>{

document.body.style.opacity = “1”;

});

// =========================
// START
// =========================

showTestimonial(0);

console.log(
“Guidance & Counseling Loaded Successfully”
);

One more thing: your HTML uses Font Awesome icons (fas fa-cross, fas fa-heart, etc.). Add this inside your main page <head>:


  
  