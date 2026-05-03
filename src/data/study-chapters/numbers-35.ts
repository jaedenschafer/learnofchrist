import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Numbers 35 — Cities of Refuge and the Cost of Life
 *
 * The Levites receive 48 cities scattered through Israel (no tribal allotment;
 * the Lord is their inheritance). Six of these are cities of refuge — three west
 * of Jordan, three east — where the manslayer who kills accidentally may flee and
 * live. The deliberate murderer, by contrast, must die. No ransom. Two witnesses
 * required for conviction. Blood defiles the land; only the blood of the one who
 * shed it — or the death of the high priest — can cleanse it. God dwells among
 * His people; holiness must be maintained.
 *
 * Type: Christ is the refuge. His death releases the refugee.
 * Voice: Mercy and justice intertwined. The chapter respects both.
 */
export const NUMBERS_35: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 35,

  estimatedMinutes: { beginner: 10, intermediate: 15, deep: 19 },
  intros: [
    'Numbers 35 deals in hard matters: killing, guilt, refuge, and the purity of the land. The Levites are given 48 cities—not land to farm, but towns to live in, scattered among the twelve tribes. In each tribe&apos;s territory, the Levites remain the priests and teachers. But that is not the chapter&apos;s main concern. The chapter is about six of those cities: cities of refuge, where a man who has killed another by accident can flee and live.',
    'The law is precise and uncompromising. If you strike with iron, with stone, with wood, or by lying in wait, you are a murderer. The murderer shall surely be put to death. No ransom. No substitution. But if the killing was accidental, the manslayer can flee to a city of refuge, stand trial, and if found innocent of intent, he lives—confined to the city until the high priest dies. Then he can go home. Blood defiles the land. Only the blood of the one who shed it cleanses the land, or the death of the high priest cleanses the refugee. God dwells among His people. Holiness is not negotiable.',
  ],

  bottomShare: {
    label: 'Share Numbers 35',
    quote:
      'Six cities of refuge were set apart—places to flee when you killed by accident, where mercy and justice met, where you waited for the high priest to die. Christ is our refuge, and His death is the final release.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 35 · Study Guide',
  },

  sections: [
    /* ─── Numbers 35:1–8 — The Levite Cities ──────────────────────────────── */
    {
      ref: 'Numbers 35:1–8',
      title: "The Levites' Inheritance",
      blocks: [
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            {
              number: 1,
              spans: [
                t('And the Lord spake unto Moses in the plains of Moab by Jordan near Jericho, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Command the children of Israel, that they give unto the Levites of the inheritance of their possession '),
                hg('cities to dwell in', 'c-levite-cities'),
                t('; and ye shall give also unto the Levites suburbs round about the cities.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And the cities shall they have to dwell in; and the suburbs thereof shall be for their cattle, and for their goods, and for all their beasts.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And the suburbs of the cities, which ye shall give unto the Levites, shall reach from the wall of the city and outward a '),
                hy('thousand cubits', 'hebrew-cubit'),
                t(' round about.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And ye shall measure from without the city on the east side two thousand cubits, and on the south side two thousand cubits, and on the west side two thousand cubits, and on the north side two thousand cubits; and the city shall be in the midst: this shall be to them the suburbs of the cities.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And among the cities which ye shall give unto the Levites there shall be '),
                hp('six cities for refuge', 'c-six-cities'),
                t(', which ye shall appoint for the manslayer to flee unto: and to them ye shall add forty and two cities.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-levite-cities',
          html:
            'The Levites have no tribal allotment of land. Why? "I am thy part and thine inheritance among the children of Israel" (Num. 18:20). The Lord Himself is their inheritance. They are scattered among all the tribes so that the priestly work of teaching and intercession reaches everywhere. The cities are not farms or estates—they are places to be, to teach, to minister.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-cubit',
          title: 'Cubit — The Measure of the Sanctuary',
          script: 'אַמָּה',
          translit: '<strong>ammah</strong> · a unit of length, roughly 18 inches (the length of a forearm)',
          description:
            'Each city gets a thousand cubits of immediate suburbs, then two thousand more for pasture. The design is concentric—the city at the center, sacred space radiating out. The Levites live not in isolation but in the midst of all Israel, blessing all.',
        },
        {
          kind: 'commentary',
          id: 'c-six-cities',
          html:
            'Six cities—three on each side of the Jordan—are designated as cities of refuge. Not all forty-eight Levite cities, just six. These are the places where the accidental killer can run, where the law becomes merciful without ceasing to be holy.',
        },
        {
          kind: 'carry',
          html:
            'The Levites had no land of their own, yet they were given places to live among every tribe. Their inheritance was God Himself, and that inheritance meant presence, blessing, and access distributed everywhere. If your work is primarily to teach, to minister, to intercede—not to accumulate or to build monuments—you are living the Levite pattern. You belong not to a place but to a people, and your reward is found in the presence of God more than in any possession.',
        },
        {
          kind: 'reflection',
          id: 'levite-cities',
          prompt:
            'What does it mean to claim God as your inheritance rather than land, possessions, or security? What would it look like to trust that completely?',
        },
      ],
    },

    /* ─── Numbers 35:9–15 — The Cities of Refuge ─────────────────────────── */
    {
      ref: 'Numbers 35:9–15',
      title: 'The Place to Flee',
      blocks: [
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            {
              number: 9,
              spans: [
                t('And the Lord spake unto Moses, saying,'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Speak unto the children of Israel, and say unto them, When ye be come over Jordan into the land of Canaan;'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Then ye shall appoint you '),
                hg('cities', 'c-refuge-cities'),
                t(' to be cities of refuge for you; that the slayer that killeth any person at unawares may flee thither.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'numbers_35_v9-15',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            {
              number: 12,
              spans: [
                t('And they shall be unto you cities of refuge from the '),
                hy('avenger of blood', 'hebrew-goer'),
                t(', that the manslayer die not, until he stand before the congregation in judgment.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And of these cities which ye shall give six cities shall ye have for refuge.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Ye shall give three cities on this side Jordan, and three cities shall ye give in the land of Canaan, which shall be cities of refuge.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('These six cities shall be a refuge, both for the children of Israel, and for the stranger, and for the sojourner among them: that every one that killeth any person at unawares may flee thither.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-refuge-cities',
          html:
            'The cities of refuge are not prisons. They are sanctuaries. The man who killed by accident is not guilty, yet he needs protection from the avenger of blood—a family member who might take vengeance before the law can. The city is a place where he can wait for trial and, if innocent, wait for the high priest to die. Justice is not swift, but it is sure. [res:biblical-law-refuge-cities]',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-goer',
          title: 'Go&apos;el Ha-Dam — "The Avenger of Blood"',
          script: 'גֹּאֵל הַדָּם',
          translit: '<strong>go&apos;el ha-dam</strong> · literally, "the redeemer of blood," the kinsman who has the right and duty to avenge',
          description:
            'In ancient law, the nearest kinsman has the duty to avenge the blood of a murdered relative. The cities of refuge exist to protect the accidental killer from this vengeance until the law can determine what actually happened.',
        },
        {
          kind: 'commentary',
          id: 'c-refugees-protected',
          html:
            'Notice: the cities are for everyone. Not just Israelites, but strangers and sojourners too. Mercy is not tribal. A foreigner who kills by accident has the same right to stand before the congregation in judgment. The law protects the defenseless.',
        },
        {
          kind: 'christ',
          id: 'christ-refuge',
          title: 'Christ Connection — The Refuge That Never Fails',
          html:
            'Hebrews 6:18 speaks directly to this picture: "That by two immutable things, in which it was impossible for God to lie, we might have a strong consolation, who have fled for refuge to lay hold upon the hope set before us" (Heb. 6:18). The writer is quoting Numbers 35, calling the cities of refuge a picture of Christ. When you have killed (sinned) and the avenger of blood (judgment, condemnation) pursues you, there is a place to flee: the cross. Christ is the city where you stand trial before the congregation—before the Father—and are found not guilty because His blood covers your guilt. [res:hebrews-6-refuge]',
        },
        {
          kind: 'carry',
          html:
            'If you are carrying the weight of something you did that you wish you hadn&apos;t done—a careless word, a choice made in haste, an accident that changed everything—the city of refuge exists for you. Not to hide your guilt, but to stand trial for it in a place where mercy is guaranteed. You don&apos;t have to run forever. You can stop running and be tried fairly. And the verdict is not yours to deliver; it belongs to the congregation, to God.',
        },
        {
          kind: 'reflection',
          id: 'refuge-cities',
          prompt:
            'Is there a place in your life where you feel hunted by consequences—real or imagined? What would it mean to stop running and stand trial in a place where mercy is possible?',
        },
        { kind: 'divider' },
      ],
    },

    /* ─── Numbers 35:16–25 — The Murderer and the Law ────────────────────── */
    {
      ref: 'Numbers 35:16–25',
      title: 'The Difference Between Killing and Murder',
      blocks: [
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            {
              number: 16,
              spans: [
                t('But if he smite him with an instrument of iron, so that he die, he is a murderer: the murderer shall surely be put to death.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And if he smite him with throwing a stone, wherewith he may die, he is a murderer: the murderer shall surely be put to death.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Or if he smite him with an hand weapon of wood, wherewith he may die, he is a murderer: the murderer shall surely be put to death.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('The '),
                hy('avenger of blood', 'hebrew-goer'),
                t(' himself shall slay the murderer: when he meeteth him, he shall slay him.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('But if he thrust him of hatred, or hurl at him by laying of wait, that he die;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'num35-cities-of-refuge',
          html:
            'Six cities of refuge for the manslayer — three on each side of Jordan. Justice and mercy both demand a place where the unintentional killer can run while the case is heard.',
        },
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            {
              number: 21,
              spans: [
                t('Or in enmity smite him with his hand, that he die: he that smote him shall surely be put to death; for he is a murderer: the avenger of blood shall slay the murderer, when he meeteth him.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Howbeit if he thrust him suddenly without enmity, or have cast upon him any thing without laying of wait,'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Or with any stone, wherewith a man may die, seeing him not, and cast it upon him, that he die, and was not his enemy, neither sought his harm:'),
              ],
            },
            {
              number: 24,
              spans: [
                t('Then the congregation shall judge between the slayer and the avenger of blood according to these judgments:'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And the congregation shall deliver the slayer out of the hand of the avenger of blood, and the congregation shall restore him to the city of his refuge, whither he was fled: and he shall abide in it unto the death of the high priest, which was anointed with the holy oil.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-with-iron',
          html:
            'The law is meticulous. It distinguishes between types of weapons—iron, stone, wood—because the choice of weapon reveals intent. If you strike with something designed to kill, if you thrust in hatred, if you lay in wait, you are a murderer. If your blow was sudden and you had no enmity with the victim, you are a manslayer. The law respects the difference between accident and malice.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ratzach',
          title: 'Ratzach — "Murderer"',
          script: 'רֹצֵחַ',
          translit: '<strong>ratzach</strong> · one who deliberately kills; distinguished from <em>manslayer</em> by intent',
          description:
            'The Hebrew is precise about moral categories. A ratzach is not just someone who kills; it is someone who kills with intention, with malice, with the weight of premeditation. The law reflects a theology that intent matters.',
        },
        {
          kind: 'commentary',
          id: 'c-justice-due',
          html:
            'The murderer "shall surely be put to death." No ransom is accepted. "Ye shall take no satisfaction for the life of a murderer, which is guilty of death: but he shall be surely put to death" (v. 31). This is radical. Justice is not for sale. You cannot buy your way out of the consequences of deliberate evil. The law protects life as sacred, not as a commodity to be ransomed.',
        },
        {
          kind: 'carry',
          html:
            'There is a difference between a life derailed by accident and a life corrupted by malice. This law respects that difference. You are not guilty of the same crime for harm that came from negligence versus harm that came from deliberate cruelty. And God knows the difference. He knows your intentions. He does not treat the person who stumbled the same as the person who chose to strike. If you have done harm by accident, there is a refuge. If you have harbored hatred and struck deliberately, the law catches up.',
        },
        {
          kind: 'reflection',
          id: 'murderer-manslayer',
          prompt:
            'Where have you caused harm? Can you name it—was it careless or malicious? What does it change to know that God sees the difference?',
        },
      ],
    },

    /* ─── Numbers 35:26–28 — Escape and Confinement ────────────────────────── */
    {
      ref: 'Numbers 35:26–28',
      title: 'The Wait for Release',
      blocks: [
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            {
              number: 26,
              spans: [
                t('But if the slayer shall at any time come without the border of the city of his refuge, whither he was fled;'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And the avenger of blood find him without the borders of the city of his refuge, and the avenger of blood kill the slayer; he shall not be guilty of blood:'),
              ],
            },
            {
              number: 28,
              spans: [
                t('Because he should have remained in the city of his refuge until the death of the '),
                hp('high priest', 'c-high-priest-death'),
                t(': but after the death of the high priest the slayer shall return into the land of his possession.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-confinement',
          html:
            'The manslayer cannot leave the city. The confinement is not punishment—it is protection. The moment he steps outside, the avenger of blood can kill him legally, because the law no longer shields him. He is bound to wait. Wait for trial. Wait for the high priest to die. Only then can he go home.',
        },
        {
          kind: 'commentary',
          id: 'c-high-priest-death',
          html:
            'The high priest&apos;s death releases the manslayer. This is extraordinary. The death of one person—the highest priestly figure, the one who offers atonement for the whole people—is what cleanses the land and frees those who sought refuge. It is a stunning type: someone dying to set the captive free.',
        },
        {
          kind: 'christ',
          id: 'christ-high-priest',
          title: 'Christ Connection — The Death That Releases',
          html:
            'Hebrews picks up this image directly. "Nor yet that he should offer himself often, as the high priest entereth into the holy place every year with blood of others; for then must he often have suffered since the foundation of the world: but now once in the end of the world hath he appeared to put away sin by the sacrifice of himself" (Heb. 9:25–26). Christ is the high priest whose death—once, final, all-sufficient—releases every person hiding in the city of refuge. You do not wait for another death. His death is the final release.',
        },
        {
          kind: 'carry',
          html:
            'The manslayer lived in confinement, not as punishment but as mercy. He was safe inside the city, protected from the avenger&apos;s vengeance, waiting for release. The waiting is not a trap; it is the only way to come home. If you are in a season where you feel confined—confined by consequences, confined by restitution, confined by the weight of what you did—do not mistake it for prison. It is refuge. And it is temporary. Someone&apos;s death will release you.',
        },
        {
          kind: 'reflection',
          id: 'high-priest-death',
          prompt:
            'What would it mean to know that someone else&apos;s sacrifice—not your own works, not time passing, but one death—has already released you from what you&apos;ve been confined by?',
        },
      ],
    },

    /* ─── Numbers 35:29–34 — Two Witnesses and the Purity of the Land ──────── */
    {
      ref: 'Numbers 35:29–34',
      title: 'Blood and the Holiness of the Land',
      blocks: [
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            {
              number: 29,
              spans: [
                t('So these things shall be for a statute of judgment unto you throughout your generations in all your dwellings.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('Whoso killeth any person, the murderer shall be put to death by the mouth of witnesses: but one witness shall not testify against any person to cause him to die.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('Moreover ye shall take no satisfaction for the life of a murderer, which is guilty of death: but he shall be surely put to death.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And ye shall take no satisfaction for him that is fled to the city of his refuge, that he should come again to dwell in the land, until the death of the priest.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('So ye shall not pollute the land wherein ye are: for blood it defileth the land: and '),
                hy('the land cannot be cleansed', 'hebrew-blood-defiles'),
                t(' of the blood that is shed therein, but by '),
                hp('the blood of him that shed it', 'c-blood-cleanses'),
                t('.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('Defile not therefore the land which ye shall inhabit, wherein '),
                hp('I dwell', 'c-god-dwells'),
                t(': for I the Lord dwell among the children of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-two-witnesses',
          html:
            'No single witness can convict for murder. Two are required. This is radical mercy in a legal sense: one person&apos;s testimony is not enough to take a life. The law protects the accused even as it protects the victim. Justice must be confirmed, not rushed.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-blood-defiles',
          title: 'Blood Defiles — The Holiness Principle',
          script: 'הַדָּם',
          translit: '<strong>ha-dam</strong> · the blood; in the ancient world, blood was the seat of life and carried ritual power',
          description:
            'Blood shed unjustly is not just a crime; it is a spiritual stain. The land itself becomes defiled. Only the blood of the murderer, or the death of the high priest, can cleanse this defilement. Holiness is at stake.',
        },
        {
          kind: 'commentary',
          id: 'c-blood-cleanses',
          html:
            'Only blood cleanses blood. This is the principle woven through all of Torah. You cannot buy your way out with money. You cannot negotiate. The only thing that washes away bloodguilt is blood—the blood of the one who shed it, or the blood offered by the high priest. Life answers for life.',
        },
        {
          kind: 'commentary',
          id: 'c-god-dwells',
          html:
            'The reason is given in verse 34: "I dwell among the children of Israel." God\'s presence in the land requires holiness. Blood defiles the land, and the land where God dwells cannot remain defiled. The purity of the land is the purity of God\'s house. This is not arbitrary law; it is theology. Where God is, holiness matters.',
        },
        {
          kind: 'christ',
          id: 'christ-blood-shed',
          title: 'Christ Connection — His Blood Shed for Many',
          html:
            '"For this is my blood of the new testament, which is shed for many for the remission of sins" (Matt. 26:28). Jesus does not teach that His blood cleanses the law—He claims that His blood is the fulfillment of what the law was always pointing toward. The blood of the murderer cleanses the land; the blood of Christ cleanses the world. One death. One blood. All guilt washed away. "Being justified freely by his grace through the redemption that is in Christ Jesus" (Rom. 3:24).',
        },
        {
          kind: 'carry',
          html:
            'Blood shed unjustly does defile something. Words that wounded, promises broken, harm done—it leaves a stain. You cannot undo it with apologies alone or good behavior. The defilement requires atonement. And that atonement is not yours to make. Someone else&apos;s blood has to do the cleansing. The land where God dwells—your body, your soul, your home—requires that cleansing. Not because you are worthless, but because you matter too much for the stain to remain.',
        },
        {
          kind: 'reflection',
          id: 'blood-land',
          prompt:
            'Where have you bloodied the ground—caused real harm that still feels unresolved? What would it mean to let someone else&apos;s blood—Christ&apos;s blood—do the cleansing work you cannot do yourself?',
        },
        { kind: 'divider' },
      ],
    },

    /* ─── The Theology of Refuge and Ransom ────────────────────────────────── */
    {
      ref: 'The Heart of Numbers 35',
      title: 'Justice, Mercy, and the Sacred Land',
      blocks: [
        {
          kind: 'commentary',
          id: 'c-theology-refuge',
          html:
            'Numbers 35 teaches a profound theology: justice and mercy are not opposites. The law that demands the murderer&apos;s death is the same law that provides the city of refuge for the accidental killer. The law that says "you shall take no satisfaction" for a murdered life is the same law that releases the refugee when the high priest dies. Both reflect the same God: a God who honors life as sacred and who never stops making a way for those who are guilty. [res:sefaria-numbers-35]',
        },
        {
          kind: 'commentary',
          id: 'c-intent-matters',
          html:
            'The chapter respects the human heart. It understands that the blow you strike matters—not just in its consequence but in your intention. Did you hate? Did you lie in wait? Were you careless or calculating? These distinctions are not legal technicalities; they are windows into the human soul. God sees the difference between accident and malice, and His law protects both the innocent and the truly guilty.',
        },
        {
          kind: 'commentary',
          id: 'c-holiness-presence',
          html:
            'The reason for all this is given in the final verse: "I dwell among the children of Israel." Holiness is not imposed from outside. It grows from the presence of God. Because God lives here, the land cannot remain defiled. Because God walks among His people, justice is not optional. The law is not punishment imposed by an arbitrary tyrant; it is the price of living in covenant with a holy God.',
        },
        {
          kind: 'christ',
          id: 'christ-types',
          title: 'Christ Connection — All the Types at Once',
          html:
            'Jesus embodies every role Numbers 35 describes. He is the city of refuge—the safe place to flee. He is the high priest—the one whose death releases the refugee. He is the blood that was shed—the only thing sufficient to cleanse defilement. He is the judgment—the one who knows the human heart and distinguishes intention from accident. And He is God&apos;s presence—He dwells among us, making us holy not by legal requirement but by the power of His love.',
        },
        {
          kind: 'carry',
          html:
            'If you are carrying guilt—for a life damaged, a promise broken, a word that wounded—you need to know three things this chapter teaches. First: God sees the difference between malice and accident. He knows your heart. Second: there is a place to flee where you will not be hunted forever. You do not have to run alone. Third: someone else&apos;s death will release you. Not eventually. Not after you pay enough. Now. Because it has already happened. Christ is your refuge, your release, and the blood that cleanses the land.',
        },
        {
          kind: 'reflection',
          id: 'theology-refuge',
          prompt:
            'Which role does Jesus fill for you right now—the refuge you are fleeing to, the high priest releasing you, the blood cleansing what felt irredeemable, or the judge who knows your heart? Sit with that for a moment.',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-numbers-35',
      kind: 'study',
      source: 'Sefaria',
      label: 'Numbers 35 — Full Text & Mefarshim',
      url: 'https://www.sefaria.org/Numbers.35',
      description: 'Complete Hebrew and English text with classical rabbinic commentary on cities of refuge and laws of manslaughter.',
    },
    {
      id: 'hebrews-6-refuge',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Hebrews 6:17-20 — The Hope Set Before Us',
      url: 'https://www.intertextual.org/texts/hebrews',
      description: 'How Hebrews applies Numbers 35&apos;s cities of refuge to Christ as the place of ultimate safety and refuge for believers.',
    },
    {
      id: 'biblical-law-refuge-cities',
      kind: 'study',
      source: 'Bible Odyssey',
      label: 'Cities of Refuge in Ancient Israel',
      url: 'https://www.bibleodyssey.org/passages/related-articles/cities-of-refuge/',
      description: 'Historical and legal context for the six cities of refuge in ancient Israel and their significance in biblical law.',
    },
  ],
};
