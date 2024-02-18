// import exp from "constants";
import { Fragment, useEffect, useState } from "react";

import styles from './PaymentPage.module.css'
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";


const HOLDER_COURSE = 
    {
        title: "Tabla Tabla",
        teacher: "John Doe",
        price: "150",
        description: "This is a course about tabla",
        _id: '3',
        imageUrl: "https://masterofmusic.onrender.com/images/fam-solos.jpg"
    }

    function capitalizeFirstLetter(string) {
      if(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    }







function PaymentPage(){

    const [course,setCourse] = useState(null);
    const user = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const params = useParams();
    
    const piiche = () => {
      navigate(-1)
      };
    
      const confrm = () => {
        // Implement the confrm function here
      };
    
      const copyToClip = (phoneNumber) => {
        // Implement the copyToClip function here
      };

      useEffect(()=>{
        async function getCourseInfo(){
          try{
            
            const response = await axios.get(`http://localhost:8000/api/course/description/${params.id}`);
            setCourse(response.data.course);

          }catch(error){
            console.error("Error fetching course info:", error);
          }
        }

        getCourseInfo();

      },[])

  
  const [orderId, setOrderId] = useState("");

  const createOrder = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/create-order"
      );
      setOrderId(response.data.id);
    } catch (error) {
      console.error("Error in placing order:", error);
    }
  };

  async function purchaseHandler(response){
    
    const formData = {
      userId : user.id,
      courseId : params.id
    }

    try {
          const res = await axios.post(`http://localhost:8000/api/v1/user/purchase`, formData, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
      }
    }) 

      if(res.status == 200){
        navigate('/')
        toast.success("Payment Successful")
      }

    } catch (error) {
      console.error("Error in placing order:", error);  
      toast.error("Error In Purchase")
    }
  }

  const displayRazorpay = async () => {
    const options = {
      key: "rzp_test_CFaCcyskyo1gnl",
      amount: course?.price * 100, // Amount in paise (Example: 50000 paise = ₹500)
      currency: "INR",
      name: "Masters Of Music",
      description: course?.title,
      order_id: orderId,
      handler: purchaseHandler,
      prefill: {
        name: user.firstName + " " + user.lastName,
        email: user.email,
        contact: "8076784892",
      },
      theme: {
        color: "#333333",
      },
    };
    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  };

  const handlePayment = async () => {
    await createOrder();
    await displayRazorpay();
 };

    return(
        <Fragment>
    <div className={styles.checkoutbody}>
      <div className={styles.centerWrapper}> {/* Use CSS Modules for class names */}
        <div className={styles.content}>
          <div className={styles.topBar}>
            <div onClick={piiche} className="cursor-pointer">
              <i className="fas fa-arrow-left mr-2"></i>
              <span className={styles.bb} >Go Back</span>
            </div>
          </div>
          <div className={styles.bagProduct}> {/* Combine multiple class names */}
            <div className={styles.courseImg}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3OUVLiBoBsr179pMOm4QFjoZoMuKA7UG7eg&usqp=CAU" className={styles.img1} alt="Course" />
            </div>
            <div className={styles.description}>
              <p className={styles.productCode + ' ' + styles.small} style={{ color: 'black' }}>
                Product code: {course?._id}
              </p>
              <p className={styles.course_title} style={{ color: 'black' }}>{course?.title}</p>
              <p className={styles.teacher} style={{ color: 'black' }}>By {capitalizeFirstLetter(course?.teacher[0].firstName) + " "+capitalizeFirstLetter(course?.teacher[0].lastName)}</p> {/* Make sure 'course.teacher' is an array */}
              <p className={styles.courseInfo} style={{ color: 'black' }}>{course?.description.slice(0,110)+"....."}</p>
            </div>
          </div>
          <div className={styles.bagTotal}>
            <div className={styles.total}>
              <h3>Price:</h3>
              <h3>${course?.price}</h3>
            </div>
            <div style={{ margin: '1rem 0' }} id="abracadbra">
              <input type="checkbox" name="promo-check" id="mycheck"  />
              <label htmlFor="promo-check" className="ml-3">I have a promo code</label>
            </div>
            {/* <div className={styles.promoWarning} id="warn1">
              <p className={styles.warn1}>Please Enter a Promo Code!</p>
            </div>
            <div className={styles.promoWarning} id="warn2">
              <p className={styles.warn1}>Promo Code Should be AlphaNumeric and at least 6 characters long!</p>
            </div>
            <div className={styles.promoWarning} id="warn3">
              <p className={styles.warn1}>Invalid Promo Code!</p>
            </div>
            <div className={styles.promoWarning + ' ' + styles.good90} style={{ color: '#22ad3a' }}>
              <p className={styles.warn1}>Promo Code Applied</p>
            </div> */}
            <div className={styles.promoCode} id="promo_input">
              <input
                type="text"
                name="promo-checkbox"
                id="promo"
                className="w-[75%]"
                placeholder="Enter your promo code here"
                style ={{border :  '1px solid purple' }}
              />
              <button className={styles.apply} onClick={confrm}>Apply</button>
            </div>
            
              <button className={styles.checkbtn} type="submit" id="chkout" style={{backgroundColor: '#9966cc'}} onClick={handlePayment}>
                <div className="uppercase">Proceed to Checkout</div>
              </button>
            {/* </form> */}
          </div>
          <div style={{ textAlign: 'center', marginBottom: '2rem', marginTop: '0.7rem'}}>
            <abbr title="Click To Copy Phone Number" style={{ textDecoration: 'none' }} id="ccpy">
              <p className={styles.hlp} onClick={() => copyToClip('8076779704')} style={{color : 'black' }}>
                Need help? Call +91 8076779704
              </p>
            </abbr>
          </div>
        </div>
      </div>
      <div className={styles.bg}></div>
      {/* <div className={styles.popContainer}>
        <div className={styles.popover1} id="rem123">
          <div style={{ textAlign: 'center' }}>Copied To Clipboard!</div>
        </div>
      </div> */}
    </div>

        </Fragment>
    )
}


export default PaymentPage;