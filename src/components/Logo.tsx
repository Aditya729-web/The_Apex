import React from 'react';
import apexLogo from '../assets/images/apex_logo.jpg';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  variant = 'dark'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20'
  };

  const imageSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      <div className="relative shrink-0 group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-indigo-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300"></div>
        <img
          src={apexLogo}
          alt="The Apex World Logo"
          referrerPolicy="no-referrer"
          className={`${imageSize} relative rounded-full object-cover border-2 border-amber-400/90 shadow-md bg-white p-0.5`}
        />
      </div>

      {showText && (
        <div className="flex flex-col min-w-0 justify-center">
          <div className="flex items-center gap-1 sm:gap-1.5 leading-none whitespace-nowrap">
            <span className={`font-black tracking-wider uppercase font-serif ${
              variant === 'light' ? 'text-slate-900' : 'text-white'
            } ${size === 'sm' ? 'text-xs sm:text-sm' : size === 'lg' ? 'text-xl sm:text-2xl' : size === 'xl' ? 'text-2xl sm:text-3xl' : 'text-sm sm:text-lg'}`}>
              THE APEX
            </span>
            <span className={`font-black tracking-wider uppercase font-serif text-amber-400 ${
              size === 'sm' ? 'text-xs sm:text-sm' : size === 'lg' ? 'text-xl sm:text-2xl' : size === 'xl' ? 'text-2xl sm:text-3xl' : 'text-sm sm:text-lg'
            }`}>
              WORLD
            </span>
          </div>
          <p className={`text-[8px] sm:text-[10px] tracking-tight xs:tracking-wider sm:tracking-widest font-bold uppercase mt-0.5 sm:mt-1 leading-tight sm:leading-none whitespace-nowrap ${
            variant === 'light' ? 'text-emerald-700' : 'text-amber-300/90'
          }`}>
            Empowering Minds, Enriching Futures
          </p>
        </div>
      )}
    </div>
  );
};
