import ProductBox from "../components/ProductBox";

function Products() {
  const productList = [
    {
      id: 1,
      title: "Foldsack No. 1 Backpack, Fits 15 Laptop",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      images:["https://i.pinimg.com/736x/f9/1e/3d/f91e3dcb07c6a31c339eedfab213c358.jpg","	https://i.pinimg.com/564x/08/e4/24/08e424ee2d902864f5527716db878f3f.jpg"],
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      images:
        ["https://i.pinimg.com/564x/88/74/2a/88742a4009a74fc1fc9d4b090663be69.jpg"],
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      images:
        ["https://i.pinimg.com/564x/4d/3e/d4/4d3ed4295421242828a39859e2fad20e.jpg"],
      rating: { rate: 4.7, count: 500 },
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      images:
        ["https://i.pinimg.com/564x/6a/2b/f6/6a2bf6a50bb54254304d441c58cd62be.jpg"],
      rating: { rate: 2.1, count: 430 },
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      images:
        ["https://i.pinimg.com/564x/96/b5/56/96b556e7282ff663097949bbfd45756f.jpg"],
      rating: { rate: 4.6, count: 400 },
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      images:
        ["https://i.pinimg.com/564x/85/7e/de/857ede1496174e87fc1bf9e795b81437.jpg", "	https://i.pinimg.com/564x/49/71/89/497189c7e25a81ad14d648c963ec5aaf.jpg"],
      rating: { rate: 3.9, count: 70 },
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      images:
        ["https://i.pinimg.com/236x/be/d2/1a/bed21a4e3ca66a431e6495e9f89dfe68.jpg"],
      rating: { rate: 3, count: 400 },
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      images:
        ["https://i.pinimg.com/564x/31/97/71/319771c0a65370036482db4c1e9a9858.jpg"],
      rating: { rate: 1.9, count: 100 },
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      images:
        ["https://i.pinimg.com/564x/99/eb/e1/99ebe18da1a58380164957c0d4dfb889.jpg"],
      rating: { rate: 3.3, count: 203 },
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      description:
        "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      category: "electronics",
      images:
        ["https://i.pinimg.com/564x/f0/56/51/f05651c2968a6951e3d376a127df30c1.jpg"],
      rating: { rate: 2.9, count: 470 },
    },
    {
      id: 11,
      title:
        "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      price: 109,
      description:
        "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      category: "electronics",
      images:
        ["https://i.pinimg.com/236x/b6/ff/54/b6ff54b876fde97af1d9b68b807fc913.jpg"],
      rating: { rate: 4.8, count: 319 },
    },
    {
      id: 12,
      title:
        "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      price: 114,
      description:
        "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      category: "electronics",
      images:
        ["https://i.pinimg.com/236x/3f/bb/4c/3fbb4c18e5c833aa2f694ca894ec11da.jpg"],
      rating: { rate: 4.8, count: 400 },
    },
    {
      id: 13,
      title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      price: 599,
      description:
        "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
      category: "electronics",
      images: ["https://i.pinimg.com/564x/2d/31/52/2d3152d0a8977779fdf0f6e6f3284b5f.jpg"],
      rating: { rate: 2.9, count: 250 },
    },
    {
      id: 14,
      title:
        "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
      price: 999.99,
      description:
        "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color",
      category: "electronics",
      images: ["https://i.pinimg.com/564x/af/fd/f9/affdf90fc55684716b305708b04676c9.jpg"],
      rating: { rate: 2.2, count: 140 },
    },
    {
      id: 15,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      price: 56.99,
      description:
        "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly",
      category: "women's clothing",
      images: ["https://i.pinimg.com/564x/c3/dc/d1/c3dcd195544adafa5edbcdb89f885b44.jpg","https://i.pinimg.com/564x/18/37/e9/1837e9a818187a91c3132b1facce31ed.jpg"],
      rating: { rate: 2.6, count: 235 },
    },
    {
      id: 16,
      title:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      price: 29.95,
      description:
        "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
      category: "women's clothing",
      images: ["https://i.pinimg.com/564x/eb/41/50/eb415095e13b67ca34f4e6eafbc1e438.jpg","https://i.pinimg.com/564x/5b/67/07/5b670724f878a3e113948133e2015293.jpg"],
      rating: { rate: 2.9, count: 340 },
    },
    {
      id: 17,
      title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      price: 39.99,
      description:
        "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes",
      category: "women's clothing",
      images: ["https://i.pinimg.com/564x/a2/5a/0e/a25a0e0b62af6e29acdf4ece5eee955d.jpg","https://i.pinimg.com/564x/7c/f8/b9/7cf8b98c8179bd1624cd99a368c0dfb9.jpg"],
      rating: { rate: 3.8, count: 679 },
    },
    {
      id: 18,
      title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
      price: 9.85,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
      images: ["https://i.pinimg.com/564x/36/98/53/3698536b2f41bb61408d22d21f28f2e9.jpg"],
      rating: { rate: 4.7, count: 130 },
    },
    {
      id: 19,
      title: "Opna Women's Short Sleeve Moisture",
      price: 7.95,
      description:
        "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      category: "women's clothing",
      images: ["https://i.pinimg.com/564x/61/e9/9c/61e99c5aedab955fad3db95579eeb70c.jpg"],
      rating: { rate: 4.5, count: 146 },
    },
    {
      id: 20,
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: 12.99,
      description:
        "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      category: "women's clothing",
      images: ["https://i.pinimg.com/564x/ad/f3/93/adf393f4170db11d2143ade0aa1250c9.jpg"],
      rating: { rate: 3.6, count: 145 },
    },
  ];

  const categories = [
    {
      id: "electronics",
      name: "Electronics",
      href: "/",
      img: "electronics.jpg",
    },
    {
      id: "jewelery",
      name: "Jewelery",
      href: "/",
      img: "jewelery.jpg",
    },
    {
      id: "men's clothing",
      name: "Men's Clothing",
      href: "/",
      img: "men's clothing.jpg",
    },
    {
      id: "women's clothing",
      name: "Women's Clothing",
      href: "/",
      img: "women's clothing.jpg",
    },
  ];

  return (
    <div>
      <div className="my-8 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="bg-white shadow rounded p-4 lg:col-span-1">
          <div className="mb-8">
            <div className="font-semibold mb-4 uppercase">
              Filter By
              <span className="float-right capitalize text-xs text-indigo-500 cursor-pointer hover:underline hover:underline-offset-2">
                Clear
              </span>
            </div>
            {categories.map((cat, index) => (
              <label
                key={index}
                className="block cursor-pointer mb-2 text-sm text-gray-500 hover:text-indigo-500"
              >
                <input type="checkbox" className="mr-1" />
                {cat.name}
              </label>
            ))}
          </div>
          <div className="border-t">
            <div className="font-semibold mt-8 mb-4 uppercase">Sort By</div>
            <div className="cursor-pointer mb-2 text-sm text-indigo-500 hover:text-indigo-500">
              Recommend
            </div>
            <div className="cursor-pointer mb-2 text-sm text-gray-500 hover:text-indigo-500">
              Rating
            </div>
            <div className="cursor-pointer mb-2 text-sm text-gray-500 hover:text-indigo-500">
              Price: Low to High
            </div>
            <div className="cursor-pointer mb-2 text-sm text-gray-500 hover:text-indigo-500">
              Price: High to Low
            </div>
          </div>
        </div>
        <div className="col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {productList.map((product, index) => (
            <div key={index} className="bg-white shadow rounded p-4">
              <ProductBox {...product} imgHeight="h-60" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
