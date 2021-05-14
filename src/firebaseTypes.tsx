export type Timestamp = {
  nanoseconds: number
  seconds: number,
  toDate: () => Date
}