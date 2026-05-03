import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 40 — The Perfect Obedience
 *
 * "I waited patiently for the Lord; and he inclined unto me, and heard my
 * cry." But the heart of this psalm is the extraordinary declaration: "Sacrifice
 * and offering thou didst not desire; mine ears hast thou opened... Lo, I come...
 * I delight to do thy will, O my God: yea, thy law is within my heart."
 * Hebrews 10:5–9 identifies this as Christ speaking—the One whose obedience
 * replaced all sacrifice.
 */
export const PSALMS_40: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 40,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 6 },
  intros: [
    'Psalm 40 begins in patient waiting. David has cried out, and God has inclined His ear to him. He has been lifted out of a pit and set upon a rock. But the psalm is not primarily about David&apos;s individual rescue. It builds toward a far greater claim. God does not require sacrifice and offering. He requires obedience, willingness, a heart that delights to do His will. The ancient reader would have been shocked by this declaration. But for Christian readers, the words point unmistakably to Christ, the One who came not to be served but to serve, to give His life as a ransom, to say, "Lo, I come to do thy will, O God."',
    'In Hebrews 10, the apostle quotes Psalm 40:6–8 and identifies the speaker as Jesus. Christ is the One who says: "Sacrifice and offering thou didst not desire." He is the One whose delight is to do God&apos;s will. And by that obedience, He has perfected forever those who are sanctified. This is the Psalm of the perfect servant who teaches us what obedience, true obedience, looks like.',
  ],

  sections: [
    {
      ref: 'Psalm 40:1–8',
      title: 'Waiting and Obedience',
      blocks: [
        {
          kind: 'scripture',
          chapter: 40,
          lines: [
            plain(1, 'I waited patiently for the Lord; and he inclined unto me, and heard my cry.'),
            plain(2, 'He brought me up also out of an horrible pit, out of the miry clay, and set my feet upon a rock, and established my goings.'),
            plain(3, 'And he hath put a new song in my mouth, even praise unto our God: many shall see it, and fear, and shall trust in the Lord.'),
            plain(4, 'Blessed is that man that maketh the Lord his trust, and respecteth not the proud, nor such as turn aside to lies.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-40-78mid-1',
          html:
            'The psalm turns here. The verses ahead are not the same key as the ones behind; the camera has moved.',
        },
        {
          kind: 'scripture',
          chapter: 40,
          lines: [
            plain(5, 'Many, O Lord my God, are thy wonderful works which thou hast done, and thy thoughts which are to us-ward: they cannot be reckoned up in order unto thee: if I would declare and speak of them, they are more than can be numbered.'),
            plain(6, 'Sacrifice and offering thou didst not desire; but a body hast thou prepared me: in burnt offering and sin offering thou hast had no pleasure.'),
            plain(7, 'Then said I, Lo, I come: in the volume of the book it is written of me,'),
            plain(8, 'I delight to do thy will, O my God: yea, thy law is within my heart.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms40-waited',
          html:
            'The psalm opens with patience. David waited patiently. This is not resignation. This is active, faithful waiting. And God inclined unto him—He bent down, He listened, He responded. The waiting was not endless. It culminated. The Lord lifted him out of the pit, the miry clay where he was stuck. He set his feet upon a rock—firm ground. The image is of deliverance from hopelessness to standing. From drowning to being established.',
        },
        {
          kind: 'hebrew',
          id: 'psalms40-qavah',
          title: 'Qavah — "Waited Patiently"',
          script: 'קָוָה',
          translit: '<strong>Qavah</strong> · to wait; to hope; to trust; to hold out in hope',
          description:
            'Qavah is not passive waiting. It is a holding out of hope, a stretching toward God, an active trust that God will respond. It carries both vulnerability and confidence—the vulnerability of one who admits he cannot help himself, the confidence that God can and will.',
        },
        {
          kind: 'commentary',
          id: 'psalms40-song',
          html:
            'God has put a new song in David&apos;s mouth. This is characteristic of Psalm 40—the movement from old song (the cry of distress) to new song (praise). And this new song is meant to be witnessed: "Many shall see it, and fear, and shall trust in the Lord." David&apos;s testimony becomes an invitation. His rescue points others to the One who rescues.',
        },
        {
          kind: 'commentary',
          id: 'psalms40-sacrifice',
          html:
            'But then comes the startling claim: "Sacrifice and offering thou didst not desire." In the context of Israel&apos;s worship, this would have seemed almost blasphemous. The Temple system is built on sacrifice. Yet the psalmist says God does not desire it. What does He desire? "A body hast thou prepared me." The connection is unmistakable: God wants not the death of animals but obedience, presence, a willingness to come in person and do what He asks.',
        },
        {
          kind: 'commentary',
          id: 'psalms40-lo-come',
          html:
            '"Lo, I come"—Here is the crux. Someone is speaking these words. Someone is saying: I am coming. I delight to do thy will. I delight—this is not duty alone, but joy. The law of God is not external to me. It is within my heart. It is who I am. For Christian readers, these words are unmistakably Christ&apos;s. He is the One who came to do God&apos;s will perfectly, joyfully, with full heart alignment.',
        },
        {
          kind: 'reflection',
          id: 'psalms40-delight',
          prompt: 'Can you imagine delighting to do God&apos;s will the way Psalm 40 describes? What would have to change in your heart for obedience to become not duty but joy?',
        },
      ],
    },

    {
      ref: 'Psalm 40:9–17',
      title: 'Proclamation and Prayer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 40,
          lines: [
            plain(9, 'I have preached righteousness in the great congregation: lo, I have not refrained my lips, O Lord, thou knowest.'),
            plain(10, 'I have not hid thy righteousness within my heart; I have declared thy faithfulness and thy salvation: I have not concealed thy lovingkindness and thy truth from the great congregation.'),
            plain(11, 'Withhold not thou thy mercies from me, O Lord: let thy lovingkindness and thy truth continually preserve me.'),
            plain(12, 'For innumerable evils have compassed me about: mine iniquities have taken hold upon me, so that I am not able to look up; they are more than the hairs of my head: therefore my heart faileth me.'),
            plain(13, 'Be pleased, O Lord, to deliver me: O Lord, make haste to help me.'),
            plain(15, 'But I am poor and needy; yet the Lord thinketh upon me: thou art my help and my deliverer; make no tarrying, O God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms40-preach',
          html:
            'The one who delights in God&apos;s will cannot remain silent. Verses 9–10 show him proclaiming righteousness in the great congregation, declaring God&apos;s faithfulness, not concealing His lovingkindness. Obedience that is genuine moves outward. It speaks. It testifies. It becomes a witness to others of who God is and what He does.',
        },
        {
          kind: 'commentary',
          id: 'psalms40-evils-compass',
          html:
            'Yet even the one committed to obedience knows suffering. "Innumerable evils have compassed me about." The speaker&apos;s iniquities have taken hold of him. He cannot look up. This is not the comfort of one who has achieved sinless perfection. This is the reality of one who lives in a broken world, who knows his own failings, and who cries out to God for deliverance.',
        },
        {
          kind: 'commentary',
          id: 'psalms40-poor-needy',
          html:
            'The psalm closes with the speaker identifying himself as poor and needy. Yet he knows that the Lord thinks upon him. In the midst of his weakness, God is his help and his deliverer. This is the final paradox: the one who says "I delight to do thy will" is also the one who admits he cannot accomplish anything without God&apos;s constant intervention.',
        },
        {
          kind: 'christ',
          id: 'psalms40-christ-hebrews',
          title: 'Christ Connection — Hebrews 10:5–9',
          html:
            'The author of Hebrews identifies Psalm 40:6–8 as the words of Christ: "A body hast thou prepared me... Lo, I come to do thy will, O God." Hebrews goes on to declare: "By the which will we are sanctified through the offering of the body of Jesus Christ once for all." Christ is the One whose obedience replaces all sacrifice. He is the perfect servant who delights to do God&apos;s will. And through His offering, all who believe are made perfect, forever sanctified. Psalm 40 is the portrait of perfect obedience. Christ is that portrait made flesh.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 40 teaches that true obedience to God is not grim duty. It is delight. It is the alignment of the whole self—heart, will, lips—with God&apos;s purposes. And such obedience cannot be silent; it must speak, must witness, must testify to others of God&apos;s faithfulness. Yet even the obedient one knows weakness, knows iniquity, knows the need for God&apos;s constant preservation. Obedience does not mean perfection. It means willingness, alignment, the joyful turning of the whole self toward God&apos;s will.',
        },
        {
          kind: 'reflection',
          id: 'psalms40-witness',
          prompt: 'When you have found yourself in genuine obedience to God, what did you feel? How did that obedience overflow into witness—into speaking about what God was doing in your life?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I delight to do thy will, O my God: yea, thy law is within my heart.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 40 · Study Guide',
  },

  hasHebrew: true,
};
