import React from "react";
import { assets, dummyTestimonial } from "../../assets/assets";

const TestimonialSection = () => {
  return (
    <>
      <div className="pb-14 px-8 md:px-0">
        <h2 className="text-3xl font-medium text-gray-800">
          {" "}
          TestimonialSection{" "}
        </h2>
        <p className="text-base text-gray-500 mt-3">
          Hear from our learners as they share their journeys of transformation,
          success, and how our <br />
          platform has made a difference in their lives.
        </p>
      </div>
      <div className=" grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-8 mt-14 ">
        {dummyTestimonial.map((testimonial, idx) => (
          <div key={idx} className="text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] overflow-hidden shadow-black/5">
            <div className="flex items-center gap-4 px-5 py-4 bg-gray-500/10">
              <img className="h-12 w-12 rounded-full" src={testimonial.image} alt="" />
              <div>
                <div className="text-gray-700 text-lg font-medium">{testimonial.name}</div>
                <div className="text-gray-800/70">{testimonial.role}</div>
              </div>
            </div>
            <div className="p-5 pb-7">
              <div className="flex gap-0.5">
              {[...Array(5)].map((_,idx)=>< img key={idx} className=' h-5' src={idx < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}/>) }
            </div>
            <p className="text-gray-500 mt-5">{testimonial.feedback}</p>
           
           
            </div>
           <a href="#" className="text-blue-500 underline px-5 ">Read more</a>
          </div>
        ))}
      </div>
    </>
  );
};

export default TestimonialSection;
