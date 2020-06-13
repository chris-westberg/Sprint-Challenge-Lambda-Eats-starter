import React, {useState} from 'react';
import * as yup from 'yup';
import axios from 'axios';

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
    return (
        <>
            <form onSubmit={(e)=> {
                e.preventDefault()
                submit()
            }}>
            <label htmlFor='name'>
                Name:
                <input type='name' id='name' name='name' value={formData.name}placeholder='Enter name here...' onChange={handleChange} />
            </label>
            <br />
            <label htmlFor='size'>
                Size:
                <select id='size' name='size'>
                    <option onClick={() => {setFormData({...formData, size: 'small'})}}>Small</option>
                    <option onClick={() => {setFormData({...formData, size: 'medium'})}}>Medium</option>
                    <option onClick={() => {setFormData({...formData, size: 'large'})}}>Large</option>
                </select>
            </label>
            <label htmlFor='sauce'>
                Sauce:
                <select id='sauce' name='sauce'>
                    <option onClick={() => {setFormData({...formData, sauce:'original'})}}>Original</option>
                    <option onClick={() => {setFormData({...formData, sauce:'marinara'})}}>Marinara</option>
                    <option onClick={() => {setFormData({...formData, sauce:'alfredo'})}} >Alfredo</option>
                </select>
            </label>
            <p>Toppings</p>
            <label>
                <input name='pepperoni' type='checkbox' checked={formData.pepperoni} onChange={toppingsChange} />
                Pepperoni
            </label>
            <br/>
            <label>
                <input name='sausage'  type='checkbox' checked={formData.sausage} onChange={toppingsChange} />
                Sausage
            </label>
            <br/>
            <label>
                <input name='peppers'  type='checkbox' checked={formData.peppers} onChange={toppingsChange} />
                Peppers
            </label>
            <br/>
            <label>
                <input name='onions' type='checkbox' checked={formData.onions} onChange={toppingsChange} />
                Onions
            </label>
            <p>Special Instructions</p>
            <textarea id='special' name='special' onChange={handleChange}/> <br />
            <button type='submit'>Submit</button>
            </form>
        </>
    );
}

export default OrderForm