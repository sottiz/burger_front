import './createMenu.css';
import { AppFormProperties, useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom'

function CreateMenu() {

    const [name, setName] = useState('');
    const [products, setProducts] = useState([]);
    const [size, setSize] = useState('');
    const [price, setPrice] = useState('');
    const [promo, setPromo] = useState(false);
    const [featuredProduct, setFeaturedProduct] = useState(false);

   
         // evite de reload la page
        async function handleSubmit(event) {
            event.preventDefault();
            const form = new FormData();
            form.append('menu', name);
            form.append('product', products);
            form.append('price', price);
            

    
            const response = await axios.post('http://localhost:3003/order/',{
                menu: name,
                product: products,
                price: price
            }).then(function (response) { 
                
                console.log(response); 
            })

        }

    const handleNameChange = (event) => {
        setName(event.currentTarget.value);
    }

    const handleProductsChange = (event) => {
        setProducts(event.currentTarget.value);
    }

    const handleSizeChange = (event) => {
        setSize(event.currentTarget.value);
    }

    const handlePriceChange = (event) => {
        setPrice(event.currentTarget.value);
    }

    const handlePromoChange = (event) => {
        setPromo(event.currentTarget.value);
    }

    const handleFeaturedProductChange = (event) => {
        setFeaturedProduct(event.currentTarget.value);
    }

    return (
        <div className='admin_menu'>
            <h1>Hello Admin !</h1>

            <div className='admin_form_menu'>
                <h2>Create Menu</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" placeholder="name" value={name} onChange={handleNameChange} />
                    </div>
                    <div>
                        <input type="text" placeholder="products" value={products} onChange={handleProductsChange} />
                    </div>
                    <div className='admin_select'>
                        <label>Size
                            <select className='label_select'
                            value={size} onChange={handleSizeChange}>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="XL">XL</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <input type="text" placeholder="price" value={price} onChange={handlePriceChange} />
                    </div>



                    <div className='admin_select'>
                        <label>Promotion
                            <select className='label_select'
                            value={promo} onChange={handlePromoChange}>
                                <option value="False">No</option>
                                <option value="True">Yes</option>
                            </select>
                        </label>
                    </div>
                    <div className='admin_select'>
                        <label>Featured product
                            <select className='label_select' value={featuredProduct} onChange={handleFeaturedProductChange}>
                                <option value="False">No</option>
                                <option value="True">Yes</option>
                            </select>
                        </label>
                    </div>
                    <input className='send' type="submit" defaultValue="Send" />
                </form>
            </div>
        </div>
    )
}

export default CreateMenu
