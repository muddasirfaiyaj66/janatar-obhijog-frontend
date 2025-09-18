"use client"

import { useState } from "react"

const RoleBasedSection = () => {
  const [activeRole, setActiveRole] = useState("citizen")

  const roles = {
    citizen: {
      title: "For Citizens",
      subtitle: "Your Voice, Your Power",
      description: "Empower yourself to create positive change in your community through our citizen-focused platform.",
      icon: "👥",
      color: "#3b82f6",
      features: [
        {
          icon: "📱",
          title: "Easy Reporting",
          description: "Submit complaints with photos, location, and detailed descriptions in minutes.",
        },
        {
          icon: "🔔",
          title: "Real-time Updates",
          description: "Get instant notifications about your complaint status and resolution progress.",
        },
        {
          icon: "🏆",
          title: "Reward System",
          description: "Earn gems for active participation and contributing to community improvement.",
        },
        {
          icon: "📊",
          title: "Track History",
          description: "View all your past complaints and their resolution status in one place.",
        },
      ],
      cta: "Start Reporting Issues",
    },
    authority: {
      title: "For Authorities",
      subtitle: "Efficient Governance Made Simple",
      description: "Streamline complaint management with powerful tools designed for government departments.",
      icon: "🏛️",
      color: "#10b981",
      features: [
        {
          icon: "📋",
          title: "Centralized Dashboard",
          description: "Manage all complaints from your department in one comprehensive interface.",
        },
        {
          icon: "🎯",
          title: "Priority Management",
          description: "AI-powered priority assignment helps you focus on the most critical issues first.",
        },
        {
          icon: "📈",
          title: "Analytics & Reports",
          description: "Generate detailed reports and track performance metrics for better governance.",
        },
        {
          icon: "👥",
          title: "Team Collaboration",
          description: "Assign tasks to team members and track progress collaboratively.",
        },
      ],
      cta: "Access Authority Portal",
    },
    superadmin: {
      title: "For Super Admins",
      subtitle: "Complete System Oversight",
      description: "Comprehensive platform management with advanced analytics and system-wide controls.",
      icon: "⚡",
      color: "#8b5cf6",
      features: [
        {
          icon: "🌐",
          title: "System Overview",
          description: "Monitor entire platform performance, user activity, and complaint trends.",
        },
        {
          icon: "🔧",
          title: "Department Management",
          description: "Add, modify, and manage government departments and their hierarchies.",
        },
        {
          icon: "📊",
          title: "Advanced Analytics",
          description: "Deep insights into platform usage, resolution rates, and citizen satisfaction.",
        },
        {
          icon: "🛡️",
          title: "Security Controls",
          description: "Manage user permissions, security settings, and platform configurations.",
        },
      ],
      cta: "Super Admin Access",
    },
  }

  const currentRole = roles[activeRole]

  return (
    <section className="theme-bg-primary py-24 relative">
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 className="text-4xl md:text-5xl font-extrabold theme-text-primary mb-5 leading-tight">
            Built for Everyone in the Ecosystem
          </h2>
          <p className="text-xl theme-text-secondary leading-relaxed">
            Tailored experiences for citizens, authorities, and administrators
          </p>
        </div>

        <div style={styles.roleSelector}>
          {Object.entries(roles).map(([key, role]) => (
            <button
              key={key}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl cursor-pointer transition-all duration-300 text-lg font-semibold ${activeRole === key
                  ? 'text-white border-2 border-transparent transform -translate-y-1 shadow-xl'
                  : 'theme-bg-secondary theme-text-secondary theme-border-primary border-2 hover:theme-bg-tertiary'
                }`}
              style={activeRole === key ? { backgroundColor: role.color } : {}}
              onClick={() => setActiveRole(key)}
            >
              <span className="text-2xl">{role.icon}</span>
              <span className="whitespace-nowrap">{role.title}</span>
            </button>
          ))}
        </div>

        <div className="theme-bg-secondary rounded-3xl p-16 mb-20">
          <div style={styles.roleHeader}>
            <div
              className="w-32 h-32 rounded-3xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${currentRole.color}20` }}
            >
              <span className="text-6xl" style={{ color: currentRole.color }}>{currentRole.icon}</span>
            </div>
            <div style={styles.roleHeaderText}>
              <h3 className="text-4xl font-extrabold mb-2" style={{ color: currentRole.color }}>
                {currentRole.title}
              </h3>
              <h4 className="text-2xl font-semibold theme-text-primary mb-4">{currentRole.subtitle}</h4>
              <p className="text-xl theme-text-secondary leading-relaxed">{currentRole.description}</p>
            </div>
          </div>

          <div style={styles.featuresGrid}>
            {currentRole.features.map((feature, index) => (
              <div key={index} className="theme-card rounded-2xl p-8">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold theme-text-primary mb-3">{feature.title}</h4>
                <p className="theme-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div style={styles.roleFooter}>
            <button
              className="text-white font-bold py-5 px-9 text-xl rounded-xl cursor-pointer transition-all duration-300 shadow-lg hover:transform hover:scale-105"
              style={{ backgroundColor: currentRole.color }}
            >
              {currentRole.cta}
            </button>
            <div style={styles.additionalInfo}>
              <div style={styles.infoItem}>
                <span className="text-xl">🔒</span>
                <span className="theme-text-secondary font-medium">Secure & Private</span>
              </div>
              <div style={styles.infoItem}>
                <span className="text-xl">📱</span>
                <span className="theme-text-secondary font-medium">Mobile Optimized</span>
              </div>
              <div style={styles.infoItem}>
                <span className="text-xl">🌐</span>
                <span className="theme-text-secondary font-medium">Multi-language</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  header: {
    textAlign: "center",
    marginBottom: "60px",
  },
  roleSelector: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    marginBottom: "60px",
    flexWrap: "wrap",
  },
  roleHeader: {
    display: "flex",
    alignItems: "center",
    gap: "40px",
    marginBottom: "50px",
    flexWrap: "wrap",
  },
  roleHeaderText: {
    flex: "1",
    minWidth: "300px",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    marginBottom: "50px",
  },
  roleFooter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
  },
  additionalInfo: {
    display: "flex",
    gap: "40px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  infoItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
}

export default RoleBasedSection;