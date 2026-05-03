import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 20 - Abraham\'s lie about Sarah, and God\'s faithfulness
 * despite the patriarch\'s fear and deception.
 *
 * Abraham journeys to Gerar and tells Abimelech that Sarah is his sister,
 * not his wife. This is not the first time he has done this - he played the
 * same game in Egypt (Genesis 12). God appears to Abimelech in a dream,
 * warns him off Sarah, and calls Abraham a prophet. Abimelech confronts
 * Abraham, restores Sarah, and gives Abraham gifts and land. Abraham prays
 * for Abimelech\'s household, and God heals the women - including Abimelech\'s
 * wife. The pagan king in this chapter is more honorable than the patriarch,
 * and the text does not hide it.
 *
 * This is a chapter about fear, shortcuts, shame, and the grace of God that
 * runs ahead of our failures. It should embarrass us into honesty.
 */
export const GENESIS_20: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 20,

  estimatedMinutes: { beginner: 7, intermediate: 11, deep: 15 },
  intros: [
    'Abraham is seventy-five verses into the most important promise God ever made - that Sarah will bear a son, that he will have descendants like the stars, that through him all nations will be blessed. And now, faced with a foreign king, Abraham does something that reveals a crack in his faith: he tells Sarah to say she is his sister, not his wife. This is not the first time. Twelve chapters earlier, he played the same half-truth in Egypt. He is afraid.',
    'Here is what matters: God does not let His promise hang on Abraham\'s courage. When a patriarch fails, God does not fail. What unfolds in Gerar is a story about fear driving a shortcut, [res:bibleodyssey-abraham-covenant] and grace running ahead to catch it. It is also a story about a pagan king whose conscience is cleaner than a patriarch\'s - a scandal that the text will not let us miss.',
  ],

  bottomShare: {
    label: 'Share Genesis 20',
    quote:
      'Abraham feared a king and told a half-truth to save his own skin. God protected Sarah anyway. Abimelech\'s conscience convicted him. Abraham\'s prayer healed a foreign household. Fear gave way to grace.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 20 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-20',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Genesis 20 · Hebrew + Jewish commentary',
      url: 'https://www.sefaria.org/Genesis.20',
      description: 'Hebrew text with rabbinic commentary on Abraham&apos;s fear, God&apos;s protection, and grace in the midst of failure.',
    },
    {
      id: 'pennmuseum-gerar-abimelech',
      kind: 'museum',
      source: 'Penn Museum',
      label: 'Ancient Gerar and Philistine Archaeology',
      url: 'https://www.penn.museum/collections/west-asia/',
      description: 'Archaeological evidence from ancient Gerar and its kings, illuminating the political and cultural context of Abraham&apos;s sojourn.',
    },
    {
      id: 'bibleodyssey-abraham-covenant',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Abraham and the Covenant',
      url: 'https://www.bibleodyssey.org/articles/abraham-sarah/',
      description: 'SBL article on Abraham&apos;s struggles with faith, God&apos;s faithfulness despite human failure, and the protection of Sarah.',
    },
  ],

  sections: [
    /* ─── Genesis 20:1-2 - Abraham\'s Fear at Gerar ────────────────────── */
    {
      ref: 'Genesis 20:1-2',
      title: 'Abraham\'s Lie',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 1,
              spans: [
                t('And Abraham journeyed from thence toward the south country, and dwelled between '),
                t('Kadesh and Shur'),
                t(', and sojourned in '),
                hy('Gerar', 'hebrew-gerar'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And Abraham said of '),
                hg('Sarah his wife', 'c-sarah-wife'),
                t(', '),
                hp('She is my sister', 'christ-protection'),
                t(': and Abimelech king of Gerar sent, and took Sarah.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-gerar',
          title: 'Gerar - גְּרָר - &ldquo;lodging place&rdquo;',
          script: 'גְּרָר',
          translit: '<strong>gerar</strong> · lodging place, inn',
          description:
            'Gerar is a region south of Canaan, a place where Abraham stops but does not stay - a place he fears he is just passing through. The name itself suggests temporary shelter, and Abraham&apos;s fear turns it into a place where he cannot be honest about who Sarah is.',
        },
        {
          kind: 'commentary',
          id: 'c-sarah-wife',
          html:
            'Abraham calls Sarah &ldquo;my sister,&rdquo; but she is his wife. This is his second time playing this game. He did it in Egypt twelve chapters ago, and God rescued Sarah then too. Abraham has learned nothing; he has only rehearsed a lie. The text does not soften this. It names what he said and who she actually is - wife, not sister - so you cannot miss the gap between them[res:sefaria-genesis-20][res:pennmuseum-gerar-abimelech].',
        },
        {
          kind: 'commentary',
          id: 'c-pattern',
          html:
            'The pattern is clear: Abraham fears a place. He assumes the people have no fear of God. He makes a choice that puts his own skin first and Sarah&apos;s dignity second. He is not driven by evil - he is driven by cowardice. And that cowardice is dressed up as strategy. &ldquo;Surely the fear of God is not in this place,&rdquo; he will say in verse 11. But fear is exactly what he is running from, and what runs him into a lie.',
        },
        {
          kind: 'carry',
          html:
            'When you are afraid, you become very creative at naming your fear as something else. Caution. Wisdom. Protection. Practicality. You tell yourself a story that makes the lie sound like the sensible choice. Abraham did. But the text is patient here - it lets his lie sit, unnamed and unjustified, and in that silence you can see what you have seen in yourself: the moment you choose your own safety over someone else&apos;s honor, you have already lost the argument with yourself.',
        },
        {
          kind: 'reflection',
          id: 'gen20-fear',
          prompt:
            'Where does fear drive you to tell a half-truth or protect yourself at someone else&apos;s expense? What would it cost to be honest instead?',
        },
        {
          kind: 'christ',
          id: 'christ-protection',
          title: 'Christ Connection - The Unreliable Servant',
          html:
            'Here is what will NOT happen: Sarah will not be violated, the promise will not be broken, and God will not leave Abraham to pay for his cowardice alone. God does not wait for Abraham to confess. He comes to Abimelech in a dream. The protection Abraham tried to buy with a lie is given freely. Paul will draw the line: &ldquo;God is not ashamed to be called their God: for he hath prepared for them a city&rdquo; (Heb. 11:16). Abraham&apos;s faith is weak, but God&apos;s covenant is not. In the New Testament, the risen Jesus prays for Peter before Peter even denies Him (Luke 22:31-32). The protecting hand moves ahead of our failure, not behind it, waiting to punish.',
        },
      ],
    },

    /* ─── Genesis 20:3-7 - God Warns Abimelech ─────────────────────────── */
    {
      ref: 'Genesis 20:3-7',
      title: 'God Appears to the King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 3,
              spans: [
                t('But God came to Abimelech in a '),
                hg('dream by night', 'c-dream'),
                t(', and said unto him, Behold, thou art but a '),
                hy('dead man', 'c-dead'),
                t(', for the woman which thou hast taken; for she is a man\'s wife.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('But Abimelech had not come near her: and he said, Lord, wilt thou slay also a righteous nation?'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Said he not unto me, She is my sister? and she, even she herself said, He is my brother: wherefore have I done this in the innocency of my heart?'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And God said unto him in a dream, Yea, I know that thou didst this in the innocency of thy heart; for I also withheld thee from sinning against me: therefore suffered I thee not to touch her.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Now therefore restore the man\'s wife; for he is a '),
                hy('prophet', 'hebrew-navi'),
                t(', and he shall pray for thee, that thou mayest live: and if thou restore her not, know thou that thou shalt surely die, thou, and all that are thine.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-dream',
          html:
            'God does not appear to Abraham to warn him. He appears to Abimelech. And He does it tenderly - &ldquo;in the innocency of thy heart,&rdquo; God tells the king. Abraham lied, but Abimelech walked in innocence. God is not punishing Abimelech; He is protecting him. This is a king who did not know Sarah was married, and God saw that he took her with clean hands.',
        },
        {
          kind: 'commentary',
          id: 'c-dead',
          html:
            'The Hebrew is blunt: you are a dead man. Not because you took her - you took her in innocence - but because she is someone else\'s wife. God is telling Abimelech something he did not know Abraham knew: that some boundaries matter more than a king\'s desires, that taking what belongs to another person, even without malice, is a kind of death. Abimelech will learn righteousness from a dream, not from the man who lied to him.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-navi',
          title: 'Navi - נָבִיא - &ldquo;prophet&rdquo;',
          script: 'נָבִיא',
          translit: '<strong>navi</strong> · a prophet, one who speaks forth God\'s words',
          description:
            'This is the first time the word &ldquo;prophet&rdquo; appears in the Bible. God does not call Abraham a covenant-keeper or a righteous man. He calls him a prophet - a man who will pray, a man whose intercession matters, a man whose prayer for others will change things. Abraham\'s identity, when God names it, is not built on his faithfulness but on his calling to pray for the world.',
        },
        {
          kind: 'commentary',
          id: 'c-innocent',
          html:
            'Abimelech is innocent. He did not know. He is also quick to repent - he does not argue or defend himself. And God, seeing his innocency and his repentance, makes it clear: restore her, and the prophet will pray for you. The prophet - the man who just lied about his wife - will now be given the task of interceding for a foreign king. Failure does not disqualify Abraham from his calling. It only teaches him what his calling is.',
        },
        {
          kind: 'carry',
          html:
            'What if someone walked into your house and, without knowing it, picked up something precious that was not theirs to pick up? You would feel it immediately - the wrongness would be clean and sharp. Abimelech felt it in a dream. God did not leave him to violate Sarah\'s marriage by accident. And He did not leave you, either, to stumble into sin without some kind of witness - a dream, a still voice, a thought that will not leave you alone. The question is whether you will listen to it as fast as Abimelech did.',
        },
        {
          kind: 'reflection',
          id: 'gen20-dream',
          prompt:
            'When has God warned you off something - not through anger, but through a quiet, unavoidable knowing? Did you listen?',
        },
      ],
    },

    /* ─── Genesis 20:8-13 - Abimelech Confronts Abraham ──────────────── */
    {
      ref: 'Genesis 20:8-13',
      title: 'The King\'s Rebuke',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 8,
              spans: [
                t('Therefore Abimelech rose early in the morning, and called all his servants, and told all these things in their ears: and the men were sore afraid.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Then Abimelech called Abraham, and said unto him, '),
                hp('What hast thou done unto us?', 'christ-shame'),
                t(' and what have I offended thee, that thou hast brought on me and on my kingdom a great sin? thou hast done deeds unto me that ought not to be done.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And Abimelech said unto Abraham, What sawest thou, that thou hast done this thing?'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And Abraham said, '),
                hy('Because I thought, Surely the fear of God is not in this place', 'hebrew-yir-at'),
                t('; and they will slay me for my wife\'s sake.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And yet indeed she is my sister; she is the daughter of my father, but not the daughter of my mother; and she became my wife.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And it came to pass, when God caused me to wander from my father\'s house, that I said unto her, This is thy kindness which thou shalt shew unto me; at every place whither we shall come, say of me, He is my brother.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yir-at',
          title: 'Yir\'at Elohim - יִרְאַת אֱלֹהִים - &ldquo;fear of God&rdquo;',
          script: 'יִרְאַת אֱלֹהִים',
          translit: '<strong>yir\'at elohim</strong> · the fear of God, reverence for the divine',
          description:
            'Abraham assumes that Gerar, a foreign place, lacks the fear of God. But God is present everywhere - He proves it by coming to Abimelech in a dream. Abraham\'s assumption is wrong. More than that: the pagan king will turn out to have more of it than the patriarch does.',
        },
        {
          kind: 'commentary',
          id: 'c-abimelech-rebuke',
          html:
            'Abimelech asks Abraham the question that matters: &ldquo;What hast thou done unto us? What have I offended thee, that thou hast brought on me and on my kingdom a great sin?&rdquo; Abraham has treated a king as if he were beneath honesty. Abraham has made the king complicit in deception. And Abraham answers by explaining his fear, not by repenting. He does not say, &ldquo;I was wrong.&rdquo; He says, &ldquo;I thought you had no fear of God.&rdquo; He justifies his lie by his assumptions about Gerar. He does not name what he did.',
        },
        {
          kind: 'commentary',
          id: 'c-sister-wife',
          html:
            'Then Abraham reaches for something that is technically true - Sarah is his sister, the daughter of his father. But it is a truth that covers a lie. He was married to her; he told Abimelech she was single. His half-truth does not undo his lie. It only shows how carefully a lie can be dressed up in fragments of honesty. The worst lies are always the ones that have a grain of truth in them.',
        },
        {
          kind: 'christ',
          id: 'christ-shame',
          title: 'Christ Connection - Shame and Restoration',
          html:
            'Abraham feels the shame now - he is being corrected by a king he assumed was godless. And that king is acting more righteous than he is. Jesus will teach His disciples to watch for this moment: &ldquo;The publicans and the harlots go into the kingdom of God before you&rdquo; (Matt. 21:31). Shame is the beginning of honesty. Abimelech - the outsider, the pagan - becomes the one who teaches Abraham what righteousness looks like. That reversal is not accidental. The Gospel moves outward and inward at the same time: the foreigner sometimes sees the kingdom before the covenant-keeper does.',
        },
        {
          kind: 'carry',
          html:
            'Someone you did not expect to see so clearly will sometimes rebuke you with more grace than you deserve. A stranger will be more honest with you than a friend. A foreigner will call you to account when your own people will let you slide. When that happens, listen. Don\'t defend yourself. Don\'t reach for the grain of truth in your half-truth. Just feel the shame, and let it teach you to be honest the next time.',
        },
        {
          kind: 'reflection',
          id: 'gen20-rebuke',
          prompt:
            'When has someone outside your circle seen you more clearly than you saw yourself? What did their honesty cost you, and what did it give you?',
        },
      ],
    },

    /* ─── Genesis 20:14-18 - Restoration and Prayer ──────────────────── */
    {
      ref: 'Genesis 20:14-18',
      title: 'Healing Through Prayer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 14,
              spans: [
                t('And Abimelech took sheep, and oxen, and menservants, and womenservants, and gave them unto Abraham, and restored him Sarah his wife.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And Abimelech said, Behold, my land is before thee: dwell where it pleaseth thee.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And unto Sarah he said, Behold, I have given thy brother a thousand pieces of silver: behold, he is to thee a covering of the eyes, unto all that are with thee, and with all other: thus she was reproved.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('So '),
                hp('Abraham prayed unto God', 'christ-intercession'),
                t(': and God '),
                hg('healed Abimelech, and his wife, and his maidservants', 'c-healing'),
                t('; and they bare children.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('For the LORD had '),
                t('fast closed up all the wombs of the house of Abimelech'),
                t(', because of Sarah Abraham\'s wife.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-restoration',
          html:
            'Abimelech does everything a righteous king would do. He returns Sarah. He gives Abraham gifts - not as payment, but as a sign that Abraham is welcome in Gerar. He gives Abraham land to dwell where he chooses. And he speaks to Sarah to restore her honor - &ldquo;Behold, I have given thy brother a thousand pieces of silver: behold, he is to thee a covering of the eyes.&rdquo; He is saying: everyone knows now that you were wronged. Everyone knows that I restored you. Your honor is covered. Abimelech teaches Abraham - and teaches the Bible\'s readers - what genuine repentance and restoration look like.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-wombs',
          title: 'Atzar - אָצַר - &ldquo;to shut up, close&rdquo;',
          script: 'אָצַר',
          translit: '<strong>atzar</strong> · to shut, to close, to confine',
          description:
            'God had closed up the wombs of Abimelech\'s household because Sarah was taken. The closing was not punishment; it was protection - a barrier between the foreign household and sin. Now, through Abraham\'s prayer, God will open what He closed, and the household will bear children.',
        },
        {
          kind: 'commentary',
          id: 'c-healing',
          html:
            'God heals Abimelech. But who prayed for Abimelech? Not God. Not an angel. Abraham. Abraham - the one who lied about his wife to Abimelech\'s face - is the one whose prayer heals the king. This is the prophet\'s calling: to stand between a person and God, to offer intercession, to pray for those who wronged you. Abraham has to pray for Abimelech to be healed. That is his calling, and his shame, and his redemption, all in one moment.',
        },
        {
          kind: 'christ',
          id: 'christ-intercession',
          title: 'Christ Connection - The Mediator\'s Prayer',
          html:
            'Abraham prayed, and God healed Abimelech. Centuries later, Paul writes: &ldquo;I exhort therefore, that, first of all, supplications, prayers, intercessions, and giving of thanks, be made for all men&rdquo; (1 Tim. 2:1). The pattern from Genesis 20 becomes the pattern of the Church: the one who knows God prays for the one who doesn\'t. Abraham begins a pattern that Christ will fulfill. Jesus does not just pray for His disciples; He prays for the world - for those who will believe on Him through the disciples\' word (John 17:20). The intercession of the just makes a way for the healing of nations.',
        },
        {
          kind: 'carry',
          html:
            'You are being asked to pray for people you may have wronged, or who have wronged you, or who simply live in a world where God is removing His hand to teach. That is the pattern. The prayer is not punishment; it is the way God chooses to heal things. Your prayer for someone else matters more than you think - it may be the only prayer standing between them and the full force of their own choices. Pray for the one you lied to. Pray for the one who wronged you. Pray for the country you fear. That is the prophet\'s calling.',
        },
        {
          kind: 'reflection',
          id: 'gen20-prayer',
          prompt:
            'Who do you need to pray for - someone you\'ve wronged, someone who\'s wronged you, or someone you\'ve been afraid of? What would change if you started today?',
        },
        {
          kind: 'artwork',
          matchTitle: /abimelech|abraham.*king/i,
          caption: 'Genesis 20:14-18 · Restoration and Healing',
        },
      ],
    },
  ],

  hasHebrew: true,
};
