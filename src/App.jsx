import React from 'react'

const TimesheetIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="4" width="36" height="40" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <line x1="6" y1="14" x2="42" y2="14" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="24" cy="28" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
    <line x1="24" y1="24" x2="24" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="24" y1="28" x2="28" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="14" cy="9" r="1.5" fill="currentColor" />
    <circle cx="24" cy="9" r="1.5" fill="currentColor" />
    <circle cx="34" cy="9" r="1.5" fill="currentColor" />
  </svg>
)

const PidIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <rect x="32" y="4" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <rect x="32" y="20" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <rect x="18" y="32" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <line x1="16" y1="14" x2="32" y2="9" stroke="currentColor" strokeWidth="2" />
    <line x1="16" y1="14" x2="32" y2="25" stroke="currentColor" strokeWidth="2" />
    <line x1="10" y1="20" x2="25" y2="32" stroke="currentColor" strokeWidth="2" />
    <circle cx="10" cy="14" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="38" cy="9" r="2" fill="currentColor" opacity="0.4" />
    <circle cx="38" cy="25" r="2" fill="currentColor" opacity="0.4" />
  </svg>
)

const StructureIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="2" width="16" height="10" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <rect x="2" y="22" width="14" height="10" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <rect x="17" y="22" width="14" height="10" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <rect x="32" y="22" width="14" height="10" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <rect x="10" y="38" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="26" y="38" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <line x1="24" y1="12" x2="24" y2="22" stroke="currentColor" strokeWidth="2" />
    <line x1="24" y1="16" x2="9" y2="22" stroke="currentColor" strokeWidth="2" />
    <line x1="24" y1="16" x2="39" y2="22" stroke="currentColor" strokeWidth="2" />
    <line x1="9" y1="32" x2="16" y2="38" stroke="currentColor" strokeWidth="2" />
    <line x1="39" y1="32" x2="32" y2="38" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const products = [
  {
    id: 1,
    title: 'Timesheets & Expenses',
    description: 'Track consultant hours, manage expenses, handle approvals, and generate invoices.',
    icon: TimesheetIcon,
    status: 'active',
    url: 'https://web-production-d744.up.railway.app',
  },
  {
    id: 2,
    title: 'P&ID Management',
    description: 'Manage piping and instrumentation diagrams with collaborative review tools.',
    icon: PidIcon,
    status: 'coming-soon',
    url: null,
  },
  {
    id: 3,
    title: 'Structuring',
    description: 'Design and manage organizational structures and project frameworks.',
    icon: StructureIcon,
    status: 'coming-soon',
    url: null,
  },
]

function ProductCard({ product }) {
  const isActive = product.status === 'active'
  const Icon = product.icon

  return (
    <div
      className={`
        relative bg-white rounded-2xl shadow-md overflow-hidden
        transition-all duration-300 flex flex-col
        ${isActive
          ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer border-l-4 border-l-primary-dark'
          : 'opacity-60 cursor-default'
        }
      `}
    >
      {/* Top accent gradient for active cards */}
      {isActive && (
        <div
          className="h-1"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
          }}
        />
      )}

      <div className="p-8 flex flex-col flex-1">
        {/* Icon */}
        <div className={`mb-5 ${isActive ? 'text-primary-dark' : 'text-gray-400'}`}>
          <Icon />
        </div>

        {/* Title */}
        <h3 className={`text-xl font-semibold mb-3 ${isActive ? 'text-dark' : 'text-gray-500'}`}>
          {product.title}
        </h3>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-6 flex-1 ${isActive ? 'text-gray-600' : 'text-gray-400'}`}>
          {product.description}
        </p>

        {/* Action */}
        {isActive ? (
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary-dark hover:bg-primary text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-sm"
          >
            Launch Demo
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ) : (
          <span className="inline-flex items-center justify-center gap-2 bg-gray-200 text-gray-500 font-medium py-3 px-6 rounded-lg text-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Coming Soon
          </span>
        )}
      </div>

      {/* Coming Soon badge */}
      {!isActive && (
        <div className="absolute top-4 right-4 bg-gray-300 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
          Coming Soon
        </div>
      )}
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-light flex flex-col font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4">
            <img src="/ama_logo.png" alt="AMA Logo" className="h-10 w-10 object-contain" />
            <h1
              className="text-xl font-bold tracking-wider"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #9394C3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              AMA Demo Portal
            </h1>
          </div>
        </div>
        {/* Gradient divider */}
        <div
          className="h-0.5"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
          }}
        />
      </nav>

      {/* Main content */}
      <main className="flex-1">
        {/* Hero section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
            Welcome to the{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #9394C3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              AMA Demo Portal
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Explore our suite of engineering and project management tools. Launch live demos or check back for upcoming products.
          </p>
        </section>

        {/* Product cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div
          className="h-0.5"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} AMA Advocate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
