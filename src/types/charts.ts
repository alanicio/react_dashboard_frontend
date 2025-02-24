
 export interface AreaProps<T extends string = string> {
    key: T;
    stroke: string;
    fill: string;
  }

  export interface AreaDataItem {
    name: string;
    [key: string]: number | string
  }
  

  export interface AreaChartData {
    areas: AreaProps<Extract<keyof AreaDataItem, string>>[];
    data: AreaDataItem[];
  }
  