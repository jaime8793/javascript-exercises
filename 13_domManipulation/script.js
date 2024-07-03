const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const pTag = document.createElement("p");
pTag.textContent = "Hey I`m red";
setTimeout(() => (pTag.style.color = "red"), 5000);
container.appendChild(pTag);

const h3Tag = document.createElement("h3");
h3Tag.textContent = "I`m a blue h3!";
setTimeout(() => (h3Tag.style.color = "blue"), 5000);
container.appendChild(h3Tag);

const divTag = document.createElement("div");
divTag.classList.add("container2");
divTag.textContent = "This is the second div";
container.appendChild(divTag);

const container2 = document.querySelector(".container2");
const h1Tag = document.createElement("h1");
const p2Tag = document.createElement("p");

h1Tag.textContent = "I`m in a div";
p2Tag.textContent = "ME TOO!";

container2.appendChild(h1Tag);
container2.appendChild(p2Tag);


