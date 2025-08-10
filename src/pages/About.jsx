import React from "react";


// --- Icon Components for clarity and consistency ---
const QualityIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const SpeedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const CommunityIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const AboutPage = () => {
  return (
    // Set a single, consistent background color for the entire page
    <div className="bg-white text-gray-800">
      {/* --- Hero Section --- */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                We're not just fast, we're{" "}
                <span className="text-red-500">family</span>.
              </h1>
              <p className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0">
                Connecting food lovers with their favorite local restaurants
                through fast, fresh, and friendly delivery.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop"
                alt="A chef preparing a delicious meal"
                className="rounded-2xl shadow-2xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Stats Section --- */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-xl shadow-lg border-0 outline-none">
              <div className="text-5xl font-bold text-red-500">50K+</div>
              <div className="text-lg mt-2 text-gray-600">Happy Customers</div>
            </div>
            <div className="p-8 rounded-xl shadow-lg border-0 outline-none">
              <div className="text-5xl font-bold text-red-500">200+</div>
              <div className="text-lg mt-2 text-gray-600">
                Partner Restaurants
              </div>
            </div>
            <div className="p-8 rounded-xl shadow-lg border-0 outline-none">
              <div className="text-5xl font-bold text-red-500">30min</div>
              <div className="text-lg mt-2 text-gray-600">Average Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Our Story Section --- */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop"
                alt="A variety of fresh food on a table"
                className="rounded-2xl shadow-xl object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Founded in 2025, TastyLane started with a simple mission: make
                great food accessible to everyone. We believe that delicious
                meals should be just a few taps away, whether you're craving
                comfort food or exploring new cuisines.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Today, we've built a network of trusted restaurant partners and
                dedicated delivery professionals who share our passion for
                bringing exceptional food experiences to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Values Section --- */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose TastyLane?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We're committed to making your food delivery experience
              exceptional every time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 text-center rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 border-0 outline-none">
              <div className="w-20 h-20 bg-red-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <QualityIcon />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quality Promise</h3>
              <p className="text-gray-600 leading-relaxed">
                Every restaurant partner is carefully selected to meet our high
                standards for freshness, taste, and quality.
              </p>
            </div>

            <div className="p-8 text-center rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 border-0 outline-none">
              <div className="w-20 h-20 bg-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <SpeedIcon />
              </div>
              <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                Our optimized delivery network ensures your food arrives hot and
                fresh, right when you expect it.
              </p>
            </div>

            <div className="p-8 text-center rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 border-0 outline-none">
              <div className="w-20 h-20 bg-green-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <CommunityIcon />
              </div>
              <h3 className="text-2xl font-bold mb-4">Community Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                We're proud to support local restaurants and bring communities
                together through a shared love of great food.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Call to Action Section --- */}
      <section className="bg-red-500">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            <span className="block">Ready to experience TastyLane?</span>
          </h2>
          <p className="mt-4 text-xl text-red-100">
            Join thousands of food lovers who trust us for their daily meal
            delivery.
          </p>
          <a
            href="/restaurants" 
            className="mt-8 w-full inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-lg shadow-md text-red-600 bg-white font-bold text-lg hover:bg-red-50 sm:w-auto"
          >
            Start Ordering Now
          </a>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
