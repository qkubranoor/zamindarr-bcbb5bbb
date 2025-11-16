import React from 'react';
import { useResponsive } from '@/hooks/use-mobile';

interface ResponsiveWrapperProps {
  children: React.ReactNode;
  mobile?: React.ReactNode;
  tablet?: React.ReactNode;
  desktop?: React.ReactNode;
  className?: string;
  showOnMobile?: boolean;
  showOnTablet?: boolean;
  showOnDesktop?: boolean;
}

export const ResponsiveWrapper: React.FC<ResponsiveWrapperProps> = ({
  children,
  mobile,
  tablet,
  desktop,
  className = '',
  showOnMobile = true,
  showOnTablet = true,
  showOnDesktop = true,
}) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  // Handle conditional rendering
  if (!showOnMobile && isMobile) return null;
  if (!showOnTablet && isTablet) return null;
  if (!showOnDesktop && isDesktop) return null;

  // Handle responsive content
  if (mobile && isMobile) {
    return <div className={className}>{mobile}</div>;
  }
  if (tablet && isTablet) {
    return <div className={className}>{tablet}</div>;
  }
  if (desktop && isDesktop) {
    return <div className={className}>{desktop}</div>;
  }

  // Default rendering
  return <div className={className}>{children}</div>;
};

interface ResponsiveImageProps {
  src: string;
  alt: string;
  mobileSrc?: string;
  tabletSrc?: string;
  desktopSrc?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  mobileSrc,
  tabletSrc,
  desktopSrc,
  className = '',
  loading = 'lazy',
}) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  let imageSrc = src;
  if (mobileSrc && isMobile) imageSrc = mobileSrc;
  if (tabletSrc && isTablet) imageSrc = tabletSrc;
  if (desktopSrc && isDesktop) imageSrc = desktopSrc;

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
    />
  );
};

interface ResponsiveTextProps {
  children: React.ReactNode;
  mobileSize?: string;
  tabletSize?: string;
  desktopSize?: string;
  className?: string;
}

export const ResponsiveText: React.FC<ResponsiveTextProps> = ({
  children,
  mobileSize = 'text-sm',
  tabletSize = 'text-base',
  desktopSize = 'text-lg',
  className = '',
}) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  let sizeClass = desktopSize;
  if (isMobile) sizeClass = mobileSize;
  if (isTablet) sizeClass = tabletSize;

  return (
    <span className={`${sizeClass} ${className}`}>
      {children}
    </span>
  );
};

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className = '',
  maxWidth = '7xl',
  padding = 'lg',
}) => {
  const paddingClasses = {
    none: '',
    sm: 'px-4',
    md: 'px-6',
    lg: 'px-4 sm:px-6 lg:px-8',
    xl: 'px-6 sm:px-8 lg:px-12',
  };

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
  };

  return (
    <div className={`mx-auto ${maxWidthClasses[maxWidth]} ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  );
};
