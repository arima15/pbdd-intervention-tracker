let interventions = [
    {beneficiary_name: "Drew", beneficiary_type: "ARB", intervention_type: "Health Checkup", date: "2026-01-15", status: "pending"},
    {beneficiary_name: "Sarah", beneficiary_type: "ARB", intervention_type: "Livelihood Training", date: "2026-02-20", status: "completed"},
    {beneficiary_name: "John", beneficiary_type: "ARBO", intervention_type: "Social Pension", date: "2026-03-10", status: "ongoing"}
];

function render(records) {
    const list = document.getElementById('list');
    const summary = document.getElementById('summary');
    list.replaceChildren();
    summary.replaceChildren();

    records.forEach((intervention) => {
        const row = document.createElement('li');
        row.className = 'list-group-item';
        const details = document.createElement('div');
        details.className = 'row g-2';

        [
            ['Beneficiary', intervention.beneficiary_name],
            ['Intervention', intervention.intervention_type],
            ['Type', intervention.beneficiary_type],
            ['Date', intervention.date],
            ['Status', intervention.status]
        ].forEach(([label, value]) => {
            const detail = document.createElement('div');
            detail.className = 'col-12 col-md-6 text-break';
            const strong = document.createElement('strong');
            strong.textContent = `${label}: `;
            detail.append(strong, document.createTextNode(value));
            details.appendChild(detail);
        });

        row.appendChild(details);
        list.appendChild(row);
    });

    const statusCounts = records.reduce((counts, intervention) => {
        counts[intervention.status] = (counts[intervention.status] || 0) + 1;
        return counts;
    }, {});
    const summaryBlock = document.createElement('div');
    summaryBlock.className = 'alert alert-primary mb-0';

    const total = document.createElement('p');
    total.className = 'fw-semibold mb-2';
    total.textContent = `Total interventions: ${records.length}`;
    summaryBlock.appendChild(total);

    const statuses = Object.entries(statusCounts);
    if (statuses.length === 0) {
        const emptyStatus = document.createElement('p');
        emptyStatus.className = 'mb-0';
        emptyStatus.textContent = 'No status counts';
        summaryBlock.appendChild(emptyStatus);
    } else {
        statuses.forEach(([status, count]) => {
            const statusLine = document.createElement('p');
            statusLine.className = 'mb-1 text-break';
            statusLine.textContent = `${status}: ${count}`;
            summaryBlock.appendChild(statusLine);
        });
    }

    summary.appendChild(summaryBlock);
}

render(interventions);

// Template literal to display interventions
interventions.forEach((intervention) => {
    console.log(`Beneficiary: ${intervention.beneficiary_name} | Type: ${intervention.beneficiary_type} | Intervention: ${intervention.intervention_type} | Date: ${intervention.date} | Status: ${intervention.status}`);
});

console.log('\n--- Summary ---');
console.log(`Total count: ${interventions.length}`);
const statusCounts = interventions.reduce((counts, intervention) => {
    counts[intervention.status] = (counts[intervention.status] || 0) + 1;
    return counts;
}, {});
Object.entries(statusCounts).forEach(([status, count]) => {
    console.log(`${status}: ${count}`);
});