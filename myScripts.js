let searchButton = document.getElementById("search-button");
let iframe = document.getElementById("pdf-iframe");
let searchInput = document.getElementById("search-input");

searchButton.addEventListener("click", () => {
  iframe.src = searchInput.value + ".pdf";
});
searchInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    searchButton.click();
  }
});

const getFileList = async () => {
  const response = await fetch("http://127.0.0.1:5501/");
  const data = await response.json();
  console.log(data);
};
getFileList();

const searchPrtialMatch = () => {
  searchInput.value;
};
