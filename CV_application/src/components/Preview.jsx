export default function Preview({
  generalInfo,
  experienceInfo,
  educationInfo,
}) {
  return (
    <>
      <header className="bg-slate-800 px-4 py-4 sm:px-8 sm:py-7 text-white">
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight break-words">
          {generalInfo.fullName}
        </h1>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-200">
          <p>{generalInfo.email}</p>
          <p>{generalInfo.phoneNumber}</p>
        </div>
      </header>

      {experienceInfo.length > 0 && (
        <section className="px-4 py-3 sm:px-8 sm:py-4">
          <h2 className="mb-4 border-b border-slate-300 pb-1 text-xl font-bold uppercase tracking-wide text-slate-800">
            Experience
          </h2>

          {experienceInfo.map((exp, index) => (
            <div key={index} className="flex-col justify-between">
              <h2 className="font-bold text-lg">{exp.companyName}</h2>
              <div className="flex flex-wrap gap-x-2 gap-y-1 mb-1">
                <h3 className="">{exp.positionTitle} |</h3>
                <span className="">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <p className="mb-2 break-words">{exp.description}</p>
              <hr></hr>
            </div>
          ))}
        </section>
      )}

      {educationInfo.length > 0 && (
        <section className="px-4 py-3 sm:px-8 sm:py-4">
          <h2 className="mb-4 border-b border-slate-300 pb-1 text-xl font-bold uppercase tracking-wide text-slate-800">
            Education
          </h2>

          {educationInfo.map((edu, index) => (
            <div key={index} className="flex-col justify-between">
              <h2 className="font-bold text-lg">{edu.degree}</h2>
              <div className="flex flex-wrap gap-x-2 gap-y-1 mb-1">
                <h3>{edu.school} |</h3>
                <span>
                  {edu.startDate} - {edu.endDate}
                </span>
              </div>
              <hr></hr>
            </div>
          ))}
        </section>
      )}
    </>
  );
}
