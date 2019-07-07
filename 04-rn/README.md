# React Native

## Resources
- https://reactjs.org/
- https://www.freecodecamp.org/news/learning-react-roadmap-from-scratch-to-advanced-bff7735531b6/
- https://github.com/MoonHighway/learning-react/tree/master/chapter-02
- https://facebook.github.io/react-native/

## Task 1
- Go to [gitlab.com](https://gitlab.com/) and create a repository named `on-this-day`
- Clone the project from git
- Create a new [react native CLI app](https://facebook.github.io/react-native/docs/getting-started)
- Push the new created project to git

## Task 2
- Create a new `tab navigation` component and position it at the bottom of the screen
- Create and display the following screens when switching the tab: `Home`, `XO`, `Card`, `Account`

## Task 3
- This screen will be the `Home Tab`
- Take a look at the [Wikipedia API](https://en.wikipedia.org/api/rest_v1/). We'll use it to get all kinds of data from Wikipedia and display it in our app.
- Fetch the "on this day" events
- List the data according to the wireframe (TBD)

> Use the fetch API and get data from the following endpoint `https://en.wikipedia.org/api/rest_v1/feed/onthisday/all/mm/dd`.

## Task 4
- Add 6 checkmarks: `All, Selected, Births, Deaths, Holidays, Events`
- Filter the events by the checkmarks. Note: you can't select `All` together with any other filter
- Add an input to the list
- Add search feature to the list using that input
- Add `swipe to remove item` feature 

## Task 5
- This screen will be the `XO Tab`
- Implement tic-tac-toe `Solo Play` game mode
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

## Task 6
- This screen will be the `Card Tab`
- Create a card flip memory game. [Example](https://www.webgamesonline.com/memory/)
- Make 4 rows with 3 cards on each row
- Optional: add a score
- Design is up to you
