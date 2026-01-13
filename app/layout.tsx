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
    title: 'Macro.One | The Asset Manager for the Age of AI',
    description: 'Most funds buy the hype. We buy the physics. We invest in the "Picks & Shovels" of the AI economy.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${kanit.variable} font-sans min-h-screen bg-macro-sand text-macro-ink selection:bg-[#ff5f00] selection:text-white`}
                style={{ backgroundColor: '#F2F0E9' }}
            >
                <div className="min-h-screen flex flex-col relative">
                    {/* Global Noise Overlay */}
                    <div
                        className="fixed inset-0 opacity-[0.04] pointer-events-none z-50 mix-blend-multiply"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                        }}
                    />
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
