// script.js
document.addEventListener("DOMContentLoaded", () => {
  const cookieBanner = document.getElementById("cookieBanner");
  const acceptButton = document.getElementById("acceptCookies");

  // Verificar si el usuario ya aceptó las cookies
  if (!localStorage.getItem("cookiesAccepted")) {
    cookieBanner.style.display = "block";
  }

  // Manejar el clic en el botón de aceptar
  acceptButton.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none";
  });
});
