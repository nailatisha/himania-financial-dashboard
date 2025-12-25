import { IncomeEntry, ExpenseEntry, BudgetAllocation, CashFlowSummary } from './types';

// Income data
export const incomeData: IncomeEntry[] = [
  { date: '2024-01-15', sourceOfIncome: 'Sponsorship', description: 'Sponsorship from Company XYZ for PRN Festival', amount: 5000000, programDivision: 'PRN Festival' },
  { date: '2024-01-20', sourceOfIncome: 'Collaboration Cost', description: 'Collaboration fee from partner for Level Up! x HIPPO', amount: 2500000, programDivision: 'Level Up! x HIPPO' },
  { date: '2024-02-01', sourceOfIncome: 'Creative Income', description: 'Creative services revenue for BRAND campaign', amount: 3500000, programDivision: 'BRAND' },
  { date: '2024-02-10', sourceOfIncome: 'Sponsorship', description: 'Sponsorship from ABC Corp for Inside Insight', amount: 3000000, programDivision: 'Inside Insight' },
  { date: '2024-02-15', sourceOfIncome: 'Investment', description: 'Investment return from previous period', amount: 2000000, programDivision: 'General' },
  { date: '2024-03-01', sourceOfIncome: 'Collaboration Cost', description: 'Collaboration fee for PRN Bazaar', amount: 1500000, programDivision: 'PRN Bazaar' },
  { date: '2024-03-10', sourceOfIncome: 'Sponsorship', description: 'Gold sponsor for PRN Festival', amount: 10000000, programDivision: 'PRN Festival' },
  { date: '2024-03-15', sourceOfIncome: 'Creative Income', description: 'Creative income from HIHI project', amount: 4000000, programDivision: 'HIHI' },
  { date: '2024-03-20', sourceOfIncome: 'Sponsorship', description: 'Sponsorship for PERMADANI event', amount: 1000000, programDivision: 'PERMADANI' },
  { date: '2024-04-01', sourceOfIncome: 'Collaboration Cost', description: 'Silver collaboration for Level Up! x HIPPO', amount: 5000000, programDivision: 'Level Up! x HIPPO' },
  { date: '2024-04-10', sourceOfIncome: 'Creative Income', description: 'Creative services for BRAND campaign', amount: 6000000, programDivision: 'BRAND' },
  { date: '2024-04-15', sourceOfIncome: 'Investment', description: 'Investment income from savings', amount: 2000000, programDivision: 'General' },
  { date: '2024-04-20', sourceOfIncome: 'Sponsorship', description: 'Sponsorship for Inside Insight', amount: 2500000, programDivision: 'Inside Insight' },
  { date: '2024-05-01', sourceOfIncome: 'Collaboration Cost', description: 'Collaboration fee for PRN Festival', amount: 15000000, programDivision: 'PRN Festival' },
  { date: '2024-05-10', sourceOfIncome: 'Creative Income', description: 'Creative income from HIHI project', amount: 2000000, programDivision: 'HIHI' },
  { date: '2024-05-15', sourceOfIncome: 'Sponsorship', description: 'Sponsorship for PRN Bazaar', amount: 3000000, programDivision: 'PRN Bazaar' },
  { date: '2024-05-20', sourceOfIncome: 'Investment', description: 'Investment return', amount: 1500000, programDivision: 'General' },
];

