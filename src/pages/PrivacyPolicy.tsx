import { Link } from "react-router-dom";
import { ArrowLeft, Youtube, Instagram } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. General Information</h2>
            <p className="text-slate-600 leading-relaxed">
              At BBE Club Preparation Course ("we", "us", "our"), we take your privacy seriously. We process your personal data in accordance with the General Data Protection Regulation (GDPR) and other applicable data protection laws. This Privacy Policy explains how we collect, use, store, and protect your personal data when you visit our website and use our course-related services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Data Controller (Required under GDPR)</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The data controller responsible for processing your personal data is:
            </p>
            <div className="text-slate-600 leading-relaxed">
              <p><strong>BBE Club Preparation Course</strong></p>
              <p>Legal entity / Owner name: [INSERT]</p>
              <p>Registered address: [INSERT]</p>
              <p>Email (privacy requests): privacy@bbeclub.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Access Data & Server Log Files</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              When you access our website, our hosting provider collects data about access ("server log files"). This may include:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>The page you accessed</li>
              <li>The time of access</li>
              <li>The amount of data sent</li>
              <li>The referrer (the page from which you came)</li>
              <li>The browser and operating system used</li>
              <li>The (anonymized) IP address</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              This data is stored for a maximum of 7 days and is used to ensure the proper functioning and security of our website and to improve our services. We do not merge this data with other data sources.
            </p>
            <p className="text-slate-600 leading-relaxed mt-2">
              <strong>Legal basis:</strong> Art. 6(1)(f) GDPR (legitimate interest).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Cookies & Tracking Technologies</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our website uses cookies and similar technologies for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li><strong>Essential cookies:</strong> Required for the operation, security, and core functionality of the website. Legal basis: Art. 6(1)(f) GDPR (legitimate interest).</li>
              <li><strong>Analytics and marketing cookies:</strong> Used for statistical purposes, measuring reach, and marketing. Legal basis: Art. 6(1)(a) GDPR (consent).</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              We may use tools such as Google Analytics (with IP anonymization) and Meta Pixel (if enabled on your site). You will be asked for consent to use non-essential cookies via a cookie banner when you first visit our website. You can withdraw or change your consent at any time via cookie settings (if available).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Collection and Processing of Personal Data</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We collect personal data when you register for the course, contact us, or use our services. This may include:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number (if provided)</li>
              <li>Communication preferences</li>
              <li>Course-related data (e.g., progress, assignments, test results)</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use this data for:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Managing course enrollment and providing access to course materials</li>
              <li>Providing customer support</li>
              <li>Sending course updates, reminders, and important service messages</li>
              <li>Personalizing communication related to the course</li>
              <li>Sending marketing messages (only where permitted by law and/or with your consent)</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              <strong>Legal bases for processing:</strong>
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Art. 6(1)(b) GDPR (performance of a contract)</li>
              <li>Art. 6(1)(a) GDPR (consent)</li>
              <li>Art. 6(1)(f) GDPR (legitimate interest)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Payments (Important clarification)</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Payments for course enrollment are processed exclusively by third-party payment providers (e.g., Stripe, PayPal, or other providers you use).
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              We do not store or process credit card details or other sensitive payment data (such as full card numbers or CVV) on our servers. Payment information is handled directly by the payment provider in accordance with their privacy policy. We may receive limited payment-related information such as payment status, transaction IDs, or billing details necessary for accounting and customer support.
            </p>
            <p className="text-slate-600 leading-relaxed">
              <strong>Legal basis:</strong> Art. 6(1)(b) GDPR (contract) and Art. 6(1)(c) GDPR (legal obligation, where accounting/tax retention applies).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Third-Party Services (Processors)</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may use third-party service providers to operate and improve our services, such as:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Hosting and infrastructure providers</li>
              <li>Payment processors (e.g., Stripe, PayPal)</li>
              <li>Email and communication tools (e.g., newsletters, course updates)</li>
              <li>Analytics tools (e.g., Google Analytics)</li>
              <li>Marketing tools (e.g., Meta Pixel, if used)</li>
              <li>Learning management systems (LMS) / course platforms (e.g., Teachable, Thinkific, or similar), if applicable</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              Where required, we enter into data processing agreements with these providers to ensure GDPR compliance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">8. International Data Transfers</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Some third-party providers may process personal data outside the European Union / European Economic Area (EU/EEA). In such cases, we ensure appropriate safeguards are in place, such as:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Standard Contractual Clauses (SCCs) approved by the European Commission, and/or</li>
              <li>other lawful transfer mechanisms under GDPR.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Your Rights</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Right of access (Art. 15 GDPR)</li>
              <li>Right to rectification (Art. 16 GDPR)</li>
              <li>Right to erasure (Art. 17 GDPR)</li>
              <li>Right to restriction of processing (Art. 18 GDPR)</li>
              <li>Right to data portability (Art. 20 GDPR)</li>
              <li>Right to object (Art. 21 GDPR)</li>
              <li>Right to withdraw consent at any time (Art. 7 GDPR)</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mb-4">
              To exercise your rights, contact us at: <a href="mailto:privacy@bbeclub.com" className="text-primary hover:underline">privacy@bbeclub.com</a>
            </p>
            <p className="text-slate-600 leading-relaxed">
              You also have the right to lodge a complaint with a data protection authority in your country of residence or where the alleged infringement occurred.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">10. Data Retention and Deletion</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We retain personal data only as long as necessary to provide our services and for legitimate purposes such as security, dispute resolution, and compliance with legal obligations.
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Course/account data is generally retained while you use our services and for a reasonable period afterward.</li>
              <li>Where we are subject to legal obligations (e.g., accounting/tax laws), certain data may be stored for the legally required period.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              You may unsubscribe from marketing communications at any time. Note that we may still send essential service communications related to your enrollment (e.g., access, security, payment confirmations).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">11. Data Security</h2>
            <p className="text-slate-600 leading-relaxed">
              We implement appropriate technical and organizational measures to protect personal data against unauthorized access, disclosure, alteration, or destruction (e.g., access controls, encryption where appropriate, secure hosting).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">12. Changes to this Privacy Policy</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The most current version will be posted on our website with an updated effective date.
            </p>
            <p className="text-slate-600 leading-relaxed">
              <strong>Effective date:</strong> [INSERT DATE]
            </p>
          </section>

          {/* Social Media Section */}
          <section className="border-t border-slate-200 pt-8 mt-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Follow Us</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Stay connected with BBE Club on social media for updates, tips, and more:
            </p>
            <div className="flex gap-4">
              <a
                href="http://www.youtube.com/@BBEClub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <Youtube className="w-5 h-5 text-slate-700" />
              </a>
              <a
                href="https://www.instagram.com/bbeclub/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <Instagram className="w-5 h-5 text-slate-700" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <TikTokIcon className="w-5 h-5 text-slate-700" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default PrivacyPolicy;
