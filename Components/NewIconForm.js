import { useState } from "react";
import classes from './NewIconForm.module.css'

const NewIconForm = () => {
      const [name, setName] = useState("");
      const [image, setImage] = useState("");
      const [address, setAddress] = useState("");
      const [description, setDescription] = useState("");
      
      const nameHandler = (event) => {
        setName(event.target.value);
      };
      const imageHandler = (event) => {
        setImage(event.target.value);
      };
      const addressHandler = (event) => {
        setAddress(event.target.value);
      };
      const descriptionHandler = (event) => {
        setDescription(event.target.value);
      };
      const submitHandler = (event) => {
        event.preventDefault();
        
        };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Stadium Name</label>
          <input type='text' required id='title' value={name} onChange={nameHandler}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Stadium Image</label>
          <input type='url' required id='image' value={image} onChange={imageHandler}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' value={address} onChange={addressHandler}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            value={description}
            onChange={descriptionHandler}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Stadium</button>
        </div>
      </form>
  )
}

export default NewIconForm
