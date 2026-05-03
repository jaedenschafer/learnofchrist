import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Kings 25 — Jerusalem Destroyed; The Temple Burned; Hope Returns
 *
 * The last chapter of 2 Kings closes the narrative of the southern kingdom
 * with catastrophe — but also mercy. Nebuchadnezzar&apos;s siege breaks the city.
 * The temple burns. The Davidic king is blinded, his sons slain, his people
 * exiled. Yet the book does not end in darkness. In the 37th year of exile,
 * a new Babylonian king lifts Jehoiachin from prison and seats him at the
 * royal table. The Davidic line, though broken, survives. The door of hope
 * remains open. And Matthew 1 will trace the genealogy of Christ through
 * Jechoniah (Jehoiachin) himself — the Messiah born from the ruins.
 */
export const KINGS_2_25: RichChapterContent = {
  bookSlug: '2-kings',
  bookName: '2 Kings',
  chapter: 25,

  estimatedMinutes: { beginner: 3, intermediate: 9, deep: 13 },
  intros: [
    'The kingdom of Judah has been in freefall. Zedekiah sits on the throne, but he is a puppet king under Babylonian authority, caught between his own desire for independence and the prophet Jeremiah&apos;s insistent warning: submit to Babylon, or face annihilation. Zedekiah chooses rebellion.',
    'In the ninth year of his reign, Nebuchadnezzar arrives at the gates. The siege lasts two years. The famine becomes so severe that the people of Jerusalem have nothing left to eat. And when the city finally falls — the king flees, the walls are torn down, the temple is burned to ash. The priests and the officers are executed. The people are carried away into exile.',
    'This is the moment when Israel&apos;s story, as a free people in their own land, ends. The kingdom that was promised to David forever has fallen. Yet 2 Kings closes not with captivity alone, but with a final, unexpected gesture of mercy — a glimpse of a hope that will carry the people through the darkness ahead.',
  ],

  bottomShare: {
    quote:
      'Jerusalem fell. The temple burned. Yet even in exile, the seed of David was not utterly destroyed. In the 37th year, a king&apos;s head was lifted up. The table was set. And through the ruins, Christ came.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Kings 25 · Study Guide',
  },

  sections: [
    /* ─── 2 Kings 25:1–7 — The Siege and Fall ──────────────────────────── */
    {
      ref: '2 Kings 25:1–7',
      title: 'The Siege and the Fall',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            plain(1, 'And it came to pass in the ninth year of his reign, in the tenth month, in the tenth day of the month, that Nebuchadnezzar king of Babylon came, he, and all his host, against Jerusalem, and pitched against it; and they built forts against it round about.'),
            plain(2, 'So the city was besieged unto the eleventh year of king Zedekiah.'),
            plain(3, 'And on the ninth day of the fourth month the famine prevailed in the city, and there was no bread for the people of the land.'),
            plain(4, 'And the city was broken up, and all the men of war fled by night by the way of the gate between two walls, which is by the king&apos;s garden: (now the Chaldees were against the city round about:) and the king went the way toward the plain.'),
            plain(5, 'And the army of the Chaldees pursued after the king, and overtook him in the plains of Jericho: and all his army were scattered from him.'),
            plain(6, 'So they took the king, and brought him up to the king of Babylon to Riblah; and they gave judgment upon him.'),
            plain(7, 'And they slew the sons of Zedekiah before his eyes, and put out the eyes of Zedekiah, and bound him with fetters of brass, and carried him to Babylon.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'siege-duration',
          html:
            'The siege lasts from the tenth month of the ninth year of Zedekiah&apos;s reign through the fourth month of the eleventh year — nearly two years of starvation. The Chaldeans build forts around the city, cutting off escape and supply. Zedekiah has chosen defiance, and defiance means suffering.',
        },
        {
          kind: 'commentary',
          id: 'famine-prevails',
          html:
            'By the ninth day of the fourth month, there is no bread left. The famine does not discriminate — it crushes the whole population. This is not merely military defeat; it is the collapse of civilization itself. Hunger is a weapon as terrible as any siege engine.',
        },
        {
          kind: 'hebrew',
          id: 'galut-exile',
          title: 'Galut — "Exile" or "Exile from the Land"',
          script: 'גָּלוּת',
          translit: '<strong>Galut</strong> · exile; removal from one&apos;s homeland',
          description:
            'The Hebrew word galut refers not merely to physical displacement, but to the loss of covenant place — the promised land itself. To be in galut is to be severed from the inheritance that was sworn to Abraham. For the people of Judah, exile is not simply military defeat; it is the breaking of the covenant promise.',
        },
        {
          kind: 'commentary',
          id: 'zedekiah-escape',
          html:
            'When the wall is breached at night, Zedekiah flees toward the plain of Jericho — the same plain where Joshua once led Israel in triumph across the Jordan. Now the last king of Judah runs in terror across the same ground. The Chaldean army pursues and overtakes him before he can escape.',
        },
        {
          kind: 'commentary',
          id: 'zedekiah-judgment',
          html:
            'At Riblah, the king of Babylon pronounces judgment. Zedekiah&apos;s sons are executed before his eyes — a deliberate cruelty meant to ensure the king experiences total loss. Then his own eyes are put out. The last thing he sees is the death of his sons. Then, blinded, he is carried away to Babylon in fetters. The king is unmade. His dynasty is shattered. His sight is taken so he will never see the land again.',
        },
        {
          kind: 'carry',
          html:
            'Zedekiah would not listen to Jeremiah. He would not submit, would not trust the hard word that submission was mercy. And so he loses everything — his sight, his sons, his freedom, his throne. Sometimes the merciful path is the path of surrender, of letting go of what we cannot keep. The kingdom that Zedekiah tried to hold by force was taken from him completely.',
        },
        {
          kind: 'reflection',
          id: 'siege-fall',
          prompt: 'What in your life are you holding onto so tightly that you cannot see the mercy that might come through letting go? What would it cost to surrender?',
        },
      ],
    },

    /* ─── 2 Kings 25:8–17 — The Destruction of the Temple ────────────────── */
    {
      ref: '2 Kings 25:8–17',
      title: 'The Temple Burned; the Vessels Taken',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            plain(8, 'And in the fifth month, on the seventh day of the month, which is the nineteenth year of king Nebuchadnezzar king of Babylon, came Nebuzar-adan, captain of the guard, a servant of the king of Babylon, unto Jerusalem:'),
            plain(9, 'And he burnt the house of the Lord, and the king&apos;s house, and all the houses of Jerusalem, and every great man&apos;s house burnt he with fire.'),
            plain(10, 'And all the army of the Chaldees, that were with the captain of the guard, brake down the walls of Jerusalem round about.'),
            plain(11, 'Now the rest of the people that were left in the city, and the fugitives that fell away to the king of Babylon, with the remnant of the multitude, did Nebuzar-adan the captain of the guard carry away.'),
            plain(12, 'But the captain of the guard left of the poor of the land to be vinedressers and husbandmen.'),
            plain(13, 'And the pillars of brass that were in the house of the Lord, and the bases, and the brasen sea that was in the house of the Lord, did the Chaldees brake in pieces, and carried the brass of them to Babylon.'),
            plain(14, 'And the pots, and the shovels, and the snuffers, and the spoons, and all the vessels of brass wherewith they ministered, took they away.'),
            plain(15, 'And the firepans, and the bowls, and such things as were of gold, in gold, and of silver, in silver, the captain of the guard took away.'),
            plain(16, 'The two pillars, one sea, and the bases which Solomon had made for the house of the Lord; the brass of all these vessels was without weight.'),
            plain(17, 'The height of the one pillar was eighteen cubits, and the chapiter upon it was brass: and the height of the chapiter three cubits; and the wreathed work, and pomegranates upon the chapiter round about, all of brass: and like unto these had the second pillar with wreathed work.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'temple-burned',
          html:
            'The house of the Lord is set on fire. The temple that Solomon built, that was rededicated after the reforms of Hezekiah, that sheltered the ark of the covenant — it burns. The most sacred place in the world of Judah becomes ash. This is not incidental destruction; it is deliberate. The Babylonians mean to erase the spiritual center of Israel.',
        },
        {
          kind: 'hebrew',
          id: 'charav-destroyed',
          title: 'Charav — "Destroyed" or "Laid Waste"',
          script: 'חָרַב',
          translit: '<strong>Charav</strong> · to destroy; to lay waste; to make desolate',
          description:
            'The Hebrew verb charav conveys not merely breaking or damage, but total devastation. The city is made desolate, rendered uninhabitable. The homes, the walls, the sacred buildings — all are reduced to ruin. Nothing is left standing.',
        },
        {
          kind: 'commentary',
          id: 'vessels-taken',
          html:
            'Everything of value is stripped from the temple and carried away. The bronze pillars that stood in the vestibule — the great brasen sea where the priests washed — all broken into pieces and transported to Babylon. The pots, the shovels, the golden vessels, the silver — all become spoils of war. The temple is not merely destroyed; it is stripped bare.',
        },
        {
          kind: 'commentary',
          id: 'poor-left',
          html:
            'A remnant is left behind: the poor of the land, the ones with nothing worth taking. They are left as vinedressers and husbandmen — agricultural laborers for the Babylonian occupier. To be poor, in this moment, is to be spared. To have had wealth and status means exile.',
        },
        {
          kind: 'carry',
          html:
            'The destruction is systematic and total. Nothing is sacred to the conqueror. What Jerusalem held most dear — the temple, the vessels, the dignity of the people — is either burned or taken or trampled. And yet, in the midst of devastation, the poorest are left to work the land. Life continues, though in a diminished form. What remains when everything is stripped away?',
        },
        {
          kind: 'reflection',
          id: 'temple-burned',
          prompt: 'What is the most sacred place in your own life — not a physical place, but something you hold as precious and irreplaceable? How would you grieve if it were taken from you?',
        },
      ],
    },

    /* ─── 2 Kings 25:18–21 — The Execution of the Priests ────────────────── */
    {
      ref: '2 Kings 25:18–21',
      title: 'The Officers and Priests Executed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            plain(18, 'And the captain of the guard took Seraiah the chief priest, and Zephaniah the second priest, and the three keepers of the door:'),
            plain(19, 'And out of the city he took an officer that was set over the men of war, and five men of them that were in the king&apos;s presence, the principal scribe of the host, who mustered the people of the land, and threescore men of the people of the land that were found in the city:'),
            plain(20, 'And Nebuzar-adan captain of the guard took these, and brought them to the king of Babylon to Riblah:'),
            plain(21, 'And the king of Babylon smote them, and slew them at Riblah in the land of Hamath. So Judah was carried away out of their land.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'priests-taken',
          html:
            'The chief priest Seraiah, the second priest Zephaniah, and the keepers of the temple door are all removed. These are the men who tended the sacred space, who offered the sacrifices, who stood between the people and God. Their removal signals the end of the religious order. There will be no more priests in Jerusalem, no more sacrifices at the altar.',
        },
        {
          kind: 'commentary',
          id: 'leaders-executed',
          html:
            'The officers, the king&apos;s counselors, the scribes who mustered the armies — all are taken to Riblah and executed. The leadership of Judah is systematically destroyed. Those who had authority, who had stood in the halls of power, are now dead. The people are left without their shepherds, without the ones who organized and led them.',
        },
        {
          kind: 'commentary',
          id: 'judah-carried-away',
          html:
            'The narrative closes this section with a statement of absolute finality: "So Judah was carried away out of their land." The covenant people are severed from the covenant land. Everything that made them Judah — the king, the temple, the priesthood, the leadership, the land itself — is taken.',
        },
        {
          kind: 'carry',
          html:
            'When we lose the structures that have held us — the leaders, the institutions, the sacred places — we are tempted to believe that all is lost. But Israel&apos;s story does not end in Riblah. The God who called them is not bound to a temple or a throne. The identity of God&apos;s people is not finally determined by geography or political power. In exile, they will learn who they are.',
        },
        {
          kind: 'reflection',
          id: 'leaders-executed',
          prompt: 'When the structures of your life — your job, your church, your community — are disrupted or taken away, how do you remember who you are apart from them?',
        },
      ],
    },

    /* ─── 2 Kings 25:22–26 — Gedaliah's Brief Rule and Assassination ────────── */
    {
      ref: '2 Kings 25:22–26',
      title: 'Gedaliah Governor; Hope Betrayed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            plain(22, 'And as for the people that remained in the land of Judah, whom Nebuchadnezzar king of Babylon had left, even over them he made Gedaliah the son of Ahikam, the son of Shaphan, governor.'),
            plain(23, 'And when all the captains of the armies, they and their men, heard that the king of Babylon had made Gedaliah governor, there came to Gedaliah to Mizpah, Ishmael the son of Nethaniah, and Johanan the son of Careah, and Seraiah the son of Tanhumeth the Netophathite, and Jaazaniah the son of a Maachathite, they and their men.'),
            plain(24, 'And Gedaliah sware unto them, and to their men, and said unto them, Fear not to be the servants of the Chaldees: dwell in the land, serve the king of Babylon; and it shall be well with you.'),
            plain(25, 'But Ishmael the son of Nethaniah, the seed royal, came, and ten men with him, and smote Gedaliah, that he died, and the Jews and the Chaldees that were with him at Mizpah.'),
            plain(26, 'And all the people, both small and great, and the captains of the armies, arose, and came into Egypt; for they were afraid of the Chaldees.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'gedaliah-governor',
          html:
            'Babylon appoints a new governor over the remnant left in Judah. His name is Gedaliah, son of Ahikam — a man of some standing. He invites the remaining military leaders to come to him at Mizpah. His message is pragmatic: stop resisting. Serve the king of Babylon. Live. It is a message of survival through submission.',
        },
        {
          kind: 'commentary',
          id: 'gedaliah-slain',
          html:
            'But before Gedaliah&apos;s peaceful rule can take root, Ishmael — himself of the royal seed, a man who might have claimed the throne — comes with ten men and assassinates the governor. It is as if the old refusal to submit, the old pride of the dynasty, rises up one more time. Ishmael kills not only Gedaliah, but also the Chaldean garrison. He tries to assert independence even from exile.',
        },
        {
          kind: 'commentary',
          id: 'flight-to-egypt',
          html:
            'The assassination destroys what little hope remained. Fearing Babylonian reprisal, all the remaining people — both small and great — flee into Egypt. They have survived the siege, the burning, the exile of their leaders. And still they cannot stay. They run again, abandoning the land of their fathers a final time, seeking refuge in a foreign country.',
        },
        {
          kind: 'carry',
          html:
            'Gedaliah offers a path forward: accept the loss, find a way to live under new conditions, rebuild. But pride — the same pride that led Zedekiah to rebel — kills him and scatters what remains. Sometimes the hard word of acceptance is rejected in favor of one last, desperate bid for independence. And sometimes that bid costs everything.',
        },
        {
          kind: 'reflection',
          id: 'gedaliah-governor',
          prompt: 'When you have faced a setback or loss you cannot change, have you been able to accept it and build something new? Or have you, like Ishmael, refused to accept the new reality?',
        },
      ],
    },

    /* ─── 2 Kings 25:27–30 — The Lifting Up of Jehoiachin ────────────────── */
    {
      ref: '2 Kings 25:27–30',
      title: 'A King Lifted Up: The Door of Hope',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            plain(27, 'And it came to pass in the seven and thirtieth year of the captivity of Jehoiachin king of Judah, in the twelfth month, on the seven and twentieth day of the month, that Evil-merodach king of Babylon in the year that he began to reign did lift up the head of Jehoiachin king of Judah out of prison;'),
            plain(28, 'And spake kindly to him, and set his throne above the throne of the kings that were with him in Babylon.'),
            plain(29, 'And changed his prison garments: and he did eat bread continually before him all the days of his life.'),
            plain(30, 'And his allowance was a continual allowance given him of the king, a daily rate for every day, all the days of his life.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jehoiachin-release',
          html:
            'The book of 2 Kings closes not with exile and death, but with an unexpected act of mercy. Thirty-seven years after the fall of Jerusalem — after Zedekiah is blinded and carried away, after the temple is burned, after all seems lost — a new Babylonian king comes to power. And in the year Evil-merodach begins to reign, he &quot;lifts up the head&quot; of Jehoiachin, the young king who was exiled years before. The phrase itself — to "lift up the head" — means to restore, to show favor, to acknowledge.',
        },
        {
          kind: 'hebrew',
          id: 'nassa-et-rosh',
          title: 'Nassa et-Rosh — "Lifted Up the Head"',
          script: 'נָשׂא אֶת־רֹאשׁ',
          translit: '<strong>Nassa et-rosh</strong> · to lift up someone&apos;s head; to restore favor; to dignify',
          description:
            'The expression "lifting up the head" is not mere release from prison. It is a gesture of restoration and honor. To have your head lifted up is to be acknowledged, to be restored to dignity, to be seen again as worthy of honor. This is what happens to Jehoiachin: he is lifted up.',
        },
        {
          kind: 'commentary',
          id: 'throne-above-thrones',
          html:
            'Evil-merodach does more than release Jehoiachin. He &quot;set his throne above the throne of the kings that were with him in Babylon.&quot; The exiled king of Judah is given precedence above the other captured kings held in Babylon. He is honored. His status is restored.',
        },
        {
          kind: 'commentary',
          id: 'bread-continually',
          html:
            'Jehoiachin is brought to the king&apos;s table. He eats bread continually before the king all the days of his life. He has a regular allowance — provision, stability, the dignity of having his needs met. He is no longer a prisoner. He is a guest at the royal table.',
        },
        {
          kind: 'christ',
          id: 'christ-lifted-up',
          title: 'Christ Connection — The King Lifted Up; The Table Spread',
          html:
            'Jehoiachin, the Davidic king, is lifted up from prison and seated at the table of a foreign king. Matthew 1:11–12 traces the genealogy of Jesus through Jechoniah (Jehoiachin) himself: "And they shall call his name Jesus; for he shall save his people from their sins." The Messiah, the true Davidic King, comes through the line of an exiled king who was lifted up and restored. Just as Jehoiachin was lifted up from darkness into the light of a king&apos;s favor, Christ was lifted up from the grave — not merely released, but exalted. And just as Jehoiachin ate at a king&apos;s table, Christ calls His people to eat at His table forever. "Blessed are those who are called to the marriage supper of the Lamb" (Revelation 19:9). The Davidic line is not broken. It is transformed. And through the exile, through the darkness, the promise remains: a King will come.',
        },
        {
          kind: 'carry',
          html:
            '2 Kings closes with a whisper of hope. Everything seems lost — the land, the temple, the kingdom, the freedom. And then, in the exile itself, a king is lifted up. A table is spread. Provision is made. God does not promise to undo what has happened. The city is still burned. The people are still scattered. But even in captivity, His hand reaches out. Even in darkness, a king is honored. Even in a foreign land, a table is set. Where in your own exile — your loss, your waiting, your captivity — might you find that your head is lifted up?',
        },
        {
          kind: 'reflection',
          id: 'jehoiachin-lifted',
          prompt: 'When have you experienced restoration or unexpected favor in a place of exile or loss? What did it teach you about God&apos;s faithfulness?',
        },
      ],
    },
  ],
};
