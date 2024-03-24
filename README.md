# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# <font size="10" align="centered">AI-NetFlix</font>
- In this application we are going to create AI based NetFlix version

## Features :
- Login/ Sign-UP
  - Sign In/ Sign UP page
  - Redirect to Browse Page
- Browse Page (For logged In User/ after authnetication)
   - Header
   - Main Movie
    - Trailer in background
    - Title and Description
    - Movie Suggestions
        - Movie List
- AINetFlix
  - Search Bar
  - Movie Suggestions
## Steps :
1. Create react APP with the help of boilerplate code use command npx create-react-app ai-netflix
2. configure tailwind css for create-react-app [check the steps here](https://tailwindcss.com/docs/guides/create-react-app)  
3. Build Header
4. Build Login Form
5. Build Sign Up Form
6. Routing of App
7. Firebase setup
8. Deploying the APP to production
9. Create Signup User account
10. Create Sign In 
11. Setup Redux store with User Slice
12. Implemented Sign Out
13. Update Profile
14. Fetch from TMDB Movies
15. BugFix : Signup user display name and profile pic update
16. BugFix : if user is not logged in Redirect/browse to Login page, else to browse page
17. Unsubscribed to onAuthStateChanged callback
18. Register for TMDB API and create an APP get access token
19. Get Data from TMDB now playing movies list API
20. Created custom hook for nowplaying movies
21. create movie slice
22. Update store with movies data
23. planning for main and secondary container
24. fetch data for trailer video
25. update store with trailer video data
26. embedded the youtube video and make it autoplay and mute
27. tailwind classes added 




## Learning on the go :
1. Using form
2. Form Validation
3. Using useRef Hook
 


## useRef Hook
- useRef is a React Hook that lets you reference a value that’s not needed for rendering.[check here](https://react.dev/reference/react/useRef) and [here](https://www.geeksforgeeks.org/react-js-useref-hook/)

