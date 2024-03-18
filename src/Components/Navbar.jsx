import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios  from "axios";

function Navbar() {
    const [orderStatus, setOrderStatus] = useState({orderID:'',status:'processing'});

  const handleOrderStatus = async () => {
    try {
     
      const response = await axios.post(
        "http://localhost:8000/status/order-status",
        orderStatus
      );
      if(response.status===200){
        setOrderStatus({orderID:'',status:'processing'})
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
            <li className="nav-item active text-white">
              <Link className="nav-link" to="/">
                Profile setting
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/media">
                Media
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/returnpolicy">
                Return Policy
              </Link>
            </li>
            <li className="nav-item active ">
              <Link className="nav-link" to="/add-product">
                <span>Add Product</span>
              </Link>
            </li>
            <li className="nav-item active ">
              <Link className="nav-link" to="/orders">
                <span>Orders</span>
              </Link>
            </li>
            <li className="nav-item active">
              <button
                className="btn btn-sm text-black rounded-5 mx-1 p-2 border border-1 text-light"
                data-bs-toggle="modal"
                data-bs-target="#orderStatus-modal"
              >
                Order-Status
              </button>
            </li>
          </ul>
        </div>
        <div className="modal fade" tabIndex="-1" id="orderStatus-modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="ms-auto font-weight-bold">Order Status</h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form className="modal-body">
                <div className="p-3 d-flex flex-column gap-3">
                <input
                          type="Name"
                          name="orderID"
                          value={orderStatus.orderID}
                          onChange={(e)=>setOrderStatus({...orderStatus,orderID:e.target.value})}
                          className="form-control col-12 px-2 border border-2 rounded"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Order ID"
                        />
                  <select
                    className="form-control col-12 px-2 border border-2 rounded"
                    id="orderStatusSelect"
                    value={orderStatus.status}
                    onChange={(e) => setOrderStatus({...orderStatus,status:e.target.value})}
                  >
                    <option value="processing">Processing</option>
                    <option value="out-for-delivery">Out for Delivery</option>
                    <option value="delivered">Delivered</option>
                  </select>
                </div>

                <div className=" text-end px-3">
                
                <button
                  type="button"
                  className="btn btn-primary font-weight-bold"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleOrderStatus}
                >
                  Update
                </button>
                </div>
               
              </form>
              <div className="modal-footer">
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
