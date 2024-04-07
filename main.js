import './styles/main.scss'
import lightModeIcon from '/images/light_mode.svg'
import darkModeIcon from '/images/dark_mode.svg'
import githubDark from '/images/social/github-mark-dark.svg'
import githubLight from '/images/social/github-mark-light.svg'
import discordDark from '/images/social/discord-mark-dark.svg'
import discordLight from '/images/social/discord-mark-light.svg'
import background from '/images/gab_orange.png'

document.querySelector('#app').innerHTML = `
<div id="content">
  <h2 id="url">https://iupiew.xyz</h2>  
    <div class="dark-mode-buttons">
      <div id="bar">
        <button class="dark-mode-button" id="dark-mode-on"><img src="${darkModeIcon}" width="24" height="24" title="Dark mode"></button>
        <button class="dark-mode-button" id="dark-mode-off"><img src="${lightModeIcon}" width="24" height="24" title="Light mode"></button>
        <a class="link" id="dark-mode-on" href="https://github.com/iupiew"><img src="${githubDark}" width="24" height="24" title="Github"></a>
        <a class="link" id="dark-mode-off" href="https://github.com/iupiew"><img src="${githubLight}" width="24" height="24" title="Github"></a>
        <a class="link" id="dark-mode-on" href="https://discord.com/users/1105489561309675673"><img src="${discordDark}" width="24" height="24" title="Discord"></a>
        <a class="link" id="dark-mode-off" href="https://discord.com/users/1105489561309675673"><img src="${discordLight}" width="24" height="24" title="Discord"></a>
      </div>
    </div> 
  
  </div> 
  <a id="source-code" href="https://github.com/iupiew/source">Source</a>
<div> 


`


const cls = document.body.classList;
const getSessionTheme = sessionStorage.getItem("theme");
if (getSessionTheme === "dark") {
  cls.toggle("dark-mode", true);
  const background = background_white;
} else if (getSessionTheme === "light") {
  cls.toggle("dark-mode", false);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  cls.toggle("dark-mode", true);
}

document.getElementById("dark-mode-on").addEventListener("click", function(e) {
  cls.toggle("dark-mode", true);
  sessionStorage.setItem("theme", "dark");
});
document.getElementById("dark-mode-off").addEventListener("click", function(e) {
  cls.toggle("dark-mode", false);
  sessionStorage.setItem("theme", "light");
});

// JQuery for th intro..

(function() {
  var words = ["Hello", "Welcome!"],
    i = 0;
  setInterval(function() {
    $('#words').fadeOut(function() {
      $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
    });
  }, 3000)
})();

// Bacground slitscan
var img = new Image();
img.onload = start;
img.src = background;

function start() {

  var canvas = document.querySelector("canvas");
  var ctx = canvas.getContext("2d");
  var clientX = 0;
  var clientY = 0;

  canvas.addEventListener("mousemove", function(evt) {
    clientX = evt.clientX / canvas.width;
    clientY = evt.clientY / canvas.height;
  });

  function mix(a, b, l) {
    return a + (b - a) * l;
  }

  function upDown(v) {
    return Math.sin(v) * 0.5 + 0.5;
  }

  function render(time) {
    time *= 0.0005;

    resize(canvas);

    var t1 = time;
    var t2 = time * 0.37;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // for each line in the canvas
    for (var dstY = 0; dstY < canvas.height; ++dstY) {

      // v is value that goes 0 to 1 down the canvas
      var v = dstY / canvas.height;

      // compute some amount to offset the src
      var off1 = Math.sin((v + clientX) * mix(3, 12, upDown(t1))) * 100;
      var off2 = Math.sin((v + clientY) * mix(3, 12, upDown(t2))) * 200;
      var off = off1 + off2;

      // compute what line of the source image we want
      // NOTE: if off = 0 then it would just be stretching
      // the image down the canvas.
      var srcY = dstY * img.height / canvas.height + off;

      // clamp srcY to be inside the image
      srcY = Math.max(0, Math.min(img.height - 1, srcY));

      // draw a single line from the src to the canvas
      ctx.drawImage(
        img,
        0, srcY, img.width, 1,
        0, dstY, canvas.width, 1);
    }

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  function resize(canvas) {
    var width = canvas.clientWidth;
    var height = canvas.clientHeight;
    if (width != canvas.width || height != canvas.height) {
      canvas.width = width;
      canvas.height = height;
    }
  }
}
