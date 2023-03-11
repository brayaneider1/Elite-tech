import React, { useEffect } from 'react'
import {
  UilEstate,
  UilCheckCircle,
  UilHeart,
  UilShoppingCartAlt,
  UilTimesCircle,
  UilInfoCircle
} from "@iconscout/react-unicons";
import { motion } from 'framer-motion';
import { Link } from '@gatsbyjs/reach-router';
import Commerce from '@chec/commerce.js';

export const ProductCard = ({ product }) => {
  const commerce = new Commerce('pk_test_50010f2f8ded5a64ca30f1916fd8e1ce336c17aa36543');
  /* commerce.cart.delete().then((response) => console.log("item------------------->",response));
  commerce.cart.contents().then((items) => console.log("item------------------->",items)); */
  useEffect(() => {
    commerce.cart.retrieve().then();   
  }, [])
  
  const recortarString = (strg) => {
    let a = strg.replace("<p>", '');
    let b = a.replace("</p>", "");
    return b;
  }
  const item = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 }
  }

  const addToCard = ({ id, qt }) => {
    commerce.cart.add(id, 1).then((response) => console.log("aqui------------>", response));
  }

  return (

    <motion.div variants={item} className="card h-100 shadow-sm relative">
      <Link to={`/products/${product.permalink}/`}>
        <div >
          <img src={product.image.url} className="card-img-top" alt="product.title" />
        </div>

        <div className="label-top shadow-sm">
          <a className="text-white mb-2" href="#">{product.name}++</a>
        </div>
      </Link>
      <div className="card-body">

        <h5 className="card-title">
          <a target="_blank" href="#">{recortarString(product.description)}</a>
        </h5>
        <span className="bg-success">${product.price.formatted}</span>

        <div className='footer'>
          <a href="#" className="btn-warning bold-btn" onClick={() => addToCard(product)}>add to cart</a>
          <i className="far fa-heart"></i>
        </div>
      </div>
    </motion.div>
  )
}
