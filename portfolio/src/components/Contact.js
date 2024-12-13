import React from 'react';

function Contact() {
  return (
    <div className='flex flex-col items-center p-6 bg-gray-100 min-h-screen'>
      <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>Contact Us</h2>
      <form className='flex flex-col w-full max-w-md space-y-4 bg-white shadow-lg rounded-lg p-6'>
        {/* Name Input */}
        <label className='flex flex-col'>
          <span className='text-gray-700 font-medium mb-1'>Name</span>
          <input 
            type='text' 
            placeholder='Enter your name' 
            required 
            className='p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300'
          />
        </label>
        {/* Email Input */}
        <label className='flex flex-col'>
          <span className='text-gray-700 font-medium mb-1'>Email</span>
          <input 
            type='email' 
            placeholder='Enter your email' 
            required 
            className='p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300'
          />
        </label>
        {/* Message Textarea */}
        <label className='flex flex-col'>
          <span className='text-gray-700 font-medium mb-1'>Message</span>
          <textarea 
            placeholder='Write your message' 
            required 
            rows={5} 
            className='p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300'
          />
        </label>
        {/* Submit Button */}
        <button 
          type='submit' 
          className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
