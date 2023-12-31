import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import requestApi from '../../../helpers/api'
const Login = () => {
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const onChange = (event) => {
        let target = event.target;
        setLoginData({
            ...loginData, [target.name]: target.value
        });
    }

    useEffect(() => {
        if (isSubmitted) {
            validateForm();
        }
    }, [loginData])

    const validateForm = () => {
        let isValid = true;
        const errors = {};
        if (loginData.email === '' || loginData.email === undefined) {
            errors.email = "Please enter email"
        } else {
            let valid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(loginData.email)
            if (!valid) {
                errors.email = "Email is not valid"
            }
        }

        if (loginData.password === '' || loginData.password === undefined) {
            errors.password = "Please enter password"
        }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            isValid = false;
        } else {
            setFormErrors({});
        }

        return isValid;
    }

    const onSubmit = () => {
        console.log(loginData)
        let valid = validateForm();
        if (valid) {
            //request login api

 
            requestApi('admin/login', 'POST', loginData).then((res) => {
                console.log('access_token', res.data.access_token)
                localStorage.setItem('access_token', res.data.access_token);
                navigate('/admin');
            }).catch(err => {
                console.log(err)
                
            })
        }

        setIsSubmitted(true);
    }

  return (
    <div id="layoutAuthentication" className="bg-primary">
    <div id="layoutAuthentication_content">
        <main>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                            <div className="card-body">
                                <form>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" name='email' type="email" onChange={onChange} placeholder="name@example.com" />
                                        <label >Email address</label>
                                        { formErrors.email && <p style={{color: 'red'}}>{formErrors.email}</p>}
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" name='password' type="password" onChange={onChange} placeholder="Password" />
                                        <label >Password</label>
                                        { formErrors.password && <p style={{color: 'red'}}>{formErrors.password}</p>}
                                    </div>
                                    
                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0" style={{textAlign: 'center' , width: '200px', margin: 'auto'}}>
                                        <button className="btn btn-primary" type='button' onClick={onSubmit} style={{ width: '100%'}} >Login</button>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>
  )
}

export default Login