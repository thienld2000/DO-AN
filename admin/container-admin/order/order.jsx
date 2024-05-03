import React from 'react'
import './order.css'

const order = () => {
  return (
    <>
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
    </>
  )
}

export default order