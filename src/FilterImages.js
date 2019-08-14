import Component from './Component.js';


class FilterImages extends Component {

    onRender(select){
        const onFilter = this.props.onFilter;
        select.addEventListener('input', () => {
            onFilter(select.value);
        });

    }
}

export default FilterImages;