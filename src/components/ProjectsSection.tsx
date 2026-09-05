import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Film,
  Sparkles,
  Palette,
  GraduationCap,
  Music,
  Brush,
  ExternalLink,
} from "lucide-react";

const categories = [
  { id: "videography", label: "Videography / Film", icon: Film },
  { id: "motion", label: "Motion Graphics", icon: Sparkles },
  { id: "animation", label: "Animations", icon: Palette },
  { id: "class", label: "Class Projects", icon: GraduationCap },
  { id: "recording", label: "Recording Engineering", icon: Music },
  { id: "artworks", label: "Artworks", icon: Brush },
];

type Project = {
  title: string;
  description: string;
  link?: string;
  embed?: string;
  thumbnail?: string;
  year?: string;
};

const projectsByCategory: Record<string, Project[]> = {
 videography: [
  {
    title: "Short Film 01",
    description:
      "A short film told through visuals and sound effects without dialogue, focusing on pacing, atmosphere, and visual storytelling.",
    link: "https://youtu.be/e0ajZyqSAy8",
    embed: "https://www.youtube.com/embed/e0ajZyqSAy8?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/e0ajZyqSAy8/hqdefault.jpg",
  },

  {
    title: "Short Film 02",
    description:
      "A second no-dialogue short film that uses sound effects, framing, and movement to guide the story and mood.",
    link: "https://youtu.be/ccGgU6XVP4g",
    embed: "https://www.youtube.com/embed/ccGgU6XVP4g?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/ccGgU6XVP4g/hqdefault.jpg",
  },

  {
    title: "Short Film 03",
    description:
      "A silent short film with no dialogue or sound, relying completely on composition, visual rhythm, and imagery.",
    link: "https://youtu.be/lxlbRlEC9uk",
    embed: "https://www.youtube.com/embed/lxlbRlEC9uk?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/lxlbRlEC9uk/hqdefault.jpg",
  },

  {
    title: "Senior Sunset 2024",
    description:
      "An event highlight video documenting the Senior Sunset tradition and celebrating student memories and community.",
    link: "https://youtu.be/M93EE6S6bks",
    embed: "https://www.youtube.com/embed/M93EE6S6bks?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/M93EE6S6bks/hqdefault.jpg",
  },
   
  {
    title: "Senior Sunrise 2023",
    description:
      "A commemorative event video capturing the Richland Collegiate High School Class of 2024 gathering together for Senior Sunrise.",
    link: "https://youtu.be/M1UKccX9nLA",
    embed: "https://www.youtube.com/embed/M1UKccX9nLA?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/M1UKccX9nLA/hqdefault.jpg",
  },

  {
    title: "Volleyball Masquerade 2023",
    description:
      "An event coverage video featuring the Volleyball Masquerade event through dynamic editing, cinematography, and storytelling.",
    link: "https://youtu.be/Fu-FY2v94s4",
    embed: "https://www.youtube.com/embed/Fu-FY2v94s4?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/Fu-FY2v94s4/hqdefault.jpg",
  },
],

  motion: [
  {
    title: "Cool With You – Motion Typography Cover",
    year: "2026",
    description:
      "A motion typography music video inspired by NewJeans' Cool With You. Created using After Effects and VideoStar, this project combines animated lyrics, visual storytelling, and synchronized motion design to enhance the emotional atmosphere of the song.",
    link: "https://youtu.be/O17j7VqBuoI",
    embed: "https://www.youtube.com/embed/O17j7VqBuoI?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/O17j7VqBuoI/hqdefault.jpg",
  },
  {
    title: "Motion Design Principles Study",
    year: "2026",
    description:
      "A motion graphics project exploring core animation and motion design principles, including timing, easing, anticipation, and visual rhythm. Created in After Effects as part of an advanced motion design course.",
    link: "https://youtu.be/6tSYlC_NsIE",
    embed: "https://www.youtube.com/embed/6tSYlC_NsIE?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/6tSYlC_NsIE/hqdefault.jpg",
  },
  {
    title: "Get Up – Kinetic Typography Animation",
    year: "2025",
    description:
      "A kinetic typography project created with NewJeans' Get Up. Designed using Funimate, this piece focuses on lyric synchronization, animated text movement, and visual pacing to support the song cover's mood and energy that I made.",
    link: "https://youtu.be/EU1of2B0B70",
    embed: "https://www.youtube.com/embed/EU1of2B0B70?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/EU1of2B0B70/hqdefault.jpg",
  },
  {
    title: "Black Swan Men – Multi-Editor Collaboration",
    year: "2021",
    description:
      "A collaborative multi-editor project that combined digital artwork, animation, and motion typography. This project helped me develop skills in coordinating visual storytelling with other creators while experimenting with animated text, transitions, and timing.",
    link: "https://youtu.be/Vu1imG_a9Rc",
    embed: "https://www.youtube.com/embed/Vu1imG_a9Rc?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/Vu1imG_a9Rc/hqdefault.jpg",
  },
  {
    title: "Poker Face – MEP Collaboration",
    year: "2020",
    description:
      "A collaborative multi-editor project that introduced me to working alongside other content creators. The piece incorporates typography, motion graphics, and animation techniques while developing skills in teamwork, timing, and visual synchronization.",
    link: "https://youtu.be/N4OJu1aQLZo",
    embed: "https://www.youtube.com/embed/N4OJu1aQLZo?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/N4OJu1aQLZo/hqdefault.jpg",
  },
  {
    title: "Circles – Typography Motion Experiment",
    year: "2020",
    description:
      "One of my earliest motion typography experiments, created to explore synchronizing animated text with music. Through this piece, I practiced typography effects, motion design techniques, and visual pacing that later influenced my future motion graphics work.",
    link: "https://youtu.be/dVy2b8m56LU",
    embed: "https://www.youtube.com/embed/dVy2b8m56LU?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/dVy2b8m56LU/hqdefault.jpg",
  },
],

 animation: [
  {
    title: "Purple Sapphire – Animated Music & Storytelling Project",
    year: "2026",
    description:
      "An After Effects animation project combining visual storytelling, character animation, and original MIDI-based audio production created in Pro Tools. This was my first university-level animation project where I connected animation, music composition, and emotional storytelling into one piece.",
    link: "https://youtu.be/vKVajgx-ris",
    embed: "https://www.youtube.com/embed/vKVajgx-ris?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/vKVajgx-ris/hqdefault.jpg",
  },

  {
    title: "아파트 – Animated Music Video & Song Cover",
    year: "2025",
    description:
      "An animated music video inspired by Legend of Zelda: Breath of the Wild, combining a song cover, motion graphics, and animation. This project allowed me to apply my knowledge of Pro Tools and After Effects while also including an original rap section written and performed at the end.",
    link: "https://youtu.be/1A0vG1msPdg",
    embed: "https://www.youtube.com/embed/1A0vG1msPdg?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/1A0vG1msPdg/hqdefault.jpg",
  },

  {
    title: "Animation Meme Tribute Project",
    year: "2021",
    description:
      "A short-form animation project created as a tribute to an artist who inspired me to push VideoStar as an animation tool. This piece uses original artwork, motion graphics, lighting, transitions, and visual effects to explore how mobile editing apps can be used for expressive animation.",
    link: "https://youtu.be/0lupPsiMRDo",
    embed: "https://www.youtube.com/embed/0lupPsiMRDo?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/0lupPsiMRDo/hqdefault.jpg",
  },

  {
    title: "BloodPop – Original Art Animation Meme",
    year: "2021",
    description:
      "An animation meme created using my own original artwork instead of premade character assets. This project marked my transition into custom character animation, VFX, and frame-by-frame movement, including an early sword-swing animation sequence.",
    link: "https://youtu.be/lLJzEag-H3w",
    embed: "https://www.youtube.com/embed/lLJzEag-H3w?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/lLJzEag-H3w/hqdefault.jpg",
  },


  {
    title: "Pusher – Horror Composition Animation Study",
    year: "2020",
    description:
      "A Halloween-themed animation study focused on creating a creepy atmosphere through foreground, midground, and background composition. This project helped me experiment with depth, scene staging, and visual mood in animation.",
    link: "https://youtu.be/xzmOrIXO5Ys",
    embed: "https://www.youtube.com/embed/xzmOrIXO5Ys?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/xzmOrIXO5Ys/hqdefault.jpg",
  },

  {
    title: "Asphyxiate – 24-Hour Animation Challenge",
    year: "2020",
    description:
      "A 24-hour animation challenge created with Gacha Club assets as a starting point for learning tweening, timing, VFX, lighting, and scene organization. This project helped me practice animating flowing hair, managing a timeline, and completing an animated sequence under a strict time limit.",
    link: "https://youtu.be/oHB8pqStLAs",
    embed: "https://www.youtube.com/embed/oHB8pqStLAs?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/oHB8pqStLAs/hqdefault.jpg",
  },

  {
    title: "Playdate – Lighting Animation Experiment",
    year: "2020",
    description:
      "A lighting-focused animation experiment inspired by Pixelmario6264. Created in VideoStar, this project challenged me to animate using imported body sheets without relying on IbisPaint separation, while exploring how lighting can shift with the music and support visual rhythm.",
    link: "https://youtu.be/OLo7xr0SaUM",
    embed: "https://www.youtube.com/embed/OLo7xr0SaUM?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/OLo7xr0SaUM/hqdefault.jpg",
  },

     {
    title: "Emotion – Transition from FlipaClip to VideoStar",
    year: "2020",
    description:
      "Created as a 200-subscriber special, this project marked an important transition in my animation journey from FlipaClip to VideoStar. The animation begins with scenes created in FlipaClip before moving into VideoStar editing and effects. I also used Funimate to create transitions while learning the VideoStar workflow, making this project a key milestone in developing my editing, animation, and visual storytelling skills.",
    link: "https://youtu.be/n50LNFutkW4",
    embed: "https://www.youtube.com/embed/n50LNFutkW4?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/n50LNFutkW4/hqdefault.jpg",
  },
   
  {
    title: "First Animation Project",
    year: "2019",
    description:
      "My first completed animation project, created using FlipaClip and Funimate. This early experiment sparked my interest in animation and became the starting point for my growth in motion, editing, character movement, and visual storytelling.",
    link: "https://youtu.be/4YyGYvyTiL8",
    embed: "https://www.youtube.com/embed/4YyGYvyTiL8?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/4YyGYvyTiL8/hqdefault.jpg",
  },
],

class: [
  {
    title: "Belonging – Student Community & Connection Platform",
    year: "2026",
    description:
      "Developed as part of a Design Research Methods group project, Belonging addresses the challenges many students face when trying to find community and connection at UTD. My team conducted interviews, collected qualitative research, and analyzed student experiences to better understand feelings of isolation and belonging on campus. Using these findings, we designed an application that helps students connect through shared interests, activities, and academic goals. This project emphasized collaborative research, data analysis, empathy-driven design, and the creation of solutions based on real user needs.",
    link: "https://www.figma.com/proto/v70ENZg4aiAtS9RGONAysT/Group--1--Belonging?node-id=228-4659&p=f&t=3F3mWUyStDRIGIgt-1&scaling=scale-down&content-scaling=fixed&page-id=119%3A4235&starting-point-node-id=228%3A4659&show-proto-sidebar=1",
    designLink:
      "https://www.figma.com/design/v70ENZg4aiAtS9RGONAysT/Group--1--Belonging?node-id=119-4235&p=f&t=pj5z9OdRDoHyK8qh-0",

  },

  {
    title: "Doc – Fitness Tracking & Wellness App",
    year: "2026",
    description:
      "This project was developed through a user-centered design process focused on addressing the real challenges faced by one of my classmates. Through interviews, observation, empathy mapping, and research, I identified pain points related to fitness tracking and motivation. Using these insights, I designed a mobile application prototype that provides users with a more intuitive and supportive fitness experience. This project strengthened my skills in user research, empathy-driven design, problem definition, and transforming research findings into meaningful design solutions.",
    link: "https://www.figma.com/proto/75xmxlS9EfUuFBTUK9DmAL/Kenny-Nguyen---Doc-Fitness-Tracking-App?node-id=4-954&p=f&t=hLgEvlHCIEpOa8fF-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A954",
    designLink:
      "https://www.figma.com/design/75xmxlS9EfUuFBTUK9DmAL/Kenny-Nguyen---Doc-Fitness-Tracking-App?node-id=0-1&p=f&t=L5LCl5iFdeLBMz9i-0",

  },

  {
    title: "Shinkansen Train Booking App Redesign",
    year: "2026",
    description:
      "This interaction design project challenged me to redesign the user experience of a Japanese Shinkansen train booking application. Using Figma, I analyzed the original interface and identified opportunities to improve navigation, spacing, alignment, visual hierarchy, and usability. Through this process, I applied principles of user-centered design while learning how small design decisions can significantly impact the overall user experience. The project strengthened my understanding of layout systems, interface consistency, accessibility, and mobile-first design practices.",
    link: "https://www.figma.com/proto/K6vgapOkzRg7K7mFg5yJmT/Kenny-Nguyen--Prototype-Train-Booking-App?node-id=82-2050&t=PeTQw50fngCUwTbo-1&scaling=contain&content-scaling=fixed&page-id=78%3A577&starting-point-node-id=82%3A2050",
    designLink:
      "https://www.figma.com/design/K6vgapOkzRg7K7mFg5yJmT/Kenny-Nguyen--Prototype-Train-Booking-App?node-id=78-577&p=f&t=wapSBJeSEMBvopXT-0",

  },
],

 recording: [
  {
    title: "Band Recording & Mixing Session",
    year: "2025",
    description:
      "My first experience recording a full band in a studio environment. Working with my classmates, we planned microphone placement for drums, guitar, and vocals before capturing a live performance. After recording, our team collaborated on mixing and mastering the session to create a balanced final production. I also edited and compiled the project video, allowing me to contribute both technical audio and visual production skills.",
    link: "https://youtu.be/dCrBFqDMOVA",
    embed: "https://www.youtube.com/embed/dCrBFqDMOVA?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/dCrBFqDMOVA/hqdefault.jpg",
  },
  {
    title: "Multi-Microphone Drum Recording Session",
    year: "2025",
    description:
      "A studio recording project focused on capturing a live drum performance using multiple microphones. Working alongside my classmates, I learned microphone selection, placement techniques, gain staging, and phase awareness while recording a drum kit. After the recording session, our group worked together to edit and mix the final audio.",
    link: "https://youtu.be/Sv2DTKAEjd8",
    embed: "https://www.youtube.com/embed/Sv2DTKAEjd8?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/Sv2DTKAEjd8/hqdefault.jpg",
  },
  {
    title: "Guitar & Vocal Recording Fundamentals",
    year: "2025",
    description:
      "An introductory studio recording project focused on microphone techniques for acoustic instruments, guitar amplifiers, and vocals. Working as a team, we explored microphone placement, signal routing, recording workflow, and session setup while learning the foundations of professional studio recording practices.",
    link: "https://youtu.be/gTfEIL4f3aw",
    embed: "https://www.youtube.com/embed/gTfEIL4f3aw?autoplay=1",
    thumbnail: "https://img.youtube.com/vi/gTfEIL4f3aw/hqdefault.jpg",
  },
],

artworks: [
  {
    title: "Artwork 01",
    link: "https://www.instagram.com/p/DOEyapMke1E/",
  },
  {
    title: "Artwork 02",
    link: "https://www.instagram.com/p/C7VOx42M4uY/",
  },
  {
    title: "Artwork 03",
    link: "https://www.instagram.com/p/Ct8liVGucIl/",
  },
  {
    title: "Artwork 04",
    link: "https://www.instagram.com/p/CstArV-OmoK/",
  },
  {
    title: "Artwork 05",
    link: "https://www.instagram.com/p/Cqb7lS6MR08/",
  },
  {
    title: "Artwork 06",
    link: "https://www.instagram.com/p/Cp4oh5IurCL/",
  },
  {
    title: "Artwork 07",
    link: "https://www.instagram.com/p/CleslRxJSVQ/",
  },
  {
    title: "Artwork 08",
    link: "https://www.instagram.com/p/CjiFA3lsoG6/",
  },
  {
    title: "Artwork 09",
    link: "https://www.instagram.com/p/CgOWUxwOgS2/",
  },
  {
    title: "Artwork 10",
    link: "https://www.instagram.com/p/CfkEM_cJ5XI/",
  },
  {
    title: "Artwork 11",
    link: "https://www.instagram.com/p/Cd4kmI1MdJk/",
  },
  {
    title: "Artwork 12",
    link: "https://www.instagram.com/p/Ca-j8d5lGFb/",
  },
  {
    title: "Artwork 13",
    link: "https://www.instagram.com/p/CZf-MgmslpL/",
  },
  {
    title: "Artwork 14",
    link: "https://www.instagram.com/p/CYCtGCKrtVt/",
  },
  {
    title: "Artwork 15",
    link: "https://www.instagram.com/p/CVoFSs_rZp5/",
  },
  {
    title: "Artwork 16",
    link: "https://www.instagram.com/p/CUiC0XNrEVd/",
  },
  {
    title: "Artwork 17",
    link: "https://www.instagram.com/p/CTMlQLHLjst/",
  },
  {
    title: "Artwork 18",
    link: "https://www.instagram.com/p/CRcnWqmsoXr/",
  },
  {
    title: "Artwork 19",
    link: "https://www.instagram.com/p/CQ3oytAs1ap/",
  },
  {
    title: "Artwork 20",
    link: "https://www.instagram.com/p/CHDdxg6hjyD/",
  },
  {
    title: "Artwork 21",
    link: "https://www.instagram.com/p/B7H0atehiwx/",
  },
  {
    title: "Artwork 22",
    link: "https://www.instagram.com/p/B2aWIU9B7xS/",
  },
  {
    title: "Artwork 23",
    link: "https://www.instagram.com/p/B0PgJa1BpBz/",
  },
  {
    title: "Artwork 24",
    link: "https://www.instagram.com/p/BykfHd3BBkc/",
  },
  {
    title: "Artwork 25",
    link: "https://www.instagram.com/p/BxxQE-bghqk/",
  },
],
};

