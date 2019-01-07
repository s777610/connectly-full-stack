# connectly-full-stack
This application([Connectly](https://quiet-atoll-38277.herokuapp.com/login)) was mainly built by Node.js, React, Redux and MongoDB. The back-end was built by express, which is a light-weight framework of Node.js. The data is stored on MongoDB and hosted on mLab. The client-side of this application was built by React and Redux. I used create-react-app to set up my configuration and workflow. In addition, it uses redux-thunk as middleware for dispatching actions in order to make HTTP requests to express server properly.


## Functionality:
1. Authentication:
    Users can register, log and log out in this application. The password will be encrypted before storing on the database. The back-end will generate token for users. The token will expire within an hour for security reasons. After login, the information of users will be stored on MongoDB.

2. Create and Edit Profile:
    Users can create their own profile pages. There are several fields should be filled, including career status, field of study, handle and so on. Some fields are optional, including location, bio, social network links and so on. 

3. Github Repo:
    The profile page can show the Github repos for that user if the user has provided the GitHub username. 

3. Post and Comment:
    Users can post some articles and left the comments. In addition, users are able to like and unlike the posts. The post can be deleted by its owner.


## Architecture of Front-End
```
├── App.css
├── App.js
├── App.test.js
├── actions
│   ├── authActions.js
│   ├── clearErrorAction.js
│   ├── postAction.js
│   ├── profileActions.js
│   └── types.js
├── components
│   ├── add-credentials
│   │   ├── AddEducation.js
│   │   └── AddExperience.js
│   ├── auth
│   │   ├── Login.js
│   │   └── Register.js
│   ├── common
│   │   ├── InputGroup.js
│   │   ├── PrivateRoute.js
│   │   ├── SelectListGroup.js
│   │   ├── Spinner.js
│   │   ├── TextAreaFieldGroup.js
│   │   ├── TextFieldGroup.js
│   │   └── spinner.gif
│   ├── create-profile
│   │   └── CreateProfile.js
│   ├── dashboard
│   │   ├── Dashboard.js
│   │   ├── Education.js
│   │   ├── Experience.js
│   │   └── ProfileAction.js
│   ├── edit-profile
│   │   └── EditProfile.js
│   ├── layout
│   │   ├── Footer.js
│   │   ├── Landing.js
│   │   └── Navbar.js
│   ├── not-found
│   │   └── NotFound.js
│   ├── post
│   │   ├── CommentFeed.js
│   │   ├── CommentForm.js
│   │   ├── CommentItem.js
│   │   └── Post.js
│   ├── posts
│   │   ├── PostFeed.js
│   │   ├── PostForm.js
│   │   ├── PostItem.js
│   │   └── Posts.js
│   ├── profile
│   │   ├── Profile.js
│   │   ├── ProfileAbout.js
│   │   ├── ProfileCreds.js
│   │   ├── ProfileGithub.js
│   │   └── ProfileHeader.js
│   └── profiles
│       ├── ProfileItem.js
│       └── Profiles.js
├── img
│   └── showcase.jpg
├── index.css
├── index.js
├── reducers
│   ├── authReducer.js
│   ├── errorReducer.js
│   ├── index.js
│   ├── postReducer.js
│   └── profileReducer.js
├── serviceWorker.js
├── store.js
├── utils
│   └── setAuthToken.js
└── validation
    └── is-empty.js
```


## Architecture of Back-End
```
.
├── client
├── config
│   ├── keys.js
│   ├── keys_dev.js
│   ├── keys_prod.js
│   └── passport.js
├── models
│   ├── Post.js
│   ├── Profile.js
│   └── User.js
├── node_modules
├── package-lock.json
├── package.json
├── routes
│   └── api
│       ├── posts.js
│       ├── profile.js
│       └── users.js
├── server.js
└── validation
    ├── education.js
    ├── experience.js
    ├── is-empty.js
    ├── login.js
    ├── post.js
    ├── profile.js
    └── register.js
```