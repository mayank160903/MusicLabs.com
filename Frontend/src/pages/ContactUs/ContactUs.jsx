import { Fragment } from "react";
import './ContactUs.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function ContactUs(){
    return(
        <Fragment>
            {/* <Header /> */}
        <div className="wholepage contact-bg">
        <div className="container-wrapper contact-bg">            
            <div className="container-fluid">
                <div className="mainformcont">
                <div className="">
                    <div className="mainform d-flex flex-row flex-wrap">

                    <div className="formblock col font-extralight">
                        <div className="fhv">
                        <span className="formheader">
                            <h1 style={{ fontSize: '24px' }}>Get in Touch With Us</h1>
                        </span>
                        </div>

                        <div className="mt-5 container-fluid-wrapper">
                        <div className="">
                            <div className="form-col-container row row-cols-2">

                            <div className="col-2 forminnerblock ">
                                <img className="img-fluid w-75 itemimage"
                                src="https://www.peoplemetrics.com/hubfs/Website/email_1-blue-bottom.svg" alt="email"
                                loading=""></img>
                            </div>

                            <div className="col-10 formtxt "><a>contact@guitar365.com</a>
                            </div>

                            <div className="col-2 forminnerblock ">
                                <img className="img-fluid w-75 itemimage"
                                src="https://www.peoplemetrics.com/hubfs/Website/phone_1-blue-bottom.svg" alt="phone"
                                loading=""/>
                            </div>

                            <div className="col-10 formtxt "> <a>+91 8076779705</a>
                            </div>

                            <div className="col-2 forminnerblock ">
                                <img className="img-fluid w-75 itemimage"
                                src="https://www.peoplemetrics.com/hubfs/Website/pin-blue-bottom.svg" alt="email" loading=""/>
                            </div>

                            <div className="col-10 formtxt"> <a href="https://goo.gl/maps/btQAbi3aqZfHdSz39">BH1 IIIT SriCity,
                                Chitoor</a>
                            </div>
                            </div>
                        </div>
                        </div>





                    </div>
                    <div className="formb2 mt-5">
                        <div className="contact-wrapper">
                        <form id="contact-form" type="submit" action="/connect" className ="form-horizontal" role="form"
                            method="POST">

                            <div className="form-group row justify-content-between " style={{width:'100%'}}>
                            <div className="col-sm-6 " style={{paddingRight: '0px' , paddingLeft: '12px'}}>
                                <input type="text" className="form-control" id="name" placeholder="FIRST NAME" name="fname"
                                value="" required style={{ width: '180px' , backgroundColor: 'white' }}/>
                            </div>

                            <div className="col-sm-6" style={{paddingLeft: '45px', paddingRight: '0px'}}>
                                <input type="text" className="form-control" id="name2" placeholder="LAST NAME" name="lname" value="" style={{ width: '180px' , backgroundColor: 'white' }}
                                required/>
                            </div>

                            </div>

                            <div className="form-group">
                            <div className="col-sm-12">
                                <input type="email" className="form-control " id="email" placeholder="EMAIL" name="email" value="" style = {{backgroundColor: 'white'}}
                                required/>
                            </div>
                            </div>
                            <div className="col-sm-12">
                            <textarea className="form-control " rows="10" placeholder="MESSAGE" name="message"  style = {{backgroundColor: 'white'}} required></textarea>
                            </div>

                            <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                            <span className="send-text">SEND</span>

                            </button>

                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            
            <div>
            <br/>
            <br/>
            <br/>
            </div>
            </div>
            </div>
         {/* <Footer /> */}
        </Fragment>
    )
}

export default ContactUs;   