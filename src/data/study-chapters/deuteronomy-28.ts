import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 28 — The longest chapter of covenant blessings and curses.
 * Verses 1–14 pour out blessings for obedience; verses 15–68 detail the
 * fearsome catalog of curses for disobedience. This chapter frames the choice
 * itself: two paths, crystal clear. Christ took the curse upon Himself
 * (Galatians 3:13) so we may receive the blessing.
 */
export const DEUTERONOMY_28: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 28,

  estimatedMinutes: { beginner: 16, intermediate: 22, deep: 26 },
  intros: [
    'Deuteronomy 28 is the longest and most consequential chapter in the entire book of covenant law. In its first fourteen verses, Moses pours out blessings on Israel: if you hearken diligently to the voice of the Lord, you shall be set on high above all the nations of the earth. Blessed in the city and in the field. Blessed in your offspring, your crops, your cattle. The Lord will open His good treasure of heaven and give you rain. The enemies of Israel shall flee before you seven different ways.',
    'Then verses 15–68 — a catalog of curses roughly four times longer than the blessings. This is intentional. If you will not hearken, curses shall pursue you and overtake you. Pestilence, madness, blindness, astonishment of heart. Every blessing becomes a curse: the fruit of your body given to another people, your eyes looking and failing. A nation from afar, swift as the eagle, will besiege your gates until the high walls fall. In the siege, the fruit of your own body becomes meat. The Lord shall scatter you from one end of the earth to the other; among those nations no rest, no repose of the sole of your foot, and your life shall hang in doubt before you day and night.',
    'The covenant frame is absolute: two paths set before Israel, life and death, blessing and cursing. Deuteronomy 30:19 makes it explicit: "I have set before you life and death, blessing and curse; therefore choose life, that you and your offspring may live." For the Christian, this chapter is read through the cross: Christ took the curse upon Himself (Galatians 3:13) so that we might receive the blessing. No longer is the covenant written on stone; it is written on the heart through His blood.',
  ],

  bottomShare: {
    label: 'Share Deuteronomy 28',
    quote:
      'Christ redeemed us from the curse of the law by becoming a curse for us, so that we might receive the blessing promised to Abraham.',
    snippet:
      'Deuteronomy 28 · A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 28 · Study Guide',
  },

  sections: [
    /* ─── Deuteronomy 28:1–14 — If You Hearken ────────────────────────── */
    {
      ref: 'Deuteronomy 28:1–14',
      title: 'The Blessings Poured Out',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 1,
              spans: [
                t('And it shall come to pass, if thou shalt '),
                hy('hearken diligently', 'c-shema'),
                t(' unto the voice of the Lord thy God, to observe and to do all his commandments which I command thee this day, that '),
                hp('the Lord thy God will set thee on high', 'christ-lifted'),
                t(' above all nations of the earth:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-shema',
          html:
            'The Hebrew word <em>shema</em> — "hearken" — is the root of the Shema, the most basic Jewish prayer and confession. It means more than hearing; it means listening with the intent to obey. The covenant blessing begins not with sacrifice or ritual, but with attentive obedience, a bent ear toward God&apos;s voice.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-barakh',
          title: 'Barakh — &ldquo;blessing&rdquo;',
          script: 'בְּרָכָה',
          translit: '<strong>berakhah</strong> · blessing, the gift of increase and fruitfulness',
          description:
            'In Hebrew thought, blessing is not sentiment but substance — the power to multiply, to bear fruit, to prosper. When God blesses, things grow. When creation obeys, blessing follows as naturally as harvest follows seed.',
        },
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            { number: 2, spans: [t('And all these blessings shall come on thee, and overtake thee, if thou shalt hearken unto the voice of the Lord thy God.')] },
            { number: 3, spans: [t('Blessed shalt thou be in the city, and blessed shalt thou be in the field.')] },
            { number: 4, spans: [t('Blessed shall be the fruit of thy body, and the fruit of thy ground, and the fruit of thy cattle, the increase of thy kine, and the flocks of thy sheep.')] },
            { number: 5, spans: [t('Blessed shall be thy basket and thy store.')] },
            { number: 6, spans: [t('Blessed shalt thou be when thou comest in, and blessed shalt thou be when thou goest out.')] },
            { number: 7, spans: [t('The Lord shall cause thine enemies that rise up against thee to be smitten before thy face: they shall come out against thee one way, and flee before thee '), hg('seven ways', 'c-seven'), t('.')] },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-seven',
          html:
            'Seven ways of flight — the covenant symmetry is exact. One way of approach, but seven ways of retreat. Blessing amplifies the gap between obedience and its fruit. Curses will mirror this: one way to fall, but seven ways to be scattered.',
        },
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            { number: 8, spans: [t('The Lord shall command the blessing upon thee in thy storehouses, and in all that thou settest thine hand unto; and '), hg('he shall bless thee', 'c-identity'), t(' in the land which the Lord thy God giveth thee.')] },
            { number: 9, spans: [t('The Lord shall establish thee an holy people unto himself, as he hath sworn unto thee, if thou shalt keep the commandments of the Lord thy God, and walk in his ways.')] },
            { number: 10, spans: [t('And all people of the earth shall see that thou art called by the '), t('name of the Lord'), t('; and they shall be afraid of thee.')] },
            { number: 11, spans: [t('And the Lord shall make thee plenteous in goods, in the fruit of thy body, and in the fruit of thy cattle, and in the fruit of thy ground, in the land which the Lord sware unto thy fathers to give thee.')] },
            { number: 12, spans: [t('The Lord shall open unto thee his good treasure of the heaven to give the rain unto thy land in his season, and to bless all the work of thine hand: and thou shalt lend unto many nations, and thou shalt not borrow.')] },
            { number: 13, spans: [t('And the Lord shall make thee the head, and not the tail; and thou shalt be above only, and thou shalt not be beneath; if that thou hearken unto the commandments of the Lord thy God, which I command thee this day, to observe and to do them:')] },
            { number: 14, spans: [t('And thou shalt not go aside from any of the words which I command thee this day, to the right hand, or to the left, to go after other gods to serve them.')] },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-identity',
          html:
            'Notice the shift from conditional to identity: "if you obey, I will bless you" becomes "I will establish you as a holy people." Obedience does not create the relationship; it reveals it. The covenant carries identity within it — you are meant for blessing, meant to bear My name.',
        },
        {
          kind: 'christ',
          id: 'christ-lifted',
          title: 'Christ Connection — Lifted High, Then Cast Down',
          html:
            'Jesus echoes this language when He says, "I am not of this world" and "My kingdom is not of this world." He was set on high — seated at the right hand of God, above all authority and power. Yet He took the curse first, descending all the way to death, so that those who trust Him might be lifted high with Him. Ephesians 2:6 says believers are "seated in the heavenly places with Christ Jesus." The same elevation promised here is offered to us through His descent and exaltation.',
        },
        {
          kind: 'carry',
          html:
            'The blessings here are not primarily about wealth or comfort — they are about living in alignment with the God who made you. When you bend your ear to His voice and obey, you are not earning favor; you are moving with the grain of the universe itself. It is the difference between swimming downstream and upstream. Have you noticed, in your own life, what happens when you actually obey what you know He is asking?',
        },
        {
          kind: 'reflection',
          id: 'blessings-intro',
          prompt:
            'What is one area of your life where obedience to God has quietly produced blessing — not necessarily wealth, but fruitfulness, peace, or multiplication of good? How did you see it unfold?',
        },
      ],
    },

    /* ─── Deuteronomy 28:15–25 — The Curses Begin ──────────────────────── */
    {
      ref: 'Deuteronomy 28:15–25',
      title: 'The Curses Begin — Disobedience Inverted',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            { number: 15, spans: [t('But it shall come to pass, if thou wilt not hearken unto the voice of the Lord thy God, to observe to do all his commandments and his statutes which I command thee this day; that '), hy('all these curses', 'hebrew-qelalah'), t(' shall come upon thee, and overtake thee:')] },
            { number: 16, spans: [t('Cursed shalt thou be in the city, and cursed shalt thou be in the field.')] },
            { number: 17, spans: [t('Cursed shall be thy basket and thy store.')] },
            { number: 18, spans: [t('Cursed shall be the fruit of thy body, and the fruit of thy land, the increase of thy kine, and the flocks of thy sheep.')] },
            { number: 19, spans: [t('Cursed shalt thou be when thou comest in, and cursed shalt thou be when thou goest out.')] },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-qelalah',
          title: 'Qelalah — &ldquo;curse&rdquo;',
          script: 'קְלָלָה',
          translit: '<strong>qelalah</strong> · curse, a word of power that brings forth diminishment and emptiness',
          description:
            'The opposite of blessing. Where blessing multiplies and brings forth life, curse diminishes, withers, and brings forth death. In Hebrew, the word carries the weight of withdrawal — God&apos;s presence and power reversed, turned away.',
        },
        {
          kind: 'commentary',
          id: 'deut28-blessing-inverted',
          html:
            'Every single word from the blessings is now reversed. Blessed in city becomes cursed in city. Blessed in field becomes cursed in field. The symmetry is exact and devastating: the removal of blessing leaves a perfect negative imprint. This is the judgment that follows when covenant terms are rejected.',
        },
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            { number: 20, spans: [t('The Lord shall send upon thee cursing, vexation, and rebuke, in all that thou settest thine hand unto for to do, until thou be destroyed, and until thou perish quickly; because of the wickedness of thy doings, whereby thou hast forsaken me.')] },
            { number: 21, spans: [t('The Lord shall make the pestilence cleave unto thee, until he have consumed thee from off the land, whither thou goest to possess it.')] },
            { number: 22, spans: [t('The Lord shall smite thee with a consumption, and with a fever, and with an inflammation, and with an extreme burning, and with the sword, and with blasting, and with mildew; and they shall pursue thee until thou perish.')] },
            { number: 23, spans: [t('And thy heaven that is over thy head shall be brass, and the earth that is under thee shall be iron.')] },
            { number: 24, spans: [t('The Lord shall make the rain of thy land powder and dust: from heaven shall it come down upon thee, until thou be destroyed.')] },
            { number: 25, spans: [t('The Lord shall cause thee to be smitten before thine enemies: thou shalt go out one way against them, and flee seven ways before them: and shalt be removed into all the kingdoms of the earth.')] },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-curse-mirror',
          html:
            'The curse is the precise inverse of blessing. Blessed in the city, cursed in the city. Blessed in all you put your hand to, cursed in all you put your hand to. This is not arbitrary punishment — it is the removal of blessing. When a people turn from the God who is the source of fruitfulness, fruitfulness ceases to flow.',
        },
        {
          kind: 'carry',
          html:
            'The language here is meant to be sobering, not vengeful. Curse is not God&apos;s favorite mode; it is what naturally follows when the source is cut off. A tree cut off from water will wither not because the water is angry, but because water is life. If there is any decay or emptying happening in your own life — relationships faltering, work feeling barren, joy drying up — the covenant frame asks: Am I still turned toward Him, or have I quietly turned away? The cure is always the same: return.',
        },
        {
          kind: 'reflection',
          id: 'curses-begin',
          prompt:
            'Is there any area where your obedience has grown slack, and you have felt blessing quiet or withdraw? What is He asking you to turn back toward?',
        },
      ],
    },

    /* ─── Deuteronomy 28:26–37 — Pestilence and Madness ────────────────── */
    {
      ref: 'Deuteronomy 28:26–37',
      title: 'Pestilence, Madness, and Blindness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            { number: 26, spans: [t('And thy carcase shall be meat unto all fowls of the air, and unto the beasts of the earth, and no man shall fray them away.')] },
            { number: 27, spans: [t('The Lord will smite thee with the botch of Egypt, and with the emerods, and with the scab, and with the itch, whereof thou canst not be healed.')] },
            { number: 28, spans: [t('The Lord shall smite thee with madness, and blindness, and astonishment of heart:')] },
            { number: 29, spans: [t('And thou shalt grope at noonday, as the blind gropeth in darkness, and thou shalt not prosper in thy ways: and thou shalt be only oppressed and spoiled evermore, and no man shall save thee.')] },
            { number: 30, spans: [t('Thou shalt betroth a wife, and another man shall lie with her: thou shalt build an house, and thou shalt not dwell therein: thou shalt plant a vineyard, and shalt not gather the grapes thereof.')] },
            { number: 31, spans: [t('Thine ox shall be slain before thine eyes, and thou shalt not eat thereof: thine ass shall be violently taken away from before thy face, and shall not be restored to thee: thy sheep shall be given unto thine enemies, and thou shalt have none to rescue them.')] },
          ],
        },
        {
          kind: 'commentary',
          id: 'deut28-plagues-to-loss',
          html:
            'The curse moves from your own body — boils, madness, blindness — to the loss of what you love most. Your livestock, your children, your inheritance. This is not random punishment; it is the stripping away of what a disloyal people trusted in instead of God. First He removes your capacity to see clearly, then He removes the very things you were too blind to steward faithfully.',
        },
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            { number: 32, spans: [t('Thy sons and thy daughters shall be given unto another people, and thine eyes shall look, and fail with longing for them all the day long: and there shall be no might in thine hand.')] },
            { number: 33, spans: [t('The fruit of thy land, and all thy labours, shall a nation which thou knowest not eat up; and thou shalt be only oppressed and crushed alway:')] },
            { number: 34, spans: [t('So that thou shalt be mad for the sight of thine eyes which thou shalt see.')] },
            { number: 35, spans: [t('The Lord shall smite thee in the knees, and in the legs, with a sore botch that cannot be healed, from the sole of thy foot unto the top of thy head.')] },
            { number: 36, spans: [t('The Lord shall bring thee, and thy king which thou shalt set over thee, unto a nation which neither thou nor thy fathers have known; and there thou shalt serve other gods, wood and stone.')] },
            { number: 37, spans: [t('And thou shalt become an astonishment, a proverb, and a byword, among all nations whither the Lord shall lead thee.')] },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-madness',
          html:
            'Notice the horror: madness comes first, then blindness, then astonishment — a breaking of mind and sight that leaves a people unable to understand their own condition. They grope at noonday as a blind man gropes in darkness. And the cruelest curse: to see what you have lost — thy eyes shall look, and fail with longing — but be powerless to recover it. A disintegration not only of nation but of mind itself.',
        },
        {
          kind: 'carry',
          html:
            'This section is grim for a reason: it shows what long disobedience actually does to a people and a soul. When a person turns from God for years, there is often a fog that settles in — clarity dims, judgment clouds, the ability to see your own condition fades. You can be blind at noonday, unable to perceive what is actually happening. If you are in a place where nothing makes sense anymore, where your own life has become strange to you, the ancient invitation is unchanged: return, and the fog will begin to lift.',
        },
        {
          kind: 'reflection',
          id: 'madness-section',
          prompt:
            'Have you ever experienced a season where your own good judgment became clouded, or where you felt trapped in patterns you could not seem to break? What finally broke that fog for you?',
        },
      ],
    },

    /* ─── Deuteronomy 28:38–46 — Every Blessing Reversed ────────────────── */
    {
      ref: 'Deuteronomy 28:38–46',
      title: 'The Reversal of Every Blessing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            { number: 38, spans: [t('Thou shalt carry much seed out into the field, and shalt gather but little in; for the locust shall consume it.')] },
            { number: 39, spans: [t('Thou shalt plant vineyards, and dress them, but shalt neither drink of the wine, nor gather the grapes; for the worms shall eat them.')] },
            { number: 40, spans: [t('Thou shalt have olive trees throughout all thy coasts, but thou shalt not anoint thyself with the oil; for thine olives shall cast his fruit.')] },
            { number: 41, spans: [t('Thou shalt beget sons and daughters, but thou shalt not enjoy them; for they shall go into captivity.')] },
            { number: 42, spans: [t('All thy trees and fruit of thy land shall the locust consume.')] },
            { number: 43, spans: [t('The stranger that is within thee shall get up above thee very high; and thou shalt come down very low.')] },
            { number: 44, spans: [t('He shall lend to thee, and thou shalt not lend to him: he shall be the head, and thou shalt be the tail.')] },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-inversion',
          html:
            'Every single blessing from verses 1–14 is now inverted. You promised to be head, you become tail. You promised to lend, now you borrow. You promised blessing in your work, now the locust consumes it before you can gather. The covenant is not a suggestion; it is the structure of how blessing flows. When you step outside it, the structure itself works against you.',
        },
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            { number: 45, spans: [t('Moreover all these curses shall come upon thee, and shall pursue thee, and overtake thee, till thou be destroyed; because thou hearkenedst not unto the voice of the Lord thy God, to keep his commandments and his statutes which he commanded thee:')] },
            { number: 46, spans: [t('And they shall be upon thee for a sign and for a wonder, and upon thy seed for ever.')] },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sign-wonder',
          html:
            'Not hidden or subtle: the curse becomes a sign and a wonder that others see. A people under curse becomes a warning to the nations — "look what happens when you turn from the God who made you." This is not privacy; it is public witness to the covenant&apos;s truth.',
        },
        {
          kind: 'carry',
          html:
            'The text moves from individual curses to systemic ones: you are not only suffering, you are inverted in the social order. The stranger rises above you. What was yours is now used against you. This is the Bible&apos;s way of showing that covenant-breaking does not just hurt you alone; it fractures the whole social fabric. It is a call to examine: Where have I been living against the grain of God&apos;s design? Where have I seen that fracture in my own relationships, my own community?',
        },
        {
          kind: 'reflection',
          id: 'reversal-section',
          prompt:
            'Can you see, in your own story, places where pursuing something against God&apos;s grain eventually reversed on you? What did turning back look like?',
        },
      ],
    },

    /* ─── Deuteronomy 28:47–57 — The Besieging Nation ───────────────────── */
    {
      ref: 'Deuteronomy 28:47–57',
      title: 'The Besieging Nation and the Siege Famine',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            { number: 47, spans: [t('Because thou servedst not the Lord thy God with joyfulness, and with gladness of heart, for the abundance of all things;')] },
            { number: 48, spans: [t('Therefore shalt thou serve thine enemies which the Lord shall send against thee, in hunger, and in thirst, and in nakedness, and in want of all things: and he shall put a yoke of iron upon thy neck, until he have destroyed thee.')] },
            { number: 49, spans: [t('The Lord shall bring a nation against thee from far, '), hg('from the end of the earth', 'c-from-afar'), t(', as swift as the eagle flieth; a nation whose tongue thou shalt not understand;')] },
            { number: 50, spans: [t('A nation of fierce countenance, which shall not regard the person of the old, nor shew favour to the young:')] },
            { number: 51, spans: [t('And he shall eat the fruit of thy cattle, and the fruit of thy land, until thou be destroyed: which also shall not leave thee either corn, or wine, or oil, or the increase of thy kine, or flocks of thy sheep, until he have destroyed thee.')] },
            { number: 52, spans: [t('And he shall besiege thee in all thy gates, until thy high and fenced walls come down, wherein thou trustedst, throughout all thy land: and he shall besiege thee in all thy gates throughout all thy land, which the Lord thy God hath given thee.')] },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-from-afar',
          html:
            'Swift as the eagle — this language echoes Numbers 24:6–9, where Balaam prophesies over Israel: "He crouched, he lay down as a lion… who shall rouse him up?" But here the eagle comes against them. In Jewish and Christian interpretation, this prophecy has been read as describing both the Babylonian exile (586 BC) and the Roman destruction of Jerusalem (70 AD). Both invaders came from afar, swift and fierce, speaking a foreign tongue.',
        },
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            { number: 53, spans: [t('And thou shalt eat the '), hp('fruit of thine own body', 'christ-curse'), t(', the flesh of thy sons and of thy daughters, which the Lord thy God hath given thee, in the siege, and in the straitness, wherewith thine enemies shall distress thee:')] },
            { number: 54, spans: [t('So that the man that is tender among you, and very delicate, his eye shall be evil toward his brother, and toward the wife of his bosom, and toward the remnant of his children which he shall leave:')] },
            { number: 55, spans: [t('So that he will not give to any of them of the flesh of his children whom he shall eat: because he hath nothing left him in the siege, and in the straitness, wherewith thine enemies shall distress thee in all thy gates.')] },
            { number: 56, spans: [t('The tender and delicate woman among you, which would not adventure to set the sole of her foot upon the ground for delicateness and tenderness, her eye shall be evil toward her husband, and toward her son, and toward her daughter,')] },
            { number: 57, spans: [t('And toward her young one which cometh out from between her feet, and toward her children which she shall bear: for she shall eat them for want of all things secretly in the siege and straitness, wherewith thine enemy shall distress thee in thy gates.')] },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-siege-famine',
          html:
            'This is the harshest language in the entire chapter. The prophecy of cannibalism in siege famine appears to have been fulfilled literally in the Roman siege of Jerusalem (70 AD). Josephus, the Jewish historian, describes the horror in detail: mothers eating their own children, families tearing apart over scraps. This is not theological speculation; it is a historical record of the curse&apos;s reality. It is also why Jesus, standing before Jerusalem, wept.',
        },
        {
          kind: 'christ',
          id: 'christ-curse',
          title: 'Christ Connection — He Took the Curse',
          html:
            'In Galatians 3:13, Paul writes: "Christ hath redeemed us from the curse of the law, being made a curse for us: for it is written, Cursed is every one that hangeth on a tree." Christ did not merely sidestep the curse; He became it. He took on Himself the full weight of verses 47–57, and all of them, so that anyone who trusts in Him might step out of the curse and into the blessing. His body was broken in a siege of a different kind — the siege of sin and death — so that you would never have to know what it means to be utterly abandoned.',
        },
        {
          kind: 'carry',
          html:
            'This section is meant to shatter any illusions that you can live apart from God and be fine. The curse is real. Its consequences are real. But the gospel is also real: Christ entered that siege, that abandonment, that death, and came out the other side victorious. If you are in a besieged place right now — trapped, afraid, watching things fall apart around you — He has already walked that road. And He offers not escape, but a way through it, and resurrection on the other side.',
        },
        {
          kind: 'reflection',
          id: 'siege-section',
          prompt:
            'Have you ever been in a season where circumstances pressed in so hard that you felt undone? How did Christ&apos;s presence or promises become real to you then?',
        },
      ],
    },

    /* ─── Deuteronomy 28:58–68 — The Scattering and the Bondage ─────────── */
    {
      ref: 'Deuteronomy 28:58–68',
      title: 'The Scattering and Bondage — The Final Exile',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            { number: 58, spans: [t('If thou wilt not observe to do all the words of this law that are written in this book, that thou mayest '), t('fear this glorious and fearful name'), t(', THE LORD THY GOD;')] },
            { number: 59, spans: [t('Then the Lord will make thy plagues wonderful, and the plagues of thy seed: even great plagues, and of long continuance, and sore sicknesses, and of long continuance.')] },
            { number: 60, spans: [t('Moreover he will bring upon thee all the diseases of Egypt, which thou wast afraid of; and they shall cleave unto thee.')] },
            { number: 61, spans: [t('Also every sickness, and every plague, which is not written in the book of this law, them will the Lord bring upon thee, until thou be destroyed.')] },
            { number: 62, spans: [t('And ye shall be left few in number, whereas ye were as the stars of heaven for multitude; because thou wouldest not obey the voice of the Lord thy God.')] },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-galah',
          title: 'Galah — &ldquo;to scatter, to exile&rdquo;',
          script: 'גָּלָה',
          translit: '<strong>galah</strong> · to uncover, to expose, to go into exile, to be carried away',
          description:
            'The root suggests both exposure and exile — you are uncovered, vulnerable, torn from the land and scattered abroad. What was hidden is revealed; what was rooted is uprooted.',
        },
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            { number: 63, spans: [t('And it shall come to pass, that as the Lord rejoiced over you to do you good, and to multiply you; so the Lord will rejoice over you to destroy you, and to bring you to nought; and ye shall be plucked from off the land whither thou goest to possess it.')] },
            { number: 64, spans: [t('And the Lord shall '), hg('scatter thee among all people', 'c-scatter'), t(', from the one end of the earth even unto the other; and there thou shalt serve other gods, which neither thou nor thy fathers have known, even wood and stone.')] },
            { number: 65, spans: [t('And among these nations shalt thou find no ease, neither shall the sole of thy foot have rest: but the Lord shall give thee there a trembling heart, and failing of eyes, and sorrow of mind:')] },
            { number: 66, spans: [t('And thy life shall hang in doubt before thee; and thou shalt fear day and night, and shalt have none assurance of thy life:')] },
            { number: 67, spans: [t('In the morning thou shalt say, Would God it were even! and at even thou shalt say, Would God it were morning! for the fear of thine heart wherewith thou shalt fear, and for the sight of thine eyes which thou shalt see.')] },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-scatter',
          html:
            'The prophecy of the diaspora — two great scatterings fulfilled historically: the Babylonian exile (586 BC) and the Roman destruction (70 AD), which dispersed Jews across the known world. But the covenant promise is not left broken: Deuteronomy 30 promises restoration. Even in exile, God&apos;s covenant is not finished. This is why Paul in Romans 9–11 reads Israel&apos;s exile as temporary, with ultimate restoration promised.',
        },
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            { number: 68, spans: [t('And the Lord shall bring thee into Egypt again with ships, by the way whereof I spake unto thee, Thou shalt see it no more again: and there ye shall be sold unto your enemies for bondmen and bondwomen, and no man shall buy you.')] },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-no-buyer',
          html:
            'The ultimate reversal: the exodus is reversed. Instead of being redeemed out of Egypt, they are brought back into Egypt — into servitude, with no redeemer to buy them back. They are worthless in the eyes of their enemies. Yet even this phrase has a gospel echo: Christ bought us back at a price that was beyond measure — His own blood. We, who were unsaleable and worthless, are worth everything to Him.',
        },
        {
          kind: 'carry',
          html:
            'These closing verses paint a picture of a people living under the constant fear of abandonment — life hanging in doubt, trembling heart, unable to rest, wishing for day in the evening and evening in the day. This is what a severed covenant looks like: rootlessness, homelessness, perpetual dread. For the Christian, the gospel offers the opposite. You are bought. You are no longer for sale. You are redeemed not with silver or gold but with His blood. Your life does not hang in doubt; it is hidden in Christ, secured in the love of God. Home is not ultimately a land; it is a Person.',
        },
        {
          kind: 'reflection',
          id: 'exile-section',
          prompt:
            'What does it feel like to be "sold" or unwanted? And what has changed in you when you realized that Christ bought you back at a price beyond measure?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Closing Reflection ─────────────────────────────────────────────── */
    {
      ref: 'Deuteronomy 28:68 & 30:19',
      title: 'The Choice Remains',
      blocks: [
        {
          kind: 'commentary',
          id: 'c-choice',
          html:
            'Deuteronomy 28 does not end in despair. Verse 68 is dark, but Deuteronomy 30 follows — and in it, the covenant frame is renewed. "I have set before you life and death, blessing and curse; therefore choose life, that you and your offspring may live." The covenant is not a trap; it is an open door. At any moment, a return is possible. The question is not whether God will take you back; it is whether you will return.',
        },
        {
          kind: 'christ',
          id: 'christ-return',
          title: 'Christ Connection — Return and Restoration',
          html:
            'For the Christian, return happens not through your own effort but through Christ. Hebrews 7:25 says He "is able also to save them to the uttermost that come unto God by him." He is the One who makes return possible. He is the One who stands between the curse and you, absorbing it fully. Your part is not to fix yourself or earn your way back; your part is simply to come. And when you do, you come not to judgment, but to His table, where the feast has been prepared all along.',
        },
        {
          kind: 'carry',
          html:
            'The choice set before you is the same choice set before Israel: will you hearken? Will you listen to the God who loves you and obey what you hear? This is not a question of earning your salvation — Christ has already done that. It is a question of alignment: will you live with the grain of God&apos;s design, or against it? Every day offers that choice. Every moment is an opportunity to return.',
        },
        {
          kind: 'reflection',
          id: 'choice-final',
          prompt:
            'Where is the Lord inviting you right now to return — to realign your life with His voice? What would obedience cost? What would it yield?',
        },
      ],
    },
  ],
};
