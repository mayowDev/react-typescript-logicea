# Assignment for Senior Frontend at Logicea

## Live App

URL: react-typescript-logicea.vercel.app

### Start project Locally

```JSON
  git clone https://github.com/mayowDev/react-typescript-logicea
  Make sure node version is v18 or latest
  npm install
  npm run dev
```

### Project structure

- App
- App/jokes
- App/page.tsx = Entry to the apllication
- App/services = CRUD Api calls
-

## Specification

In the main page a table lists all the jokes paginated with options for 5 and 10 items per page selected by the user in the very bottom of the table with two buttons for next (>) and previous (<) page and one dropdown to select the 5 or 10 item limit.

The user should also be able to filter and sort the results by the number of views or by created date.

The information shown in the table should have the following columns:

| Title     | Author               | Created Date | Views |
| --------- | -------------------- | ------------ | ----- |
| JokeTitle | crubery6s@\*\*\*.org | 23 Feb 2022  | 65    |

Author's and Date format should be exactly as in the example above

### Style

Columns has gaps and a vertical line between them like in the image bellow
![styling](https://i.imgur.com/j4d9fNG.png)

In the views column every number has to be one of the following colors following the rules:

- if the number of views is between 0 and 25,inclusive the number must be <span style="color:tomato">tomato</span>
- if the number of views is between 26 and 50,inclusive the number must be <span style="color:orange">orange</span>
- if the number of views is between 51 and 75,inclusive the number must be <span style="color:yellow">yellow</span>
- if the number of views is between 76 and 100,inclusive the number must be <span style="color:green">green</span>

### Functionality

1. Title should be a link leading to another page where the user should have a prefilled form with all the fields and a button to submit any changes for the specific item. There should be also a close button to go back if the user does not want to make any changes as well as a delete button to delete the item.
2. In the home page it should be also a add new joke button that leads to the same form as above but with all the form fields empty.
3. A dark mode toggle should switch background and text color.
4. In order for the user to have access to the application, a "token" should exist in cookies or local storage. If there is no "token" a login screen prompts the user to click a button that stores a "token". Also a logout button should displayed in the home page.

# Git

To start developing, create a git repository and add this file as Readme.md in the main branch. Then start developing the application in another branch.

# Tech Stack

The above app needs to be implemented using ReactJS and Typescript. The choices of frameworks, starters and libraries are up to the developer.

# Scope

This assignment is designed to gauge your skills as a Frontend Developer. Such skills would be good choices in library selection, code structuring, quality of code, proper abstractions and component composability to name a few.
