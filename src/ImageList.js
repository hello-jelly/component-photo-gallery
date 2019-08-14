import Component from './Component.js';
import ImageItem from './ImageItem.js';

class ImageList extends Component {

    onRender(dom) {
        const images = this.props.images;

        images.forEach(image => {
            const props = { image: image };
            const imageItem = new ImageItem(props);
            const imageDOM = imageItem.renderDOM();
            dom.appendChild(imageDOM);
        });

    }

    renderHTML() {
        return /*html*/ `
        <ul class="cards">
        </ul>
        `;
    }
}

export default ImageList;