import React from 'react';

const Populardishes = () => {
  // Sample popular dishes data - replace with your actual data
  const popularDishes = [
    {
      id: 1,
      name: "Margherita Pizza",
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop&crop=center",
      category: "Pizza",
      price: "$24.99",
      originalPrice: "$29.99",
      rating: 4.8,
      reviews: 256,
      description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil",
      cookTime: "15-20 min",
      isVeg: true,
      discount: "20% OFF"
    },
    {
      id: 2,
      name: "BBQ Bacon Burger",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&crop=center",
      category: "Burgers",
      price: "$18.99",
      originalPrice: "$22.99",
      rating: 4.9,
      reviews: 189,
      description: "Juicy beef patty with BBQ sauce, crispy bacon, and caramelized onions",
      cookTime: "12-15 min",
      isVeg: false,
      discount: "18% OFF"
    },
    {
      id: 3,
      name: "Creamy Alfredo Pasta",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6OZBE3ytkkHYZ9iRWTmki4F9IKMXGo6D0w&s",
      category: "Pasta",
      price: "$16.99",
      originalPrice: "$19.99",
      rating: 4.7,
      reviews: 143,
      description: "Rich and creamy alfredo sauce with perfectly cooked fettuccine",
      cookTime: "10-12 min",
      isVeg: true,
      discount: "15% OFF"
    },
    {
      id: 4,
      name: "Chocolate Lava Cake",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop&crop=center",
      category: "Desserts",
      price: "$12.99",
      originalPrice: "$15.99",
      rating: 4.9,
      reviews: 298,
      description: "Warm chocolate cake with molten center, served with vanilla ice cream",
      cookTime: "8-10 min",
      isVeg: true,
      discount: "19% OFF"
    },
    {
      id: 5,
      name: "Fresh Caesar Salad",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop&crop=center",
      category: "Salads",
      price: "$13.99",
      originalPrice: "$16.99",
      rating: 4.6,
      reviews: 167,
      description: "Crisp romaine lettuce with parmesan, croutons, and caesar dressing",
      cookTime: "5-8 min",
      isVeg: true,
      discount: "18% OFF"
    },
    {
      id: 6,
      name: "Tropical Smoothie",
      image: "https://www.eatingwell.com/thmb/CokPYaf2YPnPACHBls_LVhyUp0g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/healthy-breakfast-smoothie-8029983-4000x4000-3e02d40929c8410c877a171a235c99bc.jpg",
      category: "Drinks",
      price: "$8.99",
      originalPrice: "$10.99",
      rating: 4.5,
      reviews: 124,
      description: "Refreshing blend of mango, pineapple, coconut, and banana",
      cookTime: "2-3 min",
      isVeg: true,
      discount: "18% OFF"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Title Section - matching Categories style */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            <span className="text-red-500">Popular</span> Dishes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Taste the favorites! Our most loved dishes, handpicked by food lovers just like you. 
            Fresh ingredients, amazing flavors, and unbeatable satisfaction.
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {popularDishes.map((dish, index) => (
            <div
              key={dish.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {dish.discount}
                </div>
                
                {/* Veg/Non-veg indicator */}
                <div className={`absolute top-4 right-4 w-6 h-6 rounded-sm flex items-center justify-center ${
                  dish.isVeg ? 'bg-green-500' : 'bg-red-600'
                } shadow-lg`}>
                  <div className={`w-2 h-2 rounded-full ${dish.isVeg ? 'bg-white' : 'bg-white'}`}></div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Quick action button */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Category and Cook Time */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-red-500 font-semibold bg-red-50 px-2 py-1 rounded-full">
                    {dish.category}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                    {dish.cookTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-500 transition-colors duration-300">
                  {dish.name}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {dish.description}
                </p>

                {/* Rating and Reviews */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span className="text-sm font-semibold text-gray-700">{dish.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({dish.reviews} reviews)</span>
                </div>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-800">{dish.price}</span>
                    <span className="text-sm text-gray-500 line-through">{dish.originalPrice}</span>
                  </div>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-red-200 transform hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute -bottom-1 -right-1 w-16 h-16 bg-red-500/10 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-red-500 text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-red-600 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-red-200">
            View All Dishes
          </button>
          <p className="text-gray-500 mt-4">
            Discover more amazing dishes from our full menu
          </p>
        </div>
      </div>
    </section>
  );
};

export default Populardishes;