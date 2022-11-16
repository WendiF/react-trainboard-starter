# Trainboard - Mobile App Starter

## Overview

This Trainboard app is bootstrapped with [Create React App](https://github.com/facebook/create-react-app)  which serves to support the Softwire React Trainboard training exercise.

## Developer Setup

### Setup

1. Install Node.js LTS (v18.12.0) via [NVM](https://github.com/coreybutler/nvm-windows).  
2. Install WebStorm via [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/) (or another preferred editor).
3. Install the project dependencies with `npm install`. 
4. Set up your api key (See below)
5. Run the code!
    - Run in development mode with hot reloading with `npm start`


## X-API-KEY Setup

In order to have access to `mobile-api-softwire2.lner.co.uk`, set up the X-API-KEY:
* Duplicate file `.env`, and rename the new file to `.env.local`
* Replace `key` with the X-API-KEY, ask your trainer for this.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm lint` & `npm lint-fix`

Runs lint check and automatic lint fix respectively

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
