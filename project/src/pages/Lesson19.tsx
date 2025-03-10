import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, Wrench, PenTool as Tool, Computer, Brain, BookOpen, Users, Settings, HardDrive, Cpu, Monitor } from 'lucide-react';

export default function Lesson19() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Quay lại trang chủ
      </Link>

      <article className="prose prose-indigo max-w-none">
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Bài 19: Dịch vụ sửa chữa và bảo trì máy tính
          </h1>

          {/* Images Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800"
                alt="Sửa chữa máy tính"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <p className="text-gray-700 font-medium">Sửa chữa phần cứng</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800"
                alt="Bảo trì máy tính"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <p className="text-gray-700 font-medium">Bảo trì định kỳ</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800"
                alt="Cài đặt phần mềm"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <p className="text-gray-700 font-medium">Cài đặt phần mềm</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                1. Tổng quan về nghề sửa chữa và bảo trì máy tính
              </h2>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <BookOpen className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <span>Người làm nghề sửa chữa và bảo trì máy tính cần chú ý một số công việc nào liên quan đến phần cứng và phần mềm khi gặp sự cố </span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <span>Những kiến thức kĩ năng cần có để làm nghề </span>
                  </li>
                  <li className="flex items-start">
                    <Tool className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <span>Nêu một số tình huống thực tế trong công việc sửa chữa máy tính - sau đó đưa ra cách khắc phục, sửa chữa</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                <Tool className="w-5 h-5 mr-2" />
                Kỹ năng cần thiết
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <HardDrive className="w-5 h-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold">Phần cứng</h4>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Kiến thức về linh kiện máy tính</li>
                    <li>• Kỹ năng lắp ráp và thay thế</li>
                    <li>• Chẩn đoán lỗi phần cứng</li>
                  </ul>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <Settings className="w-5 h-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold">Phần mềm</h4>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Cài đặt hệ điều hành</li>
                    <li>• Xử lý lỗi phần mềm</li>
                    <li>• Bảo mật và antivirus</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                2. Ứng dụng thực tế
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <Monitor className="w-5 h-5 text-indigo-600 mr-2" />
                    <h4 className="font-medium text-gray-900">Doanh nghiệp</h4>
                  </div>
                  <p className="text-gray-600">Bảo trì định kỳ hệ thống máy tính văn phòng, xử lý sự cố khẩn cấp</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <Computer className="w-5 h-5 text-indigo-600 mr-2" />
                    <h4 className="font-medium text-gray-900">Cá nhân</h4>
                  </div>
                  <p className="text-gray-600">Sửa chữa, nâng cấp máy tính cá nhân, tư vấn mua sắm thiết bị</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <Cpu className="w-5 h-5 text-indigo-600 mr-2" />
                    <h4 className="font-medium text-gray-900">Giáo dục</h4>
                  </div>
                  <p className="text-gray-600">Bảo trì phòng máy tính trường học, hỗ trợ kỹ thuật cho giảng dạy</p>
                </div>
              </div>
            </section>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <section className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Ưu điểm
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Nhu cầu thị trường ổn định</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Có thể tự khởi nghiệp</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Thu nhập tốt với kinh nghiệm</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Cơ hội học hỏi công nghệ mới</span>
                  </li>
                </ul>
              </section>

              <section className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-900 mb-4 flex items-center">
                  <XCircle className="w-5 h-5 mr-2" />
                  Nhược điểm
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    <span>Áp lực công việc cao</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    <span>Cần cập nhật kiến thức liên tục</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    <span>Công việc có thể không ổn định</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    <span>Cạnh tranh ngày càng cao</span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}