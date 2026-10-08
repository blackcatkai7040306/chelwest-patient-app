export const problems = [
  {
    title: "Getting lost, arriving late",
    body: "A large hospital site is hard to navigate. Late arrivals delay clinics and add stress for patients and staff.",
    icon: "map",
  },
  {
    title: "Surgery cancelled on the day",
    body: "Operations are sometimes cancelled because a patient ate too late, took the wrong medicine, or didn't know what to prepare.",
    icon: "clipboard",
  },
  {
    title: "Little visibility after discharge",
    body: "Once a patient goes home, problems are often only caught when they return to hospital. Regular readings let teams spot issues earlier.",
    icon: "pulse",
  },
  {
    title: "Phone lines full of simple questions",
    body: "Many calls are about parking, directions or preparation — things that can be answered instantly from guidance already published.",
    icon: "phone",
  },
] as const;

export const acrossTheApp = [
  {
    title: "Secure sign-in",
    body: "Built so NHS login can be layered in during the next phase.",
    icon: "lock",
  },
  {
    title: "Accessible by default",
    body: "WCAG 2.2 AA: screen readers, large text, and strong contrast throughout.",
    icon: "accessibility",
  },
  {
    title: "Staff admin console",
    body: "Non-developers can update checklists, guidance and content directly.",
    icon: "admin",
  },
  {
    title: "Ready to localise",
    body: "English at launch, structured so further languages can be added later.",
    icon: "globe",
  },
] as const;

export const benefits = [
  {
    benefit: "Fewer missed and late appointments",
    mechanism: "Reminders, clear directions, what to bring",
    metric: "Did-not-attend rate and late arrivals",
  },
  {
    benefit: "Fewer operations cancelled on the day",
    mechanism: "Fasting and medicine reminders, preparation checklist",
    metric: "On-the-day cancellations for patient reasons",
  },
  {
    benefit: "Earlier, safer discharge",
    mechanism: "Home readings and wound photos build confidence to discharge sooner",
    metric: "Length of stay and 30-day readmissions",
  },
  {
    benefit: "Less staff time on routine questions",
    mechanism: "AI helper and in-app guidance answer common questions",
    metric: "Call volumes to booking and ward lines",
  },
  {
    benefit: "Better patient experience",
    mechanism: "One place for practical information, less anxiety",
    metric: "Patient feedback scores and app ratings",
  },
] as const;

export const technical = [
  { area: "App", requirement: "Flutter, one codebase for iOS and Android, native Swift/Kotlin modules where needed" },
  { area: "Health data", requirement: "HealthKit on iOS, Health Connect on Android — read access with clear patient consent" },
  { area: "Backend", requirement: "UK-hosted, clean API, developer-proposed stack" },
  { area: "Data model", requirement: "Structured to map to FHIR (UK Core) for future hospital-system integration" },
  { area: "AI helper", requirement: "Answers restricted to approved content with a visible source. No patient data leaves the UK" },
  { area: "Security", requirement: "Encryption in transit and at rest, secure on-device storage, biometric unlock, session timeout" },
  { area: "Accessibility", requirement: "WCAG 2.2 AA across every screen" },
  { area: "Quality", requirement: "Automated tests for core flows, crash reporting, TestFlight and Play internal testing" },
] as const;

export const outOfScope = [
  "Connection to live hospital record systems — the MVP uses test data only",
  "Real patient data of any kind",
  "Live indoor positioning with Bluetooth beacons",
  "AI that assesses wound photos or predicts deterioration (medical device territory)",
  "A full clinician dashboard — MVP includes a basic demo web view only",
  "Appointment booking, letters and records — these stay in the NHS App",
];

export const afterMvp = [
  "NHS login",
  "Connection to hospital records via FHIR",
  "Full clinician dashboard",
  "Live indoor positioning",
  "Formal DCB0129 clinical safety & data protection assessment",
  "Regulated AI for clinical decision support — as its own workstream",
];

export const buildOrder = [
  {
    step: "01",
    title: "Visit & wayfinding",
    body: "Maps, directions, appointment details and reminders — the first thing a patient opens.",
  },
  {
    step: "02",
    title: "Surgery companion",
    body: "Checklists, fasting and medicine reminders, and the post-op check-in.",
  },
  {
    step: "03",
    title: "Home recovery",
    body: "Vitals logging, HealthKit/Health Connect sync, and progress charts.",
  },
  {
    step: "04",
    title: "AI helper",
    body: "Grounded answers from approved hospital content, layered once the content library exists.",
  },
];
