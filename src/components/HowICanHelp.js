import React from 'react';
import {
  FaServer,
  FaCloud,
  FaLock,
  FaCodeBranch,
  FaAws,
} from 'react-icons/fa';
import {
  SiReact,
  SiGraphql,
  SiDocker,
  SiPostgresql,
} from 'react-icons/si';

const techHelp = [
  {
    title: 'Node.js',
    icon: <FaServer className="text-5xl text-green-600" />,
    description: 'I make sure your online tools respond quickly and reliably—no delays, even when things get busy.',
  },
  {
    title: 'React.js',
    icon: <SiReact className="text-5xl text-blue-500" />,
    description: 'I design websites that look great and feel easy to use—on phones, tablets, or computers.',
  },
  {
    title: 'AWS (Cloud Services)',
    icon: <FaAws className="text-5xl text-yellow-500" />,
    description: 'I set up systems on the cloud that are fast, secure, and always available—so your business can grow smoothly.',
  },
  {
    title: 'PostgreSQL (Database)',
    icon: <SiPostgresql className="text-5xl text-blue-700" />,
    description: 'I organize and protect your business data—so it’s always safe and easy to find.',
  },
  {
    title: 'GraphQL',
    icon: <SiGraphql className="text-5xl text-pink-600" />,
    description: 'I help your website get exactly the information it needs—nothing more, nothing less—making it faster and smarter.',
  },
  {
    title: 'Serverless Architecture',
    icon: <FaCloud className="text-5xl text-sky-500" />,
    description: 'I build apps that run without traditional servers—saving you time, money, and effort.',
  },
  {
    title: 'Microservices',
    icon: <FaCodeBranch className="text-5xl text-indigo-600" />,
    description: 'I break down big systems into small parts that work better together—like a team of experts.',
  },
  {
    title: 'Web Speed Optimization',
    icon: <FaServer className="text-5xl text-red-500" />,
    description: 'I make sure your website loads quickly and runs smoothly—so your visitors stay happy.',
  },
  {
    title: 'Mobile-Friendly Design',
    icon: <FaServer className="text-5xl text-purple-600" />,
    description: 'I make sure your website looks perfect and works great on any screen size.',
  },
  {
    title: 'Login Security',
    icon: <FaLock className="text-5xl text-gray-700" />,
    description: 'I protect your website from unwanted access—only the right people get in.',
  },
  {
    title: 'Docker (App Packaging)',
    icon: <SiDocker className="text-5xl text-blue-400" />,
    description: 'I bundle apps so they can run smoothly on any system—just like apps on your phone.',
  },
  {
    title: 'CI/CD (Auto Deployments)',
    icon: <FaCodeBranch className="text-5xl text-green-500" />,
    description: 'I automate the launch of new features—faster updates, fewer bugs, and happier users.',
  },
];

export default function HowICanHelp() {
  return (
    <div className="py-16 px-4 sm:px-8 lg:px-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-6 tracking-tight">
          How I Can Help
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          I help businesses grow online by building fast, secure, and user-friendly websites and apps. Here are the ways I add value:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {techHelp.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 hover:-translate-y-1 transform"
            >
              <div className="flex items-center justify-center mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-center text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
