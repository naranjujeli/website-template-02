import { useState, useEffect } from 'react';

export default function useDeviceSize(min, max) {
    function calcDeviceIsBetweenConstraints() {
        return (
            (min ? window.innerWidth > min : true) &&
            (max ? window.innerWidth <= max : true)
        );
    }
    const [deviceIsBetweenConstraints, setDeviceIsBetweenConstraints] = useState(calcDeviceIsBetweenConstraints());
    // Each time the viewport is resized, react has to calculate if it's still
    // between the specified constraints, in order to update the content of the page.
    useEffect(() => {
        window.addEventListener("resize", () => 
            setDeviceIsBetweenConstraints(calcDeviceIsBetweenConstraints()));
    });
    return deviceIsBetweenConstraints;
}