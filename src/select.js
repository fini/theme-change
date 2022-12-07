function themeSelect() {
  (function (theme = sessionStorage.getItem("theme")) {
    if (sessionStorage.getItem("theme")) {
      document.querySelector("[data-theme-root='true']").setAttribute("data-theme", theme);
      var optionToggler = document.querySelector("select[data-choose-theme] [value='" + theme.toString() + "']");
      if (optionToggler) {
        [...document.querySelectorAll("select[data-choose-theme] [value='" + theme.toString() + "']")].forEach((el) => {
          el.selected = true;
        });
      }
    }
  })();
  if (document.querySelector('select[data-choose-theme]')) {
    [...document.querySelectorAll("select[data-choose-theme]")].forEach((el) => {
      el.addEventListener('change', function () {
        document.querySelector("[data-theme-root='true']").setAttribute("data-theme", this.value);
        sessionStorage.setItem("theme", document.querySelector("[data-theme-root='true']").getAttribute('data-theme'));
        [...document.querySelectorAll("select[data-choose-theme] [value='" + sessionStorage.getItem("theme") + "']")].forEach((el) => {
          el.selected = true;
        });
      });
    });
  }
}