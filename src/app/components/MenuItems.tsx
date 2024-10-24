import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductCardGrid = () => {
  const productImages = [
    "https://m.media-amazon.com/images/I/81dmLaHbRrL.jpg", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHmUIXew_n4QDs89zYV79yVr5rgdbuz4eAoA&s",
    "https://d3dxkzk9npnkec.cloudfront.net/uploads/images/202402/img_x500_65d7b486c761e0-93261687-40267880.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS28OzN9PgMya82IaJnUlHQCnzqZs5PtFDVCYLhxRkyVZHOiEOXr77-ythTmBO4q9cxeMU&usqp=CAU",
    "https://media-cdn.printemps.com/image/68/5/4348685.jpg?fit=bounds&bg-color=FFFFFF&width=571&height=782&canvas=571-782",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQamdJrmNZeILUlBOK_EsfR0_LP8Qcsm5V8Tg&s"
  ];

  return (
    <div id="order" className="relative text-center p-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://i.pinimg.com/564x/58/c6/29/58c6290a49601366f248962eb0f9e8bb.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.1,
        }}
      />

      <h1 className="font-bold text-4xl text-white z-10 relative">
        Most Requested products
      </h1>
      <h2 className="text-3xl text-white z-10 relative">Order Now..!</h2>

      <section 
        id="Projects"
        className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-full max-w-xs bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
          >
            <a href="#">
              <img 
                src={productImages[index]}
                alt={`Product ${index + 1}`}
                className="h-80 w-full object-cover rounded-t-xl" 
              />
              <div className="px-4 py-3 w-full">
                <span className="text-slate-500 mr-3 uppercase text-xs">Category</span>
                <p className="text-lg font-bold text-red-700 truncate block capitalize">cream name {index + 1}</p>

                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black my-3 cursor-auto">$149</p>

                  <del>
                    <p className="text-blue-800 cursor-auto ml-2">$199</p>
                  </del>

                  <div className="ml-auto">
                    <FaShoppingCart className="w-5 h-5 text-blue-800" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductCardGrid;