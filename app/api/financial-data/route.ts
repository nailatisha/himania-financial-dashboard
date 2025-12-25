import { NextResponse } from 'next/server';

// Force dynamic rendering - don't pre-render at build time
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export async function GET() {
  try {
    // Dynamic import to avoid evaluation during build
    const { 
      incomeData, 
      expenseData, 
      budgetData, 
      cashFlowData 
    } = await import('@/lib/dummy-data');
    
    // Use static data - no file system access needed
    const income = incomeData;
    const expenses = expenseData;
    const budget = budgetData;
    const cashFlow = cashFlowData;

    const totalIncome = income.reduce((sum, entry) => sum + entry.amount, 0);
    const totalExpenses = expenses.reduce((sum, entry) => sum + entry.amount, 0);
    const currentBalance = totalIncome - totalExpenses;

    return NextResponse.json({
      income,
      expenses,
      budget,
      cashFlow,
      summary: {
        totalIncome,
        totalExpenses,
        currentBalance,
      },
    });
  } catch (error) {
    console.error('Error fetching financial data from CSV:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch financial data', 
        details: `Error reading CSV files: ${errorMessage}\n\nMake sure CSV files exist in the dummy-data folder.`,
        technicalError: errorMessage
      },
      { status: 500 }
    );
  }
}
