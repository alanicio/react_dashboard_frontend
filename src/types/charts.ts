
export interface AreaBarChartElementType {
  key: string;
  stroke: string;
  fill: string;
}

  export interface AreaBarChartDataItem {
    name: string;
    [key: string]: number | string
  }

  export interface AreaBarChartData {
    chartElements: AreaBarChartElementType[];
    data: AreaBarChartDataItem[];
  }
  
  export interface PieChartData {
    name: string;
    value: number;
  }

  export interface PieChartProps {
    data: PieChartData[];
    colors: string[];
  }