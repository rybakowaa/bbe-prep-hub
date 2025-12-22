import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Youtube, Instagram, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const location = useLocation();
  const fromTestimonials = location.state?.from === "testimonials";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    plan: "basic",
  });

  const [selectedPlan, setSelectedPlan] = useState<"basic" | "plus">("basic");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const planName = selectedPlan === "basic" ? "Basic (70€)" : "Plus (100€)";
    window.open(
      `mailto:darya.rybakowa2017@yandex.ru?subject=BBE Course Enrollment - ${planName}&body=Name: ${formData.firstName} ${formData.lastName}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0APlan: ${planName}`,
      "_blank"
    );
    setIsSubmitted(true);
  };

  const handlePlanSelect = (plan: "basic" | "plus") => {
    setSelectedPlan(plan);
    setFormData({ ...formData, plan });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content with background */}
      <main className="flex-1 relative">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/telegram-cloud-document-2-5325729343614258315.jpg)' }}
        />
        {/* White overlay for transparency */}
        <div className="absolute inset-0 bg-white/85" />

        <div className="relative z-10 max-w-xl mx-auto px-4 py-16">
          {/* Back link */}
          <Link
            to={fromTestimonials ? "/#testimonials" : "/"}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {isSubmitted ? (
            /* Success Message */
            <div className="bg-white rounded-lg shadow-xl border border-slate-200 p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-4">
                Thank you for your application!
              </h1>
              <p className="text-slate-600 text-lg mb-8">
                BBE Club will contact you soon.
              </p>
              <Link to="/">
                <Button className="bg-slate-800 hover:bg-slate-900 text-white font-semibold py-4 px-8 text-lg rounded-lg">
                  Back to Home
                </Button>
              </Link>
            </div>
          ) : (
            <>
          {/* Price Cards */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Basic Plan */}
            <button
              type="button"
              onClick={() => handlePlanSelect("basic")}
              className={`rounded-lg shadow-xl p-6 text-center transition-all ${
                selectedPlan === "basic"
                  ? "bg-gradient-to-br from-slate-800 to-slate-900 ring-4 ring-cyan-400"
                  : "bg-gradient-to-br from-slate-700 to-slate-800 opacity-70 hover:opacity-90"
              }`}
            >
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Basic</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-white">70</span>
                <span className="text-xl font-medium text-slate-300">€</span>
              </div>
              <p className="text-slate-400 text-xs mt-2">One-time payment</p>
            </button>

            {/* Plus Plan */}
            <button
              type="button"
              onClick={() => handlePlanSelect("plus")}
              className={`rounded-lg shadow-xl p-6 text-center transition-all ${
                selectedPlan === "plus"
                  ? "bg-gradient-to-br from-slate-800 to-slate-900 ring-4 ring-cyan-400"
                  : "bg-gradient-to-br from-slate-700 to-slate-800 opacity-70 hover:opacity-90"
              }`}
            >
              <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Plus</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold text-white">100</span>
                <span className="text-xl font-medium text-slate-300">€</span>
              </div>
              <p className="text-slate-400 text-xs mt-2">One-time payment</p>
            </button>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-lg shadow-xl border border-slate-200 p-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2 text-center">
              Submit Application
            </h1>
            <p className="text-slate-600 text-center mb-8">
              Fill out the form and we will contact you
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition-all"
                  placeholder="+43 123 456 7890"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold py-6 text-lg rounded-lg"
              >
                Submit Application
              </Button>
            </form>

            <p className="text-center text-sm text-slate-500 mt-6">
              Questions? Contact us at{" "}
              <a href="mailto:contact@bbeclub.com" className="text-slate-800 hover:underline font-medium">
                contact@bbeclub.com
              </a>
            </p>
          </div>
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-16 px-4 bg-foreground text-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              BBE
            </span>
            <p className="text-background/70 mt-4 text-lg">
              Your path to WU starts here
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <SocialLink href="http://www.youtube.com/@BBEClub" icon={Youtube} label="YouTube" />
            <SocialLink href="https://tiktok.com" icon={TikTokIcon} label="TikTok" />
            <SocialLink href="https://www.instagram.com/bbeclub/" icon={Instagram} label="Instagram" />
            <SocialLink href="mailto:contact@bbeclub.com" icon={Mail} label="Email" />
          </div>

          {/* Contact Info */}
          <div className="text-center mb-12">
            <p className="text-background/70 mb-2">Questions? Reach out to us:</p>
            <a
              href="mailto:contact@bbeclub.com"
              className="text-primary hover:text-secondary transition-colors font-medium"
            >
              contact@bbeclub.com
            </a>
          </div>

          {/* Bottom */}
          <div className="border-t border-background/10 pt-8 text-center text-background/50 text-sm">
            <p className="mb-2">© {new Date().getFullYear()} BBE Club. All rights reserved.</p>
            <Link
              to="/privacy-policy"
              className="hover:text-background/80 transition-colors underline"
            >
              Privacy Policy
            </Link>
            <p className="mt-4 text-background/40">
              Website developed by Daria Rybakova
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const SocialLink = ({
  href,
  icon: Icon,
  label
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300"
  >
    <Icon className="w-5 h-5 text-background" />
  </a>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default Pricing;
