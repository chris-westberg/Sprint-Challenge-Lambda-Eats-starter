import React, {useState} from 'react';

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
    return (
        <>
            <label htmlFor='name'>
                Name:
                <input type='name' id='name' name='name' value={formData.name}placeholder='Enter name here...' onChange={handleChange} />
            </label>
            <br />
            <label htmlFor='size'>
                Size:
                <select id='size' name='size'>
                    <option onClick={setFormData({...formData, size:'small'})}>Small</option>
                    <option onClick={setFormData({...formData, size:'medium'})}>Medium</option>
                    <option onClick={setFormData({...formData, size:'large'})}>Large</option>
                </select>
            </label>
            <label htmlFor='sauce'>
                Sauce:
                <select id='sauce' name='sauce'>
                    <option value='original'>Original</option>
                    <option value='marinara'>Marinara</option>
                    <option value='alfredo'>Alfredo</option>
                </select>
            </label>
            <p>Toppings</p>
            <label>
                <input name='toppings' value='pepperoni' type='checkbox' checked={false} onChange={toppingsChange} />
                Pepperoni
            </label>
            <br/>
            <label>
                <input name='toppings' value='sausage' type='checkbox' checked={false} onChange={toppingsChange} />
                Sausage
            </label>
            <br/>
            <label>
                <input name='toppings' value='peppers' type='checkbox' checked={false} onChange={toppingsChange} />
                Peppers
            </label>
            <br/>
            <label>
                <input name='toppings' value='onions' type='checkbox' checked={false} onChange={toppingsChange} />
                Onions
            </label>
            <p>Special Instructions</p>
            <textarea id='special' name='special' /> <br />
            <button type='submit'>Submit</button>
        </>
    );
}

export default OrderForm