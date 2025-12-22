import { Youtube, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
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

export default Footer;
