
 export interface ChartProps<T extends string = string> {
    key: T;
    stroke: string;
    fill: string;
  }

  export interface ChartDataItem {
    name: string;
    [key: string]: number | string
  }
  
  export type ChartElementType = ChartProps<Extract<keyof ChartDataItem, string>>;

  export interface ChartData {
    chartElements: ChartElementType[];
    data: ChartDataItem[];
  }
  