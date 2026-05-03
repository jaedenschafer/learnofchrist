import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 41 — The Betrayer
 *
 * "Blessed is he that considereth the poor." But then the bitter turn: "Yea,
 * mine own familiar friend, in whom I trusted, which did eat of my bread,
 * hath lifted up his heel against me." John 13:18 applies this directly to
 * Judas—the one who ate bread with Jesus, then betrayed Him. The pain of
 * betrayal by the closest friend. Yet Christ&apos;s betrayal is redemptive.
 */
export const PSALMS_41: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 41,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  intros: [
    'Psalm 41 opens with a promise: Blessed is he that considereth the poor. The man who has compassion on the weak shall be preserved in times of trouble. God will sustain him. Yet the psalm does not remain in the realm of abstract virtue. It turns sharply to the personal. "Yea, mine own familiar friend, in whom I trusted, which did eat of my bread, hath lifted up his heel against me." The betrayal is intimate. It is not from an enemy, but from someone David loved, someone he shared bread with, someone who was part of his inner circle. The sting of the psalm comes from this proximity.',
    'For Christian readers, these words belong unmistakably to Christ in the Upper Room. Jesus, having washed the disciples&apos; feet and shared the Passover meal with them, says to the eleven who remain: "One of you shall betray me." That betrayer is Judas, who has eaten bread with Jesus, and whose name will live forever connected to treachery. Yet in Christ&apos;s betrayal lies redemption. The wound becomes the means of healing.',
  ],

  sections: [
    {
      ref: 'Psalm 41:1–9',
      title: 'Compassion and Betrayal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 41,
          lines: [
            plain(1, 'Blessed is he that considereth the poor: the Lord will deliver him in time of trouble.'),
            plain(2, 'The Lord will preserve him, and keep him alive; and he shall be blessed upon the earth: and thou wilt not deliver him unto the will of his enemies.'),
            plain(3, 'The Lord will strengthen him upon the bed of languishing: thou wilt make all his bed in his sickness.'),
            plain(4, 'I said, Lord, have mercy upon me: heal my soul; for I have sinned against thee.'),
            plain(5, 'Mine enemies speak evil of me, When shall he die, and his name perish?'),
            plain(6, 'And if he come to see me, he speaketh vanity: his heart gathereth iniquity to itself; when he goeth away, he telleth it abroad.'),
            plain(9, 'Yea, mine own familiar friend, in whom I trusted, which did eat of my bread, hath lifted up his heel against me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms41-considereth',
          html:
            'The psalm begins with a beatitude: Blessed is he that considereth the poor. To consider the poor is to see them, to think about them, to take their condition seriously. The one who does this shall be delivered in time of trouble. This is not because charity earns reward, but because a heart that is open to others&apos; suffering is a heart that knows how to turn toward God. It is not hardened by self-interest.',
        },
        {
          kind: 'hebrew',
          id: 'psalms41-dal',
          title: 'Dal — "Poor"',
          script: 'דַל',
          translit: '<strong>Dal</strong> · poor; weak; insignificant; brought low',
          description:
            'Dal does not refer only to material poverty. It describes the state of being brought low, made weak, set aside. To consider the dal is to consider those whom the world overlooks, those without power or protection. To care for them is to align oneself with God&apos;s heart.',
        },
        {
          kind: 'commentary',
          id: 'psalms41-sickness',
          html:
            'David describes illness—lying on a bed of languishing, his sickness turning his bed itself into a kind of bed of torture. He appeals to God for mercy and healing, confessing: "I have sinned against thee." His illness is bound to his moral condition. He needs healing not only for his body but for his soul—the core of his being.',
        },
        {
          kind: 'commentary',
          id: 'psalms41-enemies-speak',
          html:
            'While David lies sick, his enemies do not stay silent. They ask: "When shall he die, and his name perish?" They speak evil of him. Even worse, they come as if with concern. They speak vanity, but "his heart gathereth iniquity to itself." Even in their visits of false concern, they are gathering ammunition against him. And when they leave, they spread what they have learned. The sick man is vulnerable. His enemies use his weakness against him.',
        },
        {
          kind: 'commentary',
          id: 'psalms41-familiar-friend',
          html:
            'Then comes the deepest wound: "Yea, mine own familiar friend, in whom I trusted, which did eat of my bread, hath lifted up his heel against me." The word "familiar" (qere) means intimate, well-known. This is not a stranger. This is someone David trusted. Someone he shared bread with—an act of covenant intimacy. And this one has "lifted up his heel"—an expression of contempt, rejection, turning away.',
        },
        {
          kind: 'reflection',
          id: 'psalms41-familiar',
          prompt: 'Betrayal by someone distant is painful. But betrayal by someone close cuts deeper. Have you experienced betrayal by someone you trusted? How did you move beyond the initial wound?',
        },
      ],
    },

    {
      ref: 'Psalm 41:10–13',
      title: 'Vindication and Redemption',
      blocks: [
        {
          kind: 'scripture',
          chapter: 41,
          lines: [
            plain(10, 'But thou, O Lord, have mercy upon me, and raise me up, that I may requite them.'),
            plain(11, 'By this I know that thou favourest me, because mine enemy hath not triumphed over me.'),
            plain(12, 'And as for me, thou upholdest me in mine integrity, and settest me before thy face for ever.'),
            plain(13, 'Blessed be the Lord God of Israel from everlasting, and to everlasting. Amen, and Amen.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms41-raise-up',
          html:
            'In the midst of betrayal and sickness, David appeals to God. "But thou, O Lord, have mercy upon me, and raise me up." Note the shift. The enemies will come and go, will speak and retreat, but God remains. And God will raise him up. This is not a request for revenge against the betrayer, but for restoration to the psalmist himself.',
        },
        {
          kind: 'hebrew',
          id: 'psalms41-hesed',
          title: 'Hesed — "Mercy" / "Lovingkindness"',
          script: 'חֶסֶד',
          translit: '<strong>Hesed</strong> · mercy; lovingkindness; faithful covenant love',
          description:
            'Again the word hesed—covenant mercy. David is not asking God to punish the betrayer. He is asking God to remember the covenant, to show lovingkindness despite the betrayal, to restore despite the wound. This is grace working in the midst of genuine hurt.',
        },
        {
          kind: 'commentary',
          id: 'psalms41-integrity',
          html:
            'The sign of God&apos;s favor is not the absence of enemies or betrayers. It is that the psalmist is upheld "in his integrity." He is not destroyed by the betrayal. He is not turned bitter or cynical. He maintains his wholeness, his ability to trust, his openness to God. This is a victory of spirit over circumstance.',
        },
        {
          kind: 'commentary',
          id: 'psalms41-face',
          html:
            'God will set him "before thy face for ever." To stand before God&apos;s face is to be known, to be seen, to be accepted. The betrayer may turn away, may lift up his heel. But the righteous man is brought continually before God&apos;s face. His name will be remembered. His integrity will be vindicated.',
        },
        {
          kind: 'christ',
          id: 'psalms41-christ-betrayed',
          title: 'Christ Connection — Judas and Redemption',
          html:
            'In John 13:18, Jesus quotes Psalm 41:9 directly: "He that eateth bread with me hath lifted up his heel against me." He is speaking of Judas. Yet Christ&apos;s betrayal is not the final word. His suffering at Judas&apos;s hand—His arrest, trial, crucifixion—becomes the means of redemption for all. Christ&apos;s integrity is not destroyed by betrayal; it is fulfilled through it. He does not call for vengeance against Judas. He goes to the cross. And in His resurrection, He is lifted before God&apos;s face forever, vindicated not by the destruction of His enemies, but by the redemption of the world.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 41 honors the deep pain of betrayal while insisting that the betrayed can be restored. The familiar friend may turn away, may lift up his heel. But you are not defined by what they do. You are defined by your integrity, your turning toward God, your willingness to be upheld even in the midst of being hurt. And when your heart is set toward God, no betrayal—however intimate, however painful—can separate you from His care. You can be raised up. You can be vindicated. You can stand before His face forever.',
        },
        {
          kind: 'reflection',
          id: 'psalms41-before-face',
          prompt: 'Can you imagine standing before God&apos;s face—fully known, fully seen, fully loved—even after betrayal has wounded you? What would it take for you to release the need for revenge and accept instead the restoration God offers?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Yea, mine own familiar friend, in whom I trusted, which did eat of my bread, hath lifted up his heel against me.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 41 · Study Guide',
  },

  hasHebrew: true,
};
