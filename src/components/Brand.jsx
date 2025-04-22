import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../CompCss/Brand.css';
const Brand = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/api/bloge')
            .then((res) => {
                const filteredData = res.data.filter(item => item.category === "Brand"); // Ensure correct casing
                setData(filteredData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <div>
            {/* Ad Space */}
            <div className="ads_space">
                <h1>Ad Space</h1>
            </div>
            {/* Brand Header Section */}
            <div className="brand_header_section">
                <div className="brand_header">
                    <h1>Brand Header</h1>
                </div>
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <div key={index} className="brand_item">
                            <div className="brand_title">
                                <h4>{item.title}</h4>
                            </div>
                            <div className="brand_image_section">
                                <img 
                                    src={item.image || "https://via.placeholder.com/150"} 
                                    alt={item.title || "Brand Image"} 
                                />
                            </div>
                            <div className="description_brand">
                                <p>{item.description}</p>
                            </div>
                            <div className="brand_button">
                                <button>{item.buttonText ? item.buttonText : "Learn More"}</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No brands available.</p>
                )}
            </div>
            {/* Additional Ad Space */}
            <div className="add_space2">
                <h3>Additional Ad Space</h3>
            </div>
        </div>
    );
};
export default Brand;
