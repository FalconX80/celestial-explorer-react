export interface Planet {
  id: string;
  name: string;
  radius: number;
  distance: number;
  orbitSpeed: number;
  color: string;
  texture?: string;
  moons: number;
  gravity: number;
  atmosphere: string;
  dayLength: string;
  yearLength: string;
  temperature: string;
  description: string;
  facts: string[];
  wikipediaUrl: string;
}

export const solarSystemData: Planet[] = [
  {
    id: "mercury",
    name: "Mercury",
    radius: 0.38,
    distance: 5,
    orbitSpeed: 4.74,
    color: "#8C7853",
    moons: 0,
    gravity: 3.7,
    atmosphere: "None",
    dayLength: "59 Earth days",
    yearLength: "88 Earth days",
    temperature: "-173°C to 427°C",
    description: "Mercury is the smallest planet and closest to the Sun. It has extreme temperature variations and no atmosphere to retain heat.",
    facts: [
      "Smallest planet in our solar system",
      "No atmosphere to trap heat",
      "One day on Mercury lasts about 59 Earth days",
      "Surface temperatures can reach 427°C during the day"
    ],
    wikipediaUrl: "https://en.wikipedia.org/wiki/Mercury_(planet)"
  },
  {
    id: "venus",
    name: "Venus",
    radius: 0.95,
    distance: 7,
    orbitSpeed: 3.50,
    color: "#FFC649",
    moons: 0,
    gravity: 8.87,
    atmosphere: "96.5% CO₂, 3.5% N₂",
    dayLength: "243 Earth days",
    yearLength: "225 Earth days",
    temperature: "462°C average",
    description: "Venus is the hottest planet in our solar system due to its thick, toxic atmosphere that traps heat in a runaway greenhouse effect.",
    facts: [
      "Hottest planet in the solar system",
      "Thick, toxic atmosphere creates extreme greenhouse effect",
      "Rotates backwards compared to most planets",
      "Surface pressure is 90 times that of Earth"
    ],
    wikipediaUrl: "https://en.wikipedia.org/wiki/Venus"
  },
  {
    id: "earth",
    name: "Earth",
    radius: 1.0,
    distance: 10,
    orbitSpeed: 2.98,
    color: "#6B93D6",
    moons: 1,
    gravity: 9.81,
    atmosphere: "78% N₂, 21% O₂, 1% other",
    dayLength: "24 hours",
    yearLength: "365.25 days",
    temperature: "-89°C to 58°C",
    description: "Earth is the only known planet to harbor life. It has liquid water, a protective atmosphere, and a magnetic field that shields us from harmful solar radiation.",
    facts: [
      "Only known planet with life",
      "71% of surface covered by water",
      "Protected by magnetic field",
      "Has one natural satellite: the Moon"
    ],
    wikipediaUrl: "https://en.wikipedia.org/wiki/Earth"
  },
  {
    id: "mars",
    name: "Mars",
    radius: 0.53,
    distance: 15,
    orbitSpeed: 2.41,
    color: "#CD5C5C",
    moons: 2,
    gravity: 3.71,
    atmosphere: "95% CO₂, 3% N₂, 2% Ar",
    dayLength: "24.6 hours",
    yearLength: "687 Earth days",
    temperature: "-87°C to -5°C",
    description: "Mars, the Red Planet, has the largest volcano and canyon in the solar system. Evidence suggests it once had liquid water on its surface.",
    facts: [
      "Known as the Red Planet due to iron oxide",
      "Home to Olympus Mons, the largest volcano in the solar system",
      "Has polar ice caps made of water and CO₂",
      "Two small moons: Phobos and Deimos"
    ],
    wikipediaUrl: "https://en.wikipedia.org/wiki/Mars"
  },
  {
    id: "jupiter",
    name: "Jupiter",
    radius: 11.2,
    distance: 25,
    orbitSpeed: 1.31,
    color: "#D8CA9D",
    moons: 95,
    gravity: 24.79,
    atmosphere: "89% H₂, 10% He, 1% other",
    dayLength: "9.9 hours",
    yearLength: "12 Earth years",
    temperature: "-108°C average",
    description: "Jupiter is the largest planet in our solar system. Its Great Red Spot is a storm larger than Earth that has been raging for centuries.",
    facts: [
      "Largest planet in the solar system",
      "Great Red Spot is a storm larger than Earth",
      "Acts as a 'cosmic vacuum cleaner' protecting inner planets",
      "Has a faint ring system discovered in 1979"
    ],
    wikipediaUrl: "https://en.wikipedia.org/wiki/Jupiter"
  },
  {
    id: "saturn",
    name: "Saturn",
    radius: 9.4,
    distance: 35,
    orbitSpeed: 0.97,
    color: "#FAD5A5",
    moons: 146,
    gravity: 10.44,
    atmosphere: "96% H₂, 3% He, 1% other",
    dayLength: "10.7 hours",
    yearLength: "29 Earth years",
    temperature: "-139°C average",
    description: "Saturn is famous for its spectacular ring system made of ice and rock particles. It's the least dense planet and would float in water.",
    facts: [
      "Famous for its prominent ring system",
      "Least dense planet - would float in water",
      "Has hexagonal storm at its north pole",
      "Titan, its largest moon, has a thick atmosphere"
    ],
    wikipediaUrl: "https://en.wikipedia.org/wiki/Saturn"
  },
  {
    id: "uranus",
    name: "Uranus",
    radius: 4.0,
    distance: 50,
    orbitSpeed: 0.68,
    color: "#4FD0E7",
    moons: 27,
    gravity: 8.69,
    atmosphere: "83% H₂, 15% He, 2% CH₄",
    dayLength: "17.2 hours",
    yearLength: "84 Earth years",
    temperature: "-197°C average",
    description: "Uranus rotates on its side and has a unique tilted magnetic field. It's the coldest planetary atmosphere in the solar system.",
    facts: [
      "Rotates on its side with 98° axial tilt",
      "Coldest planetary atmosphere in the solar system",
      "Has faint rings discovered in 1977",
      "Magnetic field is tilted 59° from its axis"
    ],
    wikipediaUrl: "https://en.wikipedia.org/wiki/Uranus"
  },
  {
    id: "neptune",
    name: "Neptune",
    radius: 3.9,
    distance: 65,
    orbitSpeed: 0.54,
    color: "#4B70DD",
    moons: 16,
    gravity: 11.15,
    atmosphere: "80% H₂, 19% He, 1% CH₄",
    dayLength: "16.1 hours",
    yearLength: "165 Earth years",
    temperature: "-201°C average",
    description: "Neptune is the windiest planet with speeds reaching 2,100 km/h. It was the first planet discovered through mathematical prediction.",
    facts: [
      "Windiest planet with speeds up to 2,100 km/h",
      "First planet discovered by mathematical prediction",
      "Has a dark storm called the Great Dark Spot",
      "Takes 165 Earth years to orbit the Sun once"
    ],
    wikipediaUrl: "https://en.wikipedia.org/wiki/Neptune"
  }
];

export const sunData = {
  id: "sun",
  name: "Sun",
  radius: 3.0,
  color: "#FDB813",
  temperature: "5,778K surface, 15.7M K core",
  mass: "333,000 times Earth's mass",
  age: "4.6 billion years",
  description: "The Sun is a yellow dwarf star at the center of our solar system. It contains 99.86% of the system's mass and provides the energy that sustains life on Earth.",
  facts: [
    "Contains 99.86% of the solar system's mass",
    "Core temperature reaches 15.7 million Kelvin",
    "Produces energy through nuclear fusion",
    "Light takes 8 minutes 20 seconds to reach Earth"
  ],
  wikipediaUrl: "https://en.wikipedia.org/wiki/Sun"
};