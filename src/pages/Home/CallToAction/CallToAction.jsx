const CallToAction = () => {
    return (
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.content}>
            <div style={styles.textContent}>
              <h2 style={styles.title}>Ready to Make a Difference?</h2>
              <p style={styles.description}>
                Join thousands of citizens who are actively improving their communities. Your voice matters, and together
                we can create positive change across Bangladesh.
              </p>
              <div style={styles.features}>
                <div style={styles.feature}>
                  <div style={styles.featureIcon}>⚡</div>
                  <span>Quick & Easy Reporting</span>
                </div>
                <div style={styles.feature}>
                  <div style={styles.featureIcon}>📱</div>
                  <span>Real-time Updates</span>
                </div>
                <div style={styles.feature}>
                  <div style={styles.featureIcon}>🏛️</div>
                  <span>Direct Authority Contact</span>
                </div>
              </div>
            </div>
            <div style={styles.actionContent}>
              <div style={styles.actionCard}>
                <h3 style={styles.cardTitle}>Start Your First Complaint</h3>
                <p style={styles.cardDescription}>
                  Report issues in your area and track their resolution from start to finish.
                </p>
                <button style={styles.primaryButton}>Submit Complaint Now</button>
                <div style={styles.divider}>
                  <span style={styles.dividerText}>or</span>
                </div>
                <button style={styles.secondaryButton}>Browse Existing Issues</button>
                <div style={styles.trustIndicators}>
                  <div style={styles.trustItem}>
                    <span style={styles.trustNumber}>24/7</span>
                    <span style={styles.trustLabel}>Support Available</span>
                  </div>
                  <div style={styles.trustItem}>
                    <span style={styles.trustNumber}>100%</span>
                    <span style={styles.trustLabel}>Free Service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={styles.bottomSection}>
            <div style={styles.urgentAlert}>
              <div style={styles.alertIcon}>🚨</div>
              <div style={styles.alertContent}>
                <h4 style={styles.alertTitle}>Emergency Issues?</h4>
                <p style={styles.alertText}>
                  For urgent matters requiring immediate attention, use our priority reporting system.
                </p>
                <button style={styles.emergencyButton}>Report Emergency</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  const styles = {
    section: {
      backgroundColor: "#f8fafc",
      padding: "80px 0",
      position: "relative",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
    },
    content: {
      display: "flex",
      alignItems: "center",
      gap: "60px",
      marginBottom: "60px",
      flexWrap: "wrap",
    },
    textContent: {
      flex: "1",
      minWidth: "300px",
    },
    title: {
      fontSize: "3rem",
      fontWeight: "800",
      color: "#1e293b",
      marginBottom: "24px",
      lineHeight: "1.2",
    },
    description: {
      fontSize: "1.2rem",
      color: "#64748b",
      lineHeight: "1.6",
      marginBottom: "32px",
      maxWidth: "500px",
    },
    features: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    feature: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      fontSize: "1.1rem",
      color: "#475569",
      fontWeight: "500",
    },
    featureIcon: {
      fontSize: "1.5rem",
      width: "40px",
      height: "40px",
      backgroundColor: "#e0f2fe",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    actionContent: {
      flex: "1",
      minWidth: "300px",
      display: "flex",
      justifyContent: "center",
    },
    actionCard: {
      backgroundColor: "#ffffff",
      borderRadius: "20px",
      padding: "40px",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)",
      border: "1px solid #e2e8f0",
      maxWidth: "400px",
      width: "100%",
      textAlign: "center",
    },
    cardTitle: {
      fontSize: "1.8rem",
      fontWeight: "700",
      color: "#1e293b",
      marginBottom: "16px",
    },
    cardDescription: {
      color: "#64748b",
      lineHeight: "1.6",
      marginBottom: "32px",
    },
    primaryButton: {
      backgroundColor: "#3b82f6",
      color: "#ffffff",
      border: "none",
      padding: "16px 32px",
      fontSize: "1.1rem",
      fontWeight: "600",
      borderRadius: "12px",
      cursor: "pointer",
      width: "100%",
      marginBottom: "20px",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
    },
    divider: {
      position: "relative",
      margin: "20px 0",
    },
    dividerText: {
      backgroundColor: "#ffffff",
      color: "#94a3b8",
      padding: "0 16px",
      fontSize: "0.9rem",
      position: "relative",
      zIndex: 1,
    },
    secondaryButton: {
      backgroundColor: "transparent",
      color: "#3b82f6",
      border: "2px solid #3b82f6",
      padding: "14px 32px",
      fontSize: "1.1rem",
      fontWeight: "600",
      borderRadius: "12px",
      cursor: "pointer",
      width: "100%",
      marginBottom: "32px",
      transition: "all 0.3s ease",
    },
    trustIndicators: {
      display: "flex",
      justifyContent: "space-around",
      paddingTop: "24px",
      borderTop: "1px solid #e2e8f0",
    },
    trustItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "4px",
    },
    trustNumber: {
      fontSize: "1.5rem",
      fontWeight: "800",
      color: "#10b981",
    },
    trustLabel: {
      fontSize: "0.9rem",
      color: "#64748b",
    },
    bottomSection: {
      display: "flex",
      justifyContent: "center",
    },
    urgentAlert: {
      backgroundColor: "#fef3c7",
      border: "2px solid #f59e0b",
      borderRadius: "16px",
      padding: "24px",
      display: "flex",
      alignItems: "center",
      gap: "20px",
      maxWidth: "600px",
      width: "100%",
    },
    alertIcon: {
      fontSize: "2rem",
      flexShrink: 0,
    },
    alertContent: {
      flex: "1",
    },
    alertTitle: {
      fontSize: "1.3rem",
      fontWeight: "700",
      color: "#92400e",
      marginBottom: "8px",
    },
    alertText: {
      color: "#92400e",
      marginBottom: "16px",
      lineHeight: "1.5",
    },
    emergencyButton: {
      backgroundColor: "#dc2626",
      color: "#ffffff",
      border: "none",
      padding: "12px 24px",
      fontSize: "1rem",
      fontWeight: "600",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
  }
  
  export default CallToAction
  