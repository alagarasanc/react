import React, { useRef, useState } from 'react';
import './AddNewItem.css'

const AddItems = (props)=>{
    const get_rate = useRef();

    const [data_inputs, setinputs]=useState({
        description:"",
        date:"",
        rate:""
    });
    const [isstyle,setstyle]=useState(false)
    const addDescription = (event)=>{
        setinputs({
            ...data_inputs,
            description:event.target.value
        })
        if (data_inputs.description.length>2){
            setstyle(true)
        }else{setstyle(false)}
    }
    const addDate = (event)=>{
        setinputs({
            ...data_inputs,
            date:event.target.value
        })
    }
    const addRate = (event)=>{
        setinputs({
            ...data_inputs,
            rate:event.target.value
        })
    }
    const submit_event = (event)=>{
        event.preventDefault();
        const new_data = data_inputs
        props.onSaveExpenses(new_data)
        setinputs({
            description:"",
            date:"",
            rate:""
        })
    }
    const [isedit, setedit] = useState(false)
    const change_event_true = ()=>{
        setedit(true)
    }
    const change_event_false = ()=>{
        setedit(false)
    }


    if (isedit===false){
        return(<div className='add_item'>
            <button type ='button' onClick={change_event_true} className='new_button'>ADD ITEM</button> 
        </div>)
    }

    return(
        <div className='add_item'>
            <form className='item_form' onSubmit={submit_event}>
                    <label htmlFor= "item_title">TITLE:</label>
                    <input type = "text" id="item_title" className={isstyle ? '':'empty' }name='description' value={data_inputs.description} onChange={addDescription}></input>
                    <label htmlFor= "item_date">DATE:</label>
                    <input type = "date" id="item_date" name='date' value={data_inputs.date} onChange={addDate}></input>
                    <label htmlFor= "item_rate">RATE:</label>
                    <input type = "text" id="item_rate" name='rate' value={data_inputs.rate} onChange={addRate} ref={get_rate}></input>
                    <div className='item_submit'>
                    <div className='buttons'>
                        <button type='submit'>ADD</button>   
                        <button type ='button' onClick={change_event_false}>Cancel</button>  
                    </div>     
                    </div>
            </form>
        </div>
    )
}

export default AddItems