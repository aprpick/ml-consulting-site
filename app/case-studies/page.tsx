export default function CaseStudies() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-900 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-indigo-100">
            Real-world AI solutions delivering measurable business impact
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          
          {/* Case Study 1 */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Predictive Maintenance System for Manufacturing
            </h2>
            <div className="mb-6">
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">
                Machine Learning
              </span>
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Manufacturing
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">The Challenge</h3>
                <p className="text-gray-700">
                  A major manufacturing company faced frequent unplanned equipment downtime, 
                  costing $50,000 per hour in lost production. Traditional maintenance schedules 
                  were inefficient and reactive.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Our Solution</h3>
                <p className="text-gray-700">
                  We developed a machine learning model using sensor data to predict equipment 
                  failures 48 hours in advance. The system analyzes vibration, temperature, and 
                  pressure data in real-time.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Results</h3>
              <ul className="grid md:grid-cols-3 gap-4">
                <li className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">65%</div>
                  <div className="text-gray-700">Reduction in downtime</div>
                </li>
                <li className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">$2.3M</div>
                  <div className="text-gray-700">Annual savings</div>
                </li>
                <li className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
                  <div className="text-gray-700">Prediction accuracy</div>
                </li>
              </ul>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Customer Churn Prediction for SaaS Company
            </h2>
            <div className="mb-6">
              <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">
                Predictive Analytics
              </span>
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                SaaS
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">The Challenge</h3>
                <p className="text-gray-700">
                  A fast-growing SaaS company struggled with customer retention, losing 
                  15% of customers annually. They needed to identify at-risk customers 
                  before they churned.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Our Solution</h3>
                <p className="text-gray-700">
                  We built a churn prediction model analyzing usage patterns, support tickets, 
                  and payment history. The system flags at-risk customers and triggers 
                  personalized retention campaigns.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Results</h3>
              <ul className="grid md:grid-cols-3 gap-4">
                <li className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
                  <div className="text-gray-700">Churn reduction</div>
                </li>
                <li className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">$850K</div>
                  <div className="text-gray-700">Retained revenue</div>
                </li>
                <li className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">87%</div>
                  <div className="text-gray-700">Prediction accuracy</div>
                </li>
              </ul>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Automated Document Processing for Legal Firm
            </h2>
            <div className="mb-6">
              <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">
                NLP
              </span>
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Legal
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">The Challenge</h3>
                <p className="text-gray-700">
                  A law firm spent 200+ hours monthly manually reviewing and extracting 
                  information from contracts. This bottleneck delayed client services and 
                  increased costs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Our Solution</h3>
                <p className="text-gray-700">
                  We developed an NLP system that automatically extracts key clauses, dates, 
                  parties, and obligations from legal documents. The system integrates with 
                  their document management software.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Results</h3>
              <ul className="grid md:grid-cols-3 gap-4">
                <li className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">85%</div>
                  <div className="text-gray-700">Time savings</div>
                </li>
                <li className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">170</div>
                  <div className="text-gray-700">Hours saved monthly</div>
                </li>
                <li className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                  <div className="text-gray-700">Extraction accuracy</div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how AI can solve your unique challenges
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </main>
  )
}