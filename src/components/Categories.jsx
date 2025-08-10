import React from "react";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Pizza",
      image: "https://www.moulinex-me.com/medias/?context=bWFzdGVyfHJvb3R8MTQzNTExfGltYWdlL2pwZWd8YUdObEwyaG1aQzh4TlRrMk9EWXlOVGM0TmpreE1DNXFjR2N8MmYwYzQ4YTg0MTgzNmVjYTZkMWZkZWZmMDdlMWFlMjRhOGIxMTQ2MTZkNDk4ZDU3ZjlkNDk2MzMzNDA5OWY3OA",
      description: "Cheesy goodness in every bite.",
      longDescription: "Wood-fired pizzas with fresh ingredients and authentic Italian flavors."
    },
    {
      id: 2,
      name: "Burgers",
      image: "https://images.ctfassets.net/lufu0clouua1/C7rtQyDeXYr5lvyMaiEzX/3b3cdfec72a95f1803b1ce182aeb224f/burgers-lbm.jpg",
      description: "Juicy, tasty, and satisfying.",
      longDescription: "Premium beef patties with fresh vegetables and artisanal buns."
    },
    {
      id: 3,
      name: "Pasta",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGxJQNLQ_tpfDqgGfFpEARarc7qNGTDVEYg&s",
      description: "Italian classics you'll love.",
      longDescription: "Handmade pasta with traditional recipes and rich sauces."
    },
    {
      id: 4,
      name: "Desserts",
      image: "https://www.southernliving.com/thmb/l7INZHNOP2-MzwCCq6gt7z3y_fE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Peanut_Butter_Pretzel_Pie_012-09c44a5d8f164dbeb149035b5eae14fe.jpg",
      description: "Sweet treats for any mood.",
      longDescription: "Decadent desserts made with premium chocolate and fresh fruits."
    },
    {
      id: 5,
      name: "Drinks",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwcsnQFO8LMApDVIcOyW6uvakSuHHALDBZKQ&s",
      description: "Refreshing beverages anytime.",
      longDescription: "From energizing coffees to refreshing smoothies and juices."
    },
    {
      id: 6,
      name: "Salads",
      image: "https://s.lightorangebean.com/media/20240914140746/Vegan-Southwest-Salad_-done.png",
      description: "Fresh and healthy goodness.",
      longDescription: "Garden-fresh salads with organic vegetables and house dressings."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Enhanced Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Explore Our <span className="text-red-500">Categories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover delicious dishes from top chefs and local restaurants. Fast 
            delivery, great taste, and unforgettable flavors — all in one place.
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Enhanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                  <span className="text-sm font-semibold text-gray-700">Popular</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-500 transition-colors duration-300">
                  {category.name}
                </h3>
                
                <p className="text-gray-600 font-medium mb-4 text-lg">
                  {category.description}
                </p>
                
                <p className="text-gray-500 mb-6 leading-relaxed">
                  {category.longDescription}
                </p>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-red-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-red-200">
                    Order Now
                  </button>
                  <button className="px-4 py-3 border-2 border-gray-200 rounded-lg text-gray-600 hover:border-red-500 hover:text-red-500 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-red-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute -top-1 -right-1 w-20 h-20 bg-red-500/10 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500 to-orange-500"></div>
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
                </svg>
              </div>
              
              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                Ready to <span className="text-red-500">Order</span>?
              </h3>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Browse our full menu and get your favorite dishes delivered fresh to your doorstep. 
                Fast delivery, great taste guaranteed!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <button className="bg-red-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-600 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-red-200">
                  Order Now
                </button>
                <button className="border-2 border-red-500 text-red-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-red-200">
                  View Full Menu
                </button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex justify-center items-center gap-8 mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">30min</div>
                  <div className="text-sm text-gray-600">Fast Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">100+</div>
                  <div className="text-sm text-gray-600">Menu Items</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">4.8★</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;