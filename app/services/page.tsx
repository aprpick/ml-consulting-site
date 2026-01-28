export default function Services() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-900 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-green-100">
            Comprehensive AI and ML solutions for your business
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Service 1 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">MVP Development</h2>
            <p className="text-lg text-gray-700 mb-4">
              Rapidly prototype and validate your AI solution. We help you build a minimum 
              viable product to test your concept with real users before full-scale development.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Fast prototyping (4-8 weeks)</li>
              <li>User testing and validation</li>
              <li>Technical feasibility assessment</li>
              <li>Cost-effective proof of concept</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Production ML Software</h2>
            <p className="text-lg text-gray-700 mb-4">
              Build enterprise-grade machine learning systems that scale. From data pipelines 
              to model deployment, we handle the full ML lifecycle.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Custom model development</li>
              <li>MLOps and deployment pipelines</li>
              <li>Model monitoring and maintenance</li>
              <li>Integration with existing systems</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">ML Consulting</h2>
            <p className="text-lg text-gray-700 mb-4">
              Strategic guidance for your AI initiatives. We help you identify opportunities, 
              avoid pitfalls, and build a roadmap for AI adoption.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>AI strategy workshops</li>
              <li>Use case identification</li>
              <li>Technology stack recommendations</li>
              <li>Team training and upskilling</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}