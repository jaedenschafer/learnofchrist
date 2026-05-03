import { hp, hy, hg, t, type RichChapterContent } from './types';

export const NUMBERS_8: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 8,

  estimatedMinutes: { beginner: 6, intermediate: 10, deep: 13 },
  intros: [
    'Numbers 8 divides into two parts. The first is brief: Aaron lights the seven lamps of the menorah—the symbol of light and witness in the holy place, where the priests do the work of mediation. The second is the consecration of the Levites—the entire tribe set apart to serve in place of Israel\'s firstborn.',
    'The ceremony is unusual and rich. The Levites are washed, shaved, and sprinkled with the water of purification. They stand before the tabernacle. The people of Israel lay their hands on them—physically marking them as a corporate offering. Then Aaron presents them as a wave offering to the LORD, a gift. They become the property of the tabernacle, substitutes given so that the work of mediation can continue.',
    'For every Christian, this is the pattern of consecration: cleansed, set apart, offered up, and given to serve. Christ alone is the High Priest and the perfect offering. But His people are called to present themselves—their bodies, their time, their work—as living sacrifices, and to carry His light into the world He made.',
  ],

  showKjvNote: true,

  sections: [
    {
      ref: 'Numbers 8:1–4',
      title: 'The Seven Lamps',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            { number: 1, spans: [t('And the LORD spake unto '), hp('Moses', 'moses-spoke'), t(', saying,')] },
            { number: 2, spans: [t('Speak unto Aaron, and say unto him, When thou lightest the lamps, the '), hy('seven lamps', 'hebrew-menorah'), t(' shall give light over against the '), hg('candlestick', 'c-menorah-stand'), t('.')] },
          ],
        },
        { kind: 'commentary', id: 'moses-spoke', html: 'The instruction comes to Moses, who passes it to Aaron. This is the chain of command in the tabernacle—the LORD speaks the vision, Moses interprets it, Aaron and his sons execute it. In Numbers 8, Aaron is reminded of his primary responsibility: to tend the light that makes priestly work possible.' },
        { kind: 'hebrew', id: 'hebrew-menorah', title: 'Menorah — &ldquo;the seven lamps&rdquo;', script: 'מְנוֹרָה', translit: '<strong>menorah</strong> · a stand with seven oil lamps', description: 'The menorah is a symbol of the presence of God and the light He sheds on His work. In Exodus 25, God instructs Israel to make it of pure gold, hammered thin—a single piece of metal shaped by hand, with the center lamp flanked by three branches on each side.' },
        { kind: 'commentary', id: 'c-menorah-stand', html: 'The "candlestick" or stand itself is not the focus here—Aaron\'s job is the lamps. The lamps give light "over against"—in front of—the stand. A priest works in the holy place by the light of these lamps. The work of mediation, intercession, and worship happens in light that God provides.' },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            { number: 3, spans: [t('And Aaron did so; he '), hy('lighted the lamps', 'christ-light-bearer'), t(' over against the candlestick, as the LORD commanded Moses.')] },
            { number: 4, spans: [t('And this work of the candlestick was of beaten gold, from the shaft thereof unto the flowers thereof, was beaten work: according unto the pattern which the LORD had shewed Moses, so he made the candlestick.')] },
          ],
        },
        { kind: 'christ', id: 'christ-light-bearer', title: 'Christ Connection — The Light Bearer', html: 'Jesus said, "I am the light of the world" (John 8:12), but He also called His followers to be light: "Ye are the light of the world" (Matt. 5:14). The believer\'s role echoes Aaron\'s—to tend and carry the light that Christ provides. Not to generate it or claim it, but to keep it burning and place it where it can shine. Every act of prayer, worship, or faithful work in the darkness of the world is a lamp set to give light.' },
        { kind: 'carry', html: 'Your workplace is a holy place. Your home is a holy place. Wherever you do honest work and tend to what God has given you—with patience, precision, and faithfulness—you are doing what Aaron does with the menorah. You are tending light. The lamps themselves are not the point; the light is. What small light are you tending today?' },
        { kind: 'reflection', id: 'menorah', prompt: 'Where in your life are you called to tend the light—to keep a lamp burning in a dark place by doing your work faithfully?' },
        { kind: 'divider' },
      ],
    },

    {
      ref: 'Numbers 8:5–13',
      title: 'Cleansed and Presented',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            { number: 5, spans: [t('And the LORD spake unto Moses, saying,')] },
            { number: 6, spans: [t('Take the Levites from among the children of Israel, and '), hy('cleanse them', 'c-cleanse'), t('.')] },
            { number: 7, spans: [t('And thus shalt thou do unto them, to '), hg('cleanse them', 'c-ritual-cleanse'), t(': Sprinkle water of purifying upon them, and let them '), hy('shave', 'c-shaved'), t(' all their flesh, and let them wash their clothes, and so make themselves clean.')] },
          ],
        },
        { kind: 'commentary', id: 'c-cleanse', html: 'The Levites are drawn from the general population—they are Israelites first. To set them apart for tabernacle service, they must first be cleansed. The language is ritual and profound: separation and purification go together. Before you can tend to holy things, you must be clean.' },
        { kind: 'commentary', id: 'c-ritual-cleanse', html: 'Water of purifying, shaving, washing clothes—these are concrete, physical acts. The cleansing is not abstract or metaphorical. It involves the body. A Levite who serves before the LORD must be visibly set apart, marked by his appearance and his cleanliness, as belonging to God\'s work.' },
        { kind: 'hebrew', id: 'c-shaved', title: 'Shaving — A Mark of Consecration', script: 'גָּלַח', translit: '<strong>galach</strong> · to shave off hair', description: 'Shaving was done to mark transitions and separations. A Levite shaved as a sign of leaving his old role and entering into new service. The shedding of hair is a visible, bodily sign of being made new.' },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            { number: 8, spans: [t('Then let them take a young bullock with his meat offering, even fine flour mingled with oil, and another young bullock shalt thou take for a sin offering.')] },
            { number: 9, spans: [t('And thou shalt bring the Levites before the tabernacle of the congregation: and thou shalt gather the whole assembly of the children of Israel together:')] },
          ],
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            { number: 10, spans: [t('And thou shalt bring the Levites before the LORD: and the children of Israel shall '), hp('lay their hands upon the Levites', 'christ-laying-on-hands'), t(':')] },
            { number: 11, spans: [t('And Aaron shall offer the Levites before the LORD for an offering of the children of Israel, that they may execute the service of the LORD.')] },
          ],
        },
        { kind: 'commentary', id: 'christ-laying-on-hands', html: 'The laying on of hands is corporate. The entire assembly of Israel—not just the priests—puts hands on the Levites, marking them as accepted and set apart. This is not a private rite; it is a public consecration. By laying hands, each Israelite says: this person represents me before the LORD; I commend them to this work.' },
        { kind: 'carry', html: 'In your own life, you have been cleansed—washed in the blood of Christ, made white as snow. You have been set apart, marked by His Spirit. If you have said yes to His calling, it is not a private transaction. It is a public claim: you belong to the work of His kingdom, and others see and know it. Your appearance, your habits, your speech—all of it can mark you as belonging to Him.' },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            { number: 12, spans: [t('And the Levites shall lay their hands upon the heads of the bullocks: and thou shalt offer the one for a sin offering, and the other for a burnt offering, unto the LORD, to make an atonement for the Levites.')] },
            { number: 13, spans: [t('And thou shalt set the Levites before Aaron, and before his sons, and offer them as an offering unto the LORD.')] },
          ],
        },
        { kind: 'commentary', id: 'c-levites-offering', html: 'The ceremony now shifts. The Levites lay hands on the bullocks—identifying themselves with the offering. One is for sin, one for burnt offering. This is not the Levites making sacrifice themselves (only the priests do that), but the Levites presenting themselves through the sacrifice. They are saying: we are unclean and unworthy; we deserve what these animals receive; we throw ourselves on God\'s mercy.' },
        { kind: 'reflection', id: 'cleansing', prompt: 'How have you experienced being cleansed and set apart? What did it cost, and what freedom did it bring?' },
      ],
    },

    {
      ref: 'Numbers 8:14–19',
      title: 'A Gift to the Altar',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            { number: 14, spans: [t('Thus thou shalt separate the Levites from among the children of Israel: and the Levites shall be '), hy('mine', 'c-levites-mine'), t('.')] },
          ],
        },
        { kind: 'commentary', id: 'c-levites-mine', html: 'A simple, stunning declaration: the Levites belong to the LORD. They are not Israel\'s servants now; they are the LORD\'s. Their allegiance shifts. Their time, their hands, their work—all of it now belongs to His altar, His tabernacle, His service. They have been claimed.' },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            { number: 15, spans: [t('And after that shall the Levites go in to do the service of the tabernacle of the congregation: and thou shalt cleanse them, and offer them for an offering.')] },
            { number: 16, spans: [t('For they are wholly given unto me from among the children of Israel; instead of such as open every womb, even instead of the firstborn of all the children of Israel, have I taken them unto me.')] },
          ],
        },
        { kind: 'commentary', id: 'c-first-born', html: 'The substitution is explicit: the Levites take the place of the firstborn. In Exodus, after the plague of the firstborn in Egypt, every firstborn male of Israel—human and animal—belongs to the LORD. The Levites are now the instrument by which that claim is managed. Instead of every family sacrificing their firstborn to God\'s service, the whole tribe of Levi does it on behalf of all Israel. The Levites are the nation\'s firstborn, the nation\'s tithe, given wholly to God.' },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            { number: 17, spans: [t('For all the firstborn of the children of Israel are mine, both man and beast: on the day that I smote every firstborn in the land of Egypt I sanctified them for myself.')] },
            { number: 18, spans: [t('And I have taken the Levites for all the firstborn of the children of Israel.')] },
            { number: 19, spans: [t('And I have given the Levites as a gift to Aaron and to his sons from among the children of Israel, to do the service of the children of Israel in the tabernacle of the congregation, and to make an atonement for the children of Israel: that there be no '), hy('plague', 'c-plague'), t(' among the children of Israel, when the children of Israel come nigh unto the holy things.')] },
          ],
        },
        { kind: 'hebrew', id: 'c-plague', title: 'Plague — The Boundary Kept', script: 'נֶגֶף', translit: '<strong>negeph</strong> · a plague, a sudden stroke', description: 'The boundary between the holy and the common is not arbitrary; it is protective. If an unclean person approaches holy things, a plague falls. The Levites, by their service, stand in that gap and make atonement, preventing judgment from falling on the people.' },
        { kind: 'christ', id: 'christ-wave-offering', title: 'Christ Connection — The Living Sacrifice', html: 'Paul writes, "I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service" (Rom. 12:1). The Levites are presented as a wave offering—waved before the LORD as a gift from the people. Every believer is called to the same: to present themselves, their bodies, their work, their time, as a living and continual offering. Not dead animals, but living service. The Levites serve in the tabernacle; believers serve in the world, carrying God\'s light and making atonement through their presence and intercession.' },
        { kind: 'carry', html: 'Your work is an offering. Your faithfulness in the small place where you are is a wave offering before the LORD. Whether you are tending children, building buildings, writing code, or praying in a quiet room, the moment you recognize that you are here for His work—not just for your own sustenance or success—everything shifts. You become a living sacrifice, and your ordinary Tuesday becomes holy ground.' },
        { kind: 'reflection', id: 'wave-offering', prompt: 'What part of your life are you ready to present as a wave offering—to say, "This belongs to you now, not to me"?' },
        { kind: 'divider' },
      ],
    },

    {
      ref: 'Numbers 8:20–26',
      title: 'From Age 25 to 50',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            { number: 20, spans: [t('And Moses, and Aaron, and all the congregation of the children of Israel, did to the Levites according unto all that the LORD commanded Moses concerning the Levites, so did the children of Israel unto them.')] },
            { number: 21, spans: [t('And the Levites were '), hg('purified, and they washed their clothes', 'c-washed'), t('; and Aaron offered them as an offering before the LORD; and Aaron made an atonement for them to cleanse them.')] },
          ],
        },
        { kind: 'commentary', id: 'c-washed', html: 'The ceremony is completed. The Levites are washed, cleansed, and offered. Aaron—the mediator between God and the people—performs the atonement. The role is now secure; the tribe of Levi is set apart, and the service can begin.' },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            { number: 22, spans: [t('And after that went the Levites in to do their service in the tabernacle of the congregation before Aaron, and before his sons: as the LORD had commanded Moses concerning the Levites, so did they unto them.')] },
            { number: 23, spans: [t('And the LORD spake unto Moses, saying,')] },
            { number: 24, spans: [t('This is it that belongeth unto the Levites: from '), hy('twenty and five years old', 'c-age-25'), t(' and upward they shall go in to wait upon the service of the tabernacle of the congregation:')] },
          ],
        },
        { kind: 'hebrew', id: 'c-age-25', title: 'Age 25 — Maturity for Service', script: 'חָמֵשׁ וְעֶשְׂרִים', translit: '<strong>chamesh ve-esrim</strong> · twenty-five', description: 'Numbers 4 specifies that Levites begin service at age 30 and retire at 50—a 20-year span for the most physically demanding roles. Numbers 8 adjusts this to 25–50, likely indicating a longer apprenticeship period where younger Levites learn before taking full responsibility. Both texts describe Levite service, and the difference reflects the diversity of roles and seasons in temple work.' },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            { number: 25, spans: [t('And from the age of '), hy('fifty years old', 'c-age-50'), t(' they shall cease waiting upon the service thereof, and shall serve no more:')] },
            { number: 26, spans: [t('But shall minister with their brethren in the tabernacle of the congregation, to keep the charge, and shall do no service. Thus shalt thou do unto the Levites touching their charge.')] },
          ],
        },
        { kind: 'commentary', id: 'c-age-50', html: 'A Levite serves in full capacity from 25 to 50—a full span of adult life, from early maturity to early elderhood. At 50, the heavy work ends, but the service does not. An older Levite "ministers with their brethren"—maintaining, teaching, keeping charge. The role changes, but the commitment does not end. Service is a posture, not just a job description.' },
        { kind: 'carry', html: 'There is a season for your fullest engagement, and a season after that for wisdom and mentoring. You do not have to do the same thing forever. Your calling may deepen and shift as you age. What matters is the commitment: you serve. The form of service changes, but the heart does not.' },
        { kind: 'reflection', id: 'service-season', prompt: 'What season of service are you in right now? What would change if you looked beyond the role itself to the calling beneath it?' },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Numbers 8',
    quote: 'The Levites are cleansed, presented as a wave offering, and set apart to serve before the LORD in place of Israel\'s firstborn. They tend the light of the menorah in the holy place. Believers in Christ are called to the same: to present themselves as living sacrifices and to carry His light into the world.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 8 · Study Guide',
  },
};
