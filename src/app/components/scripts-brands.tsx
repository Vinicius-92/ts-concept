export default function ScriptsBrands() {
    return (
        <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-815648245"></script>
                <script  async>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'AW-815648245');
                `}
                </script>
                <script async>
                {`
                    function gtag_report_conversion(url) {
                    var callback = function () {
                        if (typeof(url) != 'undefined') {
                        window.location = url;
                        }
                    };
                    gtag('event', 'conversion', {
                        'send_to': 'AW-815648245/VBilCM--msoZEPWb94QD',
                        'event_callback': callback
                    });
                    return false;
                    }
                `}
                </script>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-09WFWQ3MLW"></script>
                <script async>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-09WFWQ3MLW');
                `}
                </script>
                <script async type="text/javascript">
                {`
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "iitv1n9nct");
                `}
                </script>
        </>
    )
}