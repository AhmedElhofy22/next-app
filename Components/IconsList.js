import IconItem from "./IconItem";
import './IconList.css'

const IconsList = (props) => {
    return (
        <ul className="list">
          {props.icons.map((icon) => (
            <IconItem
              key={icon.id}
              id={icon.id}
              image={icon.image}
              title={icon.title}
              address={icon.address}
            />
          ))}
        </ul>
      );
}

export default IconsList
