
let gifData = null;
let holidayData = null;
function render() {
    let output = document.querySelector('#output');
    output.innerHTML= '';
    for (let gifInfo of gifData.data) {
        let image = document.createElement('img');
        let gifURL = gifInfo.images.preview_gif.url;
        image.src = gifURL;
        output.appendChild(image);
        image.onclick = () => alert(`Title: ${gifInfo.title}`);
    }
}

function makeTd(content) {
    // Helper function that makes a new TD element, and sets some content
    let td = document.createElement('td');
    td.append(content);
    return td;
}

function renderHoliday() {
    let output = document.querySelector('#holidayOutput');
    output.innerHTML = '';


    for (let holiday of holidayData) {
        let tr = document.createElement('tr');

        tr.appendChild(makeTd(holiday.countryCode));
        tr.appendChild(makeTd(holiday.date));
        tr.appendChild(makeTd(holiday.localName));

        let gifSearch = document.createElement('button');
        gifSearch.textContent = 'Search';
        gifSearch.onclick = () => {
            doFetch(holiday.localName);
        };

        tr.appendChild(makeTd(gifSearch));
        output.appendChild(tr);
    }
}

function doFetchHoliday() {
    let countryCodeInput = document.querySelector('#countries');
    let countryCode = countryCodeInput.value;
        fetch(`/data/holidays_${countryCode}.json`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            holidayData = data;
            renderHoliday();
        })
}

function doFetch(searchTerm) {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=4Qrqh60DtAYy2uStSn8Tdhk9HFVHirhf&q=${searchTerm}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            gifData = data;
            render();
        })
}

doFetchHoliday();