import './styles/main.scss'
import lightModeIcon from '/images/light_mode.svg'
import darkModeIcon from '/images/dark_mode.svg'

document.querySelector('#app').innerHTML = `
<div id="content">
  <h2 id="url">https://iupiew.xyz</h2>

  <div class="dark-mode-buttons">
    <button class="dark-mode-button" id="dark-mode-on"><img src="${darkModeIcon}" width="24" height="24" alt="Dark mode" aria-label="dark mode toggle" title="Dark mode"></button>
    <button class="dark-mode-button" id="dark-mode-off"><img src="${lightModeIcon}" width="24" height="24" alt="Light mode" aria-label="light mode toggle" title="Light mode"></button>
  </div>
  
  <h2 id="intro-text"">Hi! This is my website! Currently there is nothing here...</h2>
  
  <div id="links">
    <a id="link" href="https://linkedin.com/in/vasiliyo">Linkedin</a>
    <a id="link" href="https://github.com/iupiew">Github</a>
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

 
