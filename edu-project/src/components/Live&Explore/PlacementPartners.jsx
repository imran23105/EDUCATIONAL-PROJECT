import React from 'react';

const companies = [
  { alt: 'Amazon', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { alt: 'Google', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { alt: 'Microsoft', src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { alt: 'Goldman Sachs', src: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Goldman_Sachs.svg' },
  { alt: 'PayPal', src: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' },
  { alt: 'Samsung', src: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
  { alt: 'Salesforce', src: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png' },
  { alt: 'NetApp', src: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/NetApp_logo.svg' },
  { alt: 'Hitachi', src: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Hitachi_logo.svg' },
  { alt: 'JPMorgan', src: 'https://upload.wikimedia.org/wikipedia/commons/6/65/JPMorgan_Chase-Logo.svg' },
  { alt: 'IBM', src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { alt: 'Dell', src: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg' },
  { alt: 'Deloitte', src: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Deloitte_Logo.png' },
  { alt: 'KPMG', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/KPMG_logo.svg' },
  { alt: 'ISRO', src: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/ISRO_Logo.svg' },
  { alt: 'Mercedes-Benz', src: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg' },
  { alt: 'EY', src: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/EY_logo_2019.svg' },
  { alt: 'Airtel', src: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Airtel_Logo.svg' }
];


const PlacementPartners = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        Thousands of students achieved their <span className="text-orange-600 font-bold">dream job at</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center max-w-6xl mx-auto">
        {companies.map((company, index) => (
          <img
            key={index}
            {...company}
            className="h-8 md:h-10 grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>

      <p className="mt-6 text-gray-500 text-sm">+ many more</p>
    </section>
  );
};

export default PlacementPartners;
