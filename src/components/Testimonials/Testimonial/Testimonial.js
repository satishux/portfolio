import React from 'react';

const Testimonial = (props) => {
  return (
    <div className="text-center">
      <p>{props.children}</p>
    </div>
  );
};

export default Testimonial;
