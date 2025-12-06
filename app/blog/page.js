import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// قاعدة بيانات مبسطة للمقالات مع الصور
const posts = [
  {
    slug: "العناية-بالسيارات-بالرياض",
    title: "خدمات العناية بالسيارات بالرياض – من اكستريم نانو Xtreme Nano",
    description:
      "اكتشف اكستريم نانو بالرياض، المركز الأفضل في العناية المتكاملة بالسيارات. نقدم حماية الطلاء الأصلية، تلميع النانو سيراميك، العزل الحراري، والتنظيف الداخلي الفاخر بأعلى جودة. خبرة واحترافية تجعل سيارتك دائمًا كالجديدة. احجز الآن في اكستريم نانو بالرياض وتمتع بخدمة تليق بسيارتك الفاخرة!",
    image: "/001.png",
  },
  {
    slug: "حماية-السيارات-بالرياض",
    title: "حماية السيارات بالرياض من اكستريم نانو | أفضل تقنيات XPEL وPPF والنانو سيراميك لعام 2025",
    description:
      "حماية سيارتك تبدأ من اكستريم نانو بالرياض! اكتشف أحدث تقنيات حماية الطلاء باستخدام أفلام XPEL وPPF والنانو سيراميك لعام 2025 مع ضمانات معتمدة وجودة عالمية تحافظ على لمعان سيارتك ومظهرها الفاخر.",
    image: "/28.png",
  },
  
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="max-w-6xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">المدونة</h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden border border-gray-100"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-right">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                <Link
                  href={`/blog/${encodeURIComponent(post.slug)}`}
                  className="text-[#7F3F97] font-semibold hover:underline"
                >
                  قراءة المقال →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
