import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/Home.css'

function Home() {

	const [products, setProducts] = useState([]);
	const [searchProduct, setSearchProduct]=useState('')
	const changeRoute = useNavigate();
	// You should call navigate() in a React.useEffect(), not when your component is first rendered.
	useEffect(()=>{
		const getAuthToken = localStorage.getItem('authToken')
		if(!getAuthToken){
			return changeRoute("/")
		}

		fetch('https://dummyjson.com/products')
		.then(res => res.json())
		.then(data=>{ 
			// console.log("products",data.products);
			setProducts(data.products)
		}
		
		);
	}, [])

	useEffect(()=>{

		// fetch(`https://dummyjson.com/products/search?q=${searchProduct}`)
		// .then(res => res.json())
		// .then(data=>setProducts(data.products));

		fetch(`https://dummyjson.com/products/search?q=${searchProduct}&search=title,price`)
		.then(res => res.json())
		.then(data=>{
			// console.log(data.products);
			setProducts(data.products);
			// console.log(data.products);
			
		});
		
	},[searchProduct])


	// const productParentDiv={
	// 	display:"grid",
	// 	grid-template-column:1fr 1fr 1fr,

	// }

	return (
		<>
			<div className='topbar'>
				<h1>Product page</h1>

				<div className='search_bar'>
					<label htmlFor="seachProductName">Seach </label>
				<input type="seach" name='seachProductName'
				placeholder='Search Product'
				value={searchProduct}
				onChange={(e)=>{setSearchProduct(e.target.value)}} />
				</div>
			</div>
			<div className='product_container'>
			
			{products.map((item)=>{

				return (
					
					<div className='product_item'>
						<img src={item?.thumbnail} alt="" />
						<h3>{item.title}</h3>
						<p>{item.description}</p>
						<span>Price: {item.price}</span>
						<br />
						<button>+ Add to Cart</button>
					</div>
					
				)
			})}
			</div>
		</>

	)
}

export default Home