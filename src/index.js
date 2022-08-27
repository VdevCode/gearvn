const buttonGrid = document.querySelector('#menu')
const showGridMenu = document.querySelector('.menu__header')

buttonGrid.addEventListener('click', function () {

    buttonGrid.classList.toggle('bxs-message-alt-x')
    if(buttonGrid.classList.contains('bxs-message-alt-x')){
        showGridMenu.classList.toggle('active')
    }else{
        showGridMenu.classList.remove('active')
    }
})


//change image
const image = document.querySelector('.change__image')
const listImage = ['/images/banner/slideshow_1.webp', '/images/banner/slideshow_2.webp', '/images/banner/slideshow_3.webp', '/images/banner/slideshow_4.webp', '/images/banner/slideshow_6.webp', '/images/banner/slideshow_8.webp', '/images/banner/slideshow_11.webp']

setInterval(function () {
    var randomImage = Math.floor(Math.random() * 7)
    image.src = listImage[randomImage]
}, 2000)


//array image product

var arrayImageProduct = [
    {
        laptopName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        priceBf: 21 + '.' + 990 + '.' + 990,
        price: 17 + '.' + 990 + '.' + 990,
        imageProduct: 'https://product.hstatic.net/1000026716/product/r8ga_15109189103c4dd7b706dfd168dbed04_large.png',
        salesProduct: '-20%',
    },
    {
        laptopName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        priceBf: 21 + '.' + 990 + '.' + 990,
        price: 17 + '.' + 990 + '.' + 990,
        imageProduct: 'https://product.hstatic.net/1000026716/product/tuf_dash_f15_thumb_296d05bf570846f99908fcb63857e723_large.jpg',
        salesProduct: '-20%',
    },
    {
        laptopName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        priceBf: 21 + '.' + 990 + '.' + 990,
        price: 17 + '.' + 990 + '.' + 990,
        imageProduct: 'https://product.hstatic.net/1000026716/product/hn144w_48ecbca2786b4028934d22d149833c1d_large.png',
        salesProduct: '-20%',
    },
    {
        laptopName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        priceBf: 21 + '.' + 990 + '.' + 990,
        price: 17 + '.' + 990 + '.' + 990,
        imageProduct: '/images/Laptop/Ltop24.PNG',
        salesProduct: '-20%',
    },
    {
        laptopName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        priceBf: 21 + '.' + 990 + '.' + 990,
        price: 17 + '.' + 990 + '.' + 990,
        imageProduct: '/images/Laptop/Ltop11.PNG',
        salesProduct: '-20%',
    },
    {
        laptopName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        priceBf: 21 + '.' + 990 + '.' + 990,
        price: 17 + '.' + 990 + '.' + 990,
        imageProduct: '/images/Laptop/Ltop16.PNG',
        salesProduct: '-20%',
    },
    {
        laptopName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        priceBf: 21 + '.' + 990 + '.' + 990,
        price: 17 + '.' + 990 + '.' + 990,
        imageProduct: '/images/Laptop/Ltop17.PNG',
        salesProduct: '-20%',
    },
    {
        laptopName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        priceBf: 21 + '.' + 990 + '.' + 990,
        price: 17 + '.' + 990 + '.' + 990,
        imageProduct: '/images/Laptop/Ltop19.PNG',
        salesProduct: '-20%',
    },
    {
        laptopName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        priceBf: 21 + '.' + 990 + '.' + 990,
        price: 17 + '.' + 990 + '.' + 990,
        imageProduct: '/images/Laptop/Ltop20.PNG',
        salesProduct: '-20%',
    },
    {
        laptopName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        priceBf: 21 + '.' + 990 + '.' + 990,
        price: 17 + '.' + 990 + '.' + 990,
        imageProduct: '/images/Laptop/Ltop21.PNG',
        salesProduct: '-20%',
    },
    {
        laptopName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        priceBf: 21 + '.' + 990 + '.' + 990,
        price: 17 + '.' + 990 + '.' + 990,
        imageProduct: '/images/Laptop/Ltop22.PNG',
        salesProduct: '-20%',
    },
    {
        laptopName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        priceBf: 21 + '.' + 990 + '.' + 990,
        price: 17 + '.' + 990 + '.' + 990,
        imageProduct: '/images/Laptop/Ltop25.PNG',
        salesProduct: '-20%',
    },
    {
        laptopName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        priceBf: 21 + '.' + 990 + '.' + 990,
        price: 17 + '.' + 990 + '.' + 990,
        imageProduct: '/images/Laptop/Ltop26.PNG',
        salesProduct: '-20%',
    },
    {
        laptopName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        priceBf: 21 + '.' + 990 + '.' + 990,
        price: 17 + '.' + 990 + '.' + 990,
        imageProduct: '/images/Laptop/Ltop14.PNG',
        salesProduct: '-20%',
    },

]

