let searchButton = document.getElementById("search-button");
let iframe = document.getElementById("pdf-iframe");
let searchInput = document.getElementById("search-input");
let pdfName;
searchButton.addEventListener("click", () => {
  searchPrtialMatch();
  iframe.src = "file:///C:/Code/Extract-Image-PDF/" + pdfName;
});
searchInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    searchButton.click();
  }
});
let data;
const getFileList = async () => {
  const response = await fetch("http://127.0.0.1:5501/");
  data = await response.json();
  console.log(data);
};
getFileList();

const searchPrtialMatch = () => {
  data.forEach((element) => {
    if (element.includes(searchInput.value)) {
      pdfName = element;
    }
  });
};
