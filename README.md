# SPA-React

## Getting Started
1. Clone or fork the project
2. Install all the required dependencies - ```npm install```
3. Run the project - ```npm start```

---

## This Repo is a simple React SPA (Single Page Application) development.

The project involves use of **SASS / SCSS** for styling to maintain the consistency of the styles throughout and to make it easier to style the elements and the children using nesting feature of SASS/SCSS.

```npm install sass --save-dev```

The project also involves use of **React-Bootstrap 5.1.1**.

**Bootstrap** can be very easily installed using Terminal window.

```npm install react-bootstrap bootstrap```

Once installed from terminal window, we need to import the following dependencies in **src/index.js** file :

```
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
```
---

**React Typing Effect** is a simple typing animation in ReactJS. We need to install the package for achieving it.

```npm i react-typewriter-effect```

Once installed, we can import the ReactTypingEffect from 'react-typing-effect'
```
import ReactTypingEffect from "react-typing-effect";
```

**AOS Animations** -

```npm install aos --save```

```
import AOS from 'aos';

(for class components)
componentDidMount() {
  AOS.init();
}

(for functional components)
useEffect(() => {
  AOS.init();
}, []);
```

Make sure to add ```import "aos/dist/aos.css";``` in index.js
