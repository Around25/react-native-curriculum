# React Native

## Resources
- https://reactjs.org/
- https://jscomplete.com/learn/why-react
- https://www.freecodecamp.org/news/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6/
- https://github.com/MoonHighway/learning-react/tree/master/chapter-02
- https://facebook.github.io/react-native/
- https://around25.com/blog/an-introduction-to-react-vs-react-native/
- https://app.pluralsight.com/library/courses/react-js-getting-started/table-of-contents

## Task 1
- Go to [gitlab.com](https://gitlab.com/) and create a repository named `internship-2019`
- Clone the project from git
- Create a new [react native CLI app](https://facebook.github.io/react-native/docs/getting-started)
- Push the new created project to git

## Task 2
- Create a new `Header` component and position it at the top of the screen. It should contain a title.
- Create a new `TabNavigation` component and position it at the bottom of the screen
- Create and display the following screens when switching the tab: `Home`, `XO`, `Card`, `Account`
- Wireframe [example](https://www.dropbox.com/s/x4w1resi5suhahp/iPhone%20X%20-%20Example.png?dl=0)

## Task 3
- This screen will be the `Home Tab`
- Take a look at the [Star Wars API](https://swapi.co/). We'll use it to get all kinds of data and display it in our app
- Fetch the `/people` data
- List the data according to the wireframe (TBD)

> Get data from the following endpoint `https://swapi.co/api/people/`

## Task 4 - Optional
- Instead of doing the API call for data retrieval directly the screen component, externalize this logic into a `Service`:
- Create a `api` dir inside src
- Create a `services/` folder and make a `star-wars.js` file
- Write and export an `API object` that is using a third party library for fetching the data from API. *baseURL will be `https://swapi.co/api/`*
- Create an `sw.js` file in the `api/` folder. Here, create a `getPeople()` function that makes the API call using the `API object` from `services/star-wars.js` and returns the result data
- Import `sw.js` as `swAPI` in the component and using the `getPeople`function, fetch the data

## Task 5
- Add an input on top of the list with an `Add` button
- Implement the add to list feature
- Add a new input below the first one and use it to add a search feature
- Add a `remove item` feature in-line of each entry in the list
- Optional: Instead of the button, implement a `swipe to remove item` feature 

## Task 6
- This screen will be the `XO Tab`
- Implement a 3x3 tic-tac-toe `Solo Play` game mode
- Optional: make `Computer play mode`

> Hint: for checking the winner, create an array with all winning position pairs

You can use this game state to get started:
```js
this.state = {
  gameType: 'player', // ENUM('player', 'computer')
  next: 'X',
  board: Array(9).fill(''), // Array with 9 empty string characters
  totalMoves: 0, // there can't be more than 9 moves. Useful for 'draw' result
  winner: null
};
```

## Task 7
- This screen will be the `Card Tab`
- Create a card flip memory game. [Example](https://www.webgamesonline.com/memory/)
- Make 4 rows with 4 cards on each row
- Add a `Reset` button
- Design is up to you

The `Card` component will have the following structure:
```json
{
    "id": 1,
    "image": "http://img.test",
    "show": true
}
```

You can use this game state to get started:
```js
this.state = {
  isFlipped: new Array(16).fill(false), // array with position of the elements. In order to know which element is flipped
  shuffledCards: [], // array with card objects
  prevCard: -1, // need to know the previous card to check the match
  prevCardIndex: -1, // need to know previous card index to check the match
  clickCount: 1, // we have to count the clicks
};
```

- Use local images or use an open API to generate the image of the cards
