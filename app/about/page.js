"use client";

import { Target, Eye, Heart, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="py-20 bg-gray-50"
      dir="rtl"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">

        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#7F3F97] mb-6">
            من نحن – Xtreme Nano الرياض
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            في <span className="font-bold text-[#7F3F97]">Xtreme Nano بالرياض</span> نقدّم أحدث خدمات العناية 
            الاحترافية بالسيارات باستخدام تقنيات متقدمة ومواد عالية الجودة 
            لضمان حماية سيارتك وإظهارها بأفضل صورة ممكنة، وذلك في جميع مناطق الرياض.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div className="text-right" variants={itemVariants}>
            <h3 className="text-3xl font-bold text-black mb-6">
              <span className="text-[#7F3F97]">Xtreme Nano الرياض</span> – خبراء العناية بالسيارات
            </h3>
            <p className="text-lg text-black mb-6 leading-relaxed">
              نقدم مجموعة واسعة من الخدمات الاحترافية، تشمل حماية الطلاء، العناية الخارجية والداخلية، أفلام الحماية (PPF)، النانو سيراميك، التلميع الاحترافي، غسيل السيارات المتقدم، تنظيف المقاعد والفرش، وتعقيم كامل للمقصورة باستخدام أفضل المواد العالمية.
            </p>
            <p className="text-lg text-black mb-6 leading-relaxed">
              نحرص على تقديم تجربة مختلفة بالكامل لعملائنا في الرياض، حيث نهتم بأدق التفاصيل لضمان مستوى لا يُضاهى من الجودة والاحترافية ليحصل العميل على سيارة تبدو وكأنها جديدة تمامًا.
            </p>
          </motion.div>

          <motion.div className="relative" variants={imageVariants}>
            <img
              src="/aboutus.png"
              alt="About Xtreme Nano Riyadh"
              className="w-full h-80 object-cover rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>

        {/* About Us Extended Section */}
        <motion.div className="bg-white p-10 rounded-3xl shadow-xl mb-16" variants={itemVariants}>
          <h3 className="text-3xl font-bold text-[#7F3F97] mb-6 text-right">من نحن بالتفصيل – Xtreme Nano الرياض</h3>
          <p className="text-lg text-black leading-relaxed text-right">
            نحن في <span className="font-bold text-[#7F3F97]">Xtreme Nano بالرياض</span> أكثر من مجرد مركز للعناية بالسيارات؛ نحن شغوفون بتقديم تجربة متكاملة تجمع بين التقنية الحديثة والخبرة الطويلة لضمان حماية كل جزء من سيارتك.
          </p>
          <p className="text-lg text-black mt-4 leading-relaxed text-right">
            منذ تأسيسنا في قلب الرياض، نسعى لتقديم خدمات مخصصة لكل نوع من السيارات، مع التركيز على أدق التفاصيل في الحماية والجماليات، سواء للسيارات الفاخرة أو اليومية.
          </p>
          <p className="text-lg text-black mt-4 leading-relaxed text-right">
            فلسفتنا تقوم على الجمع بين الابتكار والجودة، بحيث يحصل كل عميل على أفضل النتائج دون أي تنازل عن معايير الأمان والاحترافية.
          </p>
        </motion.div>

        {/* Goal, Vision, Mission, Prices Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Goal */}
          <motion.div
            className="bg-[#7F3F97] text-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-16 h-16 bg-[#e9cb1d] rounded-2xl flex items-center justify-center mb-6 ml-auto">
              <Target className="w-8 h-8 text-black" />
            </div>
            <h4 className="text-xl font-bold text-[#e9cb1d] mb-4 text-right">هدفنا</h4>
            <p className="leading-relaxed text-right">
              أن نكون مركز العناية بالسيارات رقم واحد في مدينة الرياض، وأن نقدم خدمات احترافية تضاهي المراكز العالمية.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="bg-[#7F3F97] text-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-16 h-16 bg-[#e9cb1d] rounded-2xl flex items-center justify-center mb-6 ml-auto">
              <Eye className="w-8 h-8 text-black" />
            </div>
            <h4 className="text-xl font-bold text-[#e9cb1d] mb-4 text-right">رؤيتنا</h4>
            <p className="leading-relaxed text-right">
              أن نصبح الخيار الأول لسكان الرياض في كل ما يتعلق بحماية السيارة والعناية الفاخرة، من خلال خدمات دقيقة ونتائج استثنائية.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="bg-[#7F3F97] text-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-16 h-16 bg-[#e9cb1d] rounded-2xl flex items-center justify-center mb-6 ml-auto">
              <Heart className="w-8 h-8 text-black" />
            </div>
            <h4 className="text-xl font-bold text-[#e9cb1d] mb-4 text-right">رسالتنا</h4>
            <p className="leading-relaxed text-right">
              تقديم تجربة عناية فاخرة لسكان الرياض، تعتمد على الجودة والابتكار والاهتمام بأدق التفاصيل لتوفير حماية تدوم طويلًا.
            </p>
          </motion.div>

          {/* Prices */}
          <motion.div
            className="bg-[#7F3F97] text-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-16 h-16 bg-[#e9cb1d] rounded-2xl flex items-center justify-center mb-6 ml-auto">
              <DollarSign className="w-8 h-8 text-black" />
            </div>
            <h4 className="text-xl font-bold text-[#e9cb1d] mb-4 text-right">أسعارنا</h4>
            <p className="leading-relaxed text-right">
              نوفّر في الرياض أفضل جودة مقابل سعر، مع باقات مناسبة للجميع، وعروض مستمرة تلائم احتياجات العملاء وخدمات سياراتهم.
            </p>
          </motion.div>
        </div>

        {/* Excellence Section */}
        <motion.div className="bg-gray-100 p-10 rounded-3xl shadow-xl mb-16" variants={itemVariants}>
          <h3 className="text-3xl font-bold text-[#7F3F97] mb-6 text-right">تميزنا في الرياض</h3>
          <p className="text-lg text-black leading-relaxed text-right">
            في <span className="font-bold text-[#7F3F97]">Xtreme Nano بالرياض</span> نفهم طبيعة السيارات واحتياجاتها في بيئة الرياض الحارة والجافة. نقدم حلولاً متكاملة تحافظ على طلاء السيارة، تلميعها، وحمايتها من العوامل المناخية المختلفة.
          </p>
          <p className="text-lg text-black mt-4 leading-relaxed text-right">
            نحن ملتزمون بالسرعة والدقة، مع توفير تجربة عملاء سلسة وممتعة، مع فريق مدرب خصيصًا لتقديم أفضل مستوى من الخدمات لجميع سيارات الرياض.
          </p>
          <p className="text-lg text-black mt-4 leading-relaxed text-right">
            هدفنا هو أن يشعر كل عميل في الرياض بأن سيارته في أيدٍ أمينة، وأن يحصل على نتائج مذهلة تجعل سيارته تبدو وكأنها جديدة دائماً.
          </p>
        </motion.div>

      </div>
    </motion.section>
  );
}
