import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ title, showBackButton = true, onClick }) => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className='flex items-center justify-between p-4 bg-tertiary  text-secondary shadow-lg'>
      {showBackButton && (
        <button
          className='flex gap-3 items-center bg-primary hover:bg-primary hover:opacity-90 hover:delay-100 cursor-pointer text-secondary font-bold py-4 px-6 rounded-full'
          onClick={handleBackButtonClick}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </button>
      )}
      <h1 className='text-xl text-white'>{title}</h1>
    </div>
  );
};

export default Header;
