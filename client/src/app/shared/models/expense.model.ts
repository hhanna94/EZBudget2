export interface Expense {
  expenseId: number;
  description: string;
  date: Date;
  amount: number;
  userId: number;
  category: string;
}
