import React, { useCallback, useEffect, useState } from 'react';
import ExpenseCondition from './components/ExpenseCondition';
import AddItems from './components/AddNewItem'
import "./App.css"



const App =()=>{
  const[data_error,seterror]=useState(null);
  const [new_list, setlist]=useState([]);

  const fetch_data =useCallback(async()=>{
    seterror(null)
    try{
    const response = await fetch('https://swapi.dev/api/films/')
    if(response.status!==200){
      throw new Error('something went wrong')
    }
    const data = await response.json()
    const needed_data = data.results.map((flimdata)=>{
      return{
        date:flimdata.release_date,
        rate: `EP-${flimdata.episode_id}`,
        description:flimdata.title
    }
  })
  setlist(needed_data)
  }catch (err){
    seterror(err.message)
  }
},[]);

  useEffect(()=>{fetch_data();  
  },[fetch_data])

  
  const newData = (inputvalue)=>{
    if(inputvalue.description&&inputvalue.rate&&inputvalue.date){
      setlist(list_values=> [inputvalue, ...list_values])      
    }
    setlist(list_values=> [...list_values])
  }

  return (
    <React.Fragment>
      <h1>
        MY first react APP 
      </h1>
      <AddItems onSaveExpenses={newData}/>
      <div className='list_item'>
      {data_error&&<p> {data_error}</p>}
      {!data_error&&<ExpenseCondition onadddata={fetch_data} item ={new_list}/>}
      </div>
    </React.Fragment>
  )
}


export default App;
