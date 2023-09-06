import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", emergent);

function emergent(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  let srcImage = event.target.src;
  const inst = basicLightbox.create(
    `
				<img width="1400" height="900" src="${srcImage}">
			`
  );
  inst.show();
}

window.addEventListener("keyup", function (event) {
  if (event.code === "27") {
    inst.close();
  }
});
