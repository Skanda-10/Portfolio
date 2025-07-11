interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
}

interface TimelineProps {
  experiences: Experience[];
}

const Timeline = ({ experiences }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-start space-x-8">
            {/* Timeline dot */}
            <div className="relative z-10">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-black"></div>
            </div>

            {/* Content */}
            <div className="flex-1 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:bg-gray-800/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <span className="text-blue-400 font-semibold">{exp.year}</span>
              </div>
              <h4 className="text-purple-400 font-semibold mb-3">{exp.company}</h4>
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;