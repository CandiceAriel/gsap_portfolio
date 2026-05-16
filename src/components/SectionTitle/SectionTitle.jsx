import React from 'react';
import './SectionTitle.scss';

const SectionTitle = ({ number, title }) => {
  return (
    <div className="flex items-center gap-4 w-full select-none font-mono tracking-widest">
      <p className="s-title text-gray-500 text-base md:text-base">
        {number} // <span className="s-title__text">{title}</span>
      </p>

      {/* The Stripe / Line */}
      <div className="h-[1px] flex-grow bg-border-glow" />
    </div>
  )
}

export default SectionTitle