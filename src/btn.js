function themeBtn() {
  (function (theme = sessionStorage.getItem("theme")) {
    if (theme != undefined && theme != '') {
      if (sessionStorage.getItem("theme") && sessionStorage.getItem("theme") != '') {
        document.querySelector("[data-theme-root='true']").setAttribute("data-theme", theme);
        var btnEl = document.querySelector("[data-set-theme='" + theme.toString() + "']")
        if (btnEl) {
          [...document.querySelectorAll("[data-set-theme]")].forEach((el) => {
            el.classList.remove(el.getAttribute('data-act-class'));
          });
          if (btnEl.getAttribute('data-act-class')) {
            btnEl.classList.add(btnEl.getAttribute('data-act-class'))
          }
        }
      } else {
        var btnEl = document.querySelector("[data-set-theme='']")
        if (btnEl.getAttribute('data-act-class')) {
          btnEl.classList.add(btnEl.getAttribute('data-act-class'))
        }
      }
    }
  })();
  [...document.querySelectorAll("[data-set-theme]")].forEach((el) => {
    el.addEventListener("click", function () {
      document.querySelector("[data-theme-root='true']").setAttribute("data-theme", this.getAttribute('data-set-theme'));
      sessionStorage.setItem("theme", document.querySelector("[data-theme-root='true']").getAttribute('data-theme'));
      [...document.querySelectorAll("[data-set-theme]")].forEach((el) => {
        el.classList.remove(el.getAttribute('data-act-class'));
      });
      if (el.getAttribute('data-act-class')) {
        el.classList.add(el.getAttribute('data-act-class'));
      }
    });
  });
}