const ProjectsSection = () => {
  const [active, setActive] = useState("videography");
  const [selectedVideo, setSelectedVideo] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-28 bg-gradient-section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gradient mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            A curated selection of my work across videography, animation, motion
            graphics, recording, class projects, and visual art.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = active === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_-4px_hsl(213_94%_58%/0.4)]"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projectsByCategory[active]?.map((project, i) => {
              const ActiveIcon =
                categories.find((c) => c.id === active)?.icon || Film;

              const CardContent = (
                <>
                  <div className="h-48 bg-gradient-to-br from-secondary to-muted relative overflow-hidden">
                    {project.thumbnail ? (
                      <>
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-lg">
                            <div className="ml-1 w-0 h-0 border-l-[14px] border-l-white border-y-[10px] border-y-transparent" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">
                          <ActiveIcon size={48} />
                        </div>
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                      </>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>

                      {project.link && !project.embed && (
                        <ExternalLink
                          size={16}
                          className="text-muted-foreground group-hover:text-primary transition-colors duration-300 shrink-0 mt-1"
                        />
                      )}
                    </div>

                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {project.embed && (
                      <p className="mt-4 text-sm font-medium text-primary">
                        Click to play
                      </p>
                    )}

                    {project.link && !project.embed && (
                      <p className="mt-4 text-sm font-medium text-primary">
                        Open project
                      </p>
                    )}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/60 transition-all duration-500" />
                </>
              );

              if (project.embed) {
                return (
                  <motion.button
                    key={project.title}
                    type="button"
                    onClick={() => setSelectedVideo(project)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="group relative rounded-xl overflow-hidden glass glass-hover card-shine cursor-pointer transition-all duration-500 block text-left w-full"
                  >
                    {CardContent}
                  </motion.button>
                );
              }

              if (project.link) {
                return (
                  <motion.a
                    key={project.title}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="group relative rounded-xl overflow-hidden glass glass-hover card-shine cursor-pointer transition-all duration-500 block"
                  >
                    {CardContent}
                  </motion.a>
                );
              }

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="group relative rounded-xl overflow-hidden glass glass-hover card-shine transition-all duration-500"
                >
                  {CardContent}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-black shadow-2xl"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white w-10 h-10 rounded-full text-xl"
                aria-label="Close video"
              >
                ×
              </button>

              <div className="aspect-video w-full">
                <iframe
                  src={selectedVideo.embed}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
