import { resumeData } from "@/lib/resume-data"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white px-6">
      
      <div className="max-w-3xl w-full text-center">
        
        <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
          Portfolio
        </p>

        <h1 className="text-5xl font-bold text-white mb-4">
          {resumeData.name}
        </h1>

        <p className="text-xl text-gray-400 mb-8">
          {resumeData.title}
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="#experience"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Download Resume
          </a>
        </div>

      </div>

    </section>
  )
}
