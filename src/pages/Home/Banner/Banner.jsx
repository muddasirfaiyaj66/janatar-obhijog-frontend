const Banner = () => {
    return (
      <section style={styles.banner}>
        <div style={styles.container}>
          <div style={styles.content}>
            <div style={styles.textContent}>
              <h1 style={styles.title}>
                <span style={styles.banglaTitle}>জনতার অভিযোগ</span>
                <span style={styles.englishTitle}></span>
              </h1>
              <p style={styles.subtitle}>Your Voice, Our Action - Transforming Communities Through Citizen Engagement</p>
              <p style={styles.description}>
                Report public issues, track resolutions, and build a better Bangladesh together. Connect directly with
                authorities and see real change happen in your community.
              </p>
              <div style={styles.buttonGroup}>
                <button style={styles.primaryButton}>Submit Complaint</button>
                <button style={styles.secondaryButton}>Track Status</button>
              </div>
              <div style={styles.stats}>
                <div style={styles.statItem}>
                  <span style={styles.statNumber}>15,000+</span>
                  <span style={styles.statLabel}>Complaints Resolved</span>
                </div>
                <div style={styles.statItem}>
                  <span style={styles.statNumber}>50+</span>
                  <span style={styles.statLabel}>Government Departments</span>
                </div>
                <div style={styles.statItem}>
                  <span style={styles.statNumber}>95%</span>
                  <span style={styles.statLabel}>Satisfaction Rate</span>
                </div>
              </div>
            </div>
            <div style={styles.visualContent}>
              <div style={styles.demoCard}>
                <div style={styles.cardHeader}>
                  <div style={styles.statusBadge}>Resolved</div>
                  <span style={styles.cardId}>#JO-2024-001</span>
                </div>
                <h3 style={styles.cardTitle}>Road Repair Request</h3>
                <p style={styles.cardDescription}>Potholes on Main Street causing traffic issues</p>
                <div style={styles.cardProgress}>
                  <div style={styles.progressBar}>
                    <div style={styles.progressFill}></div>
                  </div>
                  <span style={styles.progressText}>Completed in 7 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  const styles = {
    banner: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
      width: "100%",
    },
    content: {
      display: "flex",
      alignItems: "center",
      gap: "60px",
      flexWrap: "wrap",
    },
    textContent: {
      flex: "1",
      minWidth: "300px",
    },
    title: {
      marginBottom: "20px",
    },
    banglaTitle: {
      display: "block",
      fontSize: "3.5rem",
      fontWeight: "800",
      color: "#ffffff",
      lineHeight: "1.1",
      marginBottom: "10px",
    },
    englishTitle: {
      display: "block",
      fontSize: "2rem",
      fontWeight: "600",
      color: "#e2e8f0",
      lineHeight: "1.2",
    },
    subtitle: {
      fontSize: "1.5rem",
      fontWeight: "600",
      color: "#f1f5f9",
      marginBottom: "16px",
      lineHeight: "1.4",
    },
    description: {
      fontSize: "1.1rem",
      color: "#cbd5e1",
      lineHeight: "1.6",
      marginBottom: "32px",
      maxWidth: "600px",
    },
    buttonGroup: {
      display: "flex",
      gap: "16px",
      marginBottom: "48px",
      flexWrap: "wrap",
    },
    primaryButton: {
      backgroundColor: "#10b981",
      color: "#ffffff",
      border: "none",
      padding: "16px 32px",
      fontSize: "1.1rem",
      fontWeight: "600",
      borderRadius: "12px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(16, 185, 129, 0.3)",
    },
    secondaryButton: {
      backgroundColor: "transparent",
      color: "#ffffff",
      border: "2px solid #ffffff",
      padding: "14px 32px",
      fontSize: "1.1rem",
      fontWeight: "600",
      borderRadius: "12px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    stats: {
      display: "flex",
      gap: "40px",
      flexWrap: "wrap",
    },
    statItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    statNumber: {
      fontSize: "2.5rem",
      fontWeight: "800",
      color: "#ffffff",
      lineHeight: "1",
    },
    statLabel: {
      fontSize: "0.9rem",
      color: "#cbd5e1",
      marginTop: "4px",
    },
    visualContent: {
      flex: "1",
      minWidth: "300px",
      display: "flex",
      justifyContent: "center",
    },
    demoCard: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
      borderRadius: "16px",
      padding: "24px",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      maxWidth: "350px",
      width: "100%",
    },
    cardHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "16px",
    },
    statusBadge: {
      backgroundColor: "#10b981",
      color: "#ffffff",
      padding: "4px 12px",
      borderRadius: "20px",
      fontSize: "0.8rem",
      fontWeight: "600",
    },
    cardId: {
      color: "#64748b",
      fontSize: "0.9rem",
      fontWeight: "500",
    },
    cardTitle: {
      fontSize: "1.3rem",
      fontWeight: "700",
      color: "#1e293b",
      marginBottom: "8px",
    },
    cardDescription: {
      color: "#64748b",
      lineHeight: "1.5",
      marginBottom: "20px",
    },
    cardProgress: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    progressBar: {
      width: "100%",
      height: "8px",
      backgroundColor: "#e2e8f0",
      borderRadius: "4px",
      overflow: "hidden",
    },
    progressFill: {
      width: "100%",
      height: "100%",
      backgroundColor: "#10b981",
      borderRadius: "4px",
    },
    progressText: {
      fontSize: "0.9rem",
      color: "#10b981",
      fontWeight: "600",
    },
  }
  
  export default Banner
  