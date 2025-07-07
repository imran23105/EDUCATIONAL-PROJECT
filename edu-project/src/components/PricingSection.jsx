import React from 'react';
import PricingCard from './PricingCard';

const pricingPlans = [
  {
    plan: 'Basic Plan',
    price: '49K',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    plan: 'Beginner Plan',
    price: '79K',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    plan: 'Premium Plan',
    price: '109K',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    plan: 'Ultimate Plan',
    price: '149K',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
];

const PricingSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-orange-600 font-semibold mb-2">OUR PRICING</p>
        <h2 className="text-3xl font-bold mb-10">Pricing & Packages</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan.plan}
              price={plan.price}
              description={plan.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
