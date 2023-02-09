import React, { useState } from 'react';
import ExpenseItem from './ExpensesItem';
import "./ExpenseCondition.css"

const ExpenseCondition = (props)=>{

  let response = <p>Loading...</p>
  if(props.item.length!==0){
      response = props.item.map(values => <ExpenseItem key = {Math.random()} date = {new Date(values.date)} rate={values.rate} description={values.description}></ExpenseItem>)
  }
  return response
}


export default ExpenseCondition