import React from 'react';

function Testimonials() {
  return (
    <section id='/proposal' className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Interested in our Proposal?</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">We've made a proposal in order to better communicate our ideas to professionals for detailed concerns and other questions you may have about the overall aspect of our mission.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5">
          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <blockquote className="text-xl font-medium mb-4">
                Waste medication is such a prevalent issue within the healthcare industry and Dropnu's mission is to help alleviate patients' struggles with their current prescription, especially during COVID times. This proposal is meant to debate against critics with the viability of Dropnu.
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Please click below to view the proposal</cite>
                <div className="text-gray-600">
                  <a className="text-blue-600 hover:underline" href="https://docs.google.com/document/d/1Tp4SYe346zav2GOBQnLe6-Yxu0YDVSgyuiLYvXHfrCA/edit?usp=sharing">View Here</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;