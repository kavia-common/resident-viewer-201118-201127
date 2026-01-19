const residents = [
  {
    id: "r-1001",
    name: "Ava Thompson",
    unit: "B-204",
    age: 78,
    phone: "(555) 013-2041",
    email: "ava.thompson@example.com",
    notes:
      "Prefers morning check-ins. Enjoys crossword puzzles and decaf tea. Allergic to penicillin.",
    avatarUrl: ""
  },
  {
    id: "r-1002",
    name: "James Patel",
    unit: "A-110",
    age: 82,
    phone: "(555) 013-1109",
    email: "james.patel@example.com",
    notes:
      "Needs assistance with medication reminders. Family visits on weekends. Likes classical music.",
    avatarUrl: ""
  },
  {
    id: "r-1003",
    name: "Sophia Chen",
    unit: "C-015",
    age: 74,
    phone: "(555) 013-0157",
    email: "sophia.chen@example.com",
    notes:
      "Diet: low sodium. Daily afternoon walks. Reports occasional dizziness—monitor hydration.",
    avatarUrl: ""
  },
  {
    id: "r-1004",
    name: "Robert Garcia",
    unit: "B-102",
    age: 80,
    phone: "(555) 013-1024",
    email: "robert.garcia@example.com",
    notes:
      "Uses hearing aids. Prefers written instructions. Enjoys gardening club.",
    avatarUrl: ""
  },
  {
    id: "r-1005",
    name: "Evelyn Johnson",
    unit: "A-305",
    age: 76,
    phone: "(555) 013-3058",
    email: "evelyn.johnson@example.com",
    notes:
      "Physical therapy Tue/Thu. Likes to be addressed as 'Ms. Johnson'.",
    avatarUrl: ""
  },
  {
    id: "r-1006",
    name: "Michael Nguyen",
    unit: "D-221",
    age: 71,
    phone: "(555) 013-2213",
    email: "michael.nguyen@example.com",
    notes:
      "Independent. Tracks vitals daily. Requests extra pillows for sleep comfort.",
    avatarUrl: ""
  }
];

// PUBLIC_INTERFACE
export function getResidents() {
  /** Returns the full resident list (local mock data). */
  return residents;
}

// PUBLIC_INTERFACE
export function getResidentById(id) {
  /** Returns a single resident by id or undefined if not found. */
  return residents.find((r) => r.id === id);
}
