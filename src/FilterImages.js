import Component from './Component.js';


class FilterImages extends Component {
    onRender(select) {
        const onFilter = this.props.onFilter;

        select.addEventListener('input', () => {
            onFilter(select.value);
        });
    } 

    renderHTML() {
        const images = this.props.images;
        const types = getUniqueTypes(images);
        const optionsHTML = renderOptionsHTML(types);

        return /*html*/`
        <select class="search-bar"><option selected value="view-all">View All</option>${optionsHTML}</select>
        `;
    }
}

function getUniqueTypes(images) {
    const types = [];
    images.forEach(image => {
        if(!types.includes(image.horns)) {
            types.push(image.horns);
        }
    });

    types.sort();
    return types;
}

function renderOptionsHTML(types) {
    const optionsArray = types.map(type => {
        return /*html*/`<option value="${type}">Horns: ${type}</option>`;
    });

    return optionsArray.join('');
}

export default FilterImages;