import images from './data/images.js';
import FilterImage from './FilterImages.js';
import ImageList from './ImageList.js';
import Component from './Component.js';
import Header from './Header.js';
// import SortImages from './SortImages.js';

class App extends Component {

    onRender(dom) {

        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const props = {
            images: images
        };

        const imageList = new ImageList(props);
        const imageListDOM = imageList.renderDOM();
        const listSelection = dom.querySelector('.cards-container');

        listSelection.appendChild(imageListDOM);
        
        const filterImagesProps = {
            images: images,
            onFilter: (imageHorns) => {
                let filteredImages;
                if(imageHorns === 'all') {
                    filteredImages = images;
                }
                else {
                    filteredImages = images.filter(image => {
                        return image.keyword === imageHorns;
                    });
                }
                
                const updateProps = { images: filteredImages };
                imageList.update(updateProps);
            }
        };

        const filterImages = new FilterImage(filterImagesProps);
        const filterImagesDOM = filterImages.renderDOM();
        const optionSection = dom.querySelector('.search-bar');
        optionSection.appendChild(filterImagesDOM);
    }

    renderHTML() {
        return /*html*/`
            <main>
                <section class="search-bar"></section>
                <section class="cards-container"></section>
            </main>
        `;
    }
}

export default App;