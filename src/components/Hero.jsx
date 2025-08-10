import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredRestaurants = [
    {
      id: 1,
      name: "McDonald's",
      image: "https://listqube.com/wp-content/uploads/2022/07/McDonalds_cover.jpg",
      rating: 4.2,
      deliveryTime: "15-25 min",
      cuisine: "Fast Food",
      discount: "20% OFF",
      popular: true,
      originalPrice: "$25.99",
      discountedPrice: "$20.79"
    },
    {
      id: 2,
      name: "KFC",
      image: "https://media.istockphoto.com/id/585595438/photo/kentucky-fried-chicken-retail-fast-food-location-ii.jpg?s=612x612&w=0&k=20&c=MgGB0N_j-_XcwVzXfQrlESdzjKQ4YafD92VQ5lAOnrs=",
      rating: 4.3,
      deliveryTime: "20-30 min",
      cuisine: "Chicken",
      discount: "Free Delivery",
      popular: true,
      originalPrice: "$18.99",
      discountedPrice: "FREE DEL"
    },
    {
      id: 3,
      name: "Subway",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/b6/b1/9a/subway.jpg?w=900&h=500&s=1",
      rating: 4.1,
      deliveryTime: "10-20 min",
      cuisine: "Sandwiches",
      discount: "Buy 1 Get 1",
      popular: false,
      originalPrice: "$12.99",
      discountedPrice: "2 for $12.99"
    },
    {
      id: 4,
      name: "Pizza Hut",
      image: "https://www.allrecipes.com/thmb/myex8vzNqDze-7IaUoeFRF-PhIg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-PizzaHut-Getty-V1-4x3-dacfeeb79aed4f208b8b252ea35cddf1.jpg",
      rating: 4.4,
      deliveryTime: "25-35 min",
      cuisine: "Pizza",
      discount: "30% OFF",
      popular: true,
      originalPrice: "$22.99",
      discountedPrice: "$16.09"
    },
    {
      id: 5,
      name: "Starbucks",
      image: "https://c0.wallpaperflare.com/preview/79/859/750/starbucks-coffee-building.jpg",
      rating: 4.5,
      deliveryTime: "5-15 min",
      cuisine: "Coffee & Drinks",
      discount: "15% OFF",
      popular: true,
      originalPrice: "$8.99",
      discountedPrice: "$7.64"
    },
    {
      id: 6,
      name: "Domino's Pizza",
      image: "https://wallpapers.com/images/hd/dominos-pizza-restaurant-yqqoqa6elrx5ivnk.jpg",
      rating: 4.3,
      deliveryTime: "20-30 min",
      cuisine: "Pizza",
      discount: "25% OFF",
      popular: true,
      originalPrice: "$19.99",
      discountedPrice: "$14.99"
    },
    {
      id: 7,
      name: "Dunkin' Donuts",
      image: "https://media.rnztools.nz/rnz/image/upload/s--79jgD-sE--/c_scale,f_auto,q_auto,w_1050/v1643513636/4NO0453_image_crop_66202?_a=BACCd2AD",
      rating: 4.2,
      deliveryTime: "10-18 min",
      cuisine: "Coffee & Donuts",
      discount: "Free Delivery",
      popular: false,
      originalPrice: "$6.99",
      discountedPrice: "FREE DEL"
    },
    {
      id: 8,
      name: "Taco Bell",
      image: "https://www.shutterstock.com/shutterstock/videos/1079670389/thumb/1.jpg?ip=x480",
      rating: 4.0,
      deliveryTime: "15-25 min",
      cuisine: "Mexican",
      discount: "20% OFF",
      popular: false,
      originalPrice: "$15.99",
      discountedPrice: "$12.79"
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredRestaurants.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [featuredRestaurants.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredRestaurants.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredRestaurants.length) % featuredRestaurants.length);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden py-12 lg:py-20">
      {/* Optimized Background decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-20 relative z-10 gap-12 lg:gap-16">
        
        {/* Left Text Content - Balanced size */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Fresh Meals, <span className="text-red-500 relative">
              Delivered
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-red-500 rounded-full"></div>
            </span> to Your Doorstep
          </h1>
          <p className="text-gray-600 mb-8 text-lg lg:text-xl leading-relaxed max-w-xl">
            Discover delicious dishes from top chefs and local restaurants. Fast delivery, great taste, and unforgettable flavors.
          </p>
          
          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
            <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg">
              🚀 Order Now
            </button>
            <button className="px-8 py-4 border-2 border-red-500 hover:bg-red-500 hover:text-white text-red-500 font-bold rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-lg">
              📱 View Menu
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm lg:text-base">
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-200">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="font-semibold text-green-700">Free Delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="font-semibold text-blue-700">30min Delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full border border-yellow-200">
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="font-semibold text-yellow-700">4.8★ Rating</span>
            </div>
          </div>
        </div>

        {/* Featured Restaurants Section - Optimized size */}
        <div className="flex-1 lg:flex-[1.2] w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-3">
              Featured <span className="text-red-500 relative">
                Restaurants
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-red-500 rounded-full"></div>
              </span>
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl font-medium">🔥 Hottest deals in your area</p>
          </div>

          {/* Restaurant Card Carousel */}
          <div className="relative overflow-hidden rounded-3xl max-w-lg lg:max-w-2xl mx-auto shadow-2xl">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredRestaurants.map((restaurant) => (
                <div key={restaurant.id} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-3xl overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-all duration-500 shadow-xl hover:shadow-2xl">
                    <div className="relative">
                      <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-full h-56 lg:h-64 object-cover hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                      
                      {/* Discount badge */}
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-xl text-sm lg:text-base font-bold shadow-lg">
                        {restaurant.discount}
                      </div>
                      
                      {/* Popular badge */}
                      {restaurant.popular && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-4 py-2 rounded-xl text-sm lg:text-base font-bold shadow-lg">
                          🔥 Popular
                        </div>
                      )}

                      {/* Price display */}
                      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
                        <div className="text-gray-500 line-through text-xs">{restaurant.originalPrice}</div>
                        <div className="text-red-600 font-bold text-sm lg:text-base">{restaurant.discountedPrice}</div>
                      </div>
                    </div>
                    
                    <div className="p-6 lg:p-8">
                      <h3 className="font-black text-2xl lg:text-3xl text-gray-900 mb-3 hover:text-red-500 transition-colors">
                        {restaurant.name}
                      </h3>
                      <p className="text-gray-600 mb-5 text-lg">{restaurant.cuisine}</p>
                      
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <div className="bg-yellow-100 p-1.5 rounded-full">
                            <svg className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          </div>
                          <span className="font-bold text-gray-800 text-xl">{restaurant.rating}</span>
                        </div>
                        <div className="bg-gray-100 px-3 py-2 rounded-lg">
                          <span className="text-gray-700 font-semibold">⏱️ {restaurant.deliveryTime}</span>
                        </div>
                      </div>

                      {/* Main CTA Button */}
                      <button className="w-full py-4 bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg">
                        🛒 ORDER NOW - {restaurant.discountedPrice}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-3 mt-6">
            {featuredRestaurants.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-red-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* View all restaurants CTA */}
          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:from-gray-900 hover:to-black transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              🍽️ View All Restaurants →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;