import React from 'react'

const Latte = () => {
  return (
    <section className="product layout-product" itemscope itemtype="https://schema.org/Product">	

        <div className="details-product">
            <div className="container">
                <div className="row">
                    <div className="product-detail-left product-images col-12 col-md-6 col-lg-6">
                        <div className="product-image-block relative">
                            
                            <div className="swiper-container gallery-top">
                                <div className="swiper-wrapper" id="lightgallery">
                                    
                                    <a className="swiper-slide" data-hash="0" href="//bizweb.dktcdn.net/thumb/1024x1024/100/451/095/products/sp6.png?v=1648442393260" title="Click để xem">
                                        <img height="540" width="540" src={'../assets/img/sp6.png'} className="img-responsive mx-auto d-block swiper-lazy" />
                                    </a>
                                    
                                    <a className="swiper-slide" data-hash="1" href="//bizweb.dktcdn.net/thumb/1024x1024/100/451/095/products/sp6-2.jpg?v=1648442393703" title="Click để xem">
                                        <img height="540" width="540" src={'../assets/img/sp6-2.jpg'} className="img-responsive mx-auto d-block swiper-lazy" />
                                    </a>
                                    
                                </div>
                            </div>
                            <div className="swiper-container gallery-thumbs">
                                <div className="swiper-wrapper">
                                    
                                    <div className="swiper-slide" data-hash="0">
                                        <div className="p-100">
                                            <img height="80" width="80" src={'../assets/img/sp6.png'} className="swiper-lazy" />
                                        </div>	
                                    </div>
                                    
                                    <div className="swiper-slide" data-hash="1">
                                        <div className="p-100">
                                            <img height="80" width="80" src={'../assets/img/sp6-2.jpg'} alt="Latte"  className="swiper-lazy" />
                                        </div>	
                                    </div>
                                    
                                </div>
                                <div className="swiper-button-next">
                                </div>
                                <div className="swiper-button-prev">
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="details-pro col-12 col-md-6 col-lg-6">
                        <h1 className="title-product">Latte</h1>
                        <div className="reviews_details_product ">
                            <div className="sapo-product-reviews-badge sapo-product-reviews-badge-detail" data-id="25191077"></div>
                        </div>
                        <form encType="multipart/form-data" data-cart-form id="add-to-cart-form" action="/cart/add" method="post" className="form-inline">
                            <div className="product-summary">
                                <div className="rte">
                                    
                                    Mô tả đang cập nhật
                                    
                                </div>
                            </div>
                            <div className="price-box clearfix">
                                <span className="label-price ">Giá: </span>
                                
                                <div className="special-price">
                                    <span className="price product-price">49.000₫</span>
                            
                                </div>
                                
                            </div>
                            


                            <div className="form-product">
                                
                                <div className="box-variant clearfix  d-none ">
                                    
                                    <input type="hidden" id="one_variant" name="variantId" value="62349676" />
                                    
                                </div>

                                <div className="block-note-product ">
                                    <div className="product-note show">
                                        <div className="title">Ghi chú</div>
                                        <div className="note-box">
                                            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill="none" stroke="#999" d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z"></path> <path fill="none" stroke="#999" d="M15.98,7.268 L13.851,5.148"></path></svg>
                                            <input type="text" name="properties[GhiChu]" placeholder="Thêm ghi chú món này" autocomplete="off" />
                                        </div>
                                    </div>
                                </div>

                                <div className="clearfix form-group ">
                                    <div className="flex-quantity">
                                        <div className="custom custom-btn-number show">
                                            <label className="sl section">Số lượng:</label>
                                            <div className="input_number_product form-control">									
                                                <button className="btn_num num_1 button button_qty" >-</button>
                                                <input type="text" id="qtym" name="quantity" value="1" maxlength="3" className="form-control prd_quantity" />
                                                <button className="btn_num num_2 button button_qty" >+</button>
                                            </div>
                                        </div>
                                        <div className="btn-mua button_actions clearfix">
                                                
                                            <button type="submit" className="btn btn_base normal_button btn_add_cart add_to_cart btn-cart">
                                                <span className="txt-main text_1">Thêm vào giỏ hàng</span>
                                            </button>
                                            <button type="button" className="btn btn-buy-now">Đặt hàng ngay</button>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="coupons">
                                
                                <div className="item">
                                    Nhập "<b>YEUMONSTER</b>"<br/>
    Gảm <b>10k</b>, đơn tối thiểu <b>80k</b>
                                </div>
                                
                                
                                <div className="item">
                                    Nhập "<b>FREESHIP</b>"<br/>
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
                                <p>Ly cà phê sữa ngọt ngào đến khó quên!&nbsp;Với một chút nhẹ nhàng hơn&nbsp;so với&nbsp;Cappuccino, Latte của chúng tôi bắt đầu với&nbsp;cà phê espresso, sau đó thêm sữa tươi và bọt sữa một cách đầy&nbsp;nghệ thuật. Bạn có thể tùy thích lựa chọn uống nóng hoặc dùng chung với đá.</p>
                            </div>
                            
                        </div>
                    </div>
                    
                    
                    
                    <div id="tab-3" className="tab-content content_extab">
                        <div className="rte">
                            <div id="sapo-product-reviews" className="sapo-product-reviews" data-id="25191077">
                <div id="sapo-product-reviews-noitem" style="display: none;">
                    <div className="content">
                        <p data-content-text="language.suggest_noitem"></p>
                        <div className="product-reviews-summary-actions">
                            <button type="button" className="btn-new-review" onclick="BPR.newReview(this); return false;" data-content-str="language.newreview"></button>
                        </div>
                        <div id="noitem-bpr-form_" data-id="formId" className="noitem-bpr-form" style="display:none;"><div className="sapo-product-reviews-form"></div></div>
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
                            <div className=" item_product_main">
                                
        <form action="/cart/add" method="post" className="variants product-action" data-cart-form data-id="product-actions-25191086" encType="multipart/form-data">
        <div className="product-thumb-info">
            <div className="product-thumbnail">
                <a className="image_thumb scale_hover" href="/mocha-recipe" title="Mocha Recipe">
                    <img className="lazyload" src={'../assets/img/sp8.png'} alt="Mocha Recipe"/>
                </a>
            </div>
            <div className="info-action-start">
                <div className="product-info">
                    <h3 className="product-name"><a href="/mocha-recipe" title="Mocha Recipe">Mocha Recipe</a></h3>
                    <div className="start">
                        <div className="sapo-product-reviews-badge" data-id="25191086"></div>
                    </div>
                </div>
                <div className="product-action-start">
                    <div className="price-box">
        49.000₫				</div>
                    <div className="action">
                        
                        
                        <a title="Đặt món" href="/mocha-recipe" data-handle="mocha-recipe" className="quick-view btn-views">
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
                            <div className=" item_product_main">
                                
        <form action="/cart/add" method="post" className="variants product-action" data-cart-form data-id="product-actions-25191081" encType="multipart/form-data">
        <div className="product-thumb-info">
            <div className="product-thumbnail">
                <a className="image_thumb scale_hover" href="/vanila-latte" title="Vanila Latte">
                    <img className="lazyload" src={'../assets/img/sp7.png'} alt="Vanila Latte"/>
                </a>
            </div>
            <div className="info-action-start">
                <div className="product-info">
                    <h3 className="product-name"><a href="/vanila-latte" title="Vanila Latte">Vanila Latte</a></h3>
                    <div className="start">
                        <div className="sapo-product-reviews-badge" data-id="25191081"></div>
                    </div>
                </div>
                <div className="product-action-start">
                    <div className="price-box">
                        Liên hệ
                    </div>
                    <div className="action">
                        
                        <a title="Đặt món" href="/vanila-latte" data-handle="vanila-latte" className="quick-view btn-views">
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
                            <div className=" item_product_main">
                                
        <form action="/cart/add" method="post" className="variants product-action" data-cart-form data-id="product-actions-25191075" encType="multipart/form-data">
        <div className="product-thumb-info">
            <div className="product-thumbnail">
                <a className="image_thumb scale_hover" href="/americano" title="Americano">
                    <img className="lazyload" src={'../assets/img/sp5.png'} alt="Americano"/>
                </a>
            </div>
            <div className="info-action-start">
                <div className="product-info">
                    <h3 className="product-name"><a href="/americano" title="Americano">Americano</a></h3>
                    <div className="start">
                        <div className="sapo-product-reviews-badge" data-id="25191075"></div>
                    </div>
                </div>
                <div className="product-action-start">
                    <div className="price-box">
        46.000₫				</div>
                    <div className="action">
                        
                        
                        <a title="Đặt món" href="/americano" data-handle="americano" className="quick-view btn-views">
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
                            <div className=" item_product_main">
                                
        <form action="/cart/add" method="post" className="variants product-action" data-cart-form data-id="product-actions-25191072" encType="multipart/form-data">
        <div className="product-thumb-info">
            <div className="product-thumbnail">
                <a className="image_thumb scale_hover" href="/iced-espresso" title="ICED Espresso">
                    <img className="lazyload" src={'../assets/img/sp4.png'} alt="ICED Espresso"/>
                </a>
            </div>
            <div className="info-action-start">
                <div className="product-info">
                    <h3 className="product-name"><a href="/iced-espresso" title="ICED Espresso">ICED Espresso</a></h3>
                    <div className="start">
                        <div className="sapo-product-reviews-badge" data-id="25191072"></div>
                    </div>
                </div>
                <div className="product-action-start">
                    <div className="price-box">
                        Liên hệ
                    </div>
                    <div className="action">
                        
                        <a title="Đặt món" href="/iced-espresso" data-handle="iced-espresso" className="quick-view btn-views">
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
                            <div className=" item_product_main">
                                
        <form action="/cart/add" method="post" className="variants product-action" data-cart-form data-id="product-actions-25191070" encType="multipart/form-data">
        <div className="product-thumb-info">
            <div className="product-thumbnail">
                <a className="image_thumb scale_hover" href="/caramel-latte" title="Caramel Latte">
                    <img className="lazyload" src={'../assets/img/sp3.png'} alt="Caramel Latte"/>
                </a>
            </div>
            <div className="info-action-start">
                <div className="product-info">
                    <h3 className="product-name"><a href="/caramel-latte" title="Caramel Latte">Caramel Latte</a></h3>
                    <div className="start">
                        <div className="sapo-product-reviews-badge" data-id="25191070"></div>
                    </div>
                </div>
                <div className="product-action-start">
                    <div className="price-box">
        54.000₫				</div>
                    <div className="action">
                        
                        
                        <a title="Đặt món" href="/caramel-latte" data-handle="caramel-latte" className="quick-view btn-views">
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
  )
}

export default Latte