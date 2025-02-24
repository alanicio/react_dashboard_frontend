
 export interface ChartProps<T extends string = string> {
    key: T;
    stroke: string;
    fill: string;
  }

  export interface ChartDataItem {
    name: string;
    [key: string]: number | string
  }
  

  export interface ChartData {
    chartElement: ChartProps<Extract<keyof ChartDataItem, string>>[];
    data: ChartDataItem[];
  }
  