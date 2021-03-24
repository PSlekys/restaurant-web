const baseURL = "https://glowing-octo-journey-qjdu5.ondigitalocean.app/";

["starter", "soup", "main"].forEach((item) =>
  getData(item, document.getElementById(item))
);

function getData(url, location) {
  fetch(baseURL + url)
    .then((res) => res.json())
    .then((data) => displayFood(data, location));
}

function displayFood(array, location) {
  array.forEach((item) => {
    const product = document.createElement("div");
    product.className = "product";

    const image = document.createElement("img");
    image.src = item.url;
    image.alt = item.title;

    const text = document.createElement("div");
    text.className = "text";

    const title = document.createElement("h4");
    title.textContent = item.title;

    const p = document.createElement("p");
    p.textContent = item.ingredients.join(" / ");

    text.append(title, p);

    const price = document.createElement("div");
    price.className = "price";
    price.textContent = `$${item.price}`;

    product.append(image, text, price);
    location.append(product);
  });
}
