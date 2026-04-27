import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 27 — My Light and Salvation
 *
 * "The Lord is my light and my salvation; whom shall I fear?" These opening
 * words establish the theme: in God is found both illumination and deliverance.
 * The psalmist expresses singular desire: "One thing have I desired of the Lord,
 * that I may dwell in the house of the Lord all the days of my life." Even
 * when his parents forsake him, the Lord will take him up. Christ is the Light
 * of the World, the one in whom true illumination is found, and in whom the
 * faithful find their dwelling place.
 */
export const PSALMS_27: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 27,

  intros: [
    'Psalm 27 expresses the confidence of one who has encountered God&apos;s light and found in it all that is needed. Light here means understanding, revelation, the dispelling of darkness. Salvation means deliverance from enemies, yes, but more fundamentally, the establishment of a right relationship with God. The psalm moves from bold confidence to vulnerable longing: "Hear when I cry unto thee."',
  ],

  sections: [
    {
      ref: 'Psalm 27:1–6',
      title: 'Light and Salvation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            plain(1, 'The Lord is my light and my salvation; whom shall I fear? the Lord is the strength of my life; of whom shall I be afraid?'),
            plain(2, 'When the wicked, even mine enemies and my foes, came upon me to eat up my flesh, they stumbled and fell.'),
            plain(3, 'Though an host should encamp against me, my heart shall not fear: though war should rise against me, in this will I be confident.'),
            plain(4, 'One thing have I desired of the Lord, that will I seek after; that I may dwell in the house of the Lord all the days of my life, to behold the beauty of the Lord, and to inquire in his temple.'),
            plain(5, 'For in the time of trouble he shall hide me in his pavilion: in the secret of his tabernacle shall he hide me; he shall set me up upon a rock.'),
            plain(6, 'And now shall mine head be lifted up above mine enemies round about me: therefore will I offer in his tabernacle sacrifices of joy; I will sing, yea, I will sing praises unto the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms27-light-salvation',
          html: 'The opening declaration is one of the most quoted verses in Scripture: "The Lord is my light and my salvation." Light means truth, understanding, revelation. It means being able to see clearly. Salvation means deliverance, wholeness, redemption. In God, both are found. No wonder the psalmist asks, "Whom shall I fear?" When you are illuminated by God&apos;s truth and delivered by God&apos;s grace, fear loses its power.',
        },
        {
          kind: 'hebrew',
          id: 'psalms27-or',
          title: 'Or — "Light" (Illumination)',
          script: 'אוֹר',
          translit: '<strong>Or</strong> · light; illumination; understanding; God&apos;s revelation',
          description: 'The Hebrew word or is used both literally for physical light and metaphorically for understanding, truth, and divine revelation. When God is our light, we see things as they truly are. We are no longer stumbling in darkness. We understand the path. We see the threats for what they are—temporary, manageable, ultimately without power over us.',
        },
        {
          kind: 'commentary',
          id: 'psalms27-one-thing',
          html: '"One thing have I desired of the Lord, that will I seek after." This statement of singular focus is striking. Not wealth. Not power. Not long life. Not even security from enemies, though that is mentioned. The one thing desired is to dwell in the house of the Lord, to behold His beauty, to inquire in His temple. The deepest longing is for intimacy with God.',
        },
        {
          kind: 'christ',
          id: 'psalms27-christ-light',
          title: 'Christ Connection — The Light of the World',
          html: 'John 8:12 records Jesus saying, "I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life." Christ does not merely illuminate. He is illumination itself. To follow Christ is to see truly, to understand the nature of reality, to be freed from the darkness of sin and confusion. And in Him, we dwell in the Father&apos;s house.',
        },
        {
          kind: 'carry',
          html: 'The psalmist expresses the kind of confidence that comes from having found one thing worth seeking above all else: the presence of God. When your deepest desire is not to be safe or successful, but to know God and dwell in His presence, other fears diminish. You are hidden in God&apos;s pavilion, set upon a rock, lifted above your enemies.',
        },
        {
          kind: 'reflection',
          id: 'psalms27-one-desire',
          prompt: 'What is the one thing you most deeply desire? Is it security, approval, achievement—or is it, as the psalmist describes, to dwell in God&apos;s presence and behold His beauty? How might clarifying that desire change everything else?',
        },
      ],
    },

    {
      ref: 'Psalm 27:7–14',
      title: 'Waiting and Seeking',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            plain(7, 'Hear, O Lord, when I cry with my voice: have mercy also upon me, and answer me.'),
            plain(8, 'When thou saidst, Seek ye my face; my heart said unto thee, Thy face, Lord, will I seek.'),
            plain(10, 'When my father and my mother forsake me, then the Lord will take me up.'),
            plain(11, 'Teach me thy way, O Lord, and lead me in a plain path, because of mine enemies.'),
            plain(13, 'I had fainted, unless I had believed to see the goodness of the Lord in the land of the living.'),
            plain(14, 'Wait on the Lord: be of good courage, and he shall strengthen thine heart: wait, I say, on the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms27-hear-cry',
          html: 'The confidence of the opening verses is now joined by vulnerability. "Hear, O Lord, when I cry with my voice." The psalmist is not merely confident. He is also desperate. He needs God to answer. He needs God to be present. Yet this vulnerability is not weakness. It is the strength to acknowledge that we cannot do this alone.',
        },
        {
          kind: 'commentary',
          id: 'psalms27-seek-face',
          html: 'A dialogue unfolds: "When thou saidst, Seek ye my face; my heart said unto thee, Thy face, Lord, will I seek." God calls. The psalmist responds. This is the dynamic of genuine faith—not striving alone, but answering a call. God invites the seeking, and the heart readily agrees to pursue His face.',
        },
        {
          kind: 'commentary',
          id: 'psalms27-forsaken-taken',
          html: 'One of Scripture&apos;s most poignant promises: "When my father and my mother forsake me, then the Lord will take me up." Even when earthly relationships fail—and they sometimes do—God does not. His commitment is unconditional. He will take us up. He will make us His own.',
        },
        {
          kind: 'carry',
          html: 'The psalm ends with a command: "Wait on the Lord: be of good courage, and he shall strengthen thine heart." Waiting on God is not passive resignation. It is active faith, trusting that He will act, believing that His goodness will be revealed in the land of the living. Wait, and be of good courage.',
        },
        {
          kind: 'reflection',
          id: 'psalms27-wait-courage',
          prompt: 'The psalm calls you to wait on the Lord and be of good courage. What are you waiting for? What would it mean to strengthen your heart not through your own efforts, but through trusting His?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The Lord is my light and my salvation; whom shall I fear? ...One thing have I desired of the Lord, that will I seek after; that I may dwell in the house of the Lord all the days of my life.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 27 · Study Guide',
  },

  hasHebrew: true,
};
