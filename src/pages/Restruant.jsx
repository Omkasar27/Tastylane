import React, { useState } from "react";


const Restaurants = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  // --- ICONS  ---
  const SearchIcon = () => (
    <svg
      className="w-5 h-5 text-gray-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );

  const StarIcon = () => (
    <svg
      className="w-5 h-5 text-yellow-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  const ClockIcon = () => (
    <svg
      className="w-5 h-5 text-gray-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  );

  const restaurants = [
    {
      id: 1,
      name: "Domino's Pizza",
      category: "Pizza",
      rating: 4.5,
      deliveryTime: "25-35 min",
      deliveryFee: "Free",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpmzhGQxQDyIjhDRs09pFopaQRpMjXXonMRg&s",
      tags: ["Popular"],
    },
    {
      id: 2,
      name: "KFC",
      category: "Fried Chicken",
      rating: 4.4,
      deliveryTime: "20-30 min",
      deliveryFee: "$1.99",
      image: "https://b.zmtcdn.com/data/pictures/chains/5/90195/24697b617bb8aaf5b1c7df9a7074a662.jpg?fit=around|750:500&crop=750:500;*,*",
      tags: ["Popular"],
    },
    {
      id: 3,
      name: "McDonald's",
      category: "Burgers",
      rating: 4.3,
      deliveryTime: "15-25 min",
      deliveryFee: "$2.49",
      image:
        "https://www.shutterstock.com/image-photo/282022-double-mcdonalds-hamburger-combo-260nw-2150568447.jpg",
      tags: [],
    },
    {
      id: 4,
      name: "Subway",
      category: "Sandwiches",
      rating: 4.6,
      deliveryTime: "15-20 min",
      deliveryFee: "Free",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFPyg6N-Z51ndufYvBvyN-oUe8tMc4IxOrw&s",
      tags: ["Healthy Choice"],
    },
    {
      id: 5,
      name: "Starbucks",
      category: "Coffee",
      rating: 4.8,
      deliveryTime: "10-15 min",
      deliveryFee: "$3.99",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc04AHM_-3F1WLk3-DGTOu0FLT0FB8vKYYSQ&s",
      tags: ["Premium"],
    },
    {
      id: 6,
      name: "Dunkin' Donuts",
      category: "Donuts",
      rating: 4.7,
      deliveryTime: "10-20 min",
      deliveryFee: "Free",
      image: "https://content.jdmagicbox.com/v2/comp/hyderabad/a8/040pxx40.xx40.150411122722.h1a8/catalogue/dunkin-donuts-and-more-madhapur-hyderabad-bakeries-3fjs51m.jpg",
      tags: ["Popular"],
    },
  ];

 
  const categories = [
    "All",
    "Pizza",
    "Fried Chicken",
    "Burgers",
    "Sandwiches",
    "Coffee",
    "Donuts",
  ];

  // --- Filtering and Sorting Logic  ---
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesCategory =
      selectedCategory === "All" || restaurant.category === selectedCategory;
    const matchesSearch =
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedRestaurants = [...filteredRestaurants].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "deliveryTime":
        return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  // --- Main Component JSX ---
  return (
    <div className="bg-white min-h-screen font-sans">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* --- Hero Section --- */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Find the best food
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-[#FF3A46]">delivered</span> to your door
          </h2>
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search for a restaurant or a dish"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF3A46]/50"
            />
          </div>
        </section>

        {/* --- Filters & Sort --- */}
        <section className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center overflow-x-auto pb-2 -mb-2 gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-[#FF3A46] text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <label htmlFor="sort" className="text-gray-700 font-medium">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-[#FF3A46] focus:border-[#FF3A46]"
              >
                <option value="rating">Top Rated</option>
                <option value="deliveryTime">Delivery Time</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>
          </div>
        </section>

        {/* --- Restaurant Grid --- */}
        <section>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            All Restaurants ({sortedRestaurants.length})
          </h3>
          {sortedRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedRestaurants.map((restaurant) => (
                <div
                  key={restaurant.id}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
                >
                  {/* Card Image */}
                  <div className="relative">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                    {restaurant.tags.includes("Popular") && (
                      <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                        Popular
                      </span>
                    )}
                    {restaurant.deliveryFee === "Free" && (
                      <span className="absolute top-3 right-3 bg-[#FF3A46] text-white px-3 py-1 rounded-full text-xs font-bold">
                        Free Delivery
                      </span>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {restaurant.name}
                    </h4>
                    <p className="text-gray-500 mb-4">{restaurant.category}</p>

                    <div className="flex items-center justify-between text-gray-700 font-medium mb-6">
                      <div className="flex items-center gap-2">
                        <StarIcon />
                        <span>{restaurant.rating}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ClockIcon />
                        <span>{restaurant.deliveryTime}</span>
                      </div>
                    </div>

                    <button className="w-full mt-auto bg-[#FF3A46] hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center">
                      ORDER NOW
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // --- No Results Found ---
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <SearchIcon />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                No Restaurants Found
              </h3>
              <p className="text-gray-600 mb-6">
                Try changing your filters or search term.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchTerm("");
                }}
                className="bg-[#FF3A46] hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </section>
      </main>

    </div>
  );
};

export default Restaurants;
