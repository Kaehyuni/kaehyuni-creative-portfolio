import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gradient mb-4">About Me</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8 sm:p-12 space-y-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-primary/60 to-transparent" />
              <span className="font-heading text-sm tracking-[0.2em] uppercase text-primary">Kenny Nguyen</span>
            </div>

            <p className="font-body text-foreground/90 text-base sm:text-lg leading-relaxed">
              I'm a creative multimedia designer and artist passionate about visual storytelling. My work spans across
              <span className="text-primary"> videography</span>,
              <span className="text-primary"> motion graphics</span>,
              <span className="text-primary"> animation</span>, and
              <span className="text-primary"> recording engineering</span> — blending artistic vision with technical craft.
            </p>

            <p className="font-body text-muted-foreground text-base leading-relaxed">
              With a background in media production and design, I approach every project as an opportunity to create something meaningful and visually compelling. Whether it's editing a short film, designing kinetic typography, animating characters, or engineering a recording session, I bring the same level of dedication and creative energy.
            </p>

            <p className="font-body text-muted-foreground text-base leading-relaxed">
              My goal is to push the boundaries of visual and audio media — creating work that resonates emotionally and stands out aesthetically. I believe in the power of interdisciplinary creativity, and I'm always exploring new ways to merge sound, motion, and image into cohesive experiences.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              {["Video Editing", "Motion Design", "2D Animation", "Sound Design", "Color Grading", "Recording", "Typography", "Branding"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-xs font-body tracking-wide border border-border text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
