import './admin.css';

function Admin() {
    return (
        <div className='admin'>
            <h1>Hello Admin !</h1>

            <div className='container'>
                <h2>What do you want to do ?</h2>

                <div className='div_admin_choice'>
                    <a className='btn_choice_admin' href='admin/createMenu'>Create Menu</a>
                    <a className='btn_choice_admin' href='admin/createProduct'>Create Product</a>
                    <a className='btn_choice_admin' href='admin/orders'>View or edit order</a>
                </div>
            </div>
        </div>
    )
}

export default Admin