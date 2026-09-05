import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Youtube, Instagram } from "lucide-react";
import contactPortrait from "@/assets/contact-portrait.jpg";

const contactLinks = [
  { icon: Mail, label: "Email", value: "kaehyuni.business.acc@gmail.com", href: "mailto:kaehyuni.business.acc@gmail.com" },
  { icon: Mail, label: "Student Email", value: "khn230002@utdallas.edu", href: "mailto:khn230002@utdallas.edu" },
  { icon: Linkedin, label: "LinkedIn", value: "Kenny (Kaehyuni) Nguyen", href: "www.linkedin.com/in/kenny-n-a72828302" },
  { icon: Youtube, label: "YouTube", value: "youtube.com/@kaehyuni", href: "https://youtube.com/@kaehyuni?si=u9FqA6UXmbIowl4r" },
  { icon: Instagram, label: "Art Instagram", value: "@kaehyuni_misul", href: "https://www.instagram.com/kaehyuni_misul/" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-28 bg-gradient-section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gradient mb-4">Get in Touch</h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto">
            Let's connect and create something amazing together.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row gap-10 items-center"
          >
            {/* Portrait */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-primary/25 to-transparent blur-lg" />
                <img
                  src={contactPortrait}
                  alt="Kenny Nguyen"
                  className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-xl object-cover"
                />
              </div>
            </motion.div>

            {/* Links */}
            <div className="flex-1 space-y-4 w-full">
              {contactLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-secondary/50 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                      <Icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">{link.label}</p>
                      <p className="font-body text-sm text-foreground group-hover:text-primary transition-colors duration-300">{link.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
