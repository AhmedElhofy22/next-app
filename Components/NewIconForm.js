import { useRef } from "react";
import classes from './NewIconForm.module.css'

const NewIconForm = (props) => {
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
    
      const submitHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

       const iconData = {
         title: enteredName,
         image: enteredImage,
         address: enteredAddress,
         description: enteredDescription,
       };

          props.onAddStadium(iconData);
        
        };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Stadium Name</label>
          <input type='text' required id='title' ref={nameInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Stadium Image</label>
          <input type='url' required id='image' ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Stadium</button>
        </div>
      </form>
  )
}

export default NewIconForm
