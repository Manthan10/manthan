let lists = document.querySelectorAll(".list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let resetButton = document.getElementById("resetButton");

let originalLeftContainer = leftBox.innerHTML;

let selected = null;

// reset button
resetButton.addEventListener("click", () => {
  location.reload();
});
// reset button end

for (let list = 0; list < lists.length; list++) {
  lists[list].addEventListener("dragstart", (e) => {
    selected = e.target;
    console.log("check", selected);

    rightBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    rightBox.addEventListener("drop", () => {
      if (selected) {
        rightBox.appendChild(selected);
        selected = null;
        document.getElementById("successMessage").textContent =
          "Item dropped successfully!";
      }
    });

    leftBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    leftBox.addEventListener("drop", () => {
      if (selected) {
        leftBox.appendChild(selected);
        selected = null;
      }
    });
  });
}
