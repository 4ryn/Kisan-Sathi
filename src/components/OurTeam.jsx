import React from "react";
import { motion } from "framer-motion";

const Section = ({ title, children }) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold text-green-900 mb-6 border-b-4 border-teal-500 inline-block">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {children}
    </div>
  </div>
);

const MemberCard = ({ name, role, description }) => (
  <motion.div
    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h3 className="text-xl font-semibold text-green-800 mb-2">{name}</h3>
    {role && <p className="text-sm text-teal-600 font-medium mb-3">{role}</p>}
    <p className="text-gray-700 text-sm text-justify">{description}</p>
  </motion.div>
);

const OurTeam = () => {
  return (
    <div className="bg-green-50 py-12 px-6 lg:px-20 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-green-900 mb-12">Meet Our Team</h1>

      <Section title="Supervisor">
        <MemberCard
          name="Dr Saravanan S"
          role="Supervisor"
          description="Dr. Saravanan S, Assistant Professor (Senior Grade) at VIT Bhopal, holds a Ph.D. from Anna University and has 16+ years of experience, with 26 publications, 5 patents, and expertise in Cloud Computing, AI, and ML."
        />
      </Section>

      <Section title="Reviewers">
        <MemberCard
          name="Dr. Komarasamy G"
          role="Reviewer"
          description="Dr. Komarasamy G, Senior Associate Professor at VIT Bhopal, has 16 years of experience, 60+ publications, multiple awards, and expertise in research, teaching, and academic leadership."
        />
        <MemberCard
          name="Mr. Ajeet Singh"
          role="Reviewer"
          description="Mr. Ajeet Singh is a researcher in ML, Cryptology, and Quantum Philosophy, with 21 publications, co-leading an IoT security project funded by IIT Kanpur."
        />
      </Section>

      <Section title="Team Members">
        <MemberCard
          name="Aryan Raj"
          role="AI & ML Enthusiast"
          description="Currently in 3rd year CSE (AI & ML). Passionate about real-world problem-solving through Python, C++, and creative design."
        />
        <MemberCard
          name="Ishaan Mishra"
          role="Web & E-commerce Developer"
          description="Loves web design and creating digital experiences. Strong in C++, Python, and data structures. Passionate about art and trekking."
        />
        <MemberCard
          name="Poorva Verma"
          role="Frontend Developer & Tech Explorer"
          description="Skilled in C++, Python, and Java. Enjoys gardening and reading. Always ready to learn more in the tech world."
        />
        <MemberCard
          name="Dev Rathi"
          role="Full-Stack Developer with a focus on UI/UX"
          description="Full-stack developer with expertise in UI/UX, passionate about astronomy and crafting innovative solutions across various domains."
        />
        <MemberCard
          name="Anushree Kaushik"
          role="Backend Developer"
          description="Focused on scalable web apps and cloud systems. Loves JS, Node.js, REST APIs. Also a fan of sci-fi and classic literature."
        />
        <MemberCard
          name="Ashutosh"
          role="Full Stack Developer"
          description="Expert in MERN stack and frontend frameworks. Enjoys open-source, solving problems, and exploring AI trends."
        />
        <MemberCard
          name="Kumari Vaishnavi"
          role="Backend & ML Developer"
          description="Loves combining full stack with ML. Strong in DSA, problem-solving, and building intelligent apps."
        />
        <MemberCard
          name="Anushka Raj"
          role="Data Science Enthusiast"
          description="Loves pattern recognition, data insights, and solving real-world problems. Great communicator and team player."
        />
        <MemberCard
          name="Apoorv"
          role="AI/ML Developer"
          description="Aspires to be an AI/ML engineer. Loves working with cutting-edge tech and sports. Passionate and goal-driven."
        />
        <MemberCard
          name="Vipul Gupta"
          role="Android Developer"
          description="Specializes in Android and web development. Skilled in Kotlin, Compose UI, and frontend design. Always exploring new tech."
        />
      </Section>
    </div>
  );
};

export default OurTeam;
