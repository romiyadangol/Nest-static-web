import Image from 'next/image';
import { ReactNode } from 'react';

interface ContactButtonProps {
  variant?: 'green' | 'solidPink'| 'pink' | 'default';
  text?: ReactNode;
  iconSrc?: '/whatsapp.png' | '/whatsapp-solidpink.png' | null;
  iconAlt?: string;
  iconSize?: number;
  className?: string;
  size?: 'default' | 'pill';
  onClick?: () => void;
}

export default function ContactButton({
  variant = 'green',
  size = 'default',
  text = 'Contact Sales',
  iconSrc = '/whatsapp.png',
  iconAlt = 'WhatsApp',
  iconSize = 28,
  className = '',
  onClick,
}: ContactButtonProps) {
  // Define styles per variant
  const variants = {
    green: {
      border: 'border-green-500',
      text: 'text-green-600',
      bg: 'bg-green-50',
      hover: 'hover:bg-green-100',
    },
    solidPink: {
      bg: 'bg-[#F25277]',
      text: 'text-white',
      border: 'border-transparent',
      hover: 'hover:bg-[#d93e66]',        // darker pink
    },
    pink: {
      bg: 'bg-[#fce4eb]',
      border: 'border-[#F25277]',
      text: 'text-pink-600',
      hover: 'hover:bg-pink-100',
    },
    default: {
      border: 'border-black-300',
      text: 'text-gray-700',
      bg: 'bg-white',
      hover: 'hover:bg-gray-100',
    },
  };

  const styles = {
    default: {
      padding: 'px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3',
      radius: 'rounded-md sm:rounded-lg md:rounded-xl',
      font: 'text-xs sm:text-sm md:text-base',
      gap: 'gap-1.5 sm:gap-2 md:gap-2.5',
      icon: iconSize ?? 28,
      minWidth: '',
  },

    pill: {
      padding: 'px-5 py-2',
      radius: 'rounded-full',
      font: 'text-sm',
      gap: 'gap-2',
      icon: iconSize ?? 20,
      minWidth: 'min-w-[130px]',     
    },
  };

  const style = variants[variant];
  const sz = styles[size];

  return (
  <button
      className={`
        flex items-center justify-center
        ${sz.gap}
        border ${style.border}
        ${sz.padding}
        ${sz.radius}
        ${style.text} ${sz.font} font-medium
        ${style.bg} ${style.hover}
        transition-colors duration-200
        ${sz.minWidth || ''}
        whitespace-nowrap              
        ${className}
      `}
      onClick={onClick}
    >
      {iconSrc && (
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={20}
          height={20}
          className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
        />
      )}
      {text}
    </button>
  );
}