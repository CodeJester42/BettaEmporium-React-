import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {

  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          <p>Sort By</p>
          <select>
            <option value="default">Default</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_product.map((item, i)=>{
          if  (props.category===item.category) {
            return <Item key={i}image={item.image} name={item.name} price={item.price} />
          }
          else {
            return null;
          }
        })}        
      </div>
    </div>
  )
}

export default ShopCategory
