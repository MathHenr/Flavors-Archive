import { useState, useEffect } from "react";

export function useIsMobile () {
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    useEffect(() => {
        function handleResize() {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return screenSize.width > 1024 ? false : true;
}