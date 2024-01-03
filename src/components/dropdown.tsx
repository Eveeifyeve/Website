import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface DropdownProps {
  label: string;
  items: { name: string; link: string; theme?: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="dropdown"
    >
      <button className="nav-link">{label}</button>
      {isOpen && (
        <div className="dropdown-content">
          {items.map((item, index) => (
            <Link
              key={index}
              className={`nav-link ${item.theme || ''}`}
              to={item.link}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};

export default Dropdown;