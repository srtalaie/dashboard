import { v4 as uuidv4 } from "uuid"

export const departments = [
	{
		id: uuidv4(),
		name: "Human Resources (HR)",
		budgetBreakdown: [
			{ name: "Salaries & Benefits", amount: 500000 },
			{ name: "Recruitment & Training", amount: 50000 },
			{ name: "Employee Wellness", amount: 20000 },
			{ name: "Miscellaneous", amount: 10000 },
		],
		total: 580000,
	},
	{
		id: uuidv4(),
		name: "Finances & Accounting",
		budgetBreakdown: [
			{ name: "Salaries & Benefits", amount: 400000 },
			{ name: "Software & Tools", amount: 30000 },
			{ name: "Compliance & Audits", amount: 50000 },
			{ name: "Miscellaneous", amount: 10000 },
		],
		total: 490000,
	},
	{
		id: uuidv4(),
		name: "Marketing & Advertising",
		budgetBreakdown: [
			{ name: "Salaries & Benefits", amount: 600000 },
			{ name: "Digital Marketing", amount: 200000 },
			{ name: "Events & Promotions", amount: 100000 },
			{ name: "Miscellaneous", amount: 20000 },
		],
		total: 920000,
	},
	{
		id: uuidv4(),
		name: "Sales",
		budgetBreakdown: [
			{ name: "Salaries & Comission", amount: 700000 },
			{ name: "Travel & Client Entertainment", amount: 150000 },
			{ name: "Software & CRM", amount: 80000 },
			{ name: "Miscellaneous", amount: 20000 },
		],
		total: 950000,
	},
	{
		id: uuidv4(),
		name: "Research & Development (R&D)",
		budgetBreakdown: [
			{ name: "Salaries & Benefits", amount: 800000 },
			{ name: "Equipment & Software", amount: 300000 },
			{ name: "Prototyping & Testing", amount: 150000 },
			{ name: "Miscellaneous", amount: 50000 },
		],
		total: 1300000,
	},
	{
		id: uuidv4(),
		name: "IT & Infrastructure",
		budgetBreakdown: [
			{ name: "Salaries & Benefits", amount: 600000 },
			{ name: "Hardware & Software", amount: 250000 },
			{ name: "Security & Maintenance", amount: 100000 },
			{ name: "Miscellaneous", amount: 30000 },
		],
		total: 980000,
	},
	{
		id: uuidv4(),
		name: "Operations & Supply Chain",
		budgetBreakdown: [
			{ name: "Salaries & Benefits", amount: 500000 },
			{ name: "Logistics & Distribution", amount: 700000 },
			{ name: "Warehousing & Inventory", amount: 300000 },
			{ name: "Miscellaneous", amount: 50000 },
		],
		total: 1550000,
	},
	{
		id: uuidv4(),
		name: "Customer Support",
		budgetBreakdown: [
			{ name: "Salaries & Benefits", amount: 450000 },
			{ name: "Training & Development", amount: 40000 },
			{ name: "Support Tools & Software", amount: 60000 },
			{ name: "Miscellaneous", amount: 20000 },
		],
		total: 570000,
	},
	{
		id: uuidv4(),
		name: "Legal & Compliance",
		budgetBreakdown: [
			{ name: "Salaries & Benefits", amount: 350000 },
			{ name: "Legal Fees & Consultations", amount: 200000 },
			{ name: "Compliance & Risk Management", amount: 100000 },
			{ name: "Miscellaneous", amount: 30000 },
		],
		total: 680000,
	},
	{
		id: uuidv4(),
		name: "General & Administrative (G&A)",
		budgetBreakdown: [
			{ name: "Office Rent & Utilities", amount: 400000 },
			{ name: "Office Supplies & Equipment", amount: 50000 },
			{ name: "Insurance & Miscellaneous", amount: 70000 },
		],
		total: 520000,
	},
]
