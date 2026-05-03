import { hp, hy, hg, t, type RichChapterContent } from './types';

export const EXODUS_23: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 23,

  estimatedMinutes: { beginner: 9, intermediate: 15, deep: 20 },
  intros: [
    'Exodus 23 continues the laws that began in chapter 21. These verses do three things: they demand justice for the poor and mercy even for enemies; they establish the rhythm of rest that sustains both land and people; and they name three annual feasts that Israel will keep to remember who God is and what He has done.',
    'The chapter opens with cases — false testimony, the poor at law, the ox of your enemy in the ditch. It moves to the land itself, which needs rest, and to harvest feasts that mark the year. And it closes with something almost startling: an Angel sent before Israel, the place where God&apos;s name dwells, a messenger whose presence is the presence of God Himself. These are not disconnected rules. They are a people learning to live as God lives — just, merciful, rhythmic, and always aware they are not alone.',
  ],

  sections: [
    /* ─── Exodus 23:1–3 — Justice for the Poor ───────────────────────────── */
    {
      ref: 'Exodus 23:1–3',
      title: 'False Witness and the Poor',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 1,
              spans: [
                t('Thou shalt not raise a '),
                hg('false report', 'ex23-false'),
                t(': put not thine hand with the wicked to be an unrighteous witness.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Thou shalt not follow a multitude to do evil; neither shalt thou '),
                hg('speak in a cause to decline after many to wrest judgment', 'ex23-multitude'),
                t(':'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Neither shalt thou '),
                hp('countenance a poor man in his cause', 'ex23-poor-favor'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex23-false',
          html:
            'A false report can destroy without ever being true. The command is not to put your hand with the wicked — not to be present when they do it, not to stay silent, not to lend your voice. Witness is a covenant word. To testify falsely is to break the covenant structure of the community itself.',
        },
        {
          kind: 'commentary',
          id: 'ex23-multitude',
          html:
            'This may be the hardest law to keep in any age. Do not follow the many to do evil. Do not let the crowd pull your tongue in a direction justice doesn&apos;t go. The pressure of a multitude is almost irresistible, yet God asks for judgment that stands alone if it must.',
        },
        {
          kind: 'commentary',
          id: 'ex23-poor-favor',
          html:
            'This command is subtle — it means do not favor the poor man in his lawsuit <em>just because he is poor.</em> Justice is not partiality in the other direction. The poor person deserves truth on his side, not a lie. God&apos;s mercy for the vulnerable is paired always with impartiality in judgment. You cannot give him justice by warping the truth.',
        },
        {
          kind: 'christ',
          id: 'christ-witness',
          title: 'Christ Connection — The True Witness',
          html:
            'Jesus said, &ldquo;I am the way, the truth, and the life&rdquo; (John 14:6). He is called &ldquo;the faithful and true witness&rdquo; (Rev. 3:14). He never spoke falsehood and never bowed to the crowd, even when the multitude cried for His blood. His testimony was always for the vulnerable — the woman caught in adultery, the demoniac, the widow, the child. He stands as the only one whose justice and mercy never contradict each other.',
        },
        {
          kind: 'carry',
          html:
            'Truth-telling is not a natural human habit. We reshape facts to protect ourselves, to win an argument, to stay on the crowd&apos;s good side. But God is looking for people who can bear witness truly even when it costs them. Where is someone in your life who needs you to tell the truth about them — not harshly, but accurately?',
        },
        {
          kind: 'reflection',
          id: 'ex23-witness',
          prompt:
            'When have you felt pressure to lie or distort the truth to protect someone you care about, or to stay in a crowd&apos;s favor? What did that moment teach you?',
        },
      ],
    },

    /* ─── Exodus 23:4–5 — Mercy to Your Enemy ────────────────────────────── */
    {
      ref: 'Exodus 23:4–5',
      title: 'The Enemy&apos;s Animal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 4,
              spans: [
                t('If thou meet thine '),
                hy('enemy&apos;s ox', 'ex23-enemy-ox'),
                t(' or his ass going astray, thou shalt surely bring it back to him.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('If thou see the ass of him that hateth thee lying under his burden, and wouldest forbear to help him, thou shalt surely help with him.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'ex23-enemy-ox',
          title: 'Oyev — enemy',
          script: 'אוֹיֵב',
          translit: '<strong>oyev</strong> · one who hates, an adversary',
          description:
            'The enemy here is real — someone who has set themselves against you. Yet God&apos;s law does not wait for the enemy to stop hating you before requiring mercy. Your responsibility is not conditional on their repentance.',
        },
        {
          kind: 'commentary',
          id: 'ex23-help',
          html:
            'The progression is deliberate. Verse 4: bring back his lost animal. Verse 5: if you see his animal collapsing under a load, help load it again. These are not laws for people who like each other. They are laws for people who have every reason not to, and who must do the right thing anyway. The law strips away sentiment and just commands the action.',
        },
        {
          kind: 'carry',
          html:
            'You do not have to feel kindness to do kind things. This law frees you from waiting for your emotions to catch up. Is there someone you genuinely dislike, perhaps someone who has wronged you, whose small need you could meet this week — an animal lost, a burden too heavy? You don&apos;t need to pretend to like them. Just do the thing.',
        },
        {
          kind: 'reflection',
          id: 'ex23-enemy',
          prompt: 'Who is someone you struggle with, and what is one small act of help you could offer them without pretending the conflict doesn&apos;t exist?',
        },
      ],
    },

    /* ─── Exodus 23:6–9 — The Sojourner and the Land ──────────────────────── */
    {
      ref: 'Exodus 23:6–9',
      title: 'Care for the Vulnerable',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 6,
              spans: [
                t('Thou shalt not wrest the judgment of thy poor in his cause.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Keep thee far from a false matter; and '),
                hg('the innocent and righteous slay thou not', 'ex23-innocent'),
                t(': for I will not justify the wicked.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And thou shalt take no gift: for the gift blindeth the wise, and '),
                hg('perverteth the words of the righteous', 'ex23-gift'),
                t('.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Also thou shalt not oppress a stranger: for ye know the '),
                hp('feelings of the stranger', 'ex23-stranger'),
                t(', seeing ye were strangers in the land of Egypt.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex23-innocent',
          html:
            'Do not kill the innocent or the righteous for a bribe, for money, for politics, for safety. The law does not ask if you feel like doing justice. It commands it absolutely. And then God adds: I will not justify the wicked. God Himself will not stand with those who pervert judgment.',
        },
        {
          kind: 'commentary',
          id: 'ex23-gift',
          html:
            'A gift in the context of judgment is a bribe, and God names what a bribe does: it blinds the wise and perverts the words of the righteous. You can be intelligent and still blind when money enters the picture. A gift has a way of rewriting what you thought you saw.',
        },
        {
          kind: 'commentary',
          id: 'ex23-stranger',
          html:
            'The sojourner — the foreigner, the temporary resident, the one without family or land — appears here as the repeated vulnerable person in Israel&apos;s law. And God gives a reason: you know what it feels like. You were in Egypt. You know hunger, displacement, powerlessness. That memory is supposed to make you merciful.',
        },
        {
          kind: 'carry',
          html:
            'Memory of your own weakness is fuel for mercy toward others. If you have ever been small, hungry, foreign, dismissed, passed over — you have seen from the stranger&apos;s eyes. God is asking you to let that memory become action.',
        },
        {
          kind: 'reflection',
          id: 'ex23-vulnerable',
          prompt: 'What period in your own life helps you understand the vulnerability of those without power? How is God calling you to translate that understanding into action?',
        },
      ],
    },

    /* ─── Exodus 23:10–13 — The Rhythm of Rest ───────────────────────────── */
    {
      ref: 'Exodus 23:10–13',
      title: 'Sabbath for Land and People',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 10,
              spans: [
                t('And '),
                hg('six years thou shalt sow thy land', 'ex23-six-years'),
                t(', and shalt gather in the fruits thereof:'),
              ],
            },
            {
              number: 11,
              spans: [
                t('But the '),
                hg('seventh year thou shalt let it rest and lie still', 'ex23-seventh'),
                t('; that the poor of thy people may eat: and what they leave the beasts of the field shall eat. In like manner thou shalt deal with thy vineyard, and with thy oliveyard.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Six days thou shalt do thy work, and on the seventh day thou shalt rest: that thine ox and thine ass may rest, and the son of thy handmaid, and the stranger, may be refreshed.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And in all things that I have said unto you be circumspect: and '),
                hp('make no mention of the name of other gods', 'ex23-gods-names'),
                t(', neither let it be heard out of thy mouth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex23-six-years',
          html:
            'Six years of labor. This is not a short sprint. It is a rhythm of sustained work. But it is not endless. The seventh year is already woven into the pattern. The farmer knows from the beginning that rest is coming.',
        },
        {
          kind: 'commentary',
          id: 'ex23-seventh',
          html:
            'The land itself rests. Not because it is worn out, but because rest is built into creation. The seventh year the field lies fallow, and its produce becomes common — the poor can eat, the animals can eat. The land produces without being forced. This is theology, not just agriculture. A world that only takes is a world in rebellion.',
        },
        {
          kind: 'commentary',
          id: 'ex23-gods-names',
          html:
            'The rest law and the gods&apos; names law seem disconnected, but they are not. Both are about where you place your trust. Will you trust God enough to let the land rest? Will you trust God alone, or will you hedge your bets with other powers? The rhythm of trust and the purity of trust go together.',
        },
        {
          kind: 'carry',
          html:
            'A seven-year rhythm seems remote until you ask: where in your own life is there no seventh year? What work or worry never stops? God is asking you to build rest into your pattern — not as a luxury, but as a necessity. The land taught Israel this. Your own body and spirit are teaching it to you too.',
        },
        {
          kind: 'reflection',
          id: 'ex23-rest',
          prompt: 'What would it look like to let something in your life go fallow for a season? What would it mean to trust God with the consequence?',
        },
      ],
    },

    /* ─── Exodus 23:14–17 — Three Feasts ──────────────────────────────────── */
    {
      ref: 'Exodus 23:14–17',
      title: 'Three Annual Feasts',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 14,
              spans: [
                t('Three times thou shalt keep a feast unto me in the year.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Thou shalt keep the feast of '),
                hg('unleavened bread', 'ex23-unleavened'),
                t(' (thou shalt eat unleavened bread seven days, as I commanded thee, in the time appointed of the month Abib; for in it thou camest out of Egypt: none shall appear before me empty:)'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And the feast of harvest, the '),
                hg('firstfruits of thy labours', 'ex23-harvest'),
                t(', which thou hast sown in the field: and the feast of ingathering, which is in the end of the year, when thou hast gathered in thy labours out of the field.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Three times in the year all thy males shall appear before the Lord thy God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex23-unleavened',
          html:
            'The Feast of Unleavened Bread marks the Exodus — the meal eaten in haste, without time for the dough to rise. It is a feast of memory, kept every year, so that the deliverance from Egypt is never forgotten. Leaven is used elsewhere in Scripture as a symbol of corruption; here the people eat the opposite — bread pure, uncorrupted, the bread of haste and freedom.',
        },
        {
          kind: 'christ',
          id: 'christ-unleaven',
          title: 'Christ Connection — Purity in Unleavened Bread',
          html:
            'Paul writes, &ldquo;Christ our passover is sacrificed for us&rdquo; (1 Cor. 5:7) and calls the Corinthians to &ldquo;keep the feast… with the unleavened bread of sincerity and truth&rdquo; (1 Cor. 5:8). The Feast of Unleavened Bread is fulfilled in the One who is without corruption, who offered Himself in haste for the world&apos;s deliverance.',
        },
        {
          kind: 'commentary',
          id: 'ex23-harvest',
          html:
            'The Feast of Harvest — also called Pentecost — comes fifty days after Passover. It celebrates the first grain, the earliest fruit. It is the feast of gratitude for provision and of acknowledgment that God is the source of the harvest.',
        },
        {
          kind: 'christ',
          id: 'christ-harvest',
          title: 'Christ Connection — The Spirit at Pentecost',
          html:
            'On the day of Pentecost, after Jesus ascended, &ldquo;the Holy Ghost fell on all them which heard the word&rdquo; (Acts 2:4). The Spirit poured out at Harvest became the firstfruits of a new harvest — the ingathering of the nations into the kingdom of God. Every Pentecost feast pointed toward that outpouring.',
        },
        {
          kind: 'commentary',
          id: 'ex23-ingathering',
          html:
            'The Feast of Ingathering comes at the end of the year, when all the harvest is in. It is also called the Feast of Tabernacles or Booths, because Israel built temporary shelters and remembered the wilderness wandering. Abundance and memory together — the full harvest, and the remembrance that they once had nothing.',
        },
        {
          kind: 'christ',
          id: 'christ-ingather',
          title: 'Christ Connection — The Word Tabernacling',
          html:
            'John 1:14 says, &ldquo;The Word was made flesh, and dwelt among us&rdquo; — literally, &ldquo;tabernacled&rdquo; among us. Jesus at the Feast of Tabernacles stood and cried, &ldquo;If any man thirst, let him come unto me, and drink&rdquo; (John 7:37). The great ingathering will be the gathering of all peoples into God&apos;s tent, His presence, His home (Rev. 7:9, 21:3).',
        },
        {
          kind: 'carry',
          html:
            'These three feasts ordered Israel&apos;s year with three acts of memory and gratitude: we were freed, we are fed, we will be gathered. Your own calendar might benefit from three anchors like these — moments where you stop and remember deliverance, acknowledge provision, and orient yourself toward the gathering to come.',
        },
        {
          kind: 'reflection',
          id: 'ex23-feasts',
          prompt: 'Which of these three feasts resonates most with where you are spiritually right now — remembering freedom, celebrating provision, or longing for gathering?',
        },
      ],
    },

    /* ─── Exodus 23:18–19 — Offerings and Laws ───────────────────────────── */
    {
      ref: 'Exodus 23:18–19',
      title: 'Offerings and Care for the Land',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 18,
              spans: [
                t('Thou shalt not offer the blood of my sacrifice with leavened bread; neither shall the fat of my sacrifice remain until the morning.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('The first of the '),
                hy('firstfruits', 'ex23-firstfruits'),
                t(' of thy land thou shalt bring into the house of the Lord thy God. Thou shalt not seethe a kid in his mother&apos;s milk.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex23-purity',
          html:
            'Blood poured out is sacred. It must not be mingled with leavened bread — corruption and purity do not mix. The fat of the sacrifice is the best part, the richest part. It must not be left overnight; it is to be consumed fresh, in the immediacy of worship. These are details about reverence.',
        },
        {
          kind: 'hebrew',
          id: 'ex23-firstfruits',
          title: 'Resheet — firstfruits',
          script: 'רֵאשִׁית',
          translit: '<strong>resheet</strong> · the beginning, the first, the choicest part',
          description:
            'The firstfruits are the first and best of the harvest. To offer them to God is to say: You come first. Your claim on my provision is prior to my own.',
        },
        {
          kind: 'carry',
          html:
            'What are your firstfruits? Not just money — time, energy, attention. God asks for the first, the best, the freshest. Not what is left over after you are satisfied. The question is always: who comes first?',
        },
      ],
    },

    /* ─── Exodus 23:20–23 — The Angel Sent ──────────────────────────────── */
    {
      ref: 'Exodus 23:20–23',
      title: 'The Angel of the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 20,
              spans: [
                t('Behold, I send an '),
                hp('Angel before thee', 'christ-angel'),
                t(', to keep thee in the way, and to bring thee into the place which I have prepared.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Beware of him, and obey his voice, provoke him not; for '),
                hy('he will not pardon your transgressions: for my name is in him', 'ex23-name'),
                t('.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('But if thou shalt indeed obey his voice, and do all that I speak; then I will be an enemy unto thine enemies, and an adversary unto thine adversaries.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('For mine Angel shall go before thee, and bring thee in unto the Amorites, and the Hittites, and the Perizzites, and the Canaanites, the Hivites, and the Jebusites: and I will cut them off.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex23-leading',
          html:
            'An Angel is sent before Israel. Not behind, not beside — before. The way ahead has a guide. The Israelites do not know what lies ahead, but the Angel does. He will keep them in the way and bring them to the place God has prepared.',
        },
        {
          kind: 'hebrew',
          id: 'ex23-name',
          title: 'My Name Is in Him',
          script: 'שְׁמִי בְקִרְבּוֹ',
          translit: '<strong>shemi berkirbo</strong> — My name is in his midst',
          description:
            'This is the extraordinary claim: the Angel carries God&apos;s name. In the ancient world, to know someone&apos;s name was to know their essence, their character, their power. An angel with God&apos;s name in him is God&apos;s representative so complete that he carries the divine presence itself.',
        },
        {
          kind: 'christ',
          id: 'christ-angel',
          title: 'Christ Connection — The Angel of the Covenant',
          html:
            'Throughout Scripture the Angel of the Lord appears at decisive moments — to Hagar in the wilderness, to Abraham at the altar, to Joshua before Jericho, to Samson&apos;s parents. The Church Fathers read these appearances as the pre-incarnate Christ, the Son present before the Incarnation. Paul writes that Israel &ldquo;drank of that spiritual Rock that followed them: and that Rock was Christ&rdquo; (1 Cor. 10:4). The One leading Israel through the wilderness is the same One who would become flesh in Jesus. The Angel with God&apos;s name in Him is the Word who would dwell in a tabernacle of flesh.',
        },
        {
          kind: 'carry',
          html:
            'You are never leading yourself through unknown territory. An angel goes before you. Whether you read that as the Holy Spirit, the presence of Christ, or the name of God written across your day — you are not navigating alone. The way ahead is known to someone who loves you.',
        },
        {
          kind: 'reflection',
          id: 'ex23-angel',
          prompt: 'Where in your journey right now do you need to be reminded that someone wise is going before you? What would it mean to trust that presence?',
        },
      ],
    },

    /* ─── Exodus 23:24–26 — Covenant and Promise ───────────────────────────── */
    {
      ref: 'Exodus 23:24–26',
      title: 'Breaking Covenant with Gods',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 24,
              spans: [
                t('Thou shalt not bow down to their gods, nor serve them, nor do after their works: but thou shalt '),
                hg('utterly overthrow them', 'ex23-overthrow'),
                t(', and quite break down their images.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And ye shall serve the Lord your God, and he shall bless thy bread, and thy water; and I will take sickness away from the midst of thee.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('There shall nothing cast their young, nor be barren, in thy land: the number of thy days I will fulfil.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex23-overthrow',
          html:
            'The gods of Canaan are not to be tolerated, negotiated with, or adopted halfway. They are to be overthrown and their images broken. This is not subtle. The covenant with Israel demands exclusive allegiance. You cannot serve the Lord and keep a side altar.',
        },
        {
          kind: 'commentary',
          id: 'ex23-blessings',
          html:
            'But obedience brings blessing. Not vague blessing — specific: bread, water, health, fertility, long life. These are promises grounded in the ordinary goods of a farmer&apos;s life. God knows what matters to his people and pledges Himself to it.',
        },
        {
          kind: 'carry',
          html:
            'Divided allegiance will cost you. An idol does not have to be gold or stone — it can be a habit, a pursuit, a fear that you give authority to. What are you breaking down? What are you turning from so you can turn fully toward the Lord?',
        },
      ],
    },

    /* ─── Exodus 23:27–33 — Enemies Defeated, Boundaries Set ──────────────── */
    {
      ref: 'Exodus 23:27–33',
      title: 'Victory and Gradual Possession',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 27,
              spans: [
                t('I will send my fear before thee, and will destroy all the people to whom thou shalt come, and I will make all thine enemies turn their backs unto thee.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And I will send '),
                hy('hornets', 'ex23-hornets'),
                t(' before thee, which shall drive out the Hivite, the Canaanite, and the Hittite, from before thee.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('I will not drive them out from before thee in one year; lest the land become desolate, and the beast of the field multiply against thee.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('By little and little I will drive them out from before thee, until thou be increased, and inherit the land.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And I will set thy bounds from the Red sea even unto the sea of the Philistines, and from the desert unto the river: for I will deliver the inhabitants of the land into your hand; and thou shalt drive them out before thee.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('Thou shalt make no covenant with them, nor with their gods.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('They shall not dwell in thy land, lest they make thee sin against me: for if thou serve their gods, it is a snare unto thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex23-fear',
          html:
            'God sends His fear before Israel. The enemies will feel the terror of God&apos;s power and flee. Israel will not fight with brute strength alone; God Himself goes before them.',
        },
        {
          kind: 'hebrew',
          id: 'ex23-hornets',
          title: 'Tzirá — hornets',
          script: 'צִרְעָה',
          translit: '<strong>tzira</strong> · hornet, wasp, stinging pest',
          description:
            'Hornets are a real plague in Palestine. But here they are an instrument of God&apos;s will. The natural world obeys the God who made it, often in ways that serve His people.',
        },
        {
          kind: 'commentary',
          id: 'ex23-gradual',
          html:
            'The conquest will be gradual. Not all at once. God gives a reason: if the land were emptied all at once, it would become desolate, and wild beasts would multiply. The pace of conquest must match Israel&apos;s capacity to inhabit and steward. God thinks ecologically, structurally, long-term.',
        },
        {
          kind: 'commentary',
          id: 'ex23-covenant-warning',
          html:
            'And here, at the very end, is the warning repeated: make no covenant with them or their gods. This is not just a political warning. It is a spiritual one. Living alongside idolatry is living with a snare. The gods of Canaan will become seductive precisely because Israel will live near them, trade with them, intermarry with them. The command guards against that slow erosion.',
        },
        {
          kind: 'carry',
          html:
            'Victory is rarely instantaneous. God usually drives out your enemies — your habits, your fears, your false beliefs — gradually, as you grow in strength to occupy the territory. But the pace matters. Ask God: what are you asking me to let you remove from my life right now? Not everything at once. Just what I can steward.',
        },
        {
          kind: 'reflection',
          id: 'ex23-victory',
          prompt: 'What enemy — a habit, a fear, a false belief — is God slowly driving out of your life? What does gradual victory look like in that situation?',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Exodus 23',
    quote:
      'Justice for the poor and mercy even for enemies. Sabbath rest for land and people. Three annual feasts. An angel sent before us, carrying the name of God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 23 · Study Guide',
  },

  hasHebrew: true,
};
