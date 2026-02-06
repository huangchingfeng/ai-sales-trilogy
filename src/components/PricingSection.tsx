import { Check, Star, ArrowRight } from 'lucide-react';
import { bundle, courses, courseSelector, bundleBenefits } from '../data/courseData';
import { Link } from 'react-router-dom';

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">方案與價格</h2>
          <p className="section-subtitle">
            選擇適合你的方案，開始把時間花在成交，而不是準備
          </p>
        </div>

        {/* Course Selector */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">你該選哪一堂？</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courseSelector.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                  item.slug === 'bundle'
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-200 hover:border-primary-300'
                }`}
              >
                <span className="text-gray-700">{item.need}</span>
                <Link
                  to={item.slug === 'bundle' ? '#pricing' : `/course/${item.slug}`}
                  className={`font-semibold ${
                    item.slug === 'bundle' ? 'text-primary-700' : 'text-primary-600'
                  }`}
                >
                  → {item.course}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {bundle.pricing.map((plan) => (
            <div
              key={plan.planId}
              className={`relative rounded-2xl p-8 ${
                plan.isPopular
                  ? 'bg-white shadow-xl border-2 border-primary-500 scale-105'
                  : 'bg-white shadow-md border border-gray-200'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 bg-primary-600 text-white text-sm font-semibold rounded-full">
                    <Star size={14} fill="currentColor" /> 最划算
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-gray-900">
                    ${plan.price.toLocaleString()}
                  </span>
                  <span className="text-gray-500">{plan.currency}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`/checkout?plan=${plan.planId}`}
                className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.isPopular
                    ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {plan.isPopular ? '立即報名' : '選擇課程'}
                <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>

        {/* Single Course Cards */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">或選擇單堂課程</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Link
                key={course.courseSlug}
                to={`/course/${course.courseSlug}`}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-200 transition-all group"
              >
                <div className="text-3xl mb-3">{course.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {course.shortName}
                </h4>
                <p className="text-sm text-gray-600 mb-4">{course.hero.subhead}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900">${course.price}</span>
                  <span className="text-primary-600 text-sm font-medium flex items-center gap-1">
                    了解更多 <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bundle Benefits */}
        <div className="bg-primary-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">為什麼三堂全包更適合？</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bundleBenefits.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h4 className="font-semibold text-lg mb-1">{benefit.title}</h4>
                <p className="text-primary-100">{benefit.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="/checkout?plan=bundle"
              className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              三堂全包 $1,899 <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Upgrade Rules */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h4 className="font-semibold text-amber-900 mb-3">升級規則</h4>
          <ul className="space-y-2 text-amber-800">
            {bundle.upgradeRules.map((rule, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <Check size={16} className="text-amber-600" />
                {rule.note}
              </li>
            ))}
            <li className="flex items-center gap-2 pt-2 border-t border-amber-200 mt-2">
              <Star size={16} className="text-amber-600" />
              {bundle.upsellToMainCourse.discountNote}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
