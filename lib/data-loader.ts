import { IncomeEntry, ExpenseEntry, BudgetAllocation, CashFlowSummary } from './types';
import fs from 'fs';
import path from 'path';

/**
 * Safely read CSV file - returns empty array if file doesn't exist (e.g., during build)
 */
function readCSVFileSafely(filename: string): string[][] {
  try {
    const filePath = path.join(process.cwd(), 'dummy-data', filename);
    
    // During build time, files might not exist - return empty array
    if (typeof window === 'undefined' && !fs.existsSync(filePath)) {
      // Only log in development, not in production builds
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`CSV file not found during build: ${filePath} - this is OK for build time`);
      }
      return [];
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return parseCSV(fileContent);
  } catch (error) {
    // Silently return empty array during build - errors are expected
    if (process.env.NODE_ENV === 'production' && process.env.NEXT_PHASE === 'phase-production-build') {
      return [];
    }
    console.error(`Error reading CSV file ${filename}:`, error);
    return [];
  }
}

/**
 * Parse CSV content
 */
function parseCSV(csvContent: string): string[][] {
  if (!csvContent || csvContent.trim() === '') return [];
  
  const lines = csvContent.split('\n').filter(line => line.trim() !== '');
  return lines.map(line => {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        result.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    result.push(current.trim());
    
    return result;
  });
}

/**
 * Fetch income data from CSV
 */
export function fetchIncomeDataFromCSV(): IncomeEntry[] {
  try {
    const rows = readCSVFileSafely('income.csv');
    if (rows.length === 0) return [];
    
    const headers = rows[0].map(h => h.trim());
    const dataRows = rows.slice(1);
    
    return dataRows
      .map(row => {
        while (row.length < headers.length) {
          row.push('');
        }
        
        const getValue = (colName: string) => {
          const index = headers.indexOf(colName);
          return index >= 0 ? row[index]?.trim() : '';
        };

        const date = getValue('Date');
        const amount = getValue('Amount (IDR)');
        
        if (!date || !amount) return null;

        return {
          date,
          sourceOfIncome: getValue('Source of Income'),
          description: getValue('Description'),
          amount: parseFloat(amount.replace(/[^\d.-]/g, '')) || 0,
          programDivision: getValue('Program / Division'),
        };
      })
      .filter((item): item is IncomeEntry => item !== null);
  } catch (error) {
    return [];
  }
}

/**
 * Fetch expense data from CSV
 */
export function fetchExpenseDataFromCSV(): ExpenseEntry[] {
  try {
    const rows = readCSVFileSafely('expenses.csv');
    if (rows.length === 0) return [];
    
    const headers = rows[0].map(h => h.trim());
    const dataRows = rows.slice(1);
    
    return dataRows
      .map(row => {
        while (row.length < headers.length) {
          row.push('');
        }
        
        const getValue = (colName: string) => {
          const index = headers.indexOf(colName);
          return index >= 0 ? row[index]?.trim() : '';
        };

        const date = getValue('Date');
        const amount = getValue('Amount (IDR)');
        
        if (!date || !amount) return null;

        return {
          date,
          expenseCategory: getValue('Expense Category'),
          description: getValue('Description'),
          amount: parseFloat(amount.replace(/[^\d.-]/g, '')) || 0,
          programDivision: getValue('Program / Division'),
        };
      })
      .filter((item): item is ExpenseEntry => item !== null);
  } catch (error) {
    return [];
  }
}

/**
 * Fetch budget allocation data from CSV
 */
export function fetchBudgetDataFromCSV(): BudgetAllocation[] {
  try {
    const rows = readCSVFileSafely('budget-allocation.csv');
    if (rows.length === 0) return [];
    
    const headers = rows[0].map(h => h.trim());
    const dataRows = rows.slice(1);
    
    return dataRows
      .map(row => {
        while (row.length < headers.length) {
          row.push('');
        }
        
        const getValue = (colName: string) => {
          const index = headers.indexOf(colName);
          return index >= 0 ? row[index]?.trim() : '';
        };

        const programDivision = getValue('Program / Division');
        const approved = getValue('Approved Budget (IDR)');
        
        if (!programDivision || !approved) return null;

        const approvedBudget = parseFloat(approved.replace(/[^\d.-]/g, '')) || 0;
        const usedBudget = parseFloat(getValue('Used Budget (IDR)').replace(/[^\d.-]/g, '')) || 0;
        const remainingBudget = parseFloat(getValue('Remaining Budget (IDR)').replace(/[^\d.-]/g, '')) || 0;

        return {
          programDivision,
          approvedBudget,
          usedBudget,
          remainingBudget,
        };
      })
      .filter((item): item is BudgetAllocation => item !== null);
  } catch (error) {
    return [];
  }
}

/**
 * Fetch cash flow summary data from CSV
 */
export function fetchCashFlowDataFromCSV(): CashFlowSummary[] {
  try {
    const rows = readCSVFileSafely('cash-flow-summary.csv');
    if (rows.length === 0) return [];
    
    const headers = rows[0].map(h => h.trim());
    const dataRows = rows.slice(1);
    
    return dataRows
      .map(row => {
        while (row.length < headers.length) {
          row.push('');
        }
        
        const getValue = (colName: string) => {
          const index = headers.indexOf(colName);
          return index >= 0 ? row[index]?.trim() : '';
        };

        const month = getValue('Month');
        if (!month) return null;

        return {
          month,
          totalIncome: parseFloat(getValue('Total Income').replace(/[^\d.-]/g, '')) || 0,
          totalExpense: parseFloat(getValue('Total Expense').replace(/[^\d.-]/g, '')) || 0,
          endingBalance: parseFloat(getValue('Ending Balance').replace(/[^\d.-]/g, '')) || 0,
        };
      })
      .filter((item): item is CashFlowSummary => item !== null);
  } catch (error) {
    return [];
  }
}

