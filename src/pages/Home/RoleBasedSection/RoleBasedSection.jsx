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
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Built for Everyone in the Ecosystem</h2>
          <p style={styles.subtitle}>Tailored experiences for citizens, authorities, and administrators</p>
        </div>

        <div style={styles.roleSelector}>
          {Object.entries(roles).map(([key, role]) => (
            <button
              key={key}
              style={{
                ...styles.roleButton,
                ...(activeRole === key ? { ...styles.activeRoleButton, backgroundColor: role.color } : {}),
              }}
              onClick={() => setActiveRole(key)}
            >
              <span style={styles.roleIcon}>{role.icon}</span>
              <span style={styles.roleLabel}>{role.title}</span>
            </button>
          ))}
        </div>

        <div style={styles.roleContent}>
          <div style={styles.roleHeader}>
            <div
              style={styles.roleIconLarge}
              style={{ ...styles.roleIconLarge, backgroundColor: `${currentRole.color}20` }}
            >
              <span style={{ ...styles.roleIconLargeText, color: currentRole.color }}>{currentRole.icon}</span>
            </div>
            <div style={styles.roleHeaderText}>
              <h3 style={{ ...styles.roleTitle, color: currentRole.color }}>{currentRole.title}</h3>
              <h4 style={styles.roleSubtitle}>{currentRole.subtitle}</h4>
              <p style={styles.roleDescription}>{currentRole.description}</p>
            </div>
          </div>

          <div style={styles.featuresGrid}>
            {currentRole.features.map((feature, index) => (
              <div key={index} style={styles.featureCard}>
                <div style={styles.featureIcon}>{feature.icon}</div>
                <h4 style={styles.featureTitle}>{feature.title}</h4>
                <p style={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>

          <div style={styles.roleFooter}>
            <button style={{ ...styles.ctaButton, backgroundColor: currentRole.color }}>{currentRole.cta}</button>
            <div style={styles.additionalInfo}>
              <div style={styles.infoItem}>
                <span style={styles.infoIcon}>🔒</span>
                <span style={styles.infoText}>Secure & Private</span>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.infoIcon}>📱</span>
                <span style={styles.infoText}>Mobile Optimized</span>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.infoIcon}>🌐</span>
                <span style={styles.infoText}>Multi-language</span>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}

const styles = {
  section: {
    backgroundColor: "#ffffff",
    padding: "100px 0",
    position: "relative",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  header: {
    textAlign: "center",
    marginBottom: "60px",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "800",
    color: "#1e293b",
    marginBottom: "20px",
    lineHeight: "1.2",
  },
  subtitle: {
    fontSize: "1.3rem",
    color: "#64748b",
    lineHeight: "1.6",
  },
  roleSelector: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    marginBottom: "60px",
    flexWrap: "wrap",
  },
  roleButton: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "16px 24px",
    backgroundColor: "#f8fafc",
    border: "2px solid #e2e8f0",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#64748b",
  },
  activeRoleButton: {
    color: "#ffffff",
    border: "2px solid transparent",
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
  },
  roleIcon: {
    fontSize: "1.5rem",
  },
  roleLabel: {
    whiteSpace: "nowrap",
  },
  roleContent: {
    backgroundColor: "#f8fafc",
    borderRadius: "24px",
    padding: "60px 40px",
    marginBottom: "80px",
  },
  roleHeader: {
    display: "flex",
    alignItems: "center",
    gap: "40px",
    marginBottom: "50px",
    flexWrap: "wrap",
  },
  roleIconLarge: {
    width: "120px",
    height: "120px",
    borderRadius: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  roleIconLargeText: {
    fontSize: "4rem",
  },
  roleHeaderText: {
    flex: "1",
    minWidth: "300px",
  },
  roleTitle: {
    fontSize: "2.5rem",
    fontWeight: "800",
    marginBottom: "8px",
  },
  roleSubtitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: "16px",
  },
  roleDescription: {
    fontSize: "1.2rem",
    color: "#64748b",
    lineHeight: "1.6",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    marginBottom: "50px",
  },
  featureCard: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "30px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
    border: "1px solid #e2e8f0",
  },
  featureIcon: {
    fontSize: "2.5rem",
    marginBottom: "16px",
  },
  featureTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "12px",
  },
  featureDescription: {
    color: "#64748b",
    lineHeight: "1.5",
  },
  roleFooter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
  },
  ctaButton: {
    color: "#ffffff",
    border: "none",
    padding: "18px 36px",
    fontSize: "1.2rem",
    fontWeight: "700",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
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
  infoIcon: {
    fontSize: "1.2rem",
  },
  infoText: {
    color: "#64748b",
    fontWeight: "500",
  },
  comparisonSection: {
    textAlign: "center",
  },
  comparisonTitle: {
    fontSize: "2.2rem",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "50px",
  },
  comparisonGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
  comparisonCard: {
    backgroundColor: "#f8fafc",
    borderRadius: "20px",
    padding: "40px",
    border: "1px solid #e2e8f0",
  },
  comparisonIcon: {
    fontSize: "3rem",
    marginBottom: "20px",
  },
  comparisonCardTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "12px",
  },
  comparisonCardText: {
    color: "#64748b",
    lineHeight: "1.6",
  },
}

export default RoleBasedSection;