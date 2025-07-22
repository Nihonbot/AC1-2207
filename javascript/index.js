const submitForm = document.getElementById("submitForm");
const outputDiv = document.getElementById("output");

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(submitForm);
  const formValues = Object.fromEntries(formData.entries());

  let resultHTML = `<h3>Submitted Info:</h3><ul>`;
  for (let key in formValues) {
    if (key !== "Avatar") {
      resultHTML += `<li><strong>${key}</strong>: ${formValues[key]}</li>`;
    }
  }
  resultHTML += `</ul>`;

  const avatarFile = formData.get("Avatar");
  if (avatarFile && avatarFile.type.startsWith("image/")) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(avatarFile);
    outputDiv.innerHTML = resultHTML;
    outputDiv.appendChild(img);
  } else {
    outputDiv.innerHTML = resultHTML;
  }
});
