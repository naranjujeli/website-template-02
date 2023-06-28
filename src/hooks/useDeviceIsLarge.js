import useDeviceSize from './useDeviceSize';

export default function useDeviceIsLarge() {
    const deviceIsLarge = useDeviceSize(1200, null);
    return deviceIsLarge;
}