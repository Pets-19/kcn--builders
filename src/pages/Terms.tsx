import Layout from '@/components/layout/Layout';

const Terms = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: December 24, 2025</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl prose prose-lg">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using the KCN Builders website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h2>Use of Services</h2>
          <p>Our services are intended for:</p>
          <ul>
            <li>Individuals seeking residential or commercial properties</li>
            <li>Investors interested in real estate opportunities</li>
            <li>Partners and vendors working with KCN</li>
          </ul>

          <h2>Property Information</h2>
          <p>
            All property information, images, and specifications provided on this website are for informational purposes only. We reserve the right to modify project details, pricing, and specifications without prior notice.
          </p>

          <h2>Bookings and Payments</h2>
          <p>
            Property bookings are subject to availability and verification. All payments must be made according to the terms specified in the individual purchase agreement. Token amounts and deposits are non-refundable unless otherwise specified in writing.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, images, logos, and designs, is the property of KCN Builders and is protected by copyright laws. Unauthorized use is prohibited.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            KCN Builders shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
          </p>

          <h2>Contact Information</h2>
          <p>
            For questions regarding these Terms of Service, contact us at:<br />
            Email: legal@kcnbuilders.com<br />
            Phone: +91 97477 70369
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
