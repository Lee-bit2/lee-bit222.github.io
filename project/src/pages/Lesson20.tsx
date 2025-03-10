import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle, 
  XCircle, 
  Database, 
  Server, 
  Cloud, 
  Shield,
  Network,
  Lock,
  Cog,
  BookOpen,
  Cpu,
  Globe,
  Wifi,
  Bot,
  Settings,
  Smartphone
} from 'lucide-react';

export default function Lesson20() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Quay lại trang chủ
      </Link>

      <article className="prose prose-indigo max-w-none">
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Bài 20: Nhóm nghề quản trị thuộc ngành CNTT
          </h1>

          {/* Images Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=800"
                alt="Quản trị mạng"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <p className="text-gray-700 font-medium">Quản trị mạng</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800"
                alt="Bảo mật hệ thống"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <p className="text-gray-700 font-medium">Bảo mật hệ thống</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800"
                alt="Quản trị dữ liệu"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <p className="text-gray-700 font-medium">Quản trị dữ liệu</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Section 1: Overview */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                1. Nhóm nghề quản trị thuộc ngành công nghệ thông tin
              </h2>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Công việc chính của chuyên gia quản trị</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <div className="flex items-center mb-3">
                      <Network className="w-6 h-6 text-blue-600 mr-2" />
                      <h4 className="font-semibold">Quản trị mạng</h4>
                    </div>
                    <p className="text-gray-600">Quản lý và duy trì hệ thống mạng, cài đặt, cấu hình và bảo mật mạng, theo dõi hiệu suất, xử lý sự cố mạng.</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <div className="flex items-center mb-3">
                      <Lock className="w-6 h-6 text-blue-600 mr-2" />
                      <h4 className="font-semibold">Bảo mật hệ thống</h4>
                    </div>
                    <p className="text-gray-600">Bảo vệ dữ liệu và hệ thống khỏi các mối đe dọa và tấn công mạng, phát triển và triển khai biện pháp bảo mật.</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <div className="flex items-center mb-3">
                      <Cog className="w-6 h-6 text-blue-600 mr-2" />
                      <h4 className="font-semibold">Quản trị hệ thống</h4>
                    </div>
                    <p className="text-gray-600">Quản lý và duy trì toàn bộ hệ thống thông tin, cài đặt, cập nhật và xử lý sự cố.</p>
                  </div>
                </div>
              </div>

              {/* Required Knowledge */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Kiến thức cần thiết</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <div className="flex items-center mb-3">
                      <Globe className="w-5 h-5 text-indigo-600 mr-2" />
                      <h4 className="font-semibold">Mạng máy tính</h4>
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Hiểu cấu trúc và hoạt động của mạng</li>
                      <li>• Giao thức mạng</li>
                      <li>• Phân tích lưu lượng mạng</li>
                      <li>• Quản lý thiết bị mạng</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <div className="flex items-center mb-3">
                      <Shield className="w-5 h-5 text-indigo-600 mr-2" />
                      <h4 className="font-semibold">Bảo mật thông tin</h4>
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Phương thức tấn công mạng</li>
                      <li>• Hệ thống phát hiện xâm nhập (IDS)</li>
                      <li>• Quản lý tường lửa</li>
                      <li>• Bảo vệ dữ liệu</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Market Demand */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                2. Nhu cầu nhân lực và xu hướng phát triển
              </h2>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">Xu hướng công nghệ mới</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <Wifi className="w-5 h-5 text-purple-600 mr-2" />
                      <span className="font-medium">Mạng 5G</span>
                    </div>
                    <p className="text-sm text-gray-600">Tăng cường kết nối và quản lý mạng di động</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <Cloud className="w-5 h-5 text-purple-600 mr-2" />
                      <span className="font-medium">Điện toán đám mây</span>
                    </div>
                    <p className="text-sm text-gray-600">AWS, Azure và các nền tảng cloud</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <Bot className="w-5 h-5 text-purple-600 mr-2" />
                      <span className="font-medium">AI & ML</span>
                    </div>
                    <p className="text-sm text-gray-600">Tự động hóa quản lý mạng</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Ngành học liên quan</h3>
                <div className="grid gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Quản trị mạng máy tính</h4>
                    <p className="text-gray-600">Xây dựng và quản lý hệ thống mạng, bảo mật thông tin, tối ưu hóa hiệu suất</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">An ninh mạng</h4>
                    <p className="text-gray-600">Bảo vệ hệ thống khỏi các mối đe dọa, xây dựng chính sách bảo mật</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Mạng máy tính và truyền thông</h4>
                    <p className="text-gray-600">Thiết kế và triển khai hệ thống mạng, quản lý truyền thông dữ liệu</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Advantages and Disadvantages */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <section className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Ưu điểm
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Nhu cầu thị trường cao và ổn định</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Thu nhập hấp dẫn</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Cơ hội phát triển chuyên môn</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span>Làm việc với công nghệ tiên tiến</span>
                  </li>
                </ul>
              </section>

              <section className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-900 mb-4 flex items-center">
                  <XCircle className="w-5 h-5 mr-2" />
                  Thách thức
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    <span>Áp lực công việc cao</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    <span>Cần học tập liên tục</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    <span>Trách nhiệm lớn</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    <span>Đối phó với các mối đe dọa bảo mật</span>
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