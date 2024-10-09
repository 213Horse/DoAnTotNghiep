import { MapPin, Calendar, Users, ChevronDown, Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image src="/placeholder.svg" alt="Logo" width={120} height={40} className="h-10" />
            <nav className="hidden md:flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-gray-900">Khám phá</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">Ưu đãi</Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">Cộng đồng</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
              Đăng nhập
            </button>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image src="/placeholder.svg" alt="Hero Image" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Khám phá thế giới cùng Holicay</h1>
            <p className="text-xl md:text-2xl mb-8">Tìm kiếm và đặt chỗ cho chuyến đi tiếp theo của bạn</p>
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Điểm đến nổi bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DestinationCard image="/placeholder.svg" name="Paris" country="Pháp" />
            <DestinationCard image="/placeholder.svg" name="Tokyo" country="Nhật Bản" />
            <DestinationCard image="/placeholder.svg" name="New York" country="Hoa Kỳ" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Tại sao chọn Holicay?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<MapPin className="h-12 w-12 text-blue-600" />}
              title="Đa dạng điểm đến"
              description="Khám phá hàng nghìn điểm đến hấp dẫn trên toàn thế giới."
            />
            <FeatureCard
              icon={<Calendar className="h-12 w-12 text-blue-600" />}
              title="Đặt chỗ linh hoạt"
              description="Dễ dàng thay đổi hoặc hủy đặt chỗ khi cần thiết."
            />
            <FeatureCard
              icon={<Users className="h-12 w-12 text-blue-600" />}
              title="Hỗ trợ 24/7"
              description="Đội ngũ hỗ trợ khách hàng luôn sẵn sàng giúp đỡ bạn."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Về Holicay</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-gray-300">Giới thiệu</Link></li>
                <li><Link href="#" className="hover:text-gray-300">Tuyển dụng</Link></li>
                <li><Link href="#" className="hover:text-gray-300">Điều khoản sử dụng</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hỗ trợ</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-gray-300">Trung tâm trợ giúp</Link></li>
                <li><Link href="#" className="hover:text-gray-300">Câu hỏi thường gặp</Link></li>
                <li><Link href="#" className="hover:text-gray-300">Chính sách bảo mật</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Đối tác</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-gray-300">Chương trình đối tác</Link></li>
                <li><Link href="#" className="hover:text-gray-300">Quảng cáo</Link></li>
                <li><Link href="#" className="hover:text-gray-300">Affiliate</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Theo dõi chúng tôi</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-gray-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0  001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-sm text-gray-400">
            <p>&copy; 2024 Holicay. Tất cả các quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SearchBar() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-w-4xl mx-auto">
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Điểm đến</label>
          <div className="relative">
            <input
              type="text"
              id="destination"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nhập điểm đến"
            />
            <MapPin className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
          <label htmlFor="check-in" className="block text-sm font-medium text-gray-700 mb-1">Ngày đi</label>
          <div className="relative">
            <input
              type="date"
              id="check-in"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <Calendar className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
          <label htmlFor="check-out" className="block text-sm font-medium text-gray-700 mb-1">Ngày về</label>
          <div className="relative">
            <input
              type="date"
              id="check-out"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <Calendar className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="w-full md:w-1/4 px-2">
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Số khách</label>
          <div className="relative">
            <select
              id="guests"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none"
            >
              <option>1 khách</option>
              <option>2 khách</option>
              <option>3 khách</option>
              <option>4+ khách</option>
            </select>
            <ChevronDown className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Tìm kiếm
        </button>
      </div>
    </div>
  )
}

interface DestinationCardProps {
    image: string;
    name: string;
    country: string;
  }
  
  function DestinationCard({ image, name, country }: DestinationCardProps) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Image src={image} alt={name} width={400} height={300} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <p className="text-gray-600">{country}</p>
        </div>
      </div>
    )
  }


  interface DestinationCardProps1 {
    image: string;
    name: string;
    country: string;
    icon: "";
    title: "";
    description: "";
  }
  

function FeatureCard({icon, title, description }: DestinationCardProps1) {
  return (
    <div className="text-center">
      <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}