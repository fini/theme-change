function themeToggle() {
  var toggleEl = document.querySelector("[data-toggle-theme]");
  (function (theme = localStorage.getItem("theme")) {
    if (localStorage.getItem("theme")) {
      document.querySelector("[data-theme-root='true']").setAttribute("data-theme", theme);
      if (toggleEl) {
        [...document.querySelectorAll("[data-toggle-theme]")].forEach((el) => {
          el.classList.add(toggleEl.getAttribute('data-act-class'))
        });
      }
    }
  })();
  if (toggleEl) {
    [...document.querySelectorAll("[data-toggle-theme]")].forEach((el) => {
      el.addEventListener("click", function () {
        var themesList = el.getAttribute('data-toggle-theme');
        if (themesList) {
          var themesArray = themesList.split(",");
          if (document.querySelector("[data-theme-root='true']").getAttribute('data-theme') == themesArray[0]) {
            if (themesArray.length == 1) {
              document.querySelector("[data-theme-root='true']").removeAttribute("data-theme");
              localStorage.removeItem("theme");
            } else {
              document.querySelector("[data-theme-root='true']").setAttribute("data-theme", themesArray[1]);
              localStorage.setItem("theme", themesArray[1]);
            }
          } else {
            document.querySelector("[data-theme-root='true']").setAttribute("data-theme", themesArray[0]);
            localStorage.setItem("theme", themesArray[0]);
          }
        }
        [...document.querySelectorAll("[data-toggle-theme]")].forEach((el) => {
          el.classList.toggle(this.getAttribute('data-act-class'));
        });
      });
    });
  }
}