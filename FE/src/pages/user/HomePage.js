import React from 'react'

const HomePage = () => {
  return (
    <div className='bodywrap'>
        <section className="section_slider">
            <div className="home-slider swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <a href="#" className="clearfix" title="Monster Coffee">
                            <picture>
                                <source src={'../assets/img/slider_1.png'}/>
                                
                                <img
                                    style={{width: 1920}}
                                    src={'../assets/img/slider_1.png'}
                                    alt="Monster Coffee"
                                    className="img-responsive"
                                />
                            </picture>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section className="section_deal_hot module_product">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-6 col-12 col-left">
                        <div className="block-title">
                            <h2>
                                <a href="san-pham-noi-bat" title="Deal hot trong ngày">Deal hot trong ngày</a>
                            </h2>

                            <div className="des">
                                Mua <b>1 phần nước</b> bất kì<br />
                                Tặng ngay <b>1 phần bánh ngọt</b> trị giá 30k
                            </div>

                            <div className="tag">Nhập <b>"tangbanhngot"</b></div>

                            <div className="buynow">
                                <a href="san-pham-noi-bat" title="Đặt hàng ngay">Đặt hàng ngay</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 col-12 col-right">
                        <div className="block-product">
                            <div className="item">
                                <form
                                    action="/cart/add"
                                    method="post"
                                    className="variants product-action"
                                    data-cart-form
                                    data-id="product-actions-25191086"
                                    encType="multipart/form-data"
                                >
                                    <div className="product-thumb-info">
                                        <div className="product-thumbnail">
                                            <a
                                                className="image_thumb scale_hover"
                                                href="/mocha-recipe"
                                                title="Mocha Recipe"
                                            >
                                                <img className="lazyload" src={'./assets/img/sp8.png'} alt="Mocha Recipe" />
                                            </a>
                                        </div>
                                        <div className="info-action-start">
                                            <div className="product-info">
                                                <h3 className="product-name">
                                                    <a href="/mocha-recipe" title="Mocha Recipe">Mocha Recipe</a>
                                                </h3>
                                                <div className="price-box">49.000₫</div>
                                            </div>
                                            <div className="product-action-start">
                                                <div className="start">
                                                    <div
                                                        className="sapo-product-reviews-badge"
                                                        data-id="25191086"
                                                    ></div>
                                                </div>
                                                <div className="action">
                                                    <a
                                                        title="Đặt món"
                                                        href="/mocha-recipe"
                                                        data-handle="mocha-recipe"
                                                        className="quick-view btn-views"
                                                    >
                                                        +
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="item">
                                <form
                                    action="/cart/add"
                                    method="post"
                                    className="variants product-action"
                                    data-cart-form
                                    data-id="product-actions-25191081"
                                    encType="multipart/form-data"
                                >
                                    <div className="product-thumb-info">
                                        <div className="product-thumbnail">
                                            <a
                                                className="image_thumb scale_hover"
                                                href="/vanila-latte"
                                                title="Vanila Latte"
                                            >
                                                <img className="lazyload" src={'../assets/img/sp7.png'} alt="Vanila Latte" />
                                            </a>
                                        </div>
                                        <div className="info-action-start">
                                            <div className="product-info">
                                                <h3 className="product-name">
                                                    <a href="/vanila-latte" title="Vanila Latte">Vanila Latte</a>
                                                </h3>
                                                <div className="price-box">Liên hệ</div>
                                            </div>
                                            <div className="product-action-start">
                                                <div className="start">
                                                    <div
                                                        className="sapo-product-reviews-badge"
                                                        data-id="25191081"
                                                    ></div>
                                                </div>
                                                <div className="action">
                                                    <a
                                                        title="Đặt món"
                                                        href="/vanila-latte"
                                                        data-handle="vanila-latte"
                                                        className="quick-view btn-views"
                                                    >
                                                        +
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="item">
                                <form
                                    action="/cart/add"
                                    method="post"
                                    className="variants product-action"
                                    data-cart-form
                                    data-id="product-actions-25191077"
                                    encType="multipart/form-data"
                                >
                                    <div className="product-thumb-info">
                                        <div className="product-thumbnail">
                                            <a className="image_thumb scale_hover" href="/latte" title="Latte">
                                                <img className="lazyload" src={'../assets/img/sp6.png'} alt="Latte" />
                                            </a>
                                        </div>
                                        <div className="info-action-start">
                                            <div className="product-info">
                                                <h3 className="product-name">
                                                    <a href="/latte" title="Latte">Latte</a>
                                                </h3>
                                                <div className="price-box">49.000₫</div>
                                            </div>
                                            <div className="product-action-start">
                                                <div className="start">
                                                    <div
                                                        className="sapo-product-reviews-badge"
                                                        data-id="25191077"
                                                    ></div>
                                                </div>
                                                <div className="action">
                                                    <a
                                                        title="Đặt món"
                                                        href="/latte"
                                                        data-handle="latte"
                                                        className="quick-view btn-views"
                                                    >
                                                        +
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="item">
                                <form
                                    action="/cart/add"
                                    method="post"
                                    className="variants product-action"
                                    data-cart-form
                                    data-id="product-actions-25191075"
                                    encType="multipart/form-data"
                                >
                                    <div className="product-thumb-info">
                                        <div className="product-thumbnail">
                                            <a className="image_thumb scale_hover" href="/americano" title="Americano">
                                                <img className="lazyload" src={'../assets/img/sp5.png'} alt="Americano" />
                                            </a>
                                        </div>
                                        <div className="info-action-start">
                                            <div className="product-info">
                                                <h3 className="product-name">
                                                    <a href="/americano" title="Americano">Americano</a>
                                                </h3>
                                                <div className="price-box">46.000₫</div>
                                            </div>
                                            <div className="product-action-start">
                                                <div className="start">
                                                    <div
                                                        className="sapo-product-reviews-badge"
                                                        data-id="25191075"
                                                    ></div>
                                                </div>
                                                <div className="action">
                                                    <a
                                                        title="Đặt món"
                                                        href="/americano"
                                                        data-handle="americano"
                                                        className="quick-view btn-views"
                                                    >
                                                        +
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="item">
                                <form
                                    action="/cart/add"
                                    method="post"
                                    className="variants product-action"
                                    data-cart-form
                                    data-id="product-actions-25191072"
                                    encType="multipart/form-data"
                                >
                                    <div className="product-thumb-info">
                                        <div className="product-thumbnail">
                                            <a
                                                className="image_thumb scale_hover"
                                                href="/iced-espresso"
                                                title="ICED Espresso"
                                            >
                                                <img className="lazyload" src={'../assets/img/sp4.png'} alt="ICED Espresso" />
                                            </a>
                                        </div>
                                        <div className="info-action-start">
                                            <div className="product-info">
                                                <h3 className="product-name">
                                                    <a href="/iced-espresso" title="ICED Espresso">ICED Espresso</a>
                                                </h3>
                                                <div className="price-box">Liên hệ</div>
                                            </div>
                                            <div className="product-action-start">
                                                <div className="start">
                                                    <div
                                                        className="sapo-product-reviews-badge"
                                                        data-id="25191072"
                                                    ></div>
                                                </div>
                                                <div className="action">
                                                    <a
                                                        title="Đặt món"
                                                        href="/iced-espresso"
                                                        data-handle="iced-espresso"
                                                        className="quick-view btn-views"
                                                    >
                                                        +
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section_about_us">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-12 col-left block-content order-md-2">
                        <h2 className="title">VỀ CHÚNG TÔI</h2>

                        <div className="des">
                            Monster Coffee là quán cà phê với những hương vị cà phê thơm ngon đặc trưng kết hợp với
                            không gian tuyệt đẹp, âm nhạc phong phú tạo lên phong cách sang đẹp, lịch sự, gần gũi.
                            Phong cách riêng biệt chỉ Monster mới có.
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 col-right block-image order-md-1">
                        <div className="relative">
                            <img className="lazyload" src={'../assets/img/img-about-us.png'} alt="Monster Coffee" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

            <section className="section_service">
                <div className="container">
                    <div className="service-slider swiper-container">
                        <div className="swiper-wrapper" >
                            <div className="swiper-slide" style={{width: 330, marginRight: 30}}>
                                <div className="block-image">
                                    <img className="lazyload" src={'../assets/img/service_1.png'} alt="Cà phê" />
                                </div>
                                <div className="block-content">
                                    <h3>Cà phê</h3>
                                    <div className="des">
                                        Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng được trồng
                                        trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang...
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide" style={{width: 330, marginRight: 30}}>
                                <div className="block-image">
                                    <img className="lazyload" src={'../assets/img/service_2.png'} alt="Trà" />
                                </div>
                                <div className="block-content">
                                    <h3>Trà</h3>
                                    <div className="des">
                                        Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Monster
                                        Coffee sẽ giúp bạn gợi mở vị giác của bản thân và tận hưởng một cảm giác thật
                                        khoan khoái, tươi mới.
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide" style={{width: 330, marginRight: 30}}>
                                <div className="block-image">
                                    <img className="lazyload" src={'../assets/img/service_3.png'} alt="Bánh ngọt" />
                                </div>
                                <div className="block-content">
                                    <h3>Bánh ngọt</h3>
                                    <div className="des">
                                        Những chiếc bánh của chúng tôi mang hương vị đặc trưng của ẩm thực Việt và còn
                                        là sự Tận Tâm, gửi gắm mà chúng tôi dành cho Quý khách hàng.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section_menu_today module_product">
                <div className="container">
                    <div className="block-title">
                        <h2>
                            <a href="san-pham-noi-bat" title="Menu hôm nay">Menu hôm nay</a>
                        </h2>
                    </div>
                    <div className="block-product">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <div className="item">
                                    <form
                                        action="/cart/add"
                                        method="post"
                                        className="variants product-action"
                                        data-cart-form
                                        data-id="product-actions-25191086"
                                        encType="multipart/form-data"
                                    >
                                        <div className="product-thumb-info">
                                            <div className="product-thumbnail">
                                                <a
                                                    className="image_thumb scale_hover"
                                                    href="/mocha-recipe"
                                                    title="Mocha Recipe"
                                                >
                                                    <img className="lazyload" src={'../assets/img/sp8.png'} alt="Mocha Recipe" />
                                                </a>
                                            </div>
                                            <div className="info-action-start">
                                                <div className="product-info">
                                                    <h3 className="product-name">
                                                        <a href="/mocha-recipe" title="Mocha Recipe">Mocha Recipe</a>
                                                    </h3>
                                                    <div className="price-box">49.000₫</div>
                                                </div>

                                                <div className="product-content">
                                                    Cafe Mocha là gì? Mocha là 1 loại café được tạo cho từ Espresso
                                                    &amp; nữa nóng, thêm hương vị chocolate...
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="item">
                                    <form
                                        action="/cart/add"
                                        method="post"
                                        className="variants product-action"
                                        data-cart-form
                                        data-id="product-actions-25191081"
                                        encType="multipart/form-data"
                                    >
                                        <div className="product-thumb-info">
                                            <div className="product-thumbnail">
                                                <a
                                                    className="image_thumb scale_hover"
                                                    href="/vanila-latte"
                                                    title="Vanila Latte"
                                                >
                                                    <img className="lazyload" src={'../assets/img/sp7.png'} alt="Vanila Latte" />
                                                </a>
                                            </div>
                                            <div className="info-action-start">
                                                <div className="product-info">
                                                    <h3 className="product-name">
                                                        <a href="/vanila-latte" title="Vanila Latte">Vanila Latte</a>
                                                    </h3>
                                                    <div className="price-box">Liên hệ</div>
                                                </div>

                                                <div className="product-content">
                                                    Ly cà phê sữa đậm đà thời thượng! Một chút đậm đà hơn so với Latte,
                                                    Cappuccino của chúng tôi...
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="item">
                                    <form
                                        action="/cart/add"
                                        method="post"
                                        className="variants product-action"
                                        data-cart-form
                                        data-id="product-actions-25191077"
                                        encType="multipart/form-data"
                                    >
                                        <div className="product-thumb-info">
                                            <div className="product-thumbnail">
                                                <a className="image_thumb scale_hover" href="/latte" title="Latte">
                                                    <img className="lazyload" src={'../assets/img/sp6.png'} />
                                                </a>
                                            </div>
                                            <div className="info-action-start">
                                                <div className="product-info">
                                                    <h3 className="product-name">
                                                        <a href="/latte" title="Latte">Latte</a>
                                                    </h3>
                                                    <div className="price-box">49.000₫</div>
                                                </div>

                                                <div className="product-content">
                                                    Ly cà phê sữa ngọt ngào đến khó quên!&nbsp;Với một chút nhẹ nhàng
                                                    hơn&nbsp;so với&nbsp;Cappuccino, Latte của chúng tôi bắt...
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="item">
                                    <form
                                        action="/cart/add"
                                        method="post"
                                        className="variants product-action"
                                        data-cart-form
                                        data-id="product-actions-25191075"
                                        encType="multipart/form-data"
                                    >
                                        <div className="product-thumb-info">
                                            <div className="product-thumbnail">
                                                <a className="image_thumb scale_hover" href="/americano" title="Americano">
                                                    <img className="lazyload" src={'../assets/img/sp5.png'} alt="Americano" />
                                                </a>
                                            </div>
                                            <div className="info-action-start">
                                                <div className="product-info">
                                                    <h3 className="product-name">
                                                        <a href="/americano" title="Americano">Americano</a>
                                                    </h3>
                                                    <div className="price-box">46.000₫</div>
                                                </div>

                                                <div className="product-content">
                                                    Americano là sự kết hợp giữa cà phê espresso thêm vào nước đun sôi.
                                                    Bạn có thể tùy thích lựa...
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="item">
                                    <form
                                        action="/cart/add"
                                        method="post"
                                        className="variants product-action"
                                        data-cart-form
                                        data-id="product-actions-25191072"
                                        encType="multipart/form-data"
                                    >
                                        <div className="product-thumb-info">
                                            <div className="product-thumbnail">
                                                <a
                                                    className="image_thumb scale_hover"
                                                    href="/iced-espresso"
                                                    title="ICED Espresso"
                                                >
                                                    <img className="lazyload" src={'../assets/img/sp4.png'} alt="ICED Espresso" />
                                                </a>
                                            </div>
                                            <div className="info-action-start">
                                                <div className="product-info">
                                                    <h3 className="product-name">
                                                        <a href="/iced-espresso" title="ICED Espresso">ICED Espresso</a>
                                                    </h3>
                                                    <div className="price-box">Liên hệ</div>
                                                </div>

                                                <div className="product-content">
                                                    Đích thực là ly cà phê espresso ngon đậm đà! Được chiết xuất một
                                                    cách hoàn hảo từ loại cà...
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="item">
                                    <form
                                        action="/cart/add"
                                        method="post"
                                        className="variants product-action"
                                        data-cart-form
                                        data-id="product-actions-25191070"
                                        encType="multipart/form-data"
                                    >
                                        <div className="product-thumb-info">
                                            <div className="product-thumbnail">
                                                <a
                                                    className="image_thumb scale_hover"
                                                    href="/caramel-latte"
                                                    title="Caramel Latte"
                                                >
                                                    <img className="lazyload" src={'../assets/img/sp3.png'} alt="Caramel Latte" />
                                                </a>
                                            </div>
                                            <div className="info-action-start">
                                                <div className="product-info">
                                                    <h3 className="product-name">
                                                        <a href="/caramel-latte" title="Caramel Latte">Caramel Latte</a>
                                                    </h3>
                                                    <div className="price-box">54.000₫</div>
                                                </div>

                                                <div className="product-content">
                                                    Ly cà phê sữa ngọt ngào đến khó quên!&nbsp;Với một chút nhẹ nhàng
                                                    hơn&nbsp;so với&nbsp;Cappuccino, Latte của chúng tôi bắt...
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="item">
                                    <form
                                        action="/cart/add"
                                        method="post"
                                        className="variants product-action"
                                        data-cart-form
                                        data-id="product-actions-25191065"
                                        encType="multipart/form-data"
                                    >
                                        <div className="product-thumb-info">
                                            <div className="product-thumbnail">
                                                <a
                                                    className="image_thumb scale_hover"
                                                    href="/cafe-cappuccino"
                                                    title="Cafe Cappuccino"
                                                >
                                                    <img className="lazyload" src={'../assets/img/sp2.png'} alt="Cafe Cappuccino" />
                                                </a>
                                            </div>
                                            <div className="info-action-start">
                                                <div className="product-info">
                                                    <h3 className="product-name">
                                                        <a href="/cafe-cappuccino" title="Cafe Cappuccino"
                                                            >Cafe Cappuccino</a
                                                        >
                                                    </h3>
                                                    <div className="price-box">54.000₫</div>
                                                </div>

                                                <div className="product-content">
                                                    Ly cà phê sữa đậm đà thời thượng! Một chút đậm đà hơn so với Latte,
                                                    Cappuccino của chúng tôi...
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="item">
                                    <form
                                        action="/cart/add"
                                        method="post"
                                        className="variants product-action"
                                        data-cart-form
                                        data-id="product-actions-25191064"
                                        encType="multipart/form-data"
                                    >
                                        <div className="product-thumb-info">
                                            <div className="product-thumbnail">
                                                <a className="image_thumb scale_hover" href="/espresso" title="Espresso">
                                                    <img className="lazyload" src={'../assets/img/sp1.png'} alt="Espresso" />
                                                </a>
                                            </div>
                                            <div className="info-action-start">
                                                <div className="product-info">
                                                    <h3 className="product-name">
                                                        <a href="/espresso" title="Espresso">Espresso</a>
                                                    </h3>
                                                    <div className="price-box">59.000₫</div>
                                                </div>

                                                <div className="product-content">
                                                    Espresso là gì? Espresso là một loại café khá quen thuộc và được
                                                    nhiều người lựa chọn vì hương vị...
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="view-more">
                            <a href="san-pham-noi-bat" title="Xem thêm">Xem thêm</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section_customer_reviews">
                <div className="container">
                    <div className="block-title">
                        <h2>Đánh giá của khách hàng</h2>
                    </div>
                    <div className="customer-reviews-swiper swiper-container">
                        <div
                            className="swiper-wrapper"
                            style={{transitionDuration: 0}}
                        >
                            <div className="swiper-slide" style={{width: 376, marginRight: 20}}>
                                <div className="block-image-info">
                                    <div className="block-image">
                                        <img className="lazyload" src={'../assets/img/reviews_1.png'} alt="Chị Minh Nguyệt" />
                                    </div>
                                    <div className="block-info">
                                        <h3>Chị Minh Nguyệt</h3>
                                        <img src={'../assets/img/img-start.png'} alt="Template Monster Coffe" />
                                    </div>
                                </div>
                                <div className="block-des">
                                    Tôi rất hài lòng về thái độ phục vụ của quán, cafe đa dạng, bánh ngon và không gian
                                    rất đẹp, mình thích sống ảo nên tại đây mình có thể chụp được những tấm ảnh đẹp cùng
                                    bạn bè, để hẹn hò cũng rất lãng mạn.
                                </div>
                            </div>
                            <div className="swiper-slide" style={{width: 376, marginRight: 20}}>
                                <div className="block-image-info">
                                    <div className="block-image">
                                        <img className="lazyload" src="../assets/img/reviews_2.png" alt="Chị Thanh Tiền" />
                                    </div>
                                    <div className="block-info">
                                        <h3>Chị Thanh Tiền</h3>
                                        <img src={'../assets/img/img-start.png'} alt="Template Monster Coffe" />
                                    </div>
                                </div>
                                <div className="block-des">
                                    Tôi rất hài lòng về thái độ phục vụ của quán, cafe đa dạng, bánh ngon và không gian
                                    rất đẹp, mình thích sống ảo nên tại đây mình có thể chụp được những tấm ảnh đẹp cùng
                                    bạn bè, để hẹn hò cũng rất lãng mạn.
                                </div>
                            </div>
                            <div className="swiper-slide" style={{width: 376, marginRight: 20}}>
                                <div className="block-image-info">
                                    <div className="block-image">
                                        <img className="lazyload" src={'../assets/img/reviews_3.png'} alt="Anh Hữu Mạnh" />
                                    </div>
                                    <div className="block-info">
                                        <h3>Anh Hữu Mạnh</h3>
                                        <img src={'../assets/img/img-start.png'} alt="Template Monster Coffe" />
                                    </div>
                                </div>
                                <div className="block-des">
                                    Tôi rất hài lòng về thái độ phục vụ của quán, cafe đa dạng, bánh ngon và không gian
                                    rất đẹp, mình thích sống ảo nên tại đây mình có thể chụp được những tấm ảnh đẹp cùng
                                    bạn bè, để hẹn hò cũng rất lãng mạn.
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>

            <section className="section_time_active">
                <div className="container">
                    <div className="innder">
                        <div className="block-title">
                            <h2>Thời gian hoạt động</h2>

                            <div className="des">
                                Monster Coffee là quán cà phê với những hương vị cà phê thơm ngon đặc trưng kết hợp với
                                không gian tuyệt đẹp, âm nhạc phong phú tạo lên phong cách sang đẹp, lịch sự, gần gũi.
                                Phong cách riêng biệt chỉ Monster mới có.
                            </div>
                        </div>
                        <div className="block-content">
                            <div className="row">
                                <div className="col-md-6 col-12 item">
                                    <div className="time">
                                        <p className="title">Thứ 2 - Thứ 6 hàng tuần</p>

                                        <p>7am - 11am</p>

                                        <p>11am - 10pm</p>
                                    </div>
                                </div>

                                <div className="col-md-6 col-12 item">
                                    <div className="time">
                                        <p className="title">Thứ 7 - Chủ nhật hàng tuần</p>

                                        <p>8am - 11 am</p>

                                        <p>11am - 9pm</p>
                                    </div>
                                </div>
                            </div>
                            <div className="hotline">
                                <img className="lazyload" src={'../assets/img/img-nguoi-van-chuyen.png'} alt="" />
                                <div className="info">
                                    <span>Hotline đặt hàng</span>
                                    <a href="tel:19006750" title="19006750">19006750</a>
                                </div>
                            </div>
                            <div className="buy-now">
                                <a href="#" title="Đặt hàng ngay">Đặt hàng ngay</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section_album">
                <div className="container">
                    <div className="block-title">
                        <h2>Hình ảnh Monster quán</h2>
                    </div>
                    <div className="block-content">
                        <div className="row margin-bottom">
                            <div className="col-lg-7 col-md-7 col-7 padding">
                                <div className="item">
                                    <a href="#" title="Monster Coffee">
                                        <img className="lazyload" src={'../assets/img/img-hinh-anh-1.png'} alt="Monster Coffee" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-5 col-5 padding">
                                <div className="item">
                                    <a href="#" title="Monster Coffee">
                                        <img className="lazyload" src={'../assets/img/img-hinh-anh-2.png'} alt="Monster Coffee" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-5 padding">
                                <div className="item">
                                    <a href="#" title="Monster Coffee">
                                        <img className="lazyload" src={'../assets/img/img-hinh-anh-3.png'} alt="Monster Coffee" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-7 col-7 padding">
                                <div className="item">
                                    <a href="#" title="Monster Coffee">
                                        <img className="lazyload" src={'../assets/img/img-hinh-anh-4.png'} alt="Monster Coffee" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section_blog">
                <div className="container">
                    <div className="block-title">
                        <h2>
                            <a href="tin-tuc" title="Tin tức mới nhất">Tin tức mới nhất</a>
                        </h2>
                    </div>
                    <div className="block-blog">
                        <div className="blog-swiper">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="item-blog">
                                        <div className="block-thumb">
                                            <a
                                                className="thumb"
                                                href="/so-thich-uong-ca-phe-tiet-lo-bi-mat-dong-troi-ve-tinh-cach-cua-ban"
                                                title="Sở thích uống cà phê tiết lộ bí mật động trời về tính cách của bạn"
                                            >
                                                <img
                                                    className="lazyload"
                                                    src={'../assets/img/t6.jpg'}
                                                    alt="Sở thích uống cà phê tiết lộ bí mật động trời về tính cách của bạn"
                                                />
                                            </a>
                                        </div>
                                        <div className="block-content">
                                            <div className="inner">
                                                <h3>
                                                    <a
                                                        href="/so-thich-uong-ca-phe-tiet-lo-bi-mat-dong-troi-ve-tinh-cach-cua-ban"
                                                        title="Sở thích uống cà phê tiết lộ bí mật động trời về tính cách của bạn"
                                                        >Sở thích uống cà phê tiết lộ bí mật động trời về tính cách của
                                                        bạn</a
                                                    >
                                                </h3>

                                                <p className="justify">
                                                    Hãy nói cho tôi loại cà phê mà bạn hay uống, tôi sẽ nói cho bạn biết
                                                    bạn là người như thế nào”. Chỉ với...
                                                </p>

                                                <a
                                                    className="viewmore"
                                                    href="/so-thich-uong-ca-phe-tiet-lo-bi-mat-dong-troi-ve-tinh-cach-cua-ban"
                                                    title="Xem tất cả"
                                                    >Xem tất cả</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="item-blog">
                                        <div className="block-thumb">
                                            <a
                                                className="thumb"
                                                href="/bat-mi-4-cach-trang-tri-quan-cafe-don-gian-ma-hut-khach"
                                                title="Bật mí 4 cách trang trí quán cafe đơn giản mà hút khách"
                                            >
                                                <img
                                                    className="lazyload"
                                                    src={'../assets/img/t5.jpg'}
                                                    alt="Bật mí 4 cách trang trí quán cafe đơn giản mà hút khách"
                                                />
                                            </a>
                                        </div>
                                        <div className="block-content">
                                            <div className="inner">
                                                <h3>
                                                    <a
                                                        href="/bat-mi-4-cach-trang-tri-quan-cafe-don-gian-ma-hut-khach"
                                                        title="Bật mí 4 cách trang trí quán cafe đơn giản mà hút khách"
                                                        >Bật mí 4 cách trang trí quán cafe đơn giản mà hút khách</a
                                                    >
                                                </h3>

                                                <p className="justify">
                                                    Hôm nay Classic coffee sẽ chia sẻ cho bạn 4 cách thiết kế không gian
                                                    nội thất quán &nbsp;cà phê hoàn chỉnh, chủ đầu tư...
                                                </p>

                                                <a
                                                    className="viewmore"
                                                    href="/bat-mi-4-cach-trang-tri-quan-cafe-don-gian-ma-hut-khach"
                                                    title="Xem tất cả"
                                                    >Xem tất cả</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="item-blog">
                                        <div className="block-thumb">
                                            <a
                                                className="thumb"
                                                href="/ca-phe-hat-pha-may-cach-lua-chon-ca-phe-nguyen-chat-ngon"
                                                title="Cà phê hạt pha máy - Cách lựa chọn cà phê nguyên chất ngon"
                                            >
                                                <img
                                                    className="lazyload"
                                                    src={'../assets/img/t4.jpg'}
                                                    alt="Cà phê hạt pha máy - Cách lựa chọn cà phê nguyên chất ngon"
                                                />
                                            </a>
                                        </div>
                                        <div className="block-content">
                                            <div className="inner">
                                                <h3>
                                                    <a
                                                        href="/ca-phe-hat-pha-may-cach-lua-chon-ca-phe-nguyen-chat-ngon"
                                                        title="Cà phê hạt pha máy - Cách lựa chọn cà phê nguyên chất ngon"
                                                        >Cà phê hạt pha máy - Cách lựa chọn cà phê nguyên chất ngon</a
                                                    >
                                                </h3>

                                                <p className="justify">
                                                    Việc vào quán cà phê vào buổi sáng hay hẹn hò ki phố đã lên đèn là
                                                    một lựa chọn được đông đảo người dân...
                                                </p>

                                                <a
                                                    className="viewmore"
                                                    href="/ca-phe-hat-pha-may-cach-lua-chon-ca-phe-nguyen-chat-ngon"
                                                    title="Xem tất cả"
                                                    >Xem tất cả</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="item-blog">
                                        <div className="block-thumb">
                                            <a
                                                className="thumb"
                                                href="/phan-biet-mui-vi-ca-phe-nguyen-chat-that-de-dang"
                                                title="Phân biệt mùi vị cà phê nguyên chất thật dễ dàng"
                                            >
                                                <img
                                                    className="lazyload"
                                                    src={'../assets/img/t3.jpg'}
                                                    alt="Phân biệt mùi vị cà phê nguyên chất thật dễ dàng"
                                                />
                                            </a>
                                        </div>
                                        <div className="block-content">
                                            <div className="inner">
                                                <h3>
                                                    <a
                                                        href="/phan-biet-mui-vi-ca-phe-nguyen-chat-that-de-dang"
                                                        title="Phân biệt mùi vị cà phê nguyên chất thật dễ dàng"
                                                        >Phân biệt mùi vị cà phê nguyên chất thật dễ dàng</a
                                                    >
                                                </h3>

                                                <p className="justify">
                                                    Mỗi sớm bạn có uống cà phê trước khi đi làm? Bạn có thường tụ tập
                                                    bạn bè ở quán cà phê và lắng nghe...
                                                </p>

                                                <a
                                                    className="viewmore"
                                                    href="/phan-biet-mui-vi-ca-phe-nguyen-chat-that-de-dang"
                                                    title="Xem tất cả"
                                                    >Xem tất cả</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
    

    
  );
}

export default HomePage