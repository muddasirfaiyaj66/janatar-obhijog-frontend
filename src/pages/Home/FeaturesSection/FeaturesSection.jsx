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
    <section className="theme-bg-primary py-24 relative">
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 className="text-4xl md:text-5xl font-extrabold theme-text-primary mb-5 leading-tight">
            {t("home.features.title")}
          </h2>
          <p className="text-xl theme-text-secondary leading-relaxed max-w-3xl mx-auto">
            {t("home.features.subtitle")}
          </p>
        </div>

        <div style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className="theme-card rounded-3xl p-8 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
              <div style={styles.cardHeader}>
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <span className="bg-blue-600 dark:bg-blue-500 text-white py-1 px-3 rounded-full text-sm font-semibold">
                  {feature.highlight}
                </span>
              </div>
              <h3 className="text-xl font-bold theme-text-primary mb-3">{feature.title}</h3>
              <p className="theme-text-secondary leading-relaxed mb-6">{feature.description}</p>
              <div style={styles.cardFooter}>
                <button className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300">
                  {t("home.features.learnMore")} →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="theme-bg-secondary rounded-3xl p-16 mt-10">
          <div style={styles.statsContainer}>
            <div style={styles.statCard}>
              <div className="text-4xl w-18 h-18 theme-bg-primary rounded-full flex items-center justify-center theme-shadow-md flex-shrink-0">
                ⚡
              </div>
              <div style={styles.statContent}>
                <span className="text-4xl font-extrabold theme-text-primary leading-none">2.5x</span>
                <span className="text-base theme-text-secondary mt-1 font-medium">
                  {t("home.features.stats.fasterResolution")}
                </span>
              </div>
            </div>
            <div style={styles.statCard}>
              <div className="text-4xl w-18 h-18 theme-bg-primary rounded-full flex items-center justify-center theme-shadow-md flex-shrink-0">
                📈
              </div>
              <div style={styles.statContent}>
                <span className="text-4xl font-extrabold theme-text-primary leading-none">95%</span>
                <span className="text-base theme-text-secondary mt-1 font-medium">
                  {t("home.features.stats.successRate")}
                </span>
              </div>
            </div>
            <div style={styles.statCard}>
              <div className="text-4xl w-18 h-18 theme-bg-primary rounded-full flex items-center justify-center theme-shadow-md flex-shrink-0">
                👥
              </div>
              <div style={styles.statContent}>
                <span className="text-4xl font-extrabold theme-text-primary leading-none">50K+</span>
                <span className="text-base theme-text-secondary mt-1 font-medium">
                  {t("home.features.stats.activeUsers")}
                </span>
              </div>
            </div>
            <div style={styles.statCard}>
              <div className="text-4xl w-18 h-18 theme-bg-primary rounded-full flex items-center justify-center theme-shadow-md flex-shrink-0">
                🏛️
              </div>
              <div style={styles.statContent}>
                <span className="text-4xl font-extrabold theme-text-primary leading-none">200+</span>
                <span className="text-base theme-text-secondary mt-1 font-medium">
                  {t("home.features.stats.partnerDepartments")}
                </span>
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
    marginBottom: "80px",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "30px",
    marginBottom: "80px",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  cardFooter: {
    display: "flex",
    justifyContent: "flex-start",
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
  statContent: {
    display: "flex",
    flexDirection: "column",
  },
}

export default FeaturesSection
