import renderImage from './render-img.js';
import htmlToDOM from './utils/html-to-DOM.js';
import images from '../data/images.js';

const placement = document.getElementById('cards');

images.forEach(image => {
    const html = renderImage(image);
    const dom = htmlToDOM(html);
    placement.appendChild(dom);
});