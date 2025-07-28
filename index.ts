export interface PrintConfig {
  params: Array<'contractId' | 'workOrderId'>
  title: string

  consignoCloud?: {
    anchors: Array<{
      tag: string

      xOffset: number
      yOffset: number

      height: number
      width: number

      page: string
    }>
  }
}

export interface CustomizationConfig {
  prints?: {
    pdf?: Record<string, PrintConfig>
  }
}
