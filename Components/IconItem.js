import classes from './IconItem.module.css'
import Link from 'next/link'

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
          <Link href={`/${props.id}`}>Show Details</Link>
        </div>
      
    </li>
      );
}

export default IconItem
