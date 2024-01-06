import './styles/main.scss'
import lightModeIcon from '/images/light_mode.svg'
import darkModeIcon from '/images/dark_mode.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <div class="dark-mode-buttons">
      <button class="dark-mode-button" id="dark-mode-on"><img src="${darkModeIcon}" width="24" height="24" alt="Dark mode" aria-label="dark mode toggle" title="Dark mode"></button>
      <button class="dark-mode-button" id="dark-mode-off"><img src="${lightModeIcon}" width="24" height="24" alt="Light mode" aria-label="light mode toggle" title="Light mode"></button>
    </div>
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