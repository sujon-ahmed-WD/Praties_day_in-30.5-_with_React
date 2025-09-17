import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AddtoCart = () => {
    const[users,setUsers]=useState([]);
    const[cart,setCart]=useState([])

    useEffect(()=>{
        axios
        .get('./public/test.json')
        .then((data)=>setUsers(data.data))
    })
    console.log(users)
    const AddtoCart=(user)=>{
        const existingeuser=cart.find((item)=>item.name===user.name);
        
        if(!existingeuser)
        {
            setCart([...cart,user])
        }
    

    }

  return (
    <div>
      <div className="bg-orange-300 p-4 rounded-2xl">
        <h1 className="text-3xl text-center">Make a Cyber Security Team</h1>
        <p className="text-center">
          Our Server is under attact so we need to hire a special cyber security
          team
        </p>
        <h1 className="text-center">
          Total Budget:10 <span>Millon</span>
        </h1>
      </div>

      <div className="flex gap-6 p-6">
        <div >
          {/* Card section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 flex-1">
        {users.map((user) => (
          <div key={user.id} className="card bg-gray-200 shadow-sm">
            <figure className="px-6 pt-6">
              <img src={user.img} alt={user.name} className="w-16 h-16 rounded-full object-cover border-2 border-gray-300" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Name: {user.name}</h2>
              <p>Designation: {user.designation}</p>
              <p>Age: {user.age}</p>
              <p>Address: {user.address}</p>
              <p>Salary: {user.salary} Tk</p>
              <div className="card-actions">
                <button
                  className="btn btn-primary"
                  onClick={()=>AddtoCart(user)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
    <div>  
    {/* Cart Section */}
      <div className="w-80 bg-white shadow-lg p-4 rounded-md">
        <h2 className="text-xl font-bold mb-4">🛒 Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">No items in cart</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 rounded"
              >
               <img src={item.img} alt="" className="w-16 h-16 rounded-full object-cover border-2 border-gray-300" />
                <span>{item.name}</span>
              </li>
                
            
            ))}
            <button className="bg-blue-500 w-full text-white p-2">Confirm List</button>
          </ul>
        )}
      </div>

      
    </div>
      </div>
    </div>
  );
};

export default AddtoCart;

