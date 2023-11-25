import React from 'react'

const LoginPage = () => {
  return (
    <>
    <section className="bread-crumb">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="main-title-breadcrumb text-center">Đăng nhập tài khoản</div>
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
                                    <strong><span>Đăng nhập tài khoản</span></strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="wrap_background_aside page_login">
                        <div className="row">
                            <div
                                className="col-lg-4 col-md-6 col-sm-12 col-xl-4 offset-0 offset-xl-4 offset-lg-4 offset-md-3 offset-xl-3 col-12"
                            >
                                <div className="row">
                                    <div className="page-login pagecustome clearfix">
                                        <div className="wpx">
                                            <h1 className="title_heads a-center"><span>Đăng nhập</span></h1>
                                            <span className="block a-center dkm margin-top-10"
                                                >Nếu bạn chưa có tài khoản,
                                                <a href="/account/register" className="btn-link-style btn-register"
                                                    >đăng ký tại đây</a
                                                ></span
                                            >
                                            <div id="login" className="section">
                                                <form
                                                    method="post"
                                                    action="/account/login"
                                                    id="customer_login"
                                                    accept-charset="UTF-8"
                                                >
                                                    <input name="FormType" type="hidden" value="customer_login" /><input
                                                        name="utf8"
                                                        type="hidden"
                                                        value="true"
                                                    /><input name="ReturnUrl" type="hidden" value="/account" />
                                                    <span className="form-signup" style="color: red"> </span>
                                                    <div className="form-signup clearfix">
                                                        <fieldset className="form-group">
                                                            <input
                                                                type="email"
                                                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                                                                className="form-control form-control-lg"
                                                                value=""
                                                                name="email"
                                                                id="customer_email"
                                                                placeholder="Email"
                                                                required
                                                            />
                                                        </fieldset>
                                                        <fieldset className="form-group">
                                                            <input
                                                                type="password"
                                                                className="form-control form-control-lg"
                                                                value=""
                                                                name="password"
                                                                id="customer_password"
                                                                placeholder="Mật khẩu"
                                                                required
                                                            />
                                                        </fieldset>
                                                        <div className="pull-xs-left">
                                                            <input
                                                                className="btn btn-style btn_50"
                                                                type="submit"
                                                                value="Đăng nhập"
                                                            />
                                                            <span className="block a-center quenmk">Quên mật khẩu</span>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>

                                            <div className="h_recover" style="display: none">
                                                <div id="recover-password" className="form-signup page-login">
                                                    <form
                                                        method="post"
                                                        action="/account/recover"
                                                        id="recover_customer_password"
                                                        accept-charset="UTF-8"
                                                    >
                                                        <input
                                                            name="FormType"
                                                            type="hidden"
                                                            value="recover_customer_password"
                                                        /><input name="utf8" type="hidden" value="true" />
                                                        <div className="form-signup" style="color: red"></div>
                                                        <div className="form-signup clearfix">
                                                            <fieldset className="form-group">
                                                                <input
                                                                    type="email"
                                                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                                                                    className="form-control form-control-lg"
                                                                    value=""
                                                                    name="Email"
                                                                    id="recover-email"
                                                                    placeholder="Email"
                                                                    required
                                                                />
                                                            </fieldset>
                                                        </div>
                                                        <div className="action_bottom">
                                                            <input
                                                                className="btn btn-style btn_50"
                                                                style="margin-top: 0px"
                                                                type="submit"
                                                                value="Lấy lại mật khẩu"
                                                            />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
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
            </section>
    </>
  )
}

export default LoginPage