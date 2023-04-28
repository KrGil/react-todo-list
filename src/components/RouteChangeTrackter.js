import { useEffect, useState } from "react";
import ReactGA from "react-ga";

const RouteChangeTrackter = () => {
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (!window.location.href.includes("localhost")){
            // 환경 변수 사용
            ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);
        }

        setInitialized(true);
    }, [])
    useEffect(() => {
        if (initialized){
            ReactGA.pageview(location.pathname + location.search);
        }
    }, [initialized, location]);
} 
export default RouteChangeTrackter;