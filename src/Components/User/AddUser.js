import React, { useState } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = props => {
    const [enterName, setEnterName] = useState('');
    const [enterAge, setEnterAge] = useState('');
    const [error, setError] = useState();
    const enteredNameHandler = (event) => {
        setEnterName(event.target.value);
    };
    const enteredAgeHandler = (event) => {
        setEnterAge(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (enterName.trim().length === 0 || enterAge.trim().length === 0) {
            setError(
                {
                    title: 'Invalid input',
                    message:'please enter valid name and age'
                });
            return;
        }
        if (+enterAge < 1) {
            setError(
                {
                    title: 'Invalid input',
                    message:'please enter non negative age'
                });
            return;
        }
        props.onAddUser(enterName, enterAge);
        setEnterName('');
        setEnterAge('');
    };
    const errorHandler=()=>{
        setError(null);
    };
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
            <Card className={classes.input}>
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor="username">Name</label>
                    <input type="text" value={enterName} id="username" onChange={enteredNameHandler}></input>
                    <label htmlFor="age">Age(in number)</label>
                    <input id="age" type="number" value={enterAge} onChange={enteredAgeHandler}></input>
                    <Button type="submit">Add</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;