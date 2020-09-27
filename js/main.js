$(document).ready(function() {
    new Vue({
        el: '#app1',
        data: {
            hello: 'xin  chao cac ban???',
            danhsachsanpham: [{
                    anhsp: 'assets/images/anh1.png',
                    tensp: 'iPhone 11 Pro 128GB',
                    giacu: '1.699$',
                    gia: '1.599$',
                    duonglink: 'sanpham1.html',
                }, {
                    anhsp: 'assets/images/anh2.jpg',
                    tensp: 'Samsung Galaxy Note 20 Ultra',
                    giacu: '1.799$',
                    gia: '1.599$',
                    duonglink: 'sanpham2.html',
                }, {
                    anhsp: 'assets/images/anh3.jpg',
                    tensp: 'iPhone 11 Pro 64GB',
                    giacu: '2.199$',
                    gia: '1.999$',
                    duonglink: 'sanpham3.html',
                }, {
                    anhsp: 'assets/images/anh1.png',
                    tensp: 'iPhone 11 Pro 128GB',
                    giacu: '1.699$',
                    gia: '1.599$',
                    duonglink: 'sanpham1.html',
                }, {
                    anhsp: 'assets/images/anh2.jpg',
                    tensp: 'Samsung Galaxy Note 20 Ultra',
                    giacu: '1.799$',
                    gia: '1.599$',
                    duonglink: 'sanpham2.html',
                }, {
                    anhsp: 'assets/images/anh3.jpg',
                    tensp: 'iPhone 11 Pro 64GB',
                    giacu: '2.199$',
                    gia: '1.999$',
                    duonglink: 'sanpham3.html',
                }, {
                    anhsp: 'assets/images/anh1.png',
                    tensp: 'iPhone 11 Pro 128GB',
                    giacu: '1.699$',
                    gia: '1.599$',
                    duonglink: 'sanpham1.html',
                }, {
                    anhsp: 'assets/images/anh2.jpg',
                    tensp: 'Samsung Galaxy Note 20 Ultra',
                    giacu: '1.799$',
                    gia: '1.599$',
                    duonglink: 'sanpham2.html',
                }, {
                    anhsp: 'assets/images/anh3.jpg',
                    tensp: 'iPhone 11 Pro 64GB',
                    giacu: '2.199$',
                    gia: '1.999$',
                    duonglink: 'sanpham3.html',
                },
                {
                    anhsp: 'assets/images/anh2.jpg',
                    tensp: 'Samsung Galaxy Note 20 Ultra',
                    giacu: '1.799$',
                    gia: '1.599$',
                    duonglink: 'sanpham2.html',
                }, {
                    anhsp: 'assets/images/anh3.jpg',
                    tensp: 'iPhone 11 Pro 64GB',
                    giacu: '2.199$',
                    gia: '1.999$',
                    duonglink: 'sanpham3.html',
                },
                {
                    anhsp: 'assets/images/anh3.jpg',
                    tensp: 'iPhone 11 Pro 64GB',
                    giacu: '2.199$',
                    gia: '1.999$',
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