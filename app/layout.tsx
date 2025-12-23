import type { Metadata } from 'next';
import Script from 'next/script';
import { Kanit } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';


const kanit = Kanit({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-kanit'
});

export const metadata: Metadata = {
    title: 'Macro.one | Infrastructure for the Intelligence Age',
    description: 'Infrastructure for the Intelligence Age. We build the physical and digital foundations for Artificial Intelligence.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${kanit.variable} font-sans min-h-screen bg-[#111111] text-neutral-100 selection:bg-[#ff5f00] selection:text-white`}>
                <div className="min-h-screen flex flex-col">
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </div>
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-576ZKY0X94" strategy="afterInteractive" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-576ZKY0X94');
                    `}
                </Script>
                <Script id="snitcher-analytics" strategy="afterInteractive">
                    {`
                        !function(e){"use strict";var t=e&&e.namespace;if(t&&e.profileId&&e.cdn){var i=window[t];if(i&&Array.isArray(i)||(i=window[t]=[]),!i.initialized&&!i._loaded)if(i._loaded)console&&console.warn("[Radar] Duplicate initialization attempted");else{i._loaded=!0;["track","page","identify","group","alias","ready","debug","on","off","once","trackClick","trackSubmit","trackLink","trackForm","pageview","screen","reset","register","setAnonymousId","addSourceMiddleware","addIntegrationMiddleware","addDestinationMiddleware","giveCookieConsent"].forEach((function(e){var a;i[e]=(a=e,function(){var e=window[t];if(e.initialized)return e[a].apply(e,arguments);var i=[].slice.call(arguments);return i.unshift(a),e.push(i),e})})),-1===e.apiEndpoint.indexOf("http")&&(e.apiEndpoint="https://"+e.apiEndpoint),i.bootstrap=function(){var t,i=document.createElement("script");i.async=!0,i.type="text/javascript",i.id="__radar__",i.setAttribute("data-settings",JSON.stringify(e)),i.src=[-1!==(t=e.cdn).indexOf("http")?"":"https://",t,"/releases/latest/radar.min.js"].join("");var a=document.scripts[0];a.parentNode.insertBefore(i,a)},i.bootstrap()}}else"undefined"!=typeof console&&console.error("[Radar] Configuration incomplete")}({
                            "apiEndpoint": "radar.snitcher.com",
                            "cdn": "cdn.snitcher.com",
                            "namespace": "Snitcher",
                            "profileId": "sBVNJHNTYe"
                        });
                    `}
                </Script>
                <Script id="microsoft-clarity" strategy="afterInteractive">
                    {`
                        (function(c,l,a,r,i,t,y){
                            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "umzmuo8kf3");
                    `}
                </Script>
            </body>
        </html>
    );
}
