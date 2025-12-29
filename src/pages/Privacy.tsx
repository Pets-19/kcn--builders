import Layout from '@/components/layout/Layout';

const Privacy = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: December 24, 2025</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl prose prose-lg">
          <h2>Introduction</h2>
          <p>
            KCN Builders ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or engage with our services.
          </p>

          <h2>Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, and pages visited.</li>
            <li><strong>Property Preferences:</strong> Information about your housing preferences and requirements.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Respond to your inquiries and provide customer service</li>
            <li>Send you information about our projects and services</li>
            <li>Schedule property visits</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:<br />
            Email: privacy@kcnbuilders.com<br />
            Phone: +91 97477 70369
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
