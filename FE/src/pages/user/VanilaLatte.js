import React from 'react'

const VanilaLatte = () => {
  return (
    <>
    <section className="bread-crumb">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="main-title-breadcrumb text-center">
                        Vanila Latte
                    </div>
                    
                    <ul className="breadcrumb" >					
                        <li className="home">
                            <a  href="/" ><span >Trang chủ</span></a>		
                        </li>
                        
                        <li>
                            <a className="changeurl"  href="/san-pham-noi-bat"><span >Sản phẩm nổi bật</span></a>
                        </li>
                        <li>
                            <strong><span>Vanila Latte</span></strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>  
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
                                    title="Click để xem"
                                >
                                    <img
                                        height="540"
                                        width="540"
                                        src={'../assets/img/sp7.png'}
                                        className="img-responsive mx-auto d-block swiper-lazy"
                                    />
                                </a>

                                <a
                                    className="swiper-slide"
                                    data-hash="1"
                                    title="Click để xem"
                                >
                                    <img
                                        height="540"
                                        width="540"
                                        src={'../assets/img/sp7-2.jpg'}
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
                                            src={'../assets/img/sp7.png'}

                                            alt="Vanila Latte"
                            
                                            className="swiper-lazy"
                                        />
                                    </div>
                                </div>

                                <div className="swiper-slide" data-hash="1">
                                    <div className="p-100">
                                        <img
                                            height="80"
                                            width="80"
                                            src={'../assets/img/sp7-2.jpg'}
                                            alt="Vanila Latte"
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
                    <h1 className="title-product">Vanila Latte</h1>
                    <div className="reviews_details_product">
                        <div
                            className="sapo-product-reviews-badge sapo-product-reviews-badge-detail"
                            data-id="25191081"
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
                            <span className="label-price d-none">Giá: </span>

                            <span className="special-price">
                                <span className="price product-price">0₫</span>
                                <meta itemprop="price" content="0" />
                                <meta itemprop="priceCurrency" content="VND" />
                            </span>
                
                            <span
                                className="old-price"
                                itemprop="priceSpecification"
                                itemscope=""
                                itemtype="http://schema.org/priceSpecification"
                            >
                                <del className="price product-price-old"> </del>
                                <meta itemprop="price" content="0" />
                                <meta itemprop="priceCurrency" content="VND" />
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
                                                src={'../assets/img/soldout.png'}
                                                alt="m"
                                            />
                                        </label>
                                        M
                                    </div>

                                    <script>
                                        jQuery('.swatch[data-option-index="0"] .m')
                                            .removeClass('soldout')
                                            .addClass('available')
                                            .find(':radio')
                                            .removeAttr('disabled');
                                    </script>

                                    <div data-value="S" className="swatch-element s available">
                                        <input id="swatch-0-s" type="radio" name="option-0" value="S" />

                                        <label for="swatch-0-s">
                                            <img
                                                className="crossed-out"
                                                src={'../assets/img/soldout.png'}

                                                alt="s"
                                            />
                                        </label>
                                        S
                                    </div>

                                    <script>
                                        jQuery('.swatch[data-option-index="0"] .s')
                                            .removeClass('soldout')
                                            .addClass('available')
                                            .find(':radio')
                                            .removeAttr('disabled');
                                    </script>

                                    <div data-value="L" className="swatch-element l available">
                                        <input id="swatch-0-l" type="radio" name="option-0" value="L" />

                                        <label for="swatch-0-l">
                                            <img
                                                className="crossed-out"
                                                src={'../assets/img/soldout.png'}
                                                alt="l"
                                            />
                                        </label>
                                        L
                                    </div>

                                    <script>
                                        jQuery('.swatch[data-option-index="0"] .l')
                                            .removeClass('soldout')
                                            .addClass('available')
                                            .find(':radio')
                                            .removeAttr('disabled');
                                    </script>
                                </div>
                            </div>

                            <div className="box-variant clearfix d-none">
                                <select
                                    id="product-selectors"
                                    className="form-control form-control-lg"
                                    name="variantId"
                                    style="display: none"
                                >
                                    <option selected="selected" value="62349690">M - 0₫</option>

                                    <option value="62544757">S - 45.000₫</option>

                                    <option value="62544758">L - 65.000₫</option>
                                </select>
                            </div>

                            <div className="block-note-product d-none">
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

                            <div className="clearfix form-group d-none">
                                <div className="flex-quantity">
                                    <div className="custom custom-btn-number show">
                                        <label className="sl section">Số lượng:</label>
                                        <div className="input_number_product form-control">
                                            <button className="btn_num num_1 button button_qty">-</button>
                                            <input type="text" id="qtym" name="quantity" value="1"
                                            maxlength="3" className="form-control prd_quantity" ></input>
                                            <button className="btn_num num_2 button button_qty ">+</button>
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
                                Ly cà phê sữa đậm đà thời thượng! Một chút đậm đà hơn so với Latte,
                                Cappuccino của chúng tôi bắt đầu với cà phê espresso, sau đó thêm một lượng
                                tương đương giữa sữa tươi và bọt sữa cho thật hấp dẫn. Bạn có thể tùy thích
                                lựa chọn uống nóng hoặc dùng chung với đá.
                            </p>
                            <p>
                                Vanilla latte là gì? Đây là câu hỏi khiến khá nhiều người thắc mắc. Tuy
                                nhiên, với những ai thường xuyên sử dụng các sản phẩm của McDonald’s hay
                                Starbucks thì không còn xa lạ gì.
                            </p>
                            <p>
                                Các từ vựng về đồ ăn thức uống trong tiếng Anh chắc chắn là một phần rất hấp
                                dẫn, giúp làm vơi đi sự nhàm chán trong các giờ học. Trong bài viết hôm nay
                                mình sẽ gửi đến các bạn bạn một số từ vựng về đồ uống. Và đặc biệt là về
                                Vanilla latte. Vậy Vanilla latte là gì? Hãy cùng mình tìm hiểu nhé!
                            </p>
                            <p>Vanilla latte là gì?</p>
                            <p>
                                Để hiểu được Vanilla latte là gì? Trước tiên mình sẽ phân tích nghĩa của
                                từng từ trong câu. Đầu tiên là từ “vanilla”, thực từ “vanilla” còn được đọc
                                ngắn gọn là vani. Mà vani thì có lẽ hầu như ai cũng biết đây chính loại bột
                                không thể thiếu trong chế biến các loại bánh, đồ uống và kem. Nó giúp những
                                đồ ăn này có mùi thơm đặc trưng và hấp dẫn người dùng. Còn từ “latte” theo
                                mình tìm hiểu được thì nó dùng để chỉ loại cafe được pha từ sữa và espresso.
                            </p>
                            <p>Vanilla latte là một loại đồ uống pha từ sữa và espresso</p>
                            <p>
                                Nói tóm lại “Vanilla latte” đơn giản là loại cafe sữa có pha thêm bột vani
                                chứ chẳng có gì bí hiểm cả. Nếu các bạn vào trang thiệu sản phẩm của
                                McDonald’s hay Starbuck thì có thể dễ dàng tìm thấy Vanilla latte trong danh
                                mục các đồ uống
                            </p>
                            <p>
                                &nbsp;Vanilla latte hay cafe latte là loại thức uống khá thơm ngon ngon và
                                giàu năng lượng. Trong mỗi ly Vanilla latte người ta thường pha theo tỷ lệ
                                1/3 sữa nóng, 1/3 cafe espresso và 1/bọt sữa. Tuy nhiên, không chỉ với những
                                nguyên liệu đơn giản như vậy mà loại đồ uống này còn được biến tấu theo
                                nhiều cách pha chế khác. Vì vậy Vanilla latte có rất nhiều hương vị phù hợp
                                với khẩu vị từ người.
                            </p>
                            <p>
                                Để tạo điểm nhấn thêm cho những ly cafe người ta thường dùng phần bọt sữa vẽ
                                thành những hình ảnh ngộ nghĩnh trên mặt. Khâu tạo hình này hầu như được
                                thực hiện đầu tay chứ không có sự hỗ trợ của máy móc. Người ta thường gọi
                                những pha Vanilla latte là Barista. Các Barista hơn nhau là khoảng tạo hình
                                đẹp và nhanh cho mỗi ly Vanilla latte. Chúng cũng giống như các tác phẩm của
                                người nghệ nhân thể hiện tài năng và công sức của họ.
                            </p>
                            <p>
                                Tên một số loại đồ uống khác trong tiếng Anh<br />
                                Sau khi đã trả lời được Vanilla latte là gì tiếp theo mình sẽ gửi đến các
                                bạn một số từ vựng về đồ uống trong tiếng Anh nên biết. Chúng đều là những
                                từ ngữ quen thuộc và được sử dụng nhiều khi giao tiếp. Vậy nên các bạn hãy
                                chú ý ghi nhớ nhé.
                            </p>
                            <p>vanilla latte la gi 2&nbsp;</p>
                            <p>Sữa lắc trong tiếng Anh là milkshake</p>
                            <p>Milkshake : sữa lắc.</p>
                            <p>Lemonade : nước chanh.</p>
                            <p>Soda : ngọt có ga.</p>
                            <p>Smoothies : sinh tố ( cấu trúc tên quả + smoothie).</p>
                            <p>Fruit juice : nước trái cây.</p>
                            <p>Wine : rượu.</p>
                            <p>White wine : rượu trắng.</p>
                            <p>Tea : trà.</p>
                            <p>Fruit tea : trà hoa quả.</p>
                            <p>Squash : nước ép.</p>
                            <p>Orange juice : nước cam.</p>
                            <p>Mineral water : nước khoáng.</p>
                            <p>Herbal tea : trà thảo mộc.</p>
                            <p>Bubble tea : trà sữa</p>
                            <p>…</p>
                            <p>
                                Hy với chủ Vanilla latte là gì và những từ vựng về đồ uống mà mình vừa giới
                                thiệu sẽ giúp các bạn có thêm những kiến thức hữu ích. Chúc các bạn sẽ có
                                khoảng thời gian thưởng thức ly cafe và học tiếng Anh vui vẻ!
                            </p>
                        </div>
                    </div>
                </div>

                <div id="tab-3" className="tab-content content_extab">
                    <div className="rte">
                        <div id="sapo-product-reviews" className="sapo-product-reviews" data-id="25191081">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="productRelate">
            <div className="block-title">
                <h2>
                    <a href="/hotpage" title="Đồ uống cùng loại">Đồ uống cùng loại</a>
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
                                    <div className="info-action-start">
                                        <div className="product-info">
                                            <h3 className="product-name">
                                                <a href="/mocha-recipe" title="Mocha Recipe"
                                                    >Mocha Recipe</a
                                                >
                                            </h3>
                                            <div className="start">
                                                <div
                                                    className="sapo-product-reviews-badge"
                                                    data-id="25191086"
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="product-action-start">
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
                                                src={'../assets/img/sp6.png'}
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
                                                src={'../assets/img/sp5.png'}
                                                alt="Americano"
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
                                                src={'../assets/img/sp4.png'}
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
                                                src={'../assets/img/sp3.png'}
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
    </>
  )
}

export default VanilaLatte