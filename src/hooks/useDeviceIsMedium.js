import useDeviceSize from './useDeviceSize';

export default function useDeviceIsMedium() {
    const deviceIsMedium = useDeviceSize(768, 1200);
    return deviceIsMedium;
}