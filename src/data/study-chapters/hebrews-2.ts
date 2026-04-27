import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Hebrews 2 — A Little Lower Than the Angels
 *
 * Having exalted the Son, the author now explains the mystery: why did the Son
 * become human? Why did He take on mortal flesh? The answer: He became like us
 * so that He could suffer, die, and open the way for us. "We see Jesus, who was
 * made a little lower than the angels for the suffering of death, crowned with
 * glory and honour; that he by the grace of God should taste death for every man."
 * His incarnation and death are the foundation of redemption.
 */
export const HEBREWS_2: RichChapterContent = {
  bookSlug: 'hebrews',
  bookName: 'Hebrews',
  chapter: 2,

  intros: [
    'The author connects Psalm 8, which speaks of human creation and dominion, to Jesus. Humans were made a little lower than angels, crowned with glory. But that glory was lost through sin. Jesus reclaimed it—not for Himself alone, but for all who follow Him. He became incarnate, mortal, capable of suffering. For one purpose: to taste death, to break its power, and to open the way for us to follow.',
    'The passage emphasizes Christ&apos;s solidarity with us. He is not distant. He became our brother, experiencing hunger, temptation, suffering, death. He did not come as an angel who cannot truly understand human weakness. He came as one who, except for sin, was like us in every way. This is the basis of His efficacy as our High Priest.',
  ],

  sections: [
    /* ─── Hebrews 2:1–9 — We See Jesus ────────────────────────────── */
    {
      ref: 'Hebrews 2:1–9',
      title: 'We See Jesus Crowned with Glory and Honour',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(3, 'How shall we escape, if we neglect so great salvation? which at the first began to be spoken by the Lord, and was confirmed unto us by them that heard him,'),
            plain(6, 'But one in a certain place testified, saying, What is man, that thou art mindful of him? or the son of man, that thou visitest him?'),
            plain(7, 'Thou madest him a little lower than the angels; thou crownedst him with glory and honour, and didst set him over the works of thy hands:'),
            plain(8, 'Thou hast put all things in subjection under his feet. For in that he put all in subjection under him, he left nothing that is not put under him. But now we see not yet all things put under him.'),
            plain(9, 'But we see Jesus, who was made a little lower than the angels for the suffering of death, crowned with glory and honour; that he by the grace of God should taste death for every man.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb2-great-salvation',
          html:
            'The author addresses readers tempted to drift away. "How shall we escape, if we neglect so great salvation?" The gospel is not incidental information. It is the most crucial message you will ever hear. To neglect it is to turn away from rescue.',
        },
        {
          kind: 'greek',
          id: 'heb2-kopiao',
          title: 'Kopiao — Labor, Toil',
          script: 'κοπιάω',
          translit: '<strong>Kopiao</strong> · to labor; to work; to suffer exertion',
          description:
            'When the passage says Jesus "tasted death," it uses a word that suggests willingness to experience fully. Not a distant, abstract death. A real death. Jesus did not merely appear to die or symbolically die. He tasted death—experienced it completely, for every person.',
        },
        {
          kind: 'commentary',
          id: 'heb2-all-under-feet',
          html:
            'Psalm 8 describes human dominion over creation. But the author acknowledges reality: we do not yet see all things under human dominion. The glory promised was lost. But in Jesus, that dominion is being reclaimed. He is crowned with glory and honour. And those in Him are included in His triumph.',
        },
        {
          kind: 'christ',
          id: 'heb2-christ-tasted-death',
          title: 'Christ Connection — Death Conquered',
          html:
            'Jesus tasted death "by the grace of God." This is crucial. His death was not coerced. It was an act of love, freely chosen, sustained by grace. In tasting death, He did not merely experience it. He defeated it. He opened a way through death for all who follow Him.',
        },
        {
          kind: 'carry',
          html:
            'You are tempted daily to neglect this salvation. To drift. To treat it as one belief among many, or none at all. The author asks: how shall you escape if you turn away? But more: why would you want to? Christ has bought you at an infinite cost. He has crowned you with glory. He has opened the way. Hold fast.',
        },
        {
          kind: 'reflection',
          id: 'heb2-tasted-death',
          prompt: 'What does it mean that Christ "tasted death for every man"? How does His willingness to die change your understanding of His love for you?',
        },
      ],
    },

    /* ─── Hebrews 2:10–18 — He is Not Ashamed to Call Us Brethren ──── */
    {
      ref: 'Hebrews 2:10–18',
      title: 'Sanctified and Sanctifier, Both of One',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(10, 'For it became him, for whom are all things, and by whom are all things, in bringing many sons unto glory, to make the captain of their salvation perfect through sufferings.'),
            plain(11, 'For both he that sanctifieth and they who are sanctified are all of one: for which cause he is not ashamed to call them brethren,'),
            plain(14, 'Forasmuch then as the children are partakers of flesh and blood, he also himself likewise took part of the same; that through death he might destroy him that had the power of death, that is, the devil;'),
            plain(17, 'Wherefore in all things it behoved him to be made like unto his brethren, that he might be a merciful and faithful high priest in things pertaining to God, to make reconciliation for the sins of the people.'),
            plain(18, 'For in that he himself hath suffered being tempted, he is able to succour them that are tempted.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb2-captain',
          html:
            'Jesus is "the captain of their salvation." A captain goes before. He shows the way. He bears the brunt of danger. Jesus did not send others to suffer while He remained safe. He led the charge, taking on suffering Himself to open the way for us.',
        },
        {
          kind: 'greek',
          id: 'heb2-adelphos',
          title: 'Adelphos — Brother',
          script: 'ἀδελφός',
          translit: '<strong>Adelphos</strong> · brother; sibling; fellow believer',
          description:
            'Jesus calls you brother. Not servant. Not subject. Brother. This is stunning intimacy. The Son of God identifies Himself with you. He is "not ashamed" to claim kinship with you. Your relationship to Him is familial.',
        },
        {
          kind: 'commentary',
          id: 'heb2-destroy-devil',
          html:
            'Jesus took on flesh and blood "that through death he might destroy him that had the power of death, that is, the devil." Death has been weaponized by Satan. But Jesus, by dying, transformed death itself into a passage, a doorway, a defeated enemy. Those who follow Him pass through death into life.',
        },
        {
          kind: 'christ',
          id: 'heb2-merciful-high-priest',
          title: 'Christ Connection — Our Merciful High Priest',
          html:
            'Because Jesus suffered temptation, because He experienced human weakness (except sin), He became a merciful high priest. Not a distant judge. Not an impersonal mediator. But one who knows your struggle, who has faced what you face, who intercedes for you with full understanding of your condition.',
        },
        {
          kind: 'carry',
          html:
            'You are not alone in your temptation. Christ has been tempted. You are not abandoned in your suffering. Christ has suffered. You are not alien from God. Christ calls you brother and stands before the Father on your behalf. When you are tempted, He is able to help. Believe it.',
        },
        {
          kind: 'reflection',
          id: 'heb2-succour',
          prompt: 'What temptation are you facing where you need Christ&apos;s help? How does knowing He has suffered change your expectation of what He can do?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'We see Jesus, who was made a little lower than the angels for the suffering of death, crowned with glory and honour; that he by the grace of God should taste death for every man. He is not ashamed to call us brethren.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hebrews 2 · Study Guide',
  },

  hasHebrew: false,
};
