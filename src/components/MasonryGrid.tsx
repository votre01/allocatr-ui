// import React from "react";

const images = [
    '/delivery-square.svg',
    '/baby-sitter-wide.svg',
    '/electrician-wide.svg',    
    '/drill-square.svg',
    'plumber-wide.svg',    
    '/painting-square.svg',    
];

const MasonryGrid = () => {
    return (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {images.map((src, index) => (
                <div key={index} className="mb-4 break-inside-avoid">
                    <img src={src} className="w-full object-cover rounded-lg" />
                </div>
            ))}
        </div>
    );
};

export default MasonryGrid;