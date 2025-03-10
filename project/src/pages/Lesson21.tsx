import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, TrendingUp, Users, Briefcase, GraduationCap, Building, Stethoscope, BookOpen, ShoppingBag, Factory, Film, School, Ban as Bank, Heart, Laptop, Store, Cog, Radio } from 'lucide-react';

export default function Lesson21() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Quay lại trang chủ
      </Link>

      <article className="prose prose-indigo max-w-none">
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Bài 21: Hội thảo hướng nghiệp
          </h1>

          <div className="space-y-8">
            {/* Industry Applications */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                1. Ứng dụng CNTT trong các ngành
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Finance & Banking */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Bank className="w-6 h-6 text-emerald-600 mr-2" />
                    <h3 className="text-xl font-semibold text-emerald-900">Tài chính - Ngân hàng</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-emerald-800 mb-2">Vai trò</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 mt-2"></div>
                          <span>Đảm bảo an toàn và bảo mật cho hệ thống giao dịch trực tuyến</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 mt-2"></div>
                          <span>Phát triển và duy trì các phần mềm quản lý tài chính</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-emerald-800 mb-2">Công việc</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Lập trình viên phần mềm tài chính</li>
                        <li>• Chuyên viên an ninh mạng</li>
                        <li>• Chuyên viên phân tích dữ liệu tài chính</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Healthcare */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Stethoscope className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold text-blue-900">Y tế</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-blue-800 mb-2">Vai trò</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></div>
                          <span>Quản lý hệ thống thông tin bệnh viện</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></div>
                          <span>Phát triển ứng dụng hỗ trợ chẩn đoán</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800 mb-2">Công việc</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Chuyên viên quản trị HTTT y tế</li>
                        <li>• Lập trình viên ứng dụng y tế</li>
                        <li>• Kỹ sư thiết bị y tế</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <School className="w-6 h-6 text-amber-600 mr-2" />
                    <h3 className="text-xl font-semibold text-amber-900">Giáo dục</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-amber-800 mb-2">Vai trò</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-2 mt-2"></div>
                          <span>Phát triển hệ thống học tập trực tuyến (LMS)</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-2 mt-2"></div>
                          <span>Ứng dụng VR/AR trong giáo dục</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-amber-800 mb-2">Công việc</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Chuyên viên quản trị LMS</li>
                        <li>• Nhà phát triển phần mềm giáo dục</li>
                        <li>• Chuyên viên thiết kế bài giảng điện tử</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* E-commerce */}
                <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <ShoppingBag className="w-6 h-6 text-purple-600 mr-2" />
                    <h3 className="text-xl font-semibold text-purple-900">Thương mại điện tử</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-purple-800 mb-2">Vai trò</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-2"></div>
                          <span>Xây dựng nền tảng giao dịch trực tuyến</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-2"></div>
                          <span>Phân tích dữ liệu người dùng</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-800 mb-2">Công việc</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Lập trình viên web TMĐT</li>
                        <li>• Chuyên viên an ninh mạng</li>
                        <li>• Chuyên viên phân tích dữ liệu</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Educational Institutions */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                2. Cơ sở đào tạo CNTT tại Việt Nam
              </h2>

              <div className="grid gap-6">
                {/* Hanoi University of Science and Technology */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-4">
                    <Building className="w-6 h-6 text-indigo-600 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">Đại học Bách khoa Hà Nội</h3>
                  </div>
                  <div className="pl-8">
                    <h4 className="font-medium text-gray-800 mb-2">Các ngành đào tạo</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Công nghệ Thông tin (IT-E7)</li>
                      <li>• Khoa học Máy tính (IT1)</li>
                      <li>• Kỹ thuật Máy tính (IT2)</li>
                    </ul>
                  </div>
                </div>

                {/* VNU University of Science */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-4">
                    <Building className="w-6 h-6 text-indigo-600 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">ĐH Khoa học Tự nhiên, ĐHQG Hà Nội</h3>
                  </div>
                  <div className="pl-8">
                    <h4 className="font-medium text-gray-800 mb-2">Các ngành đào tạo</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Khoa học Máy tính và Thông tin (QHT98)</li>
                      <li>• Kĩ thuật điện tử và tin học (QHT94)</li>
                      <li>• Khoa học dữ liệu (QHT93)</li>
                    </ul>
                  </div>
                </div>

                {/* UIT */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-4">
                    <Building className="w-6 h-6 text-indigo-600 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">ĐH Công nghệ Thông tin, ĐHQG TP.HCM</h3>
                  </div>
                  <div className="pl-8">
                    <h4 className="font-medium text-gray-800 mb-2">Các ngành đào tạo</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Công nghệ Thông tin (7480201)</li>
                      <li>• Khoa học Máy tính (7480101)</li>
                      <li>• Kỹ thuật Phần mềm (7480103)</li>
                      <li>• An toàn Thông tin (7480202)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Images Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                3. Hình ảnh minh họa
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800"
                    alt="Bảo trì máy tính"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <p className="text-gray-700 font-medium">Dịch vụ sửa chữa và bảo trì</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=800"
                    alt="Quản trị mạng"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <p className="text-gray-700 font-medium">Quản trị hệ thống CNTT</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800"
                    alt="Hội thảo CNTT"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <p className="text-gray-700 font-medium">Hội thảo hướng nghiệp</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}