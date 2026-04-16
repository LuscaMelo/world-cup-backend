import 'dotenv/config'
import { prisma } from '../lib/prisma'

async function main() {
  // ======================
  // COUNTRY + STADIUMS
  // ======================
  const estadosUnidos = await prisma.country.create({
    data: {
      name: 'Estados Unidos',
      stadiums: {
        create: [
          {
            "name": "MetLife Stadium",
            "description": "Localizado em East Rutherford, o MetLife Stadium é um dos maiores dos Estados Unidos e será um dos principais palcos da Copa de 2026, com expectativa de receber a final. Inaugurado em 2010, é casa do New York Giants e New York Jets (NFL) e já sediou grandes eventos internacionais, incluindo a final da Copa América Centenário em 2016.",
            "locate": "East Rutherford, Nova Jersey",
            "capacity": 82500,
            "openedYear": 2010,
            "coverImage": "metlife.png"
          },
          {
            "name": "SoFi Stadium",
            "description": "Inaugurado em 2020, o SoFi Stadium é um dos estádios mais modernos do mundo, com arquitetura futurista e um enorme telão 360°. Localizado em Los Angeles, é casa do Los Angeles Rams e Chargers e já recebeu o Super Bowl, sendo um dos principais símbolos da nova geração de arenas esportivas.",
            "locate": "Los Angeles, Califórnia",
            "capacity": 70000,
            "openedYear": 2020,
            "coverImage": "sofi.png"
          },
          {
            "name": "AT&T Stadium",
            "description": "Conhecido como 'Jerry World', o AT&T Stadium é famoso por seu gigantesco telão central e estrutura imponente. Localizado no Texas, é casa do Dallas Cowboys e já sediou eventos de grande porte como Super Bowl, finais de basquete universitário e jogos internacionais de futebol.",
            "locate": "Arlington, Texas",
            "capacity": 80000,
            "openedYear": 2009,
            "coverImage": "att.png"
          },
          {
            "name": "Mercedes-Benz Stadium",
            "description": "Com um design inovador e teto retrátil em formato de hélice, o Mercedes-Benz Stadium é um dos mais tecnológicos dos EUA. Localizado em Atlanta, é casa do Atlanta Falcons (NFL) e do Atlanta United (MLS), além de já ter sediado o Super Bowl e importantes finais de futebol.",
            "locate": "Atlanta, Geórgia",
            "capacity": 71000,
            "openedYear": 2017,
            "coverImage": "mercedes_benz.png"
          },
          {
            "name": "Levi's Stadium",
            "description": "Situado em Santa Clara, no coração do Vale do Silício, o Levi's Stadium combina tecnologia e sustentabilidade. Casa do San Francisco 49ers, já sediou o Super Bowl 50 e diversos eventos internacionais, sendo referência em inovação no esporte.",
            "locate": "Santa Clara, Califórnia",
            "capacity": 68500,
            "openedYear": 2014,
            "coverImage": "levis.png"
          },
          {
            "name": "Lumen Field",
            "description": "Localizado em Seattle, o Lumen Field é conhecido pela atmosfera intensa criada pelos torcedores, sendo considerado um dos estádios mais barulhentos do mundo. É casa do Seattle Seahawks (NFL) e do Seattle Sounders (MLS), com forte tradição no futebol.",
            "locate": "Seattle, Washington",
            "capacity": 69000,
            "openedYear": 2002,
            "coverImage": "lumen.png"
          },
          {
            "name": "Lincoln Financial Field",
            "description": "Casa do Philadelphia Eagles, o Lincoln Financial Field é um estádio moderno inaugurado em 2003. Localizado na Filadélfia, já recebeu partidas internacionais de futebol e grandes eventos esportivos, sendo conhecido pela paixão de sua torcida.",
            "locate": "Filadélfia, Pensilvânia",
            "capacity": 69596,
            "openedYear": 2003,
            "coverImage": "lincoln.png"
          },
          {
            "name": "Hard Rock Stadium",
            "description": "Localizado em Miami Gardens, o Hard Rock Stadium é um dos mais versáteis dos EUA, recebendo NFL, tênis e Fórmula 1. Já passou por grandes reformas e é palco frequente de jogos internacionais de futebol, incluindo partidas da seleção brasileira.",
            "locate": "Miami, Flórida",
            "capacity": 65326,
            "openedYear": 1987,
            "coverImage": "hardrock.png"
          },
          {
            "name": "NRG Stadium",
            "description": "Com teto retrátil e estrutura moderna, o NRG Stadium fica em Houston e é casa do Houston Texans (NFL). Foi o primeiro estádio da NFL com teto móvel e já sediou Super Bowls e amistosos internacionais, sendo um dos principais centros esportivos do Texas.",
            "locate": "Houston, Texas",
            "capacity": 72220,
            "openedYear": 2002,
            "coverImage": "nrg.png"
          },
          {
            "name": "Arrowhead Stadium",
            "description": "Parte do complexo esportivo de Kansas City, o Arrowhead Stadium é conhecido por ser um dos mais barulhentos do mundo. Inaugurado em 1972, é casa do Kansas City Chiefs e mantém forte tradição esportiva e atmosfera única.",
            "locate": "Kansas City, Missouri",
            "capacity": 76416,
            "openedYear": 1972,
            "coverImage": "arrowhead.png"
          },
          {
            "name": "Gillette Stadium",
            "description": "Localizado em Foxborough, o Gillette Stadium é casa do New England Patriots e do New England Revolution. Inaugurado em 2002, recebe eventos esportivos e shows internacionais, sendo uma importante arena no nordeste dos Estados Unidos.",
            "locate": "Foxborough, Massachusetts",
            "capacity": 65878,
            "openedYear": 2002,
            "coverImage": "gillette.png"
          }
        ],
      },
    },
  })

  const canada = await prisma.country.create({
    data: {
      name: 'Canadá',
      stadiums: {
        create: [
          {
            "name": "BC Place",
            "description": "Localizado em Vancouver, o BC Place é um estádio icônico com teto retrátil e arquitetura moderna. Inaugurado em 1983 e reformado recentemente, é casa do Vancouver Whitecaps (MLS) e já recebeu eventos internacionais, incluindo partidas da seleção canadense.",
            "locate": "Vancouver, British Columbia",
            "capacity": 54000,
            "openedYear": 1983,
            "coverImage": "bc_place.png"
          },
          {
            "name": "BMO Field",
            "description": "Situado em Toronto, o BMO Field é o principal estádio dedicado ao futebol no Canadá. Inaugurado em 2007 e ampliado nos últimos anos, é casa do Toronto FC e da seleção canadense, sendo um dos centros do crescimento do futebol no país.",
            "locate": "Toronto, Ontário",
            "capacity": 30000,
            "openedYear": 2007,
            "coverImage": "bmo.png"
          }
        ],
      },
    },
  })

  const mexico = await prisma.country.create({
    data: {
      name: 'México',
      stadiums: {
        create: [
          {
            "name": "Estadio Azteca",
            "description": "Localizado na Cidade do México, o Estadio Azteca é um dos mais históricos do futebol mundial. Inaugurado em 1966, foi palco das finais das Copas de 1970 e 1986, eternizadas por Pelé e Maradona, e será o primeiro estádio da história a sediar três Copas do Mundo.",
            "locate": "Cidade do México",
            "capacity": 87000,
            "openedYear": 1966,
            "coverImage": "azteca.png"
          },
          {
            "name": "Estadio BBVA",
            "description": "Inaugurado em 2015, o Estadio BBVA é um dos mais modernos da América Latina. Localizado em Monterrey, possui design arrojado e vista para as montanhas, sendo casa do Monterrey e referência em infraestrutura esportiva no México.",
            "locate": "Monterrey, Nuevo León",
            "capacity": 53500,
            "openedYear": 2015,
            "coverImage": "bbva.png"
          },
          {
            "name": "Estadio Akron",
            "description": "Conhecido por seu design inovador inspirado em um vulcão, o Estadio Akron está localizado em Guadalajara. Inaugurado em 2010, é casa do Chivas e já sediou importantes competições internacionais, incluindo Jogos Pan-Americanos.",
            "locate": "Guadalajara, Jalisco",
            "capacity": 49850,
            "openedYear": 2010,
            "coverImage": "akron.png"
          }
        ],
      },
    },
  })

  // ======================
  // TEAMS + PLAYERS
  // ======================
  const brazilTeam = await prisma.team.create({
    data: {
      name: 'Brasil',
      continent: 'América do Sul',
      isFeatured: true,
      thumbnail: 'brazil-thumb.png',
      banner: 'brazil-banner.png',
      flag: 'brazil-flag.png',

      fifaRanking: 6,
      fifaPoints: 1761.16,
      titlesRank: 1,

      worldCupAppearances: 22,
      worldCupFinals: 7,
      worldCupTitles: 5,

      matches: 18,
      wins: 8,
      draws: 4,
      losses: 6,

      players: {
        create: [
          {
            name: 'Vinícius Jr',
            photo: 'vinicius.png',
            banner: 'vinicius-banner.png',
            heightCm: 176,
            weightKg: 73,
            dominantFoot: 'right',

            pace: 95,
            shooting: 84,
            passing: 81,
            dribbling: 91,
            defense: 29,
            physical: 69,

            acceleration: 95, 
            sprintSpeed: 95,

            positioning: 86,
            finishing: 88,
            shotPower: 81,
            longShots: 83,
            volleys: 73,
            penalties: 74,

            vision: 85,
            crossing: 81,
            freeKickAccuracy: 62,
            shortPassing: 83,
            longPassing: 77,
            curve: 79,

            agility: 94,
            balance: 84,
            reactions: 85,
            ballControl: 90,
            driving: 93,
            composure: 83,

            interceptions: 26,
            headingAccuracy: 50,
            defensiveAwareness: 32,
            standingTackle: 25,
            slidingTackle: 18,

            jumping: 74,
            stamina: 84,
            strength: 65,
            aggression: 58,

            overallRating: 89,
            positionRating: 'PTE',
          },
          {
            name: 'Raphinha',
            photo: 'raphinha.png',
            banner: 'raphinha-banner.png',
            heightCm: 176,
            weightKg: 68,
            dominantFoot: 'left',

            pace: 91,
            shooting: 84,
            passing: 85,
            dribbling: 87,
            defense: 53,
            physical: 75,

            acceleration: 90, 
            sprintSpeed: 91,

            positioning: 89,
            finishing: 87,
            shotPower: 83,
            longShots: 82,
            volleys: 72,
            penalties: 78,

            vision: 87,
            crossing: 86,
            freeKickAccuracy: 79,
            shortPassing: 85,
            longPassing: 80,
            curve: 85,

            agility: 88,
            balance: 79,
            reactions: 87,
            ballControl: 88,
            driving: 88,
            composure: 85,

            interceptions: 56,
            headingAccuracy: 74,
            defensiveAwareness: 49,
            standingTackle: 54,
            slidingTackle: 38,

            jumping: 82,
            stamina: 91,
            strength: 65,
            aggression: 77,

            overallRating: 89,
            positionRating: 'PTD',
          },
          {
            name: 'Rodrygo',
            photo: 'rodrigo.png',
            banner: 'rodrigo-banner.png',
            heightCm: 174,
            weightKg: 64,
            dominantFoot: 'right',

            pace: 88,
            shooting: 80,
            passing: 79,
            dribbling: 87,
            defense: 31,
            physical: 64,

            acceleration: 89, 
            sprintSpeed: 87,

            positioning: 83,
            finishing: 83,
            shotPower: 76,
            longShots: 77,
            volleys: 67,
            penalties: 82,

            vision: 84,
            crossing: 79,
            freeKickAccuracy: 77,
            shortPassing: 79,
            longPassing: 73,
            curve: 82,

            agility: 86,
            balance: 84,
            reactions: 83,
            ballControl: 87,
            driving: 88,
            composure: 85,

            interceptions: 21,
            headingAccuracy: 67,
            defensiveAwareness: 24,
            standingTackle: 34,
            slidingTackle: 30,

            jumping: 77,
            stamina: 81,
            strength: 59,
            aggression: 52,

            overallRating: 85,
            positionRating: 'PTD',
          },
          {
            name: 'Marquinhos',
            photo: 'marquinhos.png',
            banner: 'marquinhos-banner.png',
            heightCm: 183,
            weightKg: 75,
            dominantFoot: 'right',

            pace: 78,
            shooting: 56,
            passing: 75,
            dribbling: 74,
            defense: 89,
            physical: 80,

            acceleration: 75, 
            sprintSpeed: 80,

            positioning: 70,
            finishing: 59,
            shotPower: 65,
            longShots: 45,
            volleys: 35,
            penalties: 52,

            vision: 76,
            crossing: 68,
            freeKickAccuracy: 32,
            shortPassing: 84,
            longPassing: 85,
            curve: 58,

            agility: 68,
            balance: 67,
            reactions: 86,
            ballControl: 79,
            driving: 69,
            composure: 86,

            interceptions: 89,
            headingAccuracy: 88,
            defensiveAwareness: 90,
            standingTackle: 89,
            slidingTackle: 88,

            jumping: 89,
            stamina: 79,
            strength: 79,
            aggression: 81,

            overallRating: 87,
            positionRating: 'ZAG',
          },
        ],
      },
    },
  })

  const franceTeam = await prisma.team.create({
    data: {
      name: 'França',
      continent: 'Europa',
      isFeatured: true,
      thumbnail: 'france-thumb.png',
      banner: 'france-banner.png',
      flag: 'france-flag.png',

      fifaRanking: 1,
      fifaPoints: 1877.32,
      titlesRank: 4,

      worldCupAppearances: 16,
      worldCupFinals: 4,
      worldCupTitles: 2,

      matches: 6,
      wins: 5,
      draws: 1,
      losses: 0,

      players: {
        create: [
          {
            name: 'Kylian Mbappé',
            photo: 'mbappe.png',
            banner: 'mbappe-banner.png',
            heightCm: 182,
            weightKg: 75,
            dominantFoot: 'right',

            pace: 97,
            shooting: 90,
            passing: 81,
            dribbling: 92,
            defense: 37,
            physical: 76,

            acceleration: 97, 
            sprintSpeed: 97,

            positioning: 91,
            finishing: 92,
            shotPower: 91,
            longShots: 86,
            volleys: 87,
            penalties: 82,

            vision: 83,
            crossing: 78,
            freeKickAccuracy: 69,
            shortPassing: 87,
            longPassing: 74,
            curve: 80,

            agility: 93,
            balance: 82,
            reactions: 91,
            ballControl: 93,
            driving: 92,
            composure: 88,

            interceptions: 38,
            headingAccuracy: 78,
            defensiveAwareness: 26,
            standingTackle: 34,
            slidingTackle: 32,

            jumping: 90,
            stamina: 83,
            strength: 77,
            aggression: 61,

            overallRating: 91,
            positionRating: 'ATA',
          },
          {
            name: 'Ousmane Dembélé',
            photo: 'dembele.png',
            banner: 'dembele-banner.png',
            heightCm: 178,
            weightKg: 64,
            dominantFoot: 'left',

            pace: 91,
            shooting: 88,
            passing: 83,
            dribbling: 93,
            defense: 50,
            physical: 69,

            acceleration: 93, 
            sprintSpeed: 89,

            positioning: 95,
            finishing: 90,
            shotPower: 91,
            longShots: 85,
            volleys: 79,
            penalties: 80,

            vision: 84,
            crossing: 80,
            freeKickAccuracy: 68,
            shortPassing: 89,
            longPassing: 78,
            curve: 85,

            agility: 94,
            balance: 81,
            reactions: 91,
            ballControl: 94,
            driving: 94,
            composure: 88,

            interceptions: 45,
            headingAccuracy: 74,
            defensiveAwareness: 49,
            standingTackle: 49,
            slidingTackle: 39,

            jumping: 84,
            stamina: 76,
            strength: 69,
            aggression: 58,

            overallRating: 90,
            positionRating: 'ATA',
          },
          {
            name: 'Jules Koundé',
            photo: 'kounde.png',
            banner: 'kounde-banner.png',
            heightCm: 180,
            weightKg: 75,
            dominantFoot: 'right',

            pace: 84,
            shooting: 47,
            passing: 74,
            dribbling: 79,
            defense: 86,
            physical: 84,

            acceleration: 85, 
            sprintSpeed: 83,

            positioning: 69,
            finishing: 47,
            shotPower: 48,
            longShots: 45,
            volleys: 32,
            penalties: 43,

            vision: 70,
            crossing: 78,
            freeKickAccuracy: 26,
            shortPassing: 82,
            longPassing: 75,
            curve: 64,

            agility: 70,
            balance: 78,
            reactions: 86,
            ballControl: 81,
            driving: 78,
            composure: 82,

            interceptions: 86,
            headingAccuracy: 80,
            defensiveAwareness: 87,
            standingTackle: 86,
            slidingTackle: 84,

            jumping: 91,
            stamina: 87,
            strength: 85,
            aggression: 78,

            overallRating: 90,
            positionRating: 'LTD',
          },
          {
            name: 'Michael Olise',
            photo: 'olise.png',
            banner: 'olise-banner.png',
            heightCm: 184,
            weightKg: 73,
            dominantFoot: 'left',

            pace: 78,
            shooting: 80,
            passing: 84,
            dribbling: 87,
            defense: 50,
            physical: 66,

            acceleration: 83, 
            sprintSpeed: 73,

            positioning: 84,
            finishing: 83,
            shotPower: 78,
            longShots: 80,
            volleys: 71,
            penalties: 72,

            vision: 88,
            crossing: 79,
            freeKickAccuracy: 81,
            shortPassing: 86,
            longPassing: 79,
            curve: 82,

            agility: 90,
            balance: 85,
            reactions: 86,
            ballControl: 86,
            driving: 88,
            composure: 84,

            interceptions: 55,
            headingAccuracy: 36,
            defensiveAwareness: 44,
            standingTackle: 58,
            slidingTackle: 49,

            jumping: 62,
            stamina: 85,
            strength: 57,
            aggression: 66,

            overallRating: 86,
            positionRating: 'PTD',
          },
          {
            name: 'Désiré Doué',
            photo: 'doue.png',
            banner: 'doue-banner.png',
            heightCm: 181,
            weightKg: 79,
            dominantFoot: 'right',

            pace: 83,
            shooting: 80,
            passing: 77,
            dribbling: 90,
            defense: 555,
            physical: 74,

            acceleration: 85, 
            sprintSpeed: 82,

            positioning: 81,
            finishing: 78,
            shotPower: 86,
            longShots: 83,
            volleys: 68,
            penalties: 71,

            vision: 78,
            crossing: 74,
            freeKickAccuracy: 68,
            shortPassing: 81,
            longPassing: 74,
            curve: 82,

            agility: 88,
            balance: 87,
            reactions: 85,
            ballControl: 89,
            driving: 91,
            composure: 89,

            interceptions: 59,
            headingAccuracy: 46,
            defensiveAwareness: 52,
            standingTackle: 60,
            slidingTackle: 52,

            jumping: 75,
            stamina: 80,
            strength: 77,
            aggression: 61,

            overallRating: 85,
            positionRating: 'PTD',
          },
          {
            name: 'Dayot Upamecano',
            photo: 'upamecano.png',
            banner: 'upamecano-banner.png',
            heightCm: 186,
            weightKg: 90,
            dominantFoot: 'right',

            pace: 77,
            shooting: 45,
            passing: 64,
            dribbling: 73,
            defense: 85,
            physical: 84,

            acceleration: 76, 
            sprintSpeed: 78,

            positioning: 47,
            finishing: 39,
            shotPower: 64,
            longShots: 42,
            volleys: 33,
            penalties: 39,

            vision: 58,
            crossing: 48,
            freeKickAccuracy: 28,
            shortPassing: 79,
            longPassing: 78,
            curve: 36,

            agility: 66,
            balance: 65,
            reactions: 84,
            ballControl: 76,
            driving: 72,
            composure: 74,

            interceptions: 86,
            headingAccuracy: 83,
            defensiveAwareness: 84,
            standingTackle: 84,
            slidingTackle: 82,

            jumping: 85,
            stamina: 73,
            strength: 87,
            aggression: 88,

            overallRating: 85,
            positionRating: 'ZAG',
          },
        ],
      },
    },
  })

  const argentinaTeam = await prisma.team.create({
    data: {
      name: 'Argentina',
      continent: 'América do Sul',
      isFeatured: true,
      thumbnail: 'arg-thumb.png',
      banner: 'arg-banner.png',
      flag: 'arg-flag.png',

      fifaRanking: 3,
      fifaPoints: 1874.81,
      titlesRank: 3,

      worldCupAppearances: 18,
      worldCupFinals: 6,
      worldCupTitles: 3,

      matches: 18,
      wins: 12,
      draws: 2,
      losses: 4,

      players: {
        create: [
          {
            name: 'Lionel Messi',
            photo: 'messi.png',
            banner: 'messi-banner.png',
            heightCm: 169,
            weightKg: 67,
            dominantFoot: 'left',

            pace: 78,
            shooting: 85,
            passing: 85,
            dribbling: 90,
            defense: 33,
            physical: 64,

            acceleration: 84, 
            sprintSpeed: 73,

            positioning: 86,
            finishing: 84,
            shotPower: 84,
            longShots: 87,
            volleys: 89,
            penalties: 75,

            vision: 87,
            crossing: 80,
            freeKickAccuracy: 93,
            shortPassing: 85,
            longPassing: 84,
            curve: 90,

            agility: 84,
            balance: 89,
            reactions: 80,
            ballControl: 94,
            driving: 89,
            composure: 92,

            interceptions: 40,
            headingAccuracy: 60,
            defensiveAwareness: 20,
            standingTackle: 35,
            slidingTackle: 24,

            jumping: 70,
            stamina: 70,
            strength: 68,
            aggression: 44,

            overallRating: 86,
            positionRating: 'MAT',
          },
          {
            name: 'Lautaro Martínez',
            photo: 'lautaro.png',
            banner: 'lautaro-banner.png',
            heightCm: 174,
            weightKg: 72,
            dominantFoot: 'right',

            pace: 81,
            shooting: 88,
            passing: 75,
            dribbling: 84,
            defense: 51,
            physical: 83,

            acceleration: 83, 
            sprintSpeed: 80,

            positioning: 93,
            finishing: 93,
            shotPower: 87,
            longShots: 80,
            volleys: 92,
            penalties: 74,

            vision: 79,
            crossing: 68,
            freeKickAccuracy: 65,
            shortPassing: 78,
            longPassing: 72,
            curve: 84,

            agility: 88,
            balance: 87,
            reactions: 92,
            ballControl: 84,
            driving: 81,
            composure: 88,

            interceptions: 48,
            headingAccuracy: 86,
            defensiveAwareness: 45,
            standingTackle: 50,
            slidingTackle: 45,

            jumping: 91,
            stamina: 86,
            strength: 80,
            aggression: 87,

            overallRating: 88,
            positionRating: 'ATA',
          },
          {
            name: 'Julián Alvarez',
            photo: 'julian.png',
            banner: 'julian-banner.png',
            heightCm: 170,
            weightKg: 71,
            dominantFoot: 'right',

            pace: 85,
            shooting: 87,
            passing: 81,
            dribbling: 87,
            defense: 57,
            physical: 79,

            acceleration: 86, 
            sprintSpeed: 85,

            positioning: 88,
            finishing: 88,
            shotPower: 88,
            longShots: 86,
            volleys: 84,
            penalties: 78,

            vision: 83,
            crossing: 77,
            freeKickAccuracy: 80,
            shortPassing: 83,
            longPassing: 78,
            curve: 87,

            agility: 87,
            balance: 87,
            reactions: 88,
            ballControl: 88,
            driving: 87,
            composure: 86,

            interceptions: 52,
            headingAccuracy: 78,
            defensiveAwareness: 60,
            standingTackle: 55,
            slidingTackle: 46,

            jumping: 86,
            stamina: 85,
            strength: 72,
            aggression: 86,

            overallRating: 87,
            positionRating: 'ATA',
          },
          {
            name: 'Exequiel Palacios',
            photo: 'palacios.png',
            banner: 'palacios-banner.png',
            heightCm: 178,
            weightKg: 69,
            dominantFoot: 'right',

            pace: 62,
            shooting: 76,
            passing: 80,
            dribbling: 82,
            defense: 81,
            physical: 71,

            acceleration: 72, 
            sprintSpeed: 53,

            positioning: 79,
            finishing: 74,
            shotPower: 81,
            longShots: 79,
            volleys: 63,
            penalties: 72,

            vision: 83,
            crossing: 70,
            freeKickAccuracy: 54,
            shortPassing: 86,
            longPassing: 84,
            curve: 73,

            agility: 78,
            balance: 79,
            reactions: 85,
            ballControl: 84,
            driving: 82,
            composure: 83,

            interceptions: 86,
            headingAccuracy: 67,
            defensiveAwareness: 80,
            standingTackle: 84,
            slidingTackle: 80,

            jumping: 74,
            stamina: 68,
            strength: 67,
            aggression: 84,

            overallRating: 84,
            positionRating: 'VOL',
          },
        ],
      },
    },
  })

  const spainTeam = await prisma.team.create({
    data: {
      name: 'Espanha',
      continent: 'Europa',
      isFeatured: true,
      thumbnail: 'spain-thumb.png',
      banner: 'spain-banner.png',
      flag: 'spain-flag.png',

      fifaRanking: 2,
      fifaPoints: 1876.40,
      titlesRank: 5,

      worldCupAppearances: 16,
      worldCupFinals: 1,
      worldCupTitles: 1,

      matches: 6,
      wins: 5,
      draws: 1,
      losses: 0,

      players: {
        create: [
          {
            name: 'Rodri',
            photo: 'rodri.png',
            banner: 'rodri-banner.png',
            heightCm: 190,
            weightKg: 82,
            dominantFoot: 'right',

            pace: 65,
            shooting: 80,
            passing: 86,
            dribbling: 84,
            defense: 86,
            physical: 85,

            acceleration: 65, 
            sprintSpeed: 65,

            positioning: 76,
            finishing: 74,
            shotPower: 92,
            longShots: 89,
            volleys: 71,
            penalties: 62,

            vision: 84,
            crossing: 76,
            freeKickAccuracy: 64,
            shortPassing: 93,
            longPassing: 91,
            curve: 86,

            agility: 66,
            balance: 67,
            reactions: 93,
            ballControl: 90,
            driving: 84,
            composure: 93,

            interceptions: 84,
            headingAccuracy: 81,
            defensiveAwareness: 88,
            standingTackle: 87,
            slidingTackle: 82,

            jumping: 83,
            stamina: 91,
            strength: 83,
            aggression: 85,

            overallRating: 90,
            positionRating: 'MEI',
          },
          {
            name: 'Lamine Yamal',
            photo: 'yamal.png',
            banner: 'yamal-banner.png',
            heightCm: 180,
            weightKg: 72,
            dominantFoot: 'left',

            pace: 85,
            shooting: 81,
            passing: 86,
            dribbling: 90,
            defense: 23,
            physical: 53,

            acceleration: 88, 
            sprintSpeed: 83,

            positioning: 88,
            finishing: 83,
            shotPower: 83,
            longShots: 82,
            volleys: 65,
            penalties: 69,

            vision: 88,
            crossing: 89,
            freeKickAccuracy: 65,
            shortPassing: 88,
            longPassing: 84,
            curve: 87,

            agility: 93,
            balance: 81,
            reactions: 88,
            ballControl: 90,
            driving: 92,
            composure: 84,

            interceptions: 18,
            headingAccuracy: 33,
            defensiveAwareness: 23,
            standingTackle: 20,
            slidingTackle: 28,

            jumping: 58,
            stamina: 73,
            strength: 45,
            aggression: 45,

            overallRating: 89,
            positionRating: 'PTD',
          },
          {
            name: 'Pedri',
            photo: 'pedri.png',
            banner: 'pedri-banner.png',
            heightCm: 174,
            weightKg: 60,
            dominantFoot: 'right',

            pace: 77,
            shooting: 73,
            passing: 85,
            dribbling: 91,
            defense: 78,
            physical: 77,

            acceleration: 79, 
            sprintSpeed: 76,

            positioning: 86,
            finishing: 77,
            shotPower: 68,
            longShots: 76,
            volleys: 56,
            penalties: 53,

            vision: 91,
            crossing: 76,
            freeKickAccuracy: 62,
            shortPassing: 90,
            longPassing: 88,
            curve: 79,

            agility: 89,
            balance: 92,
            reactions: 87,
            ballControl: 91,
            driving: 91,
            composure: 90,

            interceptions: 87,
            headingAccuracy: 50,
            defensiveAwareness: 74,
            standingTackle: 85,
            slidingTackle: 79,

            jumping: 72,
            stamina: 90,
            strength: 73,
            aggression: 72,

            overallRating: 89,
            positionRating: 'MEI',
          },
          {
            name: 'Carvajal',
            photo: 'carvajal.png',
            banner: 'carvajal-banner.png',
            heightCm: 173,
            weightKg: 73,
            dominantFoot: 'right',

            pace: 80,
            shooting: 58,
            passing: 79,
            dribbling: 81,
            defense: 81,
            physical: 79,

            acceleration: 81, 
            sprintSpeed: 80,

            positioning: 75,
            finishing: 56,
            shotPower: 68,
            longShots: 52,
            volleys: 53,
            penalties: 45,

            vision: 78,
            crossing: 84,
            freeKickAccuracy: 47,
            shortPassing: 84,
            longPassing: 74,
            curve: 77,

            agility: 78,
            balance: 84,
            reactions: 83,
            ballControl: 84,
            driving: 78,
            composure: 83,

            interceptions: 81,
            headingAccuracy: 76,
            defensiveAwareness: 80,
            standingTackle: 84,
            slidingTackle: 83,

            jumping: 85,
            stamina: 84,
            strength: 74,
            aggression: 85,

            overallRating: 85,
            positionRating: 'LTD',
          },
        ],
      },
    },
  })

  const englandTeam = await prisma.team.create({
    data: {
      name: 'Inglaterra',
      continent: 'Europa',
      isFeatured: false,
      thumbnail: 'england-thumb.png',
      banner: 'england-banner.png',
      flag: 'england-flag.png',

      fifaRanking: 4,
      fifaPoints: 1825.97,
      titlesRank: 5,

      worldCupAppearances: 16,
      worldCupFinals: 1,
      worldCupTitles: 1,

      matches: 8,
      wins: 8,
      draws: 0,
      losses: 0,

      players: {
        create: [
          {
            name: 'Jude Bellingham',
            photo: 'bellingham.png',
            banner: 'bellingham-banner.png',
            heightCm: 186,
            weightKg: 75,
            dominantFoot: 'right',

            pace: 80,
            shooting: 86,
            passing: 83,
            dribbling: 90,
            defense: 78,
            physical: 85,

            acceleration: 81, 
            sprintSpeed: 80,

            positioning: 91,
            finishing: 88,
            shotPower: 86,
            longShots: 87,
            volleys: 77,
            penalties: 74,

            vision: 90,
            crossing: 66,
            freeKickAccuracy: 68,
            shortPassing: 90,
            longPassing: 89,
            curve: 73,

            agility: 83,
            balance: 83,
            reactions: 91,
            ballControl: 91,
            driving: 91,
            composure: 90,

            interceptions: 82,
            headingAccuracy: 75,
            defensiveAwareness: 77,
            standingTackle: 79,
            slidingTackle: 77,

            jumping: 85,
            stamina: 94,
            strength: 80,
            aggression: 85,

            overallRating: 90,
            positionRating: 'MEI',
          },
          {
            name: 'Harry Kane',
            photo: 'kane.png',
            banner: 'kane-banner.png',
            heightCm: 188,
            weightKg: 86,
            dominantFoot: 'right',

            pace: 64,
            shooting: 92,
            passing: 83,
            dribbling: 82,
            defense: 48,
            physical: 82,

            acceleration: 62, 
            sprintSpeed: 66,

            positioning: 94,
            finishing: 93,
            shotPower: 91,
            longShots: 89,
            volleys: 89,
            penalties: 95,

            vision: 86,
            crossing: 80,
            freeKickAccuracy: 69,
            shortPassing: 86,
            longPassing: 79,
            curve: 82,

            agility: 67,
            balance: 72,
            reactions: 94,
            ballControl: 87,
            driving: 80,
            composure: 92,

            interceptions: 42,
            headingAccuracy: 90,
            defensiveAwareness: 46,
            standingTackle: 44,
            slidingTackle: 38,

            jumping: 87,
            stamina: 76,
            strength: 86,
            aggression: 80,

            overallRating: 89,
            positionRating: 'ATA',
          },
          {
            name: 'Cole Palmer',
            photo: 'palmer.png',
            banner: 'palmer-banner.png',
            heightCm: 185,
            weightKg: 76,
            dominantFoot: 'left',

            pace: 75,
            shooting: 83,
            passing: 87,
            dribbling: 87,
            defense: 50,
            physical: 65,

            acceleration: 76, 
            sprintSpeed: 75,

            positioning: 87,
            finishing: 82,
            shotPower: 85,
            longShots: 85,
            volleys: 70,
            penalties: 90,

            vision: 89,
            crossing: 85,
            freeKickAccuracy: 81,
            shortPassing: 87,
            longPassing: 86,
            curve: 86,

            agility: 80,
            balance: 78,
            reactions: 88,
            ballControl: 89,
            driving: 87,
            composure: 89,

            interceptions: 50,
            headingAccuracy: 60,
            defensiveAwareness: 50,
            standingTackle: 50,
            slidingTackle: 40,

            jumping: 71,
            stamina: 83,
            strength: 60,
            aggression: 55,

            overallRating: 87,
            positionRating: 'MAT',
          },
          {
            name: 'Alexander-Arnold',
            photo: 'alexander.png',
            banner: 'alexander-banner.png',
            heightCm: 180,
            weightKg: 69,
            dominantFoot: 'right',

            pace: 76,
            shooting: 72,
            passing: 89,
            dribbling: 80,
            defense: 80,
            physical: 74,

            acceleration: 72, 
            sprintSpeed: 79,

            positioning: 79,
            finishing: 64,
            shotPower: 85,
            longShots: 76,
            volleys: 71,
            penalties: 66,

            vision: 88,
            crossing: 93,
            freeKickAccuracy: 85,
            shortPassing: 87,
            longPassing: 91,
            curve: 91,

            agility: 73,
            balance: 72,
            reactions: 85,
            ballControl: 85,
            driving: 79,
            composure: 82,

            interceptions: 84,
            headingAccuracy: 69,
            defensiveAwareness: 78,
            standingTackle: 82,
            slidingTackle: 79,

            jumping: 75,
            stamina: 89,
            strength: 68,
            aggression: 70,

            overallRating: 86,
            positionRating: 'LTD',
          },
          {
            name: 'Phil Foden',
            photo: 'foden.png',
            banner: 'foden-banner.png',
            heightCm: 171,
            weightKg: 70,
            dominantFoot: 'left',

            pace: 81,
            shooting: 81,
            passing: 82,
            dribbling: 89,
            defense: 57,
            physical: 57,

            acceleration: 83, 
            sprintSpeed: 79,

            positioning: 83,
            finishing: 82,
            shotPower: 89,
            longShots: 81,
            volleys: 59,
            penalties: 64,

            vision: 83,
            crossing: 80,
            freeKickAccuracy: 74,
            shortPassing: 82,
            longPassing: 81,
            curve: 88,

            agility: 92,
            balance: 92,
            reactions: 82,
            ballControl: 89,
            driving: 89,
            composure: 85,

            interceptions: 59,
            headingAccuracy: 47,
            defensiveAwareness: 60,
            standingTackle: 59,
            slidingTackle: 47,

            jumping: 59,
            stamina: 83,
            strength: 41,
            aggression: 64,

            overallRating: 85,
            positionRating: 'MEI',
          },
        ],
      },
    },
  })

  const portugalTeam = await prisma.team.create({
    data: {
      name: 'Portugal',
      continent: 'Europa',
      isFeatured: false,
      thumbnail: 'portugal-thumb.png',
      banner: 'portugal-banner.png',
      flag: 'portugal-flag.png',

      fifaRanking: 5,
      fifaPoints: 1763.83,
      titlesRank: 10,

      worldCupAppearances: 8,
      worldCupFinals: 0,
      worldCupTitles: 0,

      matches: 6,
      wins: 4,
      draws: 1,
      losses: 1,

      players: {
        create: [
          {
            name: 'Cristiano Ronaldo',
            photo: 'ronaldo.png',
            banner: 'ronaldo-banner.png',
            heightCm: 187,
            weightKg: 85,
            dominantFoot: 'right',

            pace: 76,
            shooting: 88,
            passing: 76,
            dribbling: 80,
            defense: 34,
            physical: 76,

            acceleration: 73, 
            sprintSpeed: 78,

            positioning: 89,
            finishing: 88,
            shotPower: 91,
            longShots: 84,
            volleys: 84,
            penalties: 91,

            vision: 76,
            crossing: 78,
            freeKickAccuracy: 81,
            shortPassing: 76,
            longPassing: 70,
            curve: 79,

            agility: 76,
            balance: 63,
            reactions: 82,
            ballControl: 85,
            driving: 77,
            composure: 91,

            interceptions: 29,
            headingAccuracy: 87,
            defensiveAwareness: 24,
            standingTackle: 32,
            slidingTackle: 24,

            jumping: 95,
            stamina: 77,
            strength: 80,
            aggression: 62,

            overallRating: 85,
            positionRating: 'ATA',
          },
          {
            name: 'Vitinha',
            photo: 'vitinha.png',
            banner: 'vitinha-banner.png',
            heightCm: 172,
            weightKg: 64,
            dominantFoot: 'right',

            pace: 72,
            shooting: 80,
            passing: 86,
            dribbling: 90,
            defense: 75,
            physical: 70,

            acceleration: 75, 
            sprintSpeed: 69,

            positioning: 81,
            finishing: 80,
            shotPower: 77,
            longShots: 84,
            volleys: 62,
            penalties: 88,

            vision: 90,
            crossing: 78,
            freeKickAccuracy: 69,
            shortPassing: 90,
            longPassing: 89,
            curve: 81,

            agility: 91,
            balance: 89,
            reactions: 88,
            ballControl: 88,
            driving: 91,
            composure: 88,

            interceptions: 85,
            headingAccuracy: 52,
            defensiveAwareness: 74,
            standingTackle: 79,
            slidingTackle: 69,

            jumping: 66,
            stamina: 87,
            strength: 59,
            aggression: 77,

            overallRating: 89,
            positionRating: 'VOL',
          },
          {
            name: 'Bruno Fernandes',
            photo: 'bruno.png',
            banner: 'bruno-banner.png',
            heightCm: 179,
            weightKg: 69,
            dominantFoot: 'right',

            pace: 67,
            shooting: 83,
            passing: 89,
            dribbling: 83,
            defense: 65,
            physical: 75,

            acceleration: 68, 
            sprintSpeed: 66,

            positioning: 86,
            finishing: 80,
            shotPower: 86,
            longShots: 85,
            volleys: 87,
            penalties: 91,

            vision: 92,
            crossing: 85,
            freeKickAccuracy: 85,
            shortPassing: 90,
            longPassing: 90,
            curve: 85,

            agility: 78,
            balance: 73,
            reactions: 90,
            ballControl: 87,
            driving: 82,
            composure: 85,

            interceptions: 63,
            headingAccuracy: 63,
            defensiveAwareness: 62,
            standingTackle: 71,
            slidingTackle: 66,

            jumping: 69,
            stamina: 95,
            strength: 61,
            aggression: 84,

            overallRating: 87,
            positionRating: 'MEI',
          },
        ],
      },
    },
  })

  const hollandTeam = await prisma.team.create({
    data: {
      name: 'Holanda',
      continent: 'Europa',
      isFeatured: false,
      thumbnail: 'holland-thumb.png',
      banner: 'holland-banner.png',
      flag: 'holland-flag.png',

      fifaRanking: 7,
      fifaPoints: 1757.87,
      titlesRank: 10,

      worldCupAppearances:11,
      worldCupFinals: 3,
      worldCupTitles: 0,

      matches: 8,
      wins: 6,
      draws: 2,
      losses: 0,

      players: {
        create: [
          {
            name: 'Memphis Depay',
            photo: 'depay.png',
            banner: 'depay-banner.png',
            heightCm: 176,
            weightKg: 78,
            dominantFoot: 'right',

            pace: 83,
            shooting: 84,
            passing: 82,
            dribbling: 86,
            defense: 30,
            physical: 79,

            acceleration: 82, 
            sprintSpeed: 84,

            positioning: 85,
            finishing: 84,
            shotPower: 87,
            longShots: 83,
            volleys: 75,
            penalties: 76,

            vision: 85,
            crossing: 84,
            freeKickAccuracy: 83,
            shortPassing: 81,
            longPassing: 76,
            curve: 85,

            agility: 80,
            balance: 81,
            reactions: 84,
            ballControl: 87,
            driving: 87,
            composure: 80,

            interceptions: 28,
            headingAccuracy: 65,
            defensiveAwareness: 23,
            standingTackle: 31,
            slidingTackle: 20,

            jumping: 69,
            stamina: 79,
            strength: 83,
            aggression: 72,

            overallRating: 85,
            positionRating: 'ATA',
          },
          {
            name: 'Virgil Van Dijk',
            photo: 'virgil.png',
            banner: 'virgil-banner.png',
            heightCm: 193,
            weightKg: 92,
            dominantFoot: 'right',

            pace: 73,
            shooting: 60,
            passing: 72,
            dribbling: 72,
            defense: 90,
            physical: 87,

            acceleration: 66, 
            sprintSpeed: 78,

            positioning: 47,
            finishing: 52,
            shotPower: 81,
            longShots: 64,
            volleys: 45,
            penalties: 62,

            vision: 70,
            crossing: 53,
            freeKickAccuracy: 70,
            shortPassing: 80,
            longPassing: 83,
            curve: 60,

            agility: 54,
            balance: 50,
            reactions: 90,
            ballControl: 77,
            driving: 70,
            composure: 90,

            interceptions: 91,
            headingAccuracy: 88,
            defensiveAwareness: 91,
            standingTackle: 91,
            slidingTackle: 87,

            jumping: 89,
            stamina: 75,
            strength: 93,
            aggression: 85,

            overallRating: 90,
            positionRating: 'ZAG',
          },
        ],
      },
    },
  })

  const italyTeam = await prisma.team.create({
    data: {
      name: 'Itália',
      continent: 'Europa',
      isFeatured: false,
      thumbnail: 'italy-thumb.png',
      banner: 'italy-banner.png',
      flag: 'italy-flag.png',

      fifaRanking: 12,
      fifaPoints: 1700.37,
      titlesRank: 10,

      worldCupAppearances: 18,
      worldCupFinals: 6,
      worldCupTitles: 4,

      matches: 8,
      wins: 6,
      draws: 0,
      losses: 2,

      players: {
        create: [
          {
            name: 'Alessandro Bastoni',
            photo: 'bastoni.png',
            banner: 'bastoni-banner.png',
            heightCm: 190,
            weightKg: 75,
            dominantFoot: 'left',

            pace: 74,
            shooting: 46,
            passing: 75,
            dribbling: 76,
            defense: 88,
            physical: 82,

            acceleration: 71, 
            sprintSpeed: 77,

            positioning: 39,
            finishing: 39,
            shotPower: 59,
            longShots: 48,
            volleys: 44,
            penalties: 50,

            vision: 72,
            crossing: 72,
            freeKickAccuracy: 41,
            shortPassing: 82,
            longPassing: 84,
            curve: 64,

            agility: 64,
            balance: 60,
            reactions: 89,
            ballControl: 82,
            driving: 74,
            composure: 85,

            interceptions: 88,
            headingAccuracy: 86,
            defensiveAwareness: 87,
            standingTackle: 90,
            slidingTackle: 84,

            jumping: 88,
            stamina: 81,
            strength: 81,
            aggression: 83,

            overallRating: 87,
            positionRating: 'ZAG',
          },
          {
            name: 'Nicolò Barella',
            photo: 'barella.png',
            banner: 'barella-banner.png',
            heightCm: 175,
            weightKg: 68,
            dominantFoot: 'right',

            pace: 80,
            shooting: 78,
            passing: 84,
            dribbling: 86,
            defense: 81,
            physical: 76,

            acceleration: 82, 
            sprintSpeed: 78,

            positioning: 84,
            finishing: 77,
            shotPower: 80,
            longShots: 79,
            volleys: 80,
            penalties: 73,

            vision: 85,
            crossing: 79,
            freeKickAccuracy: 67,
            shortPassing: 89,
            longPassing: 87,
            curve: 79,

            agility: 91,
            balance: 88,
            reactions: 91,
            ballControl: 87,
            driving: 84,
            composure: 88,

            interceptions: 85,
            headingAccuracy: 60,
            defensiveAwareness: 80,
            standingTackle: 85,
            slidingTackle: 80,

            jumping: 75,
            stamina: 89,
            strength: 66,
            aggression: 87,

            overallRating: 87,
            positionRating: 'MEI',
          },
        ],
      },
    },
  })

  const germanyTeam = await prisma.team.create({
    data: {
      name: 'Alemanha',
      continent: 'Europa',
      isFeatured: false,
      thumbnail: 'germany-thumb.png',
      banner: 'germany-banner.png',
      flag: 'germany-flag.png',

      fifaRanking: 10,
      fifaPoints: 1730.37,
      titlesRank: 2,

      worldCupAppearances: 20,
      worldCupFinals: 8,
      worldCupTitles: 4,

      matches: 6,
      wins: 5,
      draws: 0,
      losses: 1,

      players: {
        create: [
          {
            name: 'Joshua Kimmich',
            photo: 'kimmich.png',
            banner: 'kimmich-banner.png',
            heightCm: 177,
            weightKg: 75,
            dominantFoot: 'right',

            pace: 72,
            shooting: 74,
            passing: 89,
            dribbling: 84,
            defense: 83,
            physical: 79,

            acceleration: 75, 
            sprintSpeed: 70,

            positioning: 78,
            finishing: 68,
            shotPower: 78,
            longShots: 83,
            volleys: 69,
            penalties: 71,

            vision: 56,
            crossing: 92,
            freeKickAccuracy: 79,
            shortPassing: 89,
            longPassing: 92,
            curve: 85,

            agility: 83,
            balance: 84,
            reactions: 89,
            ballControl: 86,
            driving: 82,
            composure: 86,

            interceptions: 85,
            headingAccuracy: 72,
            defensiveAwareness: 82,
            standingTackle: 86,
            slidingTackle: 85,

            jumping: 77,
            stamina: 92,
            strength: 69,
            aggression: 89,

            overallRating: 89,
            positionRating: 'VOL',
          },
          {
            name: 'Jamal Musiala',
            photo: 'musiala.png',
            banner: 'musiala-banner.png',
            heightCm: 184,
            weightKg: 72,
            dominantFoot: 'right',

            pace: 80,
            shooting: 82,
            passing: 80,
            dribbling: 90,
            defense: 66,
            physical: 65,

            acceleration: 85, 
            sprintSpeed: 75,

            positioning: 88,
            finishing: 86,
            shotPower: 80,
            longShots: 82,
            volleys: 75,
            penalties: 61,

            vision: 84,
            crossing: 70,
            freeKickAccuracy: 59,
            shortPassing: 87,
            longPassing: 79,
            curve: 75,

            agility: 94,
            balance: 93,
            reactions: 89,
            ballControl: 85,
            driving: 94,
            composure: 83,

            interceptions: 65,
            headingAccuracy: 75,
            defensiveAwareness: 64,
            standingTackle: 66,
            slidingTackle: 61,

            jumping: 80,
            stamina: 73,
            strength: 61,
            aggression: 59,

            overallRating: 88,
            positionRating: 'MEI',
          },
          {
            name: 'Antonio Rüdiger',
            photo: 'rudiger.png',
            banner: 'rudiger-banner.png',
            heightCm: 190,
            weightKg: 85,
            dominantFoot: 'right',

            pace: 79,
            shooting: 55,
            passing: 72,
            dribbling: 70,
            defense: 84,
            physical: 86,

            acceleration: 70, 
            sprintSpeed: 87,

            positioning: 54,
            finishing: 40,
            shotPower: 84,
            longShots: 67,
            volleys: 34,
            penalties: 40,

            vision: 61,
            crossing: 68,
            freeKickAccuracy: 56,
            shortPassing: 83,
            longPassing: 81,
            curve: 50,

            agility: 56,
            balance: 50,
            reactions: 85,
            ballControl: 74,
            driving: 69,
            composure: 80,

            interceptions: 83,
            headingAccuracy: 83,
            defensiveAwareness: 84,
            standingTackle: 85,
            slidingTackle: 84,

            jumping: 89,
            stamina: 70,
            strength: 91,
            aggression: 93,

            overallRating: 86,
            positionRating: 'ZAG',
          },
        ],
      },
    },
  })

  const uruguayTeam = await prisma.team.create({
    data: {
      name: 'Uruguai',
      continent: 'América do Sul',
      isFeatured: false,
      thumbnail: 'uruguay-thumb.png',
      banner: 'uruguay-banner.png',
      flag: 'uruguay-flag.png',

      fifaRanking: 17,
      fifaPoints: 1673.07,
      titlesRank: 4,

      worldCupAppearances: 14,
      worldCupFinals: 2,
      worldCupTitles: 2,

      matches: 18,
      wins: 7,
      draws: 7,
      losses: 4,

      players: {
        create: [
          {
            name: 'Federico Valverde',
            photo: 'valverde.png',
            banner: 'valverde-banner.png',
            heightCm: 182,
            weightKg: 74,
            dominantFoot: 'right',

            pace: 88,
            shooting: 84,
            passing: 84,
            dribbling: 84,
            defense: 83,
            physical: 85,

            acceleration: 84, 
            sprintSpeed: 92,

            positioning: 86,
            finishing: 80,
            shotPower: 91,
            longShots: 91,
            volleys: 78,
            penalties: 59,

            vision: 86,
            crossing: 78,
            freeKickAccuracy: 69,
            shortPassing: 88,
            longPassing: 88,
            curve: 76,

            agility: 77,
            balance: 68,
            reactions: 89,
            ballControl: 88,
            driving: 84,
            composure: 84,

            interceptions: 86,
            headingAccuracy: 63,
            defensiveAwareness: 82,
            standingTackle: 87,
            slidingTackle: 86,

            jumping: 82,
            stamina: 93,
            strength: 82,
            aggression: 81,

            overallRating: 89,
            positionRating: 'MEI',
          },
          {
            name: 'De Arrascaeta',
            photo: 'arrascaeta.png',
            banner: 'arrascaeta-banner.png',
            heightCm: 172,
            weightKg: 67,
            dominantFoot: 'right',

            pace: 83,
            shooting: 81,
            passing: 83,
            dribbling: 84,
            defense: 41,
            physical: 56,

            acceleration: 86, 
            sprintSpeed: 81,

            positioning: 81,
            finishing: 82,
            shotPower: 78,
            longShots: 83,
            volleys: 77,
            penalties: 81,

            vision: 88,
            crossing: 80,
            freeKickAccuracy: 77,
            shortPassing: 84,
            longPassing: 77,
            curve: 88,

            agility: 83,
            balance: 84,
            reactions: 84,
            ballControl: 85,
            driving: 86,
            composure: 69,

            interceptions: 30,
            headingAccuracy: 57,
            defensiveAwareness: 33,
            standingTackle: 48,
            slidingTackle: 51,

            jumping: 65,
            stamina: 72,
            strength: 50,
            aggression: 47,

            overallRating: 84,
            positionRating: 'MAT',
          },
        ],
      },
    },
  })

  // ======================
  // GROUPS
  // ======================
  await prisma.group.createMany({
    data: [
      {
        name: "Grupo A",
        letter: "A",
        isFeatured: false,
        teams: [
          { name: "México", flag: "mexico.png" },
          { name: "África do Sul", flag: "south-africa.png" },
          { name: "Coreia do Sul", flag: "south-korea.png" },
          { name: "República Tcheca", flag: "czech-republic.png" }
        ]
      },
      {
        name: "Grupo B",
        letter: "B",
        isFeatured: false,
        teams: [
          { name: "Canadá", flag: "canada.png" },
          { name: "Bósnia", flag: "bosnia.png" },
          { name: "Qatar", flag: "qatar.png" },
          { name: "Suíça", flag: "switzerland.png" }
        ]
      },
      {
        name: "Grupo C",
        letter: "C",
        isFeatured: true,
        teams: [
          { name: "Brasil", flag: "brazil.png" },
          { name: "Marrocos", flag: "morocco.png" },
          { name: "Haiti", flag: "haiti.png" },
          { name: "Escócia", flag: "scotland.png" }
        ]
      },
      {
        name: "Grupo D",
        letter: "D",
        isFeatured: false,
        teams: [
          { name: "EUA", flag: "usa.png" },
          { name: "Paraguai", flag: "paraguay.png" },
          { name: "Austrália", flag: "australia.png" },
          { name: "Turquia", flag: "turkey.png" }
        ]
      },
      {
        name: "Grupo E",
        letter: "E",
        isFeatured: false,
        teams: [
          { name: "Alemanha", flag: "germany.png" },
          { name: "Curaçao", flag: "curacao.png" },
          { name: "Costa do Marfim", flag: "ivory-coast.png" },
          { name: "Equador", flag: "ecuador.png" }
        ]
      },
      {
        name: "Grupo F",
        letter: "F",
        isFeatured: false,
        teams: [
          { name: "Holanda", flag: "netherlands.png" },
          { name: "Japão", flag: "japan.png" },
          { name: "Suécia", flag: "sweden.png" },
          { name: "Tunísia", flag: "tunisia.png" }
        ]
      },
      {
        name: "Grupo G",
        letter: "G",
        isFeatured: false,
        teams: [
          { name: "Bélgica", flag: "belgium.png" },
          { name: "Egito", flag: "egypt.png" },
          { name: "Irã", flag: "iran.png" },
          { name: "Nova Zelândia", flag: "new-zealand.png" }
        ]
      },
      {
        name: "Grupo H",
        letter: "H",
        isFeatured: true,
        teams: [
          { name: "Espanha", flag: "spain.png" },
          { name: "Cabo Verde", flag: "cape-verde.png" },
          { name: "Arábia Saudita", flag: "saudi-arabia.png" },
          { name: "Uruguai", flag: "uruguay.png" }
        ]
      },
      {
        name: "Grupo I",
        letter: "I",
        isFeatured: true,
        teams: [
          { name: "França", flag: "france.png" },
          { name: "Senegal", flag: "senegal.png" },
          { name: "Iraque", flag: "iraq.png" },
          { name: "Noruega", flag: "norway.png" }
        ]
      },
      {
        name: "Grupo J",
        letter: "J",
        isFeatured: true,
        teams: [
          { name: "Argentina", flag: "argentina.png" },
          { name: "Argélia", flag: "algeria.png" },
          { name: "Áustria", flag: "austria.png" },
          { name: "Jordânia", flag: "jordan.png" }
        ]
      },
      {
        name: "Grupo K",
        letter: "K",
        isFeatured: false,
        teams: [
          { name: "Portugal", flag: "portugal.png" },
          { name: "RD Congo", flag: "dr-congo.png" },
          { name: "Uzbequistão", flag: "uzbekistan.png" },
          { name: "Colômbia", flag: "colombia.png" }
        ]
      },
      {
        name: "Grupo L",
        letter: "L",
        isFeatured: false,
        teams: [
          { name: "Inglaterra", flag: "england.png" },
          { name: "Croácia", flag: "croatia.png" },
          { name: "Gana", flag: "ghana.png" },
          { name: "Panamá", flag: "panama.png" }
        ]
      }
    ]
  });

  // ======================
  // GALLERY
  // ======================
  await prisma.galleryImage.createMany({
    data: [
      { image: 'gallery1.png' },
      { image: 'gallery2.png' },
      { image: 'gallery3.png' },
      { image: 'gallery4.png' },
      { image: 'gallery5.png' },
      { image: 'gallery6.png' },
      { image: 'gallery7.png' },
      { image: 'gallery8.png' },
      { image: 'gallery9.png' },
    ],
  })

  console.log('🌱 Seed executado com sucesso!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })