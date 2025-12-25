import { NextResponse } from 'next/server';

// Force dynamic rendering - don't pre-render at build time
// These configs prevent Next.js from evaluating this route during build
export const dynamic = 'force-dynamic';
export const dynamicParams = true;
export const revalidate = 0;
export const fetchCache = 'force-no-store';
export const runtime = 'nodejs';
export const preferredRegion = 'auto';

// Lazy load data function to prevent build-time evaluation
async function getFinancialData() {
  const { 
    incomeData, 
    expenseData, 
    budgetData, 
    cashFlowData 
  } = await import('@/lib/dummy-data');
  
  return {
    income: incomeData,
    expenses: expenseData,
    budget: budgetData,
    cashFlow: cashFlowData,
  };
}

export async function GET() {
  // Early return during build phase to prevent evaluation
  if (process.env.NEXT_PHASE === 'phase-production-build' || 
      process.env.NEXT_PHASE === 'phase-development-build' ||
      process.env.NODE_ENV === 'production' && !process.env.VERCEL && !process.env.NETLIFY) {
    return NextResponse.json({
      income: [],
      expenses: [],
      budget: [],
      cashFlow: [],
      summary: { totalIncome: 0, totalExpenses: 0, currentBalance: 0 },
    });
  }

  try {
    // Lazy load data only at runtime
    const { income, expenses, budget, cashFlow } = await getFinancialData();

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
    // During build, return empty data instead of error
    if (process.env.NEXT_PHASE === 'phase-production-build' || 
        process.env.NEXT_PHASE === 'phase-development-build') {
      return NextResponse.json({
        income: [],
        expenses: [],
        budget: [],
        cashFlow: [],
        summary: { totalIncome: 0, totalExpenses: 0, currentBalance: 0 },
      });
    }
    
    console.error('Error fetching financial data:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch financial data', 
        details: `Error loading data: ${errorMessage}`,
        technicalError: errorMessage
      },
      { status: 500 }
    );
  }
}
