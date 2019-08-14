import Component from './Component.js';

class ItemImage extends Component {
    renderHTML() {
        const image = this.props.image;

        return /*html*/`
        <li class="card">
            <div>
                <h2>${image.title}</h2>
                <p>Horns: ${image.horns}</p>
            </div>
            <div class="img-contain" title="${image.description}">
                <img src="${image.url}" alt="${image.description}">
            </div>
        </li>
        `;
    }
}

export default ItemImage;