import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 10 — Why Standest Thou Afar Off?
 *
 * The psalm opens with an anguished question: "Why standest thou afar off, O Lord?
 * why hidest thou thyself in times of trouble?" David describes the wicked in
 * brutal detail—they prey on the helpless, boast in their evil, oppress the poor.
 * Yet the psalm concludes with an answer: God sees. God remembers. "The Lord is
 * King for ever and ever." His silence is not abandonment. It is the pause before
 * vindication.
 */
export const PSALMS_10: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 10,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  intros: [
    'Psalm 10 grapples with the silence of God. Why does God hide His face? Why does He seem distant precisely when His help is needed most? The psalm does not begin with theological explanation but with the raw cry of someone in need. It then describes in brutal detail the behavior of the wicked—their cruelty toward the poor, their arrogance, their assumption that God does not see. Yet the psalm does not end in despair. It ends in affirmation: God sees. God judges. God is King.',
    'This is a psalm for those times when faith falters because God seems far away. It validates the question without leaving the questioner in doubt. God&apos;s hiddenness is real. But it is not permanent. It is not indifference. It is the setting before the sunrise.',
  ],

  sections: [
    {
      ref: 'Psalm 10:1–7',
      title: 'The Silence of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(1, 'Why standest thou afar off, O Lord? why hidest thou thyself in times of trouble?'),
            plain(2, 'The wicked in his pride doth persecute the poor: let them be taken in the devices that they have imagined.'),
            plain(3, 'For the wicked boasteth of his heart&apos;s desire, and blesseth the covetous, whom the Lord abhorreth.'),
            plain(4, 'The wicked, through the pride of his countenance, will not seek after God: God is not in all his thoughts.'),
            plain(5, 'His ways are always grievous; thy judgments are far from before him: as for all his enemies, he puffeth at them.'),
            plain(6, 'He saith in his heart, I shall not be moved: for I shall never be in adversity.'),
            plain(7, 'His mouth is full of cursing and deceit and fraud: under his tongue is mischief and vanity.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps10-why',
          html:
            'The psalm opens not with praise but with a question that cuts to the heart: "Why standest thou afar off?" David asks God directly why He seems distant in times of trouble. This is not the questioning of an unbeliever. This is the cry of someone who expects God to be near and cannot understand His apparent absence. It is the prayer of faith confronting its own doubt.',
        },
        {
          kind: 'commentary',
          id: 'ps10-wicked',
          html:
            'In the wicked, David describes a person consumed with pride. This person persecutes the poor. He boasts of his desires. He blesses the covetous—he celebrates and affirms evil. His own countenance—his face, his pride—keeps him from seeking God. God is not in all his thoughts. This is not a person struggling with temptation. This is a person who has made evil his normal orientation.',
        },
        {
          kind: 'hebrew',
          id: 'ps10-reshang',
          title: 'Rasha — "Wicked"',
          script: 'רָשָׁע',
          translit: '<strong>Rasha</strong> · wicked; guilty; criminal',
          description:
            'The wicked (rasha) is not merely someone who sins occasionally. He is someone whose nature has become criminal, who does not merely do evil but is evil. His ways have become grievous—established patterns of harm.',
        },
        {
          kind: 'commentary',
          id: 'ps10-mouth',
          html:
            'His mouth is full of curses, deceit, fraud. His tongue carries mischief and vanity. The corruption is not hidden. It spills out in every word. Yet he continues unchecked. This is what troubles David. Where is the God who judges? Why is this man not struck down?',
        },
        {
          kind: 'carry',
          html:
            'When you witness injustice and oppression continuing unabated, when the wicked prosper and the righteous suffer, the temptation is to think that God does not care or that God is not watching. The first half of this psalm validates that anger and confusion. But it does not leave you there.',
        },
      ],
    },

    {
      ref: 'Psalm 10:8–18',
      title: 'God Sees and Judges',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(8, 'He sitteth in the lurking places of the villages: in the secret places doth he murder the innocent: his eyes are privily set against the poor.'),
            plain(9, 'He lieth in wait secretly as a lion in his den: he lieth in wait to catch the poor: he catcheth the poor, when he draweth him into his net.'),
            plain(10, 'He croucheth, and humbleth himself, that the poor may fall by his strong ones.'),
            plain(11, 'He hath said in his heart, God hath forgotten: he hideth his face; he will never see it.'),
            plain(12, 'Arise, O Lord; O God, lift up thine hand: forget not the humble.'),
            plain(13, 'Wherefore doth the wicked contemn God? he hath said in his heart, Thou wilt not require it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps10-mid-seen',
          html:
            'The wicked believes God has forgotten and will not act. But now the camera swings to God. The psalmist does not defend himself. He calls on God to respond. The moment of silence ends. God&apos;s eyes open.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(14, 'Thou hast seen it: for thou beholdest mischief and spite, to requite it with thy hand: the poor committeth himself unto thee; thou art the helper of the fatherless.'),
            plain(15, 'Break thou the arm of the wicked and the evil man: seek out his wickedness till thou find none.'),
            plain(16, 'The Lord is King for ever and ever: the heathen are perished out of his land.'),
            plain(17, 'Lord, thou hast heard the desire of the humble: thou wilt prepare their heart, thou wilt cause thine ear to hearken;'),
            plain(18, 'To judge the fatherless and the oppressed, that the man of the earth may no more oppress.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps10-lurking',
          html:
            'David now describes the wicked man&apos;s method. He lurks in villages, in secret places, murdering the innocent with his eyes "privily set against the poor." He does not attack openly but hides and waits like a lion for his prey. His entire being is oriented toward predation.',
        },
        {
          kind: 'commentary',
          id: 'ps10-forgotten',
          html:
            'And here is the cruelest assumption: "God hath forgotten: he hideth his face; he will never see it." The wicked man believes what David has questioned. He believes God is absent. He believes God does not see his crimes. He believes he can prey on the poor with impunity because God is not watching. This belief is the foundation of his evil.',
        },
        {
          kind: 'commentary',
          id: 'ps10-arise',
          html:
            'Then David cries out: "Arise, O Lord." Not with the confidence of certainty but with the urgency of desperation. The wicked thinks God sleeps. David demands that God awake. He asks God not to forget the humble. He reminds God of those who have no one else to turn to.',
        },
        {
          kind: 'christ',
          id: 'ps10-christ-helper',
          title: 'Christ Connection — God&apos;s Apparent Silence',
          html:
            'Christ knew what it was to feel God&apos;s apparent distance. "My God, my God, why hast thou forsaken me?" He cried out from the cross. Yet in that darkest moment, He was precisely where God willed Him to be—accomplishing redemption through the deepest descent. His silence was not absence. It was the backdrop against which resurrection would blaze.',
        },
        {
          kind: 'commentary',
          id: 'ps10-beholdest',
          html:
            'But the psalm answers the question of God&apos;s hiddenness: "Thou hast seen it." God sees. God sees mischief and spite. God beholds evil. And God will require it with His hand. The poor can commit themselves to God because God has already seen them. The fatherless have a helper in God because God has already beheld their need.',
        },
        {
          kind: 'commentary',
          id: 'ps10-king',
          html:
            'The final three verses shift from petition to proclamation. "The Lord is King for ever and ever." This is the answer to God&apos;s silence. God is King. This kingship is not conditional on what we see or feel. It is eternal. And His kingship means the heathen—those who are not subject to His rule—will be perished out of His land. Evil has a shelf life.',
        },
        {
          kind: 'reflection',
          id: 'ps10-hideth',
          prompt: 'When you cry out to God and feel His silence, how do you hold onto the truth that He sees even what He seems to overlook? What difference does it make to know that God sees, even if He does not yet act?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The Lord is King for ever and ever: the heathen are perished out of his land.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 10 · Study Guide',
  },

  hasHebrew: true,
};
