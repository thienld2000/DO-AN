import React from 'react'

import './dashboard.css'

const dashboard = () => {
  return (
    <>
    <section id="sidebar">
		<a href="#" claasName="brand">
			<i claasName='bx bxs-smile'></i>
			<span claasName="text">AdminHub</span>
		</a>
		<ul claasName="side-menu top">
			<li claasName="active">
				<a href="#">
					<i claasName='bx bxs-dashboard'></i>
					<span claasName="text">Dashboard</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i claasName='bx bxs-shopping-bag-alt'></i>
					<span claasName="text">Menus</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i claasName='bx bxs-doughnut-chart'></i>
					<span claasName="text">Orders</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i claasName='bx bxs-message-dots'></i>
					<span claasName="text">Custommers</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i claasName='bx bxs-group'></i>
					<span claasName="text">Tables</span>
				</a>
			</li>
		</ul>
		<ul claasName="side-menu">
			<li>
				<a href="#">
					<i claasName='bx bxs-cog'></i>
					<span claasName="text">Settings</span>
				</a>
			</li>
			<li>
				<a href="#" claasName="logout">
					<i claasName='bx bxs-log-out-circle'></i>
					<span claasName="text">Logout</span>
				</a>
			</li>
		</ul>
	</section>
	<section id="content">
		
		<nav>
			<i claasName='bx bx-menu'></i>
			<a href="#" claasName="nav-link">Categories</a>
			<form action="#">
				<div claasName="form-input">
					<input type="search" placeholder="Search..."/>
					<button type="submit" claasName="search-btn"><i claasName='bx bx-search'></i></button>
				</div>
			</form>
			<input type="checkbox" id="switch-mode" hidden/>
			<label for="switch-mode" claasName="switch-mode"></label>
			<a href="#" claasName="notification">
				<i claasName='bx bxs-bell'></i>
				<span claasName="num">8</span>
			</a>
			<a href="#" claasName="profile">
				<img src="img/people.png"/>
			</a>
		</nav>
		<main>
			<div claasName="head-title">
				<div claasName="left">
					<h1>Dashboard</h1>
					<ul claasName="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i claasName='bx bx-chevron-right'></i></li>
						<li>
							<a claasName="active" href="#">Home</a>
						</li>
					</ul>
				</div>
				<a href="#" claasName="btn-download">
					<i claasName='bx bxs-cloud-download'></i>
					<span claasName="text">Download PDF</span>
				</a>
			</div>

			<ul claasName="box-info">
				<li>
					<i claasName='bx bxs-calendar-check'></i>
					<span claasName="text">
						<h3>1020</h3>
						<p>New Order</p>
					</span>
				</li>
				<li>
					<i claasName='bx bxs-group'></i>
					<span claasName="text">
						<h3>2834</h3>
						<p>Visitors</p>
					</span>
				</li>
				<li>
					<i claasName='bx bxs-dollar-circle'></i>
					<span claasName="text">
						<h3>$2543</h3>
						<p>Total Sales</p>
					</span>
				</li>
			</ul>

			<div claasName="table-data">
				<div claasName="order">
					<div claasName="head">
						<h3>Recent Orders</h3>
						<button>View all</button>
					</div>
					<table>
						<thead>
							<tr>
								<th>User</th>
								<th>Date Order</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>					
							<tr>
								<td>
									<img src="img/people.png"/>
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span claasName="status completed">Completed</span></td>
							</tr>
						</tbody>
					</table>
				</div>
				<div claasName="todo">
					<div claasName="head">
						<h3>Todos</h3>
						<i claasName='bx bx-plus'></i>
						<i claasName='bx bx-filter'></i>
					</div>
					<ul claasName="todo-list">
						<li claasName="completed">
							<p>Todo List</p>
							<i claasName='bx bx-dots-vertical-rounded'></i>
						</li>
						<li claasName="completed">
							<p>Todo List</p>
							<i claasName='bx bx-dots-vertical-rounded'></i>
						</li>
						<li claasName="not-completed">
							<p>Todo List</p>
							<i claasName='bx bx-dots-vertical-rounded'></i>
						</li>
						<li claasName="completed">
							<p>Todo List</p>
							<i claasName='bx bx-dots-vertical-rounded'></i>
						</li>
						<li claasName="not-completed">
							<p>Todo List</p>
							<i claasName='bx bx-dots-vertical-rounded'></i>
						</li>
					</ul>
				</div>

			</div>
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
		</main>
	</section>
    </>
  )
}

export default dashboard