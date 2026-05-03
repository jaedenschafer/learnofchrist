import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 50 — The Servant's Obedience and Suffering
 *
 * The third Servant Song deepens the theology of the Servant\'s mission.
 * The Servant remains obedient to God\'s word even when facing opposition and
 * suffering. "I gave my back to the smiters, and my cheeks to them that plucked
 * off the hair: I hid not my face from shame and spitting." This is the Servant
 * submitting to rejection and bodily humiliation in perfect faith.
 */
export const ISAIAH_50: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 50,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  intros: [
    'Isaiah 50 reveals the Servant\'s willingness to suffer. His obedience is not theoretical or comfortable. It costs Him everything. Yet even in the midst of shame and spitting, the Servant does not hide His face. He will not be ashamed. His trust is in the Lord. The chapter opens with God defending Himself against the accusation that He has abandoned His people—He has not sold them, but they have sold themselves. The Servant\'s suffering is not arbitrary punishment, but a free choice to bear what others deserve.',
  ],

  sections: [
    {
      ref: 'Isaiah 50:1–3',
      title: 'God\'s Faithfulness, the People\'s Apostasy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 50,
          lines: [
            plain(1, 'Thus saith the Lord, Where is the bill of your mother\'s divorcement, whom I have put away? or which of my creditors is it to whom I have sold you? Behold, for your iniquities have ye sold yourselves, and for your transgressions is your mother put away.'),
            plain(2, 'Wherefore, when I came, was there no man? when I called, was there none to answer? Is my hand shortened at all, that it cannot redeem? or have I no power to deliver? behold, at my rebuke I dry up the sea, I make the rivers a wilderness: their fish stinketh, because there is no water, and dieth for thirst.'),
            plain(3, 'I clothe the heavens with blackness, and I make sackcloth their covering.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa50-faithfulness',
          html:
            'God asks the people: Where is the bill of your mother\'s divorcement? Have I abandoned you? No. Has some creditor bought you from Me? No. You have sold yourselves through your iniquities. God has not cast you off, but you have turned away from Him. The Lord then demonstrates His power: at His rebuke, the seas dry up. He commands the heavens to wear mourning clothes. His power is undiminished. If He seems absent, it is not because He has lost His strength, but because the people have severed their connection to Him.',
        },
        {
          kind: 'carry',
          html:
            'It is easy to blame God for distance, for silence, for unanswered prayer. But Isaiah pushes us to ask: Have we sold ourselves to iniquity? Have we turned away? The cry "God, where are you?" often needs to be answered first with honest self-examination: "Where have I placed my allegiance?"',
        },
      ],
    },

    {
      ref: 'Isaiah 50:4–9',
      title: 'The Servant\'s Obedience unto Suffering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 50,
          lines: [
            plain(4, 'The Lord God hath given me the tongue of the learned, that I should know how to speak a word in season to him that is weary: he wakeneth morning by morning, he wakeneth mine ear to hear as the learned.'),
            plain(5, 'The Lord God hath opened mine ear: and I was not rebellious, neither turned away back.'),
            plain(6, 'I gave my back to the smiters, and my cheeks to them that plucked off the hair: I hid not my face from shame and spitting.'),
            plain(7, 'For the Lord God will help me; therefore shall I not be confounded: therefore have I set my face like a flint, and I know that I shall not be ashamed.'),
            plain(8, 'He is near that justifieth me; who will contend with me? let us stand together: who is mine adversary? let him come near to me.'),
            plain(9, 'Behold, the Lord God will help me; who is he that shall condemn me? lo, they all shall wax old as a garment; and the moth shall eat them up.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa50-tongue',
          html:
            'The Servant is given the tongue of the learned—the ability to speak God\'s word with authority and comfort. He wakes each morning to listen and learn from the Lord. His obedience is not passive. It is active, alive, daily. He opens his ear and does not rebel. He does not turn away back. This is the Servant\'s fundamental choice: to follow God\'s word no matter the cost.',
        },
        {
          kind: 'commentary',
          id: 'isa50-suffering',
          html:
            'And the cost is severe. The Servant gives His back to those who strike Him. His cheeks to those who pluck out His beard. He does not hide His face from shame and spitting. This is graphic, humiliating suffering. Yet the Servant accepts it freely because His trust is in the Lord. He sets His face like a flint—hard, unmovable, determined. He knows He will not be ashamed because the Lord God is His justifier.',
        },
        {
          kind: 'hebrew',
          id: 'isa50-panav',
          title: 'Panav — "His Face"',
          script: 'פָנָיו',
          translit: '<strong>Panav</strong> · his face; his presence; his person',
          description:
            'The Hebrew word panav refers not merely to facial features, but to the person\'s presence, dignity, honor. To hide one\'s face is to withdraw in shame. The Servant does not hide His face. He presents Himself fully to the shame and spitting, not in cowardice, but in the confidence that God will vindicate Him.',
        },
        {
          kind: 'christ',
          id: 'isa50-christ-passion',
          title: 'Christ Connection — The Passion of Christ',
          html:
            'The words of Isaiah 50:6 are echoed in the Gospel accounts of Jesus\' passion. He was struck, His beard plucked, He was spat upon and mocked. He did not hide His face. He submitted to this humiliation willingly, in obedience to the Father\'s will. Yet like the Servant in Isaiah, He was not ashamed, for He knew the Father God would vindicate Him through the resurrection. The Servant\'s trust and obedience—even unto death—become the pattern and power of Christ\'s redemptive work.',
        },
        {
          kind: 'carry',
          html:
            'The Servant teaches a costly obedience. It is not obedience that demands comfort or vindication before submission. It is obedience that says: "The Lord God will help me, therefore shall I not be confounded." This is the faith that trusts God\'s justice even when the world spits and strikes.',
        },
        {
          kind: 'reflection',
          id: 'isa50-obedience',
          prompt: 'What does the Servant\'s willingness to suffer while remaining faithful teach you about the nature of true obedience? When have you had to obey despite shame or opposition?',
        },
      ],
    },

    {
      ref: 'Isaiah 50:10–11',
      title: 'The Choice Before Us',
      blocks: [
        {
          kind: 'scripture',
          chapter: 50,
          lines: [
            plain(10, 'Who is among you that feareth the Lord, that obeyeth the voice of his servant, that walketh in darkness, and hath no light? let him trust in the name of the Lord, and stay upon his God.'),
            plain(11, 'Behold, all ye that kindle a fire, that compass yourselves about with sparks: walk in the light of your fire, and in the sparks that ye have kindled. This shall ye have of mine hand; ye shall lie down in sorrow.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa50-fear',
          html:
            'The chapter ends with a call to trust. Who fears the Lord and obeys His Servant\'s voice? Such a one may walk in darkness with no light of his own. But let him trust in the name of the Lord. His confidence is not in what he can see, but in who God is. By contrast, those who kindle their own fire, who provide their own light by their own effort, will lie down in sorrow. They have refused the Servant\'s light and trusted instead in their own.',
        },
        {
          kind: 'carry',
          html:
            'This is the choice Isaiah places before us: Will we trust in the Lord\'s Servant and walk by faith in darkness? Or will we kindle our own fire, trust in our own light, and reap only sorrow? The Servant\'s suffering is redemptive—it opens the way for us to trust Him fully.',
        },
        {
          kind: 'reflection',
          id: 'isa50-light',
          prompt: 'Do you tend to kindle your own fire—to create your own sense of security and light—rather than trusting in the Servant\'s light? What would change if you fully entrusted yourself to God\'s guidance?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I gave my back to the smiters, and my cheeks to them that plucked off the hair: I hid not my face from shame and spitting.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 50 · Study Guide',
  },

  hasHebrew: true,
};
