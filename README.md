# GROFER'S KEEP
[![Build Status](https://travis-ci.org/priyansh1161/Grofers-keep.svg?branch=master)](https://travis-ci.org/priyansh1161/Grofers-keep)
[![Coverage Status](https://coveralls.io/repos/github/priyansh1161/Grofers-keep/badge.svg?branch=master)](https://coveralls.io/github/priyansh1161/Grofers-keep?branch=master)

## live [link](https://urlshrt.herokuapp.com/)


- [x] Offline First
- [x] persistent state
- [x] As a user, I should be able to add items that I want to buy in a list. Example: potato, tomato, maggie, atta, etc.
- [x] As a user, I should be able to specify quantity of the items I want to buy. Example: 1kg potato, 4 maggie, 1lt milk, etc.
- [x] As a user, I should be able to strike off items in the list as I buy them. Example: If I add 1 kg potato in my list, go to the market the next day and buy 1kg potato, I should be able to strike off/mark complete it in the list. Please remember to not remove the item from the list. Just don't show it as something that still needs to be bought.
- [x] As a user, I should be able to use this app on mobile phones as well.
- [x] As a user, I should be able to use this app without internet as well. Scenario: I am roaming around in the super market and my 3g connection is not working, I should be able to use the app still.  


# tools and libs used

- **React**
- **Redux** - For global state management 
- **redux-localstorage** - For syncing Redux's state with localStorage
- **Offline-plugin** - Webpack's Offline Plugin is used to inject SW and Appcache in production env to support offline users
- **Bootstrap 3.3.7** - For basic styling
- **Jyest + Enzyme** - Testing


# How to Run

    npm start
    
# How to Build

    npm run build
    
# Run tests & coverage

    npm run test
    npm run open:cover
