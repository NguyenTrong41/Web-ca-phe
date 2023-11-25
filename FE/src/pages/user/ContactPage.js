import React from 'react'

const ContactPage = () => {
  return (
    <>
    <section className="bread-crumb">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="main-title-breadcrumb text-center">Liên hệ</div>
                            <ul className="breadcrumb">
                                <li className="home">
                                    <a href="/"><span>Trang chủ</span></a>
                                    <span className="mr_lr">
                                        <svg
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
                                    <strong><span>Liên hệ</span></strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            <div className="layout-contact">
                <div className="container">
                    <div className="inner">
                        <div className="contact">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-12">
                                    <h4>Liên hệ</h4>
                                    <div className="time_work">
                                        <div className="item">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="phone-alt"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                                className="svg-inline--fa fa-phone-alt fa-w-16"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                                                    className=""
                                                ></path>
                                            </svg>
                                            Hotline đặt hàng: <a className="fone" href="tel:19006750">19006750</a>
                                        </div>
                                        <div className="item">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="envelope"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                                className="svg-inline--fa fa-envelope fa-w-16"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                                                    className=""
                                                ></path>
                                            </svg>
                                            Email: <a href="mailto:support@sapo.vn">support@sapo.vn</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12 time-contact">
                                    <h4>Thời gian</h4>
                                    <div className="time_work clock">
                                        <div className="item">Thứ 2 - Thứ 6: <span>7am - 10pm</span></div>

                                        <div className="item">Thứ 7 - Chủ nhật: <span>8am - 9pm</span></div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12 map-contact">
                                    <h4>Địa chỉ</h4>
                                    <div className="time_work">
                                        <div className="item">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="map-marker-alt"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 384 512"
                                                className="svg-inline--fa fa-map-marker-alt fa-w-12"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                                                    className=""
                                                ></path>
                                            </svg>

                                            CN1: Tầng 6 toà nhà Ladeco, 266 Đội Cấn, phường Liễu Giai, Hà Nội, Việt Nam
                                        </div>
                                        <div className="item">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="map-marker-alt"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 384 512"
                                                className="svg-inline--fa fa-map-marker-alt fa-w-12"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                                                    className=""
                                                ></path>
                                            </svg>

                                            CN2: Toà nhà Lữ Gia, 70 Lữ Gia, phường 15, quận 11, TP. HCM, Việt Nam
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-contact">
                            <div className="title">
                                <h2>Liên hệ với chúng tôi</h2>
                            </div>
                            <div id="pagelogin">
                                <form method="post" action="/postcontact" id="contact" accept-charset="UTF-8">
                                    <input name="FormType" type="hidden" value="contact" /><input
                                        name="utf8"
                                        type="hidden"
                                        value="true"
                                    /><input type="hidden" id="Token-38fae19da89a4fd1932c4a1f8336c78b" name="Token" />

                                    <div className="group_contact">
                                        <input
                                            placeholder="Họ và tên"
                                            type="text"
                                            className="form-control form-control-lg"
                                            required
                                            value=""
                                            name="contact[Name]"
                                        />
                                        <div className="row">
                                            <div className="col-md-6 col-12">
                                                <input
                                                    type="number"
                                                    placeholder="Số điện thoại"
                                                    name="contact[phone]"
                                                    className="form-control form-control-lg"
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <input
                                                    placeholder="Email"
                                                    type="email"
                                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                                    required
                                                    id="email1"
                                                    className="form-control form-control-lg"
                                                    value=""
                                                    name="contact[email]"
                                                />
                                            </div>
                                        </div>
                                        <textarea
                                            placeholder="Nội dung"
                                            name="contact[body]"
                                            id="comment"
                                            className="form-control content-area form-control-lg"
                                            rows="5"
                                            required
                                        ></textarea>
                                        <div className="text-center">
                                            <button type="submit" className="btn-lienhe">Gửi thông tin</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact_map" className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.904611732553!2d105.81388241542348!3d21.03650239288885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab1946cc7e23%3A0x87ab3917166a0cd5!2zQ8O0bmcgdHkgY-G7lSBwaOG6p24gY8O0bmcgbmdo4buHIFNBUE8!5e0!3m2!1svi!2s!4v1555900531747!5m2!1svi!2s"
                    style="border: 0"
                    allowfullscreen
                ></iframe>
            </div>
    </>
  )
}

export default ContactPage