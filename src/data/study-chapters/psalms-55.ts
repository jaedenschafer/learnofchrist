import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const PSALMS_55: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 55,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 6 },
  intros: [
    'Psalm 55 is David&apos;s cry of anguish over the deepest kind of betrayal: betrayal by a friend. "It was not an enemy that reproached me...but it was thou, a man mine equal, my guide, and mine acquaintance." This is not the betrayal of a stranger, not even the betrayal of a rival. This is the betrayal of one who walked beside him, who was trusted, who was intimate. The wound cannot be overstated. "We took sweet counsel together," David remembers, "and walked unto the house of God in company."',
    'What makes this psalm remarkable is that David does not succumb to despair, though the anguish is real and articulate. "My heart is sore pained within me: and the terrors of death are fallen upon me. Fearfulness and trembling are come upon me, and horror hath overwhelmed me." Yet in the midst of this pain, David turns to prayer. "Cast thy burden upon the Lord; and he shall sustain thee." He invites others to join him in this surrender.',
  ],

  sections: [
    {
      ref: 'Psalm 55:1–8',
      title: 'The Anguish of Betrayal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 55,
          lines: [
            plain(1, 'Give ear to my prayer, O God; and hide not thyself from my supplication.'),
            plain(2, 'Attend unto me, and hear me: I mourn in my complaint, and make a noise;'),
            plain(3, 'Because of the voice of the enemy, because of the oppression of the wicked: for they cast iniquity upon me, and in wrath they hate me.'),
            plain(4, 'My heart is sore pained within me: and the terrors of death are fallen upon me.'),
            plain(5, 'Fearfulness and trembling are come upon me, and horror hath overwhelmed me.'),
            plain(6, 'And I said, Oh that I had wings like a dove! for then would I fly away, and be at rest.'),
            plain(7, 'Lo, then would I wander far off, and remain in the wilderness. Selah.'),
            plain(8, 'I would hasten my escape from the windy storm and tempest.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms55-sore-pained',
          html: '"My heart is sore pained within me." David&apos;s distress is physical as well as emotional. It is a pain in the heart, a deep wound. Not merely thoughts of betrayal, but a bodily ache, a visceral response to the breaking of trust.',
        },
        {
          kind: 'hebrew',
          id: 'psalms55-keev',
          title: 'Kev — "Pained"',
          script: 'כְאֵב',
          translit: '<strong>Kev</strong> · pain; hurt; sorrow',
          description: 'The Hebrew kev is the deep word for pain—not a momentary sting, but an ache that persists, that settles into the bones. It is the pain of grief, of loss, of betrayal.',
        },
        {
          kind: 'commentary',
          id: 'psalms55-wings-dove',
          html: '"Oh that I had wings like a dove! for then would I fly away, and be at rest." In the midst of pain, David fantasizes about escape. If only he could fly away like a dove, leave behind this place of betrayal, find rest in the wilderness.',
        },
        {
          kind: 'christ',
          id: 'psalms55-christ-betrayed',
          title: 'Christ Connection — Betrayed by Intimacy',
          html: 'When Christ came to His Passion, His cry was not merely about external enemies. "One of you which eateth with me shall betray me" (Mark 14:18). It was Judas, one of the Twelve, one who had walked with Him, shared meals with Him, been called friend. Christ&apos;s suffering included the suffering David knew: betrayal by one who was close.',
        },
        {
          kind: 'carry',
          html: 'The psalm teaches us that when betrayed by a friend, our pain is real and valid. We need not minimize it or pretend to be unmoved. David names his fear, his pain, his desire to escape. Yet even in naming these things, he does not lose his faith.',
        },
        {
          kind: 'reflection',
          id: 'psalms55-betrayed-friend',
          prompt: 'Have you been betrayed by someone close to you? How did you respond? How might you, like David, turn your pain into prayer?',
        },
      ],
    },

    {
      ref: 'Psalm 55:9–15',
      title: 'The Traitor Exposed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 55,
          lines: [
            plain(9, 'Destroy, O Lord, and divide their tongues: for I have seen violence and strife in the city.'),
            plain(10, 'Day and night they go about it upon the walls thereof: mischief also and sorrow are in the midst of it.'),
            plain(12, 'For it was not an enemy that reproached me; then I could have borne it: neither was it he that hated me that magnified himself against me; then I would have hid myself from him;'),
            plain(13, 'But it was thou, a man mine equal, my guide, and mine acquaintance.'),
            plain(14, 'We took sweet counsel together, and walked unto the house of God in company.'),
            plain(15, 'Let death seize upon them, and let them go down quick into the pit: for wickedness is in their dwellings, and among them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms55-equal-guide',
          html: 'David reaches the heart of his pain. "It was thou, a man mine equal, my guide, and mine acquaintance." Not an external enemy—an intimate. Someone of equal standing, someone he trusted as a guide, someone he knew deeply. The shared spiritual intimacy makes the betrayal unbearable.',
        },
        {
          kind: 'commentary',
          id: 'psalms55-destroy-divide',
          html: '"Destroy, O Lord, and divide their tongues: for I have seen violence and strife in the city." David calls upon God to judge the traitors, to confuse their speech. Violence and strife fill the city—the betrayal has not been a private matter, but has infected the whole body politic.',
        },
        {
          kind: 'carry',
          html: 'Psalm 55 acknowledges that the pain of betrayal by a friend cuts deeper than any other wound. Yet even here, David does not take vengeance into his own hands. He calls upon God to judge. He names the pain, he expresses his anguish, and then he releases it to God&apos;s justice.',
        },
        {
          kind: 'reflection',
          id: 'psalms55-sweet-counsel',
          prompt: 'How do you rebuild trust after profound betrayal? What does it mean to continue walking toward God&apos;s house even when someone you trusted no longer walks with you?',
        },
      ],
    },

    {
      ref: 'Psalm 55:16–23',
      title: 'Cast Your Burden on the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 55,
          lines: [
            plain(16, 'As for me, I will call upon God; and the Lord shall save me.'),
            plain(17, 'Evening, and morning, and at noon, will I pray, and cry aloud: and he shall hear my voice.'),
            plain(22, 'Cast thy burden upon the Lord, and he shall sustain thee: he shall never suffer the righteous to be moved.'),
            plain(23, 'But thou, O God, shalt bring them down into the pit of destruction: bloody and deceitful men shall not live out half their days; but I will trust in thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms55-call-upon-god',
          html: 'David turns his focus from the betrayal to God. "As for me, I will call upon God; and the Lord shall save me." He does not depend on his own strength or his own justice. He depends on God&apos;s deliverance.',
        },
        {
          kind: 'commentary',
          id: 'psalms55-cast-burden',
          html: '"Cast thy burden upon the Lord, and he shall sustain thee." This is the healing word. The burden—the weight of betrayal, the ache of loss, the anger and the shame—can be placed upon God. Not hidden away, not swallowed in silence, but cast upon the Lord. He will sustain.',
        },
        {
          kind: 'commentary',
          id: 'psalms55-pit-destruction',
          html: 'And finally: "Thou, O God, shalt bring them down into the pit of destruction." God will judge the betrayers. "But I will trust in thee." Trust, even in the face of betrayal. Trust in God alone.',
        },
        {
          kind: 'carry',
          html: 'Psalm 55 culminates in the invitation to cast all burdens upon the Lord. This is not resignation. This is the active choice to stop bearing burdens that were never ours to bear, and instead to place them in hands far stronger, far more just, far more loving than our own.',
        },
        {
          kind: 'reflection',
          id: 'psalms55-cast-burden',
          prompt: 'What burden related to betrayal or hurt are you still carrying alone? What would it mean to truly cast it upon the Lord?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Cast thy burden upon the Lord, and he shall sustain thee: he shall never suffer the righteous to be moved.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 55 · Study Guide',
  },

  hasHebrew: true,
};
