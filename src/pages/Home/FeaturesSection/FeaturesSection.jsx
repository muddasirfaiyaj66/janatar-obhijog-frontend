import { useTranslation } from "react-i18next";

const FeaturesSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: "🎯",
      title: t("home.features.smartAIRouting"),
      description: t("home.features.smartAIRoutingDesc"),
      highlight: "AI-Powered",
    },
    {
      icon: "📍",
      title: t("home.features.locationBasedReporting"),
      description: t("home.features.locationBasedReportingDesc"),
      highlight: "GPS Enabled",
    },
    {
      icon: "🔔",
      title: t("home.features.realTimeNotifications"),
      description: t("home.features.realTimeNotificationsDesc"),
      highlight: "Instant Updates",
    },
    {
      icon: "📊",
      title: t("home.features.progressTracking"),
      description: t("home.features.progressTrackingDesc"),
      highlight: "Full Transparency",
    },
    {
      icon: "🌐",
      title: t("home.features.multiLanguageSupport"),
      description: t("home.features.multiLanguageSupportDesc"),
      highlight: "Bilingual",
    },
    {
      icon: "🏆",
      title: t("home.features.rewardSystem"),
      description: t("home.features.rewardSystemDesc"),
      highlight: "Gamified",
    },
  ]

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>{t("home.features.title")}</h2>
          <p style={styles.subtitle}>
            {t("home.features.subtitle")}
          </p>
        </div>        <div style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} style={styles.featureCard}>
              <div style={styles.cardHeader}>
                <div style={styles.iconContainer}>
                  <span style={styles.icon}>{feature.icon}</span>
                </div>
                <span style={styles.highlight}>{feature.highlight}</span>
              </div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDescription}>{feature.description}</p>
              <div style={styles.cardFooter}>
                <button style={styles.learnMoreButton}>{t("home.features.learnMore")} →</button>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.statsSection}>
          <div style={styles.statsContainer}>
            <div style={styles.statCard}>
              <div style={styles.statIcon}>⚡</div>
              <div style={styles.statContent}>
                <span style={styles.statNumber}>2.5x</span>
                <span style={styles.statLabel}>{t("home.features.stats.fasterResolution")}</span>
              </div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statIcon}>📈</div>
              <div style={styles.statContent}>
                <span style={styles.statNumber}>95%</span>
                <span style={styles.statLabel}>{t("home.features.stats.successRate")}</span>
              </div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statIcon}>👥</div>
              <div style={styles.statContent}>
                <span style={styles.statNumber}>50K+</span>
                <span style={styles.statLabel}>{t("home.features.stats.activeUsers")}</span>
              </div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statIcon}>🏛️</div>
              <div style={styles.statContent}>
                <span style={styles.statNumber}>200+</span>
                <span style={styles.statLabel}>{t("home.features.stats.partnerDepartments")}</span>
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
    marginBottom: "80px",
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
    maxWidth: "700px",
    margin: "0 auto",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "30px",
    marginBottom: "80px",
  },
  featureCard: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "32px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
    border: "1px solid #e2e8f0",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  iconContainer: {
    width: "60px",
    height: "60px",
    backgroundColor: "#f0f9ff",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: "2rem",
  },
  highlight: {
    backgroundColor: "#3b82f6",
    color: "#ffffff",
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "0.8rem",
    fontWeight: "600",
  },
  featureTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: "12px",
  },
  featureDescription: {
    color: "#64748b",
    lineHeight: "1.6",
    marginBottom: "24px",
  },
  cardFooter: {
    display: "flex",
    justifyContent: "flex-start",
  },
  learnMoreButton: {
    backgroundColor: "transparent",
    color: "#3b82f6",
    border: "none",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    padding: "8px 0",
    transition: "all 0.3s ease",
  },
  statsSection: {
    backgroundColor: "#f8fafc",
    borderRadius: "24px",
    padding: "60px 40px",
    marginTop: "40px",
  },
  statsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "40px",
  },
  statCard: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    textAlign: "left",
  },
  statIcon: {
    fontSize: "2.5rem",
    width: "70px",
    height: "70px",
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    flexShrink: 0,
  },
  statContent: {
    display: "flex",
    flexDirection: "column",
  },
  statNumber: {
    fontSize: "2.2rem",
    fontWeight: "800",
    color: "#1e293b",
    lineHeight: "1",
  },
  statLabel: {
    fontSize: "1rem",
    color: "#64748b",
    marginTop: "4px",
    fontWeight: "500",
  },
}

export default FeaturesSection
