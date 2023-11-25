import React from 'react'

const IntroducePage = () => {
  return (
    <>
    <section className="bread-crumb">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="main-title-breadcrumb text-center">Giới thiệu</div>
                            <ul className="breadcrumb">
                                <li className="home">
                                    <a href="/"><span>Trang chủ</span></a>
                                    <span className="mr_lr"
                                        >&nbsp;<svg
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
                                            ></path></svg
                                        >&nbsp;</span
                                    >
                                </li>

                                <li>
                                    <strong><span>Giới thiệu</span></strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page">
                <div className="container">
                    <div className="pg_page padding-top-15">
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title category-title">
                                    <h1 className="title-head"><a href="#">Giới thiệu</a></h1>
                                </div>
                                <div className="content-page rte">
                                    <p>
                                        Monster Coffee là quán cà phê với những hương vị cà phê thơm ngon đặc trưng kết
                                        hợp với không gian tuyệt đẹp, âm nhạc phong phú tạo lên phong cách sang đẹp,
                                        lịch sự, gần gũi. Phong cách riêng biệt chỉ Monster mới có.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default IntroducePage