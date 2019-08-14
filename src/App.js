import images from '../data/images.js';
import FilterImage from './FilterImages.js';
import ImageList from './ImageList.js';
import ImageItem from './ImageItem.js';
import Component from './Component.js';

class App extends Component {

    const filterImagesProps = {
        images: images,
        onFilter: (imageHorns) => {
            let filteredImages;
            if(imageHorns === 'all') {
                filteredImages = images;
            }
            else {
            filteredImages = images.filter(image => {
                return image.horns = imageHorns;
            });
            }

            const updateProps = { images: filteredImages };
            ImageList.update(updateProps);
        }
    }
};