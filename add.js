document.forms.meal.addEventListener("submit", (e) => {
  e.preventDefault();

  const image = e.target.elements.image.value.trim();
  const name = e.target.elements.name.value.trim();
  const ingredients = e.target.elements.ingredients.value
    .trim()
    .split(",")
    .map((v) => v.trim()[0].toUpperCase() + v.trim().slice(1));
  const price = Number(e.target.elements.price.value);
  const type = e.target.elements.type.value;

  if ((image, name, ingredients, price, type)) {
    fetch("https://glowing-octo-journey-qjdu5.ondigitalocean.app/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: image,
        type,
        title: name,
        ingredients,
        price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status.toLowerCase().includes("ok")) {
          const notification = document.createElement("div");
          notification.style.background = "green";
          notification.style.color = "white";
          notification.style.padding = "1rem";
          notification.textContent = "Its all good";

          document.forms.meal.prepend(notification);
        } else {
          const notification = document.createElement("div");
          notification.style.background = "red";
          notification.style.color = "white";
          notification.style.padding = "1rem";
          notification.textContent = "Not okay";

          document.forms.meal.prepend(notification);
        }

        e.target.elements.image.value = "";
        e.target.elements.name.value = "";
        e.target.elements.ingredients.value = "";
        e.target.elements.price.value = "";
      });
  }
});
