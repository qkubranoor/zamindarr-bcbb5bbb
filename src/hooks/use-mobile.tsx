import * as React from "react"

const BREAKPOINTS = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1600,
  '4xl': 1920
} as const

type Breakpoint = keyof typeof BREAKPOINTS

export function useResponsive() {
  const [windowSize, setWindowSize] = React.useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  })

  React.useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  const isMobile = windowSize.width < BREAKPOINTS.md
  const isTablet = windowSize.width >= BREAKPOINTS.md && windowSize.width < BREAKPOINTS.lg
  const isDesktop = windowSize.width >= BREAKPOINTS.lg
  const isLargeScreen = windowSize.width >= BREAKPOINTS.xl

  const isAbove = (breakpoint: Breakpoint) => windowSize.width >= BREAKPOINTS[breakpoint]
  const isBelow = (breakpoint: Breakpoint) => windowSize.width < BREAKPOINTS[breakpoint]

  return {
    windowSize,
    isMobile,
    isTablet,
    isDesktop,
    isLargeScreen,
    isAbove,
    isBelow,
    breakpoints: BREAKPOINTS
  }
}

// Legacy hook for backward compatibility
export function useIsMobile() {
  const { isMobile } = useResponsive()
  return isMobile
}

// Hook for responsive values
export function useResponsiveValue<T>(mobile: T, tablet: T, desktop: T): T {
  const { isMobile, isTablet, isDesktop } = useResponsive()
  
  if (isMobile) return mobile
  if (isTablet) return tablet
  return desktop
}

// Hook for responsive styles
export function useResponsiveStyles() {
  const { isMobile, isTablet, isDesktop } = useResponsive()
  
  return {
    container: {
      padding: isMobile ? '1rem' : isTablet ? '1.5rem' : '2rem',
      maxWidth: isMobile ? '100%' : isTablet ? '768px' : '1200px'
    },
    text: {
      size: isMobile ? 'sm' : isTablet ? 'base' : 'lg',
      heading: isMobile ? 'xl' : isTablet ? '2xl' : '3xl'
    },
    spacing: {
      section: isMobile ? 'py-8' : isTablet ? 'py-12' : 'py-16',
      gap: isMobile ? 'gap-4' : isTablet ? 'gap-6' : 'gap-8'
    }
  }
}
