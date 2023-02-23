import React from 'react'
import {
  UilEstate,
  UilCheckCircle,
  UilHeart,
  UilShoppingCartAlt,
  UilTimesCircle,
  UilInfoCircle
} from "@iconscout/react-unicons";
export const ProductCard = () => {
  return (
    <div className="card h-100 shadow-sm relative">
      <a href="#">
        <img src="https://m.media-amazon.com/images/I/81gK08T6tYL._AC_SL1500_.jpg" className="card-img-top" alt="product.title" />
      </a>

      <div className="label-top shadow-sm">
        <a className="text-white mb-2" href="#">asus</a>
      </div>
      <div className="card-body">

        <h5 className="card-title">
          <a target="_blank" href="#">ASUS TUF FX505DT Gaming Laptop- 15.6", 120Hz Full HD, AMD Ryzen 5 R5-3550H Processor, GeForce GTX 1650 Graphics, 8GB DDR4, 256GB PCIe SSD, RGB Keyboard, Windows 10 64-bit - FX505DT-AH51</a>
        </h5>
        <span className="bg-success">1.245$</span>

        <div className='footer'>
          <a href="#" className="btn-warning bold-btn">add to cart</a>
          <i className="far fa-heart"></i>
        </div>
      </div>
    </div>
  )
}
