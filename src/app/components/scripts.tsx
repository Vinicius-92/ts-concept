export default function Scripts() {
    return (
        <>
            <script >
                {`
                    (function (c, l, a, r, i, t, y) {
                        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
                        t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
                        y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
                    })(window, document, "clarity", "script", "iitv1n9nct");
                `}
            </script>
            <script src="https://www.googletagmanager.com/gtag/js?id=G-09WFWQ3MLW"></script>
            <script>
                {
                    `
                        window.dataLayer = window.dataLayer || [];
                        function gtag() { dataLayer.push(arguments); }
                        gtag('js', new Date());

                        gtag('config', 'G-09WFWQ3MLW');
                    `
                }
            </script>
        </>
    )
}