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

const featuredProduct = {
  id: 1,
  title: 'Timesheets & Expenses',
  description: 'Full-featured timesheet and expense management for engineering consulting firms.',
  icon: TimesheetIcon,
  url: 'https://web-production-d744.up.railway.app',
  features: [
    'Timesheet entry with multi-project tracking and task-level detail',
    'Expense management with trip grouping, per diem, and receipt upload',
    'Multi-tier approval workflows for timesheets and expenses',
    'Client & project administration with budget tracking',
    'Document builders for timesheet and expense invoicing',
    'Role-based access: Consultant, Approver, and Admin views',
  ],
}

const upcomingProducts = [
  {
    id: 2,
    title: 'P&ID Management',
    description: 'Manage piping and instrumentation diagrams with collaborative review tools.',
    icon: PidIcon,
  },
  {
    id: 3,
    title: 'Structuring',
    description: 'Design and manage organizational structures and project frameworks.',
    icon: StructureIcon,
  },
]

const demoPersonas = [
  { role: 'Consultant', name: 'John Mitchell', desc: 'Enter time and expenses, view personal reports' },
  { role: 'Approver', name: 'Sarah Chen', desc: 'Review and approve team timesheets and expenses' },
  { role: 'Admin', name: 'Michael Torres', desc: 'Full access to clients, projects, users, and invoicing' },
]

function App() {
  return (
    <div className="min-h-screen bg-light flex flex-col font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-4">
            <img src={`${import.meta.env.BASE_URL}ama_logo.png`} alt="AMA Logo" className="h-12 w-auto object-contain" />
            <h1
              className="text-xl font-bold tracking-wider"
              style={{
                fontFamily: 'Inter, sans-serif',
                color: '#7678A8',
              }}
            >
              AMA Showcase
            </h1>
          </div>
        </div>
        <div
          className="h-0.5"
          style={{
            background: 'linear-gradient(to right, #9393C3, #DAA520, #93C3C0)',
          }}
        />
      </nav>

      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
            Welcome to{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #9393C3 0%, #DAA520 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              AMA Showcase
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Explore our suite of engineering and project management tools. Launch a live demo below or check back for upcoming products.
          </p>
        </section>

        {/* Featured Product */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div
              className="h-1.5"
              style={{
                background: 'linear-gradient(to right, #9393C3, #DAA520, #93C3C0)',
              }}
            />
            <div className="p-8 md:p-10 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Left: Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-primary-dark">
                      <featuredProduct.icon />
                    </div>
                    <div>
                      <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wide mb-1">
                        Live Demo
                      </span>
                      <h3 className="text-2xl font-bold text-dark">{featuredProduct.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredProduct.description}
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {featuredProduct.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-primary-dark mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={featuredProduct.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary-dark hover:bg-primary text-white font-medium py-3.5 px-8 rounded-lg transition-colors duration-200 text-base shadow-sm"
                  >
                    Launch Demo
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* Right: How It Works */}
                <div className="lg:w-80 xl:w-96 bg-gray-50 rounded-xl p-6 lg:p-8">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">How It Works</h4>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                    The demo includes a <strong>role switcher toolbar</strong> at the top of the page. Click any persona to instantly switch between different user roles and see the app from their perspective.
                  </p>
                  <div className="space-y-3">
                    {demoPersonas.map((p) => (
                      <div key={p.role} className="bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="w-2 h-2 rounded-full bg-primary-dark shrink-0" />
                          <span className="font-semibold text-sm text-dark">{p.role}</span>
                          <span className="text-xs text-gray-400 ml-auto">{p.name}</span>
                        </div>
                        <p className="text-xs text-gray-500 pl-4">{p.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                    Data can be reset at any time via the toolbar. All demo data is pre-populated with realistic consulting scenarios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Products */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <h3 className="text-lg font-semibold text-gray-400 uppercase tracking-wide mb-6">Coming Soon</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {upcomingProducts.map((product) => (
              <div
                key={product.id}
                className="relative bg-white rounded-xl shadow-sm overflow-hidden opacity-60 border border-gray-100"
              >
                <div className="p-6 flex items-start gap-5">
                  <div className="text-gray-400 shrink-0">
                    <product.icon />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-500 mb-1">{product.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{product.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-gray-200 text-gray-500 text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                  Coming Soon
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div
          className="h-0.5"
          style={{
            background: 'linear-gradient(to right, #9393C3, #DAA520, #93C3C0)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} AMA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
