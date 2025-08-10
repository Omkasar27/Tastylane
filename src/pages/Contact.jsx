import React, { useState } from "react";


// --- A reusable component for the FAQ accordion items ---
const FaqItem = ({ faq, index, openFaq, setOpenFaq }) => {
  const isOpen = index === openFaq;

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setOpenFaq(isOpen ? null : index)}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
      >
        <span>{faq.question}</span>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen pt-4" : "max-h-0"
        }`}
      >
        <p className="text-gray-600">{faq.answer}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const faqs = [
    {
      question: "How long does delivery usually take?",
      answer:
        "Most orders arrive within 30-45 minutes. Delivery time may vary based on your location, weather conditions, and restaurant preparation time.",
    },
    {
      question: "What's your refund policy?",
      answer:
        "If you're not satisfied with your order, contact us within 1 hour of delivery and we'll make it right with a refund or replacement.",
    },
    {
      question: "Do you deliver 24/7?",
      answer:
        "We deliver from 6 AM to 12 AM daily. Some restaurants may have different hours, which will be shown on their profile page.",
    },
    {
      question: "How can restaurants partner with TastyLane?",
      answer:
        "Restaurant owners can apply for partnership by selecting 'Restaurant Partnership' in the form above or calling our business line at 1-800-PARTNER.",
    },
    {
      question: "Is there a minimum order amount?",
      answer:
        "Minimum order amounts vary by restaurant and are clearly displayed on each restaurant's page. Most range from $10-15.",
    },
  ];

  // --- Icons for the contact info section ---
  const InfoIcon = ({ children }) => (
    <div className="flex-shrink-0 w-12 h-12 bg-red-500 text-white rounded-lg flex items-center justify-center">
      {children}
    </div>
  );

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Get in <span className="text-red-500">Touch</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have a question, suggestion, or need help? We're here to make your
          experience great.
        </p>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 text-lg">
                Find us at our office, drop us a line, or send an email. We're
                ready to assist you.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <InfoIcon>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </InfoIcon>
              <div>
                <h3 className="text-xl font-semibold">Our Address</h3>
                <p className="text-gray-600">
                  342 Food Town Street, Food Lane, 342425
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <InfoIcon>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </InfoIcon>
              <div>
                <h3 className="text-xl font-semibold">Email Us</h3>
                <p className="text-gray-600">hello@tastylane.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <InfoIcon>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </InfoIcon>
              <div>
                <h3 className="text-xl font-semibold">Call Us</h3>
                <p className="text-gray-600">1-800-TASTY-LANE</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500/50 focus:border-red-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500/50 focus:border-red-500"
              />
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500/50 focus:border-red-500"
              >
                <option value="">Select a topic</option>
                <option value="order-issue">Order Issue</option>
                <option value="delivery-problem">Delivery Problem</option>
                <option value="restaurant-partnership">
                  Restaurant Partnership
                </option>
                <option value="general-inquiry">General Inquiry</option>
              </select>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your Message..."
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500/50 focus:border-red-500 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                index={index}
                openFaq={openFaq}
                setOpenFaq={setOpenFaq}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
