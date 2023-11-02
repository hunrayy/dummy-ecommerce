import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader'
function Product ()  {
    const [isStore, setStore] = useState([])
    const [Loading, setLoading] = useState(false)

    const baseUrl = 'https://fakestoreapi.com/products/'

    const Fetch = async()=>{
        const data = await axios.get(baseUrl)
        .then(res => {
            setStore(res.data)
        })
        setLoading(true)
    }
    useEffect(()=> {
        Fetch()
    }, [])

    


    // if(Loading) {
    //     return(
    //         <Loader />
    //     )
    // }

    return(
        <div className='produce'>
        {Loading ? <div className='products'>
        {
        (isStore.map((items) => (
            <div key={items.id} className='product card'>
                <img src={items.image} width="100px" className='card-body' />
                <h6 className='card-body'>{items.title}</h6>
                <h5 className='card-body'>${items.price}</h5>
                <button className='btn btn-outline-dark'>Add to cart</button>
             </div>
        )))
        }
        </div> : <Loader />}
        </div>
        // <div>
        //     {isStore.map((items) => (
        //     <div>
        //         <img src={items.image} width="300px"/>
        //      </div>
        //  ))}

        // </div>
    )
}

export default Product










// import axios from "axios"
// import React, { useEffect, useState } from "react"
// const Product = () => {
//     const [store, setStore] = useState([])
//     const baseUrl = "https://fakestoreapi.com/products"
//     const fetch = async () => {
//         try{
//             let data = await axios.get(baseUrl)
//             .then(res => {
//                 setStore(res.data)
//             })
//         }catch(error){
//             console.error(error)
//         }
        
//     }
//     useEffect(()=> {
//         fetch()
//     })
//     return(
//         <div>
//             {store.map((items) => (
//                 <div><img src={items.image}width="200px" /></div>
//             ))}
//         </div>
//     )
// }


// export default Product