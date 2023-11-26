import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom'
import requestApi from '../../../helpers/api'

const Header = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const navigate = useNavigate();
    const[keyword, setKeyword] = useState();
    const [expanded, setExpanded] = useState(true);
    //bat du lieu tu input
    const onChange = (event) =>{
        let target = event.target;
        setKeyword(target.value);
        
    }
    const handlSearch = (keyword) =>
    {
        searchParams.set("keyword",keyword);
        navigate({search: searchParams.toString()});
    }
    console.log(keyword)
    const onSubmit = () => {
        handlSearch(keyword);

    }
  return (
    <header className="header">
            <div className="opacity_menu"></div>
            <div className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-6 col-left delivery">
                            <div className="inner">
                                <div className="image">
                                    <img
                                        width="33"
                                        height="31"
                                        src={'../assets/img/delivery-man.png'}

                                        alt="Template Monster Coffe"
                                    />
                                </div>
                                <div className="info">
                                    Gọi ngay
                                    <a  title="19006750">19006750</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-6 col-right">
                            <div className="block-search">
                                <form action="/hot" method="get" className="header-search-form" role="search">
                                    <input
                                        type="text"
                                        name="keyword"
                                        
                                        className="search-auto form-control"
                                        placeholder="Tìm kiếm sản phẩm"
                                        onChange={onChange}
                                    />

                                    <button className="btn btn-default" type="submit" onClick={onSubmit}  aria-label="Tìm kiếm">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </form>
                            </div>
                            <div className="block-cart " >
                                <a
                                   
                                    className="header-cart"
                                    aria-label="Xem giỏ hàng"
                                    title="Giỏ hàng"
                                >
                                    <i className="fa-sharp fa-solid fa-cart-shopping" style={{width: 32, height: 28} }  />

                                    <span className="count_item_pr">0</span>
                                </a>
                            </div>
                            <div className="block-user">
                                <a href="/account" title="Tài khoản của bạn" rel="nofollow">
                                    <i className="fa-solid fa-user" style={{height: 31, width: 25}}></i>
                                </a>
                                <div className="drop-account">
                                    <a href="/account/login" title="Đăng nhập">Đăng nhập</a>
                                    <a href="/account/register" title="Đăng ký">Đăng ký</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="midder-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-6">
                            <a href="/" className="logo" title="Logo">
                                <img width="180" height="153" src={'../assets/img/logo.png'} alt="Template Monster Coffe" />
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-6 col-6">
                            <div className="header-menu">
                                <div className="col-menu" onClick={()=> setExpanded(curr => !curr)}>
                                    <div  className="menu-bar" >
                                        <i className="fa-solid fa-bars"></i>
                                    </div>
                                    <nav className={expanded ? 'header-nav' : 'header-nav current'}  >
                                        <div className="title">
                                        <a href="/" title="Logo">	
                                            <img src="//bizweb.dktcdn.net/100/451/095/themes/894906/assets/logo-sidebar.png?1676280956426" alt="Template Monster Coffe" />
                                        </a>
                                            <div className="close-menu">X</div>
                                        </div>
                                        <ul className="item_big">
                                            <li className="nav-item active">
                                                <a className="a-img" href="/" title="Trang chủ"> Trang chủ </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="a-img" href="/gioi-thieu" title="Giới thiệu"> Giới thiệu </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="a-img caret-down" href="/menu" title="Menu"> Menu </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="a-img" href="/tin-tuc" title="Tin tức"> Tin tức </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="a-img" href="/lien-he" title="Liên hệ"> Liên hệ </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
  );
}

export default Header