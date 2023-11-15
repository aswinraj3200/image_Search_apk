const key = "sTfZpdzUIQ0QdtV-dTuadqhp2r6cP5kg0NY2o8D8nBw";

const formEle = document.getElementById("form1");
const inputEle = document.getElementById("search-box");
const searchResult = document.getElementById("search-result"); // Change getElementsByClassName to getElementById
const showMore = document.getElementById("show");

let inputData = " ";
let page = 1;

async function searchImage() {
    inputData = inputEle.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${key}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        searchResult.innerHTML = ""; // Clear previous search results

        data.results.forEach((result) => {
            const image = document.createElement("img");
            image.src = result.urls.small;

            const imageLink = document.createElement("a");
            imageLink.href = result.links.html;
            imageLink.target = "_blank";

            imageLink.appendChild(image);
            searchResult.appendChild(imageLink);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

formEle.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
});
