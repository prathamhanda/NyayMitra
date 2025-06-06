import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';

// --- Style Definitions ---
const colors = {
  background: '#F8F9FA',
  textPrimary: '#212529',
  textSecondary: '#6C757D',
  primary: '#3A7CA5',
  primaryLight: '#E0F7FA',
  primaryDark: '#2c5d81',
  white: '#FFFFFF',
  accent: '#FFD166', // Added accent color for highlights
  gray100: '#f8f9fa',
  gray200: '#e9ecef',
};

const styles = {
  // Reset any potential default margins that might create borders
  globalReset: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    width: '100%',
    overflowX: 'hidden',
  },
  
  // Overall page container styles - ensure full width
  pageContainer: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: colors.background,
    color: colors.textPrimary,
    width: '100vw',
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
    minHeight: '100vh',
  },
  
  // Content wrapper with improved responsive behavior
  contentWrapper: {
    width: '100%',
    maxWidth: '1200px', // Slightly wider for modern displays
    margin: '0 auto',
    padding: '0 6%', // Increased padding for better mobile experience
    boxSizing: 'border-box',
  },
  
  // Base section styles with improved spacing
  section: {
    padding: '60px 0', // Reduced padding for mobile
    width: '100%',
  },
  
  // Enhanced hero section
  heroSection: {
    backgroundColor: colors.white,
    padding: '80px 0 80px 0', // Reduced padding for mobile
    textAlign: 'center',
    borderBottom: `1px solid ${colors.primaryLight}`,
    background: `linear-gradient(to right, ${colors.white} 0%, ${colors.primaryLight} 100%)`,
    position: 'relative',
    overflow: 'hidden',
  },
  
  // Abstract shapes for hero section
  heroShape: {
    position: 'absolute',
    bottom: -50,
    right: -50,
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: `radial-gradient(circle, ${colors.primaryLight} 0%, rgba(255,255,255,0) 70%)`,
    zIndex: 0,
  },
  
  heroShapeTwo: {
    position: 'absolute',
    top: -100,
    left: -100,
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: `radial-gradient(circle, ${colors.primaryLight} 0%, rgba(255,255,255,0) 70%)`,
    zIndex: 0,
  },
  
  heroContent: {
    position: 'relative',
    zIndex: 1,
  },
  
  featuresSection: {
    backgroundColor: colors.background,
    padding: '100px 0',
    borderBottom: `1px solid ${colors.primaryLight}`,
  },
  
  howItWorksSection: {
    backgroundColor: colors.white,
    padding: '100px 0',
    borderBottom: `1px solid ${colors.primaryLight}`,
    position: 'relative',
  },
  
  howItWorksBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.05,
  },
  
  whoWeHelpSection: {
    backgroundColor: colors.background,
    padding: '80px 0',
    borderBottom: `1px solid ${colors.primaryLight}`,
  },
  
  trustSection: {
    backgroundColor: colors.primaryLight,
    padding: '90px 0',
    borderBottom: 'none',
    position: 'relative',
    overflow: 'hidden',
  },
  
  trustBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.07,
  },
  
  finalCtaSection: {
    backgroundColor: colors.white,
    padding: '70px 0', // Reduced padding for mobile
    borderBottom: 'none',
    textAlign: 'center',
    background: `linear-gradient(150deg, ${colors.white} 0%, ${colors.primaryLight} 100%)`,
  },
  
  // Enhanced element styles
  heroHeadline: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)', // Smaller font size for mobile
    fontWeight: '700',
    color: colors.primary,
    marginBottom: '25px',
    lineHeight: '1.2',
    position: 'relative',
    textAlign: 'center',
    padding: '0 10px',
  },
  
  // Highlight effect for headline
  heroHeadlineHighlight: {
    position: 'relative',
    display: 'inline-block',
    zIndex: 1,
  },
  
  heroHeadlineUnderline: {
    position: 'absolute',
    bottom: '5px',
    left: '0',
    width: '100%',
    height: '15px',
    backgroundColor: colors.accent,
    opacity: 0.3,
    zIndex: -1,
  },
  
  // New style for the title wrapper
  titleWrapper: {
    display: 'inline-block',
    textAlign: 'center',
    maxWidth: '100%',
  },
  
  heroSubheadline: {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)', // Smaller on mobile
    color: colors.textSecondary,
    marginBottom: '30px',
    maxWidth: '800px',
    margin: '0 auto 30px auto',
    lineHeight: '1.6',
    wordWrap: 'break-word',
    padding: '0 10px',
  },
  
  ctaButton: {
    backgroundColor: colors.primary,
    color: colors.white,
    padding: '14px 24px', // Smaller padding on mobile
    fontSize: '1rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    display: 'inline-block',
    boxShadow: '0 4px 12px rgba(58, 124, 165, 0.25)',
    maxWidth: '100%',
    boxSizing: 'border-box',
  },
  
  secondaryButton: {
    backgroundColor: 'transparent',
    color: colors.primary,
    border: `2px solid ${colors.primary}`,
    padding: '12px 22px', // Smaller padding on mobile
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '8px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    display: 'inline-block',
    marginLeft: '15px',
    maxWidth: '100%',
    boxSizing: 'border-box',
  },
  
  sectionTitle: {
    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: '40px',
    textAlign: 'center',
    position: 'relative',
    paddingBottom: '20px',
    wordWrap: 'break-word',
  },
  
  sectionTitleUnderline: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '4px',
    backgroundColor: colors.primary,
  },
  
  sectionTitleSmallLine: {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '40px',
    height: '2px',
    backgroundColor: colors.accent,
  },
  
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '30px',
    width: '100%',
  },
  
  featureCard: {
    backgroundColor: colors.white,
    padding: '30px 20px', // Smaller padding for mobile
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
    textAlign: 'left',
    border: `1px solid ${colors.gray200}`,
    transition: 'all 0.3s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    wordWrap: 'break-word',
  },
  
  featureIcon: {
    fontSize: '2.4rem',
    color: colors.primary,
    marginBottom: '20px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    backgroundColor: colors.primaryLight,
  },
  
  featureTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: '12px',
  },
  
  featureText: {
    fontSize: '1.05rem',
    color: colors.textSecondary,
    lineHeight: '1.7',
    flex: 1,
  },
  
  howItWorksSteps: {
    display: 'flex',
    justifyContent: 'space-around',
    gap: '20px',
    flexWrap: 'wrap',
    marginTop: '20px',
    position: 'relative',
    width: '100%',
  },
  
  stepsConnector: {
    position: 'absolute',
    top: '40px',
    left: '20%',
    width: '60%',
    height: '2px',
    backgroundColor: colors.primaryLight,
    zIndex: 0,
    '@media (maxWidth: 768px)': {
      display: 'none',
    },
  },
  
  stepCard: {
    flex: '1',
    minWidth: '250px',
    maxWidth: '300px',
    textAlign: 'center',
    padding: '25px 15px',
    backgroundColor: colors.white,
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
    border: `1px solid ${colors.gray200}`,
    position: 'relative',
    zIndex: 1,
    margin: '0 auto 15px auto',
  },
  
  stepNumber: {
    display: 'inline-flex',
    width: '50px',
    height: '50px',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: colors.primaryLight,
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: '1.3rem',
    marginBottom: '20px',
    boxShadow: '0 4px 12px rgba(58, 124, 165, 0.2)',
  },
  
  stepTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: '12px',
  },
  
  stepText: {
    fontSize: '0.95rem',
    color: colors.textSecondary,
    lineHeight: '1.5',
  },
  
  whoWeHelpList: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: 0,
    marginTop: '20px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  
  whoWeHelpItem: {
    backgroundColor: colors.white,
    color: colors.primary,
    padding: '10px 20px',
    borderRadius: '50px',
    fontSize: '0.95rem',
    fontWeight: '500',
    border: `1px solid ${colors.primaryLight}`,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    margin: '5px 0',
    whiteSpace: 'nowrap',
  },
  
  trustText: {
    fontSize: '1.4rem',
    color: colors.primary,
    fontWeight: '500',
    maxWidth: '900px',
    margin: '0 auto',
    lineHeight: '1.8',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
  },
  
  finalCtaTitle: {
    fontSize: 'clamp(1.8rem, 2.5vw, 2.2rem)', // Responsive font size for mobile
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: '20px',
    wordWrap: 'break-word',
  },
  
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '15px',
    width: '100%',
    maxWidth: '100%',
  },
  
  footer: {
    backgroundColor: colors.primary,
    color: colors.white,
    padding: '30px 0 20px', // Reduced padding for mobile
    fontSize: '0.9rem', // Smaller font for mobile
    textAlign: 'center',
  },
  
  footerText: {
    opacity: 0.8,
    marginTop: '20px',
  }
};

