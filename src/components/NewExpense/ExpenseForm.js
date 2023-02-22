import { useState } from "react";

import "./ExpenseForm.css";

export default function ExpenseForm() {


    //You can one state instead of multiple but then,
    // in every handler function you will have to copy your
    // previous states' objects which are not updated

    // ex.

    // const [userInput, setUserInput]=useState({
    //     enteredTitle: "",
    //     enteredAmpunt: "",
    //     enteredDate: ""
    // })

    // const titleChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,        //COPY PREVIOUS DATA
    //         enteredTitle: event.target.value
    //     })
    // };


    // Hence more readable and less confusing to use multiple states
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");

        console.log(expenseData);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <title>Title</title>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <title>Amount</title>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <title>Title</title>
                    <input type="date" min="2019-01-01" max="2023-01-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}