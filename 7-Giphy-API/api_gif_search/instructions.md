In this activity, we will build a GIF search engine, from scratch!



Challenge #1:
--------------------------

- Add a console.log to the blank main.js file and confirm that your message is
  showing in the Dev Tools console

- Try clicking on the 2 buttons in the HTML. Observe the functions they are
  attempting to invoke.

- Create new functions with these names, each with a console.log, and confirm
  they work.

- Stuck? See hints.js



Challenge #2: API
--------------------------

- Visit the following website in your browser & examine the data

        http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=kitten

- What type of data is this? Can you find Kitten GIFs embedded in it?

- Can you craft a new URL that will search for something other than kittens?



Challenge #3: doFetch
--------------------------

In the doFetch function, write code to use "fetch" to get all GIFs from the API
about "kittens". Store the data in a global state variable. Confirm it is
working using console.log

- Note: Make it first search hard-coded for kittens only, for now. As a later
  challenge, you'll make it work for anything.

- Stuck? See hints.js



Challenge #4: displayOutput
------------------------------

Now, time to display the GIFs! Add code to the "displayOutput" function to loop
through the global data, and display all the GIFs that resulted from the
search.

- Note: With complicated APIs, it's tricky to know how to "drill down" and
  access the correct image. The best way is to console.log out the result of
  the fetch, then use Chrome Dev Tools to poke around at the data. When you
  find the data you want, you can right click and select "copy path".

- Stuck? See hints.js



Challenge #5: Search input
--------------------------

There are things in life other than kittens! You now need to make it so that
the user can search for anything they type in.

- Put it all together: Make it so that when you type into the search input and
  click "search", it will retrieve the value the user typed into the search
  input and search for that in particular.

- Clean up your UI: Make it a single button that does both.


- Stuck? See hints.js



Bonus Challenge: GIFs Calendar
-----------------------------------------------

Time to practice combining multiple APIs! This Bonus Challenge is fairly
involved with multiple steps, and will take some time.

This bonus challenge has several steps:

1. First, examine the "holidays" JSON files in the data directory. Pick one of
the files to start with.

2. Create a new global variable, along with a new pair of functions to fetch
the JSON file.
    - Same pattern as before, and just hardcode it for now

3. In the new function to "displayResults", show the holidays in a table
    - Hint: Some starter code is found in hints.js

4. Add a click event to each table row, when clicked, causes GIFs related to
that holiday to show

- Stuck? See hints.js

NOTE: To fetch local JSON data (as opposed to APIs), you will need to run a
local static development server. You can do this with the following command:


      npx node-static


If this does not work, see `installing_npx.md` file



Extra Bonus Challenges
-----------------------------------------------

Have more time?

- Finish the countries drop down, letting you select which country's holidays
  you want to search for

- Add a new feature such that when you click on an image, it shows an alert
  with that image's "title".

- Incorporate this API for country flags: https://www.countryflags.io/

