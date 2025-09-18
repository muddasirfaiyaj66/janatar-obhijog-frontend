import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, TrendingUp, Users, Shield, FileText, MapPin, Clock } from "lucide-react";
import z from "zod";

const Banner = () => {
  const { t } = useTranslation();

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="mt-10" style={styles.banner}>
      {/* Background elements with civic theme */}
      <div style={styles.mapPattern}></div>
      <div style={styles.gridOverlay}></div>

      {/* Animated floating elements */}
      <motion.div style={styles.floatingDocument} animate={floatAnimation}>
        <FileText size={24} color="#1C733A" />
      </motion.div>
      <motion.div style={styles.floatingLocation} animate={floatAnimation}>
        <MapPin size={24} color="#FF0000" />
      </motion.div>
      <motion.div style={styles.floatingTime} animate={floatAnimation}>
        <Clock size={24} color="#1C733A" />
      </motion.div>

      <div style={styles.container}>
        <motion.div
          style={styles.content}
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.div style={styles.textContent} variants={fadeIn}>
            <div style={styles.badge}>

              <span>{t("home.banner.badge") || "Official Government Platform"}</span>
            </div>

            <h1 style={styles.title}>
              <span style={styles.banglaTitle}>{t("home.title") || "জনতার অভিযোগ"}</span>
              <span style={styles.englishTitle}>{t("home.subtitle") || "Digital Complaint Box"}</span>
            </h1>

            <p style={styles.subtitle}>
              {t("home.description") || "Your voice drives change. Report civic issues, track resolutions in real-time, and contribute to community development."}
            </p>

            <div style={styles.featureGrid}>
              <div style={styles.featureItem}>
                <div style={styles.featureIcon}>
                  <FileText size={20} />
                </div>
                <div style={styles.featureText}>
                  <h4>Easy Reporting</h4>
                  <p>File complaints in minutes</p>
                </div>
              </div>
              <div style={styles.featureItem}>
                <div style={styles.featureIcon}>
                  <Clock size={20} />
                </div>
                <div style={styles.featureText}>
                  <h4>Real-time Tracking</h4>
                  <p>Monitor resolution progress</p>
                </div>
              </div>
              <div style={styles.featureItem}>
                <div style={styles.featureIcon}>
                  <Shield size={20} />
                </div>
                <div style={styles.featureText}>
                  <h4>Official Response</h4>
                  <p>Government-guaranteed action</p>
                </div>
              </div>
            </div>

            <div style={styles.buttonGroup}>
              <motion.button
                style={styles.primaryButton}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(255, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                {t("home.reportIssue") || "Report an Issue"}
                <ArrowRight size={18} />
              </motion.button>

              <motion.button
                style={styles.secondaryButton}
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                whileTap={{ scale: 0.98 }}
              >
                {t("home.learnMore") || "How It Works"}
              </motion.button>
            </div>
          </motion.div>

          <motion.div style={styles.visualContent} variants={fadeIn}>
            <div style={styles.cardContainer}>
              <div style={styles.demoCard}>
                <div style={styles.cardHeader}>
                  <div style={styles.cardDepartment}>
                    <span>Public Works Department</span>
                  </div>
                  <div style={styles.statusBadge}>
                    <Shield size={14} />
                    {t("home.banner.demo.resolved") || "Resolved"}
                  </div>
                </div>

                <div style={styles.cardBody}>
                  <div style={styles.cardId}>COMPLAINT ID: #JO-2024-001</div>
                  <h3 style={styles.cardTitle}>{t("home.banner.demo.cardTitle") || "Road Repair Completed"}</h3>
                  <div style={styles.cardLocation}>
                    <MapPin size={14} />
                    <span>Main Street, Dhaka - Ward 15</span>
                  </div>
                  <p style={styles.cardDescription}>
                    {t("home.banner.demo.cardDescription") || "Potholes on Main Street have been filled and the road is now safe for travel."}
                  </p>

                  <div style={styles.cardTimeline}>
                    <div style={styles.timelineItem}>
                      <div style={styles.timelineDot}></div>
                      <div style={styles.timelineContent}>
                        <span style={styles.timelineDate}>Jan 15, 2024</span>
                        <span style={styles.timelineText}>Issue Reported</span>
                      </div>
                    </div>
                    <div style={styles.timelineItem}>
                      <div style={styles.timelineDot}></div>
                      <div style={styles.timelineContent}>
                        <span style={styles.timelineDate}>Jan 18, 2024</span>
                        <span style={styles.timelineText}>Under Review</span>
                      </div>
                    </div>
                    <div style={styles.timelineItem}>
                      <div style={styles.timelineDotActive}></div>
                      <div style={styles.timelineContent}>
                        <span style={styles.timelineDate}>Jan 25, 2024</span>
                        <span style={styles.timelineText}>Resolved</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={styles.cardProgress}>
                  <div style={styles.progressInfo}>
                    <span style={styles.progressLabel}>Resolution Progress</span>
                    <span style={styles.progressPercentage}>100%</span>
                  </div>
                  <div style={styles.progressBar}>
                    <div style={styles.progressFill}></div>
                  </div>
                  <div style={styles.progressDays}>
                    <Clock size={12} />
                    <span>Resolved in 10 days</span>
                  </div>
                </div>
              </div>

              {/* Stats overlay */}
              <div style={styles.statsOverlay}>
                <div style={styles.stat}>
                  <span style={styles.statNumber}>15K+</span>
                  <span style={styles.statLabel}>Issues Resolved</span>
                </div>
                <div style={styles.stat}>
                  <span style={styles.statNumber}>95%</span>
                  <span style={styles.statLabel}>Satisfaction Rate</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scrolling ticker for recent complaints */}
        <motion.div
          style={styles.tickerContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div style={styles.ticker}>
            <span style={styles.tickerLabel}>Recently Resolved:</span>
            <div style={styles.tickerItems}>
              <span>Water logging in Mirpur - Resolved</span>
              <span>Street light repair in Gulshan - Completed</span>
              <span>Garbage collection in Uttara - Improved</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const styles = {
  banner: {
    background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    padding: "80px 0",
    color: "#ffffff",
    fontFamily: "'Inter', sans-serif",
  },
  mapPattern: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M25 25h50v50H25z' stroke='%23FF0000' stroke-width='0.5' fill='none' opacity='0.1'/%3E%3Cpath d='M50 0v100M0 50h100' stroke='%231C733A' stroke-width='0.3' opacity='0.05'/%3E%3C/svg%3E")`,
    backgroundSize: "100px 100px",
    opacity: 0.7,
    zIndex: 1,
  },
  gridOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `linear-gradient(rgba(255, 0, 0, 0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255, 0, 0, 0.05) 1px, transparent 1px)`,
    backgroundSize: "50px 50px",
    zIndex: 2,
    pointerEvents: "none",
  },
  floatingDocument: {
    position: "absolute",
    top: "20%",
    left: "10%",
    background: "rgba(255, 255, 255, 0.9)",
    borderRadius: "12px",
    padding: "12px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    zIndex: 3,
  },
  floatingLocation: {
    position: "absolute",
    top: "60%",
    left: "5%",
    background: "rgba(255, 255, 255, 0.9)",
    borderRadius: "12px",
    padding: "12px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    zIndex: 3,
  },
  floatingTime: {
    position: "absolute",
    top: "30%",
    right: "10%",
    background: "rgba(255, 255, 255, 0.9)",
    borderRadius: "12px",
    padding: "12px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    zIndex: 3,
  },
  container: {
    maxWidth: "1300px",
    margin: "0 auto",
    padding: "0 20px",
    width: "100%",
    position: "relative",
    zIndex: 4,
  },
  content: {
    display: "flex",
    alignItems: "center",
    gap: "60px",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "40px",
  },
  textContent: {
    flex: "1",
    minWidth: "300px",
    maxWidth: "600px",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#FF0000",
    color: "#ffffff",
    padding: "8px 16px",
    borderRadius: "6px",
    fontSize: "0.9rem",
    fontWeight: "500",
    marginBottom: "24px",
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
    textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
  },
  englishTitle: {
    display: "block",
    fontSize: "2rem",
    fontWeight: "600",
    color: "#C1BAB4",
    lineHeight: "1.2",
    marginBottom: "24px",
  },
  subtitle: {
    fontSize: "1.25rem",
    fontWeight: "400",
    color: "#C1BAB4",
    marginBottom: "32px",
    lineHeight: "1.6",
    maxWidth: "500px",
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "16px",
    marginBottom: "40px",
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    padding: "16px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "8px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  featureIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    backgroundColor: "#1C733A",
    borderRadius: "8px",
    color: "#ffffff",
    flexShrink: 0,
  },
  featureText: {
    flex: 1,
  },
  featureTextH4: {
    margin: "0 0 4px 0",
    fontSize: "1rem",
    fontWeight: "600",
    color: "#ffffff",
  },
  featureTextP: {
    margin: 0,
    fontSize: "0.9rem",
    color: "#C1BAB4",
  },
  buttonGroup: {
    display: "flex",
    gap: "16px",
    marginBottom: "48px",
    flexWrap: "wrap",
  },
  primaryButton: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#FF0000",
    color: "#ffffff",
    border: "none",
    padding: "16px 32px",
    fontSize: "1.1rem",
    fontWeight: "600",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(255, 0, 0, 0.3)",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    color: "#ffffff",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    padding: "14px 32px",
    fontSize: "1.1rem",
    fontWeight: "600",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
  },
  visualContent: {
    flex: "1",
    minWidth: "300px",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  cardContainer: {
    position: "relative",
    maxWidth: "420px",
    width: "100%",
  },
  demoCard: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    width: "100%",
    position: "relative",
    zIndex: 5,
    color: "#000000",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
    flexWrap: "wrap",
    gap: "8px",
  },
  cardDepartment: {
    fontSize: "0.8rem",
    color: "#1C733A",
    fontWeight: "600",
    padding: "4px 8px",
    backgroundColor: "rgba(28, 115, 58, 0.1)",
    borderRadius: "4px",
  },
  statusBadge: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    backgroundColor: "#1C733A",
    color: "#ffffff",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "0.8rem",
    fontWeight: "600",
  },
  cardBody: {
    marginBottom: "20px",
  },
  cardId: {
    fontSize: "0.75rem",
    color: "#666",
    fontWeight: "500",
    marginBottom: "12px",
    letterSpacing: "0.5px",
  },
  cardTitle: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "#000000",
    marginBottom: "8px",
  },
  cardLocation: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "0.9rem",
    color: "#666",
    marginBottom: "12px",
  },
  cardDescription: {
    color: "#444",
    lineHeight: "1.5",
    marginBottom: "20px",
    fontSize: "0.95rem",
  },
  cardTimeline: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  timelineItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
  },
  timelineDot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "#ddd",
    marginTop: "5px",
    flexShrink: 0,
  },
  timelineDotActive: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "#1C733A",
    marginTop: "5px",
    flexShrink: 0,
  },
  timelineContent: {
    display: "flex",
    flexDirection: "column",
  },
  timelineDate: {
    fontSize: "0.8rem",
    color: "#666",
    fontWeight: "500",
  },
  timelineText: {
    fontSize: "0.9rem",
    color: "#000000",
  },
  cardProgress: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  progressInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressLabel: {
    fontSize: "0.9rem",
    color: "#444",
    fontWeight: "500",
  },
  progressPercentage: {
    fontSize: "0.9rem",
    color: "#1C733A",
    fontWeight: "600",
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
    backgroundColor: "#1C733A",
    borderRadius: "4px",
  },
  progressDays: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "0.8rem",
    color: "#666",
  },
  statsOverlay: {
    position: "absolute",
    bottom: "-20px",
    right: "-20px",
    backgroundColor: "#FF0000",
    color: "#ffffff",
    padding: "16px",
    borderRadius: "12px",
    display: "flex",
    gap: "24px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    zIndex: 6,
  },
  stat: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  statNumber: {
    fontSize: "1.5rem",
    fontWeight: "700",
    lineHeight: "1",
  },
  statLabel: {
    fontSize: "0.7rem",
    fontWeight: "500",
    marginTop: "4px",
  },
  tickerContainer: {
    marginTop: "40px",
    padding: "16px",
    backgroundColor: "rgba(255, 0, 0, 0.1)",
    borderRadius: "8px",
    border: "1px solid rgba(255, 0, 0, 0.2)",
  },
  ticker: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    overflow: "hidden",
    position: "relative",
  },
  tickerLabel: {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#FF0000",
    flexShrink: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: "4px 8px",
    borderRadius: "4px",
    zIndex: 2,
    position: "relative",
  },
  tickerItems: {
    display: "flex",
    animation: "tickerAnimation 20s linear infinite",
    whiteSpace: "nowrap",
    gap: "60px",
    position: "absolute",
    left: "180px",
  },
};


export default Banner;