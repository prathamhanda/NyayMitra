import React from 'react';
import Navbar from './Navbar';
const IconPlaceholder = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-1-5a1 1 0 11-2 0 1 1 0 012 0zm3 0a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd"></path>
  </svg>
);

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', href: '#', icon: <IconPlaceholder /> },
    { name: 'My Cases', href: '#', icon: <IconPlaceholder /> },
    { name: 'Submit New Case', href: '#', icon: <IconPlaceholder /> },
    { name: 'Profile', href: '#', icon: <IconPlaceholder /> },
    { name: 'Settings', href: '#', icon: <IconPlaceholder /> },
  ];

  return (
    <div className="w-64 h-screen bg-slate-800 text-slate-100 flex flex-col fixed top-0 left-0">
      <div className="p-5 border-b border-slate-700">
        <h1 className="text-xl font-semibold">ODR Platform</h1>
      </div>
      <nav className="flex-grow p-3 space-y-1">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href} // In a real app, use <Link> from react-router-dom
            className="flex items-center px-3 py-2.5 space-x-3 rounded-md hover:bg-slate-700 hover:text-white transition-colors duration-150"
          >
            {item.icon}
            <span>{item.name}</span>
          </a>
        ))}
      </nav>
      <div className="p-3 border-t border-slate-700">
        <button className="w-full flex items-center justify-center px-3 py-2.5 space-x-3 rounded-md bg-red-600 hover:bg-red-700 text-white transition-colors duration-150">
          <IconPlaceholder />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

const CaseSubmissionCard = ({ title, description, onStart }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-sky-700 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 mb-4 h-16 overflow-hidden">{description}</p>
      <button
        onClick={onStart}
        className="w-full bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-sky-600 transition-colors duration-150 font-medium"
      >
        Start Submission
      </button>
    </div>
  );
};

const MainContent = () => {
  const caseSubmissionOptions = [
    {
      title: 'File a Small Claim',
      description: 'Submit a dispute for a minor monetary amount. Streamlined process for quick resolution.',
      action: () => console.log('Start Small Claim Submission'),
    },
    {
      title: 'Request Mediation',
      description: 'Initiate a guided negotiation process with an AI-based third-party mediator.',
      action: () => console.log('Start Mediation Request'),
    },
    {
      title: 'Apply for Arbitration',
      description: 'Submit your case for a binding decision by an impartial arbitrator.',
      action: () => console.log('Start Arbitration Application'),
    },
    
  ];

  return (
    <div className="flex-grow p-8 bg-slate-100 ml-64"> {/* ml-64 to offset for fixed sidebar */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
        <p className="text-slate-500 mt-1">Welcome back! Manage your disputes and resolutions.</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-700 mb-6">Case Submission Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {caseSubmissionOptions.map((option) => (
            <CaseSubmissionCard
              key={option.title}
              title={option.title}
              description={option.description}
              onStart={option.action}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-700 mb-6">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-slate-700 mb-2">Active Cases</h3>
                <p className="text-4xl font-bold text-sky-600">5</p>
                <p className="text-sm text-slate-500 mt-1">View all active cases</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-slate-700 mb-2">Resolved Cases</h3>
                <p className="text-4xl font-bold text-emerald-600">23</p>
                <p className="text-sm text-slate-500 mt-1">Check your case history</p>
            </div>
        </div>
      </section>
      {/* Add more dashboard widgets or sections here */}
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className=" h-screen bg-slate-100">
    <Navbar />
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Dashboard;