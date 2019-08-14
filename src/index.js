import App from './App.js';

const root = document.getElementById('root');
const app = new App();
console.log(root);

const dom = app.renderDOM();

root.appendChild(dom);