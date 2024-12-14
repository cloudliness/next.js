export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">Simple, Transparent Pricing</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Choose the perfect plan for your business needs</p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Basic Plan */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Starter</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Perfect for small businesses</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">$29</span>
              <span className="text-gray-600 dark:text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Up to 5 cloud accounts
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Basic monitoring
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Email support
              </li>
            </ul>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
              Get Started
            </button>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="bg-blue-600 rounded-lg shadow-lg overflow-hidden transform scale-105">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Professional</h2>
            <p className="text-blue-100 mb-4">Best for growing companies</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">$99</span>
              <span className="text-blue-100">/month</span>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-white">
                <svg className="h-5 w-5 text-blue-200 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Up to 20 cloud accounts
              </li>
              <li className="flex items-center text-white">
                <svg className="h-5 w-5 text-blue-200 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Advanced monitoring
              </li>
              <li className="flex items-center text-white">
                <svg className="h-5 w-5 text-blue-200 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                24/7 phone & email support
              </li>
              <li className="flex items-center text-white">
                <svg className="h-5 w-5 text-blue-200 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Cost optimization
              </li>
            </ul>
            <button className="w-full bg-white text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors">
              Get Started
            </button>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Enterprise</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">For large organizations</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">Custom</span>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Unlimited cloud accounts
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Custom monitoring solutions
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Dedicated support team
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Custom integrations
              </li>
            </ul>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Can I change plans later?</h3>
            <p className="text-gray-600 dark:text-gray-400">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">What payment methods do you accept?</h3>
            <p className="text-gray-600 dark:text-gray-400">We accept all major credit cards, PayPal, and bank transfers for enterprise customers.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Is there a free trial?</h3>
            <p className="text-gray-600 dark:text-gray-400">Yes, we offer a 14-day free trial for all plans. No credit card required.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
