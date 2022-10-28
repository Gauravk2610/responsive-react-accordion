import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

interface accordionInterface {
  title: string;
  content: string;
  openIcon?: any;
  closeIcon?: any;
  spacing?: number;
}

const plusIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="plusIcon"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 4v16m8-8H4"
    />
  </svg>
);

const minusIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="minusIcon"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M20 12H4"
    />
  </svg>
);

export const Accordion = ({
  title,
  content,
  openIcon,
  closeIcon,
  spacing,
}: accordionInterface) => {
  const [open, setOpen] = useState(false);
  const open_Icon = openIcon ? openIcon : plusIcon;
  const close_Icon = closeIcon ? closeIcon : minusIcon;

  return (
    <AccordionContainer
      className="accordion-container"
      style={spacing ? { marginBottom: spacing } : {}}
    >
      <Accordionn className="accordion">
        <AccordionTitle
          onClick={() => setOpen(!open)}
          className="accordion-title"
        >
          {title}
          {/* Title */}{' '}
          <div className="accordion-icon">{!open ? open_Icon : close_Icon}</div>
        </AccordionTitle>
        <AccordionCollapsible
          className={`accordion-collapsible ${
            open ? 'accordion-active' : 'accordion-inactive'
          }`}
        >
          {/* Content */}
          {content}
        </AccordionCollapsible>
      </Accordionn>
    </AccordionContainer>
  );
};

const AccordionContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Accordionn = styled.div`
  max-width: 80vw;
  width: 100%;
  border: 2px solid black;
  border-radius: 12px;

  .accordion-active {
    max-height: max-content;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .accordion-inactive {
    max-height: 0px;
  }
`;

const AccordionTitle = styled.div`
  cursor: pointer;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  padding: 16px 28px;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const AccordionCollapsible = styled.div`
  font-size: 20px;
  padding: 0 28px;
  overflow: hidden;
  transition: all 300ms ease-in-out;
  display: flex;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;
