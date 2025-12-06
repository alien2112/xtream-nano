import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "اكستريم نانو XTREME NANO | أفضل مركز حماية سيارات بالرياض (خصم 20%)",
  description:
    "اكستريم نانو بالرياض يقدم أفضل خدمات حماية السيارات، حماية الطلاء PPF، النانو سيراميك، تظليل حراري، تلميع داخلي وخارجي بتنفيذ احترافي وخبرة عالية. احجز الآن واحصل على خصم 20%. رقم التواصل: 966570044578",
  openGraph: {
    title:
      "اكستريم نانو XTREME NANO | أفضل مركز حماية سيارات بالرياض (خصم 20%)",
    description:
      "خدمات حماية السيارات بالرياض – نانو سيراميك، تظليل حراري، حماية الطلاء PPF، تلميع داخلي وخارجي بجودة عالية. خصم 20% الآن مع اكستريم نانو.",
    url: "https://www.xtreme-nano.com/",
    siteName: "اكستريم نانو XTREME NANO",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 1200,
        height: 630,
        alt: "اكستريم نانو – خدمات حماية السيارات بالرياض",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "اكستريم نانو XTREME NANO | أفضل مركز حماية سيارات بالرياض (خصم 20%)",
    description:
      "حماية الطلاء – PPF – نانو سيراميك – تظليل حراري – تلميع – حماية داخلية وخارجية بالرياض. خصم 20% الآن.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* 🔥 أقوى كلمات مفتاحية لمجال حماية السيارات بالرياض */}
        <meta
          name="keywords"
          content="
اكستريم نانو, اكستريم نانو الرياض, مركز اكستريم نانو, افضل مركز حماية سيارات بالرياض, حماية الطلاء بالرياض,
حماية السيارات بالرياض, حماية السيارة PPF, حماية الفلمين PPF الرياض, حماية اكسبيل الرياض, حماية البودي بالرياض,
نانو سيراميك بالرياض, افضل نانو سيراميك بالرياض, اسعار النانو سيراميك بالرياض, تظليل حراري بالرياض,
تظليل السيارات بالرياض, افضل تظليل بالرياض, عزل حراري للسيارات بالرياض, تفييم سيارات الرياض, تغليف سيارات,
تلميع السيارات بالرياض, تلميع داخلي وخارجي, تلميع نانو, تنظيف مقاعد السيارة, تنظيف المراتب,
خدمات عناية سيارات بالرياض, صيانة سيارات فاخرة بالرياض, افضل مركز تلميع سيارات, حماية الزجاج, حماية المصابيح,
اصلاح خدوش السيارات, معالجة خدوش البودي, تعديل الخدوش, تلميع زجاج السيارات, حماية داخلية, حماية خارجية,
افضل ورشة حماية سيارات بالرياض, عروض حماية السيارات, تركيب حماية الطلاء, زينة السيارات, خدمات فاخرة للسيارات,
مراكز العناية بالسيارات الرياض, مركز حماية سيارات موثوق بالرياض"
        />

        <meta name="author" content="اكستريم نانو XTREME NANO" />
        <meta name="telephone" content="966570044578" />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WXHT775S');
          `}
        </Script>

        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17479045303"
          strategy="afterInteractive"
        />
        <Script id="google-ads-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17479045303');
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7RJBGN75HZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7RJBGN75HZ');
          `}
        </Script>

        {/* 🌟 JSON-LD Schema (محسن للسيو) */}
        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "اكستريم نانو XTREME NANO",
              "url": "https://www.xtreme-nano.com/",
              "logo": "https://www.xtreme-nano.com/android-chrome-512x512.png",
              "image": "https://www.xtreme-nano.com/android-chrome-512x512.png",
              "description": "أفضل مركز حماية سيارات بالرياض – حماية الطلاء، نانو سيراميك، تظليل حراري، تلميع داخلي وخارجي.",
              "telephone": "+966570044578",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "الرياض",
                "addressCountry": "SA"
              },
              "areaServed": ["الرياض", "السعودية"],
              "sameAs": [
                "https://x.com/xtremenano_sa",
                "https://www.instagram.com/xtremenano_sa/",
                "https://www.tiktok.com/@xtremenano_sa"
              ],
              "serviceType": [
                "حماية الطلاء PPF",
                "النانو سيراميك",
                "تظليل حراري",
                "تلميع داخلي",
                "تلميع خارجي",
                "تنظيف المراتب",
                "تغيير شكل السيارة"
              ]
            }
          `}
        </Script>
      </head>

      <body>
        {/* GTM NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WXHT775S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  );
}
