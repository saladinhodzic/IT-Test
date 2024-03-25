// 2. Fetch
const contentDiv = document.getElementById("content");
const url = "https://dummyjson.com/products";

const getProducts = async () => {
  try {
    const getThis = await fetch(url);
    const getJson = await getThis.json();
    console.log(getJson.products);
    return getJson.products;
  } catch (error) {
    console.log(error);
  }
};

getProducts().then(generateCard);

function generateCard(data) {
  let string = "";
  data.forEach((value) => {
    string += `  <div class="card">
    <img src="${value.images[0]}" alt="" class="image" />
    <h3 class="title">${value.title}</h3>
    <p class="description">${value.description}</p>
    <p class="price">${value.price}$</p>
  </div>`;
  });
  contentDiv.innerHTML = string;
}
