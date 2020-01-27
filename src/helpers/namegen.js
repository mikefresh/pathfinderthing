const first = [
  "Abrielle",
  "Adair",
  "Adara",
  "Adriel",
  "Aiyana",
  "Alissa",
  "Alixandra",

  "Altair",

  "Amara",

  "Anatola",

  "Anya",

  "Arcadia",

  "Ariadne",

  "Arianwen",

  "Aurelia",

  "Aurelian",

  "Aurelius",

  "Avalon",

  "Acalia",

  "Alaire",

  "Auristela",

  "Bastian",

  "Breena",

  "Brielle",

  "Briallan",

  "Briseis",

  "Cambria",

  "Cara",

  "Carys",

  "Caspian",

  "Cassia",

  "Cassiel",

  "Cassiopeia",

  "Cassius",

  "Chaniel",

  "Cora",

  "Corbin",

  "Cyprian",

  "Daire",

  "Darius",

  "Destin",

  "Drake",

  "Drystan",

  "Dagen",

  "Devlin",

  "Devlyn",

  "Eira",

  "Eirian",

  "Elysia",

  "Eoin",

  "Evadne",

  "Eliron",

  "Evanth",

  "Fineas",

  "Finian",

  "Fyodor",

  "Gareth",

  "Gavriel",

  "Griffin",

  "Guinevere",

  "Gaerwn",

  "Ginerva",

  "Hadriel",

  "Hannelore",

  "Hermione",

  "Hesperos",

  "Iagan",

  "Ianthe",

  "Ignacia",

  "Ignatius",

  "Iseult",

  "Isolde",

  "Jessalyn",

  "Kara",

  "Kerensa",

  "Korbin",

  "Kyler",

  "Kyra",

  "Katriel",

  "Kyrielle",

  "Leala",

  "Leila",

  "Lilith",

  "Liora",

  "Lucien",

  "Lyra",

  "Leira",

  "Liriene",

  "Liron",

  "Maia",

  "Marius",

  "Mathieu",

  "Mireille",

  "Mireya",

  "Maylea",

  "Meira",

  "Natania",

  "Nerys",

  "Nuriel",

  "Nyssa",

  "Neirin",

  "Nyfain",

  "Oisin",

  "Oralie",

  "Orion",

  "Orpheus",

  "Ozara",

  "Oleisa",

  "Orinthea",

  "Peregrine",

  "Persephone",

  "Perseus",

  "Petronela",

  "Phelan",

  "Pryderi",

  "Pyralia",

  "Pyralis",

  "Qadira",

  "Quintessa",

  "Quinevere",

  "Raisa",

  "Remus",

  "Rhyan",

  "Rhydderch",

  "Riona",

  "Renfrew",

  "Saoirse",

  "Sarai",

  "Sebastian",

  "Seraphim",

  "Seraphina",

  "Sirius",

  "Sorcha",

  "Saira",

  "Sarielle",

  "Serian",

  "Séverin",

  "Tavish",

  "Tearlach",

  "Terra",

  "Thalia",

  "Thaniel",

  "Theia",

  "Torian",

  "Torin",

  "Tressa",

  "Tristana",

  "Uriela",

  "Urien",

  "Ulyssia",

  "Vanora",

  "Vespera",

  "Vasilis",

  "Xanthus",

  "Xara",

  "Xylia",

  "Yadira",

  "Yseult",

  "Yakira",

  "Yeira",

  "Yeriel",

  "Yestin",

  "Zaira",

  "Zephyr",

  "Zora",

  "Zorion",

  "Zaniel",

  "Zarek"
];

