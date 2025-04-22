import React, { useState } from 'react';
import './adminCss/Scholarshp.css'
const ScholarshipPost = () => {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    image: '',
    benefits: '',
    requirements: '',
    eligibilityCriteria: '',
    deadline: '',
    applicationProcess: '',
    officialLink: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/scholarships', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          benefits: formData.benefits.split(','), // Convert to array
          requirements: formData.requirements.split(','), // Convert to array
          eligibilityCriteria: formData.eligibilityCriteria.split(','), // Convert to array
        }),
      });

      if (response.ok) {
        alert('Scholarship posted successfully!');
        setFormData({
          name: '',
          country: '',
          image: '',
          benefits: '',
          requirements: '',
          eligibilityCriteria: '',
          deadline: '',
          applicationProcess: '',
          officialLink: '',
        });
      } else {
        alert('Failed to post scholarship.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while posting the scholarship.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Post a Scholarship</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Scholarship Name */}
        <div>
          <label className="block text-gray-700">Scholarship Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Country */}
        <div>
          <label className="block text-gray-700">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        {/* Image URL */}
        <div>
          <label className="block text-gray-700">Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Benefits */}
        <div>
          <label className="block text-gray-700">Benefits (comma separated)</label>
          <input
            type="text"
            name="benefits"
            value={formData.benefits}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Requirements */}
        <div>
          <label className="block text-gray-700">Requirements (comma separated)</label>
          <input
            type="text"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Eligibility Criteria */}
        <div>
          <label className="block text-gray-700">Eligibility Criteria (comma separated)</label>
          <input
            type="text"
            name="eligibilityCriteria"
            value={formData.eligibilityCriteria}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Deadline */}
        <div>
          <label className="block text-gray-700">Application Deadline</label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Application Process */}
        <div>
          <label className="block text-gray-700">Application Process</label>
          <textarea
            name="applicationProcess"
            value={formData.applicationProcess}
            onChange={handleChange}
            rows="3"
            required
            className="w-full p-2 border rounded"
          ></textarea>
        </div>

        {/* Official Link */}
        <div>
          <label className="block text-gray-700">Official Link</label>
          <input
            type="url"
            name="officialLink"
            value={formData.officialLink}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Post Scholarship
        </button>
      </form>
    </div>
  );
};

export default ScholarshipPost;
