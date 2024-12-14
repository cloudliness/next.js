import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Cloudliness',
  description: 'Your personal cloud storage solution for accessing data anywhere in the world.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your Personal Cloud Journey Starts Here
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Empowering individuals and families with personalized cloud storage solutions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We're dedicated to providing personalized cloud storage solutions that give you complete control over your digital life. Our focus is on helping individuals and families store, manage, and access their data with freedom and ease.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Tailored Solutions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We understand that everyone's storage needs are different. That's why we offer customized hard drive solutions based on your specific data requirements, whether it's for a laptop, desktop, or dedicated server.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Mobile Freedom
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Free up space on your mobile devices by seamlessly transferring photos and videos to your personal Nextcloud server. Access your memories anytime, anywhere, while keeping them secure and private.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose Us?
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Personal Touch
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  We work directly with you to understand your storage needs and provide the perfect solution for your home setup.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Scalable Growth
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Start with what you need today and easily expand your storage as your data grows. Our solutions are designed to scale with you.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Worldwide Access
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Access your data securely from anywhere in the world. Your personal cloud server gives you the freedom to stay connected to your digital life.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Start?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let us help you create your perfect personal cloud storage solution.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
}