const adjectives = [
  "autumn",
  "hidden",
  "bitter",
  "misty",
  "silent",
  "empty",
  "dry",
  "dark",
  "summer",
  "icy",
  "delicate",
  "quiet",
  "white",
  "cool",
  "spring",
  "winter",
  "patient",
  "crimson",
  "wispy",
  "weathered",
  "blue",
  "billowing",
  "broken",
  "cold",
  "damp",
  "falling",
  "frosty",
  "green",
  "long",
  "late",
  "bold",
  "little",
  "morning",
  "muddy",
  "red",
  "rough",
  "still",
  "small",
  "sparkling",
  "shy",
  "wandering",
  "withered",
  "wild",
  "black",
  "young",
  "holy",
  "solitary",
  "fragrant",
  "aged",
  "snowy",
  "proud",
  "floral",
  "restless",
  "polished",
  "purple",
  "lively",
  "nameless",
  "scarlet",
  "gloomy",
  "lucid",
  "snarling",
  "lurking",
  "fierce",
  "furious",
  "lonely",
  "gnawing",
  "burning",
  "keen",
  "boggy",
  "swampy",
  "torrid",
  "glowing",
  "arid",
  "droughty",
  "skinny",
  "meager",
  "stout",
  "sturdy",
  "crispy",
  "blooming",
  "stormy",
  "rousing",
  "flowing",
  "old",
  "glistening",
  "clear",
  "winding",
  "meandering",
  "mild",
  "hot",
  "frozen",
  "frightening",
  "lucky",
  "profound",
  "aqueous",
  "arcane",
  "cryptic",
  "fast",
  "gentle",
  "immense",
  "limitless",
  "lit",
  "murmuring",
  "protected",
  "pure",
  "rocky",
  "polite",
  "cautious",
  "perky",
  "naughty",
  "upright",
  "straight"
];

const nouns = [
  "waterfall",
  "river",
  "breeze",
  "moon",
  "rain",
  "wind",
  "sea",
  "morning",
  "snow",
  "lake",
  "sunset",
  "pine",
  "shadow",
  "leaf",
  "dawn",
  "glitter",
  "forest",
  "hill",
  "cloud",
  "meadow",
  "sun",
  "glade",
  "bird",
  "brook",
  "butterfly",
  "bush",
  "dew",
  "dust",
  "field",
  "fire",
  "flower",
  "firefly",
  "feather",
  "grass",
  "haze",
  "mountain",
  "night",
  "pond",
  "darkness",
  "snowflake",
  "silence",
  "sound",
  "sky",
  "shape",
  "surf",
  "thunder",
  "violet",
  "water",
  "wildflower",
  "wave",
  "water",
  "resonance",
  "sun",
  "wood",
  "dream",
  "cherry",
  "tree",
  "fog",
  "frost",
  "voice",
  "frog",
  "smoke",
  "star",
  "ibex",
  "roe",
  "deer",
  "cave",
  "stream",
  "creek",
  "ditch",
  "puddle",
  "oak",
  "fox",
  "wolf",
  "owl",
  "eagle",
  "hawk",
  "badger",
  "nightingale",
  "ocean",
  "island",
  "marsh",
  "swamp",
  "blaze",
  "glow",
  "hail",
  "echo",
  "flame",
  "twilight",
  "whale",
  "raven",
  "blossom",
  "mist",
  "ray",
  "beam",
  "stone",
  "rock",
  "cliff",
  "reef",
  "crag",
  "peak",
  "summit",
  "wetland",
  "glacier",
  "thunderstorm",
  "ice",
  "firn",
  "spark",
  "boulder",
  "rabbit",
  "abyss",
  "avalanche",
  "moor",
  "reed",
  "harbor",
  "chamber",
  "savannah",
  "garden",
  "brook",
  "earth",
  "oasis",
  "bastion",
  "ridge",
  "bayou",
  "citadel",
  "shore",
  "cavern",
  "gorge",
  "spring",
  "arrow",
  "heap"
];

export default function generateName() {
  const adjective = pickAdjective();
  const first = pickFirst();
  const noun = pickNoun();
  return `${first} the ${adjective} ${noun} `;
}

function pickAdjective() {
  const number = Math.floor(Math.random() * adjectives.length);
  return adjectives[number];
}

function pickNoun() {
  const number = Math.floor(Math.random() * nouns.length);
  return nouns[number];
}

function pickFirst() {
  const number = Math.floor(Math.random() * first.length);
  return first[number];
}
