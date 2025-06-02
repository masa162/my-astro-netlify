// public/theme-init.js
document.addEventListener("DOMContentLoaded", function () {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");

  // ページ読み込み時に localStorage または OS の設定に従ってテーマを適用
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    lightIcon.classList.remove("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    darkIcon.classList.remove("hidden");
  }

  // トグルボタンがクリックされたとき
  themeToggleBtn.addEventListener("click", () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      darkIcon.classList.remove("hidden");
      lightIcon.classList.add("hidden");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      lightIcon.classList.remove("hidden");
      darkIcon.classList.add("hidden");
    }
  });
});
