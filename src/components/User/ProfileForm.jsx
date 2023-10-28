"use client"
import {useEffect, useState} from "react";
import {ErrorToast,IsEmail,IsEmpty} from "@/utility/FormHelper";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
const ProfileForm = (props) => {
    const [data, setData] = useState({firstName:"",lastName:"",email:"",mobile:"",password:""});
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        setData(props.propData);
    }, []);

    const inputOnChange = (name,value) => {
        setData((data)=>({
            ...data,
            [name]:value
        }))
    }
    const formSubmit = (e) => {
      e.preventDefault();
      if(IsEmpty(data.fName)){
          ErrorToast("First Name Required")
      }
      else if(IsEmpty(data.lName)){
          ErrorToast("Last Name Required")
      }
      else if(IsEmpty(data.mobile)){
          ErrorToast("Mobile No Required")
      }
      else if(IsEmail(data.email)){
          ErrorToast("Valid Email Address Required")
      }
      else if(IsEmpty(data.password)){
          ErrorToast("Password Required")
      }
      else{
          setSubmit(true)
          alert(JSON.stringify(data))
      }
    }

    return (
        <form onSubmit={formSubmit}>
            <div className="row h-100">

                <div className="col-md-12 col-lg-12 col-sm-12 col-12 ">

                    <div className="card container animated fadeIn p-5 gradient-bg">
                        <h5 className="mb-3">Profile</h5>

                        <div className="row">
                        <div className="col-md-4 col-lg-4 col-sm-12 p-2 col-12">
                            <label className="form-label">First Name</label>
                            <input value={data.firstName} onChange={(e)=>{inputOnChange("firstName",e.target.value)}} type="text" className="form-control mb-2"/>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 p-2 col-12">
                            <label className="form-label">Last Name</label>
                            <input value={data.lastName} onChange={(e)=>{inputOnChange("lastName",e.target.value)}} type="text" className="form-control mb-2"/>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 p-2 col-12">
                            <label className="form-label">Mobile</label>
                            <input value={data.mobile} onChange={(e)=>{inputOnChange("mobile",e.target.value)}} type="text" className="form-control mb-2"/>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 p-2 col-12">
                            <label className="form-label">Email</label>
                            <input value={data.email}  onChange={(e)=>{inputOnChange("email",e.target.value)}} type="email" className="form-control mb-2"/>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 p-2 col-12">
                            <label className="form-label">Password</label>
                            <input value={data.password}  onChange={(e)=>{inputOnChange("password",e.target.value)}} type="password" className="form-control mb-2"/>
                        </div>
                    </div>

                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-sm-12 p-2 col-12">
                                <SubmitButton className="btn btn-danger w-100 mt-3" submit={submit} text="Update"/>
                            </div>
                        </div>
                        

                    </div>

                </div>
            </div>
        </form>
    );
};
export default ProfileForm;