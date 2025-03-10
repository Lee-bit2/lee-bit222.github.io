import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { BookOpen, Monitor, Users, MessageCircle, ArrowRight } from 'lucide-react';
import Lesson19 from './pages/Lesson19';
import Lesson20 from './pages/Lesson20';
import Lesson21 from './pages/Lesson21';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-4 py-6">
            <Link to="/" className="text-3xl font-bold text-indigo-800 hover:text-indigo-600 transition-colors">
              Hướng Nghiệp với Tin Học
            </Link>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lesson-19" element={<Lesson19 />} />
          <Route path="/lesson-20" element={<Lesson20 />} />
          <Route path="/lesson-21" element={<Lesson21 />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-12">
          <div className="max-w-5xl mx-auto px-4 py-6">
            <p className="text-center text-gray-600">
              © 2024 Hướng Nghiệp IT. Tất cả nội dung được biên soạn cẩn thận để giúp học sinh định hướng nghề nghiệp.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid gap-8">
        {/* Topic Introduction */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-indigo-100">
          <h2 className="text-2xl font-semibold text-indigo-900 mb-4">
            Chủ đề 5: Hướng nghiệp với tin học
          </h2>
          <p className="text-gray-600 mb-4">
            Khám phá các cơ hội nghề nghiệp trong lĩnh vực công nghệ thông tin và những kỹ năng cần thiết để thành công.
          </p>
        </div>

        {/* Lessons */}
        <div className="grid gap-6">
          {/* Lesson 19 */}
          <div 
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all cursor-pointer border border-indigo-100 group"
            onClick={() => navigate('/lesson-19')}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                <Monitor className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Bài 19: Dịch vụ sửa chữa và bảo trì máy tính
                  </h3>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transform group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-gray-600">
                  Tìm hiểu về nghề sửa chữa và bảo trì máy tính, các kỹ năng cần thiết và cơ hội việc làm.
                </p>
              </div>
            </div>
          </div>

          {/* Lesson 20 */}
          <div 
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all cursor-pointer border border-indigo-100 group"
            onClick={() => navigate('/lesson-20')}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Bài 20: Nhóm nghề quản trị thuộc ngành CNTT
                  </h3>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transform group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-gray-600">
                  Khám phá các vai trò quản trị trong CNTT và con đường phát triển nghề nghiệp.
                </p>
              </div>
            </div>
          </div>

          {/* Lesson 21 */}
          <div 
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all cursor-pointer border border-indigo-100 group"
            onClick={() => navigate('/lesson-21')}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Bài 21: Hội thảo hướng nghiệp
                  </h3>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transform group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-gray-600">
                  Tổng hợp xu hướng nghề nghiệp và chia sẻ từ các chuyên gia trong ngành CNTT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App