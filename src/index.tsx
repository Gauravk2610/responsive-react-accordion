import * as React from 'react';
import './index.css'
import { useState } from 'react';

interface accordionInterface {
  title: string,
  content: string,
  openIcon?: any,
  closeIcon?: any,
  spacing?: number
}

const plusIcon =
  <svg xmlns="http://www.w3.org/2000/svg" className="plusIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
  </svg>


const minusIcon =
  <svg xmlns="http://www.w3.org/2000/svg" className="minusIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
  </svg>

export const Accordion = ({ title, content, openIcon, closeIcon, spacing }: accordionInterface) => {
  const [open, setOpen] = useState(false)
  const open_Icon = openIcon ? openIcon : plusIcon;
  const close_Icon = closeIcon ? closeIcon : minusIcon;

  return (
    <div className="accordion-container" style={spacing ? { marginBottom: spacing} : {} }>
      <div className='accordion'>
        <div
          onClick={() => setOpen(!open)} 
          className='accordion-title'
          >
            {title}
            {/* Title */} <div className='accordion-icon'>{ !open ? open_Icon : close_Icon }</div>
          </div>
        <div className={`accordion-collapsible ${open ? 'accordion-active' : 'accordion-inactive'}`}>
            {/* Content */}
            {content}
        </div>
      </div>
    </div>
  );
};
