/* hamburger menu */
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});



/* countdown*/

// Set the date we're counting down to
var countDownDate = new Date("Jun 22, 2019 11:00:00").getTime();


  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  
  document.getElementById("countdown").innerHTML = days + " dagen ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = " ";
  }
;


//scroll menu down

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-3.25em";
  }
}

//iframes

function createIframe(){
  var i = document.createElement("iframe");
 
  i.src = "https://maps.google.com/maps?width=100%&height=500&hl=nl&q=Parking%20Rijnkaai%2C%20Rijnkaai%2C%20Antwerpen+(Parking%20Rijkaai)&ie=UTF8&t=&z=16&iwloc=B&output=embed";
  i.scrolling = "auto";
  i.frameborder = "0";
  i.width = "500px";
  i.height = "350px";
  document.getElementById("iframe-rijnkaai").appendChild(i);
};



function createIframe2(){
  var j = document.createElement("iframe");
  j.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.530442378769!2d4.407268615316004!3d51.22772513893473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f656ccf867e5%3A0x63e608b5279b8e3b!2sQ-Park+Godefriduskaai!5e0!3m2!1snl!2sbe!4v1554842545461!5m2!1snl!2sbe";
  j.scrolling = "auto";
  j.frameborder = "0";
  j.width = "500px";
  j.height = "350px";
  document.getElementById("iframe-q-park").appendChild(j);
};


// Check for browser support of event handling capability
if (window.addEventListener)
window.addEventListener("load", createIframe, false);
else if (window.attachEvent)
window.attachEvent("onload", createIframe);
else window.onload = createIframe;

if (window.addEventListener)
window.addEventListener("load", createIframe2, false);
else if (window.attachEvent)
window.attachEvent("onload", createIframe2);
else window.onload = createIframe2;





