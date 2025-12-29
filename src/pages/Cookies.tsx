import Layout from '@/components/layout/Layout';

const Cookies = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Cookie Policy</h1>
          <p className="text-muted-foreground">Last updated: December 24, 2025</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl prose prose-lg">
          <h2>What Are Cookies</h2>
          <p>
            Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
          </p>

          <h2>Types of Cookies We Use</h2>
          
          <h3>Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas.
          </p>

          <h3>Analytics Cookies</h3>
          <p>
            We use analytics cookies to understand how visitors interact with our website. This helps us improve our services and user experience.
          </p>

          <h3>Marketing Cookies</h3>
          <p>
            These cookies track your browsing activity to show you relevant advertisements and measure the effectiveness of our marketing campaigns.
          </p>

          <h3>Preference Cookies</h3>
          <p>
            Preference cookies remember your settings and choices, such as language preferences and region selection.
          </p>

          <h2>How We Use Cookies</h2>
          <ul>
            <li>To remember your login information and preferences</li>
            <li>To analyze website traffic and user behavior</li>
            <li>To personalize content and advertisements</li>
            <li>To improve website functionality and performance</li>
          </ul>

          <h2>Managing Cookies</h2>
          <p>
            You can control and manage cookies through your browser settings. Most browsers allow you to:
          </p>
          <ul>
            <li>View and delete cookies</li>
            <li>Block third-party cookies</li>
            <li>Block cookies from specific websites</li>
            <li>Clear all cookies when you close your browser</li>
          </ul>
          <p>
            Please note that blocking or deleting cookies may affect your experience on our website and limit certain functionality.
          </p>

          <h2>Third-Party Cookies</h2>
          <p>
            Some cookies on our website are set by third-party services such as Google Analytics, social media platforms, and advertising networks. These services have their own privacy policies and cookie policies.
          </p>

          <h2>Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about our use of cookies, please contact us at:<br />
            Email: privacy@kcnbuilders.com<br />
            Phone: +91 97477 70369
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Cookies;
