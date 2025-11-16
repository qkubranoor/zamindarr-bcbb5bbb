import Header from "../components/Header";
import Footer from "../components/Footer";
import { ResponsiveWrapper } from "../components/ResponsiveWrapper";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ResponsiveWrapper>
        <div className="max-w-4xl mx-auto py-12 px-4">
          <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
            <header className="text-center mb-8">
              <h1 className="font-display font-bold text-3xl text-foreground mb-4">
                Privacy Policy
              </h1>
              <div className="text-sm text-muted-foreground space-y-1">
                <p><strong>Effective Date:</strong> August 1, 2025</p>
                <p><strong>Last Updated:</strong> August 1, 2025</p>
              </div>
            </header>

            <div className="prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="font-display font-bold text-xl text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Privacy Policy describes how we collect, use, store, and protect your personal information when you use our property due diligence and guidance value services. By using our services, you agree to the collection and use of information in accordance with this policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-xl text-foreground mb-4">2. Information We Collect</h2>
                
                <div className="mb-6">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-3">2.1 Information You Provide</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Contact information (name, email address, phone number)</li>
                    <li>Property-related information (survey number, PID number, area details, land location)</li>
                    <li>Payment information for processing transactions</li>
                    <li>Communication records when you contact our support team</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-3">2.2 Information We Collect Automatically</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Website usage data through cookies and analytics tools</li>
                    <li>IP address and browser information</li>
                    <li>Device information and operating system details</li>
                    <li>Pages visited and time spent on our website</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-xl text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-3">We use your information to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Process your service requests for guidance value and compiled property reports</li>
                  <li>Deliver reports via email or physical delivery as requested</li>
                  <li>Communicate with you about your orders and provide customer support</li>
                  <li>Improve our services and website functionality</li>
                  <li>Comply with legal obligations and government requirements</li>
                  <li>Prevent fraud and ensure security of our services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-xl text-foreground mb-4">4. Information Sources and Data Compilation</h2>
                <p className="text-muted-foreground mb-3">We compile property information from:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Public records and government databases</li>
                  <li>Third-party APIs from government websites</li>
                  <li>Our proprietary database containing manually collected data from Sub-Registrar offices</li>
                  <li>Official land records including Encumbrance Certificates, Sale Deeds, KHATA, Pahani, Survey Sketches, and Mutation Records</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-xl text-foreground mb-4">5. Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground mb-3">We do not share your personal information with third parties except:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>When required by law or government authorities</li>
                  <li>To process payments through authorized payment processors</li>
                  <li>With your explicit consent</li>
                  <li>To protect our rights, property, or safety</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-xl text-foreground mb-4">6. Data Storage and Retention</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>We store your information indefinitely to maintain service continuity and comply with legal requirements</li>
                  <li>All data is stored securely using industry-standard security measures</li>
                  <li>We implement appropriate technical and organizational measures to protect against unauthorized access</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-xl text-foreground mb-4">7. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground mb-3">We use cookies and similar tracking technologies to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Enhance website functionality and user experience</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Remember your preferences and settings</li>
                </ul>
                <p className="text-muted-foreground mt-3">
                  You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-xl text-foreground mb-4">8. Your Rights</h2>
                <p className="text-muted-foreground mb-3">You have the right to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Access your personal information we hold</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information (subject to legal retention requirements)</li>
                  <li>Withdraw consent for certain data processing activities</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-xl text-foreground mb-4">9. Security Measures</h2>
                <p className="text-muted-foreground mb-3">We implement appropriate security measures including:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Encrypted data transmission</li>
                  <li>Secure data storage systems</li>
                  <li>Access controls and authentication procedures</li>
                  <li>Regular security assessments and updates</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-xl text-foreground mb-4">10. Geographic Scope</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are primarily designed for users in India, specifically the Bangalore region. This Privacy Policy is governed by Indian privacy laws and regulations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-xl text-foreground mb-4">11. Contact Information</h2>
                <p className="text-muted-foreground mb-3">
                  For privacy-related questions, concerns, or requests, please contact us at:
                </p>
                <div className="bg-muted/30 rounded-lg p-4 border border-border/20">
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> admin@zamindarr.com<br />
                    <strong>Response Time:</strong> Within 48 hours
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-xl text-foreground mb-4">12. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website with a new effective date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display font-bold text-xl text-foreground mb-4">13. Consent</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By using our services, you consent to the collection, use, and storage of your information as described in this Privacy Policy.
                </p>
              </section>
            </div>
          </div>
        </div>
      </ResponsiveWrapper>
      <Footer />
    </main>
  );
};

export default PrivacyPolicy;