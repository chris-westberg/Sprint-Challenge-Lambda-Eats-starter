import React, {useState} from 'react';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components'

const OrderForm = () => {
    const [formData, setFormData] = useState({
        name: '', 
        size: '', 
        sauce: '',
        pepperoni: false,
        sausage: false,
        peppers: false,
        onions: false, 
        special: ''

    })
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const toppingsChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.checked})
    }
    const schema = yup.object().shape({
        name: yup.string().required().min(2)
    })
    const submit = () => {
        schema.validate(formData).then(() => {
            axios.post('https://reqres.in/api/users', formData).then((res) => {console.log(res.data)})
        })
    }
    const getOption = (selected) => {
        var value = selected.value
        console.log(value)
    }
    const reset = () => {
        setFormData({
            name: '', 
        size: '', 
        sauce: '',
        pepperoni: false,
        sausage: false,
        peppers: false,
        onions: false, 
        special: ''
        })
    }
    return (
        <>
            <form data-cy='submit' onSubmit={(e)=> {
                e.preventDefault()
                submit()
            }}>
            <div>
                <label htmlFor='name'>
                    Name:
                    <input type='name' id='name' data-cy='name' name='name' value={formData.name}placeholder='Enter name here...' onChange={handleChange} />
                </label>
            </div>
            <div>
                <label htmlFor='size'>
                    Size:
                    <select id='size' name='size' value={formData.size} onChange={handleChange}>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>
                <label htmlFor='sauce'>
                    Sauce:
                    <select id='sauce' name='sauce' value={formData.sauce} onChange={handleChange} >
                        <option value='original'>Original</option>
                        <option value='marinara'>Marinara</option>
                        <option value='alfredo'>Alfredo</option>
                    </select>
                </label>
            </div>
            <div>
                <p>Toppings</p>
                <label>
                    <input name='pepperoni' type='checkbox' data-cy='pepperoni' checked={formData.pepperoni} onChange={toppingsChange} />
                    Pepperoni
                </label>
                <br />
                <label>
                    <input name='sausage'  type='checkbox' checked={formData.sausage} data-cy='sausage' onChange={toppingsChange} />
                    Sausage
                </label>
                <br />
                <label>
                    <input name='peppers'  type='checkbox' data-cy='peppers' checked={formData.peppers} onChange={toppingsChange} />
                    Peppers
                </label>
                <br />
                <label>
                    <input name='onions' data-cy='onions' type='checkbox' checked={formData.onions} onChange={toppingsChange} />
                    Onions
                </label>
                <br />
            </div>
            <div>
                <p>Special Instructions</p>
                <textarea id='special' name='special' data-cy='special' onChange={handleChange}/> <br />
            </div>
            <div>
                    <button style={{border: 'none', backgroundColor: 'white', cursor: 'pointer'}}type='submit'>Submit</button>
                    <button style={{border: 'none', backgroundColor: 'white', cursor: 'pointer'}} onClick={() => {reset()}}>Reset</button>
            </div>
            </form>
        </>
    );
}

export default OrderForm