import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, XCircle, Clock, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { courses, bundle } from '../data/courseData';

export function CoursePage() {
  const { slug } = useParams<{ slug: string }>();
  const course = courses.find((c) => c.courseSlug === slug);
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  if (!course) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">找不到此課程</h1>
          <Link to="/" className="btn-primary">
            返回首頁
          </Link>
        </div>
      </div>
    );
  }

  const courseIndex = courses.findIndex((c) => c.courseSlug === slug);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAyMGMtNC40MTggMC04LTMuNTgyLTgtOHMzLjU4Mi04IDgtOCA4IDMuNTgyIDggOC0zLjU4MiA4LTggOHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">{course.icon}</span>
              <span className="text-primary-300 font-semibold">課程 {courseIndex + 1}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              {course.hero.h1}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              {course.hero.subhead}
            </p>

            {/* Bullets */}
            <div className="space-y-3 mb-10">
              {course.hero.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                  <span className="text-gray-200">{bullet}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`/checkout?course=${course.courseSlug}`} className="btn-accent text-lg px-8 py-4">
                報名本堂 ${course.price}
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="/checkout?plan=bundle" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4">
                直接買三堂全包 ${bundle.pricing[1].price}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Course Info Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-primary-600" />
              <span>{course.durationMinutes} 分鐘</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText size={18} className="text-primary-600" />
              <span>使用工具：{course.tools.join('、')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      {course.problem && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center">這堂課解決什麼</h2>
            <p className="text-center text-gray-600 mb-8">你現在卡的不是能力，是時間與流程</p>

            <div className="space-y-4">
              {course.problem.map((p, idx) => (
                <div key={idx} className="bg-white rounded-xl p-5 border border-gray-200 flex items-start gap-4">
                  <span className="text-2xl">😫</span>
                  <p className="text-gray-700 text-lg">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Outcomes Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">上完你會帶走什麼</h2>
          <p className="text-center text-gray-600 mb-8">可直接使用的產出與模板</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.outcomes.map((outcome, idx) => (
              <div key={idx} className="bg-green-50 rounded-xl p-5 border border-green-100 flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-800 font-medium">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Who Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">適合誰 / 不適合誰</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Suitable */}
            <div className="bg-white rounded-2xl p-6 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="text-green-600" size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">適合你</h3>
              </div>
              <ul className="space-y-3">
                {course.forWho.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Suitable */}
            {course.notForWho && (
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <XCircle className="text-red-600" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">不太適合</h3>
                </div>
                <ul className="space-y-3">
                  {course.notForWho.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600">
                      <XCircle className="text-red-400 flex-shrink-0 mt-1" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">課程大綱</h2>
          <p className="text-center text-gray-600 mb-8">2 小時完整流程</p>

          <div className="space-y-3">
            {course.modules.map((module, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedModule(expandedModule === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-mono text-primary-600 bg-primary-50 px-2 py-1 rounded">
                      {module.start}–{module.end}
                    </span>
                    <span className="font-semibold text-gray-900">{module.title}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {module.deliverable && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full hidden sm:inline">
                        產出：{module.deliverable}
                      </span>
                    )}
                    {expandedModule === idx ? (
                      <ChevronUp className="text-gray-400" size={20} />
                    ) : (
                      <ChevronDown className="text-gray-400" size={20} />
                    )}
                  </div>
                </button>

                {expandedModule === idx && (
                  <div className="px-6 pb-4 border-t border-gray-200">
                    <ul className="space-y-2 mt-4">
                      {module.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <span className="text-primary-500 mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    {module.deliverable && (
                      <div className="mt-4 p-3 bg-green-50 rounded-lg text-green-700 text-sm sm:hidden">
                        產出：{module.deliverable}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prework Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">課前準備</h2>
          <p className="text-center text-gray-600 mb-8">請在上課前準備好以下資料，現場會直接使用</p>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-amber-200">
            <ul className="space-y-4">
              {course.prework.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center font-semibold flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-gray-700 text-lg pt-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">常見問題</h2>

          <div className="mt-8 space-y-3">
            {course.faq.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">Q：{item.q}</span>
                  {expandedFaq === idx ? (
                    <ChevronUp className="text-gray-400 flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                  )}
                </button>

                {expandedFaq === idx && (
                  <div className="px-6 pb-4 border-t border-gray-200">
                    <p className="text-gray-600 mt-4">A：{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-4">{course.icon}</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{course.shortName}</h2>
          <p className="text-xl text-primary-100 mb-8">{course.hero.subhead}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`/checkout?course=${course.courseSlug}`} className="btn-accent text-lg px-8 py-4">
              報名本堂 ${course.price}
            </a>
            <a href="/checkout?plan=bundle" className="bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 rounded-lg text-lg px-8 py-4 font-semibold transition-colors">
              三堂全包更划算 ${bundle.pricing[1].price}
            </a>
          </div>

          <p className="mt-6 text-primary-200 text-sm">
            三堂全包省 $198，還能折抵正課 $1,000
          </p>
        </div>
      </section>

      {/* Other Courses */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">其他課程</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
            {courses
              .filter((c) => c.courseSlug !== slug)
              .map((c) => (
                <Link
                  key={c.courseSlug}
                  to={`/course/${c.courseSlug}`}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{c.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                        {c.shortName}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">{c.hero.subhead}</p>
                      <span className="text-primary-600 text-sm font-medium flex items-center gap-1">
                        了解更多 <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