function showLaptopProduct() {
    var productHot = document.getElementById('productHot')
    productHot.innerHTML = ''
    for (var i = 0; i < arrayImageProduct.length; i++) {
        laptopNameProduct = arrayImageProduct[i].laptopName
        priceProductBefore = arrayImageProduct[i].priceBf
        priceProductAfter = arrayImageProduct[i].price
        imageProductShow = arrayImageProduct[i].imageProduct
        saleProduct = arrayImageProduct[i].salesProduct
        productHot.innerHTML += `
            <div class="product__detals-hot">
            <img class="product__detals-img" src="${imageProductShow}" alt="">
            <div class="product__title">
                <h1>${laptopNameProduct}</h1>
                <h2>${priceProductBefore}</h2>
                <h3>${priceProductAfter}</h3>
                <div class="product__image-hot">
                    <img src="https://theme.hstatic.net/1000026716/1000440777/14/icon-saleoff.png" alt="">
                    <h5>${saleProduct}</h5>
                </div>
            </div>

        </div>
    `
    }
}

// showLaptopProduct()


//open Show laptop product
const BtnLaptopProduct = document.querySelector('.openShowProduct')
BtnLaptopProduct.addEventListener('click', () => {
    showLaptopProduct()
    if (showLaptopProduct()) {
        BtnLaptopProduct.style.display = 'none'
    }
})


//show product list tivi
var arrayProductImageTv = [
    {
        TiviName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        TivipriceBf: 21 + '.' + 990 + '.' + 990,
        Tiviprice: 17 + '.' + 990 + '.' + 990,
        TiviimageProduct: 'https://product.hstatic.net/1000026716/product/viewsonic_va2215-h_gearvn_032d5d53effc48a2887c2879e6bc5cff_77ab0975c840473397443fe7d0d198b8_large.jpg',
        TivisalesProduct: '-20%',
    },
    {
        TiviName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        TivipriceBf: 21 + '.' + 990 + '.' + 990,
        Tiviprice: 17 + '.' + 990 + '.' + 990,
        TiviimageProduct: 'https://product.hstatic.net/1000026716/product/aoc_24g2_gearvn_26fe6139df4049a3b47cbcf4f0c89aa6_87b2f267cfce432798ed0091baa1522b_large.jpg',
        TivisalesProduct: '-20%',
    },
    {
        TiviName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        TivipriceBf: 21 + '.' + 990 + '.' + 990,
        Tiviprice: 17 + '.' + 990 + '.' + 990,
        TiviimageProduct: 'https://product.hstatic.net/1000026716/product/gigabyte_g24f_gearvn_32c459bb9b7_6e61bb5ce2754618bc3a20992d463f91_2ff413a7c7474d4996d7701e92362fc5_large.jpg',
        TivisalesProduct: '-20%',
    },
    {
        TiviName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        TivipriceBf: 21 + '.' + 990 + '.' + 990,
        Tiviprice: 17 + '.' + 990 + '.' + 990,
        TiviimageProduct: 'https://product.hstatic.net/1000026716/product/ps-165hz-gsync-compatible-chuyen-game_b0fbfe425ebc40739fc163c018199f69_094e8ccd5b1a4d1cb25a13d3468602c1_large.jpg',
        TivisalesProduct: '-20%',
    },
    {
        TiviName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        TivipriceBf: 21 + '.' + 990 + '.' + 990,
        Tiviprice: 17 + '.' + 990 + '.' + 990,
        TiviimageProduct: 'https://product.hstatic.net/1000026716/product/aoc_27b1h_e95bc0f5c9644011a6f61d5c69a0c361_2eab636220cc489cb024bd8917191e97_large.jpg',
        TivisalesProduct: '-20%',
    },
    {
        TiviName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        TivipriceBf: 21 + '.' + 990 + '.' + 990,
        Tiviprice: 17 + '.' + 990 + '.' + 990,
        TiviimageProduct: 'https://product.hstatic.net/1000026716/product/gigabyte_g24f_gearvn_32c459bb9b7_6e61bb5ce2754618bc3a20992d463f91_2ff413a7c7474d4996d7701e92362fc5_large.jpg',
        TivisalesProduct: '-20%',
    },
]

