import DefaultTheme from "vitepress/theme";
import './index.css'

DefaultTheme.enhanceApp = ({ app, router, siteData }) => {
    router.onBeforeRouteChange = (to) => {
        if (typeof _hmt !== 'undefined') {
            _hmt.push(['_trackPageview', to]);
        }
    };
};

export default DefaultTheme
