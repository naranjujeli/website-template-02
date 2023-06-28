import useDeviceSize from './useDeviceSize';

export default function useDeviceIsSmall() {
    const deviceIsSmall = useDeviceSize(null, 768);
    return deviceIsSmall;
}