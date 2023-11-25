import React from 'react'

const Menu = () => {
  return (
    <div className="bodywrap">
      <section className="bread-crumb">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="main-title-breadcrumb text-center">Menu</div>
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
                              <strong><span>Menu</span></strong>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>
      <section className="page page-menu">
          <div className="banner">
              <div className="container">
                  <div className="row align-items-center">
                      <div className="col-lg-6 col-md-6 d-md-block d-none block-image">
                          <img className="lazyload" src={'../assets/img/img-page-menu.jpg'} alt="Template Monster Coffe" />
                      </div>
                      <div className="col-lg-6 col-md-6 col-12 block-info">
                          <div className="block-title">
                              <h2>Mã giảm giá</h2>
                          </div>

                          <div className="discount-code">
                              Nhập "<b>YEUMONSTER</b>" gảm <b>10k</b>, đơn tối thiểu 80k<br />
                              Nhập "<b>YEUMONSTER2</b>" gảm <b>20k</b>, đơn tối thiểu <b>150k</b><br />
                              Nhập "<b>FREESHIP</b>": Freeship tới <b>3km</b>, đơn tối thiểu <b>100k</b>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="order-menu">
              <div className="container">
                  <div className="row e-tabs not-dqtab ajax-tab-2" data-section="ajax-tab-2">
                      <div className="col-xl-3 col-lg-12 col-md-3 col-md-12 col-sm-12 col-12 food-tab col-left">
                          <ul className="tabs tabs-title tab-desktop ajax clearfix close-menu-order">
                              <li className="tab-link has-content" data-tab="tab-1" data-url="/san-pham-noi-bat">
                                  <span title="Cà phê">Cà phê</span>
                              </li>

                              <li className="tab-link" data-tab="tab-2" data-url="/san-pham-noi-bat">
                                  <span title="Trà">Trà</span>
                              </li>

                              <li className="tab-link" data-tab="tab-3" data-url="/san-pham-noi-bat">
                                  <span title="Bánh ngọt">Bánh ngọt</span>
                              </li>
                          </ul>

                          <div className="luu-y d-xl-block d-none">
                              <div className="block-title">Lưu ý</div>
                              <div className="block-content">
                                  <div className="item">
                                      Sau khi đặt hàng sẽ có nhân viên liên hệ cho nhân viên xác nhận đơn hàng
                                  </div>

                                  <div className="item">
                                      Tùy vào số lượng đơn hàng mà thời gian chuẩn bị sẽ khác nhau
                                  </div>

                                  <div className="item">
                                      Quý khách vui lòng kiêrm tra sản phẩm trước khi nhận hàng
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12 fix-width-right col-center">
                          <div className="tab-1 tab-content">
                              <div id="MainContent">
                                  <div className="products-view-grid">
                                      <div className="EndlessClick">
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
                                                              <img
                                                                  className="lazyload"
                                                                  src={'../assets/img/sp8.png'}
                                                                  alt="Mocha Recipe"
                                                              />
                                                          </a>
                                                      </div>
                                                      <div className="product-info">
                                                          <h3 className="product-name">
                                                              <a href="/mocha-recipe" title="Mocha Recipe"
                                                                  >Mocha Recipe</a
                                                              >
                                                          </h3>

                                                          <div className="product-content">
                                                              Cafe Mocha là gì? Mocha là 1 loại café được tạo cho
                                                              từ Espresso &amp; nữa nóng, thêm hương vị
                                                              chocolate...
                                                          </div>
                                                      </div>
                                                      <div className="product-action-price">
                                                          <div className="price-box">49.000₫</div>
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
                                                              <img
                                                                  className="lazyload"
                                                                  src={'../assets/img/sp7.png'}
                                                                  alt="Vanila Latte"
                                                              />
                                                          </a>
                                                      </div>
                                                      <div className="product-info">
                                                          <h3 className="product-name">
                                                              <a href="/vanila-latte" title="Vanila Latte"
                                                                  >Vanila Latte</a
                                                              >
                                                          </h3>

                                                          <div className="product-content">
                                                              Ly cà phê sữa đậm đà thời thượng! Một chút đậm đà
                                                              hơn so với Latte, Cappuccino của chúng tôi...
                                                          </div>
                                                      </div>
                                                      <div className="product-action-price">
                                                          <div className="price-box">Liên hệ</div>
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
                                                          <a
                                                              className="image_thumb scale_hover"
                                                              href="/latte"
                                                              title="Latte"
                                                          >
                                                              <img
                                                                  className="lazyload"
                                                                  src={'../assets/img/sp6.png'}
                                                                  alt="Latte"
                                                              />
                                                          </a>
                                                      </div>
                                                      <div className="product-info">
                                                          <h3 className="product-name">
                                                              <a href="/latte" title="Latte">Latte</a>
                                                          </h3>

                                                          <div className="product-content">
                                                              Ly cà phê sữa ngọt ngào đến khó quên!&nbsp;Với một
                                                              chút nhẹ nhàng hơn&nbsp;so với&nbsp;Cappuccino,
                                                              Latte của chúng tôi bắt...
                                                          </div>
                                                      </div>
                                                      <div className="product-action-price">
                                                          <div className="price-box">49.000₫</div>
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
                                                          <a
                                                              className="image_thumb scale_hover"
                                                              href="/americano"
                                                              title="Americano"
                                                          >
                                                              <img
                                                                  className="lazyload"
                                                                  src={'../assets/img/sp5.png'}
                                                                  alt="Americano"
                                                              />
                                                          </a>
                                                      </div>
                                                      <div className="product-info">
                                                          <h3 className="product-name">
                                                              <a href="/americano" title="Americano">Americano</a>
                                                          </h3>

                                                          <div className="product-content">
                                                              Americano là sự kết hợp giữa cà phê espresso thêm
                                                              vào nước đun sôi. Bạn có thể tùy thích lựa...
                                                          </div>
                                                      </div>
                                                      <div className="product-action-price">
                                                          <div className="price-box">46.000₫</div>
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
                                                              <img
                                                                  className="lazyload"
                                                                  src={'../assets/img/sp4.png'}
                                                                  alt="ICED Espresso"
                                                              />
                                                          </a>
                                                      </div>
                                                      <div className="product-info">
                                                          <h3 className="product-name">
                                                              <a href="/iced-espresso" title="ICED Espresso"
                                                                  >ICED Espresso</a
                                                              >
                                                          </h3>

                                                          <div className="product-content">
                                                              Đích thực là ly cà phê espresso ngon đậm đà! Được
                                                              chiết xuất một cách hoàn hảo từ loại cà...
                                                          </div>
                                                      </div>
                                                      <div className="product-action-price">
                                                          <div className="price-box">Liên hệ</div>
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
                                              </form>
                                          </div>

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
                                                              <img
                                                                  className="lazyload"
                                                                  src={'../assets/img/sp3.png'}
                                                                  alt="Caramel Latte"
                                                              />
                                                          </a>
                                                      </div>
                                                      <div className="product-info">
                                                          <h3 className="product-name">
                                                              <a href="/caramel-latte" title="Caramel Latte"
                                                                  >Caramel Latte</a
                                                              >
                                                          </h3>

                                                          <div className="product-content">
                                                              Ly cà phê sữa ngọt ngào đến khó quên!&nbsp;Với một
                                                              chút nhẹ nhàng hơn&nbsp;so với&nbsp;Cappuccino,
                                                              Latte của chúng tôi bắt...
                                                          </div>
                                                      </div>
                                                      <div className="product-action-price">
                                                          <div className="price-box">54.000₫</div>
                                                          <div className="action">
                                                              <a
                                                                  title="Đặt món"
                                                                  href="/caramel-latte"
                                                                  data-handle="caramel-latte"
                                                                  className="quick-view btn-views"
                                                              >
                                                                  +
                                                              </a>
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
                                                              <img
                                                                  className="lazyload"
                                                                  src={'../assets/img/sp2.png'}
                                                                  alt="Cafe Cappuccino"
                                                              />
                                                          </a>
                                                      </div>
                                                      <div className="product-info">
                                                          <h3 className="product-name">
                                                              <a href="/cafe-cappuccino" title="Cafe Cappuccino"
                                                                  >Cafe Cappuccino</a
                                                              >
                                                          </h3>

                                                          <div className="product-content">
                                                              Ly cà phê sữa đậm đà thời thượng! Một chút đậm đà
                                                              hơn so với Latte, Cappuccino của chúng tôi...
                                                          </div>
                                                      </div>
                                                      <div className="product-action-price">
                                                          <div className="price-box">54.000₫</div>
                                                          <div className="action">
                                                              <a
                                                                  title="Đặt món"
                                                                  href="/cafe-cappuccino"
                                                                  data-handle="cafe-cappuccino"
                                                                  className="quick-view btn-views"
                                                              >
                                                                  +
                                                              </a>
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
                                                  data-id="product-actions-25191064"
                                                  encType="multipart/form-data"
                                              >
                                                  <div className="product-thumb-info">
                                                      <div className="product-thumbnail">
                                                          <a
                                                              className="image_thumb scale_hover"
                                                              href="/espresso"
                                                              title="Espresso"
                                                          >
                                                              <img
                                                                  className="lazyload"
                                                                  src={'img/sp1.png'}
                                                                  alt="Espresso"
                                                              />
                                                          </a>
                                                      </div>
                                                      <div className="product-info">
                                                          <h3 className="product-name">
                                                              <a href="/espresso" title="Espresso">Espresso</a>
                                                          </h3>

                                                          <div className="product-content">
                                                              Espresso là gì? Espresso là một loại café khá quen
                                                              thuộc và được nhiều người lựa chọn vì hương vị...
                                                          </div>
                                                      </div>
                                                      <div className="product-action-price">
                                                          <div className="price-box">59.000₫</div>
                                                          <div className="action">
                                                              <a
                                                                  title="Đặt món"
                                                                  href="/espresso"
                                                                  data-handle="espresso"
                                                                  className="quick-view btn-views"
                                                              >
                                                                  +
                                                              </a>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </form>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="tab-2 tab-content"></div>

                          <div className="tab-3 tab-content"></div>
                      </div>
                      <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 fix-width-left col-right">
                          <div className="sticky-right">
                              <div className="cart-mobile d-lg-none">
                                  <div className="flex-box d-flex">
                                      <span className="count_item_pr">0</span>
                                      <span className="mb-amout">0₫</span>
                                      <span>Xem chi tiết</span>
                                  </div>
                              </div>
                              <div className="orders-cart">
                                  <div className="orders-cart-title">Chi tiết đơn hàng</div>
                                  <div className="orders-cart-ajax ajax-here">
                                      <div className="orders-cart-item">
                                          <p className="cart-empty text-center">Bạn ơi, mình thêm món vào giỏ nhé</p>
                                      </div>
                                      <div className="orders-cart-bottom">
                                          <p className="flex-total subtotal">
                                              Tạm tính: <span className="orders-total small">0₫</span>
                                          </p>
                                          <p className="flex-total amount">
                                              Tổng cộng: <span className="orders-total">0₫</span>
                                          </p>
                                      </div>
                                  </div>
                                  <div className="orders-cart-time disabled">
                                      <div className="action-acc header-pick-time">
                                          <a href="javascript:void(0)" className="btn-choise-time">
                                              <svg
                                                  x="0px"
                                                  y="0px"
                                                  viewBox="0 0 50.9 39.8"
                                                  enable-background="new 0 0 50.9 39.8"
                                                
                                              >
                                                  <g>
                                                      <defs>
                                                          <rect id="SVGID_1_" y="0" width="50.9" height="39.8" />
                                                      </defs>
                                                      <clipPath id="SVGID_2_">
                                                          <use  overflow="visible" />
                                                      </clipPath>
                                                      <path
                                                          clip-path="url(#SVGID_2_)"
                                                          d="M23.1,14.2c0,0,0-0.1,0-0.1c0,0-0.1-0.1-0.1-0.1l-3.5-4.7c-0.3-0.4-0.8-0.4-1.1-0.2 c-0.4,0.3-0.4,0.8-0.2,1.1l2.6,3.4H10.6c-0.4,0-0.8,0.4-0.8,0.8c0,0.4,0.4,0.8,0.8,0.8h10.2l-2.6,3.4c-0.3,0.4-0.2,0.9,0.2,1.1 c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.5-0.1,0.6-0.3l3.5-4.7c0,0,0.1-0.1,0.1-0.1c0,0,0-0.1,0-0.1c0-0.1,0-0.2,0-0.2 C23.2,14.4,23.1,14.3,23.1,14.2"
                                                      />
                                                      <path
                                                          clip-path="url(#SVGID_2_)"
                                                          d="M50.7,27.3L47,12.5c-0.4-1.4-1.6-2.4-3.1-2.4H33.6V2.9c0-1.3-1.1-2.4-2.4-2.4H2.4 C1.1,0.5,0,1.6,0,2.9v24c0,1.3,1.1,2.4,2.4,2.4h4.9c-1,1-1.7,2.4-1.7,4c0,3.1,2.5,5.6,5.6,5.6s5.6-2.5,5.6-5.6c0-1.6-0.6-3-1.7-4 h21.8c-1,1-1.7,2.4-1.7,4c0,3.1,2.5,5.6,5.6,5.6c3.1,0,5.6-2.5,5.6-5.6c0-1.6-0.6-3-1.7-4h4.4C50.2,29.3,51,28.3,50.7,27.3 M43.9,11.7c0.7,0,1.4,0.5,1.6,1.2l1.4,5.5H33.6v-6.7H43.9z M15.2,33.3c0,2.2-1.8,4-4,4c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4 C13.4,29.3,15.2,31.1,15.2,33.3 M32,27.7H2.4c-0.4,0-0.8-0.4-0.8-0.8v-24c0-0.4,0.4-0.8,0.8-0.8h28.8c0.4,0,0.8,0.4,0.8,0.8V27.7z M44.8,33.3c0,2.2-1.8,4-4,4c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4C43,29.3,44.8,31.1,44.8,33.3 M33.6,27.7V20h13.6l1.9,7.7H33.6z"
                                                      />
                                                  </g>
                                                  <g>
                                                      <defs>
                                                          <rect id="SVGID_3_" y="0" width="50.9" height="39.8" />
                                                      </defs>
                                                      <clipPath id="SVGID_4_">
                                                          <use  overflow="visible" />
                                                      </clipPath>
                                                      <path
                                                          clip-path="url(#SVGID_4_)"
                                                          d="M32,31.7H19.2c-0.4,0-0.8,0.4-0.8,0.8c0,0.4,0.4,0.8,0.8,0.8H32c0.4,0,0.8-0.4,0.8-0.8 C32.8,32,32.4,31.7,32,31.7"
                                                      />
                                                  </g>
                                              </svg>
                                              <span className="text"
                                                  >THỜI GIAN GIAO
                                                  <svg
                                                      className="plus-nClick1"
                                                      x="0px"
                                                      y="0px"
                                                      viewBox="0 0 490.656 490.656"
                                                     
                                           
                                                      width="25px"
                                                      height="25px"
                                                  >
                                                      <path
                                                          d="M487.536,120.445c-4.16-4.16-10.923-4.16-15.083,0L245.339,347.581L18.203,120.467c-4.16-4.16-10.923-4.16-15.083,0    c-4.16,4.16-4.16,10.923,0,15.083l234.667,234.667c2.091,2.069,4.821,3.115,7.552,3.115s5.461-1.045,7.531-3.136l234.667-234.667    C491.696,131.368,491.696,124.605,487.536,120.445z"
                                                          data-original="#000000"
                                                          className="active-path"
                                                          data-old_color="#000000"
                                                          fill="#141414"
                                                      ></path>
                                                  </svg>
                                              </span>
                                          </a>
                                          <div className="sub-time">
                                              <p className="sub-choise-now">
                                                  <span
                                                      ><svg
                                                          x="0"
                                                          y="0"
                                                          viewBox="0 0 512 512"
                                                          
                                     
                                                      >
                                                          <path
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0"
                                                              fill="#000000"
                                                              data-original="#000000"
                                                         
                                                          />
                                                          <path
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              d="m368 394.667969c-4.097656 0-8.191406-1.558594-11.308594-4.695313l-112-112c-3.007812-3.007812-4.691406-7.082031-4.691406-11.304687v-149.335938c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v142.699219l107.308594 107.308594c6.25 6.25 6.25 16.382812 0 22.632812-3.117188 3.136719-7.210938 4.695313-11.308594 4.695313zm0 0"
                                                              fill="#000000"
                                                              data-original="#000000"
                                                           
                                                          />
                                                      </svg> </span
                                                  >Giao ngay
                                              </p>
                                              <p className="sub-choise-time">
                                                  <span
                                                      ><svg
                                                          enable-background="new 0 0 512 512"
                                                          viewBox="0 0 512 512"
                                                      >
                                                          <path
                                                              d="m446 40h-46v-24c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-224v-24c0-8.836-7.163-16-16-16s-16 7.164-16 16v24h-46c-36.393 0-66 29.607-66 66v340c0 36.393 29.607 66 66 66h380c36.393 0 66-29.607 66-66v-340c0-36.393-29.607-66-66-66zm-380 32h46v16c0 8.836 7.163 16 16 16s16-7.164 16-16v-16h224v16c0 8.836 7.163 16 16 16s16-7.164 16-16v-16h46c18.748 0 34 15.252 34 34v38h-448v-38c0-18.748 15.252-34 34-34zm380 408h-380c-18.748 0-34-15.252-34-34v-270h448v270c0 18.748-15.252 34-34 34z"
                                                          /></svg></span
                                                  >Thời gian đặt hàng
                                              </p>
                                              <div className="sub-choise">
                                                  <div className="sub-time-box">
                                                      <label>Ngày đặt</label>
                                                      <select className="choise-day">
                                                          <option value="Hôm nay">Hôm nay</option>
                                                      </select>
                                                  </div>
                                                  <div className="sub-time-box">
                                                      <label>Thời gian đặt</label>
                                                      <select className="choise-time">
                                                          <option data-hours="8:00 - 9:00" value="8:00 - 9:00">
                                                              8:00 - 9:00
                                                          </option>

                                                          <option
                                                              data-hours=" 10:00 - 11:00"
                                                              value=" 10:00 - 11:00"
                                                          >
                                                              10:00 - 11:00
                                                          </option>

                                                          <option
                                                              data-hours=" 11:00 - 12:00"
                                                              value=" 11:00 - 12:00"
                                                          >
                                                              11:00 - 12:00
                                                          </option>

                                                          <option
                                                              data-hours=" 12:00 - 13:00"
                                                              value=" 12:00 - 13:00"
                                                          >
                                                              12:00 - 13:00
                                                          </option>

                                                          <option
                                                              data-hours=" 13:00 - 14:00"
                                                              value=" 13:00 - 14:00"
                                                          >
                                                              13:00 - 14:00
                                                          </option>

                                                          <option
                                                              data-hours=" 14:00 - 15:00"
                                                              value=" 14:00 - 15:00"
                                                          >
                                                              14:00 - 15:00
                                                          </option>

                                                          <option
                                                              data-hours=" 15:00 - 16:00"
                                                              value=" 15:00 - 16:00"
                                                          >
                                                              15:00 - 16:00
                                                          </option>

                                                          <option
                                                              data-hours=" 16:00 - 17:00"
                                                              value=" 16:00 - 17:00"
                                                          >
                                                              16:00 - 17:00
                                                          </option>

                                                          <option
                                                              data-hours=" 17:00 - 18:00"
                                                              value=" 17:00 - 18:00"
                                                          >
                                                              17:00 - 18:00
                                                          </option>

                                                          <option
                                                              data-hours=" 18:00 - 19:00"
                                                              value=" 18:00 - 19:00"
                                                          >
                                                              18:00 - 19:00
                                                          </option>

                                                          <option
                                                              data-hours=" 19:00 - 20:00"
                                                              value=" 19:00 - 20:00"
                                                          >
                                                              19:00 - 20:00
                                                          </option>

                                                          <option
                                                              data-hours=" 20:00 - 21:00"
                                                              value=" 20:00 - 21:00"
                                                          >
                                                              20:00 - 21:00
                                                          </option>
                                                      </select>
                                                  </div>
                                                  <div className="sub-time-box">
                                                      <a
                                                          href="javascript:void(0)"
                                                          className="btn-link btn-choise-submit"
                                                          >Hẹn giờ</a
                                                      >
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="orders-cart-payment btn-check">
                                      <a className="btn-link disabled" href="/checkout">Thanh toán</a>
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

export default Menu