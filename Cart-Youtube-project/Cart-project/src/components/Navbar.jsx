import React from 'react'
import "../styles/navbar.css"

export default function Navbar({size}) {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop">
                My Shopping
            </span>
            <div className="cart">
                <span>
                <i className="fa-solid fa-cart-shopping"></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}
