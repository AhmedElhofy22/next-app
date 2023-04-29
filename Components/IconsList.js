import IconItem from "./IconItem";
import classes from './IconList.module.css'

const IconsList = (props) => {
    return (
        <ul className={classes.list}>
          {props.stadiums.map((stadium) => (
            <IconItem
              key={stadium.id}
              id={stadium.id}
              image={stadium.image}
              name={stadium.name}
              address={stadium.address}
            />
          ))}
        </ul>
      );
}

export default IconsList
