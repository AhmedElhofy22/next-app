import classes from './IconItem.module.css'

const IconItem = (props) => {
    return (
        <li className={classes.item}>
      
        <div className={classes.image}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button>Show Details</button>
        </div>
      
    </li>
      );
}

export default IconItem
