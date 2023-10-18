import { DeviceTypes } from '@/constants/deviceTypes';
import { theme } from '@/theme/theme';
import { useEffect, useState } from 'react';

export const useWindowResize = (): {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
} => {
  const [deviceType, setDeviceType] = useState(DeviceTypes.DESKTOP);

  const handleResize = () => {
    const mobileBreakpoint = theme.breakPoints.mobile;
    const tabletBreakpoint = theme.breakPoints.tablet;
    const convertedMobileBreakpoint =
      typeof mobileBreakpoint === 'number'
        ? mobileBreakpoint
        : parseInt(mobileBreakpoint);

    const convertedTabletBreakpoint =
      typeof tabletBreakpoint === 'number'
        ? tabletBreakpoint
        : parseInt(tabletBreakpoint);

    if (window.innerWidth < convertedMobileBreakpoint) {
      setDeviceType(DeviceTypes.MOBILE);
    } else if (window.innerWidth < convertedTabletBreakpoint) {
      setDeviceType(DeviceTypes.TABLET);
    } else {
      setDeviceType(DeviceTypes.DESKTOP);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = deviceType === DeviceTypes.MOBILE;
  const isTablet = deviceType === DeviceTypes.TABLET;
  const isDesktop = deviceType === DeviceTypes.DESKTOP;

  return {
    isMobile,
    isTablet,
    isDesktop,
  } as const;
};
