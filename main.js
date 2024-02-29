import './styles/main.scss'
import lightModeIcon from '/images/light_mode.svg'
import darkModeIcon from '/images/dark_mode.svg'
import githubDark from '/images/social/github-mark-dark.svg'
import githubLight from '/images/social/github-mark-light.svg'
import discordDark from '/images/social/discord-mark-dark.svg'
import discordLight from '/images/social/discord-mark-light.svg'

document.querySelector('#app').innerHTML = `
<div id="content">
  <h2 id="url">https://iupiew.xyz</h2>

  <div class="dark-mode-buttons">
    <button class="dark-mode-button" id="dark-mode-on"><img src="${darkModeIcon}" width="24" height="24" title="Dark mode"></button>
    <button class="dark-mode-button" id="dark-mode-off"><img src="${lightModeIcon}" width="24" height="24" title="Light mode"></button>
  </div>
  
  <h2 id="intro-text"">Hi! This is my website! Currently there is nothing here...</h2>
  
  <div id="links">

    <a class="link" id="dark-mode-on" href="https://github.com/iupiew"><img src="${githubDark}" width="42.0" height="42.0" title="Github"></a>
    <a class="link" id="dark-mode-off" href="https://github.com/iupiew"><img src="${githubLight}" width="42.0" height="42.0" title="Github"></a>

    <a class="link" id="dark-mode-on" href="https://discord.com/users/1105489561309675673"><img src="${discordDark}" width="42.0" height="42.0" title="Discord"></a>
    <a class="link" id="dark-mode-off" href="https://discord.com/users/1105489561309675673"><img src="${discordLight}" width="42.0" height="42.0" title="Discord"></a>

    
  </div>
  <a id="source-code" href="https://github.com/iupiew/source">Source</a>
<div> 
`
const cls = document.body.classList;
  const getSessionTheme = sessionStorage.getItem("theme");
  if (getSessionTheme === "dark") {
      cls.toggle("dark-mode", true);
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

 