// Expense data
export const expenseData: ExpenseEntry[] = [
  { date: '2024-01-20', expenseCategory: 'Venue', description: 'Venue rental for PRN Festival', amount: 3000000, programDivision: 'PRN Festival' },
  { date: '2024-01-25', expenseCategory: 'Consumption', description: 'Food and beverages for board meeting', amount: 500000, programDivision: 'General' },
  { date: '2024-02-01', expenseCategory: 'Logistics', description: 'Event materials and decorations for Level Up! x HIPPO', amount: 1500000, programDivision: 'Level Up! x HIPPO' },
  { date: '2024-02-05', expenseCategory: 'Speaker Fee', description: 'Keynote speaker honorarium for Inside Insight', amount: 2000000, programDivision: 'Inside Insight' },
  { date: '2024-02-10', expenseCategory: 'Publication', description: 'Design and printing for BRAND campaign', amount: 800000, programDivision: 'BRAND' },
  { date: '2024-02-15', expenseCategory: 'Equipment', description: 'AV equipment rental for HIHI', amount: 1200000, programDivision: 'HIHI' },
  { date: '2024-02-20', expenseCategory: 'Consumption', description: 'Catering for PRN Bazaar (50 pax)', amount: 2500000, programDivision: 'PRN Bazaar' },
  { date: '2024-03-01', expenseCategory: 'Logistics', description: 'Transportation for PRN Festival setup', amount: 600000, programDivision: 'PRN Festival' },
  { date: '2024-03-05', expenseCategory: 'Publication', description: 'Social media advertising for BRAND', amount: 1500000, programDivision: 'BRAND' },
  { date: '2024-03-10', expenseCategory: 'Speaker Fee', description: 'Guest speaker honorarium for Inside Insight', amount: 1500000, programDivision: 'Inside Insight' },
  { date: '2024-03-15', expenseCategory: 'Venue', description: 'Venue rental for PERMADANI event', amount: 2000000, programDivision: 'PERMADANI' },
  { date: '2024-03-20', expenseCategory: 'Consumption', description: 'Refreshments for Level Up! x HIPPO', amount: 800000, programDivision: 'Level Up! x HIPPO' },
  { date: '2024-04-01', expenseCategory: 'Equipment', description: 'Photography and videography for PRN Festival', amount: 3000000, programDivision: 'PRN Festival' },
  { date: '2024-04-05', expenseCategory: 'Logistics', description: 'PRN Festival stage and sound system', amount: 4000000, programDivision: 'PRN Festival' },
  { date: '2024-04-10', expenseCategory: 'Consumption', description: 'Gala dinner for PRN Festival (200 pax)', amount: 8000000, programDivision: 'PRN Festival' },
  { date: '2024-04-15', expenseCategory: 'Publication', description: 'Event brochure for PRN Festival', amount: 1200000, programDivision: 'PRN Festival' },
  { date: '2024-04-20', expenseCategory: 'Speaker Fee', description: 'Multiple speaker honorariums for PRN Festival', amount: 5000000, programDivision: 'PRN Festival' },
  { date: '2024-05-01', expenseCategory: 'Equipment', description: 'Equipment rental for PRN Bazaar', amount: 2500000, programDivision: 'PRN Bazaar' },
  { date: '2024-05-05', expenseCategory: 'Consumption', description: 'PRN Bazaar refreshments', amount: 1500000, programDivision: 'PRN Bazaar' },
  { date: '2024-05-10', expenseCategory: 'Logistics', description: 'General office supplies', amount: 500000, programDivision: 'General' },
  { date: '2024-05-15', expenseCategory: 'Publication', description: 'Design materials for HIHI', amount: 1800000, programDivision: 'HIHI' },
  { date: '2024-05-20', expenseCategory: 'Venue', description: 'Venue rental for BRAND event', amount: 2200000, programDivision: 'BRAND' },
  { date: '2024-05-25', expenseCategory: 'Equipment', description: 'Photography equipment for BRAND campaign', amount: 2500000, programDivision: 'BRAND' },
  { date: '2024-05-28', expenseCategory: 'Logistics', description: 'Event setup and logistics for BRAND', amount: 1800000, programDivision: 'BRAND' },
  { date: '2024-06-01', expenseCategory: 'Consumption', description: 'Catering for BRAND launch event', amount: 3200000, programDivision: 'BRAND' },
  { date: '2024-06-05', expenseCategory: 'Speaker Fee', description: 'Keynote speaker for BRAND event', amount: 2800000, programDivision: 'BRAND' },
];

// Budget allocation data
export const budgetData: BudgetAllocation[] = [
  { programDivision: 'Level Up! x HIPPO', approvedBudget: 25000000, usedBudget: 2300000, remainingBudget: 22700000 },
  { programDivision: 'BRAND', approvedBudget: 18000000, usedBudget: 10800000, remainingBudget: 7200000 },
  { programDivision: 'Inside Insight', approvedBudget: 15000000, usedBudget: 3500000, remainingBudget: 11500000 },
  { programDivision: 'PRN Bazaar', approvedBudget: 20000000, usedBudget: 6500000, remainingBudget: 13500000 },
  { programDivision: 'PRN Festival', approvedBudget: 50000000, usedBudget: 25800000, remainingBudget: 24200000 },
  { programDivision: 'HIHI', approvedBudget: 12000000, usedBudget: 3000000, remainingBudget: 9000000 },
  { programDivision: 'PERMADANI', approvedBudget: 8000000, usedBudget: 2000000, remainingBudget: 6000000 },
];

// Cash flow summary data
export const cashFlowData: CashFlowSummary[] = [
  { month: '2024-01', totalIncome: 7500000, totalExpense: 3500000, endingBalance: 4000000 },
  { month: '2024-02', totalIncome: 8500000, totalExpense: 8000000, endingBalance: 4500000 },
  { month: '2024-03', totalIncome: 16500000, totalExpense: 6400000, endingBalance: 14600000 },
  { month: '2024-04', totalIncome: 15500000, totalExpense: 21200000, endingBalance: 8900000 },
  { month: '2024-05', totalIncome: 21500000, totalExpense: 8500000, endingBalance: 21900000 },
];

