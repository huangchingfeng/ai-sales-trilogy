import { ArrowRight, CheckCircle, XCircle, Clock, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { highlights, painPoints, beforeAfter, courses } from '../data/courseData';
import { PricingSection } from '../components/PricingSection';

export function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMGMtNC40MTggMC04LTMuNTgyLTgtOHMzLjU4Mi04IDgtOCA4IDMuNTgyIDggOC0zLjU4MiA4LTggOHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              把「業務最耗時間的 3 件事」
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-300">
                交給 AI
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              寫內容、做簡報、快速研究。6 小時三堂課，讓你從「工具會用」變成「成交會用」：
              <span className="text-white font-medium">更快被信任、更快拿到下一步。</span>
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <span className="text-2xl block mb-2">{item.icon}</span>
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#pricing" className="btn-accent text-lg px-8 py-4">
                立即報名（三堂全包 $1,899）
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="#pricing" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4">
                我想先選一堂（單堂 $699）
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="text-primary-600" size={20} />
              <span>10,000+ 學員培訓</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="text-primary-600" size={20} />
              <span>400+ 企業合作</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-primary-600" size={20} />
              <span>2 小時 / 堂</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">你會遇到的狀況</h2>
            <p className="section-subtitle">這些問題，每個認真的業務都有</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {painPoints.map((point, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-4 p-5 rounded-xl mb-3 ${
                  idx === painPoints.length - 1
                    ? 'bg-primary-50 border-2 border-primary-200'
                    : 'bg-gray-50'
                }`}
              >
                <span className="text-2xl flex-shrink-0">
                  {idx === painPoints.length - 1 ? '💡' : '😫'}
                </span>
                <p className={`text-lg ${idx === painPoints.length - 1 ? 'font-semibold text-primary-800' : 'text-gray-700'}`}>
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">這套課程帶來的改變</h2>
            <p className="section-subtitle">從「沒時間做」到「快速做好」</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <XCircle className="text-red-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Before</h3>
              </div>
              <div className="space-y-4">
                {beforeAfter.before.map((item, idx) => (
                  <div key={idx} className="p-4 bg-red-50 rounded-lg border border-red-100">
                    <span className="font-semibold text-red-800 block mb-1">{item.area}</span>
                    <p className="text-red-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="bg-white rounded-2xl p-8 border-2 border-green-200 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="text-green-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">After</h3>
              </div>
              <div className="space-y-4">
                {beforeAfter.after.map((item, idx) => (
                  <div key={idx} className="p-4 bg-green-50 rounded-lg border border-green-100">
                    <span className="font-semibold text-green-800 block mb-1">{item.area}</span>
                    <p className="text-green-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">三堂課，三個可複製 SOP</h2>
            <p className="section-subtitle">每堂 2 小時，帶走可立即使用的產出與模板</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <Link
                key={course.courseSlug}
                to={`/course/${course.courseSlug}`}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="text-5xl mb-4">{course.icon}</div>
                  <div className="text-sm text-primary-600 font-semibold mb-2">課程 {idx + 1}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {course.shortName}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">{course.hero.subhead}</p>

                  <div className="space-y-2 mb-6">
                    {course.hero.bullets.slice(0, 3).map((bullet, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                      <span className="text-gray-500 text-sm ml-1">/ 2小時</span>
                    </div>
                    <span className="text-primary-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      了解更多 <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            準備好讓 AI 幫你省下那些重複的時間了嗎？
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            把時間花在成交與客戶，不是花在準備與排版。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="btn-accent text-lg px-8 py-4">
              三堂全包 $1,899
            </a>
            <a href="#pricing" className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 rounded-lg text-lg px-8 py-4 font-semibold transition-colors">
              單堂 $699
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