function showProductImageTivi() {
    var productHotTv = document.getElementById('productSale')
    productHotTv.innerHTML = ''
    for (var i = 0; i < arrayProductImageTv.length; i++) {
        TiviNameProduct = arrayProductImageTv[i].TiviName
        TivipriceBfBefore = arrayProductImageTv[i].TivipriceBf
        TivipriceProductAfter = arrayProductImageTv[i].Tiviprice
        TiviimageProductShow = arrayProductImageTv[i].TiviimageProduct
        TivisalesProduct = arrayProductImageTv[i].TivisalesProduct
        productHotTv.innerHTML += `
            <div class="product__detals-hot">
            <img class="product__detals-img" src="${TiviimageProductShow}" alt="">
            <div class="product__title">
                <h1>${TiviNameProduct}</h1>
                <h2>${TivipriceBfBefore}</h2>
                <h3>${TivipriceProductAfter}</h3>
                <div class="product__image-hot">
                    <img src="https://theme.hstatic.net/1000026716/1000440777/14/icon-saleoff.png" alt="">
                    <h5>${TivisalesProduct}</h5>
                </div>
            </div>

        </div>
    `
    }
}



const BtnProductListTv = document.querySelector('.showProductListTivi')
BtnProductListTv.addEventListener('click', () => {
    showProductImageTivi()
})



//show product list keyboard
var arrayProductImageKeyBoard = [
    {
        KeyBoardName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        KeyBoardpriceBf: 21 + '.' + 990 + '.' + 990,
        KeyBoardprice: 17 + '.' + 990 + '.' + 990,
        KeyBoardimageProduct: 'https://product.hstatic.net/1000026716/product/artboard_1_d689810a6a6e405abbb291e1e0ebb9ba_large.png',
        KeyBoardsalesProduct: '-20%',
    },
    {
        KeyBoardName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        KeyBoardpriceBf: 21 + '.' + 990 + '.' + 990,
        KeyBoardprice: 17 + '.' + 990 + '.' + 990,
        KeyBoardimageProduct: 'https://product.hstatic.net/1000026716/product/artboard_1_fcd1167e20ee4413bfaf31630ca4087e_large.png',
        KeyBoardsalesProduct: '-20%',
    },
    {
        KeyBoardName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        KeyBoardpriceBf: 21 + '.' + 990 + '.' + 990,
        KeyBoardprice: 17 + '.' + 990 + '.' + 990,
        KeyBoardimageProduct: 'https://product.hstatic.net/1000026716/product/ban_phim_vortex_8700_multix_summer_f789bca044334321af00a3e256fea9d1_large.png',
        KeyBoardsalesProduct: '-20%',
    },
    {
        KeyBoardName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        KeyBoardpriceBf: 21 + '.' + 990 + '.' + 990,
        KeyBoardprice: 17 + '.' + 990 + '.' + 990,
        KeyBoardimageProduct: 'https://product.hstatic.net/1000026716/product/ban_phim_mistel_x8_nimitz_391ca37b0a2d46bfb7b6313f2b4e1f75_large.png',
        KeyBoardsalesProduct: '-20%',
    },
    {
        KeyBoardName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        KeyBoardpriceBf: 21 + '.' + 990 + '.' + 990,
        KeyBoardprice: 17 + '.' + 990 + '.' + 990,
        KeyBoardimageProduct: 'https://product.hstatic.net/1000026716/product/ban_phim_vortex_8700_multix_dolch_8e841f733f5b4ebb88207770f3b4996f_large.png',
        KeyBoardsalesProduct: '-20%',
    },
    {
        KeyBoardName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        KeyBoardpriceBf: 21 + '.' + 990 + '.' + 990,
        KeyBoardprice: 17 + '.' + 990 + '.' + 990,
        KeyBoardimageProduct: 'https://product.hstatic.net/1000026716/product/ban-phim-co-razer-huntsman-v2-analog-rz03-03610100-r3m1_f9e8166b5d924d44bd8db616e5915152_large.png',
        KeyBoardsalesProduct: '-20%',
    },
]


