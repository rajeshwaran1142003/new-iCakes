import React from 'react';

const WhatsAppWidget: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/918248477869?text=Hi%20there!%20I%20would%20like%20to%20know%20more%20about%20your%20baking%20courses."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire on WhatsApp"
        className="bg-white border border-gray-200 hover:border-gray-300 text-white p-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center"
        title="Enquire on WhatsApp"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          className="h-10 w-10"
          loading="lazy"
        />
      </a>
    </div>
  );
};

export default WhatsAppWidget;