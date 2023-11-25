import React from 'react'

const RegisterPage = () => {
  return (
    <>
    <section className="bread-crumb">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="main-title-breadcrumb text-center">Đăng ký tài khoản</div>
                            <ul className="breadcrumb">
                                <li className="home">
                                    <a href="/"><span>Trang chủ</span></a>
                                    <span className="mr_lr"
                                        ><svg
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="chevron-right"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 320 512"
                                            className="svg-inline--fa fa-chevron-right fa-w-10"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                                                className=""
                                            ></path>
                                        </svg>
                                    </span>
                                </li>

                                <li>
                                    <strong><span>Đăng ký tài khoản</span></strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="wrap_background_aside page_login">
                        <div className="wrap_background_aside">
                            <div className="row">
                                <div
                                    className="col-lg-4 col-md-6 col-sm-12 col-12 col-xl-4 offset-xl-4 offset-lg-4 offset-md-3 offset-xl-3"
                                >
                                    <div className="row">
                                        <div className="page-login pagecustome clearfix">
                                            <div className="wpx">
                                                <h1 className="title_heads a-center"><span>Đăng ký</span></h1>
                                                <span className="block a-center dkm margin-top-10"
                                                    >Đã có tài khoản, đăng nhập
                                                    <a href="/account/login" className="btn-link-style btn-register"
                                                        >tại đây</a
                                                    ></span
                                                >
                                                <div id="login" className="section">
                                                    <form
                                                        method="post"
                                                        action="/account/register"
                                                        id="customer_register"
                                                        accept-charset="UTF-8"
                                                    >
                                                        <input
                                                            name="FormType"
                                                            type="hidden"
                                                            value="customer_register"
                                                        /><input name="utf8" type="hidden" value="true" /><input
                                                            type="hidden"
                                                            id="Token-c22a0b08e4494bba8d84440cda4abd62"
                                                            name="Token"
                                                        />
                                                        <div className="form-signup" style="color: red"></div>
                                                        <div className="form-signup clearfix">
                                                            <div className="row">
                                                                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                                    <fieldset className="form-group">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control form-control-lg"
                                                                            value=""
                                                                            name="lastName"
                                                                            id="lastName"
                                                                            placeholder="Họ"
                                                                            required
                                                                        />
                                                                    </fieldset>
                                                                </div>
                                                                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                                    <fieldset className="form-group">
                                                                        <input
                                                                            type="text"
                                                                            className="form-control form-control-lg"
                                                                            value=""
                                                                            name="firstName"
                                                                            id="firstName"
                                                                            placeholder="Tên"
                                                                            required
                                                                        />
                                                                    </fieldset>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                                    <fieldset className="form-group">
                                                                        <input
                                                                            type="email"
                                                                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                                                                            className="form-control form-control-lg"
                                                                            value=""
                                                                            name="email"
                                                                            id="email"
                                                                            placeholder="Email"
                                                                            required=""
                                                                        />
                                                                    </fieldset>
                                                                </div>
                                                                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                                    <fieldset className="form-group">
                                                                        <input
                                                                            placeholder="Số điện thoại"
                                                                            type="text"
                                                                            pattern="\d+"
                                                                            className="form-control form-control-comment form-control-lg"
                                                                            name="PhoneNumber"
                                                                            required
                                                                        />
                                                                    </fieldset>
                                                                </div>
                                                                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                                                    <fieldset className="form-group">
                                                                        <input
                                                                            type="password"
                                                                            className="form-control form-control-lg"
                                                                            value=""
                                                                            name="password"
                                                                            id="password"
                                                                            placeholder="Mật khẩu"
                                                                            required
                                                                        />
                                                                    </fieldset>
                                                                </div>
                                                            </div>
                                                            <div className="section">
                                                                <button
                                                                    type="submit"
                                                                    value="Đăng ký"
                                                                    className="btn btn-style btn_50"
                                                                >
                                                                    Đăng ký
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <p className="a-center">Hoặc đăng nhập bằng</p>
                                                    <div className="block social-login--facebooks margin-top-15">
                                                        <a
                                                            href="javascript:void(0)"
                                                            className="social-login--facebook"
                                                            onclick="loginFacebook()"
                                                        >
                                                            <i className="fa-brands fa-facebook-f"></i>
                                                            <p>Facebook</p>
                                                        </a>
                                                    </div>
                                                    <div className="block social-login--google margin-top-15">
                                                        <a
                                                            href="javascript:void(0)"
                                                            className="social-login--google"
                                                            onclick="loginGoogle()"
                                                        >
                                                            <i className="fa-brands fa-google"></i>
                                                            <p>Google</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default RegisterPage