function showProductImageKeyBoard() {
    var showProductImageKeyBoard = document.getElementById('productSaleKkeyBoard')
    showProductImageKeyBoard.innerHTML = ''
    for (var i = 0; i < arrayProductImageKeyBoard.length; i++) {
        KeyBoardNameProduct = arrayProductImageKeyBoard[i].KeyBoardName
        KeyBoardpriceBfBefore = arrayProductImageKeyBoard[i].KeyBoardpriceBf
        KeyBoardpriceProductAfter = arrayProductImageKeyBoard[i].KeyBoardprice
        KeyBoardimageProductShow = arrayProductImageKeyBoard[i].KeyBoardimageProduct
        KeyBoardsalesProduct = arrayProductImageKeyBoard[i].KeyBoardsalesProduct
        showProductImageKeyBoard.innerHTML += `
            <div class="product__detals-hot">
            <img class="product__detals-img" src="${KeyBoardimageProductShow}" alt="">
            <div class="product__title">
                <h1>${KeyBoardNameProduct}</h1>
                <h2>${KeyBoardpriceBfBefore}</h2>
                <h3>${KeyBoardpriceProductAfter}</h3>
                <div class="product__image-hot">
                    <img src="https://theme.hstatic.net/1000026716/1000440777/14/icon-saleoff.png" alt="">
                    <h5>${KeyBoardsalesProduct}</h5>
                </div>
            </div>

        </div>
    `
    }
}

const BtnProductListKeyBoard = document.querySelector('.showProductListKeyBoard')
BtnProductListKeyBoard.addEventListener('click', () => {
    showProductImageKeyBoard()
})





//show product list mouse
var arrayProductImageKeyBoarMouse = [
    {
        MouseName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        MousepriceBf: 21 + '.' + 990 + '.' + 990,
        Mouseprice: 17 + '.' + 990 + '.' + 990,
        MouseimageProduct: 'https://product.hstatic.net/1000026716/product/artboard_1_2ff4ba55c7be43a89f8ea1b2c2e577d6_large.png',
        MousesalesProduct: '-20%',
    },
    {
        MouseName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        MousepriceBf: 21 + '.' + 990 + '.' + 990,
        Mouseprice: 17 + '.' + 990 + '.' + 990,
        MouseimageProduct: 'https://product.hstatic.net/1000026716/product/artboard_1_45df773394834f7ab2b99f10dbded46c_large.png',
        MousesalesProduct: '-20%',
    },
    {
        MouseName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        MousepriceBf: 21 + '.' + 990 + '.' + 990,
        Mouseprice: 17 + '.' + 990 + '.' + 990,
        MouseimageProduct: 'https://product.hstatic.net/1000026716/product/artboard_1_da260270af0547c39559266fe9f44cb5_large.png',
        MousesalesProduct: '-20%',
    },
    {
        MouseName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        MousepriceBf: 21 + '.' + 990 + '.' + 990,
        Mouseprice: 17 + '.' + 990 + '.' + 990,
        MouseimageProduct: 'https://product.hstatic.net/1000026716/product/gearvn-chuot-logitech-g-pro-x-superlight-wireless-black-666_83650815ce2e486f9108dbbb17c29159_large.jpg',
        MousesalesProduct: '-20%',
    },
    {
        MouseName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        MousepriceBf: 21 + '.' + 990 + '.' + 990,
        Mouseprice: 17 + '.' + 990 + '.' + 990,
        MouseimageProduct: 'https://product.hstatic.net/1000026716/product/gearvn-chuot-logitech-g-pro-wireless-league-of-legends-1_b929770415d449a38770e3eedbb94c06_large.png',
        MousesalesProduct: '-20%',
    },
    {
        MouseName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        MousepriceBf: 21 + '.' + 990 + '.' + 990,
        Mouseprice: 17 + '.' + 990 + '.' + 990,
        MouseimageProduct: 'https://product.hstatic.net/1000026716/product/1_81fcd168337f4753b00f14e761806a93_large.png',
        MousesalesProduct: '-20%',
    },
]


