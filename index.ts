interface PrintConfig {
  params: Array<"contractId" | "workOrderId">;
  title: string;
}

export interface CustomizationConfig {
  prints?: {
    pdf?: Record<string, PrintConfig>;
    screen?: Record<string, PrintConfig>;
  };
}
