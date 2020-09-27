$(document).ready(function() {
    new Vue({
        el: '#app1',
        data: {
            hello: 'xin  chao cac ban???',
            danhsachsanpham: [{
                    anhsp: '../assets/images/anh1.png',
                    tensp: 'iPhone 11 Pro 128GB',
                    giacu: '39.999.999đ',
                    gia: '37.999.999đ',
                    duonglink: 'sanpham1.html',
                }, {
                    anhsp: '../assets/images/anh2.jpg',
                    tensp: 'Samsung Galaxy Note 20 Ultra',
                    giacu: '29.999.999đ',
                    gia: '27.999.999đ',
                    duonglink: 'sanpham2.html',
                }, {
                    anhsp: '../assets/images/anh3.jpg',
                    tensp: 'iPhone 11 Pro 64GB',
                    giacu: '27.999.999đ',
                    gia: '25.999.999đ',
                    duonglink: 'sanpham3.html',
                }, {
                    anhsp: '../assets/images/anh4.jpg',
                    tensp: 'Điện thoại Vsmart Aris',
                    giacu: '7.999.999đ',
                    gia: '6.999.99đ',
                    duonglink: 'sanpham1.html',
                }, {
                    anhsp: '../assets/images/anh2.jpg',
                    tensp: 'Samsung Galaxy Note 20 Ultra',
                    giacu: '29.999.999đ',
                    gia: '25.999.999đ',
                    duonglink: 'sanpham2.html',
                }, {
                    anhsp: '../assets/images/anh3.jpg',
                    tensp: 'iPhone 11 Pro 64GB',
                    giacu: '27.999.999đ',
                    gia: '24.999.999đ',
                    duonglink: 'sanpham3.html',
                },

                {
                    anhsp: '../assets/images/anh4.jpg',
                    tensp: 'Điện thoại Vsmart Aris',
                    giacu: '7.999.999đ',
                    gia: '6.999.99đ',
                    duonglink: 'sanpham1.html',
                }, {
                    anhsp: '../assets/images/anh2.jpg',
                    tensp: 'Samsung Galaxy Note 20 Ultra',
                    giacu: '29.999.999đ',
                    gia: '25.999.999đ',
                    duonglink: 'sanpham2.html',
                }, {
                    anhsp: '../assets/images/anh3.jpg',
                    tensp: 'iPhone 11 Pro 64GB',
                    giacu: '27.999.999đ',
                    gia: '24.999.999đ',
                    duonglink: 'sanpham3.html',
                }, {
                    anhsp: '../assets/images/anh4.jpg',
                    tensp: 'Điện thoại Vsmart Aris',
                    giacu: '7.999.999đ',
                    gia: '6.999.99đ',
                    duonglink: 'sanpham1.html',
                }, {
                    anhsp: '../assets/images/anh2.jpg',
                    tensp: 'Samsung Galaxy Note 20 Ultra',
                    giacu: '29.999.999đ',
                    gia: '25.999.999đ',
                    duonglink: 'sanpham2.html',
                }, {
                    anhsp: '../assets/images/anh3.jpg',
                    tensp: 'iPhone 11 Pro 64GB',
                    giacu: '27.999.999đ',
                    gia: '24.999.999đ',
                    duonglink: 'sanpham3.html',
                },

            ]
        },
        methods: {
            Toggle: function() {
                $('.navbar-nav').toggleClass('showed');
            }
        }
    })
})