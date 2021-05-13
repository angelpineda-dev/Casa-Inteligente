import cargarAsistentes from "./products.js";
import wheelNav from "./wheelNav.js";

document.addEventListener("mouseover", (e) => {
  wheelNav(e);
});

cargarAsistentes();
