import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import HeroBG from './assets/HeroBG.png';
import MapImage from './assets/Map.png';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    emailAddress: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    console.log(formData);

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
        setFormData({ name: '', contactNumber: '', emailAddress: '' });
      } else {
        setSubmitMessage('Something went wrong. Please try again.');
      }
    } catch {
      setSubmitMessage('Error submitting form. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-800">Acme Co</div>
            <div className="flex space-x-8 items-center">
              <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Services</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="relative text-white bg-cover bg-center max-w-5xl mx-auto my-6 rounded-lg"
        style={{
          backgroundImage: `url(${HeroBG})`,
          height: "500px",
        }}
      >

        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>

        <div className="relative h-full flex items-end justify-end px-6 py-6">
          <div className="max-w-3xl text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Connect with Us
            </h1>
            <p className="text-lg text-gray-200">
              We're here to help. Reach out to us with any questions or inquiries you may have. Our team is dedicated to providing prompt and helpful assistance. Subtle icons related to communication and support are integrated into the background.
            </p>
          </div>
        </div>
      </div>


      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-1 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">How to Reach Us</h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              We offer multiple ways to get in touch, ensuring you can reach us through your preferred method. Our team is ready to assist you with any inquiries or support you may need.
            </p>

            <div className="flex flex-col md:flex-row gap-6">

              {/* Phone */}
              <div className="flex-col flex items-start space-x-1 p-6 flex-1 border border-gray-300 rounded-lg shadow-sm">
                <div className=" p-1 rounded-lg">
                  <Phone className="h-4 w-4 text-black-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">Call us directly during business hours for immediate assistance.</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex-col flex items-start space-x-1 p-6 flex-1 border border-gray-300 rounded-lg shadow-sm">
                <div className="p-1 rounded-lg">
                  <Mail className="h-4 w-4 text-black-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">Send us an email, and we'll respond within 24 hours.</p>
                </div>
              </div>

              {/* Address */}
              <div className=" flex-col flex items-start space-x-1 p-6 flex-1 border border-gray-300 rounded-lg shadow-sm">
                <div className=" p-1 rounded-lg">
                  <MapPin className="h-4 w-4 text-black-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600">Visit our office located in the heart of the city.</p>
                </div>
              </div>

            </div>



            <div className="mt-12">
              <p className=" text-gray-600">
                Interested in learning more? Fill out the form below to request a demo or inquire about our services.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="  max-w-5xl">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg 
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              {/* Contact Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Your Contact Number"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg 
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="emailAddress"
                  placeholder="Your Email Address"
                  value={formData.emailAddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg 
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-end">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold 
                   hover:bg-blue-600 transition duration-200 disabled:bg-blue-300"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>

            </div>

            {submitMessage && (
              <div
                className={`mt-4 p-3 rounded-lg ${submitMessage.includes('Thank you')
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
                  }`}
              >
                {submitMessage}
              </div>
            )}
          </div>

        </div>


        {/* Map Section */}
        <div className="mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2932557547104!2d-122.41941518468395!3d37.77492977975992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f74e3c0ed%3A0x4e2e0a6e7e3f8c9a!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1673880312345!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>

      </div>

      {/* Footer */}
      <footer className=" text-white py-8 ">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center w-full">
            <a href="#" className="text-gray-800 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-800 hover:text-white">Terms of Service</a>
          </div>

          <div className="text-gray-800 text-sm mt-4 text-center">
            ©2024 Acme Co. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUsPage;
