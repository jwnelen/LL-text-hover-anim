// Get all the cell elements
const cells = document.querySelectorAll(".text");

// Loop through each cell
cells.forEach((cell, index) => {
  // Get the text content of the cell
  const text = cell.textContent;

  // Clear the existing text content of the cell
  cell.textContent = "";

  amountChars = text.length;
  const isRight = index % 2 == 1;

  // Loop through each character in the text
  for (let i = 0; i < text.length; i++) {
    // Create a new span element for each character
    const span = document.createElement("span");
    span.textContent = text[i];
    let scale = 1 + (i / (amountChars - 1)) * 1.5;

    if (isRight) {
      scale = 3.5 - scale;
    }

    span.style.transform = `scaleY(${scale})`;
    span.style.display = "inline-block";

    // Append the span element to the cell
    cell.appendChild(span);
  }
});
