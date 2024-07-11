import "./style.css"
import { todoPopup } from "./todo";

let createButton = document.querySelector(".createButton");
let popupDiv = todoPopup();

createButton.addEventListener("click", () => {
    popupDiv.style.display = "block";
});