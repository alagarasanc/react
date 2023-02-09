import React from 'react';
import './ExpenseDate.css'

const ExpenseDate=(props)=>{

return(
    <div className='Expense_Date'>
        <div>{props.month}</div>
        <div>{props.day}</div>
        <div>{props.year}</div>
    </div>
)
}

export default ExpenseDate;