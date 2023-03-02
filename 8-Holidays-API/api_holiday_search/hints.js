//////////////////////////////// Challenge 1

console.log('JS file is getting included');

function doFetch() {
  console.log('do fetch is getting called!');
}

function displayOutput() {
  console.log('display output is getting called!');
}







//////////////////////////////// Challenge 3

// Globally, define a variable like this:
let apiGifData = [];
// And in a relevant function, include a "fetch"
fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        apiGifData = data;
    });
// NOTE: The code above for how we can fetch the Studio Ghibli films...  not
// what we want in this case, but a useful clue to base your code on.






//////////////////////////////// Challenge 4

// Hint 1
let output = document.querySelector('#output');
let image = document.createElement('img');

let gifImage = 'https://media.giphy.com/media/ND6xkVPaj8tHO/giphy.gif';
image.src = gifImage;
output.appendChild(image);

// Hint 2
let output = document.querySelector('#output');
output.innerHTML = '';
for (let gifInfo of data) {
    console.log(gifInfo.images.preview_gif.url);
}





//////////////////////////////// Challenge 5

// Hint 1:
let searchTerm = 'kittens';
let url = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + searchTerm;

// Hint 2:
let searchInput = document.querySelector('#search');
let searchValue = searchInput.value;










//////////////////////////////// BONUS
//////////////////////////////// BONUS
//////////////////////////////// BONUS
//////////////////////////////// BONUS

// Hint: Some HTML code to get you started:
/*

    <select id="countries" onChange="doFetchHoliday()">
        <option value="us">United States</option>
        <option value="cn">China</option>
        <option value="mx">Mexico</option>
        <option value="id">Indonesia</option>
        <option value="br">Brazil</option>
    </select>

    <section>
        <table>
            <thead>
                <tr><th>Country</th> <th>Date</th><th>Name</th><th>Gifs</th></tr>
            </thead>
            <tbody id="holidayOutput">
            </tbody>
        </table>
    </section>
*/


// HINT: fetch (incomplete)
let holidayData = null;
function doFetchHoliday() {
    fetch(`/data/holidays_us.json`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // TODO Do something with data
            renderHoliday();
        });
}



// HINT:  Helper function for render function
function makeTd(content) {
    // Helper function that makes a new TD element, and sets some content
    let td = document.createElement('td');
    td.append(content);
    return td;
}

// HINT:  Render function (incomplete)
function renderHoliday() {
    let output = document.querySelector('#holidayOutput');
    output.innerHTML = '';
    for (let holiday of holidayData) {
        let tr = document.createElement('tr');
        tr.appendChild(makeTd(holiday.countryCode));
        tr.appendChild(makeTd(holiday.countryCode));
        tr.appendChild(makeTd(holiday.countryCode));

        output.appendChild(tr);
    }
}


// HINT: Adding a Search button:
let button = document.createElement('button');
button.textContent = 'Search';
button.onclick = () => {
  console.log(holiday.localName);
  // Do something....
};

