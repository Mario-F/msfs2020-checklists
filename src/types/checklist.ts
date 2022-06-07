// Docs: https://docs.flightsimulator.com/html/Content_Configuration/Checklists/Checklist_Definitions.htm

interface Checklist {
  Steps: Step[]
}

interface Step {
  ChecklistStepId:
    | 'PREFLIGHT_GATE'
    | 'PREFLIGHT_PUSHBACK'
    | 'PREFLIGHT_TAXI_OUT'
    | 'FLIGHT_RUNWAY'
    | 'FLIGHT_TAKEOFF'
    | 'FLIGHT_CRUISE'
    | 'FLIGHT_DESCENT'
    | 'LANDING_APPROACH'
    | 'LANDING_APPROACH_VFR'
    | 'LANDING_APPROACH_IFR'
    | 'LANDING_TOUCHDOWN'
    | 'LANDING_GROUNDROLL'
    | 'LANDING_TAXI_IN'
    | 'LANDING_GATE'
  Pages: Page[]
}

interface Page {
  SubjectTT: string
  Checkpoints: Checkpoint[]
}

interface Checkpoint {
  ReferenceId: string
  Id: string
}
