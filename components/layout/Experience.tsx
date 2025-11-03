export default function Experience() {
  const experienceList = [
    {
      role: "Information Technology Analyst",
      company: "MCI Career Services Pte. Ltd.",
      period: "Dec 2023 - July 2025",
    },
    {
      role: "Outreach Collaboration Intern",
      company: "Salesforce.com Singapore Pte. Ltd.",
      period: "Mar 2022 - Sep 2022",
    },
  ];

  return (
    <section id="experience">
      <h2 className="text-sm text-secondary font-black">Work Experience</h2>
      <div className="mt-4 space-y-4">
        {experienceList.map(({ role, company, period }) => (
          <div key={role}>
            <h3 className="font-bold">{role}</h3>
            <p>{company}</p>
            <p className="text-muted-foreground">{period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
