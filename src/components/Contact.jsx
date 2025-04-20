import { useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null);
  const [statusColor, setStatusColor] = useState('text-green-400');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Ensure all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }
  
    // Get the current date and time
    // const currentDate = new Date().toLocaleString();
  
    // Send the email via EmailJS
    emailjs.send(
      'service_rb4h00c', // Your service ID
      'template_k6b1v6n', // Your template ID
      {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message,
      },
      'kZJwGxCRj_6ERsiBH' // Your User ID
    )    
      .then(
        (response) => {
          console.log('Success:', response);
          setStatus('Your message has been sent!');
          setFormData({ name: '', email: '', message: '' }); // Reset the form
        },
        (error) => {
          console.error('Error:', error);
          setStatus('Failed to send message. Please try again.');
        }
      );
  };
  

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-12 bg-gray-900 text-white"
    >
      <div className="w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-blue-400 mb-4 text-center">Contact</h2>
        <p className="mb-8 text-center text-gray-300">
          Feel free to reach out by filling out the form below:
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-300">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Message Input */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-300">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="5"
              required
            />
          </div>

          {/* Status Message */}
          {status && (
            <p className={`text-sm text-center mt-2 ${statusColor}`}>
              {status}
            </p>
          )}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
