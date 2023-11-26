import React, { useState, useEffect } from 'react'
import requestApi from './../../helpers/api'
import { useLocation } from 'react-router-dom';
// import {useDispatch} from 'react-redux'


export const HotPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    // const dispath = useDispatch();
    
    const[drinkData, setDrinkData] = useState();
    const isDrinkData = !!drinkData
    // this.state = {
    //     sort:{
    //         by: '',
    //         value: null
    //     }
    // }
    // const handlSearch = (data) => {
    //     const params = {
    //         keyword: data
    //     }
    //     useEffect(keyword);
    // }
    useEffect(()=>{
        let query = `?${searchParams?.toString()}`;
        // let query = `?keyword=LATTE`;
        // requestApi( `drink`, 'GET', []).then( (response) => {
        requestApi( `drink${query}`, 'GET', []).then( (response) => {

            setDrinkData(response.data);
            
        }).catch(err => {
            console.log(err);
        })
    },[])
    console.log(searchParams?.toString())
    console.log(drinkData)

    // const sort = (sortBy, sortValue) =>{
    //     console.log(sortBy, ':', sortValue);
    // }

    const renderProduct =() =>{
        if(isDrinkData)
        {
            
            return drinkData.map((item,index) => 
                <div className="col-12 col-md-6" key={index} >
                {
                    <div className="item_product_main" >

                        <form
                            // action="/cart/add"
                           
                            className="variants product-action"
                     
                        >
                            <div className="product-thumb-info">
                                <div className="product-thumbnail">
                                    <a
                                        className="image_thumb scale_hover"
                                        title={item.name}
                                    >
                                        <img
                                            className="lazyload"
                                            src={item.img}
                                            alt={item.name}
                                        />
                                    </a>
                                </div>
                                <div className="info-action-start">
                                    <div className="product-info">
                                        <h3 className="product-name">
                                            <a href="/mocha-recipe" name = "name" title={item.name}>
                                                {item.name}
                                            </a>
                                        </h3>
                                        <div className="price-box" name = "price" >{item.price}</div>
                                    </div>
                                    <div className="product-action-start">
                                        <div className="start">
                                            <div
                                                className="sapo-product-reviews-badge"
                                                style={{color: 'ffbe00'}}
                                     
                                            >
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                                <i className="fa-regular fa-star"></i>
                                            </div>
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
                    
                }
                </div>
            )
        }
    }
    
  return (
    <div className="layout-collection">
        <section className="bread-crumb">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="main-title-breadcrumb text-center">Sản phẩm nổi bật</div>
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
                                <strong><span> Sản phẩm nổi bật</span></strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <div className="container">
            <div className="row">
                <div className="block-collection col-lg-12 col-12">
                    <h1 className="title-page d-md-block d-none">Sản phẩm nổi bật</h1>
                    <div className="category-products">
                        <div id="sort-by">
                            <label className="left">Sắp xếp: </label>

                            <select name="sortBy" id="sortBy" className="selectBox">
                                <option defaultValue value="default" onClick={() => this.sort()} >Mặc định</option>
                                <option value="alpha-asc" onClick={() => this.sort('name', 1)}>A &rarr; Z</option>
                                <option value="alpha-desc" onClick={() => this.sort('name', 1)}>Z &rarr; A</option>
                                <option value="price-asc" onClick={() => this.sort('price', 1)}>Giá tăng dần</option>
                                <option value="price-desc" onClick={() => this.sort('price', -1)}>Giá giảm dần</option>
                            </select>
                        </div>

                        <div className="products-view products-view-grid list_hover_pro">
                            <div className="row">
                                {renderProduct()}
                            </div>
                        </div>
                        <div className="pagenav"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default HotPage