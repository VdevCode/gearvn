const buttonGrid = document.querySelector('#menu')
const showGridMenu = document.querySelector('.menu__header')

buttonGrid.addEventListener('click', function () {

    buttonGrid.classList.toggle('bxs-message-alt-x')
    if (buttonGrid.classList.contains('bxs-message-alt-x')) {
        showGridMenu.classList.toggle('active')
    } else {
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
        laptopName: 'Laptop gaming Acer Aspire 7 A715 43G R8GA',
        priceBf: 23 + '.' + 990 + '.' + 990,
        price: 1 + '.' + 990 + '.' + 990,
        imageProduct: 'https://product.hstatic.net/1000026716/product/r8ga_15109189103c4dd7b706dfd168dbed04_large.png',
        salesProduct: '-25%',
    },
    {
        laptopName: 'Laptop gaming tuf dash f15 fxs172z',
        priceBf: 25 + '.' + 990 + '.' + 990,
        price: 19 + '.' + 990 + '.' + 990,
        imageProduct: 'https://product.hstatic.net/1000026716/product/tuf_dash_f15_thumb_296d05bf570846f99908fcb63857e723_large.jpg',
        salesProduct: '-27%',
    },
    {
        laptopName: 'Laptop ASUS TUF Gaming F15 FX506HC HN144W',
        priceBf: 25 + '.' + 990 + '.' + 990,
        price: 20 + '.' + 990 + '.' + 990,
        imageProduct: 'https://product.hstatic.net/1000026716/product/hn144w_48ecbca2786b4028934d22d149833c1d_large.png',
        salesProduct: '-19%',
    },
    {
        laptopName: 'Laptop Gaming MSI Katana GF66 11UC 676VN',
        priceBf: 21 + '.' + 990 + '.' + 990,
        price: 17 + '.' + 990 + '.' + 990,
        imageProduct: 'https://product.hstatic.net/1000026716/product/676vn--w10_0f88dc9216454c2a914c2c9b0438097e_large.png',
        salesProduct: '-20%',
    },
    {
        laptopName: 'Máy tính xách tay Acer Nitro 5 AN515 58 52SP',
        priceBf: 27 + '.' + 990 + '.' + 990,
        price: 25 + '.' + 990 + '.' + 990,
        imageProduct: 'https://product.hstatic.net/1000026716/product/52sp_a41f57a6e3714169a8394698e9abb0a9_large.png',
        salesProduct: '-11%',
    },
    {
        laptopName: 'Laptop Gaming Dell G15 5511 70266676',
        priceBf: 27 + '.' + 990 + '.' + 990,
        price: 19 + '.' + 990 + '.' + 990,
        imageProduct: 'https://product.hstatic.net/1000026716/product/g15-5511-i5_6fb23ec04c4f49f494011149bd627482_large.png',
        salesProduct: '-29%',
    },
    {
        laptopName: 'Laptop Gaming Acer Aspire 7 A715 42G R05G',
        priceBf: 21 + '.' + 990 + '.' + 990,
        price: 17 + '.' + 990 + '.' + 990,
        imageProduct: 'https://product.hstatic.net/1000026716/product/r05g_486ed6ca405f47949bf7526e1940109d_large.png',
        salesProduct: '-20%',
    },
    {
        laptopName: 'Laptop gaming GIGABYTE G5 GD 51S1123SO',
        priceBf: 22 + '.' + 990 + '.' + 990,
        price: 18 + '.' + 990 + '.' + 990,
        imageProduct: 'https://product.hstatic.net/1000026716/product/i5-3050-45__350169c41d984bcaa43d02e7240ae863_large.png',
        salesProduct: '-20%',
    },
    {
        laptopName: 'Laptop ASUS TUF Gaming F15 FX506HC HN144W',
        priceBf: 25 + '.' + 990 + '.' + 990,
        price: 18 + '.' + 990 + '.' + 990,
        imageProduct: 'https://product.hstatic.net/1000026716/product/hn144w_48ecbca2786b4028934d22d149833c1d_large.png',
        salesProduct: '-19%',
    },
    {
        laptopName: 'Laptop Gaming Asus ROG Strix G15 G513IH HN015W',
        priceBf: 21 + '.' + 990 + '.' + 990,
        price: 17 + '.' + 990 + '.' + 990,
        imageProduct: 'https://product.hstatic.net/1000026716/product/g513_b4baf05245814c1cb7554349231e1d7f_large.png',
        salesProduct: '-23%',
    },
    {
        laptopName: 'Laptop Asus Vivobook 15X OLED A1503ZA L1151W',
        priceBf: 16 + '.' + 990 + '.' + 990,
        price: 15 + '.' + 990 + '.' + 990,
        imageProduct: 'https://product.hstatic.net/1000026716/product/l1151w_41756519be33442387c851d83b693e0f_large.png',
        salesProduct: '-9%',
    },
    {
        laptopName: 'Laptop gaming acer asprire 7 a715 43g rg8ra',
        priceBf: 21 + '.' + 990 + '.' + 990,
        price: 17 + '.' + 990 + '.' + 990,
        imageProduct: 'https://product.hstatic.net/1000026716/product/laptop-gaming-asus-rog-zephyrus-g14-ga401qc-k2199w_8a98fea181044b9ca17f040b36d8847b_large.jpg',
        salesProduct: '-20%',
    },
    {
        laptopName: 'Laptop gaming ASUS ROG Zephyrus G14 GA401QC K2199W',
        priceBf: 32 + '.' + 990 + '.' + 990,
        price: 27 + '.' + 990 + '.' + 990,
        imageProduct: 'https://product.hstatic.net/1000026716/product/gearvn-laptop-acer-aspire-5-a515-57-52y2-1_192d36a634be400e88f8b29a54398bc3_large.png',
        salesProduct: '-15%',
    },
    {
        laptopName: 'Laptop Dell Vostro 3510 V5I3305W Black',
        priceBf: 13 + '.' + 990 + '.' + 990,
        price: 12 + '.' + 990 + '.' + 990,
        imageProduct: 'https://product.hstatic.net/1000026716/product/laptop_dell_vostro_3510_v5i3305w_black_fcc9d9d57eb94905bc7e88b4671abc9a_large.jpg',
        salesProduct: '-9%',
    },

]

function showLaptopProduct(){ 
    var productHot = document.getElementById('productHot')
    productHot.innerHTML = ''
    for (var i = 0; i < arrayImageProduct.length; i++) {
        laptopNameProduct = arrayImageProduct[i].laptopName
        priceProductBefore = arrayImageProduct[i].priceBf
        priceProductAfter = arrayImageProduct[i].price
        imageProductShow = arrayImageProduct[i].imageProduct
        saleProduct = arrayImageProduct[i].salesProduct
        productHot.innerHTML += `
            <div class="product__detals-hot product__detals-hot-1">
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
let BtnLaptopProduct = document.querySelector('.openShowProduct')
BtnLaptopProduct.addEventListener('click', () => {
    BtnLaptopProduct.innerHTML = 'Đã Load'
    showLaptopProduct()
    if (showLaptopProduct()) {
        BtnLaptopProduct.style.display = 'none'
    }
})

let showPopupProductItem = document.querySelector('.show__product--item')

let closePopupItem = document.querySelector('.show__product--close--btn')

let showProductHotPopUp = document.getElementsByClassName('product__detals-hot')
for (let i = 0; i < arrayImageProduct.length; i++) {
    showProductHotPopUp[i].addEventListener('click', () => {
        showPopupProductItem.classList.add('active')
      
    })
}        


closePopupItem.addEventListener('click',()=>{
    showPopupProductItem.classList.remove('active')
    console.log('he');
})



//show product list tivi
var arrayProductImageTv = [
    {
        TiviName: 'Màn hình ViewSonic VA2215-H 22" 75Hz FHD',
        TivipriceBf: 3 + '.' + 990 + '.' + 990,
        Tiviprice: 2 + '.' + 990 + '.' + 990,
        TiviimageProduct: 'https://product.hstatic.net/1000026716/product/viewsonic_va2215-h_gearvn_032d5d53effc48a2887c2879e6bc5cff_77ab0975c840473397443fe7d0d198b8_large.jpg',
        TivisalesProduct: '-30%',
    },
    {
        TiviName: 'Màn hình AOC 24G2 24" IPS 144Hz Gsync compatible chuyên gaming',
        TivipriceBf: 5 + '.' + 990 + '.' + 990,
        Tiviprice: 4 + '.' + 990 + '.' + 990,
        TiviimageProduct: 'https://product.hstatic.net/1000026716/product/aoc_24g2_gearvn_26fe6139df4049a3b47cbcf4f0c89aa6_87b2f267cfce432798ed0091baa1522b_large.jpg',
        TivisalesProduct: '-20%',
    },
    {
        TiviName: 'Màn hình GIGABYTE G24F 24" IPS 165Hz chuyên game',
        TivipriceBf: 5 + '.' + 990 + '.' + 990,
        Tiviprice: 4 + '.' + 990 + '.' + 990,
        TiviimageProduct: 'https://product.hstatic.net/1000026716/product/gigabyte_g24f_gearvn_32c459bb9b7_6e61bb5ce2754618bc3a20992d463f91_2ff413a7c7474d4996d7701e92362fc5_large.jpg',
        TivisalesProduct: '-20%',
    },
    {
        TiviName: 'Màn hình Asus TUF GAMING VG249Q1A 24" IPS 165Hz Gsync compatible chuyên game',
        TivipriceBf: 5 + '.' + 990 + '.' + 990,
        Tiviprice: 4 + '.' + 990 + '.' + 990,
        TiviimageProduct: 'https://product.hstatic.net/1000026716/product/ps-165hz-gsync-compatible-chuyen-game_b0fbfe425ebc40739fc163c018199f69_094e8ccd5b1a4d1cb25a13d3468602c1_large.jpg',
        TivisalesProduct: '-32%',
    },
    {
        TiviName: 'Màn hình AOC 24B1XH5 24" IPS 75Hz FHD',
        TivipriceBf: 3 + '.' + 990 + '.' + 990,
        Tiviprice: 2 + '.' + 990 + '.' + 990,
        TiviimageProduct: 'https://product.hstatic.net/1000026716/product/aoc_27b1h_e95bc0f5c9644011a6f61d5c69a0c361_2eab636220cc489cb024bd8917191e97_large.jpg',
        TivisalesProduct: '-20%',
    },
    {
        TiviName: 'Màn hình GIGABYTE G24F 24" IPS 165Hz chuyên game',
        TivipriceBf: 5 + '.' + 990 + '.' + 990,
        Tiviprice: 4 + '.' + 990 + '.' + 990,
        TiviimageProduct: 'https://product.hstatic.net/1000026716/product/gigabyte_g24f_gearvn_32c459bb9b7_6e61bb5ce2754618bc3a20992d463f91_2ff413a7c7474d4996d7701e92362fc5_large.jpg',
        TivisalesProduct: '-20%',
    },
    {
        TiviName: 'Màn hình ViewSonic VA2432-H 24" IPS 75Hz viền mỏng',
        TivipriceBf: 4 + '.' + 990 + '.' + 990,
        Tiviprice: 2 + '.' + 990 + '.' + 990,
        TiviimageProduct: 'https://product.hstatic.net/1000026716/product/1-ec_b8bb403946e3484b9bc4b3b03d1c5394_358f6d96182f4c51b3407087c5154c79_large.jpg',
        TivisalesProduct: '-34%',
    },
    {
        TiviName: 'Màn hình Dell G2422HS 24" IPS 165Hz G-Sync 1ms chuyên game',
        TivipriceBf: 4 + '.' + 990 + '.' + 990,
        Tiviprice: 4 + '.' + 890 + '.' + 990,
        TiviimageProduct: 'https://product.hstatic.net/1000026716/product/dell_g2422hs_gearvn_7329d6a695084157926de61faa1aafb3_large.jpg',
        TivisalesProduct: '-1%',
    },
    {
        TiviName: 'Màn hình Philips 242M8 24" IPS 144Hz Freesync chuyên game',
        TivipriceBf: 5 + '.' + 990 + '.' + 990,
        Tiviprice: 4 + '.' + 990 + '.' + 990,
        TiviimageProduct: 'https://product.hstatic.net/1000026716/product/philips_242m8_gearvn_eef3d9ea2c5145ec97cbf55675993ad2_4b377c5d22ab4bef8f982bfcd7ed398d_large.jpg',
        TivisalesProduct: '-20%',
    },
    {
        TiviName: 'Màn hình AOC 24G2E 24" IPS 144Hz chuyên gaming',
        TivipriceBf: 4 + '.' + 990 + '.' + 990,
        Tiviprice: 3 + '.' + 990 + '.' + 990,
        TiviimageProduct: 'https://product.hstatic.net/1000026716/product/aoc_24g2e_-_gearvn_a1cd043e4c4e46ecb751fa1467538b55_large.jpg',
        TivisalesProduct: '-20%',
    },
    {
        TiviName: 'Màn hình HKC MB27V9 27" IPS 75Hz',
        TivipriceBf: 4 + '.' + 990 + '.' + 990,
        Tiviprice: 2 + '.' + 990 + '.' + 990,
        TiviimageProduct: 'https://product.hstatic.net/1000026716/product/hkc_mb27v9_gearvn_b328a31f3c0d41b38f8955656637b86c_large.jpg',
        TivisalesProduct: '-38%',
    },
    {
        TiviName: 'Màn hình ViewSonic VX2776-SMHD 27" IPS 75Hz loa kép 3W',
        TivipriceBf: 6 + '.' + 990 + '.' + 990,
        Tiviprice: 4 + '.' + 990 + '.' + 990,
        TiviimageProduct: 'https://product.hstatic.net/1000026716/product/1_4d548da035864f958458370c89ea2bc0_large.jpg',
        TivisalesProduct: '-22%',
    },
    {
        TiviName: 'Màn hình LG 22MN430M-B 22" IPS 75Hz FreeSync',
        TivipriceBf: 3 + '.' + 990 + '.' + 990,
        Tiviprice: 2 + '.' + 990 + '.' + 990,
        TiviimageProduct: 'https://product.hstatic.net/1000026716/product/gigabyte_g24f_gearvn_32c459bb9b7_6e61bb5ce2754618bc3a20992d463f91_2ff413a7c7474d4996d7701e92362fc5_large.jpg',
        TivisalesProduct: '-20%',
    },
    {
        TiviName: 'Màn hình AOC 24G2E 24" IPS 144Hz chuyên gaming',
        TivipriceBf: 4 + '.' + 990 + '.' + 990,
        Tiviprice: 3 + '.' + 990 + '.' + 990,
        TiviimageProduct: 'https://product.hstatic.net/1000026716/product/lg22mn430m-b_gearvn_0b769e0b54344e19bebbab97a9648fa7_large.jpg',
        TivisalesProduct: '-20%',
    },
    {
        TiviName: 'Màn hình Acer R221QB 22" IPS 75Hz FreeSync',
        TivipriceBf: 4 + '.' + 690 + '.' + 990,
        Tiviprice: 3 + '.' + 490 + '.' + 990,
        TiviimageProduct: 'https://product.hstatic.net/1000026716/product/manhinh_r221qb_acer_gearvn_2481c6c920f04691a2b6566731a50429_large.jpg',
        TivisalesProduct: '-24%',
    },
    {
        TiviName: 'Màn hình ViewSonic VP2458 24" IPS chuyên đồ họa',
        TivipriceBf: 4 + '.' + 990 + '.' + 990,
        Tiviprice: 3 + '.' + 990 + '.' + 990,
        TiviimageProduct: 'https://product.hstatic.net/1000026716/product/1_43c9773c518242568cbeadd860151b73_large.jpg',
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
    BtnProductListTv.innerHTML = 'Đã Load'
    showProductImageTivi()
})



//show product list keyboard
var arrayProductImageKeyBoard = [
    {
        KeyBoardName: 'Bàn phím iKBC CD87 Vintage',
        KeyBoardpriceBf: 1 + '.' + 990 + '.' + 990,
        KeyBoardprice: 1 + '.' + 790 + '.' + 990,
        KeyBoardimageProduct: 'https://product.hstatic.net/1000026716/product/artboard_1_d689810a6a6e405abbb291e1e0ebb9ba_large.png',
        KeyBoardsalesProduct: '-10%',
    },
    {
        KeyBoardName: 'Bàn phím cơ Akko 5087B Multi-modes World Tour London',
        KeyBoardpriceBf: 2 + '.' + 790 + '.' + 990,
        KeyBoardprice: 2 + '.' + 290 + '.' + 990,
        KeyBoardimageProduct: 'https://product.hstatic.net/1000026716/product/artboard_1_fcd1167e20ee4413bfaf31630ca4087e_large.png',
        KeyBoardsalesProduct: '-18%',
    },
    {
        KeyBoardName: 'Bàn phím Vortex 8700 MultiX Summer',
        KeyBoardpriceBf: 3 + '.' + 190 + '.' + 990,
        KeyBoardprice: 2 + '.' + 290 + '.' + 990,
        KeyBoardimageProduct: 'https://product.hstatic.net/1000026716/product/ban_phim_vortex_8700_multix_summer_f789bca044334321af00a3e256fea9d1_large.png',
        KeyBoardsalesProduct: '-19%',
    },
    {
        KeyBoardName: 'Bàn phím Mistel X8 Nimitz',
        KeyBoardpriceBf: 2 + '.' + 990 + '.' + 990,
        KeyBoardprice: 2 + '.' + 000 + '.' + 990,
        KeyBoardimageProduct: 'https://product.hstatic.net/1000026716/product/ban_phim_mistel_x8_nimitz_391ca37b0a2d46bfb7b6313f2b4e1f75_large.png',
        KeyBoardsalesProduct: '-30%',
    },
    {
        KeyBoardName: 'Bàn phím iKBC CD108 Vintage',
        KeyBoardpriceBf: 2 + '.' + 990 + '.' + 990,
        KeyBoardprice: 1 + '.' + 990 + '.' + 990,
        KeyBoardimageProduct: 'https://product.hstatic.net/1000026716/product/ban_phim_vortex_8700_multix_dolch_8e841f733f5b4ebb88207770f3b4996f_large.png',
        KeyBoardsalesProduct: '-20%',
    },
    {
        KeyBoardName: 'Bàn phím Rapoo V50S RGB',
        KeyBoardpriceBf: 990 + '.' + 990,
        KeyBoardprice: 390 + '.' + 990,
        KeyBoardimageProduct: 'https://product.hstatic.net/1000026716/product/ban-phim-choi-game-rapoo-v50s_7dd31f31495a4d12af6b0ce5aeb50e2b_large.png',
        KeyBoardsalesProduct: '-50%',
    },
    {
        KeyBoardName: 'Bàn phím Leopold FC900R Bluetooth White Blue Star',
        KeyBoardpriceBf: 2 + '.' + 990 + '.' + 990,
        KeyBoardprice: 1 + '.' + 990 + '.' + 990,
        KeyBoardimageProduct: 'https://product.hstatic.net/1000026716/product/ban-phim-co-razer-huntsman-v2-analog-rz03-03610100-r3m1_21c97078eca94b8db58522b562dc747a_large.png',
        KeyBoardsalesProduct: '-20%',
    },
    {
        KeyBoardName: 'Bàn phím Razer Ornata V3 X',
        KeyBoardpriceBf: 2 + '.' + 990 + '.' + 990,
        KeyBoardprice: 2 + '.' + 390 + '.' + 990,
        KeyBoardimageProduct: 'https://product.hstatic.net/1000026716/product/artboard_1_7565c29591d245b89796223fe89f2d81_large.png',
        KeyBoardsalesProduct: '-16%',
    },
    {
        KeyBoardName: 'Bàn phím cơ FL-Esports CMK68SAM 3 Mode Wireless Metal Heart',
        KeyBoardpriceBf: 2 + '.' + 990 + '.' + 990,
        KeyBoardprice: 2 + '.' + 290 + '.' + 990,
        KeyBoardimageProduct: 'https://product.hstatic.net/1000026716/product/42636_fl_esports_cmk68sam_metal_heart__1__368e6cbbb3044e5bb10518c0cf19c8e5_large.png',
        KeyBoardsalesProduct: '-30%',
    },
    {
        KeyBoardName: 'Bàn phím Razer Ornata V3 X',
        KeyBoardpriceBf: 2 + '.' + 990 + '.' + 990,
        KeyBoardprice: 1 + '.' + 990 + '.' + 990,
        KeyBoardimageProduct: 'https://product.hstatic.net/1000026716/product/gearvn-ban-phim-nzxt-function-tkl-white-1_a8ff744307ba4160abe001ef46df8b4f_large.png',
        KeyBoardsalesProduct: '-20%',
    },
    {
        KeyBoardName: 'Bàn phím NZXT Function TKL White',
        KeyBoardpriceBf: 2 + '.' + 990 + '.' + 990,
        KeyBoardprice: 2 + '.' + 990 + '.' + 990,
        KeyBoardimageProduct: 'https://product.hstatic.net/1000026716/product/ban_phim_vortex_8700_multix_dolch_8e841f733f5b4ebb88207770f3b4996f_large.png',
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
    BtnProductListKeyBoard.innerHTML = "Đã Load"
    showProductImageKeyBoard()
})





//show product list mouse
var arrayProductImageKeyBoarMouse = [
    {
        MouseName: 'Chuột Logitech G102 Lightsync RGB Black',
        MousepriceBf: 590 + '.' + 990,
        Mouseprice: 400 + '.' + 990,
        MouseimageProduct: 'https://product.hstatic.net/1000026716/product/artboard_1_2ff4ba55c7be43a89f8ea1b2c2e577d6_large.png',
        MousesalesProduct: '-20%',
    },
    {
        MouseName: 'Chuột Logitech G102 Lightsync RGB White',
        MousepriceBf: 590 + '.' + 990,
        Mouseprice: 400 + '.' + 990,
        MouseimageProduct: 'https://product.hstatic.net/1000026716/product/artboard_1_45df773394834f7ab2b99f10dbded46c_large.png',
        MousesalesProduct: '-33%',
    },
    {
        MouseName: 'Chuột Logitech G402 Hyperion',
        MousepriceBf: 21 + '.' + 990 + '.' + 990,
        Mouseprice: 17 + '.' + 990 + '.' + 990,
        MouseimageProduct: 'https://product.hstatic.net/1000026716/product/artboard_1_da260270af0547c39559266fe9f44cb5_large.png',
        MousesalesProduct: '-20%',
    },
    {
        MouseName: 'Chuột Logitech G Pro X Superlight Wireless White',
        MousepriceBf: 21 + '.' + 990 + '.' + 990,
        Mouseprice: 17 + '.' + 990 + '.' + 990,
        MouseimageProduct: 'https://product.hstatic.net/1000026716/product/gearvn-chuot-logitech-g-pro-x-superlight-wireless-black-666_83650815ce2e486f9108dbbb17c29159_large.jpg',
        MousesalesProduct: '-20%',
    },
    {
        MouseName: 'Chuột Logitech G Pro X Superlight Wireless Pink',
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
    BtnProductListMouse.innerHTML = "Đã Load"
    showProductImageMouse()
})



//laptop office
var arrayImageProductLaptopOffice = [
    {
        OfficelaptopName: 'Laptop MSI Modern 14 B5M 202VN',
        OfficepriceBf: 16 + '.' + 990 + '.' + 990,
        Officeprice: 12 + '.' + 990 + '.' + 990,
        OfficeimageProduct: 'https://product.hstatic.net/1000026716/product/203vn_bf3b387b66764b4cbc1368c6a6d1cd0d_large.png',
        OfficesalesProduct: '-29%',
    },
    {
        OfficelaptopName: 'Laptop Acer Aspire 3 A315 59 381E',
        OfficepriceBf: 13 + '.' + 990 + '.' + 990,
        Officeprice: 12 + '.' + 990 + '.' + 990,
        OfficeimageProduct: 'https://product.hstatic.net/1000026716/product/381e_148e617be83d4dd2b96962d0ec6957ca_large.png',
        OfficesalesProduct: '-7%',
    },
    {
        OfficelaptopName: 'Laptop ASUS Vivobook 15X OLED A1503ZA L1421W',
        OfficepriceBf: 19 + '.' + 990 + '.' + 990,
        Officeprice: 18 + '.' + 990 + '.' + 990,
        OfficeimageProduct: 'https://product.hstatic.net/1000026716/product/l1421w_2b115562199d462b82b92e89e95b2473_large.png',
        OfficesalesProduct: '-8%',
    },
    {
        OfficelaptopName: 'Laptop Asus ZenBook 13 UX325EA KG656W',
        OfficepriceBf: 24 + '.' + 790 + '.' + 990,
        Officeprice: 17 + '.' + 990 + '.' + 990,
        OfficeimageProduct: 'https://product.hstatic.net/1000026716/product/laptop-asus-zenbook-ux325ea-kg656w_33160483676c416081a2d4c83e86306f_large.png',
        OfficesalesProduct: '-27%',
    },
    {
        OfficelaptopName: 'Laptop Huawei Matebook 14 KLVD WDH9',
        OfficepriceBf: 21 + '.' + 990 + '.' + 990,
        Officeprice: 19 + '.' + 290 + '.' + 990,
        OfficeimageProduct: 'https://product.hstatic.net/1000026716/product/lt-van-phong_61cd1eddc2db419b870618d14586fe6b_large.png',
        OfficesalesProduct: '-12%',
    },
    {
        OfficelaptopName: 'Laptop Lenovo IdeaPad 5 Pro 16ARH7 82SN003LVN',
        OfficepriceBf: 29 + '.' + 990 + '.' + 990,
        Officeprice: 26 + '.' + 990 + '.' + 990,
        OfficeimageProduct: 'https://product.hstatic.net/1000026716/product/1_4c2ca2050f97432189378115d0fa1f0d_large.png',
        OfficesalesProduct: '-10%',
    },
    {
        OfficelaptopName: 'Laptop Lenovo IdeaPad 5 Pro 14ITL6 82L300KSVN',
        OfficepriceBf: 22 + '.' + 990 + '.' + 990,
        Officeprice: 17 + '.' + 990 + '.' + 990,
        OfficeimageProduct: 'https://product.hstatic.net/1000026716/product/laptop-hp-pavilion-15-eg0506tx-46m05pa_3f2e2cb97f6b4ed192752aa774e1b9b4_large.jpg',
        OfficesalesProduct: '-22%',
    },
    {
        OfficelaptopName: 'Laptop HP Envy 13 BA1536TU 4U6M5PA',
        OfficepriceBf: 30 + '.' + 990 + '.' + 990,
        Officeprice: 24 + '.' + 990 + '.' + 990,
        OfficeimageProduct: 'https://product.hstatic.net/1000026716/product/1_4c2ca2050f97432189378115d0fa1f0d_large.png',
        OfficesalesProduct: '-30%',
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
                <h1>${OfficelaptopNameProduct}</h1>
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
    BtnProductListLaptopOffice.innerHTML = "Đã Load"
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
openDarkmode.addEventListener('click', function () {
    openDarkmode.classList.toggle('bxs-moon')
    if (openDarkmode.classList.contains('bxs-moon')) {
        document.body.classList.toggle('active')
    }
    else {
        document.body.classList.remove('active')
    }
})


//scroll top
const scrollBtn = document.querySelector(".btn");

const btnVisibility = () => {
    if (window.scrollY > 400) {
        scrollBtn.style.visibility = "visible";
    } else {
        scrollBtn.style.visibility = "hidden";
    }
};

document.addEventListener("scroll", () => {
    btnVisibility();
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const slideHeaderMenu = document.querySelector(".header");

const slideHeaderVisibility = () => {
    if (window.scrollY > 800) {
        slideHeaderMenu.style.visibility = "hidden";
    }
    else {
        slideHeaderMenu.style.visibility = "visible";
    }
};

document.addEventListener("scroll", () => {
    slideHeaderVisibility();
});


//open category list
const BtnCategoryList = document.querySelector('.category-list')
const showCategoryList = document.querySelector('.category__list-menu-section')
const hideCategoryList = document.querySelector('.category__list--menu-item')


BtnCategoryList.addEventListener('click', () => {

    showCategoryList.classList.toggle('active1')
})

hideCategoryList.addEventListener('click', () => {
    showCategoryList.classList.remove('active1')
})

// showCategoryList.addEventListener('click',()=>{
//     showCategoryList.classList.add('active1')
// })


const closePages = document.querySelector('#closePages')
const openPagesGearvn = document.querySelector('.caseGearvn')
const showPagesGearvn = document.querySelector('.category__pages-content')

openPagesGearvn.addEventListener('click', () => {
    showPagesGearvn.classList.add('active')

})

closePages.addEventListener('click', () => {
    showPagesGearvn.classList.remove('active')
})


var arrayImageProductLaptopPc = [
    {

        PclaptopName: 'GVN VIPER Plus i3060',
        PcpriceBf: 28 + '.' + 990 + '.' + 990,
        Pcprice: 27 + '.' + 990 + '.' + 990,
        PcimageProduct: 'https://product.hstatic.net/1000026716/product/2_3671556ea6394514a50c06138e875901_large.jpg',
        PcsalesProduct: '-7%',
    },
    {

        PclaptopName: 'GVN PHANTOM i3070',
        PcpriceBf: 40 + '.' + 990 + '.' + 990,
        Pcprice: 39 + '.' + 990 + '.' + 990,
        PcimageProduct: 'https://product.hstatic.net/1000026716/product/1_3d8bc477e4f84fd5a8c2a7771cc0041b_large.jpg',
        PcsalesProduct: '-2%',
    },
    {

        PclaptopName: 'GVN PHANTOM i3070',
        PcpriceBf: 13 + '.' + 990 + '.' + 990,
        Pcprice: 12 + '.' + 990 + '.' + 990,
        PcimageProduct: 'https://product.hstatic.net/1000026716/product/minion_i1660s_20554623778e42b18d79afffe0e18f8a_large.jpg',
        PcsalesProduct: '-6%',
    },
    {

        PclaptopName: 'GVN PHANTOM i3060',
        PcpriceBf: 34 + '.' + 990 + '.' + 990,
        Pcprice: 32 + '.' + 990 + '.' + 990,
        PcimageProduct: 'https://product.hstatic.net/1000026716/product/1_59b0109a9a474d1ea14c2895bcd4f39a_large.jpg"',
        PcsalesProduct: '-5%',
    },
    {

        PclaptopName: 'G-Studio X',
        PcpriceBf: 87 + '.' + 990 + '.' + 990,
        Pcprice: 86 + '.' + 990 + '.' + 990,
        PcimageProduct: 'https://product.hstatic.net/1000026716/product/gstudiox_87ea0c1c7f264a0aa53fdc268977336e_large.jpg"',
        PcsalesProduct: '-1%',
    },
    {

        PclaptopName: 'Case Cooler Master Cosmos C700M - 30th Anniversary Limited Edition',
        PcpriceBf: 26 + '.' + 990 + '.' + 990,
        Pcprice: 25 + '.' + 990 + '.' + 990,
        PcimageProduct: 'https://product.hstatic.net/1000026716/product/case_cooler_f464313e62f349b689a1e813acb381ff_large.jpg',
        PcsalesProduct: '-4%',
    },
    {

        PclaptopName: 'Case Jetek Squid X3 Black (3 Fan RGB)',
        PcpriceBf: 890 + '.' + 990,
        Pcprice: 790 + '.' + 990,
        PcimageProduct: 'https://product.hstatic.net/1000026716/product/x3_cb397106104f4cc1b76804fd3b5936a3_large.png',
        PcsalesProduct: '-11%',
    },
    {

        PclaptopName: 'Case Asus TUF Gaming GT501VC',
        PcpriceBf: 3 + '.' + 990 + '.' + 990,
        Pcprice: 2 + '.' + 990 + '.' + 990,
        PcimageProduct: 'https://product.hstatic.net/1000026716/product/tuf-gaming-gt501-3d-1_289a072d90334f59bacbee04bf966fac_large.png',
        PcsalesProduct: '-14%',
    },
    {

        PclaptopName: 'Case LIAN LI PC - O11 Dynamic XL ROG Certify White',
        PcpriceBf: 6 + '.' + 990 + '.' + 990,
        Pcprice: 6 + '.' + 490 + '.' + 990,
        PcimageProduct: 'https://product.hstatic.net/1000026716/product/white_33e2e18f489b4fb19177d97b1d448a6f_large.jpg',
        PcsalesProduct: '-2%',
    },
    {

        PclaptopName: 'Case Corsair 220T White RGB Airflow Tempered Glass ( Mid-Tower )',
        PcpriceBf: 2 + '.' + 590 + '.' + 990,
        Pcprice: 2 + '.' + 490 + '.' + 990,
        PcimageProduct: 'https://product.hstatic.net/1000026716/product/gvn_220t_rgb_airflow_tempered_glass_mid-tower_smart_case___white_c69baa03e1c946c7bb81e9d43f24a8cd_large.jpg"',
        PcsalesProduct: '-2%',
    },
    {

        PclaptopName: 'Case Asus TUF Gaming GT501 White Edition (3 fan RGB)',
        PcpriceBf: 3 + '.' + 990 + '.' + 990,
        Pcprice: 2 + '.' + 990 + '.' + 990,
        PcimageProduct: 'https://product.hstatic.net/1000026716/product/tuf-gaming-gt501-white-edition-01_145867baebc74aca98593c02c99d844c_large.jpg',
        PcsalesProduct: '-23%',
    },
    {

        PclaptopName: 'Case MIK TN10 (3 FAN GALAXY RGB)',
        PcpriceBf: 1 + '.' + 290 + '.' + 990,
        Pcprice: 990 + '.' + 990,
        PcimageProduct: 'https://product.hstatic.net/1000026716/product/gemini_56113ebc3f0d4c68bf59d11159b029a2_large.png',
        PcsalesProduct: '-11%',
    },
    {

        PclaptopName: 'Case NZXT H710i CRFT Cyberpunk Limited Edition',
        PcpriceBf: 9 + '.' + 990 + '.' + 990,
        Pcprice: 9 + '.' + 990 + '.' + 990,
        PcimageProduct: 'https://product.hstatic.net/1000026716/product/1638828597-crfth710i-cyberpunkmain3systempng-clear-background_c86029f4352a4901a2435a13121da05b_large.png',
        PcsalesProduct: '-0%',
    },
    {

        PclaptopName: 'GVN PHANTOM i3060GVN TITAN Plus i3090Ti',
        PcpriceBf: 92 + '.' + 990 + '.' + 990,
        Pcprice: 90 + '.' + 990 + '.' + 990,
        PcimageProduct: 'https://product.hstatic.net/1000026716/product/1_599f5f07a504443c9ca2b05318e1d8a4_large.jpg',
        PcsalesProduct: '-3%',
    },
    {

        PclaptopName: 'GVN VIPER i2060',
        PcpriceBf: 20 + '.' + 990 + '.' + 990,
        Pcprice: 10 + '.' + 990 + '.' + 990,
        PcimageProduct: 'https://product.hstatic.net/1000026716/product/1_e5c97edf405046eb96fc7896e3c56087_large.jpg',
        PcsalesProduct: '-5%',
    },
    {

        PclaptopName: 'GVN VIPER Plus i3070',
        PcpriceBf: 34 + '.' + 990 + '.' + 990,
        Pcprice: 32 + '.' + 990 + '.' + 990,
        PcimageProduct: 'https://product.hstatic.net/1000026716/product/1_de3a14a8969c433fbe31ed9ddee5997f_large.jpg',
        PcsalesProduct: '-5%',
    },
    {

        PclaptopName: 'GVN VIPER i3050',
        PcpriceBf: 22 + '.' + 990 + '.' + 990,
        Pcprice: 21 + '.' + 990 + '.' + 990,
        PcimageProduct: 'https://product.hstatic.net/1000026716/product/2_1649a388894f4ddabf6880f6a73c710f_large.jpg',
        PcsalesProduct: '-6%',
    },
    {

        PclaptopName: 'GVN PHANTOM i3060',
        PcpriceBf: 34 + '.' + 990 + '.' + 990,
        Pcprice: 32 + '.' + 990 + '.' + 990,
        PcimageProduct: 'https://product.hstatic.net/1000026716/product/1_59b0109a9a474d1ea14c2895bcd4f39a_large.jpg"',
        PcsalesProduct: '-5%',
    },
    {

        PclaptopName: 'GVN MINION i1660S',
        PcpriceBf: 13 + '.' + 990 + '.' + 990,
        Pcprice: 12 + '.' + 990 + '.' + 990,
        PcimageProduct: 'https://product.hstatic.net/1000026716/product/minion_i1660s_20554623778e42b18d79afffe0e18f8a_large.jpg',
        PcsalesProduct: '-5%',
    },
    {

        PclaptopName: 'Case Thermaltake AH T600 TG Snow',
        PcpriceBf: 6 + '.' + 190 + '.' + 990,
        Pcprice: 5 + '.' + 990 + '.' + 990,
        PcimageProduct: 'https://product.hstatic.net/1000026716/product/case-thermaltake-ah-t600-tg-snow_6fe69a3014ed48279a4d14a5c50d7eb0_large.jpg',
        PcsalesProduct: '-3%',
    },
    {

        PclaptopName: 'Case Thermaltake AH T200 TG Snow',
        PcpriceBf: 3 + '.' + 890 + '.' + 990,
        Pcprice: 3 + '.' + 690 + '.' + 990,
        PcimageProduct: 'https://product.hstatic.net/1000026716/product/gearvn-case-thermaltake-ah-t200-tg-white-1_0d58015ad4ad4d4ba325c08b22ca2aad_large.png',
        PcsalesProduct: '-5%',
    },
    {

        PclaptopName: 'Case Thermaltake AH T200 TG Black',
        PcpriceBf: 3 + '.' + 690 + '.' + 990,
        Pcprice: 3 + '.' + 490 + '.' + 990,
        PcimageProduct: 'https://product.hstatic.net/1000026716/product/gearvn-case-thermaltake-ah-t200-tg-black-1_4d9c0937d86b425695f8ce4fccf3d3ea_large.png',
        PcsalesProduct: '-5%',
    },
    {

        PclaptopName: 'Case Antec Striker Mini Watercool ITX',
        PcpriceBf: 6 + '.' + 490 + '.' + 990,
        Pcprice: 5 + '.' + 990 + '.' + 990,
        PcimageProduct: 'https://product.hstatic.net/1000026716/product/gallery-striker-01_8c5250f0973245e4a9e5557df6e0dadd_large.jpg',
        PcsalesProduct: '-9%',
    },
    {

        PclaptopName: 'Case Lian Li PC - O11 Dynamic Mini White',
        PcpriceBf: 4 + '.' + 590 + '.' + 990,
        Pcprice: 3 + '.' + 890 + '.' + 990,
        PcimageProduct: 'https://product.hstatic.net/1000026716/product/18_4816f485b3264b0c9b12970412e2f081_large.jpg',
        PcsalesProduct: '-15%',
    },

]


function showProductImageLaptopPc() {
    var showProductImageLaptopPc = document.getElementById('loadPcVPN')
    showProductImageLaptopPc.innerHTML = ''
    for (var i = 0; i < arrayImageProductLaptopPc.length; i++) {
        PclaptopNameProduct = arrayImageProductLaptopPc[i].PclaptopName
        PcpriceBflaptoppriceBfBefore = arrayImageProductLaptopPc[i].PcpriceBf
        PcpricepriceProductAfter = arrayImageProductLaptopPc[i].Pcprice
        PcimageProductProductShow = arrayImageProductLaptopPc[i].PcimageProduct
        PcsalesProductShow = arrayImageProductLaptopPc[i].PcsalesProduct
        showProductImageLaptopPc.innerHTML += `
            <div class="product__detals-hot">
            <img class="product__detals-img" src="${PcimageProductProductShow}" alt="">
            <div class="product__title">
                <h1>${PclaptopNameProduct}</h1>
                <h2>${PcpriceBflaptoppriceBfBefore}</h2>
                <h3>${PcpricepriceProductAfter}</h3>
                <div class="product__image-hot">
                    <img src="https://theme.hstatic.net/1000026716/1000440777/14/icon-saleoff.png" alt="">
                    <h5>${PcsalesProductShow}</h5>
                </div>
            </div>

        </div>
    `
    }
}

showProductImageLaptopPc()

