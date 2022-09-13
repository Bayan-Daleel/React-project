import './ExpenseForm.css';
const ExpenseForm=()=>{
return (
<form className="">
    <div className="form-group">
<label>Title</label>
<input type="text" name="title"/>
    </div>
    <div className="form-group">
<label>Price</label>
<input type="number" name="price" min="1" step="0.1"/>
    </div>
    <div className="form-group">
<label>Date</label>
<input type="date" name="date" min="2022-01-01" step="2022-12-13"/>
    </div>

    <div className="form-group">
<button type="submit">submit</button>
    </div>
</form>

)


};

export default ExpenseForm;