import React from 'react'

const MochaRecipe = () => {
  return (
    <>
    <section className="bread-crumb">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="main-title-breadcrumb text-center">
                        Mocha Recipe
                    </div>
                    <ul className="breadcrumb" >					
                        <li className="home">
                            <a  href="/" ><span >Trang chủ</span></a>						
                        </li>
                        <li>
                            <a className="changeurl"  href="/san-pham-noi-bat"><span >Sản phẩm nổi bật</span></a>						
                        </li>
                        <li>
                            <strong><span>Mocha Recipe</span></strong>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </section>   
    <section className="product layout-product" itemscope itemtype="https://schema.org/Product">
                <div className="details-product">
                    <div className="container">
                        <div className="row">
                            <div className="product-detail-left product-images col-12 col-md-6 col-lg-6">
                                <div className="product-image-block relative">
                                    <div className="swiper-container gallery-top">
                                        <div className="swiper-wrapper" id="lightgallery">
                                            <a
                                                className="swiper-slide"
                                                data-hash="0"
                                                href="//bizweb.dktcdn.net/thumb/1024x1024/100/451/095/products/sp8.png?v=1648442442470"
                                                title="Click để xem"
                                            >
                                                <img
                                                    height="540"
                                                    width="540"
                                                    src={'../asets/img/sp8.png'}
                                                    alt="Mocha Recipe"
                                            
                                                    className="img-responsive mx-auto d-block swiper-lazy"
                                                />
                                            </a>

                                            <a
                                                className="swiper-slide"
                                                data-hash="1"
                                                href="//bizweb.dktcdn.net/thumb/1024x1024/100/451/095/products/sp8-2.jpg?v=1648442442720"
                                                title="Click để xem"
                                            >
                                                <img
                                                    height="540"
                                                    width="540"
                                                    src={'../asets/img/sp8-2.jpg'}
                                                    alt="Mocha Recipe"
                                                    data-image="https://bizweb.dktcdn.net/100/451/095/products/sp8-2.jpg?v=1648442442720"
                                                    className="img-responsive mx-auto d-block swiper-lazy"
                                                />
                                            </a>

                                            <a
                                                className="swiper-slide"
                                                data-hash="2"
                                                href="//bizweb.dktcdn.net/thumb/1024x1024/100/451/095/products/sp8-3.jpg?v=1648442443367"
                                                title="Click để xem"
                                            >
                                                <img
                                                    height="540"
                                                    width="540"
                                                    src={'../asets/img/sp8-3.jpg'}
                                                    alt="Mocha Recipe"
                                                    data-image="https://bizweb.dktcdn.net/100/451/095/products/sp8-3.jpg?v=1648442443367"
                                                    className="img-responsive mx-auto d-block swiper-lazy"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="swiper-container gallery-thumbs">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide" data-hash="0">
                                                <div className="p-100">
                                                    <img
                                                        height="80"
                                                        width="80"
                                                        src={'../asets/img/sp8.png'}
                                                        alt="Mocha Recipe"

                                                        className="swiper-lazy"
                                                    />
                                                </div>
                                            </div>

                                            <div className="swiper-slide" data-hash="1">
                                                <div className="p-100">
                                                    <img
                                                        height="80"
                                                        width="80"
                                                        src={'../asets/img/sp8-2.jpg'}
                                                        alt="Mocha Recipe"
                                                        
                                                        className="swiper-lazy"
                                                    />
                                                </div>
                                            </div>

                                            <div className="swiper-slide" data-hash="2">
                                                <div className="p-100">
                                                    <img
                                                        height="80"
                                                        width="80"
                                                        src={'../asets/img/sp8-3.jpg'}
                                                        alt="Mocha Recipe"
                                                       
                                                        className="swiper-lazy"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-button-next"></div>
                                        <div className="swiper-button-prev"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="details-pro col-12 col-md-6 col-lg-6">
                                <h1 className="title-product">Mocha Recipe</h1>
                                <div className="reviews_details_product">
                                    <div
                                        className="sapo-product-reviews-badge sapo-product-reviews-badge-detail"
                                        data-id="25191086"
                                    ></div>
                                </div>
                                <form
                                    encType="multipart/form-data"
                                    data-cart-form
                                    id="add-to-cart-form"
                                    action="/cart/add"
                                    method="post"
                                    className="form-inline"
                                >
                                    <div className="product-summary">
                                        <div className="rte">Mô tả đang cập nhật</div>
                                    </div>
                                    <div className="price-box clearfix">
                                        <span className="label-price">Giá: </span>

                                        <span className="special-price">
                                            <span className="price product-price">49.000₫</span>
                                        </span>
                                        <span
                                            className="old-price"
                                            itemprop="priceSpecification"
                                            itemscope=""
                                            itemtype="http://schema.org/priceSpecification"
                                        >
                                            <del className="price product-price-old"> </del>
                                        </span>
                                    </div>
                                    <div className="form-product">
                                        <div className="select-swatch">
                                            <div className="swatch clearfix" data-option-index="0">
                                                <div className="header">Size</div>

                                                <div data-value="M" className="swatch-element m available">
                                                    <input
                                                        id="swatch-0-m"
                                                        type="radio"
                                                        name="option-0"
                                                        value="M"
                                                        checked
                                                    />

                                                    <label for="swatch-0-m">
                                                        <img
                                                            className="crossed-out"
                                                            src={'../asets/img/soldout.png'}
                                                            alt="m"
                                                        />
                                                    </label>
                                                    M
                                                </div>

                                                <div data-value="L" className="swatch-element l available">
                                                    <input id="swatch-0-l" type="radio" name="option-0" value="L" />

                                                    <label for="swatch-0-l">
                                                        <img
                                                            className="crossed-out"
                                                            src={'../asets/imgsoldout.png'}
                                                            alt="l"
                                                        />
                                                    </label>
                                                    L
                                                </div>
                                            </div>
                                            <div className="swatch clearfix" data-option-index="1">
                                                <div className="header">Màu sắc</div>
                                                <div data-value="Đen" className="swatch-element color den available">
                                                    <div className="tooltip">Đen</div>

                                                    <input
                                                        id="swatch-1-den"
                                                        type="radio"
                                                        name="option-1"
                                                        value="Đen"
                                                        checked
                                                    />

                                                    <label for="swatch-1-den">
                                                        <img
                                                            className="crossed-out"
                                                            src={'../asets/img/soldout.png'}
                                                            alt="den"
                                                        />
                                                    </label>
                                                </div>

                                                <div data-value="V&#224;ng" className="swatch-element color vang available">
                                                    <div className="tooltip">Vàng</div>

                                                    <input
                                                        id="swatch-1-vang"
                                                        type="radio"
                                                        name="option-1"
                                                        value="V&#224;ng"
                                                    />

                                                    <label for="swatch-1-vang">
                                                        <img
                                                            className="crossed-out"
                                                            src={'../asets/img/soldout.png'}
                                                            alt="vang"
                                                        />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box-variant clearfix d-none">
                                            <select
                                                id="product-selectors"
                                                className="form-control form-control-lg"
                                                name="variantId"
                                                style="display: none"
                                            >
                                                <option selected="selected" value="62349695">M / Đen - 49.000₫</option>

                                                <option value="62381446">L / V&#224;ng - 59.000₫</option>
                                            </select>
                                        </div>

                                        <div className="block-note-product">
                                            <div className="product-note show">
                                                <div className="title">Ghi chú</div>
                                                <div className="note-box">
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fill="none"
                                                            stroke="#999"
                                                            d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z"
                                                        ></path>
                                                        <path
                                                            fill="none"
                                                            stroke="#999"
                                                            d="M15.98,7.268 L13.851,5.148"
                                                        ></path>
                                                    </svg>
                                                    <input
                                                        type="text"
                                                        name="properties[GhiChu]"
                                                        placeholder="Thêm ghi chú món này"
                                                        autocomplete="off"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="clearfix form-group">
                                            <div className="flex-quantity">
                                                <div className="custom custom-btn-number show">
                                                    <label className="sl section">Số lượng:</label>
                                                    <div className="input_number_product form-control">
                                                        <button
                                                            className="btn_num num_1 button button_qty"
                                                            onClick="var result = document.getElementById('qtym'); var qtypro = result.value; if( !isNaN( qtypro ) ) result.value--;return false;"
                                                            type="button"
                                                        >
                                                            -
                                                        </button>
                                                        <input
                                                            type="text"
                                                            id="qtym"
                                                            name="quantity"
                                                            value="1"
                                                            maxlength="3"
                                                            className="form-control prd_quantity"
                                                            onkeypress="if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;"
                                                            onchange="if(this.value == 0)this.value=1;"
                                                        />
                                                        <button
                                                            className="btn_num num_2 button button_qty"
                                                            onClick="var result = document.getElementById('qtym'); var qtypro = result.value; if( !isNaN( qtypro )) result.value++;return false;"
                                                            type="button"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="btn-mua button_actions clearfix">
                                                    <button
                                                        type="submit"
                                                        className="btn btn_base normal_button btn_add_cart add_to_cart btn-cart"
                                                    >
                                                        <span className="txt-main text_1">Thêm vào giỏ hàng</span>
                                                    </button>
                                                    <button type="button" className="btn btn-buy-now">Đặt hàng ngay</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="coupons">
                                        <div className="item">
                                            Nhập "<b>YEUMONSTER</b>"<br />
                                            Gảm <b>10k</b>, đơn tối thiểu <b>80k</b>
                                        </div>

                                        <div className="item">
                                            Nhập "<b>FREESHIP</b>"<br />
                                            Freeship tới <b>3km</b>, đơn tối thiểu <b>100k</b>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="product-tab e-tabs not-dqtab">
                        <ul className="tabs tabs-title clearfix">
                            <li className="tab-link active" data-tab="#tab-1">
                                <h3>Mô tả sản phẩm</h3>
                            </li>
                            <li className="tab-link" data-tab="#tab-3">
                                <h3>Đánh giá</h3>
                            </li>
                        </ul>
                        <div className="tab-float">
                            <div id="tab-1" className="tab-content active content_extab">
                                <div className="rte product_getcontent">
                                    <div id="content">
                                        <p>
                                            Cafe Mocha là gì?<br />
                                            Mocha là 1 loại café được tạo cho từ Espresso &amp; nữa nóng, thêm hương vị
                                            chocolate (có thể là bột chocolate hoặc sauce chocolate).Vị đắng và lắng
                                            đọng của chocolate được hòa quyện hoàn hảo và tuyệt vời nhất với vị đắng đậm
                                            đà của café &amp; dậy lên vị béo ngậy của sữa tươi được đánh nóng, lớp bọt
                                            sữa mịn màng đã tạo nên hương vị café đầy lôi cuốn, đưa Mocha trở thành thứ
                                            thức uống ưa thích của nữ giới &amp; người trẻ tuổi.Café Mocha sẽ là café
                                            của mọi độ tuổi vì loại café này không thực sự đắng, vị café được cân chỉnh
                                            hài hòa với vị ngọt, vị béo của chocolate và sữa nên rất phù hợp với các ai
                                            không muốn uống café đắng.Mặc dù thế, ly Mocha vẫn không thể mất đi lượng
                                            caffein thiết yếu, vẫn đủ để khiến FAN của café phải say mê.Lịch sử hào hùng
                                            Mocha được khởi đầu từ thành phố cảng Al – Makha, nằm trên biển Đỏ tại Cộng
                                            hòa Yemen.Kể từ thời điểm Yemen biến thành nước trồng và xuất đi café lớn
                                            nhất nước ngoài, nhất là nguồn cung café cho những vùng cạnh bên bán đảo Ả
                                            Rập, từ “Mocha” được sử dụng cho tất cả các loại café được nhập khẩu sang âu
                                            lục.
                                        </p>
                                        <p>
                                            Sự khác nhau giữa Mocha và nhiều chủng loại café khác<br />
                                            Café Mocha sử dụng hạt café rang và pha bằng hơi nước nóng, giúp café dậy
                                            mừi hương nhưng vị không quá đậm.Ly Mocha trở nên mê hoặc hơn khi màu café
                                            đặc sánh kế bên white color của lớp kem tươi, màu nâu óng của dòng sauce
                                            chocotale phía trên mặt ly.Café Mocha có hai loại đó chính là Mocha đá và
                                            Mocha nóng.Mocha nóng khiến thực khách tận hưởng sự mê muội, ngất ngây còn
                                            Mocha đá với phần đá được xay nhuyễn hòa chung trong café, bạn sẽ cảm nhận
                                            ngay vị mát lạnh, thơm ngọt tan trên đầu lưỡi.
                                        </p>
                                        <p>
                                            <br />
                                            Lúc bấy giờ, trong menu những quầy café đều phải có café Mocha để thực khách
                                            lựa chọn. cạnh bên Mocha, thực khách cũng sẽ gặp rất nhiều những loại café
                                            khác như Espresso, Cappuccino, Latte, Americano…Làm sao để nhận biết các
                                            loại café này? Điểm không giống nhau giữa các loại café khác với Mocha là
                                            gì?
                                        </p>
                                        <p>
                                            Espresso:<br />
                                            Các hạt café sẫm màu được rang, xay nhuyễn và pha chế bằng cách dùng nước
                                            nóng nén dưới áp suất cao. cho nên, Espresso có vị đậm nhất trong những loại
                                            café, trên mặt ly có một lớp bọt gray clolor gọi là Crema thơm nhưng không
                                            đắng.
                                        </p>
                                        <p>
                                            Mocha:<br />
                                            Phối kết hợp Espresso với sữa nóng và chocolate, mật độ pha café – sữa của
                                            café Mocha tương tự với café sữa nhưng có bổ sung thêm chocolate đen hoặc
                                            trắng. Espresso trong Mocha pha bằng hơi nước nên vị đắng cũng nhẹ nhàng
                                            hơn.
                                        </p>
                                        <p>
                                            Cappuccino:<br />
                                            Gồm có ba phần tử cơ bản: Café Espresso, sữa nóng &amp; bọt sữa được pha
                                            theo tỉ lệ bằng nhau. Điểm đặc biệt của Cappuccino đó là thẩm mỹ vẽ, tạo
                                            hình lên lớp bọt sữa, làm cho các tách café đậm màu thẩm mỹ.
                                        </p>
                                        <p>
                                            Latte:<br />
                                            Phần tử in như Cappuccino, gồm café Espresso, sữa nóng và bọt sữa, lượng bọt
                                            sữa bằng 1 nửa sữa nóng.Americano: Về cơ bản, Americano chính là Espresso
                                            nhưng được pha loãng với lượng nước 2 lần, giảm xuống vị đắng của
                                            Espresso.Qua nội dung bài viết này, các bạn sẽ hiểu hơn cafe Mocha là gì,
                                            biết thêm về loại có cafe Mocha có hương vị hấp dẫn rất được yêu thích rộng
                                            khắp. Mỗi loại café đều mang trong mình các mẩu truyện hấp dẫn, đưa thực
                                            khách đến với các vùng miền không giống nhau. Đối với các Fan Hâm mộ của
                                            café nói chung và những Barista, các ai muốn theo nghề Barista nói riêng thì
                                            việc thưởng thức &amp; chiêm nghiệm từng mùi vị café là cả một niềm phấn
                                            khích, mê hồn.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-3" className="tab-content content_extab">
                                <div className="rte">
                                    <div id="sapo-product-reviews" className="sapo-product-reviews" data-id="25191086">
                                        <div id="sapo-product-reviews-noitem" style="display: none">
                                            <div className="content">
                                                <p data-content-text="language.suggest_noitem"></p>
                                                <div className="product-reviews-summary-actions">
                                                    <button
                                                        type="button"
                                                        className="btn-new-review"
                                                        onclick="BPR.newReview(this); return false;"
                                                        data-content-str="language.newreview"
                                                    ></button>
                                                </div>
                                                <div
                                                    id="noitem-bpr-form_"
                                                    data-id="formId"
                                                    className="noitem-bpr-form"
                                                    style="display: none"
                                                >
                                                    <div className="sapo-product-reviews-form"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="sapo-product-reviews-sub" style="display: none">
                                            <div className="sapo-product-reviews-summary" style="display: none">
                                                <div className="sapo-product-reviews-action">
                                                    <meta itemprop="name" content="Mocha Recipe" />
                                                    <div
                                                        itemprop="aggregateRating"
                                                        itemscope
                                                        itemtype="http://schema.org/AggregateRating"
                                                        className="bpr-summary"
                                                    >
                                                        <meta content="5" itemprop="bestRating" />
                                                        <meta content="1" itemprop="worstRating" />
                                                        <div className="bpr-summary-average">
                                                            <span itemprop="ratingValue">3</span>
                                                            <span className="max-score">/5</span>
                                                        </div>
                                                        <div
                                                            data-number="5"
                                                            className="sapo-product-reviews-star"
                                                            data-score="3"
                                                        ></div>
                                                        <p>
                                                            (<span itemprop="ratingCount">2</span>
                                                            <span>đánh giá</span>)
                                                        </p>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="btn-new-review"
                                                        onclick="BPR.newReview(this); return false;"
                                                        data-content-str="language.newreview"
                                                    ></button>
                                                </div>
                                            </div>
                                            <span className="product-reviews-summary-actions"> </span>
                                            <div
                                                className="sapo-product-reviews-form"
                                                id="bpr-form_25191086"
                                                style="display: none"
                                            ></div>
                                            <div id="bpr-list" className="sapo-product-reviews-list"></div>
                                            <div id="bpr-more-reviews"></div>
                                        </div>
                                    </div>
                                    <div id="popup-bpr-form_25191086" className="popup-bpr-form jquerymodal">
                                        <div className="jquerymodal-content">
                                            <div className="jquerymodal-body">
                                                <a href="javascript:;" rel="jquerymodal:close" className="close-modal">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24px"
                                                        height="24px"
                                                    >
                                                        <path
                                                            d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
                                                        ></path>
                                                    </svg>
                                                </a>
                                                <div className="sapo-product-reviews-form">
                                                    <div>
                                                        <form
                                                            method="post"
                                                            action="https://newproductreviews.sapoapps.vn/reviews/create"
                                                            id="sapo-product-reviews-frm"
                                                            name="sapo-product-reviews-frm"
                                                        >
                                                            <input
                                                                type="hidden"
                                                                name="productId"
                                                                id="review_product_id"
                                                                value="25191086"
                                                            />
                                                            <div className="title-form">Đánh giá sản phẩm</div>
                                                            <div className="review-product-name">Mocha Recipe</div>
                                                            <div className="bpr-form-rating">
                                                                <div className="form-group">
                                                                    <label>Đánh giá của bạn về sản phẩm:</label>
                                                                    <div
                                                                        id="dvRating"
                                                                        className="sapo-product-reviews-star"
                                                                    ></div>
                                                                </div>
                                                                <input
                                                                    type="hidden"
                                                                    name="rating"
                                                                    id="review_rate"
                                                                    value="5"
                                                                />
                                                                <span className="bpr-form-message-error"></span>
                                                            </div>
                                                            <div className="bpr-form-contact no-attachment">
                                                                <div className="form-group form-group__multiple">
                                                                    <div className="bpr-form-contact-name require">
                                                                        <input
                                                                            type="text"
                                                                            maxlength="100"
                                                                            id="review_author"
                                                                            name="author"
                                                                            value=""
                                                                            placeholder="Nhập họ tên của bạn"
                                                                        />
                                                                        <span className="bpr-form-message-error"></span>
                                                                    </div>
                                                                    <div
                                                                        className="bpr-form-contact-email require"
                                                                        style="width: 100%"
                                                                    >
                                                                        <input
                                                                            type="text"
                                                                            maxlength="50"
                                                                            id="review_email"
                                                                            name="email"
                                                                            value=""
                                                                            placeholder="Nhập email của bạn"
                                                                        />
                                                                        <span className="bpr-form-message-error"></span>
                                                                    </div>
                                                                    <div className="bpr-form-contact-phone hide">
                                                                        <input
                                                                            type="tel"
                                                                            maxlength="15"
                                                                            id="review_phone"
                                                                            name="phone"
                                                                            value=""
                                                                            placeholder="Nhập số điện thoại của bạn"
                                                                        />
                                                                        <span className="bpr-form-message-error"></span>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group__textarea">
                                                                    <div className="form-group">
                                                                        <div className="bpr-form-review-body">
                                                                            <textarea
                                                                                maxlength="1000"
                                                                                id="review_body"
                                                                                name="body"
                                                                                rows="5"
                                                                                placeholder="Nhập nội dung đánh giá của bạn về sản phẩm này"
                                                                            ></textarea>
                                                                        </div>
                                                                    </div>
                                                                    <div id="fileAttach" className="bpr-file-attach hide">
                                                                        <label className="next-label" for="inputFileAttach">
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 30 30"
                                                                            >
                                                                                <path
                                                                                    d="M 4 5 C 2.895 5 2 5.895 2 7 L 2 23 C 2 24.105 2.895 25 4 25 L 14.230469 25 C 14.083469 24.356 14 23.688 14 23 C 14 22.662 14.021594 22.329 14.058594 22 L 5 22 L 5 15 L 7.2890625 12.710938 C 8.2340625 11.765937 9.7659375 11.765937 10.710938 12.710938 L 15.720703 17.720703 C 17.356703 15.469703 20.004 14 23 14 C 24.851 14 26.57 14.559578 28 15.517578 L 28 7 C 28 5.895 27.105 5 26 5 L 4 5 z M 23 8 C 24.105 8 25 8.895 25 10 C 25 11.105 24.105 12 23 12 C 21.895 12 21 11.105 21 10 C 21 8.895 21.895 8 23 8 z M 23 16 C 19.134 16 16 19.134 16 23 C 16 26.866 19.134 30 23 30 C 26.866 30 30 26.866 30 23 C 30 19.134 26.866 16 23 16 z M 23 19 C 23.552 19 24 19.447 24 20 L 24 22 L 26 22 C 26.552 22 27 22.447 27 23 C 27 23.553 26.552 24 26 24 L 24 24 L 24 26 C 24 26.553 23.552 27 23 27 C 22.448 27 22 26.553 22 26 L 22 24 L 20 24 C 19.448 24 19 23.553 19 23 C 19 22.447 19.448 22 20 22 L 22 22 L 22 20 C 22 19.447 22.448 19 23 19 z"
                                                                                ></path>
                                                                            </svg>
                                                                            <span
                                                                                >Đính kèm hình ảnh (chọn tối đa 3
                                                                                hình)</span
                                                                            >
                                                                        </label>
                                                                        <input
                                                                            style="
                                                                                color: #fff;
                                                                                opacity: 0;
                                                                                cursor: pointer;
                                                                            "
                                                                            type="file"
                                                                            id="inputFileAttach"
                                                                            name="file"
                                                                            className="with-preview"
                                                                        />
                                                                    </div>
                                                                    <div className="bpr-form-actions">
                                                                        <button
                                                                            type="button"
                                                                            onclick="BPR.submitForm(); return false;"
                                                                            className="bpr-button-submit"
                                                                        >
                                                                            <i
                                                                                className="fa fa-spinner fa-pulse"
                                                                                aria-hidden="true"
                                                                            ></i
                                                                            ><span>Gửi đánh giá</span>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <span
                                                                    className="bpr-form-message-error bpr-form-message-error-body"
                                                                ></span>
                                                                <span
                                                                    className="bpr-form-message-error bpr-form-message-error-file"
                                                                ></span>
                                                            </div>
                                                            <div className="bpr-form-review-error">
                                                                <p className="error"></p>
                                                            </div>
                                                            <div className="bpr-form-actions">
                                                                <button
                                                                    type="button"
                                                                    onclick="BPR.submitForm(); return false;"
                                                                    className="bpr-button-submit"
                                                                >
                                                                    <i
                                                                        className="fa fa-spinner fa-pulse"
                                                                        aria-hidden="true"
                                                                    ></i
                                                                    ><span>Gửi đánh giá</span>
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="bpr-review-thanks" className="bpr-success-popup jquerymodal">
                                        <div className="jquerymodal-content">
                                            <div className="jquerymodal-body">
                                                <a href="javascript:;" rel="jquerymodal:close" className="close-modal">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24px"
                                                        height="24px"
                                                    >
                                                        <path
                                                            d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
                                                        ></path>
                                                    </svg>
                                                </a>
                                                <div className="icon-checked">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <g>
                                                            <path
                                                                d="M12,0A12,12,0,1,1,0,12,12,12,0,0,1,12,0Zm0,1A11,11,0,1,1,1,12,11,11,0,0,1,12,1Zm7,7.46L10,18,5,12.16l.76-.65,4.27,5,8.24-8.75Z"
                                                                fill-rule="evenodd"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <b>Cảm ơn bạn đã đánh giá sản phẩm!</b>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="bpr-reply-thanks" className="bpr-success-popup jquerymodal">
                                        <div className="jquerymodal-content">
                                            <div className="jquerymodal-body">
                                                <a href="javascript:;" rel="jquerymodal:close" className="close-modal">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24px"
                                                        height="24px"
                                                    >
                                                        <path
                                                            d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
                                                        ></path>
                                                    </svg>
                                                </a>
                                                <div className="icon-checked">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <g>
                                                            <path
                                                                d="M12,0A12,12,0,1,1,0,12,12,12,0,0,1,12,0Zm0,1A11,11,0,1,1,1,12,11,11,0,0,1,12,1Zm7,7.46L10,18,5,12.16l.76-.65,4.27,5,8.24-8.75Z"
                                                                fill-rule="evenodd"
                                                            ></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <b>Cảm ơn bạn đã trả lời đánh giá!</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="productRelate">
                        <div className="block-title">
                            <h2>
                                <a href="/san-pham-noi-bat" title="Đồ uống cùng loại">Đồ uống cùng loại</a>
                            </h2>
                        </div>

                        <div className="product-relate-swiper swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="item_product_main">
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
                                                            src={'../asets/img/sp7.png'}
                                                            alt="Vanila Latte"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="info-action-start">
                                                    <div className="product-info">
                                                        <h3 className="product-name">
                                                            <a href="/vanila-latte" title="Vanila Latte"
                                                                >Vanila Latte</a
                                                            >
                                                        </h3>
                                                        <div className="start">
                                                            <div
                                                                className="sapo-product-reviews-badge"
                                                                data-id="25191081"
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <div className="product-action-start">
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
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="item_product_main">
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
                                                        <img
                                                            className="lazyload"
                                                            src={'../asets/img/sp6.png'}
                                                            alt="Latte"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="info-action-start">
                                                    <div className="product-info">
                                                        <h3 className="product-name">
                                                            <a href="/latte" title="Latte">Latte</a>
                                                        </h3>
                                                        <div className="start">
                                                            <div
                                                                className="sapo-product-reviews-badge"
                                                                data-id="25191077"
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <div className="product-action-start">
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
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="item_product_main">
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
                                                            src={'../asets/img/sp5.png'}
                                                        />
                                                    </a>
                                                </div>
                                                <div className="info-action-start">
                                                    <div className="product-info">
                                                        <h3 className="product-name">
                                                            <a href="/americano" title="Americano">Americano</a>
                                                        </h3>
                                                        <div className="start">
                                                            <div
                                                                className="sapo-product-reviews-badge"
                                                                data-id="25191075"
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <div className="product-action-start">
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
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="item_product_main">
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
                                                            src={'../asets/img/sp4.png'}
                                                            alt="ICED Espresso"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="info-action-start">
                                                    <div className="product-info">
                                                        <h3 className="product-name">
                                                            <a href="/iced-espresso" title="ICED Espresso"
                                                                >ICED Espresso</a
                                                            >
                                                        </h3>
                                                        <div className="start">
                                                            <div
                                                                className="sapo-product-reviews-badge"
                                                                data-id="25191072"
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <div className="product-action-start">
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
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="item_product_main">
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
                                                            src={'../asets/img/sp3.png'}
                                                            alt="Caramel Latte"
                                                        />
                                                    </a>
                                                </div>
                                                <div className="info-action-start">
                                                    <div className="product-info">
                                                        <h3 className="product-name">
                                                            <a href="/caramel-latte" title="Caramel Latte"
                                                                >Caramel Latte</a
                                                            >
                                                        </h3>
                                                        <div className="start">
                                                            <div
                                                                className="sapo-product-reviews-badge"
                                                                data-id="25191070"
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <div className="product-action-start">
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
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                    </div>
                </div>
            </section>   
    </>
  )
}

export default MochaRecipe