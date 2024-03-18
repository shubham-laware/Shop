import axios from 'axios'
import { useEffect, useRef, useState } from "react";


const Orders = () => {

  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(false);
  const [trackStatus,setTrackStatus]=useState('25%')

  const nameRef = useRef(null);
  const reviewRef = useRef(null);


  
  useEffect(()=>{
    handleTrackOrder();

  },[])


  async function handleTrackOrder(){
    try {
      const response=await axios.get('http://localhost:8000/track-order/track',{params:{orderID:'123456'}})
      const status=response.data.status
      if(response.status===200){
        if(status==='placed'){
          setTrackStatus('25%');
          return
        }
        if(status==='processing'){
          setTrackStatus('50%');
          return
        }
        if(status==='out-for-delivery'){
          setTrackStatus('75%');
          return
        }
        if(status==='delivered'){
          setTrackStatus('100%')
          return
        }
      }else{
        console.error('Error tracking order')
      }
      
    } catch (error) {
      console.log(error)
    }
   
  }

  async function handleAddReview() {
    const nameValue = nameRef.current.value;
    const reviewValue = reviewRef.current.value;
    try {
      const response = await axios.post('http://localhost:8000/reviews', {name:nameValue,review:reviewValue});
      if (response.status===200) {
        console.log('Review successfully added');
      } else {
        console.error('Failed to add review');
      }
    } catch (error) {
      console.error('Error adding review:', error);
    }


    // maybe add a toast notification after the review hass successfully been added
    // After succes:
    nameRef.current.value=""
    reviewRef.current.value=""
  }

  
  const handleInputChange = () => {
    setInputValue('')
};

const remainingCharacters = 500 - inputValue.length;
const displayCharacterCount = remainingCharacters > 0 ? remainingCharacters : 0;




  return (
    <div className="container mt-5 mb-5  ">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="card-item p-4 border border-1">
            <h5>
              Thanks for your order,
              <span className="fw-bold">Hemang Krishna Chaitanya !</span>
            </h5>
          </div>
          <div className="receipt-block d-flex justify-content-between mt-3 flex-wrap">
            <div className="receipt">
              <p style={{ color: "rgb(202, 242, 124)" }}> Receipt</p>
            </div>
            <div className="voucher">
              <p>Receipt Voucher: 12356XTYZ</p>
            </div>
          </div>
          <div className="order-detail border border-1 mt-3 card-item p-3">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <img
                src="https://cdn.pixabay.com/photo/2021/06/15/16/11/man-6339003_640.jpg"
                alt=""
                className="profile-image"
              />
              <p>Item Name</p>
              <p>Item Color</p>
              <p>Item Fabric</p>
              <p>Qty : 1</p>
              <p>500 RS</p>
            </div>
            <hr />
            <div className="delivery-details row">
              <div className="col-md-4">
                {" "}
                <span>Track order</span>
              </div>
              <div className="col-md-8">

                {/* progressive-bar */}
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar" style={{ width: trackStatus }}></div>
                </div>
                <div className="bar-details d-flex justify-content-between " style={{fontSize:"12px"}}>
                  <p>Placed</p>
                  <p>Processing</p>
                  <p>Out for Delivery</p>
                  <p>Delivered</p>
                </div>
                <div className="d-flex details mt-3 justify-content-between p-3 flex-wrap">
                  <div className="order-details">
                    <h6 className="fw-bold">Order Details</h6>
                    <p className="fs-6">Invoice Number: 123456</p>
                    <p className="fs-6">Invoice Date: 12/03/2024</p>
                    <p className="fs-6">Receipt Voucher: 12YBG</p>
                  </div>
                  <div className="amount-details text-end">
                    <p className="fs-6">
                      <span className="fw-bold">Total</span>: 5689.00
                    </p>
                    <p className="fs-6">
                      <span className="fw-bold">Discount</span>: 50.00
                    </p>
                    <p className="fs-6">
                      <span className="fw-bold">GST 18%</span>:150 RS
                    </p>
                    <p className="fs-6">
                      <span className="fw-bold">Delivery Charges</span>: 50.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-block ">
              <button className="btn mx-1 btn-sm p-2 track-button" onClick={handleTrackOrder}>
                Track
              </button>
              {/* <button className="btn btn-sm text-black rounded-5 mx-1 p-2 border border-1">
                Feeback
              </button> */}
              <button data-bs-toggle="modal" className="btn btn-sm text-black rounded-5 mx-1 p-2 border border-1" href="#feedbackModalToggle" role="button">Feedback</button>
              <button className="btn btn-sm text-black rounded-5 mx-1 p-2 border border-1">
                Return
              </button>
              <button
                className="btn btn-sm text-black rounded-5 mx-1 p-2 border border-1"
                data-bs-toggle="modal"
                data-bs-target="#review-modal"
              >
                Review
              </button>

            </div>

            {/* <div   className='btn mx-3 my-2 p-2 text-black rounded-5 px-2 btn-lg bg-primary text-end' ><b>TOTAL PAID: 1,048 RS</b></div> */}

            <div className="rounded-5 btn-paid text-end p-3 mt-2  fw-bold">
              TOTAL PAID: 1,048 RS
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>

              {/* review modal */}

      <div className="modal fade" tabIndex="-1" id="review-modal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="ms-auto font-weight-bold">Add a review</h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <form className="modal-body">
                      <div className="p-3">
                        <input
                          type="Name"
                          ref={nameRef}
                          className="form-control col-12 px-2 border border-2 rounded"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter Name"
                        />
                        <input
                          type="textaria"
                          ref={reviewRef}
                          className="form-control col-12 px-2 pt-1 pb-5 border border-2 mt-3 rounded"
                          placeholder="Enter Review"
                        />
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
                        onClick={handleAddReview}
                        type="button"
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



      {/* feedback modal */}

      <div className="modal fade" id="feedbackModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalToggleLabel">Help us help you</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="feedback-container">
                            <p className='mb-1'>
                                How can we improve the quality of our search results, to make it <br />
                                easier for you to find what you're looking for?
                            </p>
                            <div className="form-floating">
                                <textarea value={inputValue}
                                    onChange={(e)=>setInputValue(e.target.value)}
                                    className={inputError ? "error" : ""} id="input-box" style={{ "height": "100px", "width": "410px" }}></textarea>

                            </div>
                            <p>{displayCharacterCount} characters</p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#submitModal" onClick={handleInputChange}>Submit</button>
                    </div>
                </div>
            </div>
        </div>

         {/* submit modal */}
         <div className="modal fade" id="submitModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalToggleLabel">Feedback submitted</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Thank you for you feedback!
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Orders;
