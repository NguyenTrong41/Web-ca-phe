import { memo } from "react"
const Footer = () => {
  return (
    <footer className="footer">
        <div className="mailchim">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-6 col-12 col-left">
                        <h4 className="title-menu">Đăng ký nhận khuyến mãi</h4>

                        <div className="des">Đừng bỏ lỡ những sản phẩm và chương trình khuyến mãi hấp dẫn</div>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-12 col-right">
                        <form id="mc-form" className="newsletter-form" data-toggle="validator">
                            <input
                                aria-label="Địa chỉ Email"
                                type="email"
                                className="form-control"
                                placeholder="Email của bạn"
                                name="EMAIL"
                                required
                                autoComplete="off"
                            />
                            <button
                                className="btn btn-default"
                                type="submit"
                                aria-label="Đăng ký nhận tin"
                                name="subscribe"
                            >
                                Đăng ký
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className="mid-footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-5 col-footer col-left">
                        <div className="logo-footer">
                            <a href="/" title="Logo">
                                <img style={{width: 212, height: 181}} src={'../assets/img/logo.png'} alt="Template Monster Coffe" />
                            </a>
                        </div>

                        <div className="footer-des">
                            Monster Coffee mong rằng chúng tôi luôn mang đến cho khách hàng những trải nghiệm
                            tốt nhất, tạo ra những khoảnh khắc khó quên khi đến với Monster.
                        </div>

                        <div className="social-footer">
                            <div className="link-social">
                                <a className="tw" href="https://twitter.com" title="Theo dõi trên Twitter">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{width: 22, height: 18}}
                                        viewBox="0 0 22 18"
                                    >
                                        <image
                                            id="Vector_Smart_Object_tw"
                                            data-name="Vector Smart Object"
                                            style={{width: 22, height: 18}}
                                            
                                        />
                                    </svg>
                                </a>

                                <a
                                    className="fb"
                                    href="https://www.facebook.com/sapowebvietnam/"
                                    title="Theo dõi trên Facebook"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                       
                                        style={{width: 10,height: 18}}
                                        viewBox="0 0 10 18"
                                    >
                                        <image
                                            id="Vector_Smart_Object_fb"
                                            data-name="Vector Smart Object"
                                            style={{width: 10, height: 18}}
                                        />
                                    </svg>
                                </a>

                                <a className="in" href="https://www.instagram.com/" title="Theo dõi trên Instagram">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                    
                                        style={{width: 18, height: 18}}
                                        viewBox="0 0 18 18"
                                    >
                                        <image
                                            id="Vector_Smart_Object_in"
                                            data-name="Vector Smart Object"
                                            style={{width: 18, height: 18}}
                                        />
                                    </svg>
                                </a>

                                <a className="tiktok" href="https://www.tiktok.com/" title="Theo dõi trên Tiktok">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                   
                                        style={{width: 16, height: 18}}
                                        viewBox="0 0 16 18"
                                    >
                                        <image
                                            id="Vector_Smart_Object_tik"
                                            data-name="Vector Smart Object"
                                            style={{width: 16, height: 18}}
                                        />
                                    </svg>
                                </a>

                                <a className="yt" href="https://www.youtube.com/" title="Theo dõi trên Youtube">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                  
                                        style={{width: 25, height: 18}}
                                        viewBox="0 0 25 18"
                                    >
                                        <image
                                            id="Vector_Smart_Object_yt"
                                            data-name="Vector Smart Object"
                                            style={{width: 25, height: 18}}
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-7 col-footer col-right">
                        <div className="item hethong">
                            <h4 className="title-menu">
                                Hệ thống cửa hàng
                                <span className="Collapsible__Plus"></span>
                            </h4>
                            <div className="content hidden-mobile">
                                <ul>
                                    <li>
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

                                        CN1: Tầng 6 toà nhà Ladeco, 266 Đội Cấn, phường Liễu Giai, Hà Nội, Việt
                                        Nam
                                    </li>
                                    <li>
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
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="item contact">
                            <h4 className="title-menu">
                                Liên hệ
                                <span className="Collapsible__Plus"></span>
                            </h4>
                            <div className="content hidden-mobile">
                                <ul>
                                    <li>
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
                                        Hotline đặt hàng: <a href="tel:19006750" title="19006750">19006750</a>
                                    </li>
                                    <li>
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
                                    </li>

                                    <li>Thứ 2 - Thứ 6: <span>7am - 10pm</span></li>

                                    <li>Thứ 7 - Chủ nhật: <span>8am - 9pm</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default memo(Footer);