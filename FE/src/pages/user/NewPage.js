import React from 'react'

const NewPage = () => {
  return (
    <>
    <section className="bread-crumb">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="main-title-breadcrumb text-center">Tin tức</div>
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
                                    <strong><span>Tin tức</span></strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="blog_wrapper layout-blog" itemscope itemtype="https://schema.org/Blog">
                <meta itemprop="name" content="Tin tức" />
                <meta itemprop="description" content="" />
                <div className="container">
                    <div className="row">
                        <div className="right-content col-12">
                            <div className="list-blogs">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-12 padding">
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
                                                            >Sở thích uống cà phê tiết lộ bí mật động trời về tính cách
                                                            của bạn</a
                                                        >
                                                    </h3>

                                                    <p className="justify">
                                                        Hãy nói cho tôi loại cà phê mà bạn hay uống, tôi sẽ nói cho bạn
                                                        biết bạn là người như thế nào”. Chỉ với...
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

                                    <div className="col-lg-4 col-md-4 col-12 padding">
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
                                                        Hôm nay Classic coffee sẽ chia sẻ cho bạn 4 cách thiết kế không
                                                        gian nội thất quán &nbsp;cà phê hoàn chỉnh, chủ đầu tư...
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

                                    <div className="col-lg-4 col-md-4 col-12 padding">
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
                                                            >Cà phê hạt pha máy - Cách lựa chọn cà phê nguyên chất
                                                            ngon</a
                                                        >
                                                    </h3>

                                                    <p className="justify">
                                                        Việc vào quán cà phê vào buổi sáng hay hẹn hò ki phố đã lên đèn
                                                        là một lựa chọn được đông đảo người dân...
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

                                    <div className="col-lg-4 col-md-4 col-12 padding">
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
                                                        Mỗi sớm bạn có uống cà phê trước khi đi làm? Bạn có thường tụ
                                                        tập bạn bè ở quán cà phê và lắng nghe...
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

                                    <div className="col-lg-4 col-md-4 col-12 padding">
                                        <div className="item-blog">
                                            <div className="block-thumb">
                                                <a
                                                    className="thumb"
                                                    href="/bao-gia-may-pha-ca-phe-rang-xay-moi-nhat-hien-dai-tiet-kiem"
                                                    title="Báo giá máy pha cà phê rang xay mới nhất, hiện đại, tiết kiệm"
                                                >
                                                    <img
                                                        className="lazyload"
                                                        src={'../assets/img/t2.jpg'}
                                                        alt="Báo giá máy pha cà phê rang xay mới nhất, hiện đại, tiết kiệm"
                                                    />
                                                </a>
                                            </div>
                                            <div className="block-content">
                                                <div className="inner">
                                                    <h3>
                                                        <a
                                                            href="/bao-gia-may-pha-ca-phe-rang-xay-moi-nhat-hien-dai-tiet-kiem"
                                                            title="Báo giá máy pha cà phê rang xay mới nhất, hiện đại, tiết kiệm"
                                                            >Báo giá máy pha cà phê rang xay mới nhất, hiện đại, tiết
                                                            kiệm</a
                                                        >
                                                    </h3>

                                                    <p className="justify">
                                                        Máy pha cà phê hiện nay là một sản phẩm khá phổ biến tại công
                                                        ty, gia đình, đặc biệt là các cửa hàng kinh...
                                                    </p>

                                                    <a
                                                        className="viewmore"
                                                        href="/bao-gia-may-pha-ca-phe-rang-xay-moi-nhat-hien-dai-tiet-kiem"
                                                        title="Xem tất cả"
                                                        >Xem tất cả</a
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-12 padding">
                                        <div className="item-blog">
                                            <div className="block-thumb">
                                                <a
                                                    className="thumb"
                                                    href="/ca-phe-pha-phin-chat-luong-cao-gia-tri-cua-giay-phut-doi-cho"
                                                    title="CÀ PHÊ PHA PHIN CHẤT LƯỢNG CAO - GIÁ TRỊ CỦA GIÂY PHÚT ĐỢI CHỜ"
                                                >
                                                    <img
                                                        className="lazyload"
                                                        src={'../assets/img/t1.jpg'}
                                                        alt="CÀ PHÊ PHA PHIN CHẤT LƯỢNG CAO - GIÁ TRỊ CỦA GIÂY PHÚT ĐỢI CHỜ"
                                                    />
                                                </a>
                                            </div>
                                            <div className="block-content">
                                                <div className="inner">
                                                    <h3>
                                                        <a
                                                            href="/ca-phe-pha-phin-chat-luong-cao-gia-tri-cua-giay-phut-doi-cho"
                                                            title="CÀ PHÊ PHA PHIN CHẤT LƯỢNG CAO - GIÁ TRỊ CỦA GIÂY PHÚT ĐỢI CHỜ"
                                                            >CÀ PHÊ PHA PHIN CHẤT LƯỢNG CAO - GIÁ TRỊ CỦA GIÂY PHÚT ĐỢI
                                                            CHỜ</a
                                                        >
                                                    </h3>

                                                    <p className="justify">
                                                        Hiện nay, có nhiều công thức, cách phá chế khác nhau để tạo nên
                                                        một ly cà phê ngon. Với sự du nhập của sự...
                                                    </p>

                                                    <a
                                                        className="viewmore"
                                                        href="/ca-phe-pha-phin-chat-luong-cao-gia-tri-cua-giay-phut-doi-cho"
                                                        title="Xem tất cả"
                                                        >Xem tất cả</a
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ab-module-article-mostview"></div>
    </>
  )
}

export default NewPage