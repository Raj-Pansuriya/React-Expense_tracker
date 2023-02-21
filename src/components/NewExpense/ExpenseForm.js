import "./ExpenseForm.css"

export default function ExpenseForm() {
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <title>Title</title>
                    <input type="text" />
                </div>

                <div className="new-expense__control">
                    <title>Amount</title>
                    <input type="number" min="0.01" step="0.01" />
                </div>

                <div className="new-expense__control">
                    <title>Title</title>
                    <input type="date" min="2019-01-01" max="2023-01-31" />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}