import { resumeData } from "@/lib/resume-data"

export default function Extracurriculars() {
  return (
    <section className="bg-gray-900 py-24 px-6">

      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl font-bold text-white mb-12">
          Extracurriculars
        </h2>

        <ul className="flex flex-col gap-4">
          {resumeData.extracurriculars.map((item, index) => (
            <li
              key={index}
              className="text-gray-400 text-sm leading-relaxed flex gap-3"
            >
              <span className="text-indigo-600 mt-1 shrink-0">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

      </div>

    </section>
  )
}