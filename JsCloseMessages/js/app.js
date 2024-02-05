const blockItems = document.querySelectorAll(".block-item");
const itemText = document.querySelectorAll(".item-text");


let prevItemTextIndex = 0;

for(let i = 0; i < blockItems.length; i++) {
    blockItems[i].addEventListener("click", () => {
        itemText[prevItemTextIndex].style = "display: none";
        itemText[i].style = "display: block";
        prevItemTextIndex = i;
    });
};
