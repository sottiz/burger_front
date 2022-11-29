import './createMenu.css';
import { AppFormProperties, useState } from "react";

function CreateProduct() {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [promo, setPromo] = useState(false);
    const [featuredProduct, setFeaturedProduct] = useState(false);

    const handleSubmit = (event) => {
        //alert("data : " + name + " " + category + " " + price + " " + promo + " " + featuredProduct)
        event.preventDefault(); // evite de reload la page
        if (AppFormProperties.onSubmit !== undefined) {
            AppFormProperties.onSubmit({
                name,
                category,
                price,
                promo,
                featuredProduct
            });
        }
    }

    const handleNameChange = (event) => {
        setName(event.currentTarget.value);
    }

    const handleCategoryChange = (event) => {
        setCategory(event.currentTarget.value);
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
                <h2>Create Product</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" placeholder="name" value={name} onChange={handleNameChange} />
                    </div>
                    <div className='admin_select'>
                        <label>Category
                            <select className='label_select'
                            value={category} onChange={handleCategoryChange}>
                                <option value="Drink">Drink</option>
                                <option value="Hamburger">Hamburger</option>
                                <option value="Snak">Snak</option>
                                <option value="Accompaniement">Accompaniement</option>
                                <option value="dessert">Dessert</option>
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

export default CreateProduct
