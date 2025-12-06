"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carType: "",
    service: "",
    notes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `مرحباً، أود حجز موعد:

الاسم: ${formData.name}
رقم الهاتف: ${formData.phone}
نوع السيارة: ${formData.carType}
الخدمة المطلوبة: ${formData.service}
ملاحظات إضافية: ${formData.notes || "لا توجد"}

شكراً لكم`;

    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/966570044578?text=${encodedMessage}`, "_blank");

    setFormData({
      name: "",
      phone: "",
      carType: "",
      service: "",
      notes: "",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#e9cb1d] mb-6">
              اتصل بنا
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
              نحن هنا لخدمتك على مدار الساعة. تواصل معنا الآن للحصول على استشارة مجانية
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <div className="bg-[#7F3F97] text-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-2xl font-bold text-[#e9cb1d] mb-6 text-right">
                  معلومات التواصل
                </h3>

                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex items-center gap-4 min-h-[80px]">
                    <div className="text-right flex-1">
                      <h4 className="font-semibold text-[#e9cb1d] text-right">الهاتف</h4>
                      <a href="tel:570044578" className="text-white hover:text-[#e9cb1d] font-medium">
                        570044578 966+
                      </a>
                    </div>
                    <div className="w-12 h-12 bg-[#e9cb1d] rounded-2xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-black" />
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center gap-4 min-h-[80px]">
                    <div className="text-right flex-1">
                      <h4 className="font-semibold text-[#e9cb1d] text-right">واتس اب</h4>
                      <a href="https://wa.me/966570044578" className="text-white hover:text-[#e9cb1d] font-medium">
                        570044578 966+
                      </a>
                    </div>
                    <div className="w-12 h-12 bg-[#e9cb1d] rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4 min-h-[80px]">
                    <div className="text-right flex-1">
                      <h4 className="font-semibold text-[#e9cb1d] text-right">البريد الإلكتروني</h4>
                      <div className="space-y-1 text-right">
                        <a href="mailto:info@extremenano.sa" className="block text-white hover:text-[#e9cb1d] font-medium">
                          info@extremenano.sa
                        </a>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-[#e9cb1d] rounded-2xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4 min-h-[80px]">
                    <div className="text-right flex-1">
                      <h4 className="font-semibold text-[#e9cb1d] text-right">الموقع</h4>
                      <p className="text-white mb-2 text-right">الرياض - حي الربيع - طريق الثمامة</p>
                      <a
                        href="https://maps.app.goo.gl/Fu4X49ebANY33i897"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#e9cb1d] hover:opacity-80 transition-colors justify-end"
                      >
                        فتح الخريطة
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <div className="w-12 h-12 bg-[#e9cb1d] rounded-2xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-black" />
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-center gap-4 min-h-[80px]">
                    <div className="text-right flex-1">
                      <h4 className="font-semibold text-[#e9cb1d] text-right">ساعات العمل</h4>
                      <div className="text-white space-y-1 text-right">
                        <p>السبت - الخميس: 9:00 ص - 9:30 م</p>
                        <p>الجمعة: 4:00 م - 9:30 م</p>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-[#e9cb1d] rounded-2xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-black" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200" variants={itemVariants}>
              <h3 className="text-2xl font-bold text-[#e9cb1d] mb-6 text-right">احجز موعدك</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="اسمك الكامل" required className="w-full p-3 border rounded-xl text-right focus:ring-2 focus:ring-[#7F3F97]" dir="rtl"/>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="05xxxxxxxx" required className="w-full p-3 border rounded-xl text-right focus:ring-2 focus:ring-[#7F3F97]" dir="rtl"/>
                <input type="text" name="carType" value={formData.carType} onChange={handleInputChange} placeholder="مثال: تويوتا كامري 2023" required className="w-full p-3 border rounded-xl text-right focus:ring-2 focus:ring-[#7F3F97]" dir="rtl"/>
                <select name="service" value={formData.service} onChange={handleInputChange} required className="w-full p-3 border rounded-xl text-right focus:ring-2 focus:ring-[#7F3F97]" dir="rtl">
                  <option value="">اختر الخدمة</option>
                  <option value="فيلم حماية الطلاء (PPF)">فيلم حماية الطلاء (PPF)</option>
                  <option value="تظليل النوافذ">تظليل النوافذ</option>
                  <option value="النانو سيراميك خارجي">النانو سيراميك خارجي</option>
                  <option value="النانو سيراميك داخلي">النانو سيراميك داخلي</option>
                  <option value="تلميع داخلي وخارجي">تلميع داخلي وخارجي</option>
                  <option value="خدمات العناية الشاملة">خدمات العناية الشاملة</option>
                </select>
                <textarea name="notes" value={formData.notes} onChange={handleInputChange} rows="4" placeholder="أي تفاصيل إضافية..." className="w-full p-3 border rounded-xl text-right focus:ring-2 focus:ring-[#7F3F97]" dir="rtl"></textarea>
                <button type="submit" className="w-full bg-[#7F3F97] text-white py-3 rounded-xl font-bold hover:opacity-90">إرسال عبر واتس اب</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <motion.section id="location" className="py-20 bg-gray-900" variants={containerVariants}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#e9cb1d] mb-6">
              موقعنا على الخريطة
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              زورونا في مركزنا المتخصص - الرياض - حي الربيع - طريق الثمامة
            </p>
          </motion.div>
          <motion.div className="relative w-full h-[450px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#e9cb1d]" variants={itemVariants}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.9639625481304!2d46.6513125!3d24.7966875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee3ea218827ad%3A0xfabb985837f538f0!2sXtreme%20nano!5e0!3m2!1sen!2seg!4v1754929684697!5m2!1sen!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="XTREME NANO Location - Riyadh Al Rabee Thumama Road"
            ></iframe>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
