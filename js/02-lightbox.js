import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);
let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 200,
});
