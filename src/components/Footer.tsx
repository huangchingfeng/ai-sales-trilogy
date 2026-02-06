import { Link } from 'react-router-dom';
import { courses } from '../data/courseData';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🚀</span>
              <span className="font-bold text-xl text-white">AI 業務三部曲</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              把「業務最耗時間的 3 件事」交給 AI：寫內容、做簡報、快速研究。
              6 小時三堂課，讓你從「工具會用」變成「成交會用」。
            </p>
            <p className="text-sm text-gray-500">
              講師：阿峰老師（黃敬峰）
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">課程列表</h4>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.courseSlug}>
                  <Link
                    to={`/course/${course.courseSlug}`}
                    className="hover:text-white transition-colors"
                  >
                    {course.icon} {course.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">聯絡方式</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://line.me/ti/p/@afeng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>💬</span> LINE 官方帳號
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@aifeng.tw"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>📧</span> contact@aifeng.tw
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} AI 峰哥. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
