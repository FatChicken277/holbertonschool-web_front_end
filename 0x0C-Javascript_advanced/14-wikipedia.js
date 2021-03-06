function createElement(data) {
  let p = document.createElement("p");
  p.innerHTML = data;
  document.body.appendChild(p);
}

function queryWikipedia(callback) {
  let xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
  );

  xhr.send();

  xhr.onload = () => {
    if (xhr.status == 200) {
      callback(xhr.response);
    }
  };
}

queryWikipedia(createElement);
