const accessKey = "v67mITlDuAS6zN7EiBUnmDQRDyb4QqIgLVsMmgXenGg";

const searchForm = document.getElementById("search_form");
const searchBox = document.getElementById("search_box");
const searchResult = document.getElementById("search_result");
const showMoreBtn = document.getElementById("show_more_btn");

// console.log(searchForm);

let keyword = "";
let page = 1;
async function searchImage() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();
  //   console.log(data);
  const results = data.results;
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.herf = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });

  showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});

showMoreBtn.addEventListener("click", () => {
  page += 1;
  searchImage();
});
