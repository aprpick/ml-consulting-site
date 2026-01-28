export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-blue-100">
            Building the future of AI-powered business solutions
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Story</h2>
          <p className="text-lg text-gray-700 mb-6">
            Founded in 2020, we are a boutique AI consulting firm dedicated to helping
            businesses harness the power of machine learning and artificial intelligence.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our team combines deep technical expertise with practical business understanding
            to deliver solutions that drive real ROI.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                src="/dr_sarah_chen.png"
                alt="Dr. Sarah Chen"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">Dr. Sarah Chen</h3>
              <p className="text-gray-600">CEO & ML Lead</p>
              <p className="text-gray-700 mt-2">PhD in Machine Learning, 15+ years experience</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <img
                src="/michael_rodriguez.png"
                alt="Michael Rodriguez"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">Michael Rodriguez</h3>
              <p className="text-gray-600">CTO</p>
              <p className="text-gray-700 mt-2">Former Google AI researcher</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <img
                src="/emily_watson.png"
                alt="Emily Watson"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">Emily Watson</h3>
              <p className="text-gray-600">Head of Consulting</p>
              <p className="text-gray-700 mt-2">MBA, 10+ years in AI strategy</p>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}