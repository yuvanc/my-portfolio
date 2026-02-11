import { resumeData } from "@/lib/resume-data"

export default function Education() {
  return (
    <section className="bg-gray-950 py-24 px-6">

      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl font-bold text-white mb-12">
          Education
        </h2>

        <div className="flex flex-col gap-12">
          {resumeData.education.map((edu) => (
            <div
              key={edu.institution}
              className="border-l-2 border-indigo-600 pl-6"
            >

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className="text-lg font-semibold text-white">
                  {edu.institution}
                </h3>
                <span className="text-sm text-gray-500">
                  {edu.date}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <p className="text-indigo-400 font-medium">
                  {edu.degree}
                </p>
                <span className="text-sm text-gray-500">
                  {edu.location}
                </span>
              </div>

              <ul className="flex flex-col gap-2">
                {edu.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="text-gray-400 text-sm leading-relaxed flex gap-2"
                  >
                    <span className="text-indigo-600 mt-1 shrink-0">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>

    </section>
  )
}