"use client";

import { useRef } from "react";
import {
  Shield,
  Sun,
  Sparkles,
  Car,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  const scrollRef = useRef(null);

  const services = [
    {
      slug: "ppf",
      icon: Shield,
      title: "فيلم حماية الطلاء (PPF)",
      description:
        "احمِ سيارتك من المخاطر اليومية، مثل الخدوش والصدمات وبقع الحشرات والطقس القاسي، مع فيلم حماية الطلاء عالي الجودة.",
      image: "pff.png",
    },
    {
      slug: "tint",
      icon: Sun,
      title: "تظليل النوافذ",
      description:
        "صُممت حلول تظليل النوافذ المتميزة لدينا لعزل الحرارة بشكل مثالي، وحماية من الأشعة فوق البنفسجية، وتعزيز الخصوصية.",
      image: "tzlel.png",
    },
    {
      slug: "nano-exterior",
      icon: Sparkles,
      title: "النانو سيراميك خارجي",
      description:
        "عزز لمعان سيارتك ومتانتها على المدى الطويل مع طلاء النانو سيراميك المتطور لدينا. يقاوم الماء والأوساخ والملوثات.",
      image: "/tlme3.png",
    },
    {
      slug: "nano-interior",
      icon: Sparkles,
      title: "النانو سيراميك داخلي",
      description:
        "حافظ على مظهر سيارتك الداخلي منتعشاً مع معالجاتنا المتخصصة للأسطح القماشية والجلدية.",
      image: "/nano.png",
    },
    {
      slug: "polishing",
      icon: Zap,
      title: "تلميع داخلي وخارجي",
      description:
        "خدمة تلميع شاملة للداخل والخارج لإعطاء سيارتك لمعاناً استثنائياً ومظهراً جديداً يدوم طويلاً.",
      image: "/tlme33.png",
    },
    {
      slug: "premium",
      icon: Car,
      title: "خدمات مميزة لسيارتك",
      description:
        "استمتع بأقصى درجات الدلال لسيارتك مع خدمات العناية الفائقة من <span class='text-[#e9cb1d]'>اكس تريم نانو</span>. ينظف خبراؤنا ويلمعون ويحمون كل جزء من سيارتك.",
      image:
        "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="services"
      className="py-20 bg-white"
      dir="rtl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#e9cb1d] mb-6">
            خدماتنا المتميزة
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من خدمات العناية بالسيارات باستخدام أحدث التقنيات
            والمواد عالية الجودة
          </p>
        </motion.div>

        {/* Horizontal Scrolling Services */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#7F3F97] text-white p-3 rounded-full hover:opacity-90 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#7F3F97] text-white p-3 rounded-full hover:opacity-90 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Services Container */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto services-scroll pb-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-[#7F3F97] rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex-shrink-0 w-80"
                style={{ scrollSnapAlign: "start" }}
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 15px rgba(0,0,0,0.2)",
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-[#7F3F97] opacity-20"></div>

                  <div className="absolute top-6 right-6 w-12 h-12 bg-[#e9cb1d] rounded-2xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-black" />
                  </div>
                </div>

                <div className="p-8 text-white text-right">
                  <h3 className="text-2xl font-bold text-[#e9cb1d] mb-4">
                    {service.title}
                  </h3>

                  <p
                    className="text-white leading-relaxed mb-6"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />

                  {/* هنا الرابط الجديد لكل صفحة خدمة */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-2 text-[#e9cb1d] font-semibold hover:opacity-80 transition-colors group justify-end"
                  >
                    <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform rotate-180" />
                    تفاصيل الخدمة
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
