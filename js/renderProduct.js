let products = [
    {
        name: `Màn hình máy tính Xiaomi 27" A27i (Full HD/IPS/100Hz/6ms)`,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsjaq7ktia3d97.webp",
        link: "https://s.shopee.vn/1LNEaDzUbn"
    }, {
        name: `Xiaomi Youpin Đèn Treo Màn Hình Máy Tính Lymax Bảo Vệ Mắt Cho Văn Phòng Trường Học`,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lhiial9hyqwx2b.webp",
        link: "https://s.shopee.vn/6fOl6qGBH9"
    }, {
        name: `Bộ Bàn Phím Chuột Bluetooth Không Dây Ziyou M87 LED Kết Nối Đa Năng Chơi Game Dùng Văn Phòng`,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmef9udpm8rjb2@resize_w450_nl.webp",
        link: "https://s.shopee.vn/6fOl7LYng0"
    }, {
        name: `Arm Màn Hình - Giá treo màn hình EDRA EMA7302 (22" – 34") Chính Hãng`,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyl0e8e0wd5td3.webp",
        link: "https://s.shopee.vn/6fOl7hhVoy"
    }, {
        name: `Đèn Led Màn Hình Ambilight Skydimo'nd RAINBOW MUSIC LED | Usb | Độ mượt 60 fps | 100 hiệu ứng nhạc`,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzglh3pisfc193@resize_w450_nl.webp",
        link: "https://s.shopee.vn/Vo7mBn5bh"
    }, {
        name: `Miếng Lót Chuột Cỡ Lớn, Thảm Nỉ Trải Bàn Làm Việc, Deskpad nỉ lớn Full bàn 120x60, 100x50, 90x40, 80x30`,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lkdef9gr69p89c.webp",
        link: "https://s.shopee.vn/BBHNh2zZx"
    }
]

let url = location.href


let productsHtml
if(url.includes("shop")) productsHtml = products.map(product => {
    return `
        <div class="col-sm-6 col-md-4 col-lg-3">
          <div class="box">
            <a href="${product.link}">
              <div class="img-box">
                <img src="${product.image}" alt="">
              </div>
              <div class="detail-box">
                <h6>
                    ${product.name}
                </h6>
              </div>
              <div class="new">
                <img src="../images/shopee-logo.png" style="width: 50px" />
              </div>
            </a>
          </div>
        </div>
    `
}).join("");
else productsHtml = products.map((product, i) => {
    if(i < 4) return `
        <div class="col-sm-6 col-md-4 col-lg-3">
          <div class="box">
            <a href="${product.link}">
              <div class="img-box">
                <img src="${product.image}" alt="">
              </div>
              <div class="detail-box">
                <h6>
                    ${product.name}
                </h6>
              </div>
              <div class="new">
                <img src="../images/shopee-logo.png" style="width: 50px" />
              </div>
            </a>
          </div>
        </div>
    `
}).join("");
console.log(productsHtml);


document.querySelector(".shop_section .row").innerHTML = productsHtml;