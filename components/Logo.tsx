import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  color?: 'white' | 'red' | 'black';
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = 'full',
  color = 'white'
}) => {
  // Using the official asset provided by the user.
  // Note: This image is "Red/Gray". It works best on dark backgrounds.
  // Updated to new Macro.one logo
  const logoUrl = "/images/macro-one-logo.png";

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoUrl}
        alt="Macro.one"
        className="h-14 w-auto object-contain"
      />
    </div>
  );
};