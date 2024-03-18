import React, { useState } from 'react'
import axios from 'axios';
function AddItem(){
    const [productData, setProductData] = useState({
        image: null,
        description: ''
    });

    const handleFileChange = (e) => {
        setProductData({ ...productData, image: e.target.files[0] });
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('image', productData.image);
            formData.append('description', productData.description);

            const response = await axios.post('http://localhost:8000/add-product/new', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setProductData({
                image: null,
                description: ''
            })

            console.log(response.data);
            if(response.data){
                alert(response.data.message)
            }
            
        } catch (error) {
            console.error(error);
        }
    };

    return( 
        <div className='p-5' >
        <div className=' col-12 border border-0 rounded-3  p-3 ' style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 6px 20px'}}>
            <div className='d-flex flex-column my-2'>
                <span className='fw-bold mt-2' style={{ color: 'gray' }}>Products</span>
                <span className='' style={{ color: 'rgb(95, 99, 104)' }}>Seller Name</span>
            </div>
            <div className='md-3 mt-4 pb-2'
            
            >
                <div className='col-3 border border-1 rounded-3 mt-2 pt-3 my-3 d-flex flex-column align-items-center'
                 data-bs-toggle="modal"
                 data-bs-target="#form-modal"
                 style={{ height: '90px', width: '150px',cursor:'pointer' }}  >
                    <span  style={{ color: '#6200ee' }}>+</span>
                    <h6 className='fw-bold' style={{ color: 'gray' }}>New Product</h6>
                </div>
            </div>
        </div>
    

    {/* form modal */}
        <div className="modal fade" tabIndex="-1" id="form-modal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="ms-auto font-weight-bold">Add Product</h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <form className="modal-body">
                      <div className="p-3 d-flex flex-column gap-4">
                        <input
                          type="file"
                          name="image" onChange={handleFileChange} 
                          className="form-control col-12 px-2 border border-2 rounded"
                          aria-describedby="emailHelp"
                          placeholder="Upload Image"
                        />
                        
                        <textarea name="description" 
                          value={productData.description}
                          onChange={(e) => setProductData({ ...productData, description: e.target.value })}
                        placeholder='Description' className='border rounded' style={{height:"150px", width:"100%"}}/>
                      </div>
                    </form>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-outline "
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        onClick={handleUpload}
                        type="submit"
                        className="btn btn-primary font-weight-bold"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
    </div>
    )}
export default AddItem      