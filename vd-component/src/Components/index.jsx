import React from 'react';

function Header(props) {
    return (
        <div className='header'>
            <h1 className='header__title'>Trang Web Bán Hàng</h1>
            <div className='navbar'>
                <ul class="navbar__list">
                    <li class="navbar__item">
                        <a href="#!" class="navbar__link">Trang Chủ</a>
                    </li>
                    <li class="navbar__item">
                        <a href="#!" class="navbar__link">Sản Phẩm</a>
                    </li>
                    <li class="navbar__item">
                        <a href="#!" class="navbar__link">Giới Thiệu</a>
                    </li>
                    <li class="navbar__item">
                        <a href="#!" class="navbar__link">Liên Hệ</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;