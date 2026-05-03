import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 18 — The Rock of Our Salvation
 *
 * A long song of deliverance, paralleled in 2 Samuel 22. David declares: "I will
 * love thee, O Lord, my strength." He celebrates God as his rock, fortress,
 * deliverer. From the depths of despair and battle, David ascends into praise.
 * "The Lord is my rock, and my fortress, and my deliverer; my God, my strength, in
 * whom I will trust." Through trial and warfare, faith is tested and proven true.
 */
export const PSALMS_18: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 18,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  intros: [
    'Psalm 18 is lengthy and expansive—the longest psalm to this point. It is a song of thanksgiving for deliverance, a recounting of God&apos;s power revealed through trial. David has faced death—the cords of death have wound around him, the floods of destruction have overwhelmed him. Yet God heard his cry. God reached down from heaven and pulled him out. The psalm does not minimize the darkness or the danger. It celebrates God&apos;s power revealed precisely in the midst of them.',
    'As David recounts God&apos;s deliverance, he moves from personal testimony to cosmic witness. The earth shook. The heavens were open. Lightning and hail fell. God rode upon a cherub. The voice of God thundered. All of creation is caught up in the drama of God saving David. This is not a minor matter. This is the breaking-through of heaven into earth.',
  ],

  sections: [
    {
      ref: 'Psalm 18:1–19',
      title: 'Love and Deliverance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(1, 'I will love thee, O Lord, my strength.'),
            plain(2, 'The Lord is my rock, and my fortress, and my deliverer; my God, my strength, in whom I will trust; my buckler, and the horn of my salvation, and my high tower.'),
            plain(3, 'I will call upon the Lord, who is worthy to be praised: so shall I be saved from mine enemies.'),
            plain(4, 'The sorrows of death compassed me, and the floods of ungodly men made me afraid.'),
            plain(5, 'The sorrows of hell compassed me about: the snares of death prevented me.'),
            plain(6, 'In my distress I called upon the Lord, and cried unto my God: he heard my voice out of his temple, and my cry came before him, even into his ears.'),
            plain(7, 'Then the earth shook and trembled; the foundations also of the hills moved and were shaken, because he was wroth.'),
            plain(8, 'There went up a smoke out of his nostrils, and fire out of his mouth devoured: coals were kindled by it.'),
            plain(9, 'He bowed the heavens also, and came down: and darkness was under his feet.'),
            plain(10, 'And he rode upon a cherub, and did fly: yea, he did fly upon the wings of the wind.'),
            plain(11, 'He made darkness his secret place; his pavilion round about him were dark waters and thick clouds of the skies.'),
            plain(12, 'At the brightness that was before him his thick clouds passed, hail stones and coals of fire.'),
            plain(13, 'The Lord also thundered in the heavens, and the Highest gave his voice; hail stones and coals of fire.'),
            plain(14, 'Yea, he sent out his arrows, and scattered them; and he shot out lightnings, and discomfited them.'),
            plain(15, 'Then the channels of waters were seen, and the foundations of the world were discovered at thy rebuke, O Lord, at the blast of the breath of thy nostrils.'),
            plain(16, 'He sent from on high, he took me, he drew me out of many waters.'),
            plain(17, 'He delivered me from my strong enemy, and from them which hated me: for they were too strong for me.'),
            plain(18, 'They prevented me in the day of my calamity: but the Lord was my stay.'),
            plain(19, 'He brought me forth also into a large place; he delivered me, because he delighted in me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps18-love',
          html:
            'David opens with love: "I will love thee, O Lord, my strength." This is not theoretical love. It is rooted in power. God is his strength. God has been his power in the midst of powerlessness. This love is gratitude. This love is responsive to God&apos;s character.',
        },
        {
          kind: 'hebrew',
          id: 'ps18-tzur',
          title: 'Tzur — "Rock"',
          script: 'צוּר',
          translit: '<strong>Tzur</strong> · rock; strength; refuge; protection',
          description:
            'The rock is immobile, unmoveable, solid. When David calls God his rock, he is declaring that God cannot be shaken, cannot be overthrown. God is the one thing that will not crumble when everything else falls.',
        },
        {
          kind: 'commentary',
          id: 'ps18-fortress',
          html:
            'Then comes a cascade of names and images: fortress, deliverer, strength, buckler, horn of salvation, high tower. Each image intensifies the sense of protection and safety. David is drawing on every metaphor he can to convey the reality of God&apos;s defense.',
        },
        {
          kind: 'commentary',
          id: 'ps18-sorrows',
          html:
            'But before David reached this place of safety, he faced death. The sorrows of death compassed him. The floods of ungodly men made him afraid. The snares of death surrounded him. He calls upon the Lord in his distress, and the Lord heard him. The cry came before God, even into His ears. God heard and God acted.',
        },
        {
          kind: 'commentary',
          id: 'ps18-earth-shook',
          html:
            'When God came to deliver David, the entire cosmos responded. The earth shook and trembled. The foundations moved. This is not quiet, gentle help. This is cosmic intervention. God came in anger against those who would harm His beloved.',
        },
        {
          kind: 'commentary',
          id: 'ps18-smoke',
          html:
            'God is described in theophanic language—the language of divine appearance. Smoke issues from His nostrils. Fire comes from His mouth. He rides upon a cherub. He flies upon the wings of the wind. The imagery is of overwhelming, irresistible power. No enemy can stand against this.',
        },
        {
          kind: 'commentary',
          id: 'ps18-arrows',
          html:
            'God scatters His enemies with arrows. He shoots out lightnings. Hail stones and coals of fire fall. The channels of waters are seen—the foundations of creation are laid bare. This is the power that upholds the world, now deployed on David&apos;s behalf.',
        },
        {
          kind: 'commentary',
          id: 'ps18-drew',
          html:
            '"He sent from on high, he took me, he drew me out of many waters." After the cosmic display, the focus returns to the personal. God reached down and drew David out. His enemies were too strong, but God was stronger. He delivered David because He "delighted" in him.',
        },
        {
          kind: 'christ',
          id: 'ps18-christ-rock',
          title: 'Christ Connection — The Rock of Our Salvation',
          html:
            'Christ is the Rock who cannot be shaken. He is the Fortress into which we flee. In Him, we find deliverance from death and all that opposes us. The cosmic power David describes—the power that shakes earth and heaven—is the power that raised Jesus from the dead and seated Him at the right hand of God.',
        },
      ],
    },

    {
      ref: 'Psalm 18:20–30',
      title: 'The Righteous Delivered',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(20, 'The Lord rewarded me according to my righteousness; according to the cleanness of my hands hath he recompensed me.'),
            plain(21, 'For I have kept the ways of the Lord, and have not wickedly departed from my God.'),
            plain(22, 'For all his judgments were before me, and I did not put away his statutes from me.'),
            plain(23, 'I was also upright before him, and I kept myself from mine iniquity.'),
            plain(24, 'Therefore hath the Lord recompensed me according to my righteousness, according to the cleanness of my hands before his eyes.'),
            plain(25, 'With the merciful thou wilt shew thyself merciful; with an upright man thou wilt shew thyself upright;'),
            plain(26, 'With the pure thou wilt shew thyself pure; and with the froward thou wilt shew thyself froward.'),
            plain(27, 'For thou wilt save the afflicted people; but wilt bring down high looks.'),
            plain(28, 'For thou wilt light my candle: the Lord my God will lighten my darkness.'),
            plain(29, 'For by thee I have run through a troop; and by my God have I leaped over a wall.'),
            plain(30, 'As for God, his way is perfect: his word is pure: he is a buckler to all those that trust in him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps18-reward',
          html:
            'David claims that God has rewarded him according to his righteousness. This is a bold statement. Yet David is not claiming sinlessness. He is claiming that he has kept the ways of God, that he has not wickedly departed from Him, that he was upright before God and kept himself from iniquity. The reward is not for perfection but for integrity.',
        },
        {
          kind: 'commentary',
          id: 'ps18-merciful',
          html:
            'Then David describes how God responds to the character He finds in His people. With the merciful, God shows Himself merciful. With the upright, He shows Himself upright. With the pure, He shows Himself pure. God mirrors and magnifies the righteousness of His people. This is not transaction but relationship.',
        },
        {
          kind: 'commentary',
          id: 'ps18-save-afflicted',
          html:
            'God saves the afflicted people but brings down the proud. He lights the candle of those in darkness. He gives them power to run through troops and leap over walls. All of this flows from one source: His perfection, His pure word, His buckler to those who trust in Him.',
        },
        {
          kind: 'reflection',
          id: 'ps18-delighted',
          prompt: 'What does it mean that God "delighted" in David? How might God&apos;s delight in you change your understanding of your own worth?',
        },
        {
          kind: 'carry',
          html:
            'There is a distress you are carrying right now that you haven&apos;t named. A weight. Something that makes you feel powerless or alone. David didn&apos;t call out to God because he had figured it all out—he called out precisely because he hadn&apos;t, because the sorrows had compassed him and he was drowning. The carry is this: name it. Not to anyone else yet, just to Him, in one sentence. In my distress I called upon the Lord. He heard. And sometimes that naming, that one honest sentence, is where the deliverance begins.',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I will love thee, O Lord, my strength. The Lord is my rock, and my fortress, and my deliverer.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 18 · Study Guide',
  },

  hasHebrew: true,
};