function showProductImageMouse() {
    var showProductImageMouse = document.getElementById('productSaleMouse')
    showProductImageMouse.innerHTML = ''
    for (var i = 0; i < arrayProductImageKeyBoarMouse.length; i++) {
        MouseNameProduct = arrayProductImageKeyBoarMouse[i].MouseName
        MousepriceBfBefore = arrayProductImageKeyBoarMouse[i].MousepriceBf
        MousepriceProductAfter = arrayProductImageKeyBoarMouse[i].Mouseprice
        MouseimageProductShow = arrayProductImageKeyBoarMouse[i].MouseimageProduct
        MousesalesProduct = arrayProductImageKeyBoarMouse[i].MousesalesProduct
        showProductImageMouse.innerHTML += `
            <div class="product__detals-hot">
            <img class="product__detals-img" src="${MouseimageProductShow}" alt="">
            <div class="product__title">
                <h1>${MouseNameProduct}</h1>
                <h2>${MousepriceBfBefore}</h2>
                <h3>${MousepriceProductAfter}</h3>
                <div class="product__image-hot">
                    <img src="https://theme.hstatic.net/1000026716/1000440777/14/icon-saleoff.png" alt="">
                    <h5>${MousesalesProduct}</h5>
                </div>
            </div>

        </div>
    `
    }
}


const BtnProductListMouse = document.querySelector('.showProductListMouse')
BtnProductListMouse.addEventListener('click', () => {
    showProductImageMouse()
})



//laptop office
var arrayImageProductLaptopOffice = [
    {
        OfficelaptopName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        OfficepriceBf: 21 + '.' + 990 + '.' + 990,
        Officeprice: 17 + '.' + 990 + '.' + 990,
        OfficeimageProduct: 'https://product.hstatic.net/1000026716/product/203vn_bf3b387b66764b4cbc1368c6a6d1cd0d_large.png',
        OfficesalesProduct: '-20%',
    },
    {
        OfficelaptopName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        OfficepriceBf: 21 + '.' + 990 + '.' + 990,
        Officeprice: 17 + '.' + 990 + '.' + 990,
        OfficeimageProduct: 'https://product.hstatic.net/1000026716/product/381e_148e617be83d4dd2b96962d0ec6957ca_large.png',
        OfficesalesProduct: '-20%',
    },
    {
        OfficelaptopName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        OfficepriceBf: 21 + '.' + 990 + '.' + 990,
        Officeprice: 17 + '.' + 990 + '.' + 990,
        OfficeimageProduct: 'https://product.hstatic.net/1000026716/product/l1421w_2b115562199d462b82b92e89e95b2473_large.png',
        OfficesalesProduct: '-20%',
    },
    {
        OfficelaptopName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        OfficepriceBf: 21 + '.' + 990 + '.' + 990,
        Officeprice: 17 + '.' + 990 + '.' + 990,
        OfficeimageProduct: 'https://product.hstatic.net/1000026716/product/laptop-asus-zenbook-ux325ea-kg656w_33160483676c416081a2d4c83e86306f_large.png',
        OfficesalesProduct: '-20%',
    },
    {
        OfficelaptopName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        OfficepriceBf: 21 + '.' + 990 + '.' + 990,
        Officeprice: 17 + '.' + 990 + '.' + 990,
        OfficeimageProduct: 'https://product.hstatic.net/1000026716/product/lt-van-phong_61cd1eddc2db419b870618d14586fe6b_large.png',
        OfficesalesProduct: '-20%',
    },
    {
        OfficelaptopName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        OfficepriceBf: 21 + '.' + 990 + '.' + 990,
        Officeprice: 17 + '.' + 990 + '.' + 990,
        OfficeimageProduct: 'https://product.hstatic.net/1000026716/product/1_4c2ca2050f97432189378115d0fa1f0d_large.png',
        OfficesalesProduct: '-20%',
    },
    {
        OfficelaptopName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        OfficepriceBf: 21 + '.' + 990 + '.' + 990,
        Officeprice: 17 + '.' + 990 + '.' + 990,
        OfficeimageProduct: 'https://product.hstatic.net/1000026716/product/laptop-hp-pavilion-15-eg0506tx-46m05pa_3f2e2cb97f6b4ed192752aa774e1b9b4_large.jpg',
        OfficesalesProduct: '-20%',
    },
    {
        OfficelaptopName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        OfficepriceBf: 21 + '.' + 990 + '.' + 990,
        Officeprice: 17 + '.' + 990 + '.' + 990,
        OfficeimageProduct: '/images/Laptop/Ltop19.PNG',
        OfficesalesProduct: '-20%',
    },
    {
        OfficelaptopName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        OfficepriceBf: 21 + '.' + 990 + '.' + 990,
        Officeprice: 17 + '.' + 990 + '.' + 990,
        OfficeimageProduct: 'https://product.hstatic.net/1000026716/product/k2091w_f6b48f643f794ce28270b8620cd68caa_large.png',
        OfficesalesProduct: '-20%',
    },
    {
        OfficelaptopName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        OfficepriceBf: 21 + '.' + 990 + '.' + 990,
        Officeprice: 17 + '.' + 990 + '.' + 990,
        OfficeimageProduct: 'https://product.hstatic.net/1000026716/product/720a_5f6dd38267eb4df7a910c8cc30388274_large.png',
        OfficesalesProduct: '-20%',
    },
]


