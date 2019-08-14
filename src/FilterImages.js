import Component from './Component.js';


class FilterImages extends Component {
    renderHTML() {

        return /*html*/ `
        <select><option selected value="view-all">View All</option>
                <option value="one-horn">1 Horn</option>
                <option value="two-horn">2 Horns</option>
                <option value="three-horn">3 Horns</option>
                <option value="one-hundred-horn">100 Horns</option></select>
        `;
    }

    onRender(select){
        const onFilter = this.props.onFilter;
        select.addEventListener('input', () => {
            onFilter(select.value);
        });

    }

}

export default FilterImages;