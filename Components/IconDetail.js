import classes from './IconDetail.module.css'

const IconDetail = (props) => {
  return (
    <div className={classes.detail}>
    <img
      src={props.image}
      alt={props.name}
    />
    <h1>{props.name}</h1>
    <address>{props.address}</address>
    <p>{props.description}</p>
  </div>
  )
}

export default IconDetail;