function showProductImageLaptopOffice() {
    var showProductImageLaptopOffice = document.getElementById('productHotLaptopOffice')
    showProductImageLaptopOffice.innerHTML = ''
    for (var i = 0; i < arrayImageProductLaptopOffice.length; i++) {
        OfficelaptopNameProduct = arrayImageProductLaptopOffice[i].OfficelaptopName
        OfficelaptoppriceBfBefore = arrayImageProductLaptopOffice[i].OfficepriceBf
        OfficelaptoppriceProductAfter = arrayImageProductLaptopOffice[i].Officeprice
        OfficelaptopimageProductShow = arrayImageProductLaptopOffice[i].OfficeimageProduct
        OfficelaptopsalesProduct = arrayImageProductLaptopOffice[i].OfficesalesProduct
        showProductImageLaptopOffice.innerHTML += `
            <div class="product__detals-hot">
            <img class="product__detals-img" src="${OfficelaptopimageProductShow}" alt="">
            <div class="product__title">
                <h1>${ OfficelaptopNameProduct}</h1>
                <h2>${OfficelaptoppriceBfBefore}</h2>
                <h3>${OfficelaptoppriceProductAfter}</h3>
                <div class="product__image-hot">
                    <img src="https://theme.hstatic.net/1000026716/1000440777/14/icon-saleoff.png" alt="">
                    <h5>${OfficelaptopsalesProduct}</h5>
                </div>
            </div>

        </div>
    `
    }
}


const BtnProductListLaptopOffice = document.querySelector('.openShowProductLaptopOffice')
BtnProductListLaptopOffice.addEventListener('click', () => {
    showProductImageLaptopOffice()
})


const slideChangeImageMenu = document.querySelector(".meanu__header-list--img")
const listImageMenu = ['https://theme.hstatic.net/1000026716/1000440777/14/slideshow_4.jpg?v=28134', 'https://theme.hstatic.net/1000026716/1000440777/14/slideshow_15.jpg?v=28134', 'https://theme.hstatic.net/1000026716/1000440777/14/slideshow_2.jpg?v=28134', 'https://theme.hstatic.net/1000026716/1000440777/14/slideshow_5.jpg?v=28134', 'https://theme.hstatic.net/1000026716/1000440777/14/slideshow_9.jpg?v=28134', 'https://theme.hstatic.net/1000026716/1000440777/14/slideshow_12.jpg?v=28134', 'https://theme.hstatic.net/1000026716/1000440777/14/slideshow_1.jpg?v=28134']

setInterval(function () {
    var randomImageMenu = Math.floor(Math.random() * 7)
    slideChangeImageMenu.src = listImageMenu[randomImageMenu]
}, 2000)



//darkmode
const openDarkmode = document.querySelector('#darkmode')
openDarkmode.addEventListener('click',function(){
    openDarkmode.classList.toggle('bxs-moon')
    if(openDarkmode.classList.contains('bxs-moon')){
        document.body.classList.toggle('active')
    }
    else{
        document.body.classList.remove('active')
    }
})