import Link from 'next/link'
import Sad from '../components/Icons/Sad'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <Sad/>
      <p className="text-lg text-gray-600 mb-8">
        Sorry, we couldn't find the insurance or mortgage page you're looking for.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
      >
        Return to Home
      </Link>
    </div>
  )
}