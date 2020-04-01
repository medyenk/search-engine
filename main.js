const button = document.querySelector('button');
const subInput = document.querySelector('input');
const result = document.querySelector('#result');

// const displayResultPage = () => {
//   document.getElementById("results").innerHTML = ///
// }

var params = {
  APIkey: "AIzaSyBpgNPJ3FBj50DYcfTcpnAJRpEfij_RMzw",
  cx: "014011771934902379208:57hk5mjqaby",
  q: ""
}

params.q = document.getElementById("searchValue").value;

var url = "https://www.googleapis.com/customsearch/v1?key=" +
  params.APIkey + "&cx=" + params.cx + "&q=" + params.q;

console.log(url);

  function renderList(json) {
    const searchResults = json.data.children;
    return `<ol>
      ${searchResults.map(
        post => `<li>${searchResults.data.children} <a href=${searchResults.data.url} target='_blank'>Top Ten Results</a></li>`
        ).join('')}
        </ol>`;
      }

  async function fetchTopTen() {

    try {
      const fetchResult = fetch(new Request(URL, { method: 'GET', cache: 'reload'}));
      const response = await fetchResult;
      if (response.ok) {
        const jsonData = await response.json();
        result.innerHTML = renderList(jsonData);
      } else {
        result.innerHTML = `Response.status: ${response.status}`;
      }
    } catch(e) {
      throw Error(e);
    }
  }

  button.addEventListener('click', () => {
    fetchTopTen(subInput.value);
  });

















































