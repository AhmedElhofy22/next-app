import IconItem from "./IconItem";
import classes from './IconList.module.css'

const IconsList = (props) => {
    return (
        <ul className={classes.list}>
          {props.icons.map((icon) => (
            <IconItem
              key={icon.id}
              id={icon.id}
              image={icon.image}
              name={icon.name}
              address={icon.address}
            />
          ))}
        </ul>
      );
}

export default IconsList
