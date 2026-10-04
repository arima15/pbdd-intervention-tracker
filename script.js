let interventions = [
    {beneficiary_name: "Drew", beneficiary_type: "ARB", intervention_type: "Health Checkup", date: "2026-01-15", status: "pending"},
    {beneficiary_name: "Sarah", beneficiary_type: "ARB", intervention_type: "Livelihood Training", date: "2026-02-20", status: "completed"},
    {beneficiary_name: "John", beneficiary_type: "ARBO", intervention_type: "Social Pension", date: "2026-03-10", status: "ongoing"}
];

// Template literal to display interventions
interventions.forEach((intervention) => {
    console.log(`Beneficiary: ${intervention.beneficiary_name} | Type: ${intervention.beneficiary_type} | Intervention: ${intervention.intervention_type} | Date: ${intervention.date} | Status: ${intervention.status}`);
});

function countByStatus(records, status) {
    let matchCounter = 0;

    for(let i = 0; i < records.length; i++) {
        if (records[i].status == status) {
            matchCounter++;
        }
    }

    return matchCounter;
}

function countByType(records, type){
    let matchCounter = 0;

    for(let i = 0; i < records.length; i++) {
        if(records[i].intervention_type == type) {
            matchCounter++;
        }
    }

    return matchCounter;
}

const totalCount = interventions.length;
const statusCounts = {
    pending: countByStatus(interventions, 'pending'),
    completed: countByStatus(interventions, 'completed'),
    ongoing: countByStatus(interventions, 'ongoing')
};
const typeCounts = {
    'Health Checkup': countByType(interventions, 'Health Checkup'),
    'Livelihood Training': countByType(interventions, 'Livelihood Training'),
    'Social Pension': countByType(interventions, 'Social Pension')
};

console.log('\n--- Summary ---');
console.log(`Total count: ${totalCount}`);
console.log(`Status counts: pending=${statusCounts.pending}, completed=${statusCounts.completed}, ongoing=${statusCounts.ongoing}`);
console.log(`Type counts: Health Checkup=${typeCounts['Health Checkup']}, Livelihood Training=${typeCounts['Livelihood Training']}, Social Pension=${typeCounts['Social Pension']}`);