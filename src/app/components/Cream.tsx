import React from 'react'



const products = [
    {
      id: 1,
      title: "serum cream",
      category: "fixing",
      price: "2999.99",
      imageUrl:
        "https://www.sephora.com/productimages/sku/s2604130-av-1-zoom.jpg?imwidth=315",
      description: "This is a day cream",
      bgColor: "bg-amber-500",
    },
  
    {
      id: 2,
      title: "Day cream",
      category: "Discount",
      price: "2999.99",
      imageUrl:
        "https://m.media-amazon.com/images/I/81man7EttiL._SL1500_.jpg",
      description: "This is a day cream",
      bgColor: "bg-amber-500",
    },
  
    {
      id: 3,
      title: "night cream",
      category: "Discount",
      price: "2999.99",
      imageUrl:
        "https://i0.wp.com/www.millionidole.com/wp-content/uploads/2018/04/clarins-1440x1292.jpg?resize=1440%2C1292      ",
      description: "This is a day cream",
      bgColor: "bg-amber-500",
    },
  ];
  
  export default function Cream() {
    return (
      <div className="p-1 flex flex-wrap items-center mb-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`flex shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lggroup max-w-sm`}
          >
            <svg
              className="absolute bottom-0 left-0 mb-8 scale-150 group: hover:scale-[]1.65 transition-transform "
              viewBox="0 0 375 283"
              fill="none"
              style={{ opacity: 0.1 }}
            >
              <rect
                x="159.52"
                y="152"
                height="152"
                width="152"
                rx="8"
                transform="rotate(-45 159.52 175)"
                fill="white"
              />
              <rect
                x="159.52"
                y="107.48"
                height="152"
                width="152"
                rx="8"
                transform="rotate(-45 0 107.48)"
                fill="white"
              />
            </svg>
            <div className=" relative pt-10 px-10 flex items-center group-hover:scale-110 transition-transform">
              <div
                className="block absolute w-48 h-48 bottom-0 left-0 -mb 24 ml-3"
                style={{
                  background: "radial-gradient{black, transparant 50% ",
                  transform: "rotate3d(0,0,1 20eg)scale3d(1,0.6,1)",
                  opacity: 0.2,
                }}
              ></div>
              <img
                className="relative w-50"
                src={product.imageUrl}
                alt={product.title}
              />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1"> {product.category}</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">
                  {" "}
                  {product.price}
                </span>
                <span className="block bg-white rounded-full text-orange-500 xs font-bold px-3 py-2 leading-none items-center"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
