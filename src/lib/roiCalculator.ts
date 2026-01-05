export interface ROIInputs {
  hoursPerWeekOnManualTasks: number;
  hourlyRate: number;
  numberOfEmployees: number;
  estimatedAutomationPercentage?: number; // Default 40%
}

export interface ROIResults {
  weeklyHoursSaved: number;
  monthlyHoursSaved: number;
  yearlyHoursSaved: number;
  weeklySavings: number;
  monthlySavings: number;
  yearlySavings: number;
  bootcampROI: number; // How many times the bootcamp pays for itself
  paybackDays: number;
}

const BOOTCAMP_PRICE = 5000;
const DEFAULT_AUTOMATION_PERCENTAGE = 0.40; // 40% of tasks can be automated
const WEEKS_PER_MONTH = 4.33;
const WEEKS_PER_YEAR = 52;

export function calculateROI(inputs: ROIInputs): ROIResults {
  const automationRate = inputs.estimatedAutomationPercentage
    ? inputs.estimatedAutomationPercentage / 100
    : DEFAULT_AUTOMATION_PERCENTAGE;

  // Calculate hours saved per employee
  const hoursPerEmployeePerWeek = inputs.hoursPerWeekOnManualTasks * automationRate;

  // Total hours saved across all employees
  const weeklyHoursSaved = hoursPerEmployeePerWeek * inputs.numberOfEmployees;
  const monthlyHoursSaved = weeklyHoursSaved * WEEKS_PER_MONTH;
  const yearlyHoursSaved = weeklyHoursSaved * WEEKS_PER_YEAR;

  // Calculate monetary savings
  const weeklySavings = weeklyHoursSaved * inputs.hourlyRate;
  const monthlySavings = monthlyHoursSaved * inputs.hourlyRate;
  const yearlySavings = yearlyHoursSaved * inputs.hourlyRate;

  // Calculate ROI relative to bootcamp price
  const bootcampROI = yearlySavings / BOOTCAMP_PRICE;

  // Calculate payback period in days
  const dailySavings = weeklySavings / 7;
  const paybackDays = dailySavings > 0 ? Math.ceil(BOOTCAMP_PRICE / dailySavings) : 999;

  return {
    weeklyHoursSaved: Math.round(weeklyHoursSaved * 10) / 10,
    monthlyHoursSaved: Math.round(monthlyHoursSaved * 10) / 10,
    yearlyHoursSaved: Math.round(yearlyHoursSaved),
    weeklySavings: Math.round(weeklySavings),
    monthlySavings: Math.round(monthlySavings),
    yearlySavings: Math.round(yearlySavings),
    bootcampROI: Math.round(bootcampROI * 10) / 10,
    paybackDays: paybackDays,
  };
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}
