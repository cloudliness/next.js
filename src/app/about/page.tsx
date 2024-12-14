export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About CloudLiness</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-400">
              At CloudLiness, we&apos;re dedicated to simplifying cloud management for businesses of all sizes.
              Our mission is to make cloud infrastructure management accessible, efficient, and cost-effective.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Founded in 2024, CloudLiness emerged from a simple observation: cloud management
              shouldn&apos;t be complicated. Our team of industry veterans came together to create
              a solution that brings clarity and simplicity to cloud operations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Simplicity in Design</li>
              <li>Customer-First Approach</li>
              <li>Continuous Innovation</li>
              <li>Security & Reliability</li>
              <li>Transparent Operations</li>
            </ul>
          </section>
        </div>

        <div className="space-y-6">
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Why Choose Us?</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Expert Support</h3>
                  <p className="text-gray-600 dark:text-gray-400">24/7 access to our team of cloud experts</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Cost Optimization</h3>
                  <p className="text-gray-600 dark:text-gray-400">Save up to 30% on your cloud spending</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Easy Integration</h3>
                  <p className="text-gray-600 dark:text-gray-400">Seamless integration with major cloud providers</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Our Impact</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">99.9%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">30%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
