import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Esther 9 — The Day of Reckoning and the Festival of Purim
 *
 * On the thirteenth day of Adar, the Jews gathered to defend themselves and
 * prevailed against their enemies throughout the provinces. In Shushan they
 * slew five hundred men, including Haman&apos;s ten sons. Esther asked for one
 * more day to complete the work. The text emphasizes that despite their power
 * over their enemies, the Jews "laid not their hand" on the prey. A day of
 * deliverance is transformed into a festival — Purim, to be remembered forever.
 * The feast of redemption; the reversal of the curse.
 */
export const ESTHER_9: RichChapterContent = {
  bookSlug: 'esther',
  bookName: 'Esther',
  chapter: 9,

  estimatedMinutes: { 5: 3, 10: 7, 15: 9 },
  intros: [
    'The appointed day arrives. From the highest officials to the common people, fear of the Jews falls upon the empire. Mordecai, wielding the king&apos;s authority, is great in the king&apos;s house, and his fame spreads. The Jews, given the law and the hour, gather in every city to defend themselves — and they prevail. Their enemies expected to destroy them; instead, the oppressed become the hand of their own deliverance.',
    'But this chapter is not only a record of victory. It is the founding of a festival. The Jews in Shushan have two days to complete their defense, and when it is finished, they declare those days — the fourteenth and fifteenth of Adar — to be days of feasting and sending portions to one another, and gifts to the poor. The curse has become blessing; the day of fear has become a day of joy. And Mordecai writes an ordinance that this feast shall be observed by all the Jews, throughout all generations, forever. It will be called Purim — from the "pur," the lot that Haman cast.',
  ],

  bottomShare: {
    quote:
      'The Jews prevailed against all their enemies. They took no plunder, though the law allowed it. Instead, they made the day of their deliverance a day of feasting and joy, giving gifts to one another and to the poor. Sorrow was turned to gladness; mourning to a festival.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Esther 9 · Study Guide',
  },

  sections: [
    /* ─── Esther 9:1–10 — The Day of Reckoning ──────────────────────────── */
    {
      ref: 'Esther 9:1–10',
      title: 'The Thirteenth Day of Adar',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(
              1,
              'Now in the twelfth month, that is, the month Adar, on the thirteenth day of the same, when the king&apos;s commandment and his decree drew near to be put in execution, in the day that the enemies of the Jews hoped to have power over them, (though it was turned to the contrary, that the Jews had rule over them that hated them;)'
            ),
            plain(
              2,
              'The Jews gathered themselves together in their cities throughout all the provinces of the king Ahasuerus, to lay hand on such as sought their hurt: and no man could withstand them; for the fear of them fell upon all people.'
            ),
            plain(
              3,
              'And all the rulers of the provinces, and the lieutenants, and the deputies, and officers of the king, helped the Jews; because the fear of Mordecai fell upon them.'
            ),
            plain(
              4,
              'For Mordecai was great in the king&apos;s house, and his fame went out throughout all the provinces: for this man Mordecai waxed greater and greater.'
            ),
            plain(
              5,
              'Thus the Jews smote all their enemies with the stroke of the sword, and slaughter, and destruction, and made what they would among them that hated them.'
            ),
            plain(
              6,
              'And in Shushan the palace the Jews slew and destroyed five hundred men.'
            ),
            {
              number: 7,
              spans: [
                t('And Parshandatha, and Dalphon, and Aspatha, And Poratha, and Adalia, and Aridatha, And Parmashta, and Arisai, and Aridai, and '),
                hg('Vajezatha', 'esth9-haman-sons'),
                t(', The ten sons of Haman the son of Hammedatha, the enemy of the Jews, slew they; but on the spoil laid they not their hand.'),
              ],
            },
            plain(
              8,
              'On that day the number of those that were slain in Shushan the palace was brought before the king.'
            ),
            plain(
              9,
              'And the king said unto Esther the queen, The Jews have slain and destroyed five hundred men in Shushan the palace, and the ten sons of Haman; what have they done in the rest of the king&apos;s provinces? now what is thy petition? and it shall be granted thee: or what is thy request further? and it shall be done.'
            ),
            plain(
              10,
              'Then said Esther, If it please the king, let it be granted to the Jews which are at Shushan to do to morrow also according unto this day&apos;s decree: and let Haman&apos;s ten sons be hanged upon the gallows.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'esth9-turned',
          html:
            'The parenthetical phrase "though it was turned to the contrary" is the heart of this chapter. What was meant to be a day of Jewish destruction becomes a day of Jewish deliverance. The word "turned" — from Hebrew "haphak" — means to overturn, to invert, to reverse completely. The enemy&apos;s advantage becomes the Jews&apos; vindication.',
        },
        {
          kind: 'commentary',
          id: 'esth9-fear',
          html:
            'The rulers and deputies of the empire help the Jews, not out of love but out of fear — fear of Mordecai. The political winds have shifted completely. What once seemed a victory for Haman is now a victory for the man he sought to destroy. The king&apos;s will, made manifest through his signet ring and his deputy, has become irresistible.',
        },
        {
          kind: 'commentary',
          id: 'esth9-haman-sons',
          html:
            'Haman&apos;s ten sons are listed by name — a detail unique in Scripture. They are named so that their death will not be forgotten, so that the reversal of Haman&apos;s dynasty will be permanent. But notice: after they are slain, the text immediately adds, "but on the spoil laid they not their hand." Even in their right to plunder, the Jews exercised restraint. They killed in self-defense; they did not enrich themselves.',
        },
        {
          kind: 'hebrew',
          id: 'esth9-purim',
          title: 'Purim — "Lots"',
          script: 'פּוּרִים',
          translit: '<strong>Purim</strong> · lots; the feast of Purim',
          description:
            'The festival takes its name from the "pur" — the lot Haman cast in chapter 3 to determine the day of destruction. By naming the festival "Purim," the Jews commemorate not only their deliverance but the casting of lots itself — turning the instrument of the enemy&apos;s malice into a symbol of God&apos;s providence.',
        },
        {
          kind: 'carry',
          html:
            'The Jews were given the power to take plunder and chose not to. In their victory, they showed restraint. This is the mark of a people who fight not from hatred but from the necessity of self-preservation. They defended their lives; they did not seek to enrich themselves on the blood of their enemies. What does it take to exercise such restraint when we have been wronged?',
        },
        {
          kind: 'reflection',
          id: 'esth9-restraint',
          prompt: 'The Jews had the right to take the spoil of their enemies but refused to do so. What does this restraint teach about justice, power, and self-defense?',
        },
      ],
    },

    /* ─── Esther 9:11–19 — The Second Day and the Feast ──────────────────── */
    {
      ref: 'Esther 9:11–19',
      title: 'A Second Day of Deliverance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(
              11,
              'On that day the number of those that were slain in Shushan was brought before the king.'
            ),
            plain(
              12,
              'And the king said unto Esther the queen, The Jews have slain and destroyed five hundred men in Shushan the palace, and the ten sons of Haman; what have they done in the rest of the king&apos;s provinces? now what is thy petition? and it shall be granted thee: or what is thy request further? and it shall be done.'
            ),
            plain(
              13,
              'Then said Esther, If it please the king, let it be granted to the Jews which are at Shushan to do to morrow also according unto this day&apos;s decree: and let Haman&apos;s ten sons be hanged upon the gallows.'
            ),
            plain(
              14,
              'And the king commanded it so to be done: and the decree was given at Shushan; and they hanged Haman&apos;s ten sons.'
            ),
            plain(
              15,
              'For the Jews that were in Shushan gathered themselves together on the fourteenth day also of the month Adar, and slew three hundred men at Shushan; but on the prey they laid not their hand.'
            ),
            {
              number: 16,
              spans: [
                t('But the other Jews that were in the king&apos;s provinces gathered themselves together, and '),
                hg('stood for their lives', 'esth9-stood-for-lives'),
                t(', and had rest from their enemies, and slew of their foes seventy and five thousand, but they laid not their hands on the prey,'),
              ],
            },
            plain(
              17,
              'On the thirteenth day of the month Adar; and on the fourteenth day of the same rested they, and made it a day of feasting and gladness.'
            ),
            {
              number: 18,
              spans: [
                t('But the Jews that were at Shushan assembled together on the thirteenth day thereof, and on the fourteenth thereof; and on the fifteenth day of the same they '),
                hg('rested, and made it a day of feasting and gladness', 'esth9-feast'),
                t('.'),
              ],
            },
            plain(
              19,
              'Therefore the Jews of the villages, that dwelt in the unwalled towns, made the fourteenth day of the month Adar a day of gladness and feasting, and a good day, and of sending portions one to another.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'esth9-stood-for-lives',
          html:
            'The phrase "stood for their lives" captures the essence of what the Jews did. They did not go on the attack; they stood their ground. They defended. And in defending, they prevailed. The passive frame — "stood" rather than "pursued" — emphasizes that they were not the aggressors, but those forced to fight for survival.',
        },
        {
          kind: 'commentary',
          id: 'esth9-seventy-five',
          html:
            'Seventy-five thousand enemies slain throughout the provinces. The numbers are staggering — a vindication so complete that it cannot be ignored. But again, the text emphasizes: "but they laid not their hands on the prey." The victory is not about conquest or wealth; it is about survival and the triumph of God&apos;s purpose.',
        },
        {
          kind: 'hebrew',
          id: 'esth9-mattanot',
          title: 'Mattanot — "Gifts" or "Portions"',
          script: 'מַתָּנוֹת',
          translit: '<strong>Mattanot</strong> · gifts; portions; presents',
          description:
            'The Jews send portions to one another on Purim — gifts of food and wine. This exchange of gifts has become central to the festival. The sharing of gifts transforms a day of violence into a day of community, love, and mutual provision.',
        },
        {
          kind: 'commentary',
          id: 'esth9-feast',
          html:
            'What begins as a day of battle becomes a day of feasting. What was to be a day of mourning becomes a day of gladness. The text repeatedly emphasizes this inversion: feasting, gladness, good day. The enemies expected to destroy the Jews on this day; instead, the Jews celebrate their deliverance and transform the memory of danger into joy.',
        },
        {
          kind: 'carry',
          html:
            'Celebration is an act of faith. The Jews did not merely survive; they feasted. They sent portions to one another, they made a good day, they rejoiced. To feast after battle is to declare that the danger is past, that we have returned to the world of abundance and peace. When we have been through suffering, what does it mean to feast, to celebrate, to share gifts?',
        },
        {
          kind: 'reflection',
          id: 'esth9-feast-transforms',
          prompt: 'How does the transformation from a day of bloodshed into a day of feasting and gift-giving change the meaning of the Jews&apos; victory? What does celebration add to survival?',
        },
      ],
    },

    /* ─── Esther 9:20–28 — Purim Established Forever ──────────────────────── */
    {
      ref: 'Esther 9:20–28',
      title: 'The Festival Ordained',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(
              20,
              'And Mordecai wrote these things, and sent letters unto all the Jews that were in all the provinces of the king Ahasuerus, both nigh and far,'
            ),
            plain(
              21,
              'To stablish this among them, that they should keep the fourteenth day of the month Adar, and the fifteenth day of the same, yearly,'
            ),
            plain(
              22,
              'As the days wherein the Jews rested from their enemies, and the month which was turned unto them from sorrow to joy, and from mourning into a good day: that they should make them days of feasting and joy, and of sending portions one to another, and gifts to the poor.'
            ),
            plain(
              23,
              'And the Jews undertook to do as they had begun, and as Mordecai had written unto them;'
            ),
            plain(
              24,
              'For Haman the son of Hammedatha, the Agagite, the enemy of all the Jews, had devised against the Jews to destroy them, and had cast Pur, that is, the lot, to consume them, and to destroy them;'
            ),
            plain(
              25,
              'But when this came before the king, he commanded by letters that his wicked device, which he devised against the Jews, should return upon his own head, and that he and his sons should be hanged on the gallows.'
            ),
            plain(
              26,
              'Wherefore they called these days Purim after the name of Pur. Therefore for all the words of this letter, and of that which they had seen concerning this matter, and which had come unto them,'
            ),
            plain(
              27,
              'The Jews ordained, and took upon them, and upon their seed, and upon all such as joined themselves unto them, so as it should not fail, that they would keep these two days according to their writing, and according to their appointed time every year;'
            ),
            plain(
              28,
              'And that these days should be remembered and kept throughout every generation of every family, throughout every province and every city; and these days of Purim should not fail from among the Jews, nor the memorial of them perish among their seed.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'esth9-mordecai-writes',
          html:
            'Mordecai writes letters to establish the festival — much as he once wrote the decree of deliverance in the king&apos;s name. Now he writes in his own name, not to wage war but to establish memory. The written word now serves not to command violence but to preserve joy.',
        },
        {
          kind: 'commentary',
          id: 'esth9-sorrow-joy',
          html:
            'The text itself names the miracle: the month "was turned unto them from sorrow to joy, and from mourning into a good day." The verb "turned" appears again — the complete inversion of what was to be. What was meant to be a month of death becomes a month of celebration. This turning is so decisive, so powerful, that it will be remembered every year, forever.',
        },
        {
          kind: 'commentary',
          id: 'esth9-gifts-poor',
          html:
            'The festival is not only feasting among the Jews themselves. It is also "gifts to the poor." The deliverance is remembered by becoming a channel of generosity. Those who were saved share their joy with the poor, extending the circle of blessing beyond their own community.',
        },
        {
          kind: 'commentary',
          id: 'esth9-memorial-perish',
          html:
            'The ordinance is written with an urgency: let these days "not fail from among the Jews, nor the memorial of them perish among their seed." The festival is not to be casual or optional. It is a covenant obligation — to be observed by every generation, as a way of saying: we remember. We will not forget what God did for us.',
        },
        {
          kind: 'christ',
          id: 'esth9-christ',
          title: 'Christ Connection — Sorrow Turned to Joy',
          html:
            'Jesus tells His disciples in John 16:22, "Verily I say unto you, That ye shall weep and lament, but the world shall rejoice: and ye shall be sorrowful, but your sorrow shall be turned into joy." The disciples will weep at His crucifixion — the appointed day of apparent defeat. But their sorrow will be turned to joy at the resurrection. And like Purim, that joy will be commemorated forever in the memorial of the Lord&apos;s Supper, where believers gather to remember and celebrate the day when death was overcome.',
        },
        {
          kind: 'carry',
          html:
            'Memory is an act of faith. When we remember deliverance, we declare that the dark season has passed, that we are no longer living in that moment of fear. Purim is a yearly choice to remember and rejoice. Do we have such anchors in our own lives — places where we return again and again to say: this is what God did; this is what we survived; this is why we celebrate?',
        },
        {
          kind: 'reflection',
          id: 'esth9-ordinance',
          prompt: 'Why does Mordecai establish a festival rather than simply allowing the Jews to move on? What does annual remembrance add to the experience of deliverance?',
        },
      ],
    },
  ],
};
