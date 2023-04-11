import './IconItem.css'

const IconItem = (props) => {
    return (
        <li className="item">
          
            <div className="image">
              <img src={props.image} alt={props.title} />
            </div>
            <div className="content">
              <h3>{props.title}</h3>
              <address>{props.address}</address>
            </div>
            <div className="actions">
              <button>Show Details</button>
            </div>
          
        </li>
      );
}

export default IconItem
