export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Machine Learning & AI Consulting
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            We help companies build AI projects through development and strategy
          </p>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-600 mb-8">Trusted by leading companies</p>
          <div className="flex justify-center items-center gap-16 flex-wrap">
            <img
              src="/vertex_solutions.png"
              alt="Vertex Solutions"
              className="h-36 w-54 object-contain"
            />
            <img
              src="/horizon_analytics.png"
              alt="Horizon Analytics"
              className="h-32 w-48 object-contain"
            />
            <img
              src="/quantum_dynamics.png"
              alt="Quantum Dynamics"
              className="h-28 w-42 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">MVP Development</h3>
              <p className="text-gray-600">
                Build and prove out your AI solution quickly with our development services
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Production ML Software</h3>
              <p className="text-gray-600">
                Custom machine learning software from MVPs to full enterprise products
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">ML Consulting</h3>
              <p className="text-gray-600">
                Expert guidance to implement AI effectively and avoid project pitfalls
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-700 mb-4 italic">
                "The AI system developed works well and reduces lots of laborious manpower. 
                Great success in project execution."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-bold">John Smith</p>
                  <p className="text-gray-600 text-sm">CEO, Tech Corp</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-700 mb-4 italic">
                "Expert knowledge and excellent team to implement whatever you need done. 
                Highly recommend their ML consulting services."
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-bold">Sarah Johnson</p>
                  <p className="text-gray-600 text-sm">CTO, Data Systems Inc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Apex ML Consulting. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}