import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const PSALMS_64: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 64,

  estimatedMinutes: { 5: 1, 10: 3, 15: 5 },
  intros: [
    'Psalm 64 is David&apos;s prayer when his enemies plot in secret against him. "Hear my voice, O God, in my prayer: preserve my life from fear of the enemy. Hide me from the secret counsel of the wicked, from the insurrection of the workers of iniquity." The wicked gather in darkness, plotting in whispers, scheming David&apos;s downfall without the light of day, without accountability.',
    'Yet David places his trust not in uncovering their plots or exposing their schemes, but in God&apos;s ability to judge and vindicate. "But God shall shoot at them with an arrow; suddenly shall they be wounded." God will act. God will see what the wicked do in darkness. And God will judge with perfect justice. The final words belong not to the conspirators, but to the righteous who trust in God.',
  ],

  sections: [
    {
      ref: 'Psalm 64:1–6',
      title: 'The Secret Counsel of the Wicked',
      blocks: [
        {
          kind: 'scripture',
          chapter: 64,
          lines: [
            plain(1, 'Hear my voice, O God, in my prayer: preserve my life from fear of the enemy.'),
            plain(2, 'Hide me from the secret counsel of the wicked, from the insurrection of the workers of iniquity;'),
            plain(3, 'Who whet their tongue like a sword, and bend their bows to shoot their arrows, even bitter words:'),
            plain(4, 'That they may shoot in secret at the perfect: suddenly do they shoot at him, and fear not.'),
            plain(5, 'They encourage themselves in an evil matter: they commune of laying snares privily: they say, Who shall see them?'),
            plain(6, 'They search out iniquities; they accomplish a diligent search: both the inward thought of every one of them, and the heart, is deep.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms64-fear-enemy',
          html: 'David opens with a plea: "preserve my life from fear of the enemy." He asks not merely for protection from the enemy, but for protection from the fear of the enemy. Fear can paralyze. Fear can destroy faith. David asks God to guard his heart against fear.',
        },
        {
          kind: 'hebrew',
          id: 'psalms64-sod',
          title: 'Sod — "Secret Counsel"',
          script: 'סוֹד',
          translit: '<strong>Sod</strong> · secret; counsel; intimate gathering',
          description: 'The Hebrew sod refers to secret counsel, to the gathering of conspirators in darkness, to the intimate plans of the wicked. David asks God to hide him from what is hidden from the world.',
        },
        {
          kind: 'commentary',
          id: 'psalms64-tongue-sword',
          html: '"Who whet their tongue like a sword, and bend their bows to shoot their arrows, even bitter words." The wicked sharpen their tongues as weapons. Their words are bitter arrows, shot in secret against their target.',
        },
        {
          kind: 'commentary',
          id: 'psalms64-who-shall-see',
          html: '"They encourage themselves in an evil matter...they say, Who shall see them?" The conspirators think themselves hidden, unknown. They believe no one will discover their plots. They do not reckon that God sees all things.',
        },
        {
          kind: 'christ',
          id: 'psalms64-christ-judge',
          title: 'Christ Connection — The Judge of Hearts',
          html: 'Hebrews 4:12 speaks of God&apos;s word as "quick, and powerful, and sharper than any twoedged sword, piercing even to the dividing asunder of soul and spirit, and of the joints and marrow, and is a discerner of the thoughts and intents of the heart." Christ is the ultimate judge of the inward things. No secret counsel is hidden from Him.',
        },
        {
          kind: 'carry',
          html: 'Psalm 64 teaches that when we are attacked by those who plot in secret, we need not fear. God sees. God knows. God will judge. Our task is not to uncover their schemes, but to trust God&apos;s justice.',
        },
        {
          kind: 'reflection',
          id: 'psalms64-secret-counsel',
          prompt: 'Have you been hurt by those who plotted against you in secret? How does it help to remember that God sees all, even what is hidden from the world?',
        },
      ],
    },

    {
      ref: 'Psalm 64:7–10',
      title: 'God&apos;s Arrow of Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 64,
          lines: [
            plain(7, 'But God shall shoot at them with an arrow; suddenly shall they be wounded.'),
            plain(8, 'So they shall make their own tongue to fall upon themselves: all that see them shall flee away.'),
            plain(9, 'And all men shall fear, and shall declare the work of God; for they shall wisely consider his doing.'),
            plain(10, 'The righteous shall be glad in the Lord, and shall trust in him; and all the upright in heart shall glory.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms64-god-arrow',
          html: '"But God shall shoot at them with an arrow; suddenly shall they be wounded." Just as the wicked sharp their tongue as arrows to shoot in secret, God will shoot at them with His arrow. Suddenly, their schemes will be exposed. Their own plotting will bring them down.',
        },
        {
          kind: 'commentary',
          id: 'psalms64-tongue-fall',
          html: '"So they shall make their own tongue to fall upon themselves." Their weapon becomes their destruction. The bitter words they spoke against others now condemn themselves. They reap what they have sown.',
        },
        {
          kind: 'commentary',
          id: 'psalms64-declare-work',
          html: '"And all men shall fear, and shall declare the work of God; for they shall wisely consider his doing." When God&apos;s judgment is revealed, all who witness it will see God&apos;s righteousness. They will understand His ways. They will fear and honor Him.',
        },
        {
          kind: 'commentary',
          id: 'psalms64-righteous-glad',
          html: '"The righteous shall be glad in the Lord, and shall trust in him; and all the upright in heart shall glory." The righteous, who have suffered from the plots of the wicked, now see God&apos;s vindication. They rejoice. Their faith is confirmed. They glory in the righteousness of God.',
        },
        {
          kind: 'carry',
          html: 'Psalm 64 assures us that God&apos;s justice is certain and perfect. The wicked who plot in secret will find their schemes exposed and themselves judged. The righteous who trust in God will see His vindication and will rejoice in His righteousness.',
        },
        {
          kind: 'reflection',
          id: 'psalms64-glad-trust',
          prompt: 'When you witness God&apos;s judgment on wickedness, what does that do to your faith and trust in Him?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'But God shall shoot at them with an arrow; suddenly shall they be wounded.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 64 · Study Guide',
  },

  hasHebrew: true,
};
