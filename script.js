const list = document.getElementById("taskList");
const submitButton = document.getElementById("addTaskButton");
const userInputField = document.querySelector("input[type='text']");

function addToList() {
  const userInput = userInputField.value.trim();
  if (userInput) {
    const container = document.createElement("div");
    container.classList.add("task-item");

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Create task text
    const textSpan = document.createElement("span");
    textSpan.textContent = userInput;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "🗑️";

    // Append elements
    container.appendChild(checkbox);
    container.appendChild(textSpan);
    container.appendChild(deleteBtn);
    list.appendChild(container);

    // Checkbox strike-through functionality
    checkbox.addEventListener("change", () => {
      textSpan.classList.toggle("completed", checkbox.checked);
    });

    // Delete button with shrink animation
    deleteBtn.addEventListener("click", () => {
      container.classList.add("shrink");
      container.addEventListener(
        "transitionend",
        () => {
          container.remove();
        },
        { once: true }
      );
    });

    userInputField.value = "";
  }
}

submitButton.addEventListener("click", addToList);
userInputField.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addToList();
  }
});
