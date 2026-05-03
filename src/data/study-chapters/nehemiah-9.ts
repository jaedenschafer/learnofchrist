import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Nehemiah 9 — The Great Prayer of Confession
 *
 * The assembly gathers on the twenty-fourth day of the month, wearing sackcloth and
 * sitting in ashes. They separate themselves from all strangers and stand to confess
 * their sins and the iniquities of their fathers. A quarter of the day is spent reading
 * the Book of the Law; another quarter in confession and worship. Then the Levites cry
 * out with a loud voice, calling the people to "Stand up and bless the Lord your God
 * forever and ever." What follows is the longest prayer in the Bible — a sweeping
 * recitation of Israel&apos;s history from creation to exile, a meditation on God&apos;s
 * mercy and Israel&apos;s rebellion, culminating in a covenant renewed in writing. In this
 * chapter, confession becomes history becomes covenant.
 */
export const NEHEMIAH_9: RichChapterContent = {
  bookSlug: 'nehemiah',
  bookName: 'Nehemiah',
  chapter: 9,

  estimatedMinutes: { 5: 7, 10: 16, 15: 22 },
  intros: [
    'The scene is one of corporate lamentation and solemnity. The twenty-fourth day of the month arrives. The people assemble with fasting, wearing sackcloth — the garments of mourning — and sitting in ashes, a gesture of humility before God. They have separated themselves from all strangers, setting themselves apart as a covenant people entering into confession. The work of rebuilding is complete. The walls stand. The gates are set. Now comes the harder work: the inner rebuilding, the turning of the heart toward God.',
    'What unfolds is a unique structure. For one quarter of the day — three hours — the people read from the Book of the Law of their God. They stand as it is read, honoring the Word. Then, for another quarter day, they confess their sins and worship the Lord. But the confession is not private prayer whispered in solitude. It is corporate, spoken aloud, embodied in posture and tears. And when the Levites call out from the stairs, their cry sets the pattern for what will come: a prayer that spans the entire arc of biblical history, from creation to their present moment — a prayer that holds together God&apos;s faithfulness and the people&apos;s faithlessness, that remembers mercy even in the midst of judgment.',
  ],

  bottomShare: {
    label: 'Share Nehemiah 9',
    quote:
      'In sackcloth and ashes, the assembly of Israel stood and confessed their sins and the iniquities of their fathers. They read the Law for a quarter day, then spent a quarter day in confession and worship. What emerged was history as prayer — a sweeping recital of God&apos;s mercy and Israel&apos;s rebellion, ending in a covenant renewed.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Nehemiah 9 · Study Guide',
  },

  sections: [
    /* ─── Nehemiah 9:1–3 — The Assembly Gathers in Humility ──────────────── */
    {
      ref: 'Nehemiah 9:1–3',
      title: 'Sackcloth and Ashes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(1, 'Now in the twenty and fourth day of this month the children of Israel were assembled with fasting, and with sackclothes, and earth upon them.'),
            plain(2, 'And the seed of Israel separated themselves from all strangers, and stood and confessed their sins, and the iniquities of their fathers.'),
            plain(3, 'And they stood up in their place, and read in the book of the law of the Lord their God one fourth part of the day; and another fourth part they confessed, and worshipped the Lord their God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'neh9-fasting',
          html:
            'The assembly gathers with fasting — a refusal of sustenance as a sign of inward turning. They wear sackcloth, the rough material of mourning, and place earth upon themselves — a physical expression of humility, of dust returning to dust. The body speaks what the mouth will later confess. They do not come with confidence or ease. They come as penitents.',
        },
        {
          kind: 'commentary',
          id: 'neh9-separated',
          html:
            'They separate themselves from all strangers. This is not xenophobia but covenant identity — the seed of Israel setting themselves apart as a people who have made a binding agreement with God. The separation is meant to heighten focus, to create sacred space for the work of confession and renewal.',
        },
        {
          kind: 'hebrew',
          id: 'neh9-sak',
          title: 'Sak — "Sackcloth"',
          script: 'שַׂק',
          translit: '<strong>Sak</strong> · sackcloth; rough garment worn in mourning and penance',
          description:
            'The Hebrew word sak refers to a coarse, itchy fabric, often made from goat hair. It is the uniform of grief and repentance. When someone put on sackcloth, they were not merely dressing — they were visibly aligning themselves with mourning, with a rupture in their normal self-presentation. The wearing of sak was a public act of contrition.',
        },
        {
          kind: 'carry',
          html:
            'There is something countercultural about this scene. The walls have been rebuilt. The work is complete. Yet instead of celebration, the people gather for humility and confession. What does it mean to stand at the point of victory and turn inward toward the acknowledgement of brokenness? Where in your own life has completion required confession?',
        },
        {
          kind: 'reflection',
          id: 'neh9-gathering',
          prompt: 'The assembly gathered in sackcloth to confess. What does it look like for a community to turn toward its own failure together, not in shame but in honesty?',
        },
      ],
    },

    /* ─── Nehemiah 9:4–5 — The Levites Call the People to Bless ──────────── */
    {
      ref: 'Nehemiah 9:4–5',
      title: 'Stand Up and Bless the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(4, 'Then stood up upon the stairs of the Levites, Jeshua, and Bani, Kadmiel, Shebaniah, Bunni, Sherebiah, Bani, and Chenani, and cried with a loud voice unto the Lord their God.'),
            plain(5, 'Then the Levites, Jeshua, Kadmiel, Bani, Hashabneiah, Sherebiah, Hodijah, Shebaniah, and Pethahiah, said, Stand up and bless the Lord your God for ever and ever: and blessed be thy glorious name, which is exalted above all blessing and praise.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'neh9-levites-stairs',
          html:
            'The Levites stand upon the stairs — a place of elevation and authority. They do not whisper. They cry with a loud voice. In a moment of communal grief and confession, they lift a call that is not lamentation but command: Stand up. Bless. Your God stands ready to receive your praise. The Levites are not calling the people deeper into shame; they are calling them up toward God.',
        },
        {
          kind: 'commentary',
          id: 'neh9-bless-god',
          html:
            'The verb is striking: "Bless the Lord your God." To bless God is not to ask for blessing but to recognize blessing — to declare that God is worthy of praise, that His name is glorious. The Levites are asking the people to move from the verticality of confession to the horizontality of proclamation. They have confessed who they are; now they are called to declare who God is.',
        },
        {
          kind: 'commentary',
          id: 'neh9-exalted',
          html:
            'The phrase "exalted above all blessing and praise" holds a paradox. If God is above all blessing and praise, then how can the people bless Him? The answer is that human blessing cannot adequately contain God&apos;s glory — yet the attempt itself, the reaching upward, the opening of the mouth to praise what cannot be fully praised, is itself an act of faith.',
        },
        {
          kind: 'carry',
          html:
            'Confession and praise are not opposites; they are partners. The people have confessed their brokenness. Now they are invited to stand and bless — to remember that even their failure does not exhaust God&apos;s goodness. In your own practice of faith, how do you move between acknowledgement of failure and declaration of God&apos;s faithfulness?',
        },
        {
          kind: 'reflection',
          id: 'neh9-stand-bless',
          prompt: 'When have you been called to stand up and bless, even in the midst of acknowledged failure or shame? What does it mean to praise God when you are also confessing your own sin?',
        },
      ],
    },

    /* ─── Nehemiah 9:6–8 — "Thou Art the Lord Alone" — Creator and Covenant Maker ─── */
    {
      ref: 'Nehemiah 9:6–8',
      title: 'Thou Art the Lord Alone',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 6,
              spans: [
                t('Thou, '),
                hp('even thou, art Lord alone', 'neh9-lord-alone'),
                t('; thou hast made heaven, the heaven of heavens, with all their host, the earth, and all things that are therein, the seas, and all that is therein, and thou '),
                hg('preservest them all', 'neh9-preservest-all'),
                t('; and the host of heaven worshippeth thee.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Thou art the '),
                hp('Lord the God, who didst choose Abram', 'neh9-choose-abram'),
                t(', and broughtest him forth out of Ur of the Chaldees, and gavest him the name of Abraham;'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And foundest his '),
                hg('heart faithful before thee', 'neh9-abraham-faithful'),
                t(', and madest a covenant with him to give the land of the Canaanites, the Hittites, the Amorites, and the Perizzites, and the Jebusites, and the Girgashites, to give it, I say, to his seed, and hast '),
                hp('performed thy words', 'neh9-performed-words'),
                t('; for thou art righteous:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'neh9-lord-alone',
          html:
            'This is the central confession of the prayer: "Thou, even thou, art Lord alone." The repetition — thou, even thou — emphasizes singularity, uniqueness. There is no other. No competitor. No rival. The Creator stands alone, and all creation stands before Him in order. This declaration anchors everything that follows; all of Israel&apos;s history is the history of what the Lord alone has done.',
        },
        {
          kind: 'hebrew',
          id: 'neh9-atah-hu',
          title: 'Atah-hu Yahweh Levaddekha — "Thou Alone Art the Lord"',
          script: 'אַתָּה־הוּא יהוה לְבַדֶּ֫ךָ',
          translit: '<strong>Atah-hu Yahweh levaddekha</strong> · Thou, Thou art the Lord, alone',
          description:
            'The Hebrew carries an intensity that English softens. "Atah-hu" — thou, thyself — emphatic pronoun echoed twice. "Yahweh" — the covenant name, the God who has bound Himself to His people. "Levaddekha" — for thyself alone, singular, without division or addition. The theological affirmation is absolute: the God who is worthy of worship stands as one, undivided, without equal.',
        },
        {
          kind: 'commentary',
          id: 'neh9-preservest-all',
          html:
            'The God who creates also preserves. "Thou preservest them all" — the heavens, the earth, the seas. The work is not creation alone but continual sustenance. This God does not wind up the cosmos and leave it. He holds it. He maintains it. The theological claim is that creation is an ongoing act, not a past event.',
        },
        {
          kind: 'commentary',
          id: 'neh9-choose-abram',
          html:
            'The prayer moves from cosmic creation to covenant history. The same God who made the heavens chose Abram. He brought him out of Ur of the Chaldees — out of idolatry, out of the realm of false gods — and gave him a new name, Abraham. The act is both intimately personal and historically significant. One man, called by name, becomes the beginning of a people.',
        },
        {
          kind: 'commentary',
          id: 'neh9-abraham-faithful',
          html:
            'Abraham is described as one whose heart God "foundest faithful." Not perfect — Scripture is clear about Abraham&apos;s failures — but faithful. There is a difference. Faithfulness is not flawlessness; it is the orientation of the heart toward God, the willingness to follow even into the unknown. God sees that faithfulness and responds with covenant.',
        },
        {
          kind: 'hebrew',
          id: 'neh9-emunah',
          title: 'Emunat — "Faithfulness"',
          script: 'אֱמוּנָה',
          translit: '<strong>Emunat</strong> · faithfulness; trust; stability',
          description:
            'The Hebrew root refers not only to faith as belief but to faithfulness as a consistent orientation. Abraham&apos;s heart was "emet" — reliable, grounded, turned toward God. It is a word of substance, not of feeling. God does not choose based on emotion but on the reliability of the covenant partner.',
        },
        {
          kind: 'commentary',
          id: 'neh9-performed-words',
          html:
            'God "performed thy words" — the promise made was the promise kept. The text emphasizes that God is righteous — not merely powerful but just, reliable, bound by His own character to keep His word. This is the foundation of all that follows in the prayer: a God whose words can be trusted.',
        },
        {
          kind: 'carry',
          html:
            'In this prayer, Israel is not reciting theology in the abstract; they are remembering their own story as a story of God&apos;s covenant-keeping. The Creator who holds all things chose one man, made a promise, and kept it across generations. What promises has God made in your own life? How do you live as if His word performed?',
        },
        {
          kind: 'reflection',
          id: 'neh9-lord-alone',
          prompt: 'The prayer declares "Thou art the Lord alone." In a world of many voices, many powers, many claims on our loyalty, what does it mean for you to confess this?',
        },
      ],
    },

    /* ─── Nehemiah 9:9–31 — The Long Recital of Mercy and Rebellion ────────── */
    {
      ref: 'Nehemiah 9:9–31',
      title: 'Mercy and Rebellion Through the Ages',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(9, 'And thou sawest the affliction of our fathers in Egypt, and heardest their cry by the Red sea;'),
            {
              number: 10,
              spans: [
                t('And shewedst signs and wonders upon Pharaoh, and on all his servants, and on all the people of his land: for thou knewest that they dealt proudly against them. So didst thou get thee a '),
                hg('name, as it is this day', 'neh9-name-this-day'),
                t('.'),
              ],
            },
            plain(11, 'And thou didst divide the sea before them, so that they went through the midst of the sea on the dry land; and their persecutors thou threwest into the deeps, as a stone into the mighty waters.'),
            {
              number: 12,
              spans: [
                t('Moreover thou leddest them in the day by a '),
                hy('cloudy pillar', 'neh9-cloudy-pillar'),
                t('; and in the night by a '),
                hy('pillar of fire', 'neh9-pillar-fire'),
                t(' to give them light in the way wherein they should go.'),
              ],
            },
            plain(13, 'Thou camest down also upon mount Sinai, and spakest with them from heaven, and gavest them right judgments and true laws, good statutes and commandments:'),
            plain(14, 'And madest known unto them thy holy sabbath, and commandedst them precepts, statutes, and laws, by the hand of Moses thy servant:'),
            {
              number: 15,
              spans: [
                t('And gavest them '),
                hy('bread from heaven', 'neh9-bread-heaven'),
                t(' for their hunger, and broughtest forth '),
                hy('water for them out of the rock', 'neh9-water-rock'),
                t(' for their thirst, and promisedst them that they should go in to possess the land which thou hadst sworn to give them.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('But they and our fathers '),
                hg('dealt proudly', 'neh9-dealt-proudly'),
                t(', and '),
                hg('hardened their necks', 'neh9-hardened-necks'),
                t(', and '),
                hg('hearkened not to thy commandments', 'neh9-hearkened-not'),
                t(','),
              ],
            },
            plain(17, 'And refused to obey, neither were mindful of thy wonders that thou didst among them; but hardened their necks, and in their rebellion appointed a captain to return to their bondage: but thou art a God ready to pardon, gracious and merciful, slow to anger, and of great kindness, and forsookest them not.'),
            {
              number: 18,
              spans: [
                t('Yea, when they had made them a molten calf, and said, This is thy God that brought thee up out of Egypt, and had wrought great provocations;'),
                t(' '),
                t('YET THOU IN THY MANIFOLD MERCIES '),
                hp('FORSOOKEST THEM NOT', 'neh9-forsook-not-calf'),
                t(' in the wilderness: the pillar of the cloud departed not from them by day, to lead them in the way; neither the pillar of fire by night, to shew them light, and the way wherein they should go.'),
              ],
            },
            plain(19, 'Thou gavest also thy good Spirit to instruct them, and withheldest not thy manna from their mouth, and gavest them water for their thirst.'),
            plain(20, 'Yea, forty years didst thou sustain them in the wilderness, so that they lacked nothing; their clothes waxed not old, and their feet swelled not.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'neh9-long-recital',
          html:
            'The prayer shifts from declaration to narrative. God is narrating His own actions through the mouth of the people. The structure is rhythmic, almost musical: affliction (Egypt), deliverance (Red Sea), provision (manna, water), rebellion (golden calf, hardened necks), yet mercies and restoration. This is not a history lesson but a confession that memory itself — the act of recalling God&apos;s works — is an act of worship.',
        },
        {
          kind: 'commentary',
          id: 'neh9-name-this-day',
          html:
            'God "got thee a name, as it is this day." The phrase suggests that God&apos;s reputation, His renown, was established through the deliverance from Egypt. God acted not only to save His people but to make His name known — to demonstrate His power and faithfulness to all the nations.',
        },
        {
          kind: 'commentary',
          id: 'neh9-cloudy-pillar',
          html:
            'The cloud pillar by day and the pillar of fire by night become symbols of God&apos;s presence. They are not mere guidance; they are manifestations of God&apos;s glory. The people are led not by map or compass but by the visible presence of God Himself. To wander in the wilderness is to be surrounded by divine presence.',
        },
        {
          kind: 'hebrew',
          id: 'neh9-anan-aish',
          title: 'Ananas — "Cloud Pillar"',
          script: 'עַמּוּד הֶעָנָן',
          translit: '<strong>Amud ha-anan</strong> · pillar of cloud',
          description:
            'The word "amud" (pillar) suggests something solid, stable, standing. Yet it is made of cloud — ephemeral, invisible in rain, yet unmistakably the presence of God. The paradox is intentional: the most stable thing in the wilderness is the ephemeral presence of God. What cannot be grasped is what guides.',
        },
        {
          kind: 'commentary',
          id: 'neh9-bread-heaven',
          html:
            'The manna is described as "bread from heaven." It is not natural bread, gathered or baked. It falls from the sky, a daily miracle, a daily reminder that life itself comes as a gift from God. The people cannot hoard it; they cannot save for tomorrow. They must trust that tomorrow will bring its own provision.',
        },
        {
          kind: 'commentary',
          id: 'neh9-water-rock',
          html:
            'Water flows from the rock — another impossibility made actual. The barren stone becomes a source of life. This becomes a rich image throughout Scripture: the rock that is Christ, the water that is the Spirit, the provision that appears in the most unlikely place.',
        },
        {
          kind: 'commentary',
          id: 'neh9-dealt-proudly',
          html:
            'Then comes the turning point: "They dealt proudly." Pride is the opposite of the faithfulness Abraham showed. It is the refusal to bow, the assertion of the self against God&apos;s will. The prayer does not minimize or excuse this. It names it clearly: our fathers dealt proudly. The confession includes not softening but stark acknowledgement.',
        },
        {
          kind: 'hebrew',
          id: 'neh9-gaon',
          title: 'Gaon — "Pride" or "Haughtiness"',
          script: 'גָּאוֹן',
          translit: '<strong>Gaon</strong> · pride; haughtiness; excellence (in negative sense)',
          description:
            'The Hebrew gaon can mean majesty or excellence when applied to God, but when applied to humans it carries the sense of arrogance, of the inflation of the self beyond its proper place. When humans "deal in gaon," they are asserting themselves as though they were the measure of all things.',
        },
        {
          kind: 'commentary',
          id: 'neh9-hardened-necks',
          html:
            'Hardened necks — a consistent image throughout Scripture for the refusal to bow, to turn toward God. The neck is stiff, unbending. The people refuse to turn around, to face the direction God is pointing. They advance into their own rebellion.',
        },
        {
          kind: 'hebrew',
          id: 'neh9-oref',
          title: 'Oref — "Neck" (Stiff Neck)',
          script: 'עֹרֶף',
          translit: '<strong>Oref</strong> · neck; back of the neck (esp. in context of stubbornness)',
          description:
            'The Hebrew oref specifically evokes the back of the neck — the part turned away from God. A "stiff-necked" people (am k\'shei oref) are those who refuse to turn around, to repent, to hear. The body language is theological language.',
        },
        {
          kind: 'commentary',
          id: 'neh9-forsook-not-calf',
          html:
            'Yet the refrain appears again: "Yet thou in thy manifold mercies forsookest them not." Even at the moment of the golden calf — one of the most egregious failures in Israel&apos;s history — God did not abandon His people. The mercies are described as manifold, multiple, abundant. One rebellion is met with many mercies. The math favors grace.',
        },
        {
          kind: 'carry',
          html:
            'This long recital is a kind of liturgy of memory. It recites what has happened, not to assign blame but to remind the people of a pattern: they rebel, God withdraws His mercies. But wait — He doesn&apos;t withdraw. Over and over, the refrain returns: "Yet thou forsookest them not." What does it mean to remember your own story as a story of steadfast love that outlasts your own faithlessness?',
        },
        {
          kind: 'reflection',
          id: 'neh9-mercy-pattern',
          prompt: 'The prayer recites a pattern: the people&apos;s pride and hardness, God&apos;s mercy and sustenance. How do you see this pattern in your own life? Where have mercies been "manifold"?',
        },
      ],
    },

    /* ─── Nehemiah 9:32–37 — "We Are Servants This Day" ──────────────────── */
    {
      ref: 'Nehemiah 9:32–37',
      title: 'Now Therefore: We Are Servants',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(32, 'Now therefore, our God, the great, the mighty, and the terrible God, who keepest covenant and mercy, let not all the trouble seem little before thee, that hath come upon us, our kings, our princes, and our priests, and our prophets, and our fathers, and on all thy people, since the time of the kings of Assyria unto this day.'),
            plain(33, 'Howbeit thou art just in all that is brought upon us; for thou hast done right, but we have done wickedly:'),
            {
              number: 34,
              spans: [
                t('Neither have our kings, our princes, our priests, nor our fathers, kept thy law, nor hearkened unto thy commandments and thy testimonies, wherewith thou didst testify against them.'),
              ],
            },
            plain(35, 'For they have not served thee in their kingdom, and in thy great goodness that thou gavest them, and in the large and fat land which thou gavest before them, neither turned they from their wicked works.'),
            {
              number: 36,
              spans: [
                t('Behold, '),
                hp('we are servants this day', 'neh9-servants-this-day'),
                t(', and for the land that thou gavest unto our fathers to eat the fruit thereof and the good thereof, behold, '),
                hg('we are servants in it', 'neh9-servants-in-land'),
                t(':'),
              ],
            },
            plain(37, 'And it yieldeth much increase unto the kings whom thou hast set over us because of our sins: and they have dominion over our bodies, and over our cattle, at their pleasure, and we are in great distress.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'neh9-servants-this-day',
          html:
            'The confession reaches its culmination: "We are servants this day." Not metaphorical servants in the sense of being in covenant with God, but literal servants — under Persian rule, bound to foreign kings, lacking freedom. The prayer faces this fact squarely. The people are not free. The troubles that have come are real. The acknowledgement is not soft or evasive.',
        },
        {
          kind: 'commentary',
          id: 'neh9-just-brought-upon',
          html:
            'Yet the prayer insists: "Thou art just in all that is brought upon us." This is not the demand for justice but the acknowledgement of justice. The people are not claiming innocence. They have broken the covenant. God&apos;s judgment has been righteous. The complaint is not "God, you have been unjust" but "God, you have been just in our judgment, and we confess it."',
        },
        {
          kind: 'commentary',
          id: 'neh9-large-fat-land',
          html:
            'God gave them a land described as "large and fat" — abundant, fertile, generous. Yet they did not turn from their wicked works. The abundance did not breed gratitude. The provision did not compel obedience. The image is tragic: a people given everything, turning away to their own destruction.',
        },
        {
          kind: 'commentary',
          id: 'neh9-servants-in-land',
          html:
            'The paradox is complete: they are servants in the very land they were given as freedom. The land that was meant to be an inheritance has become a place of servitude. They eat the fruit, but the fruit goes to serve the masters. The land is not theirs; they belong to it as servants to masters.',
        },
        {
          kind: 'carry',
          html:
            'Here is a confession that holds no self-righteousness. The people do not blame God for being too harsh. They do not rationalize their failure. They say: we are where we are because of our own sin. We are servants in the land meant for freedom. We are in great distress. Yet they are not in despair — they are in prayer. They speak this truth to God, not as accusation but as an invitation: What will you do with us now?',
        },
        {
          kind: 'reflection',
          id: 'neh9-servants-now',
          prompt: 'When have you found yourself in a place of servitude or limitation as a consequence of your own choices? Can you confess this without blame-shifting? And can you, like the people, bring this to God not as despair but as prayer?',
        },
      ],
    },

    /* ─── Nehemiah 9:38 — The Covenant Sealed in Writing ──────────────────── */
    {
      ref: 'Nehemiah 9:38',
      title: 'We Make a Sure Covenant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 38,
              spans: [
                t('And because of all this we '),
                hp('make a sure covenant', 'neh9-sure-covenant'),
                t(', and '),
                hp('write it', 'neh9-write-it'),
                t('; and our princes, Levites, and priests, seal unto it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'neh9-sure-covenant',
          html:
            'After confession comes covenant. The people do not wait for God to make the first move again; they make a commitment themselves. "We make a sure covenant" — not tentative, not half-hearted, but sure, firm, binding. They are saying: we have heard ourselves in confession, and now we bind ourselves to covenant.',
        },
        {
          kind: 'commentary',
          id: 'neh9-write-it',
          html:
            'The covenant is written. It is not merely spoken or remembered; it is inscribed. The writing makes it permanent, official, witnessed. The page becomes a sign, something that can be returned to, something that binds across time. Writing is the technology of covenant — it says: this was decided on this day, by these people, and it remains.',
        },
        {
          kind: 'commentary',
          id: 'neh9-princes-seal',
          html:
            'The princes, Levites, and priests seal the covenant. The leadership of Israel — civil, religious, and priestly — all commit themselves. This is not a private commitment but a public, embodied one. The seal is the mark of the signers, binding them to the words. When they sign, they become accountable to what they have written.',
        },
        {
          kind: 'hebrew',
          id: 'neh9-chotam',
          title: 'Chotam — "Seal"',
          script: 'חוֹתָם',
          translit: '<strong>Chotam</strong> · seal; signet ring; mark of authenticity',
          description:
            'A seal was a ring or cylinder bearing the name or mark of the owner. When pressed into wax or soft clay, it left an impression that authenticated a document. To seal a covenant was to say: this is me, my name, my authority. My signature is bound to this word. The seal made the covenant personal and binding.',
        },
        {
          kind: 'christ',
          id: 'neh9-christ-covenant',
          title: 'Christ Connection — The Seal of the New Covenant',
          html:
            'In the Old Testament, seals authenticated documents and covenants. In the New Testament, the Holy Spirit is described as the "seal" — God&apos;s mark upon His people, authenticating the new covenant (Ephesians 1:13–14). And Christ Himself is the mediator and fulfillment of all covenants. The blood of Christ, shed for the remission of sins, ratifies the covenant of grace that the confession of Nehemiah 9 anticipates — a people forgiven, restored, renewed. The confession leads not merely to a renewed commitment but to the recognition that true renewal comes only through Christ&apos;s blood, the seal of covenant made permanent.',
        },
        {
          kind: 'carry',
          html:
            'The people move from confession to commitment to covenant written and sealed. There is something deeply moving about this progression: they do not ask for forgiveness and then wait passively. They say yes to covenant again. They write it down. They mark themselves with their seals. They are saying: we know who we are, we know what we have done, and we choose to return to the terms of our covenant. In your own life, when you have come to a place of honest confession, how do you move forward? Is there a covenant you need to renew?',
        },
        {
          kind: 'reflection',
          id: 'neh9-seal-covenant',
          prompt: 'The people sealed their covenant in writing. What does it mean to commit yourself not once but repeatedly? To return again and again to covenant?',
        },
      ],
    },

    /* ─── Nehemiah 9 — The Longest Prayer in the Bible ─────────────────────── */
    {
      ref: 'Nehemiah 9 · All',
      title: 'History as Prayer, Prayer as History',
      blocks: [
        {
          kind: 'commentary',
          id: 'neh9-longest-prayer',
          html:
            'Nehemiah 9 contains the longest prayer in the Bible. Not a prayer of lament alone, nor a prayer of adoration alone, but a prayer that encompasses history — God&apos;s acts, Israel&apos;s response, God&apos;s faithfulness, Israel&apos;s rebellion — all woven together into one sustained conversation with God. The prayer teaches that memory is prayer. To remember what God has done is to speak to God. To confess what we have failed to do is to open ourselves to transformation.',
        },
        {
          kind: 'commentary',
          id: 'neh9-mercy-endures',
          html:
            'The prayer&apos;s refrain is mercy. Over and over: "Yet thou forsookest them not." Even when judgment came, mercy remained. Even in exile, the mercies of God held the people. The prophet Jeremiah will later express this with poetic precision: "His compassions fail not. They are new every morning. Great is thy faithfulness" (Lamentations 3:22–23). This is the truth Nehemiah 9 embodies in history: mercy endures. God&apos;s faithfulness is the one constant across all the turning tides of human failure.',
        },
        {
          kind: 'christ',
          id: 'neh9-christ-bread-water',
          title: 'Christ Connection — The True Bread and Living Water',
          html:
            'The prayer recalls how God gave manna from heaven and water from the rock. Jesus will take up these images. "I am the bread of life," He says (John 6:35). The bread that fell from heaven in the wilderness points to the Bread of Life that came in human flesh. And the water from the rock? Paul teaches that the rock was Christ (1 Corinthians 10:4). What Israel received as sign and shadow is fulfilled in the Person and presence of Christ. To receive Christ is to receive the true sustenance, the true provision, the true covenant gift.',
        },
        {
          kind: 'christ',
          id: 'neh9-christ-spirit',
          title: 'Christ Connection — The Spirit Who Teaches',
          html:
            'The prayer speaks of God giving "thy good Spirit to instruct them." The Spirit of God was the instructor of Israel in the wilderness. Jesus promises to send another Comforter, the Spirit of truth, who "shall teach you all things" (John 14:26). The work of the Spirit in the Old Testament — guiding, instructing, empowering — continues in the New Testament, now poured out upon all believers. The same Spirit that taught Israel in the wilderness teaches the Church in every age.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};

function br() {
  return { kind: 'br' as const };
}
