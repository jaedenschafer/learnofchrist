import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 7 — A Sign Given: Immanuel
 *
 * "Therefore the Lord himself shall give you a sign; Behold, a virgin shall conceive,
 * and bear a son, and shall call his name Immanuel." In a moment of political crisis,
 * when King Ahaz fears the military threat of Israel and Syria, Isaiah speaks of a child
 * born to a virgin, a sign that God is with His people. Matthew 1:23 quotes this passage
 * directly and applies it to Jesus. Before the child knows to refuse the evil and choose
 * the good, the lands he fears will be abandoned.
 */
export const ISAIAH_7: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 7,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 6 },
  intros: [
    'The kingdom of Judah is in crisis. King Ahaz looks out from Jerusalem and sees enemies gathering. To the north, Israel and Syria have allied against him, threatening his throne. Ahaz is gripped by fear—his heart shakes as the trees of the forest shake in the wind. In this moment, God sends Isaiah with a message not of military strategy but of trust: "Take heed, and be quiet; fear not, neither be fainthearted." God will not allow the plotters to succeed. Their plan will come to nothing.',
    'But Ahaz refuses to trust. So God offers a sign—not a sign that Ahaz chooses, but a sign that God Himself gives. The sign is extraordinary: "Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel." For Ahaz, this sign concerns the near future—a promise that judgment will fall on his enemies and his kingdom will survive. But Isaiah&apos;s word stretches far beyond Ahaz&apos;s immediate crisis. Matthew later identifies this sign with Jesus, the virgin-born Son, the final Immanuel, God with us.',
  ],

  sections: [
    {
      ref: 'Isaiah 7:1–9',
      title: 'Fear Not: God&apos;s Promise to Ahaz',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(3, 'Then said the Lord unto Isaiah, Go forth now to meet Ahaz, thou, and Shear-jashub thy son, at the end of the conduit of the upper pool in the highway of the fuller&apos;s field;'),
            plain(4, 'And say unto him, Take heed, and be quiet; fear not, neither be fainthearted for the two tails of these smoking firebrands, for the fierce anger of Rezin with Syria, and of the son of Remaliah.'),
            plain(9, 'And the head of Ephraim is Samaria, and the head of Samaria is Remaliah&apos;s son. If ye will not believe, surely ye shall not be established.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah7-fear',
          html:
            'Ahaz is undone by fear. The military threat is real—Israel and Syria have formed an alliance against Judah. But Isaiah&apos;s counsel is not about military strength or diplomatic maneuvering. It is about faith: "Fear not, neither be fainthearted." The "two tails of these smoking firebrands" is a vivid insult, dismissing the angry kings as mere embers, unable to sustain their threat. The picture is clear: from God&apos;s perspective, these enemies are no more dangerous than a candle about to go out.',
        },
        {
          kind: 'commentary',
          id: 'isaiah7-believe-establish',
          html:
            '"If ye will not believe, surely ye shall not be established." This is the hinge of the passage. Ahaz&apos;s stability does not depend on military strength or political acumen. It depends entirely on belief—on faith in God&apos;s word. To refuse to believe is to remove the only foundation that can genuinely establish a nation. All other foundations will crumble.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah7-naman',
          title: 'Aman — "Believe" or "Establish"',
          script: 'אָמַן',
          translit: '<strong>Aman</strong> · to believe, to trust, to establish, to be firm',
          description:
            'This verb carries double meaning. To believe in God is to establish yourself on a firm foundation. Conversely, to refuse to believe is to remove yourself from that foundation. Faith and security are inseparable. One cannot be established without trusting in God&apos;s promises.',
        },
        {
          kind: 'carry',
          html:
            'What causes you fear? What external threat or pressure makes your heart shake? Isaiah&apos;s counsel echoes across the centuries: "Fear not, neither be fainthearted." The threat may be real. But from the perspective of faith, it is already defeated, already "smoking firebrands" about to go out. What would it look like to respond to your fears with faith rather than with anxiety?',
        },
        {
          kind: 'reflection',
          id: 'isaiah7-fear-reflect',
          prompt: 'What do you fear most in your life right now? How does trust in God&apos;s promises address that fear? In what ways have you seen God&apos;s promises prove true in your past?',
        },
      ],
    },

    {
      ref: 'Isaiah 7:10–17',
      title: 'The Sign of Immanuel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(10, 'Moreover the Lord spake again unto Ahaz, saying,'),
            plain(11, 'Ask thee a sign of the Lord thy God; ask it either in the depth, or in the height above.'),
            plain(12, 'But Ahaz said, I will not ask, neither will I tempt the Lord my God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-sign-given',
          html:
            '<p>Ahaz refuses the sign; the sign comes anyway—a virgin will bear a son. God&apos;s promise outlasts our refusal.</p>',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(13, 'And he said, Hear ye now, O house of David; Is it a small thing for you to weary men, but will ye weary my God also?'),
            plain(14, 'Therefore the Lord himself shall give you a sign; Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel.'),
            plain(15, 'Butter and honey shall he eat, that he may know to refuse the evil, and choose the good.'),
            plain(16, 'For before the child shall know to refuse the evil, and choose the good, the land that thou abhorrest shall be forsaken of both her kings.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah7-sign-offered',
          html:
            'God offers Ahaz a sign—any sign he wishes, from the depths of Sheol to the heights of heaven. The offer is extraordinary: God is saying, "Name what you need to see in order to believe, and I will show it to you." But Ahaz refuses. He says, "I will not ask, neither will I tempt the Lord my God." This sounds pious, but it is actually a refusal. Ahaz will not ask because he does not wish to be compelled to believe. He has made his decision: he will rely on his own wisdom, his own strength, his own political maneuvering.',
        },
        {
          kind: 'commentary',
          id: 'isaiah7-immanuel-sign',
          html:
            'Because Ahaz refuses the sign he is offered, God gives a sign He has not been asked for. "Therefore the Lord himself shall give you a sign." The sign is a child born to a virgin. The child shall be called Immanuel—"God with us." For Ahaz, this sign points to the near future: before this child grows old enough to distinguish good from evil, the lands threatening Judah will be abandoned. The immediate crisis will pass. But Isaiah&apos;s words reach far beyond Ahaz to a future age when a virgin would indeed conceive and bear a son, and the name of that son would declare the presence of God Himself among His people.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah7-almah',
          title: 'Almah — "Virgin" or "Young Woman"',
          script: 'עַלְמָה',
          translit: '<strong>Almah</strong> · virgin, young woman of marriageable age',
          description:
            'The Hebrew word almah refers to a young woman, typically unmarried, of childbearing age. In context, the sign is extraordinary: a young woman will conceive, not through normal marital means, but by a direct act of God. The birth itself is the sign—proof that God has not abandoned His people.',
        },
        {
          kind: 'christ',
          id: 'isaiah7-christ-immanuel',
          title: 'Christ Connection — God With Us',
          html:
            'Matthew 1:22–23 explicitly quotes Isaiah 7:14 and applies it to Jesus: "Now all this was done, that it might be fulfilled which was spoken of the Lord by the prophet, saying, Behold, a virgin shall be with child, and shall bring forth a son, and they shall call his name Emmanuel, which being interpreted is, God with us." For Matthew&apos;s readers, the mystery of Isaiah&apos;s sign is solved. God kept His word. A virgin—Mary—conceived and bore a son. And in that son, God Himself entered human flesh and dwelt among His people. The name Immanuel is Jesus. Where Ahaz feared and refused to believe, Jesus came as the final proof that God is with His people, that His promises can be trusted, that faith is justified.',
        },
        {
          kind: 'carry',
          html:
            'The name Immanuel—God with us—is a promise that echoes through every season of life. When we face what appears to be overwhelming opposition, when we are tempted to rely on our own resources alone, when we fear that God has abandoned us, Immanuel speaks a different word. God has not left. God is present. God is at work. What would it mean to live today as if you believed that God is truly with you, not distant but present, not silent but speaking, not sleeping but awake and working on your behalf?',
        },
        {
          kind: 'reflection',
          id: 'isaiah7-immanuel-reflect',
          prompt: 'In what situation do you most need to believe that God is with you? How does the promise of Immanuel comfort you or challenge you to trust differently?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Therefore the Lord himself shall give you a sign; Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 7:14 · Study Guide',
  },

  hasHebrew: true,
};