// --- Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" } 
  },
  hover: { 
    y: -10,
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

// --- Custom components ---
const ResponsiveHeadline = () => {
  return (
    <h1 style={styles.heroHeadline}>
      <div className="headline-container">
        <span className="headline-main" style={styles.heroHeadlineHighlight}>
          Resolve Disputes Online
          <span style={styles.heroHeadlineUnderline}></span>
        </span>
        <span className="headline-suffix">Simply & Fairly</span>
      </div>
    </h1>
  );
};

// --- Reusable Components (Animated) ---
const FeatureCard = ({ icon, title, text }) => (
  <motion.div 
    style={styles.featureCard} 
    variants={cardVariants}
    whileHover="hover"
  >
    <div style={styles.featureIcon}>{icon || '★'}</div>
    <h3 style={styles.featureTitle}>{title}</h3>
    <p style={styles.featureText}>{text}</p>
  </motion.div>
);

const StepCard = ({ number, title, text }) => (
  <motion.div 
    style={styles.stepCard} 
    variants={fadeInUp}
    whileHover={{ y: -3, transition: { duration: 0.2 } }}
  >
    <div style={styles.stepNumber}>{number}</div>
    <h3 style={styles.stepTitle}>{title}</h3>
    <p style={styles.stepText}>{text}</p>
  </motion.div>
);

// --- Landing Page Component ---
const LandingPage = () => {
  // Add global CSS to ensure full-width behavior
  React.useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.width = '100%';
    document.body.style.overflowX = 'hidden';
  }, []);

  // Fix specific headline wrapping issue for smaller screens
  React.useEffect(() => {
    const handleWindowResize = () => {
      // Add any responsive adjustments here if needed
      if (window.innerWidth < 480) {
        // Additional mobile-specific adjustments can go here
        document.body.style.overflowX = 'hidden';
        
        // Add a class to handle specific mobile styling
        document.documentElement.classList.add('mobile-view');
      } else {
        document.documentElement.classList.remove('mobile-view');
      }
    };
    
    // Initial call
    handleWindowResize();
    // Set up event listener
    window.addEventListener('resize', handleWindowResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div style={{...styles.globalReset, ...styles.pageContainer}}>
      <Navbar />
      {/* --- Hero Section --- */}
      <motion.section
        style={{ ...styles.section, ...styles.heroSection }}
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {/* Abstract background shapes */}
        <div style={styles.heroShape}></div>
        <div style={styles.heroShapeTwo}></div>
        
        <div style={{...styles.contentWrapper, ...styles.heroContent}}>
          <motion.div variants={fadeInUp}>
            <ResponsiveHeadline />
          </motion.div>
          <motion.p style={styles.heroSubheadline} variants={fadeInUp}>
            Experience a modern, confidential, and highly efficient path to resolution. 
            Our platform connects you with expert neutrals for accessible and impartial dispute settlement.
          </motion.p>
          <motion.div style={styles.buttonContainer} variants={fadeInUp}>
            <motion.a
              href="#get-started"
              style={styles.ctaButton}
              whileHover={{ scale: 1.03, backgroundColor: colors.primaryDark }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Resolution
            </motion.a>
            <motion.a
              href="#learn-more"
              style={styles.secondaryButton}
              whileHover={{ scale: 1.03, backgroundColor: colors.primaryLight }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* --- Key Features Section --- */}
      <motion.section
        style={{ ...styles.section, ...styles.featuresSection }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div style={styles.contentWrapper}>
          <motion.div style={styles.sectionTitle} variants={fadeInUp}>
            <h2>Why Choose Our Platform?</h2>
            <div style={styles.sectionTitleUnderline}></div>
            <div style={styles.sectionTitleSmallLine}></div>
          </motion.div>
          
          <motion.div style={styles.featuresGrid} variants={sectionVariants}>
            <FeatureCard
              icon="⏱️"
              title="Rapid Resolution"
              text="Settle matters in days or weeks, not months. Our streamlined process saves valuable time and reduces conflict escalation."
            />
            <FeatureCard
              icon="⚖️"
              title="Expert Impartiality"
              text="Access certified mediators and arbitrators committed to fairness. Benefit from guided negotiation and objective decision-making."
            />
            <FeatureCard
              icon="🔒"
              title="Secure & Confidential"
              text="Bank-grade encryption and strict protocols protect your sensitive information throughout the entire process."
            />
            
          </motion.div>
        </div>
      </motion.section>

      {/* --- How It Works Section --- */}
      <motion.section
        style={{ ...styles.section, ...styles.howItWorksSection }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div style={styles.howItWorksBackground}></div>
        <div style={styles.contentWrapper}>
          <motion.div style={styles.sectionTitle} variants={fadeInUp}>
            <h2>Your Path to Agreement</h2>
            <div style={styles.sectionTitleUnderline}></div>
            <div style={styles.sectionTitleSmallLine}></div>
          </motion.div>
          
          <div style={styles.howItWorksSteps}>
            <div style={styles.stepsConnector}></div>
            <StepCard
              number="1"
              title="Initiate Securely"
              text="Submit your case details through our intuitive online portal. It's quick, easy, and confidential."
            />
            <StepCard
              number="2"
              title="Collaborate Online"
              text="Engage in structured discussions, share documents securely, and work towards solutions with platform guidance."
            />
            <StepCard
              number="3"
              title="Achieve Resolution"
              text="Finalize a mutually acceptable outcome, often resulting in a legally binding agreement, facilitated efficiently."
            />
          </div>
        </div>
      </motion.section>

      {/* --- Who We Help Section --- */}
      <motion.section
        style={{ ...styles.section, ...styles.whoWeHelpSection }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div style={styles.contentWrapper}>
          <motion.div style={styles.sectionTitle} variants={fadeInUp}>
            <h2>Resolving Disputes For</h2>
            <div style={styles.sectionTitleUnderline}></div>
            <div style={styles.sectionTitleSmallLine}></div>
          </motion.div>
          
          <motion.ul style={styles.whoWeHelpList} variants={fadeInUp}>
            <motion.li 
              style={styles.whoWeHelpItem} 
              variants={fadeInUp}
              whileHover={{ y: -5, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)', backgroundColor: colors.primaryLight }}
            >
              Businesses
            </motion.li>
            <motion.li 
              style={styles.whoWeHelpItem} 
              variants={fadeInUp}
              whileHover={{ y: -5, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)', backgroundColor: colors.primaryLight }}
            >
              Landlords & Tenants
            </motion.li>
            <motion.li 
              style={styles.whoWeHelpItem} 
              variants={fadeInUp}
              whileHover={{ y: -5, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)', backgroundColor: colors.primaryLight }}
            >
              Consumers
            </motion.li>
            <motion.li 
              style={styles.whoWeHelpItem} 
              variants={fadeInUp}
              whileHover={{ y: -5, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)', backgroundColor: colors.primaryLight }}
            >
              Workplaces
            </motion.li>
            <motion.li 
              style={styles.whoWeHelpItem} 
              variants={fadeInUp}
              whileHover={{ y: -5, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)', backgroundColor: colors.primaryLight }}
            >
              Families
            </motion.li>
          </motion.ul>
        </div>
      </motion.section>

      {/* --- Trust & Sophistication Section --- */}
      <motion.section
        style={{ ...styles.section, ...styles.trustSection }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div style={styles.trustBackground}></div>
        <div style={styles.contentWrapper}>
          <motion.p style={styles.trustText} variants={fadeInUp}>
            We are committed to providing a trustworthy, sophisticated, and reliable environment. 
            Your sensitive matters are handled with the utmost integrity, security, and 
            professionalism by experienced neutrals.
          </motion.p>
        </div>
      </motion.section>

      {/* --- Final Call to Action Section --- */}
      <motion.section
        style={{ ...styles.section, ...styles.finalCtaSection }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div style={styles.contentWrapper}>
          <motion.h2 style={styles.finalCtaTitle} variants={fadeInUp}>
            Ready to Move Forward?
          </motion.h2>
          <motion.p 
            style={{...styles.heroSubheadline, fontSize: '1.2rem', marginBottom: '40px'}} 
            variants={fadeInUp}
          >
            Take the first step towards a fair and efficient resolution today.
          </motion.p>
          
          <motion.div style={styles.buttonContainer} variants={fadeInUp}>
            <motion.a
              href="#get-started-bottom"
              style={styles.ctaButton}
              whileHover={{ scale: 1.03, backgroundColor: colors.primaryDark }}
              whileTap={{ scale: 0.98 }}
            >
              Initiate Your Case
            </motion.a>
            <motion.a
              href="#contact-us"
              style={styles.secondaryButton}
              whileHover={{ scale: 1.03, backgroundColor: colors.primaryLight }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
        </motion.section>

      {/* --- Footer Section --- */}
      <footer style={styles.footer}>
        <div style={styles.contentWrapper}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <motion.a 
              href="#about" 
              style={{ color: colors.white, textDecoration: 'none', padding: '5px' }}
              whileHover={{ opacity: 0.8 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#faqs" 
              style={{ color: colors.white, textDecoration: 'none', padding: '5px' }}
              whileHover={{ opacity: 0.8 }}
            >
              FAQs
            </motion.a>
            <motion.a 
              href="#privacy" 
              style={{ color: colors.white, textDecoration: 'none', padding: '5px' }}
              whileHover={{ opacity: 0.8 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a 
              href="#terms" 
              style={{ color: colors.white, textDecoration: 'none', padding: '5px' }}
              whileHover={{ opacity: 0.8 }}
            >
              Terms of Service
            </motion.a>
            <motion.a 
              href="#contact" 
              style={{ color: colors.white, textDecoration: 'none', padding: '5px' }}
              whileHover={{ opacity: 0.8 }}
            >
              Contact
            </motion.a>
          </div>
          <p style={styles.footerText}>© {new Date().getFullYear()} NyayMitra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;