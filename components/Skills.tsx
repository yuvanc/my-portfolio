import { resumeData } from "@/lib/resume-data"

export default function Skills() {
  const { languages, databases, software } = resumeData.skills

  const categories = [
    { label: "Languages & Frameworks", items: languages },
    { label: "Databases & Cloud", items: databases },
    { label: "Software & Tools", items: software },
  ]

  return (
    <section className="bg-gray-900 py-24 px-6">

      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl font-bold text-white mb-12">
          Skills
        </h2>

        <div className="flex flex-col gap-10">
          {categories.map((category) => (
            <div key={category.label}>

              <h3 className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
                {category.label}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  )
}