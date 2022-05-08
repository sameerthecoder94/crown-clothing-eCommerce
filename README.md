# Crown Clothing
### Capstone Project Flow
#### Intro + Setup
- __Lesson 1__: Setup with CRA, removed CRA code and added initial categories
- __Lesson 2__: Setting up Categories
- __Lesson 3__: Adding SASS
- __Lesson 4__: Spliting out cart-item into its own component
#### Routing + React-Router
- __Lesson 5__: Adding React-Router
- __Lesson 6__: Setting up Homepage `<Home />`
- __Lesson 7__: React Router `<Outlet />` for nested route
- __Lesson 8__: React Router Link `<Link />` 

#### Authentication + Firebase
- __Lesson 9__: Setting Up Firebase
- __Lesson 10__: Authenticating with Firebase
- __Note__:
  - You will need to create a Firebase account for this to work.  You can do this by going to the Firebase console and creating a new project.
  - Firebase is a great way to store data and authenticate users. It helps you to keep your data safe and secure. You can also use Firebase to create your own custom authentication system. This is a great way to create a login system for your website.
  - [Firebase](https://firebase.google.com/)
  - [Firebase Setup](https://firebase.google.com/docs/web/setup)
  - [Firebase Products](https://firebase.google.com/docs/web/setup#available-libraries)
  - ```js // Firebase Setup
    // Import the functions you need from the SDKs you need
    import { initializeApp } from 'firebase/app';

    // TODO: Replace the following with your app's Firebase project configuration
    const firebaseConfig = {
        //...
    };

    const app = initializeApp(firebaseConfig);
    ```
- __Lesson 11__: Introducing Firestore Data Models
- __Lesson 12__: Setting Up User Documents
- __Lesson 13__: Two ways of signIn,
    - signInWithPopup: sign in with google popup ✅
    - SignInWithRedirect: sign in with google redirect
- __Lesson 14__: SignUp Form `<SignUpForm />`
- __Lesson 15__: Generalizing Form Inputs `<FormInput />`
- __Lesson 16__: Custom Button `<Button />`
- __Lesson 17__: SignIn Form `<SignInForm />`
- __Lesson 18__: Finishing Authentication Page `<Authentication />`

#### React Context for State Management
- __Lesson 19__: Setting Up React Context/User Context