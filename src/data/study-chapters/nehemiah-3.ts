import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Nehemiah 3 — The Builders of the Wall
 *
 * A beautiful and deliberate listing of builders. Each crew is named — priests,
 * nobles, perfumers, goldsmiths, merchants, men from neighboring towns — and each
 * is assigned to build their portion of the wall. Some build over against their
 * own house. Shallum's daughters build alongside their father. The nobles of Tekoa
 * refuse, though their commoners work. Every name is recorded. In this careful
 * enumeration of every builder, we see God&apos;s meticulous attention: He knows
 * every faithful worker. He sees every person who has a part in His building.
 */
export const NEHEMIAH_3: RichChapterContent = {
  bookSlug: 'nehemiah',
  bookName: 'Nehemiah',
  chapter: 3,

  estimatedMinutes: { beginner: 6, intermediate: 10, deep: 15 },
  intros: [
    'The wall lies in ruins. Jerusalem&apos;s enemies are watching. The people are discouraged. And then Nehemiah does what a good leader does: he organizes. He assigns sections. He calls each builder by name. In Nehemiah 3, we watch as the broken wall of Jerusalem is restored — not by a single hero, but by named individuals, each working their own portion. The text is long, detailed, filled with names that most readers skip over. But in that very detail lies a profound message: every person matters. Every builder is seen and recorded.',
  ],

  sections: [
    /* ─── Nehemiah 3:1–2 — Eliashib and the Priests Build the Sheep Gate ─────── */
    {
      ref: 'Nehemiah 3:1–2',
      title: 'The High Priest and His Brethren Build the Sheep Gate',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 1,
              spans: [
                t('Then Eliashib the high priest rose up with his brethren the priests, and they builded the sheep gate; they sanctified it, and set up the doors of it; even unto the tower of Meah they sanctified it, unto the tower of Hananeel.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And next unto him builded the men of Jericho. And next to them builded Zaccur the son of Imri.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'eliashib-first',
          html:
            'The wall begins with the high priest. Eliashib, Nehemiah&apos;s contemporary, leads the priests in building the Sheep Gate — the very gate through which the sacrificial animals entered the temple. It is fitting. The priests, who sanctify the people through sacrifice, begin by sanctifying the gate itself. They do not merely build; they consecrate what they build. The work starts where the people draw near to God.',
        },
        {
          kind: 'hebrew',
          id: 'shaar-hatson',
          title: 'Shaar ha-Tson — "The Sheep Gate"',
          script: 'שַׁ֫עַר הַצֹּאן',
          translit: '<strong>Sha&apos;ar ha-Tson</strong> · the gate of the flock/sheep',
          description:
            'The Sheep Gate is where the sacrificial animals entered the temple area. In John&apos;s Gospel, this gate is linked to the healing pool of Bethesda, near which Jesus encounters the man healed of his infirmity (John 5:2). The gate&apos;s name carries weight: it is the entry point for the lambs, the symbol of innocent sacrifice and atonement. When Nehemiah&apos;s wall begins here, the builders are starting at the place most closely associated with redemption through sacrifice.',
        },
        {
          kind: 'commentary',
          id: 'sanctified-gate',
          html:
            'Notice that the text says the priests "sanctified" the gate — they did more than build it. They consecrated it, set apart what they had made for a holy purpose. This is priestly work: to make the profane sacred, to consecrate the common for use in the presence of God. In building, they are also blessing.',
        },
        {
          kind: 'carry',
          html:
            'When we begin a work for God, do we sanctify it? Do we set it apart for His purpose, or do we rush into labor as if it were merely practical? The priests teach us that building is itself an act of worship when it is done with intentionality and blessing.',
        },
        {
          kind: 'reflection',
          id: 'priests-build',
          prompt: 'When you undertake work that serves others or builds something for your community, do you set it apart as sacred — or do you treat it as mere labor? What would it look like to sanctify your work?',
        },
      ],
    },

    /* ─── Nehemiah 3:3–5 — Named Families and Trades ─────────────────────────── */
    {
      ref: 'Nehemiah 3:3–5',
      title: 'The Named Builders — Families, Trades, and Neighbors',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 3,
              spans: [
                t('But the fish gate did the sons of Hassenaah build, who also laid the beams thereof, and set up the doors thereof, the locks thereof, and the bars thereof.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And next unto them repaired Meremoth the son of Urijah, the son of Koz. And next unto them repaired Meshullam the son of Berechiah, the son of Meshezabeel. And next unto them repaired Zadok the son of Baana.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And next unto them the Tekoites repaired; but their nobles put not their necks to the work of their Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'fish-gate',
          html:
            'The Fish Gate, where the traders brought their goods into the city. Each section of wall has a different crew, each responsible for their own portion. The sons of Hassenaah are entrusted with not just the gate itself, but the beams, the doors, the locks, and the bars — the complete security of the entrance. They own their work fully.',
        },
        {
          kind: 'commentary',
          id: 'named-builders',
          html:
            'Notice the lineages: Meremoth son of Urijah son of Koz, Meshullam son of Berechiah son of Meshezabeel, Zadok son of Baana. The text traces bloodlines. These are not anonymous workers. They are the sons of their fathers, and their fathers&apos; names are remembered too. In this genealogy is a statement: we see you. We know who you are. Your work matters because you matter.',
        },
        {
          kind: 'hebrew',
          id: 'chazaq',
          title: 'Chazaq — "To Repair" or "To Strengthen"',
          script: 'חָזַק',
          translit: '<strong>Chazaq</strong> · to be strong, strengthen, repair, make firm',
          description:
            'The word used throughout Nehemiah 3 for the builders&apos; work is "chazaq" — to strengthen, to make firm, to repair. It is the same root as the name Hezekiah, meaning "God is strong." Every act of repair is an act of strengthening — not merely fixing what is broken, but making it stronger than before. The work of rebuilding is an act of faith in God&apos;s strength.',
        },
        {
          kind: 'commentary',
          id: 'tekoites-nobles',
          html:
            'Here is a striking note: "The Tekoites repaired, but their nobles put not their necks to the work." The commoners from Tekoa worked faithfully. Their leaders did not. This is a rebuke clothed in narrative: nobility of birth does not guarantee noble action. A willingness to "put one&apos;s neck to the work" — to risk, to labor, to be vulnerable — is what counts. Some of the greatest workers were those without rank.',
        },
        {
          kind: 'carry',
          html:
            'What does it mean to "put your neck to the work"? It means to be vulnerable, to risk, to commit yourself fully to something larger than yourself. The Tekoan commoners did what their leaders would not. In your own work — whether in your home, your church, your community — do you put your neck to the work, or do you stand back?',
        },
        {
          kind: 'reflection',
          id: 'named-workers',
          prompt: 'The text takes time to name every builder and what they built. Who in your life has done faithfully what others refused to do? How could you honor their work?',
        },
      ],
    },

    /* ─── Nehemiah 3:8–11 — Women Builders: Shallum and His Daughters ──────────── */
    {
      ref: 'Nehemiah 3:8–11',
      title: 'Shallum and His Daughters Build the Wall',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 8,
              spans: [
                t('Next unto him repaired Uzziel the son of Harhaiah, of the goldsmiths. Next unto him also repaired Hananiah the son of one of the apothecaries, and they fortified Jerusalem unto the broad wall.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And next unto them repaired Rephaiah the son of Hur, the ruler of the half part of Jerusalem.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And next unto them repaired Jedaiah the son of Harumaph, even over against his house. And next unto him repaired Hattush the son of Hashabniah.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Malchijah the son of Harim, and Hasshub the son of Pahathmoab, repaired the other piece, and the tower of the furnaces.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'goldsmiths-perfumers',
          html:
            'The text mentions goldsmiths and perfumers — artisans, skilled workers in fine crafts. They set aside their delicate work to build with stone and mortar. This tells us something important: in a moment of community need, all skills are needed. The goldsmith brings precision. The perfumer brings care. The merchant brings organization. The priest brings blessing. No skill is too fine for the work of restoration.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 12,
              spans: [
                t('And Shallum the son of Halohesh, the ruler of the half part of Jerusalem, he and his daughters repaired.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'shallum-daughters',
          html:
            'Here is a detail worth pausing over: Shallum, a ruler, rebuilt with his daughters. The wall-building was not the exclusive work of men. The daughters of Shallum are named in the record — not by individual names, but as participants alongside their father. They worked. They are remembered. In a moment of shared crisis, the division between men&apos;s work and women&apos;s work dissolves. What is needed is done by all who can do it. This quiet inclusion of women in the work carries weight: they are builders too.',
        },
        {
          kind: 'carry',
          html:
            'When community work is urgent, traditional roles can shift. The daughters of Shallum did not wait for permission or custom to change. They saw the wall needed building, and they built. In what ways has crisis or urgency called you to do work you might not otherwise have done? What did you learn about yourself and your capabilities?',
        },
        {
          kind: 'reflection',
          id: 'daughters-build',
          prompt: 'Shallum and his daughters worked together on the wall. What barriers have you seen between different people that disappeared when a common goal was urgent enough?',
        },
      ],
    },

    /* ─── Nehemiah 3:12–15 — Every Builder Over Against His Own House ────────── */
    {
      ref: 'Nehemiah 3:12–15',
      title: 'Over Against His Own House — Starting Where You Are',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 13,
              spans: [
                t('The valley gate repaired Hanun, and the inhabitants of Zanoah; they built it, and set up the doors thereof, the locks thereof, and the bars thereof, and a thousand cubits on the wall unto the dung gate.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('But the dung gate repaired Malchiah the son of Rechab, the ruler of part of Bethmarcaboth; he built it, and set up the doors thereof, the locks thereof, and the bars thereof.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('But the fountain gate repaired Shallun the son of Colhozeh, the ruler of part of Mizpah; he built it, and covered it, and set up the doors thereof, the locks thereof, and the bars thereof, and the wall of the pool of Siloah by the king&apos;s garden, and unto the stairs that go down from the city of David.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gates-named',
          html:
            'The gates mount up: Valley Gate, Dung Gate, Fountain Gate, Water Gate, Horse Gate, East Gate. Each one is assigned, each one is restored. The Dung Gate — the humblest, the gate through which the city&apos;s waste is removed — is given its own section, its own builder, its own dignity. No portion is beneath notice. The sanitation of the city matters as much as the grand gates.',
        },
        {
          kind: 'commentary',
          id: 'over-against',
          html:
            'A phrase recurs in Nehemiah 3: "over against his own house." The builders worked on the sections nearest their homes. They had a personal stake in the work. The wall that protected their neighbors also protected their own families. They could look at their portion and know: this is mine. This is where I stand. The wall is not built by distant hired workers, but by people protecting their own communities.',
        },
        {
          kind: 'hebrew',
          id: 'neged',
          title: 'Neged — "Over Against" or "Opposite"',
          script: 'נֶ֫גֶד',
          translit: '<strong>Neged</strong> · opposite, before, over against',
          description:
            'The word "neged" carries the sense of face-to-face, directly across from, or in front of. When the builders work "over against their own house," they are working in the place they see every day, the section whose strength directly affects their own safety. It is personal. It is intimate. It is the place where care and self-interest align.',
        },
        {
          kind: 'carry',
          html:
            'Where is your own house? What walls are you responsible for maintaining — not distant abstract walls, but the concrete structures of your own home, your own relationships, your own community? The builders of Jerusalem started there: with what was closest to them, with what they loved most. What would change if you committed yourself to the repair work that is right in front of you?',
        },
        {
          kind: 'reflection',
          id: 'over-against',
          prompt: 'Is there a wall that needs building, a relationship that needs repair, a community that needs strengthening in the place where you actually live? What would it look like to put your neck to that work?',
        },
      ],
    },

    /* ─── Nehemiah 3:26–31 — The Work Continues and Completes ─────────────────── */
    {
      ref: 'Nehemiah 3:26–31',
      title: 'The Wall Closes: Every Section Complete',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 26,
              spans: [
                t('Moreover the Nethinims dwelt in Ophel, unto the place over against the water gate toward the east, and the tower that lieth out.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('After him the Tekoites repaired another piece, over against the great tower that lieth out, even unto the wall of Ophel.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('From above the horse gate repaired the priests, every one over against his house.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('After them repaired Zadok the son of Immer over against his house. And after him repaired also Shemaiah the son of Shechaniah, the keeper of the east gate.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('After him repaired Hananiah the son of Shelemiah, and Hanun the sixth son of Zalaph, another piece. After him repaired Meshullam the son of Berechiah over against his chamber.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('After him repaired Malchiah the goldsmith&apos;s son unto the place of the Nethinims, and of the merchants, over against the gate Miphkad, and to the going up of the corner.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'wall-closes',
          html:
            'As the chapter nears its end, we read the same refrain again and again: "over against his house," "over against his chamber," "another piece." The builders are coming full circle around the wall. Section by section, they are closing the circle. The wall that began with the priests at the Sheep Gate is finishing near the Miphkad Gate. The work, distributed among dozens of named builders, is nearing completion. Each person knew exactly where they stood and what they had to do.',
        },
        {
          kind: 'commentary',
          id: 'nethinims-merchants',
          html:
            'Notice that even the Nethinims — temple servants — and the merchants are included in the work. The entire community participates. Priests and perfumers, goldsmiths and servants, merchants and neighbors. The wall is rebuilt not by decree from above, but by the willing labor of a whole people, each with a stake in the outcome.',
        },
        {
          kind: 'commentary',
          id: 'every-name',
          html:
            'In Nehemiah 3, nearly forty different work crews are named. It is one of the longest lists of individual names in Scripture. Why does the text bother? Because the point of the story is that every person matters. Ezra the scribe records this genealogy of builders so that, centuries later, we will know: God sees. God names. God remembers every faithful worker.',
        },
        {
          kind: 'christ',
          id: 'christ-sheep-gate',
          title: 'Christ Connection — The Sheep Gate and the True Gate',
          html:
            'The wall begins at the Sheep Gate — the gate through which the sacrificial lambs entered, the gate mentioned in John 5:2 near which Jesus healed the paralyzed man. In John 10:7–9, Jesus says of Himself: "I am the door of the sheep... I am the door: by me if any man enter in, he shall be saved, and shall go in and out, and find pasture." Christ is the Sheep Gate — the entry point through which the flock passes into safety and redemption. And just as the builders in Nehemiah 3 sanctified that gate and made it strong, we are built into Christ as a temple, a living structure in which every member has a place (1 Corinthians 3:9). Every stone matters. Every builder&apos;s name is known to Him.',
        },
        {
          kind: 'carry',
          html:
            'The church is not built by one person, but by many, each with a section, each working where they are. In Paul&apos;s image in 1 Corinthians 12, the body of Christ needs the eye and the ear, the hand and the foot — all different, all necessary. The wall of Jerusalem could not have been rebuilt if each builder had tried to do everyone else&apos;s work. It was built because each person knew their portion and did it well. What is your portion? What wall is God asking you to strengthen?',
        },
        {
          kind: 'reflection',
          id: 'every-builder',
          prompt: 'In Nehemiah 3, God makes sure that every builder is named and remembered. What does it mean to you that God knows your name, sees your work, and remembers what you faithfully do?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Then Eliashib the high priest rose up with his brethren the priests, and they builded the sheep gate... And every one over against his house. The wall is rebuilt not by one hero, but by named builders, each faithful in their own portion.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Nehemiah 3 · Study Guide',
  },

  hasHebrew: true,
};
