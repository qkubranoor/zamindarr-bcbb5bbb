import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container-responsive py-8 sm:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Building2 className="w-8 h-8 text-primary" />
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground">
                  Refund and Cancellation Policy
                </h1>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Effective Date:</strong> August 1, 2025</p>
                <p><strong>Last Updated:</strong> August 1, 2025</p>
              </div>
            </div>

            <div className="prose prose-slate max-w-none dark:prose-invert">
              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold mb-4 text-foreground">1. Policy Overview and Scope</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Refund and Cancellation Policy ("Policy") establishes the comprehensive framework governing refund eligibility, processing procedures, and cancellation protocols for our property intelligence and due diligence services ("Services"). Clients are advised to review this Policy thoroughly prior to engagement, as utilization of our Services constitutes acceptance of these terms in their entirety.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold mb-4 text-foreground">2. Service Categories and Delivery Standards</h2>
                
                <h3 className="text-lg font-display font-medium mb-3 text-foreground">2.1 Guidance Value Assessment Services</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  <li>Expedited service delivery within twenty-four (24) hours maximum from engagement confirmation</li>
                  <li>Electronic delivery via email in Portable Document Format (PDF) to designated recipient address</li>
                </ul>

                <h3 className="text-lg font-display font-medium mb-3 text-foreground">2.2 Comprehensive Property Due Diligence Reports</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  <li>Standard service delivery within five (5) business days from project commencement</li>
                  <li>Exhaustive due diligence documentation, analysis, and professional assessment</li>
                  <li>Electronic delivery via email with optional physical documentation delivery upon request</li>
                </ul>

                <h3 className="text-lg font-display font-medium mb-3 text-foreground">2.3 Customized Analytical Reports</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Bespoke reporting solutions tailored to specific client requirements and objectives</li>
                  <li>Service delivery timeline established and communicated during initial engagement consultation</li>
                  <li>Scope and specifications determined through collaborative client consultation process</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold mb-4 text-foreground">3. Refund Eligibility Framework</h2>
                
                <h3 className="text-lg font-display font-medium mb-3 text-foreground">3.1 Circumstances Warranting Complete Reimbursement</h3>
                <p className="text-muted-foreground mb-3">
                  Clients shall be entitled to <strong>full monetary restitution</strong> under the following specifically defined circumstances:
                </p>

                <h4 className="text-base font-medium mb-2 text-foreground">3.1.1 Complete Absence of Official Documentation</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  <li>Absolute unavailability of official governmental documents or records pertaining to the specified property</li>
                  <li>Complete absence of governmental records, documentation, or data within all accessible databases and repositories</li>
                  <li>Demonstrable inability to locate any relevant official documentation despite comprehensive search protocols and due diligence efforts</li>
                </ul>

                <h4 className="text-base font-medium mb-2 text-foreground">3.1.2 Material Inaccuracy in Guidance Value Assessment</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  <li>Factual incorrectness in guidance value determinations as provided in our Assessment Services</li>
                  <li>Discrepancies demonstrably verifiable against official governmental sources and authoritative records</li>
                  <li>Errors attributable to our analytical processes rather than source data limitations or governmental record inaccuracies</li>
                </ul>

                <h3 className="text-lg font-display font-medium mb-3 text-foreground">3.2 Circumstances Precluding Refund Eligibility</h3>
                <p className="text-muted-foreground mb-3">
                  <strong>No monetary restitution shall be provided</strong> under the following conditions and circumstances:
                </p>

                <h4 className="text-base font-medium mb-2 text-foreground">3.2.1 Accurate Representation of Governmental Data</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  <li>When delivered information accurately reflects and corresponds to official governmental agency records and documentation</li>
                  <li>Reports compiled with precision from all available official sources and databases</li>
                  <li>Information that accurately matches governmental records as they existed at the time of compilation and analysis</li>
                </ul>

                <h4 className="text-base font-medium mb-2 text-foreground">3.2.2 Data Source Limitations and Constraints</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  <li>Incomplete or fragmented governmental records (where we provide comprehensive representation of all officially available information)</li>
                  <li>Historical data gaps, omissions, or inconsistencies within governmental database systems</li>
                  <li>Temporary inaccessibility or unavailability of specific governmental information systems or databases</li>
                </ul>

                <h4 className="text-base font-medium mb-2 text-foreground">3.2.3 Client-Initiated Changes or Modifications</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Cancellation requests submitted subsequent to completed service delivery</li>
                  <li>Modifications in client property acquisition decisions or investment strategies</li>
                  <li>Client dissatisfaction with legal property status as accurately reflected in official governmental records</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold mb-4 text-foreground">4. Refund Processing Procedures</h2>
                
                <h3 className="text-lg font-display font-medium mb-3 text-foreground">4.1 Formal Refund Request Protocol</h3>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
                  <li><strong>Initial Contact:</strong> Submit detailed refund request via email to admin@zamindarr.com</li>
                  <li><strong>Required Documentation:</strong> Include complete order identification, property specifications, and comprehensive justification for refund request</li>
                  <li><strong>Supporting Evidence:</strong> Submit all relevant supporting documentation, particularly for guidance value accuracy disputes</li>
                  <li><strong>Review Period:</strong> Our review process shall be completed within forty-eight (48) hours of request receipt</li>
                  <li><strong>Decision Communication:</strong> Refund approval or denial determination shall be communicated via official written correspondence</li>
                </ol>

                <h3 className="text-lg font-display font-medium mb-3 text-foreground">4.2 Refund Processing Timeline and Methodology</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Comprehensive Review Process:</strong> Forty-eight (48) hours from receipt of formal refund request</li>
                  <li><strong>Financial Processing Period:</strong> Five to seven (5-7) business days following approval confirmation</li>
                  <li><strong>Payment Methodology:</strong> All refunds processed exclusively to the original payment method utilized for the transaction</li>
                  <li><strong>Confirmation Protocol:</strong> Email notification dispatched immediately upon successful refund completion</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold mb-4 text-foreground">5. Service Cancellation Framework</h2>
                
                <h3 className="text-lg font-display font-medium mb-3 text-foreground">5.1 Pre-Delivery Cancellation Protocols</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                  <li><strong>Guidance Value Assessment Services:</strong> Cancellation permitted up to two (2) hours following order placement</li>
                  <li><strong>Comprehensive Due Diligence Reports:</strong> Cancellation permitted up to twenty-four (24) hours following engagement confirmation</li>
                  <li><strong>Work-in-Progress Considerations:</strong> If analytical work has commenced, proportional charges may apply based on completed work product</li>
                </ul>

                <h3 className="text-lg font-display font-medium mb-3 text-foreground">5.2 Post-Delivery Cancellation Limitations</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>No cancellations accepted following electronic delivery of completed services</li>
                  <li>Physical delivery services cannot be cancelled once dispatch has been initiated through courier services</li>
                  <li>Post-delivery situations governed exclusively by refund policy provisions rather than cancellation protocols</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold mb-4 text-foreground">6. Partial Reimbursement Framework</h2>
                
                <h3 className="text-lg font-display font-medium mb-3 text-foreground">6.1 Applicable Circumstances</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Incomplete service delivery attributable to limited governmental data availability despite comprehensive efforts</li>
                  <li>Service delivery delays exceeding committed timeframes due to internal processing errors</li>
                  <li>Technical complications preventing complete report generation or delivery</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-display font-semibold mb-4 text-foreground">Legal Notice</h2>
                <p className="text-muted-foreground">
                  This policy constitutes a binding agreement between the Company and its clients. Utilization of our services indicates acceptance of these terms in their entirety.
                </p>
              </section>
            </div>

            <div className="text-center mt-12">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RefundPolicy;