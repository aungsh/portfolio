export default function Education() {
  const educationList = [
    {
      degree:
        "Bachelor of Engineering in Information & Communications Technology (Software Engineering)",
      institution: "Singapore Institute of Technology",
      period: "2025 - Present",
    },
    {
      degree: "Diploma in Information Technology",
      institution: "Ngee Ann Polytechnic",
      period: "2020 - 2023",
    },
  ];

  return (
    <section id="education">
      <h2 className="text-sm text-secondary font-black">Education</h2>
      <div className="mt-4 space-y-4">
        {educationList.map(({ degree, institution, period }) => (
          <div key={degree}>
            <h3 className="font-bold">{degree}</h3>
            <p>{institution}</p>
            <p className="text-muted-foreground">{period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
