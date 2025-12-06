"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function ServicePage() {
  const { slug } = useParams();

  // بيانات كل خدمة
  const services = {
    ppf: {
      name: "فيلم حماية الطلاء (PPF)",
      description:
        "احمِ سيارتك من الخدوش والصدمات وبقع الحشرات والطقس القاسي مع فيلم حماية الطلاء عالي الجودة في الرياض.",
      images: [
        "/images/ppf1.png",
        "/images/ppf2.png",
        "/images/ppf3.png",
      ],
      details:
        "فيلم حماية الطلاء يضمن حماية السيارة من العوامل الجوية والأتربة والخدوش اليومية. مناسب لجميع أنواع السيارات في الرياض.",
    },
    tint: {
      name: "تظليل النوافذ",
      description:
        "حلول تظليل النوافذ لعزل الحرارة وحماية من الأشعة فوق البنفسجية وتعزيز الخصوصية في الرياض.",
      images: [
        "/images/tint1.png",
        "/images/tint2.png",
        "/images/tint3.png",
      ],
      details:
        "التظليل يحافظ على برودة السيارة ويقلل أشعة الشمس الضارة، مما يجعل قيادة سيارتك في الرياض أكثر راحة وخصوصية.",
    },
    "nano-exterior": {
      name: "النانو سيراميك خارجي",
      description:
        "زيادة لمعان ومتانة السيارة على المدى الطويل مع طلاء النانو سيراميك المتطور في الرياض.",
      images: [
        "/images/nano-exterior1.png",
        "/images/nano-exterior2.png",
        "/images/nano-exterior3.png",
      ],
      details:
        "النانو سيراميك الخارجي يمنح السيارة حماية ضد الخدوش البسيطة، الأوساخ، والأمطار، مع لمعان يدوم طويلاً في مناخ الرياض الحار.",
    },
    "nano-interior": {
      name: "النانو سيراميك داخلي",
      description:
        "حافظ على مظهر السيارة الداخلي منتعشاً مع معالجات متخصصة للأسطح القماشية والجلدية في الرياض.",
      images: [
        "/images/nano-interior1.png",
        "/images/nano-interior2.png",
      ],
      details:
        "النانو سيراميك الداخلي يحمي الأسطح من البقع والغبار، ويجعل تنظيف السيارة أسهل ويضمن مظهر داخلي فاخر دائمًا.",
    },
    polishing: {
      name: "تلميع داخلي وخارجي",
      description:
        "خدمة تلميع شاملة للداخل والخارج لإعطاء سيارتك لمعاناً استثنائياً يدوم طويلاً في الرياض.",
      images: [
        "/images/polishing1.png",
        "/images/polishing2.png",
        "/images/polishing3.png",
      ],
      details:
        "التلميع يعيد للسيارة مظهرها الجديد، ويزيل الخدوش البسيطة والبهتان، مع حماية إضافية لطلاء السيارة في الرياض.",
    },
    premium: {
      name: "خدمات مميزة للسيارة",
      description:
        "استمتع بأقصى درجات العناية لسيارتك مع خدمات تنظيف وحماية شاملة في الرياض.",
      images: [
        "/images/premium1.png",
        "/images/premium2.png",
      ],
      details:
        "خدمات مميزة تشمل تنظيف شامل، حماية طلاء، تلميع، وتظليل، لتجربة فريدة لسيارتك في الرياض.",
    },
  };

  const service = services[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-2xl font-bold text-red-600">
          الخدمة غير موجودة
        </h2>
        <Link href="/services" className="text-blue-600 mt-4 underline">
          العودة لصفحة الخدمات
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* زر العودة للخدمات */}
      <div className="mb-6 text-left">
        <Link
          href="/services"
          className="text-[#7F3F97] font-bold underline"
        >
          ← العودة لصفحة الخدمات
        </Link>
      </div>

      {/* العنوان */}
      <h1 className="text-4xl font-bold text-[#7F3F97] mb-6 text-center">
        {service.name}
      </h1>

      {/* وصف الخدمة */}
      <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12 text-center">
        {service.description}
      </p>

      {/* معرض الصور */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
        {service.images.map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src={img}
              alt={`${service.name} ${idx + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* تفاصيل إضافية */}
      <section className="bg-white p-8 rounded-3xl shadow-lg max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-[#7F3F97] mb-4">تفاصيل الخدمة</h2>
        <p className="text-gray-700 text-lg">{service.details}</p>
      </section>

      {/* Call to Action / جاهز لتجربة الأفضل */}
      <section className="py-12 bg-[#7F3F97] text-center text-white rounded-3xl">
        <h2 className="text-3xl font-bold text-[#e9cb1d] mb-4">جاهز لتجربة الأفضل؟</h2>
        <p className="mb-6 text-lg">
          احجز موعدك الآن واستمتع بخدمة ممتازة لسيارتك في الرياض
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:0570044578"
            className="bg-[#e9cb1d] text-black px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 hover:scale-105 transition-all duration-300"
          >
            اتصال
          </a>
          <a
            href="https://wa.me/966570044578"
            className="border-2 border-[#e9cb1d] text-[#e9cb1d] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#e9cb1d] hover:text-black transition-all duration-300"
          >
            واتس اب
          </a>
        </div>
      </section>
    </div>
  );
}
