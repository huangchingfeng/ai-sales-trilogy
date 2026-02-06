import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { courses } from '../data/courseData';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🚀</span>
            <span className="font-bold text-xl text-gray-900">AI 業務三部曲</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/') ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              課程總覽
            </Link>
            {courses.map((course) => (
              <Link
                key={course.courseSlug}
                to={`/course/${course.courseSlug}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(`/course/${course.courseSlug}`)
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {course.icon} {course.shortName}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/#pricing" className="btn-primary text-sm">
              立即報名
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium ${
                  isActive('/') ? 'bg-primary-50 text-primary-700' : 'text-gray-600'
                }`}
              >
                課程總覽
              </Link>
              {courses.map((course) => (
                <Link
                  key={course.courseSlug}
                  to={`/course/${course.courseSlug}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium ${
                    isActive(`/course/${course.courseSlug}`)
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-600'
                  }`}
                >
                  {course.icon} {course.shortName}
                </Link>
              ))}
              <div className="pt-2">
                <Link
                  to="/#pricing"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-primary w-full text-center"
                >
                  立即報名
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
