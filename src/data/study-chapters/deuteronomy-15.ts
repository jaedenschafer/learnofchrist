import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 15 — The Year of Release and the Open Hand.
 *
 * Every seventh year, debts are cancelled and Hebrew slaves are freed.
 * But the chapter is not primarily about economics. It is about the heart.
 * God builds into His law a rhythm that trains His people to be generous,
 * to refuse hardness toward the poor, and to remember that they were slaves
 * too. The pierced-ear servant who chooses bondage out of love is one of
 * Scripture's most moving types of Christ—the servant whose love binds Him
 * to His Father's house and to the world&apos;s redemption.
 */
export const DEUTERONOMY_15: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 15,

  estimatedMinutes: { beginner: 8, intermediate: 14, deep: 18 },
  intros: [
    'Deuteronomy 15 returns to the seventh-year law—shemittah, the year of release. Every creditor releases what he lent his neighbor; debts fall away; Hebrew slaves go free. It is a law that most nations find economically insane. Who would lend money if the debt were cancelled seven years later? Who would buy a slave knowing he must be freed? The answer is this: a nation that trusts God, not systems. A people trained by law to live by generosity, not accumulation.',
    'But the chapter&apos;s heart is not the rule. It is the warning against the human heart that resists it. "Beware that there be not a thought in thy wicked heart, saying, The seventh year, the year of release, is at hand." When release is coming, the temptation is to close your hand. The law commands the opposite: "Thou shalt surely give him, and thine heart shall not be grieved when thou givest unto him: because that for this thing the Lord thy God shall bless thee in all thy works." God is not interested in external obedience to a schedule. He is training His people to have His heart toward the poor.',
    'The second half of the chapter shifts to the Hebrew slave and the law of the pierced ear. When a slave says "I will not leave thee... because he loveth thee and thine house," an awl pierces his ear to the doorpost. He becomes a servant forever—a shocking, tender image that Psalm 40 reads as a portrait of Christ Himself, the servant whose love binds Him eternally to His Father&apos;s will and to our salvation.',
  ],

  opener: {
    matchTitle: /release|freedom|slave|servant|compassion|mercy|poor/i,
    caption: 'Deuteronomy 15 · Every Seventh Year',
  },

  sections: [
    /* ─── Deuteronomy 15:1–6 — The Year of Release ───────────────────── */
    {
      ref: 'Deuteronomy 15:1–6',
      title: 'The Year of Release and the Open Hand',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 1,
              spans: [
                t('At the '),
                t('end of every seven years'),
                t(' thou shalt make a '),
                hg('release', 'shemittah-word'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And this is the manner of the release: Every creditor that lendeth ought unto his neighbour shall '),
                hp('release it', 'christ-release'),
                t('; he shall not exact it of his brother; because the LORD&apos;s release is proclaimed.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Of a foreigner thou mayest exact it again: but that which is thine with thy brother thine hand shall '),
                hg('release', 'release-brother'),
                t('.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Save when there shall be no poor among you; for the LORD shall greatly bless thee in the land which the LORD thy God giveth thee for an inheritance to possess it:'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Only if thou carefully hearkenest unto the voice of the LORD thy God, to observe to do all these commandments which I command thee this day.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('For the LORD thy God blesseth thee, as he promised thee: and thou shalt lend unto many nations, and thou shalt not borrow; and thou shalt reign over many nations, and they shall not reign over thee.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shemittah',
          title: 'Shemittah — &ldquo;release&rdquo;',
          script: 'שְׁמִטָּה',
          translit: '<strong>shemittah</strong> · release; the letting fall of debt',
          description:
            'From the root <strong>shamat</strong>, "to let drop, to release." Every seventh year, debts drop away. The word appears twice in verse 2—the Lord&apos;s release is proclaimed, and the creditor releases what he lent. God&apos;s generosity is the pattern human generosity is meant to echo.',
        },
        {
          kind: 'commentary',
          id: 'shemittah-word',
          html:
            'The year of release is announced at the start: every seven years, debts are forgiven. This is not a hidden law—it is proclaimed openly. The creditor knows it. The debtor knows it. And when the seventh year comes, "he shall not exact it of his brother; because the LORD&apos;s release is proclaimed." The timing is fixed. The rule is clear. But the heart is the question.',
        },
        {
          kind: 'commentary',
          id: 'release-brother',
          html:
            'The law distinguishes between a foreigner and a brother. From a foreigner you may exact the debt again. But with your brother, your hand shall release. Israelite law is fundamentally relational—it is built on kinship. Your brother is not a commercial transaction. He is family. And family does not accumulate debt against family; family releases.',
        },
        {
          kind: 'christ',
          id: 'christ-release',
          title: 'Christ Connection — The Release Proclaimed',
          html:
            'Jesus enters His ministry reading from Isaiah 61: "The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor; he hath sent me to heal the brokenhearted, to preach deliverance to the captives... to preach the acceptable year of the LORD" (Luke 4:18–19). The "acceptable year of the LORD" is jubilee language—the proclamation of release. Jesus is announcing that the ultimate seventh year, the ultimate forgiveness, has arrived. The debts are cancelled. The slaves go free. And it is not waiting for a calendar year. It is now. It is in Him.',
        },
        {
          kind: 'carry',
          html:
            'You live in the year of release. The debts you thought were permanent have been proclaimed forgiven. The entanglement you thought would bind you forever is broken. This is not a promise for some future seventh year. This is now. The trumpet has sounded. The release is proclaimed. The only question left is whether you will open your hand to others as He has opened it to you.',
        },
        {
          kind: 'reflection',
          id: 'reflect-release',
          prompt:
            'What debts—real or spiritual—do you think you will be carrying forever? What would it feel like to have them proclaimed forgiven?',
        },
      ],
    },

    /* ─── Deuteronomy 15:7–11 — The Wicked Thought and the Open Hand ──── */
    {
      ref: 'Deuteronomy 15:7–11',
      title: 'Beware the Closed Heart: The Seventh Year Temptation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 7,
              spans: [
                t('If there be among you a poor man of one of thy brethren within any of thy gates in thy land which the LORD thy God giveth thee, thou shalt '),
                hg('not harden thine heart', 'hardened-heart'),
                t(', nor shut thine hand from thy poor brother:'),
              ],
            },
            {
              number: 8,
              spans: [
                t('But thou shalt '),
                hg('open thine hand wide', 'open-hand-wide'),
                t(' unto him, and shalt surely lend him sufficient for his need, in that which he wanteth.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Beware that there be not a '),
                hy('thought in thy wicked heart', 'wicked-thought'),
                t(', saying, The seventh year, the year of release, is at hand; and thine eye be evil against thy poor brother, and thou '),
                t('givest him nought'),
                t('; and he '),
                t('cry unto the LORD'),
                t(' against thee, and it be sin unto thee.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Thou shalt '),
                hg('surely give him', 'surely-give'),
                t(', and thine heart shall not be grieved when thou givest unto him: because that for this thing the LORD thy God shall bless thee in all thy works, and in all that thou puttest thine hand unto.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('For the poor shall never cease out of the land: therefore I command thee, saying, Thou shalt '),
                t('open thine hand wide'),
                t(' unto thy brother, to thy poor, and to thy needy, in thy land.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-evyon',
          title: 'Evyon — &ldquo;the needy, poor&rdquo;',
          script: 'אֶבְיוֹן',
          translit: '<strong>evyon</strong> · the needy, poor, destitute',
          description:
            'The word appears multiple times in these verses. Evyon is not a temporary inconvenience but a condition of real poverty. The command is not conditional on economic success; it is an absolute. Open your hand to the evyon. God sees the poor. And He sees the heart that refuses them.',
        },
        {
          kind: 'commentary',
          id: 'hardened-heart',
          html:
            'The law opens not with a rule but with a warning: "Thou shalt not harden thine heart, nor shut thine hand from thy poor brother." The danger is not external. It is internal. It is possible to hear the seventh-year law and respond by closing your heart, not opening it. The human heart is capable of a coldness that refuses generosity because it knows the obligation will soon end.',
        },
        {
          kind: 'commentary',
          id: 'wicked-thought',
          html:
            'Here is the precise temptation: "Beware that there be not a thought in thy wicked heart, saying, The seventh year, the year of release, is at hand." When you know the debt will be forgiven, the temptation is to withhold the loan. Why give if it will not come back? The law acknowledges this temptation and forbids it as sin. A thought—an internal calculation—can be sin. A heart closed by reason is still a closed heart.',
        },
        {
          kind: 'commentary',
          id: 'open-hand-wide',
          html:
            'The command is not subtle: "Open thine hand wide." Not apologetically. Not reluctantly. Wide. The word recurs twice in these verses (8 and 11), making it the heartbeat of the passage. The measure of a nation&apos;s faithfulness to God is not its wealth or power. It is how wide open its hands are toward the poor.',
        },
        {
          kind: 'commentary',
          id: 'surely-give',
          html:
            '"Thou shalt surely give him, and thine heart shall not be grieved when thou givest unto him: because that for this thing the LORD thy God shall bless thee in all thy works." Notice the condition: not merely giving, but giving without grief. Without resentment. Without the internal protest. The gift must come from a heart that is not calculating its loss. And the promise is that God will bless the one who gives this way—not because generosity is good business, but because it reflects His character.',
        },
        {
          kind: 'commentary',
          id: 'poor-never-cease',
          html:
            '"For the poor shall never cease out of the land." This is not pessimism. It is realism. Even if you walk in perfect obedience and the Lord blesses you fully, there will still be poor. Poverty is not a sign of God&apos;s absence. It is a constant reminder that you have a brother who needs, and your open hand is where God is present.',
        },
        {
          kind: 'carry',
          html:
            'The next time you catch yourself calculating whether a gift is worth it—whether the person deserves it, whether it will come back—you have caught yourself in the temptation of Deuteronomy 15. Open your hand wide. Not because it makes business sense. Because God has opened His toward you, and you are His image in the world.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'reflect-open-hand',
          prompt:
            'What closes your hand toward someone in need? What would it take for you to open it wide, without grieving the gift?',
        },
      ],
    },

    /* ─── Deuteronomy 15:12–15 — The Hebrew Slave Freed With Generosity ── */
    {
      ref: 'Deuteronomy 15:12–15',
      title: 'The Freed Slave: Let Them Go Full',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 12,
              spans: [
                t('And if thy brother, an Hebrew man, or an Hebrew woman, be sold unto thee, and serve thee six years; then in the seventh year thou shalt '),
                hg('let him go free', 'go-free-sixth'),
                t(' from thee.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And when thou sendest him out free from thee, thou shalt not let him go away '),
                hy('empty', 'not-empty'),
                t(':'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Thou shalt '),
                hg('furnish him liberally', 'furnish-liberally'),
                t(' out of thy flock, and out of thy floor, and out of thy winepress: as the LORD thy God hath blessed thee, thou shalt give unto him.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And thou shalt remember that thou wast a bondman in the land of Egypt, and the LORD thy God '),
                t('redeemed thee'),
                t(': therefore I command thee this thing to day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'go-free-sixth',
          html:
            'The law is direct: six years of service, then freedom. No negotiation. No extension. The Hebrew slave goes free in the seventh year. But the chapter does not stop at freedom. It moves to the question: free into what?',
        },
        {
          kind: 'commentary',
          id: 'not-empty',
          html:
            'Here is the revolutionary word: thou shalt not let him go away empty. Not merely free, but provisioned. Not just released from servitude, but sent forward with dignity and means. The freed slave leaves not naked into the world but furnished—with animals, grain, wine. Everything he needs to start again.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ratsa',
          title: 'Ratsa — &ldquo;to pierce, bore&rdquo;',
          script: 'רָצַע',
          translit: '<strong>ratsa</strong> · pierce, bore (as with an awl); to pierce the ear',
          description:
            'This word appears in verse 17. When a servant loves his master and chooses to stay permanently, an awl pierces his ear. The pierced ear is a mark of love-bondage—a servant bound by choice, not coercion. Psalm 40:6 quotes this image to speak of Christ: "mine ears hast thou opened/digged"—a readiness to hear and do the Father&apos;s will eternally.',
        },
        {
          kind: 'commentary',
          id: 'furnish-liberally',
          html:
            '"Furnish him liberally out of thy flock, and out of thy floor, and out of thy winepress: as the LORD thy God hath blessed thee, thou shalt give unto him." Notice the generosity is not modest. It is liberal. It flows from the same abundance God has given you. You do not release a slave empty because God did not release you empty. He brought you out of Egypt with plunder—flocks, gold, jewels. You release your servant the same way.',
        },
        {
          kind: 'christ',
          id: 'christ-redeemed-egypt',
          title: 'Christ Connection — Released Full, Like Israel from Egypt',
          html:
            'The command circles back to memory: "Thou shalt remember that thou wast a bondman in the land of Egypt, and the LORD thy God redeemed thee." You were not just released. You were redeemed. And you did not go empty. Psalm 105 recounts: "He brought them forth also with silver and gold: and there was not one feeble person among their tribes" (Ps. 105:37). The freed slave is a living echo of Israel&apos;s exodus. And the exodus itself is an echo of a greater redemption: Christ, who "was delivered for our offences, and was raised again for our justification" (Rom. 4:25). He goes before us into a new life, furnished with all spiritual blessing. We follow, not empty, but full.',
        },
        {
          kind: 'carry',
          html:
            'You were released by someone who did not leave you empty. You carry that generosity into everything you release—a relationship, a dream, a season, even a person. Release them full. Not grudging. Not minimal. Full. As you have been filled by the One who redeemed you.',
        },
        {
          kind: 'reflection',
          id: 'reflect-furnish',
          prompt:
            'What or whom are you in the process of releasing? Are you furnishing them liberally, or sending them empty? What would it look like to give as you have been given to?',
        },
      ],
    },

    /* ─── Deuteronomy 15:16–17 — The Pierced Ear: Love-Bondage ────────── */
    {
      ref: 'Deuteronomy 15:16–17',
      title: 'The Pierced Ear: The Servant Who Chooses Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 16,
              spans: [
                t('And it shall be, if he say unto thee, I will not go away from thee; because he '),
                hg('loveth thee', 'loves-thee'),
                t(' and thine house, because he is well with thee;'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Then thou shalt take an awl, and thrust it through his ear unto the door, and '),
                hy('he shall be thy servant for ever', 'servant-forever'),
                t('. And also unto thy maidservant thou shalt do likewise.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'loves-thee',
          html:
            'The servant is free to go. But he says: I will not go. Because he loves thee and thy house. This is not duty. It is not coercion. It is love. The servant has tasted belonging, kindness, a place where he is cared for. And that love makes freedom feel like exile. He chooses to stay.',
        },
        {
          kind: 'commentary',
          id: 'servant-forever',
          html:
            'When the servant chooses to stay, an awl pierces his ear to the doorpost. He becomes a servant forever. Not a slave—the text carefully says "servant." A man bound by choice, not force. Bound by love. The image is tender and strange: an eternal mark of willingness. The pierced ear says: I had freedom. I chose love. I will stay.',
        },
        {
          kind: 'christ',
          id: 'christ-pierced-ear',
          title: 'Christ Connection — The Servant Bound by Love',
          html:
            'Psalm 40 speaks with Christ&apos;s voice: "Sacrifice and offering thou didst not desire; mine ears hast thou opened: burnt offering and sin offering hast thou not required. Then said I, Lo, I come: in the volume of the book it is written of me, I delight to do thy will, O my God" (Ps. 40:6–8). Hebrews quotes this as Christ&apos;s word at His incarnation. The phrase "mine ears hast thou opened" is the Hebrew idiom for the pierced ear—the mark of the servant who chooses love over freedom. Jesus is the servant forever, bound to the Father&apos;s will, bound to the world&apos;s salvation, not by compulsion but by love. His pierced ear is His willingness. His forever is eternal.',
        },
        {
          kind: 'carry',
          html:
            'You are free. You could walk away. But if you have tasted the love of the Father, if you have known His house, freedom tastes like exile. You choose to stay. You choose love over escape. And that choice—that piercing, that mark—is not a burden. It is the deepest freedom there is: to want what you have chosen, and to choose forever.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'reflect-pierced-ear',
          prompt:
            'What in your life have you chosen to stay with, not because you had to, but because you loved it? What would it mean to make that choice eternally, with Christ?',
        },
        {
          kind: 'artwork',
          matchTitle: /servant|love|bondage|freedom|ear|choice/i,
          caption: 'Deuteronomy 15:16–17 · The Pierced Ear of Love',
        },
      ],
    },

    /* ─── Deuteronomy 15:18–23 — Firstlings to the Lord ──────────────── */
    {
      ref: 'Deuteronomy 15:18–23',
      title: 'Firstlings Sanctified to the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            {
              number: 18,
              spans: [
                t('It shall not seem hard unto thee, when thou sendest him away free from thee; for he hath been worth a double hired servant to thee, in serving thee six years: and the LORD thy God shall bless thee in all that thou doest.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('All the firstling males that come of thy herd and of thy flock thou shalt '),
                hg('sanctify unto the LORD thy God', 'sanctify-firstlings'),
                t(': thou shalt do no work with the firstling of thy bullock, nor shear the firstling of thy sheep.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Thou shalt eat it before the LORD thy God year by year in the place which the LORD shall choose, thou and thy household.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And if there be any blemish therein, as if it be lame, or blind, or have any ill blemish, thou shalt not sacrifice it unto the LORD thy God.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Thou shalt eat it within thy gates: the unclean and the clean person shall eat it alike, as the roebuck, and as the hart.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Only thou shalt not eat the blood thereof; thou shalt pour it upon the ground as water.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'sanctify-firstlings',
          html:
            'After the teaching about slaves and release, the law turns to the firstlings—the first offspring of herd and flock. They are to be sanctified to the Lord. Not put to work. Not used for profit. Set apart for His sole possession. The pattern across Deuteronomy 15 is consistent: whatever is first, whatever comes first, belongs to God. The freed slave gets the best provision because he has belonged to someone who belongs to God. The firstling belongs to God because God is first.',
        },
        {
          kind: 'commentary',
          id: 'firstlings-worship',
          html:
            'The firstling is not sacrificed at the temple. It is eaten "before the LORD thy God year by year in the place which the LORD shall choose, thou and thy household." The firstling becomes a festival meal—a celebration of abundance, a reminder that the flock belongs to God and to the family. Worship here is not distant or formal. It is sharing a meal with God and with those you love.',
        },
        {
          kind: 'carry',
          html:
            'What is the firstling in your life? The first fruit of your talent, your time, your love? The law says: sanctify it. Set it apart. Do not work it for profit. Do not use it for yourself. Give it to God. And then eat it—celebrate it—in His presence, with your family. The measure of trust is what you give first, not what you give last.',
        },
        {
          kind: 'reflection',
          id: 'reflect-firstlings',
          prompt:
            'What are your firstlings—the first of your time, gifts, love? Are they sanctified to God, or have you taken them for yourself? What would sanctifying your firstlings actually cost?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Deuteronomy 15',
    quote:
      'Every seventh year, release the debt. Open your hand wide to the poor. Free the servant generously, furnished full. Sanctify the firstlings to the Lord. God builds mercy into time itself—and the heart that refuses to follow is the one that loses blessing.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 15 · Study Guide',
  },

  hasHebrew: true,
};
