import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 12 — Centralized Worship at the Place God Chooses
 *
 * A transition chapter where Israel prepares to enter the land. Moses commands
 * the destruction of foreign altars and demands that all worship — offerings,
 * tithes, vows, firstlings — center on the one place God will choose to put
 * His name. A foreshadow of the temple; ultimately fulfilled in Christ, the
 * true Temple. Includes the blood prohibition and a stern warning against
 * learning the gods of the nations.
 */
export const DEUTERONOMY_12: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 12,

  estimatedMinutes: { beginner: 9, intermediate: 14, deep: 17 },
  intros: [
    'Deuteronomy 12 is a turning point. Israel is about to enter the Promised Land after forty years in the wilderness. Moses says: forget the high places and groves of the nations you are dispossessing. Do not worship God the way they worship their gods. Instead, seek the one place God will choose — bring your offerings, tithes, vows, and firstlings there. Eat before the Lord there, and rejoice with your household, the Levite, the stranger, the fatherless, and the widow.',
    'What looks like a law about geography is actually a law about authority. The Lord alone names how He is approached. Not human creativity. Not what feels right to each person. Not the practice of the nations. This chapter echoes across the New Testament: it foreshadows the temple in Jerusalem; it is ultimately fulfilled in Christ Himself, who tells the Samaritan woman that worship will no longer be tied to any mountain or city, but to Him, the true Temple.',
    'The chapter ends with a striking warning: do not even ask how the nations worship their gods, thinking to do likewise. For they have done abominable things — burning their own children in fire. The point is not merely cultural. It is a warning about what happens when human desire, not God&apos;s word, becomes the law.',
  ],

  sections: [
    /* ─── Section 1: Destroy the High Places ────────────────────────────── */
    {
      ref: 'Deuteronomy 12:1–4',
      title: 'Destroy the High Places',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 1,
              spans: [
                t('These are the '),
                hp('statutes and judgments', 'deut-statutes'),
                t(' which ye shall observe to do in the land, which the Lord God of thy fathers giveth thee to possess it, all the days that ye live upon the earth.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Ye shall '),
                hg('utterly destroy all the places', 'deut-destroy'),
                t(', wherein the nations which ye shall possess served their gods, upon the high mountains, and upon the hills, and under every green tree:'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And ye shall overthrow their altars, and break their pillars, and '),
                hy('burn their groves', 'hebrew-asherim'),
                t(' with fire: and ye shall hew down the graven images of their gods, and destroy the names of them out of that place.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Ye shall not do so unto the Lord your God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-statutes',
          html:
            'Moses opens with absolute clarity: these are God&apos;s statutes, not the tribal customs of the moment. Every statute that follows flows from one source — the Lord. Not what each man feels is right. Not what neighbors do. What God commands.',
        },
        {
          kind: 'commentary',
          id: 'deut-destroy',
          html:
            'The verb is <em>shamad</em> — utterly destroy, obliterate, leave no trace. Moses does not say, &ldquo;change them.&rdquo; He says wipe them out completely. The high places are where the nations worshiped their gods; they cannot be repurposed. The land must be cleansed.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-asherim',
          title: 'Asherim — &ldquo;groves&rdquo;',
          script: 'אֲשֵׁרִים',
          translit: '<strong>asherim</strong> · sacred posts or poles (plural of asherah)',
          description:
            'These were wooden poles or tree-trunks set up in high places, associated with the goddess Asherah. They represented fertility and the life-force of nature. The command to burn them is a decisive break from nature-worship.',
        },
        {
          kind: 'commentary',
          html:
            'Verse 4 is the hinge: <em>Ye shall not do so unto the Lord your God.</em> Do not make high places for Him. Do not set up your own altars everywhere you feel spiritual. Do not use the worship styles of the surrounding nations. The Lord&apos;s way is altogether other.',
        },
        {
          kind: 'carry',
          html:
            'We live in a culture that says worship is personal, authentic if it feels true to you, sacred if you have an encounter. Deuteronomy 12 says something harder: the Lord alone defines how He is approached. Not your intuition. Not the practices of the world around you. Not even your sincerest feeling. His word. This is not oppressive. It is the only freedom that lasts.',
        },
        {
          kind: 'reflection',
          id: 'high-places',
          prompt:
            'Where are you tempted to worship on your own terms — in a high place of your own design? What would it mean to destroy that and seek the Lord&apos;s way instead?',
        },
      ],
    },

    /* ─── Section 2: Seek the Place God Chooses ───────────────────────── */
    {
      ref: 'Deuteronomy 12:5–14',
      title: 'Seek the Place God Chooses',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 5,
              spans: [
                t('But unto the place which the Lord your God shall choose out of all your tribes to put his name there, even unto his habitation shall ye seek, and thither thou shalt come:'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And thither ye shall bring your burnt offerings, and your sacrifices, and your tithes, and '),
                hy('heave offerings', 'hebrew-terumah'),
                t(' of your hand, and your vows, and your freewill offerings, and the firstlings of your herds and of your flocks:'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And there ye shall '),
                hp('eat before the Lord', 'deut-eat'),
                t(' your God, and ye shall rejoice in all that ye put your hand unto, ye and your households, wherein the Lord thy God hath blessed thee.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Ye shall not do after all the things that we do here this day, every man whatsoever is right in his own eyes;'),
              ],
            },
            {
              number: 9,
              spans: [
                t('For ye are not as yet come to the '),
                hp('rest and to the inheritance', 'deut-rest'),
                t(', which the Lord your God giveth you.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('But when ye go over Jordan, and dwell in the land which the Lord your God giveth you to inherit, and when he giveth you rest from all your enemies round about, so that ye dwell in safety;'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Then there shall be a place which the Lord your God shall choose to cause his name to dwell there; and thither shall ye bring all that I command you; your burnt offerings, and your sacrifices, your tithes, and the heave offering of your hand, and all your choice vows which ye vow unto the Lord:'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And ye shall rejoice before the Lord your God, ye, and your sons, and your daughters, and your menservants, and your maidservants, and the Levite that is within your gates; forasmuch as he hath no part nor inheritance with you.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Take heed to thyself that thou offer not thy burnt offerings in every place that thou seest:'),
              ],
            },
            {
              number: 14,
              spans: [
                t('But in the place which the Lord shall choose in one of thy tribes, there thou shalt offer thy burnt offerings, and there thou shalt do all that I command thee.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-terumah',
          title: 'Terumah — &ldquo;heave offering&rdquo;',
          script: 'תְּרוּמָה',
          translit: '<strong>terumah</strong> · a contribution or gift lifted up',
          description:
            'The heave offering is a portion lifted from the harvest or herd and given to the Lord. It is the first and best, a gesture of gratitude and recognition of God&apos;s ownership.',
        },
        {
          kind: 'commentary',
          id: 'deut-eat',
          html:
            'A radical image: eat the offerings <em>before the Lord</em> at the one place He chooses. This is not private religion. Eat in community, in the presence of God&apos;s name-dwelling, with the Levite, the stranger, the orphan, and the widow. Worship and hospitality are woven together.',
        },
        {
          kind: 'commentary',
          id: 'deut-rest',
          html:
            'The phrase <em>rest and inheritance</em> appears twice in Deuteronomy — here and at 25:19. It refers to the end of the wanderings, the land entered, the enemies subdued. The place God chooses will exist only after Israel enters and settles. Until then, the wilderness pattern prevails.',
        },
        {
          kind: 'commentary',
          html:
            'Verse 8 names the Judges-era problem directly: &ldquo;every man whatsoever is right in his own eyes.&rdquo; This will become a refrain in the book of Judges (17:6, 21:25). Without the tether of God&apos;s chosen place, each tribe, each family, each person becomes a law unto themselves. Chaos is not freedom; it is abandonment.',
        },
        {
          kind: 'christ',
          id: 'deut-temple-christ',
          title: 'Christ Connection — The True Temple',
          html:
            'The temple in Jerusalem becomes the visible answer to this chapter — the one place God chooses to put His name. But Jesus Himself announced the temple&apos;s end: &ldquo;Destroy this temple, and in three days I will raise it up&rdquo; (John 2:19–21). He was speaking of His own body. The Woman at the Well asks Jesus where to worship — &ldquo;in this mountain, or yet at Jerusalem?&rdquo; Jesus answers: &ldquo;neither in this mountain, nor yet at Jerusalem... they that worship him must worship him in spirit and in truth&rdquo; (John 4:21–24). No more geography. The risen Christ is the place where the Father&apos;s name dwells.',
        },
        {
          kind: 'carry',
          html:
            'If you are in Christ, you have entered the reality Deuteronomy 12 points toward. You are not wandering, looking for high places to worship. The scattered places have been gathered into one Person. Your gathering is to Him. Your rejoicing is in His presence. This is rest.',
        },
        {
          kind: 'reflection',
          id: 'place-chosen',
          prompt:
            'How does it feel to know that the one place God has finally chosen is Jesus Himself, present everywhere His Spirit dwells? What changes in your worship when you know this?',
        },
      ],
    },

    /* ─── Section 3: Common Eating vs. Sacred Offerings ──────────────── */
    {
      ref: 'Deuteronomy 12:15–28',
      title: 'Common Eating vs. Sacred Offerings',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 15,
              spans: [
                t('Notwithstanding thou mayest kill and eat flesh in all thy gates, whatsoever thy soul lusteth after, '),
                hg('according to the blessing of the Lord thy God', 'deut-blessing'),
                t(' which he hath given thee: the unclean and the clean may eat thereof, as of the roebuck, and as of the hart.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Only ye shall not eat the '),
                hy('blood', 'hebrew-dam'),
                t(': ye shall pour it upon the earth as water.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Thou mayest not eat within thy gates the tithe of thy corn, or of thy wine, or of thy oil, or the firstlings of thy herds or of thy flock, nor any of thy vows which thou vowest, nor thy freewill offerings, or heave offering of thine hand:'),
              ],
            },
            {
              number: 18,
              spans: [
                t('But thou must eat them before the Lord thy God in the place which the Lord thy God shall choose, thou, and thy son, and thy daughter, and thy manservant, and thy maidservant, and the Levite that is within thy gates: and thou shalt rejoice before the Lord thy God in all that thou puttest thine hands unto.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Take heed to thyself that thou forsake not the Levite as long as thou livest upon the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-blessing',
          html:
            'Moses makes a distinction: you may eat ordinary flesh in your own towns, whatever you want, as long as God has blessed you with enough. This is not all eating sacred. Only the tithe, the vow, the firstling brought to the Lord&apos;s chosen place carries that weight.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-dam',
          title: 'Dam — &ldquo;blood&rdquo;',
          script: 'דָּם',
          translit: '<strong>dam</strong> · blood, life-force',
          description:
            'In Hebrew thought, the blood is not a byproduct. It is the essence of life itself. To shed blood is to release life. God reserves the right to receive it back at the altar.',
        },
        {
          kind: 'commentary',
          id: 'deut12-sacred-ordinary-divide',
          html:
            'A clear boundary separates what is sacred from what is ordinary. Ordinary flesh can be eaten anywhere with the blood poured out, but the tithe, vows, and firstlings must journey to the place God chooses. Sacred things stay sacred and do not blend with the everyday.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 20,
              spans: [
                t('When the Lord thy God shall '),
                hg('enlarge thy border', 'deut-enlarge'),
                t(', as he hath promised thee, and thou shalt say, I will eat flesh, because thy soul longeth to eat flesh; thou mayest eat flesh, whatsoever thy soul lusteth after.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('If the place which the Lord thy God hath chosen to put his name there be too far from thee, then thou shalt kill of thy herd and of thy flock, which the Lord hath given thee, as I have commanded thee, and thou shalt eat in thy gates whatsoever thy soul lusteth after.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Even as the roebuck and the hart is eaten, so thou shalt eat them: the unclean and the clean shall eat of them alike.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Only sure that thou '),
                hp('eat not the blood', 'deut-blood-life'),
                t(': for the '),
                hy('blood is the life', 'hebrew-nefesh'),
                t('; and thou mayest not eat the life with the flesh.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('Thou shalt not eat it; thou shalt pour it upon the earth as water.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('Thou shalt not eat it; that it may go well with thee, and with thy children after thee, when thou shalt do that which is right in the sight of the Lord.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('Only thy holy things which thou hast, and thy vows, thou shalt take, and go unto the place which the Lord shall choose:'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And thou shalt offer thy burnt offerings, the flesh and the blood, upon the altar of the Lord thy God: and the blood of thy sacrifices shall be poured out upon the altar of the Lord thy God, and thou shalt eat the flesh.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('Observe and hear all these words which I command thee, that it may go well with thee, and with thy children after thee for ever, when thou doest that which is good and right in the sight of the Lord thy God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-enlarge',
          html:
            'A practical concession: as the land grows and the shrine becomes distant, hunting for food will be permitted anywhere — but the blood prohibition holds everywhere. The sacred prohibition travels with the people. What belongs to God never becomes ordinary.',
        },
        {
          kind: 'commentary',
          id: 'hebrew-nefesh',
          html:
            'The Hebrew word <em>nefesh</em> (translated here as &ldquo;life&rdquo;) can mean soul, life, breath, appetite, person. The blood <em>is</em> the nefesh. To consume it is to consume the principle of life itself, which belongs to God, not to the eater. This is why the prohibition echoes through Leviticus and is taught to Noah (Genesis 9:4). It is a perpetual mark of reverence.',
        },
        {
          kind: 'christ',
          id: 'deut-blood-life',
          title: 'Christ Connection — Blood, Life, and Covenant',
          html:
            'Paul writes, &ldquo;without shedding of blood is no remission of sins&rdquo; (Hebrews 9:22). Every sacrifice under the old covenant pointed to this: the blood is the life, and only the shedding of innocent blood can cover human sin. Jesus at the Last Supper says of the cup, &ldquo;This is my blood of the new testament, which is shed for many for the remission of sins&rdquo; (Matthew 26:28). The blood prohibition, far from being abolished, is transfigured. The blood of animals was a perpetual reminder that sin costs life. The blood of Christ is the once-for-all reality that paid the cost.',
        },
        {
          kind: 'carry',
          html:
            'We live in a culture that does not think about the cost of things — blood, life, sacrifice. We consume freely and without reckoning. But you know, if you have tasted the gospel, that everything you have is purchased by blood — the blood of Jesus. Not abstractly. His actual sacrifice. What would change if you lived as though this were literally true?',
        },
        {
          kind: 'reflection',
          id: 'blood-life',
          prompt:
            'The text says the blood is the life and belongs to God alone. What does it mean that Jesus gave His blood for you? How should that shape the way you live?',
        },
      ],
    },

    /* ─── Section 4: Do Not Seek the Gods of the Nations ───────────── */
    {
      ref: 'Deuteronomy 12:29–31',
      title: 'Do Not Seek the Gods of the Nations',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 29,
              spans: [
                t('When the Lord thy God shall cut off the nations from before thee, whither thou goest to possess them, and thou succeedest them, and dwellest in their land;'),
              ],
            },
            {
              number: 30,
              spans: [
                t('Take heed to thyself that thou be not '),
                hg('snared by following them', 'deut-snare'),
                t(', after that they be destroyed from before thee; and that thou enquire not after their gods, saying, How did these nations serve their gods? even so will I do likewise.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('Thou shalt not do so unto the Lord thy God: for every abomination to the Lord, which he hateth, have they done unto their gods; for even their sons and their daughters '),
                hy('they have burnt in the fire', 'deut-child-burn'),
                t(' to their gods.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-snare',
          html:
            'The warning is psychological and spiritual. Israel will be tempted to ask: how did they do it? What was their secret? Why did they seem to prosper? The remedy is not to ask the question at all. Do not even investigate. Curiosity about the idolatry of the nations is the door through which Israel&apos;s own idolatry will enter.',
        },
        {
          kind: 'commentary',
          id: 'deut-child-burn',
          html:
            'This is not hyperbole. Archaeology confirms that Phoenician and Canaanite religious practice included child sacrifice — the burning of the firstborn to Molech or Baal, especially during times of crisis. This is what Israel is inheriting the land from. Moses is saying: you are not inheriting a cultural treasure. You are inheriting a cemetery. Do not learn its religion.',
        },
        {
          kind: 'commentary',
          html:
            'The structure of this verse is devastating. <em>Every abomination the Lord hateth.</em> Do not water down the moral reality with words like &ldquo;different.&rdquo; These are abominations. The Lord hates them. The sooner Israel stops asking &ldquo;how?&rdquo; and starts saying &ldquo;no,&rdquo; the safer she will be.',
        },
        {
          kind: 'carry',
          html:
            'We live in a pluralist culture that teaches us to ask: how do they do it? What works for them? Maybe there&apos;s wisdom in their practices? Deuteronomy 12:30 is Moses saying: you are not obligated to find out. Some doors do not need to be opened. Some questions do not need to be investigated. Your life is safer if you do not try to make a hybrid faith — a little of God&apos;s word, a little of what the world finds compelling. The world burns its children. You serve the God of life.',
        },
        {
          kind: 'reflection',
          id: 'nations-gods',
          prompt:
            'Where are you tempted to ask &ldquo;how did they do it?&rdquo; — imitating the world&apos;s way, even slightly? What would it mean to say &ldquo;no&rdquo; without even investigating?',
        },
      ],
    },

    /* ─── Section 5: Add Not, Diminish Not ────────────────────────────── */
    {
      ref: 'Deuteronomy 12:32',
      title: 'Add Not, Diminish Not',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 32,
              spans: [
                t('What thing soever I command you, observe to do it: thou shalt '),
                hp('not add thereto, nor diminish from it', 'deut-add-diminish'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut-add-diminish',
          html:
            'This verse is the hinge and seal of the whole chapter. Every command Moses has given — about the high places, the chosen place, the blood, the rejection of foreign gods — rests on this foundation: the Lord&apos;s word is complete. Do not add traditions of your own. Do not subtract commands you find inconvenient. Take it as it stands.',
        },
        {
          kind: 'commentary',
          html:
            'The temptation to add is the Pharisee path: layering tradition upon Scripture until the original word is buried. The temptation to diminish is the liberal path: trimming the hard edges, keeping only what feels modern. Both are equally forbidden. The word of the Lord stands as it is given.',
        },
        {
          kind: 'christ',
          id: 'deut-revelation-echo',
          title: 'Christ Connection — The Word Stands',
          html:
            'The book of Revelation ends with an almost identical warning: &ldquo;If any man shall add unto these things, God shall add unto him the plagues that are written in this book: and if any man shall take away from the words of the book of this prophecy, God shall take away his part out of the book of life&rdquo; (Revelation 22:18–19). The principle is eternal. The word God gives is the word God intends. There is no improving upon it.',
        },
        {
          kind: 'carry',
          html:
            'In a time when every person is their own authority, when we edit our beliefs the way we edit our social media feeds — keeping what feels good, erasing what doesn&apos;t — this verse is a call back to something older and wiser. Take God&apos;s word as it is. Trust that it is complete. You are not smarter than it.',
        },
        {
          kind: 'reflection',
          id: 'add-diminish',
          prompt:
            'Where are you tempted to add to God&apos;s word or diminish from it? What would it look like to receive it exactly as it is given?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Deuteronomy 12',
    quote:
      'Seek the one place God chooses to put His name there. Bring your offerings, rejoice before the Lord, and eat in that place with the Levite, the stranger, the fatherless, and the widow. Take God&apos;s word as it is: add nothing, diminish nothing.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 12 · Study Guide',
  },

  hasHebrew: true,
};
