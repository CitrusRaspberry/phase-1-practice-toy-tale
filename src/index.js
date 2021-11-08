let addToy = false;

const renderToy = (toy) => {
  const toyContainer = document.querySelector("#toy-collection");
  // Create new elements
  const toyCard = document.createElement("div");
  const toyImg = document.createElement("img");
  const toyTitle = document.createElement("h2");
  const toyLikes = document.createElement("p");
  const toyBtn = document.createElement("button");

  // Configure new elements
  toyTitle.textContent = toy.name;
  toyLikes.textContent = toy.likes;
  toyImg.src = toy.image;
  toyImg.className = "toy-avatar";
  toyBtn.className = "like-btn";
  toyCard.className = "card";
  toyBtn.id = toy.id;
  toyBtn.textContent = "Likes ❤️";

  // Append new elements
  toyCard.append(toyTitle, toyImg, toyLikes, toyBtn);
  toyContainer.append(toyCard);
}

document.addEventListener("DOMContentLoaded", () => {
  // Create references
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  fetch("http://localhost:3000/toys/1")
  .then(resp => resp.json())
  .then(data => renderToy(data))
  .catch(error => console.log("Error:", error));

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
