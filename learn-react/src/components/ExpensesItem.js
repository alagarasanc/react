import React, { useState } from 'react';
import "./ExpensesItem.css"
import "./ExspenseDate"
import ExpenseDate from './ExspenseDate';

const ExpenseItem=({description,rate,date})=>{
    return (<div className='Item'>
        <ExpenseDate day ={date.toLocaleString('en-US',{day:'2-digit'})} month ={date.toLocaleString('en-US',{month:'long'})} year={date.getFullYear()}></ExpenseDate>
        <div className='description'>{description}</div>
        <div className='rate'>{rate}</div>
    </div>)
};


export default ExpenseItem; 