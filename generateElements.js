let newDiv = document.createElement("div");
newDiv.classList.add("container");

document.body.appendChild(newDiv);

let wiki_item = document.createElement("div");
wiki_item.classList.add("wiki-item");
let h1 = document.createElement("h1");
h1.textContent = "African wild dog";
h1.classList.add("wiki-header");
wiki_item.appendChild(h1);
let wiki_content = document.createElement("div");
wiki_content.classList.add("wiki-content");
wiki_item.appendChild(wiki_content);
let paragraph = document.createElement("p");
paragraph.classList.add("wiki-text");
fetch(
  "https://en.wikipedia.org/api/rest_v1/page/summary/African_wild_dog?redirect=true"
)
  .then((response) => response.json())
  .then((text) => {
    console.log(text.extract);

    let dog_text = text.extract;
    paragraph.textContent = dog_text;
  });

wiki_content.appendChild(paragraph);
let image_container = document.createElement("div");
image_container.classList.add("img-container");
wiki_content.appendChild(image_container);
let image = document.createElement("img");
image.classList.add("wiki-img");

fetch("https://dog.ceo/api/breed/african/images/random")
  .then((response) => response.json())
  .then((picture) => {
    console.log(picture.message);

    let dog_image = picture.message;
    image.src = dog_image;
  });

image_container.appendChild(image);
newDiv.appendChild(wiki_item);
//Another dog starts from here
let wiki_item2 = document.createElement("div");
wiki_item2.classList.add("wiki-item");
let h2 = document.createElement("h1");
h2.textContent = "Airedalenterrieri";
h2.classList.add("wiki-header");
wiki_item2.appendChild(h2);
let wiki_content2 = document.createElement("div");
wiki_content2.classList.add("wiki-content");
wiki_item2.appendChild(wiki_content2);
let paragraph2 = document.createElement("p");
paragraph2.classList.add("wiki-text");

fetch(
  "https://en.wikipedia.org/api/rest_v1/page/summary/Airedale_Terrier?redirect=true"
)
  .then((response) => response.json())
  .then((text) => {
    console.log(text.extract);

    let dog_text2 = text.extract;
    paragraph2.textContent = dog_text2;
  });

wiki_content2.appendChild(paragraph2);
let image_container2 = document.createElement("div");
image_container2.classList.add("img-container");
wiki_content2.appendChild(image_container2);
let image2 = document.createElement("img");
image2.classList.add("wiki-img");
//Apua https://developer.mozilla.org/en-US/docs/Web/API/Response/json
fetch("https://dog.ceo/api/breed/airedale/images/random")
  .then((response) => response.json())
  .then((picture) => {
    console.log(picture.message);

    let dog_image2 = picture.message;
    image2.src = dog_image2;
  });

image_container2.appendChild(image2);
newDiv.appendChild(wiki_item2);

//Third here

let wiki_item3 = document.createElement("div");
wiki_item3.classList.add("wiki-item");
let h3 = document.createElement("h1");
h3.textContent = "Akita";
h3.classList.add("wiki-header");
wiki_item3.appendChild(h3);
let wiki_content3 = document.createElement("div");
wiki_content3.classList.add("wiki-content");
wiki_item3.appendChild(wiki_content3);
let paragraph3 = document.createElement("p");
paragraph3.classList.add("wiki-text");
fetch(
  "https://en.wikipedia.org/api/rest_v1/page/summary/Akita_%28dog%29?redirect=true"
)
  .then((response) => response.json())
  .then((text) => {
    console.log(text.extract);

    let dog_text3 = text.extract;
    paragraph3.textContent = dog_text3;
  });

wiki_content3.appendChild(paragraph3);
let image_container3 = document.createElement("div");
image_container3.classList.add("img-container");
wiki_content3.appendChild(image_container3);
let image3 = document.createElement("img");
image3.classList.add("wiki-img");
//Apua https://developer.mozilla.org/en-US/docs/Web/API/Response/json
fetch("https://dog.ceo/api/breed/akita/images/random")
  .then((response) => response.json())
  .then((picture) => {
    console.log(picture.message);

    let dog_image3 = picture.message;
    image3.src = dog_image3;
  });

image_container3.appendChild(image3);
newDiv.appendChild(wiki_item3);

//Fourth here

let wiki_item4 = document.createElement("div");
wiki_item4.classList.add("wiki-item");
let h4 = document.createElement("h1");
h4.textContent = "Beagle";
h4.classList.add("wiki-header");
wiki_item4.appendChild(h4);
let wiki_content4 = document.createElement("div");
wiki_content4.classList.add("wiki-content");
wiki_item4.appendChild(wiki_content4);
let paragraph4 = document.createElement("p");
paragraph4.classList.add("wiki-text");
//Apua https://developer.mozilla.org/en-US/docs/Web/API/Response/json ja wikipedia API

fetch("https://en.wikipedia.org/api/rest_v1/page/summary/Beagle?redirect=true")
  .then((response) => response.json())
  .then((text) => {
    console.log(text.extract);

    let dog_text4 = text.extract;
    paragraph4.textContent = dog_text4;
  });
wiki_content4.appendChild(paragraph4);
let image_container4 = document.createElement("div");
image_container4.classList.add("img-container");
wiki_content4.appendChild(image_container4);
let image4 = document.createElement("img");
image4.classList.add("wiki-img");
//Apua https://developer.mozilla.org/en-US/docs/Web/API/Response/json
fetch("https://dog.ceo/api/breed/beagle/images/random")
  .then((response) => response.json())
  .then((picture) => {
    console.log(picture.message);

    let dog_image4 = picture.message;
    image4.src = dog_image4;
  });

image_container4.appendChild(image4);
newDiv.appendChild(wiki_item4);

//Fift time

let wiki_item5 = document.createElement("div");
wiki_item5.classList.add("wiki-item");
let h5 = document.createElement("h1");
h5.textContent = "Malamute";
h5.classList.add("wiki-header");
wiki_item5.appendChild(h5);
let wiki_content5 = document.createElement("div");
wiki_content5.classList.add("wiki-content");
wiki_item5.appendChild(wiki_content5);
let paragraph5 = document.createElement("p");
paragraph5.classList.add("wiki-text");
//Apua https://developer.mozilla.org/en-US/docs/Web/API/Response/json
fetch(
  "https://en.wikipedia.org/api/rest_v1/page/summary/Malamute?redirect=true"
)
  .then((response) => response.json())
  .then((text) => {
    console.log(text.extract);

    let dog_text5 = text.extract;
    paragraph5.textContent = dog_text5;
  });
let image_container5 = document.createElement("div");
image_container5.classList.add("img-container");
wiki_content5.appendChild(image_container5);
let image5 = document.createElement("img");
image5.classList.add("wiki-img");
//Apua https://developer.mozilla.org/en-US/docs/Web/API/Response/json
fetch("https://dog.ceo/api/breed/malamute/images/random")
  .then((response) => response.json())
  .then((picture) => {
    console.log(picture.message);

    let dog_image5 = picture.message;
    image5.src = dog_image5;
  });

image_container5.appendChild(image5);
newDiv.appendChild(wiki_item5);
