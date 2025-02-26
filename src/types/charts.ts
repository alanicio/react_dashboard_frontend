
export interface ChartElementType {
  key: Exclude<keyof ChartDataItem, "name">;
  stroke: string;
  fill: string;
}

  export interface ChartDataItem {
    name: string;
    [key: string]: number | string
  }

  export interface ChartData {
    chartElements: ChartElementType[];
    data: ChartDataItem[];
  }
  