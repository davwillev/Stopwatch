// JavaScript Type Definitions for Stopwatch EM

/**
 * @typedef ExternalModules
 * @type {{
 *  StopwatchEM_DTO?: StopwatchDTO
 * }}
 */

/**
 * @typedef StopwatchDTO
 * @type {{
 *  fields: Object<string, StopwatchParams>
 *  debug: boolean
 * }}
 */

/**
 * @typedef CaptureMapping
 * @type {{
 *  elapsed: string
 *  start: string
 *  stop: string
 * }}
 */

/**
 * @typedef LapMapping
 * @type {{
 *  elapsed: string
 *  start: string
 *  stop: string
 *  num_stops: string
 * }}
 */

/**
 * @typedef Plain
 * @type {{
 *  items: string[]
 *  delimiter: string
 *  header: boolean
 *  start: string
 *  stop: string
 *  num_stops: string
 *  elapsed: string
 * }}
 */

/**
 * @typedef StopwatchParams
 * @type {{
 *  mode: string
 *  label_start: string
 *  label_resume: string
 *  label_stop: string
 *  label_reset: string
 *  label_lap: string
 *  label_capture: string
 *  is_mm_ss : boolean
 *  stops: boolean
 *  target: string
 *  hide_target: boolean
 *  only_once?: boolean|string
 *  decimal_separator: string
 *  group_separator: string
 *  unset_display_symbol : string
 *  digits: number
 *  h_digits: number
 *  m_digits: number
 *  s_digits: number
 *  no_hours: boolean
 *  no_minutes: boolean
 *  display_format: string
 *  store_format: string
 *  error: string
 * }}
 */

/**
 * @typedef StopwatchData
 * @type {{
 *  id: string
 *  initial: boolean
 *  $srsBtn?: JQuery
 *  $rclBtn?: JQuery
 *  $display: JQuery
 *  $hourglass: JQuery
 *  $input: JQuery
 *  params: StopwatchParams
 *  running: boolean
 *  elapsed: number
 *  laps: LapInfo[]
 *  captures: CaptureInfo[]
 *  startTime?: Date
 *  stopTime?: Date
 *  lapStartTime?: Date
 *  lapStopTime?: Date
 * }}
 */

/**
 * @typedef LapInfo
 * @type {{
 *  lapStartTime: Date
 *  lapStopTime: Date
 *  elapsed: number
 *  isStop: boolean
 * }}
 */

/**
 * @typedef CaptureInfo
 * @type {{
 *  captureStartTime: Date
 *  captureStopTime: Date
 *  elapsed: number
 *  isStop: boolean
 * }}
 */

/**
 * @typedef FormattedTime
 * @type {{
 *  time_ms: number
 *  S: string
 *  F: string
 *  h: string
 *  m: string
 *  s: string
 *  f: string
 *  d: string
 *  g: string
 *  display?: string
 *  store?: string
 * }}
 */
