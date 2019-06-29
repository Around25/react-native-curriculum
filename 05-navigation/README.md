# Navigation

## Resources
- https://reactnavigation.org/docs/en/getting-started.html
- https://reactnavigation.org/docs/en/api-reference.html

## Task 1
- Use [faker.js](https://github.com/marak/Faker.js/) and generate a random name for this project
- Go to [gitlab.com](https://gitlab.com/) and create a repository with that name. If your name has spaces, replace those spaces with dashes.

> Eg: `The Black Keys` becomes `the-black-keys`

- Open up the [React Navigation docs](https://reactnavigation.org/docs/en/getting-started.html) and set up the basic Hello World App
- Now you should have a `Stack Navigator` in place
- Add 4 screens: `Welcome`, `OnBoarding 1`, `OnBoarding 2`, `OnBoarding 3`.
- Every time I open the app, I am starting from the `Welcome` screen
- At the bottom of each screen, there's a full width button saying `Continue`. If I press the button, I am moved to the next screen. The order is specified above, starting with the `Welcome` screen.

> Design and layout decisions are up to the developer.
> The last screen does not have a `Continue` button (obviously 😄)

- Every screen contains a full width image
- Below each image, there's a `heading` text with the title of the image and underneath this text, there's a description paragraph.
- Add a custom `Back` button on every screen, in the top left area. Use [this icon](https://www.flaticon.com/free-icon/back-button_93634).

## Task 2
- For the previous app, add a `Skip` button at the bottom of every screen.
- If I tap `Skip` I am navigated to a new screen called `Home`.
- This screen contains a message in the middle, saying `This is the home screen, I skipped from [SCREEN_NAME]`. If I did not skip, it says `This is the home screen. OnBoarding completed`.
> The message above has to display the screen from where I skipped to `Home` screen. Use [params](https://reactnavigation.org/docs/en/params.html) to achieve that. Again, last screen does not contain a Skip button.

- `Home` screen does not have a back button. There should be no way to go back when I land on the `Home` screen rather than restarting the app.

> When I'm here, If I use the back gesture on `iOS` or the hardware back button on `Android` I shouldn't be navigated back to the previous screen. Once I'm on `Home`, there's no way back 🙅‍♂️

- At the bottom of the `Home` screen, add a `Reset` button.
- If I tap the `Reset` button I am able to restart the OnBoarding process, starting with the `Welcome` screen.

> Use the [Reset action](https://reactnavigation.org/docs/en/stack-actions.html) to achieve that.

## Task 3
- On the `Home` screen, in the top right, there's an `Info` button.
- Use [this icon](https://www.flaticon.com/free-icon/information_906794#term=question&page=1&position=3) for the button.
- If I tap the button a `Modal screen` is opened.

> Refer to the [docs](https://reactnavigation.org/docs/en/modal.html) to implement that.

- The modal has to have a `Close` button in the top left. Use [this icon](https://www.flaticon.com/free-icon/cancel-music_70460#term=close&page=1&position=13) for the button.
- The `Modal` screen layout should be similar to [this](https://www.figma.com/file/kDwCYEiq5GXNVYCpC2GNkA/React-Navigation-Task-3?node-id=0%3A1).

## Task 3 - Bonus
- Make sure all your [touchables](https://facebook.github.io/react-native/docs/handling-touches#touchables) are *touchable enough*. This means that all the buttons should have a large enough touchable area to be easily tapped on a real device.

> Use the debug dialog and display touchable areas to analyse this.

- Add a `2x` version for all your assets. Refer to the [React Native docs](https://facebook.github.io/react-native/docs/images). Also, create an assets config file in your app, where you require all your assets. Import them from there throughout the app.

## Task 4
- The most common type of navigation is the tab-based one. On the `Home` screen, add 3 bottom tabs.

> Refer to the [docs](https://reactnavigation.org/docs/en/tab-based-navigation.html) for implementing a [Bottom Tab Navigator](https://reactnavigation.org/docs/en/bottom-tab-navigator.html)

- Every tab should contain a [Stack Navigator](https://reactnavigation.org/docs/en/stack-navigator.html). Every `Stack Navigator` contains two screens.

> The content on those screens is not important at this point. Just add whatever you feel like adding, but don't leave them empty 😉

## Task 4 - Bonus
- On the 3rd `bottom tab` add a `Settings` page. Here, I should be able to turn on dark mode for the whole app by tapping a button.

> Refer to the `React context API` to implement this. Apart from the official docs, [here](https://dev.to/sunnysingh/sharing-state-using-reacts-context-api-3623) is a good article explaining `context`.

## Task 5
- I need to be able to resume the onboarding process if I haven't finished it. So, if I (fully) close the app in the middle of the onboarding, when I reopen it I should continue from where I left.

> Use [AsyncStorage](https://github.com/react-native-community/async-storage/tree/LEGACY) to save state and retrieve it on app open.

- To implement that, add a `Loading` screen in the `Stack`. On this screen, get the `state` from `storage` and then `navigate` to the right screen.

> Hint 👉 Put the loading screen as the first screen in the `Stack`.

## Task 5 - Bonus
- Instead of doing the state retrieval and navigation in the screen component, externalize this logic into a `Service`.
- Create a `services` dir inside `src`
- There, we'll have two files: `Navigation.js` and `Storage.js`
- `Navigation.js` has a `class` with `static` attributes and methods.
- Write a `static` method that sets the `navigation` reference (aka `this.props.navigation`) as an attribute on this class. We'll use this to perform navigation.

```js
class Navigation {
  static navigation = null;

  static setRef(ref = {}) {
    this.navigation = ref
  }
}
```
- Add another method to perform the initial setup of the app: taking `state` from `Storage` and performing the initial navigation
- Implement two methods in the `Storage` `class` to perform the saving and retrieval of data from `AsyncStorage`. These methods would be `saveAppState(data)` and `getAppState()`.
> The key to save in AsyncStorage should not be visible outside the `Storage` class. This is for encapsulation and to adhere to the [Principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege).
- The methods we are exposing to the "outside world" from any service, is call the [API](https://en.wikipedia.org/wiki/Application_programming_interface) for that service.

## Task 6
- Take a look the [Wikipedia app design](https://mobbin.design/apps/wikipedia)
- Create a new repository called `wikipedia-app` and start building the onboarding screens. These are the first 7 screens.
- The 8th screen is what we previously had as `Home` screen. Build the `Bottom Tab Navigator`, but don't add any content on any of the screens.
- Make sure the `Next` and `Skip` buttons work just as before.

> Don't mind the dots at the bottom of every screen (yet). That would be a `Pager` and we'll implement that later.

## Task 6 - Bonus
- Instead of having 7 screens for the onboarding, implement the `Pager` I was mentioning above using [react-native-swiper](https://github.com/leecade/react-native-swiper).

## Task 7
- Take a look at the [Wikipedia API](https://en.wikipedia.org/api/rest_v1/). We'll use it to get all kinds of data from Wikipedia and display it in our app.
- For the `Home` screen, fetch the "on this day" events

> Use the fetch API and get data from the following endpoint `https://en.wikipedia.org/api/rest_v1/feed/onthisday/all/mm/dd`.

- Display the fetched content, following the design.
