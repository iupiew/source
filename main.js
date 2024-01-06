import './styles/main.scss'
import lightModeIcon from '/images/light_mode.svg'
import darkModeIcon from '/images/dark_mode.svg'

document.querySelector('#app').innerHTML = `
  <div>

    <div class="dark-mode-buttons">
      <button class="dark-mode-button" id="dark-mode-on"><img src="${darkModeIcon}" width="24" height="24" alt="Dark mode" aria-label="dark mode toggle" title="Dark mode"></button>
      <button class="dark-mode-button" id="dark-mode-off"><img src="${lightModeIcon}" width="24" height="24" alt="Light mode" aria-label="light mode toggle" title="Light mode"></button>
    </div>
    <svg  class="svg-el" height="100" width="100%">
    <circle cx="50%" cy="50%" r="30" fill="none" />
    </svg> 
    <h2>Hi! My name is Basil.</h2>
    <p style="padding: 1em;">I write code. Developing solutions using Python & Javascript with interests in automation and Web3. </p>
    <p class="read-the-docs">
      Here are some links for you to explore:
    </p>
    <p>See my CV <a id="cv-link" href="https://nftstorage.link/ipfs/bafkreie4tekhykiidmxagz6k4bzviu4ep7nogmlcuwfpti6hmvwp6gi3cq">here</a></p>
    <div id="social">
    <a href="https://www.linkedin.com/in/vasiliyo" target="_blank">Linkedin</a>
    <a href="https://github.com/iupiew" target="_blank">Github</a>
    </div>
    <svg height="35" width="100%" class="svg-el">
  <line x1="25%" y1="10" x2="75%" y2="10" />
  <line x1="35%" y1="20" x2="65%" y2="20" />
  <line x1="45%" y1="30" x2="55%" y2="30" />
</svg>
  </svg>
  
  </div>
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