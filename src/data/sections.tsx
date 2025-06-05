import { motion } from 'framer-motion';
import { Project } from '../components/Project';

const projects = [
  {
    title: "",
    description: "",
    tech: [
      { name: "TypeScript", color: "blue" },
      { name: "React", color: "cyan" },
      { name: "Next.js", color: "neutral" },
      { name: "Node.js", color: "green" },
      { name: "Express.js", color: "amber" },
      { name: "AWS", color: "orange" }
    ],
    link: "",
    previewImage: ""
  },
  {
    title: "",
    description: "",
    tech: [
      { name: "React", color: "cyan" },
      { name: "JavaScript", color: "yellow" },
      { name: "Node.js", color: "green" },
      { name: "Supabase", color: "emerald" }
    ],
    link: "",
    previewImage: ""
  },
  {
    title: "",
    description: "",
    tech: [
      { name: "React", color: "cyan" },
      { name: "Spotify API", color: "emerald" },
      { name: "JavaScript", color: "yellow" },
      { name: "Node.js", color: "green" },
    ],
    link: "",
    previewImage: ""
  }
];

export const sections = [
    {
      title: "Timeline",
      content: (
        <div className="space-y-4 mb-8">
          {[
            {
              company: "Jelle",
              date: "2025 - Now",
              title: "IT Support Engineer",
              description: ["working on automating systems"],
              dotColor: "bg-blue-500"
            },
            {
              company: "Hogeschool van Amsterdam",
              date: "2022 - 2024",
              title: "A.D Cybersecurity",
              description: ["got my degree to make my parents proud"],
              dotColor: "bg-amber-300"
            },
            {
              company: "Techone",
              date: "2023 - 2024",
              title: "Internship",
              description: ["workplace tech guy"],
              dotColor: "bg-green-500"
            },
          ].map((item) => (
            <div key={item.company + item.date} className="relative">
              <div 
                className={`absolute -left-[17px] top-2 w-[9px] h-[9px] rounded-full ${item.dotColor} ring-4 ring-white dark:ring-gray-900`}
              />
              <motion.div
                className="group py-1 transition-colors"
                whileHover={{ scale: 1.05 }}
                style={{ transformOrigin: 'left' }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <p className="font-medium">{item.company}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">{item.date}</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">{item.title}</p>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                  {item.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Projects",
      content: (
        <div className="space-y-4">
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      )
    },
    {
      title: "Hobbies",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[
            {
              title: "Youtube",
              description: "I haven't uploaded since 04 but hey.",
              stats: "18 videos",
              color: "green"
            },
            {
              title: "Sleeping",
              description: "Me and the bed are one.",
              stats: "Hibernator",
              color: "blue"
            },
            {
              title: "Stocks and Crypto",
              description: "Buying high and selling low is my philosophy, yeah that's what she said.",
              stats: "no profit here :(",
              color: "rose"
            },
            {
              title: "Mechanical Keyboards",
              description: "Why they gotta be so expensive?!",
              stats: "2 custom keyboards",
              color: "purple"
            },
          ].map((hobby) => (
            <motion.div
              key={hobby.title}
              className="group py-1 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <div>
                <h3 className={`font-medium`}>
                  {hobby.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {hobby.description}
                </p>
                <p className={`text-xs text-${hobby.color}-500 dark:text-${hobby.color}-500 mt-2 font-medium`}>
                  {hobby.stats}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )
    }
  ]