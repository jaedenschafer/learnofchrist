import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 105 — The History of Covenant Faithfulness
 *
 * "O give thanks unto the Lord; call upon his name." The psalmist traces God&apos;s
 * covenant through history: Abraham, Isaac, Jacob, Joseph, Moses, the Exodus,
 * the plagues, the wilderness, the promised land. Each stage reveals God keeping
 * His word, protecting His people, fulfilling promises made generations before.
 * This is a psalm about memory and trust: remember what God has done, and you
 * will trust what He will do.
 */
export const PSALMS_105: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 105,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  intros: [
    'Psalm 105 is a recitation of salvation history—God&apos;s covenant with Abraham, the journey to Egypt, Joseph&apos;s rise and fall and rise again, the plagues, the Exodus, the wilderness, the entry into Canaan. But it is not a neutral historical account. It is a proclamation of God&apos;s faithfulness. Each episode in the psalm is framed by the theme: God kept His promise. He remembered His covenant. He was faithful to His word. The psalmist is saying: "Look at the record. See for yourself. God has been faithful for centuries. He will not stop being faithful now."',
    'This psalm was meant to be spoken aloud in worship, reciting the great acts of God. By rehearsing what God has done, the community reinforces its own faith and strengthens its hope. When we remember God&apos;s faithfulness in the past, we are equipped to trust it in the future.',
  ],

  sections: [
    {
      ref: 'Psalm 105:1–15',
      title: 'The Call to Remember',
      blocks: [
        {
          kind: 'scripture',
          chapter: 105,
          lines: [
            plain(1, 'O give thanks unto the Lord; call upon his name: make known his deeds among the people.'),
            plain(4, 'Seek the Lord, and his strength: seek his face evermore.'),
            plain(5, 'Remember his marvellous works that he hath done; his wonders, and the judgments of his mouth;'),
            plain(8, 'He hath remembered his covenant for ever, the word which he commanded to a thousand generations;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-105-78mid-1',
          html:
            'Invitation to praise and give thanks opens into recital of covenant and deliverance from Egypt. Song becomes story. [res:sefaria-psalm-105]',
        },
        {
          kind: 'scripture',
          chapter: 105,
          lines: [
            plain(9, 'Which covenant he made with Abraham, and his oath unto Isaac;'),
            plain(10, 'And confirmed the same unto Jacob for a law, and to Israel for an everlasting covenant:'),
            plain(11, 'Saying, Unto thee will I give the land of Canaan, the lot of your inheritance:'),
            plain(12, 'When they were but a few men in number; yea, very few, and strangers in it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps105-give-thanks',
          html:
            'The psalm opens with a call to gratitude and proclamation. "Give thanks unto the Lord; call upon his name: make known his deeds among the people." Thanksgiving is not merely for personal benefit. It is something to be proclaimed. The psalmist is saying: tell others what God has done. Let His deeds be known. This is the beginning of praise and witness.',
        },
        {
          kind: 'commentary',
          id: 'ps105-remember-works',
          html:
            'The central command is "Remember his marvellous works that he hath done." Memory is the foundation of faith. When we forget what God has accomplished, we are tempted to despair. But when we remember—when we deliberately recall His faithfulness—faith is renewed. And the psalmist directs us to specific acts: not vague inspiration but concrete history.',
        },
        {
          kind: 'hebrew',
          id: 'ps105-zachar',
          title: 'Zachar — "Remember" (Recall with Purpose)',
          script: 'זָכַר',
          translit: '<strong>Zachar</strong> · remember; recall; bring to mind for a purpose; bear witness',
          description:
            'The Hebrew word zachar means to remember, but not in the passive sense. It means to recall something for the sake of action. When God "remembers" His covenant, He acts on it. When we "remember" His works, we are meant to be moved to trust and obedience.',
        },
        {
          kind: 'commentary',
          id: 'ps105-thousand-generations',
          html:
            'The psalmist emphasizes the stability of God&apos;s covenant: "He hath remembered his covenant for ever, the word which he commanded to a thousand generations." God&apos;s word is not temporary. It is enduring, binding a thousand generations. The covenant made with Abraham, confirmed to Isaac, established with Jacob—it stands. And its promise is specific: "Unto thee will I give the land of Canaan." Even though the people are few, strangers, powerless, the promise holds.',
        },
        {
          kind: 'carry',
          html:
            'We are invited to practice the same remembrance. Take time to recall the moments when God kept His word to you. When did He provide when you were in need? When did He protect you when you were in danger? When did He guide you to something good? These moments are your personal salvation history. By remembering them, you strengthen your capacity to trust Him in the present.',
        },
        {
          kind: 'reflection',
          id: 'ps105-covenant-faithfulness',
          prompt: 'What covenant or promise has God made to you? Can you trace His faithfulness in keeping it? Where do you still wait for its fulfillment?',
        },
      ],
    },

    {
      ref: 'Psalm 105:23–45',
      title: 'From Captivity to Deliverance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 105,
          lines: [
            plain(23, 'Israel also came into Egypt; and Jacob sojourned in the land of Ham.'),
            plain(26, 'He sent Moses his servant; and Aaron whom he had chosen.'),
            plain(36, 'He smote also all the firstborn in their land, the chief of all their strength.'),
            plain(37, 'He brought them forth also with silver and gold: and there was not one feeble person among their tribes.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps105-egypt-deliverance',
          html:
            'The recital reaches Egypt — plagues, deliverance, Red Sea. The history is not nostalgia; it is the ground for trusting that the same God is still at work.',
        },
        {
          kind: 'scripture',
          chapter: 105,
          lines: [
            plain(39, 'He spread a cloud for a covering; and fire to give light in the night.'),
            plain(40, 'The people asked, and he brought quails, and satisfied them with the bread of heaven.'),
            plain(43, 'And he brought forth his people with joy, and his chosen with gladness:'),
            plain(44, 'And gave them the lands of the heathen: and they inherited the labour of the people;'),
            plain(45, 'That they might observe his statutes, and keep his laws. Praise ye the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps105-joseph-egypt',
          html:
            'The psalmist traces the journey to Egypt—Joseph sold into slavery but raised to power by God&apos;s hand. The people became slaves, but then God sent Moses. The plagues fell on Egypt—darkness, water turned to blood, locusts devouring the crops, the firstborn struck down. Each plague was a judgment against the gods of Egypt and a deliverance for God&apos;s people.',
        },
        {
          kind: 'commentary',
          id: 'ps105-brought-forth',
          html:
            'Then the deliverance: "He brought them forth also with silver and gold: and there was not one feeble person among their tribes." Not only did God free them, but He enriched them. He provided for them in the wilderness—a cloud by day, fire by night, quails and bread from heaven. And He brought them to the promised land, gave them the dwellings of others, the vineyards others had planted. All of this flowed from one source: God&apos;s faithfulness to His covenant.',
        },
        {
          kind: 'christ',
          id: 'ps105-christ-covenant',
          title: 'Christ Connection — The New Covenant Fulfilled',
          html:
            'Every covenant in the Old Testament finds its fulfillment in Christ. The covenant with Abraham promises blessing through the seed—Christ. The covenant through Moses points to Christ, the prophet like Moses. The promised land prefigures the kingdom of Christ. And Christ Himself is the final deliverance: through His sacrifice, we are freed from slavery to sin and brought into the promised inheritance of God&apos;s kingdom. Every act of God in the history remembered by this psalm is a foreshadowing of His final, decisive act in Christ. [res:bible-odyssey-psalm-105]',
        },
        {
          kind: 'carry',
          html:
            'When we understand that God has been faithful through thousands of years of history, we can trust Him with our own future. He did not abandon His people in Egypt. He did not fail them in the wilderness. He did not forget His promise to Abraham. And He will not abandon us. Our task is to remember His works, tell His story, and keep His commandments.',
        },
        {
          kind: 'reflection',
          id: 'ps105-inheritance',
          prompt: 'What has God promised you that you are still waiting to inherit? How does knowing His track record help you wait with faith rather than fear?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'O give thanks unto the Lord; call upon his name. Remember his marvellous works that he hath done.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 105 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-105',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 105 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.105',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-105',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 105 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+105',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },
  ],

  hasHebrew: true,
};
