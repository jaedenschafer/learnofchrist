import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Esther 3 — Haman's Decree
 *
 * The king promotes Haman the Agagite to the highest position in the kingdom,
 * and commands that all in the gate bow before him. Yet Mordecai will not bow.
 * Haman&apos;s rage at this single refusal is absolute — but it is not enough for him
 * to destroy Mordecai alone. Instead, he moves to destroy all the Jews throughout
 * the entire empire. He casts Pur — the lot — to determine the day of destruction,
 * the twelfth month, Adar. He offers ten thousand talents of silver to the king
 * for permission to carry out the slaughter. The king grants it. The decree goes
 * out: in one day, all the Jews will be killed and their goods plundered. The city
 * of Shushan is perplexed, confused. But the king and Haman sit down to drink.
 */
export const ESTHER_3: RichChapterContent = {
  bookSlug: 'esther',
  bookName: 'Esther',
  chapter: 3,

  estimatedMinutes: { beginner: 3, intermediate: 7, deep: 9 },
  intros: [
    'The king&apos;s hand is on Haman the Agagite. He exalts him above all the princes and gives him position of power. All who sit in the king&apos;s gate bow and do reverence to Haman — such is the king&apos;s commandment. But one will not bow. Mordecai, the Jew, refuses. He will not bow to Haman. And in that refusal, a man of vast pride encounters an immovable will.',
    'Haman&apos;s anger is kindled, but it is not satisfied with the destruction of one man. Instead, he proposes to the king a plan of staggering ambition: the annihilation of an entire people. He casts lots — Pur — to determine the day. The lot falls on the twelfth month, Adar. He brings ten thousand talents of silver to buy the king&apos;s permission. The king grants it. And so the decree goes out from one end of the kingdom to the other: in one day, all Jews, great and small, children and women, are to be killed, and their goods are to be plundered. The stage is set for a catastrophe. Yet as we read, we know what Haman does not know: that there is a queen in the palace who is herself a Jew, and that her people will not be erased.',
  ],

  bottomShare: {
    label: 'Share Esther 3',
    quote:
      'A single refusal to bow, and the machinery of power is set in motion. Yet God&apos;s people have never been destroyed by the hatred of kings. They are preserved by a hand that works in hiddenness, through the faithfulness of a people who will not yield.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Esther 3 · Study Guide',
  },

  sections: [
    /* ─── Esther 3:1–6 — Haman Is Exalted, Mordecai Refuses ────────────── */
    {
      ref: 'Esther 3:1–6',
      title: 'The Refusal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'After these things did king Ahasuerus promote Haman the son of Hammedatha the Agagite, and advanced him, and set his seat above all the princes that were with him.'),
            plain(2, 'And all the king&apos;s servants that were in the king&apos;s gate, bowed, and reverenced Haman: for the king had so commanded concerning him. But Mordecai bowed not, nor did him reverence.'),
            plain(3, 'Then said the servants of the king, which were in the king&apos;s gate, unto Mordecai, Why transgressest thou the king&apos;s commandment?'),
            plain(4, 'Now it came to pass, when they spake daily unto him, and he hearkened not unto them, that they told Haman, to see whether Mordecai&apos;s matters would stand: for he had told them that he was a Jew.'),
            plain(5, 'And when Haman saw that Mordecai bowed not, nor did him reverence, then was Haman full of wrath.'),
            plain(6, 'And he thought scorn to lay hands on Mordecai alone; but as they had shewed him the people of Mordecai, he sought to destroy all the Jews that were throughout the whole kingdom of Ahasuerus, even the people of Mordecai.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'haman-promoted',
          html:
            'Haman is promoted above all the princes. He is set in a seat of power, given authority, made great. It is the elevation that matters most to him — that all should see his power, that all should bow before him. The king has commanded that all the servants in the gate should bow and reverence him. It is the law. It is absolute.',
        },
        {
          kind: 'commentary',
          id: 'mordecai-refuses',
          html:
            'But Mordecai will not bow. He will not do reverence. The text does not explain his refusal. He simply refuses. The servants question him: Why do you transgress the king&apos;s commandment? They ask daily. He does not listen. And then they tell Haman. Mordecai has told them that he is a Jew. This is the moment when his hidden identity becomes known.',
        },
        {
          kind: 'hebrew',
          id: 'agagite-descent',
          title: 'Agagite — Descendant of Amalek',
          script: 'אֲגָגִי',
          translit: '<strong>Agagite</strong> · descendant of Agag, king of the Amalekites',
          description:
            'Haman is an Agagite — he is descended from Agag, the king of the Amalekites. This is significant, for the Amalekites were ancient enemies of Israel. Agag was defeated by Saul, and his line was to be destroyed according to the law of God (1 Samuel 15). That Haman is an Agagite suggests that in him, an old enmity is being rekindled — not merely personal hatred, but the enmity of peoples, reaching back across generations.',
        },
        {
          kind: 'commentary',
          id: 'haman-full-wrath',
          html:
            'When Haman sees that Mordecai bows not, nor does him reverence, Haman is full of wrath. His pride is wounded. But what follows is extraordinary: he does not think to lay hands on Mordecai alone. Instead, he seeks to destroy all the Jews. His response is to convert a personal affront into a genocide. A single act of refusal unleashes a hatred so vast that it targets an entire people.',
        },
        {
          kind: 'carry',
          html:
            'There is something to notice here about how power responds to resistance. Haman does not merely punish Mordecai. He seeks to annihilate the entire people from which Mordecai comes. This is often how systems of control operate: they read a single act of defiance as a threat not just to themselves, but to their entire order. They respond with totality. And yet, often, the response reveals the fragility of what they claim to be defending — if a single man&apos;s refusal to bow threatens the entire kingdom, then the power that kingdom is built on is far more fragile than it appears.',
        },
        {
          kind: 'reflection',
          id: 'mordecai-refuses',
          prompt: 'Mordecai refuses to bow to Haman, knowing it will bring danger not just to himself, but to his entire people. What convictions do you hold that you would not compromise, even if it cost you dearly?',
        },
      ],
    },

    /* ─── Esther 3:7–11 — The Lot Is Cast ────────────────────────────── */
    {
      ref: 'Esther 3:7–11',
      title: 'The Decree of Death',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(7, 'In the first month, that is, the month Nisan, in the twelfth year of king Ahasuerus, they cast Pur, that is, the lot, before Haman from day to day, and from month to month, to the twelfth month, that is, the month Adar.'),
            plain(8, 'And Haman said unto the king Ahasuerus, There is a certain people scattered abroad and dispersed among the people in all the provinces of thy kingdom; and their laws are diverse from all people; neither keep they the king&apos;s laws: therefore it is not for the king&apos;s profit to suffer them.'),
            plain(9, 'If it please the king, let it be written that they may be destroyed: and I will pay ten thousand talents of silver to the hands of those that have the charge of the business, to bring it into the king&apos;s treasuries.'),
            plain(10, 'And the king took his ring from his hand, and gave it unto Haman the son of Hammedatha the Agagite, the Jews&apos; enemy.'),
            plain(11, 'And the king said unto Haman, The silver is thine, and the people also, to do with them as it seemeth good to thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'casting-pur',
          html:
            'Haman casts Pur — the lot — to determine the day. The lot is cast repeatedly, from month to month, until it falls on the twelfth month, Adar. The text suggests that Haman consults signs, omens, the will of fortune — or perhaps he is merely giving his destruction the appearance of necessity, of fate. The lot falls, and the day is determined: all the Jews are to be destroyed on a single day, many months hence.',
        },
        {
          kind: 'hebrew',
          id: 'pur-lot',
          title: 'Pur — "The Lot"',
          script: 'פּוּר',
          translit: '<strong>Pur</strong> · lot; casting of lots to determine fate or divine will',
          description:
            'Pur is the casting of lots, a practice used throughout the ancient world to determine the will of the gods or to leave a decision to chance. That the book itself is named Esther — or in Hebrew, the five megillot (scrolls) — is sometimes called the Festival of Purim, the Feast of Lots, because of this lot cast by Haman. What Haman meant for evil, what he tried to place in the hands of fate, God turns into the very name by which His redemption is remembered.',
        },
        {
          kind: 'commentary',
          id: 'haman-petition',
          html:
            'Haman makes his petition to the king with flattery and false accusation. He speaks of the Jews as scattered and dispersed, as having laws diverse from all people, as not keeping the king&apos;s laws. He frames them not as individuals, but as a problem to be solved. He offers the king ten thousand talents of silver — an enormous sum — to give permission for their destruction.',
        },
        {
          kind: 'commentary',
          id: 'king-ring',
          html:
            'The king takes his ring from his hand and gives it to Haman — a ring that would have been used to seal documents, to authorize decrees. It is a symbol of delegated power. The king does not inquire further. He does not ask who these people are, or why they are to be destroyed. He simply grants Haman his desire. He tells him: the silver is yours, and the people also, to do with them as seemeth good to you.',
        },
        {
          kind: 'carry',
          html:
            'We see here how quickly power can be enlisted for destruction. Haman flatters the king, frames the Jews as a threat, offers silver, and receives absolute permission. The king does not seek information. He does not ask for justice to be administered fairly. He simply gives Haman what he asks for. This is often how atrocities happen — not through the passion of the people, but through the carelessness of those in power, who grant permission without understanding what they are permitting.',
        },
        {
          kind: 'reflection',
          id: 'lot-cast',
          prompt: 'Haman casts lots to determine the day of destruction, seeking to make his hatred seem like fate. What distinctions do you see between true fate or providence, and the rationalizations we use to justify our own hatreds?',
        },
      ],
    },

    /* ─── Esther 3:12–15 — The Decree Goes Forth ───────────────────────── */
    {
      ref: 'Esther 3:12–15',
      title: 'The Edict Proclaimed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(12, 'Then were the king&apos;s scribes called on the thirteenth day of the first month, and there was written according to all that Haman had appointed unto the lieutenants, and to the governors that were over every province, and to the rulers of every people of every province according to the writing thereof, and to every people after their language; in the name of the king Ahasuerus was it written, and sealed with the king&apos;s ring.'),
            plain(13, 'And the letters were sent by posts on horseback, and riders on mules, couriers of the king, throughout all the provinces of the king, to destroy, to kill, and to cause to perish, all Jews, both young and old, little children and women, in one day, even the thirteenth day of the twelfth month, which is the month Adar, and to take the spoil of them for a prey.'),
            plain(14, 'The copy of the writing for a commandment to be given in every province was published unto all people, that they should be ready against that day.'),
            plain(15, 'The posts went out, being hastened by the king&apos;s commandment, and the decree was given in Shushan the palace. And the king and Haman sat down to drink; but the city of Shushan was perplexed.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'scribes-write',
          html:
            'The king&apos;s scribes are called. They write according to all that Haman has appointed. The edict is issued in the name of the king, sealed with his ring. It goes to every province, every lieutenant, every governor, every people in every language. The machinery of the empire is now directed toward one end: the destruction of all the Jews.',
        },
        {
          kind: 'commentary',
          id: 'destroy-perish',
          html:
            'The language is explicit and terrible: to destroy, to kill, and to cause to perish, all Jews, both young and old, little children and women, in one day. Not soldiers, not enemies in a military sense. Children. Women. The aged. All. And on that single day — the thirteenth day of Adar — their goods are to be taken as plunder. It is not merely execution; it is erasure.',
        },
        {
          kind: 'commentary',
          id: 'couriers-hurry',
          html:
            'The posts go out hastened by the king&apos;s commandment. The decree spreads throughout the empire, reaching every province, every people. There is urgency in the spreading of death. The king and Haman, having set this in motion, sit down to drink. But the city of Shushan is perplexed. The common people know what is coming. They are confused, troubled, uncertain.',
        },
        {
          kind: 'carry',
          html:
            'Here we see how the machinery of state can be used to multiply one man&apos;s hatred across an entire empire. One person&apos;s rage, combined with power, becomes the fate of thousands. The decree has the force of law — it has been written, sealed, sent out. It is irrevocable. The Jews have roughly ten months to face the knowledge that on a certain day, they will be destroyed.',
        },
        {
          kind: 'christ',
          id: 'esther-3-christ',
          title: 'Christ Connection — God Preserves His People',
          html:
            'Haman&apos;s edict parallels many moments in Scripture when human power has moved to destroy God&apos;s people: Pharaoh&apos;s order to kill Hebrew infants, Herod&apos;s slaughter of the innocents, the persecution of the early church. Yet in each case, God&apos;s people are preserved. The pattern is always the same: human hatred moves to annihilate, yet God moves to save. When we read of Christ, we see the One whom all enmity was ultimately aimed at, yet the One through whom all redemption flows. "When the fullness of time was come, God sent forth his Son... to redeem them that were under the law" (Galatians 4:4–5). The Jews in Esther&apos;s time faced a decreed day of destruction. But God preserved them. And far greater than their preservation is the preservation of humanity through Christ, whose death was meant to destroy us, yet has become our eternal life.',
        },
      ],
    },
  ],
};
