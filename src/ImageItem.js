import Component from './Component.js';
import images from '../src/data/images.js';

const image = images[0];

class ItemImage extends Component {
    renderHTML() {
        const item = this.props.item;

        return /*html*/`
        <li>
            <div>
                <h2>${image.title}</h2>
                <p>Horns: ${image.horns}</p>
            </div>
            <div class="img-contain" title="${image.description}">
                <img src='${image.url}' alt='${image.description}'></img>
            </div>
        </li>
        `;
    }
}