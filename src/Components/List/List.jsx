import ListItem from '../Item';
import './list.style.css';

function List({ items = [] }) {
    const map = items.map((item) => {
        return (
            <ListItem key={item.id} item={item} />
        );
    });

    return (
        <div className='list-wrapper'>
            <ul className='list'>
                {map}
            </ul>
        </div>
    );
}

export default List;
