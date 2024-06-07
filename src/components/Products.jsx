import React, { useEffect, useState } from 'react'

const Products = () => {


    const [products, setProducts] = useState([]);

    const getProducts = async () => {

        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json();
        setProducts(data);
    }

    useEffect(() => {
        setTimeout(() => {
            getProducts();
        },2000)
    }, [])


    return (
        <>
            <h1 className='text-center my-3 text-4xl text-blue-950 font-bold'>Products</h1>

            <div className='flex flex-wrap gap-4'>

                {
                    products.map((val) => {
                        return (
                            <div className='w-[18rem] shadow-lg border h-[100%] rounded-md'>
                                <span className='bg-black text-white p-2 shadow-lg'>{val.category}</span>
                                <img src={val.image} className='h-[40vh] w-[100%]' alt={val.title}/>

                                <div className='p-2'>
                                    <h3>{val.title}</h3>
                                    <p>{val.description}</p>
                                    <span>Price : {val.price}$</span><br />
                                    <span>Rating :{val.rating.rate} </span><br />
                                    <button className='bg-black text-white p-2 rounded-md shadow hover:bg-white hover:text-black hover border border-black m-2'>Add to cart</button>
                                    <button  className='hover:bg-black hover:text-white p-2 rounded-md shadow m-2 border border-black'>Buy Now</button>
                                </div>
                            </div>
                        );
                    })
                }


            </div>



        </>
    )
}

export default Products