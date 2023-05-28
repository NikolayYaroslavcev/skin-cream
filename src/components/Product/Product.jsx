import React, {useState} from 'react';
import css from './Product.module.css'
import Plane from '../../assets/plane.png'
import {ProductsData} from '../../data/products'


export const Product = () => {
    const [MenuProducts, SetMenuProducts] = useState(ProductsData);


    const filter = (type) => () => {
        SetMenuProducts(ProductsData.filter((product) => product.type === type))
    }

    return (
        <div className={css.container}>
            <img src={Plane} alt="plane"/>
            <h1>Our Featured Products</h1>
            <div className={css.products}>
                <ul className={css.menu}>
                    <li onClick={()=>SetMenuProducts(ProductsData)}>All</li>
                    <li onClick={filter('skin care')}>Skin Care</li>
                    <li onClick={filter('conditioner')}>Conditioners</li>
                    <li onClick={filter('foundation')}>Foundations</li>
                </ul>

                <div className={css.list}>
                    {MenuProducts.map((product, index) => {
                        return (
                            <div key={index} className={css.prod}>
                                <div className="left">
                                    <div className='name'>
                                        <span>{product.name}</span>
                                        <span>{product.detail}</span>
                                    </div>
                                    <span>{product.price}$</span>
                                    <div>Show Now</div>
                                </div>
                                <img src={product.img} alt="product" className='product-imag'/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

