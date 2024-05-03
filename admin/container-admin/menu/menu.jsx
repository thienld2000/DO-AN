import React from 'react'
import './menu.css'

const menu = () => {
  return (
    <>
        <div claasName="card-container">
				<h3 claasName="khuyenmai-header"> khuyễn mãi</h3>
				<div claasName="card">
					<img src="path_to_your_image.jpg" alt="Meat Stew" claasName="card-img"/>
					<div claasName="card-body">
						<h2 claasName="card-title">Meat Stew</h2>
						<div claasName="card-price">$25.00</div>
						<div claasName="card-info">Orders: 15</div>
						<div claasName="card-info">Income: $175</div>
					</div>
				</div>
				<div claasName="card">
					<img src="path_to_your_image.jpg" alt="Meat Stew" claasName="card-img"/>
					<div claasName="card-body">
						<h2 claasName="card-title">Meat Stew</h2>
						<div claasName="card-price">$25.00</div>
						<div claasName="card-info">Orders: 15</div>
						<div claasName="card-info">Income: $175</div>
					</div>
				</div>
			</div>
    </>
  )
}

export default menu