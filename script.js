let interventions = [
    {beneficiary_name: "Drew", beneficiary_type: "ARB", intervention_type: "Health Checkup", date: "2026-01-15", status: "pending"},
    {beneficiary_name: "Sarah", beneficiary_type: "ARB", intervention_type: "Livelihood Training", date: "2026-02-20", status: "completed"},
    {beneficiary_name: "John", beneficiary_type: "ARBO", intervention_type: "Social Pension", date: "2026-03-10", status: "ongoing"}
];

// Template literal to display interventions
interventions.forEach((intervention) => {
    console.log(`Beneficiary: ${intervention.beneficiary_name} | Type: ${intervention.beneficiary_type} | Intervention: ${intervention.intervention_type} | Date: ${intervention.date} | Status: ${intervention.status}`);
});