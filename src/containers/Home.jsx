import BannerImg from "./../assets/banner.jpg";
import ProductBox from "../components/ProductBox";
import CategoryBox from "../components/CategoryBox";

function Home() {
  const categories = [
    {
      id: "electronics",
      name: "Electronics",
      href: "/",
      img: "electronics.jpg",
    },
    { id: "jewelery", name: "Jewelery", href: "/", img: "jewelery.jpg" },
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
  const topRatedProducts = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image:
        "https://i.pinimg.com/736x/f9/1e/3d/f91e3dcb07c6a31c339eedfab213c358.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://i.pinimg.com/564x/88/74/2a/88742a4009a74fc1fc9d4b090663be69.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image:
        "	https://i.pinimg.com/564x/4d/3e/d4/4d3ed4295421242828a39859e2fad20e.jpg",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image:
        "	https://i.pinimg.com/564x/6a/2b/f6/6a2bf6a50bb54254304d441c58cd62be.jpg",
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image:
        "https://i.pinimg.com/564x/96/b5/56/96b556e7282ff663097949bbfd45756f.jpg",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
  ];
  return (
    <div>
      <div className="relative h-[60vh] sm:h-[500px]">
        <img
          src={BannerImg}
          className="absolute top-0 left-0 h-[60vh] sm:h-[500px] w-full object-cover"
        />
        <div className="backdrop-blur-sm bg-white/40 h-full flex flex-col items-center justify-center text-center text-gray-800">
          <h1 className="text-5xl sm:text-6xl font-bold">
            New arrivals are here
          </h1>
          <p className="text-lg sm:text-xl w-11/12 sm:w-8/12 mx-auto mt-2 font-semibold">
            The new arrivals have, well, newly arrived. Check out the latest
            options from our summer small-batch release while theyre still in
            stock.
          </p>
          <button className="btn mt-4">Shop New Arrivals</button>
        </div>
      </div>
      {/* <div className="my-16">
        <h2 className="text-xl sm:text-2xl font-bold uppercase">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 mt-4">
          {categories.map((cat, index) => {
            return <CategoryBox key={index} {...cat} />;
          })}
        </div>
      </div> */}
      <div className="my-16">
        <h2 className="text-xl sm:text-2xl font-bold uppercase">
          Trending Products
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 mt-4">
          {topRatedProducts.map((product, index) => {
            return <ProductBox key={index} {...product} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
