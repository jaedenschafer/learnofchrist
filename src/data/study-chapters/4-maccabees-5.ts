import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const FOURTH_MACCABEES_5: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 5,
  intros: [
    'Eleazar is old, honored, learned in the law. He is brought before Antiochus. The king offers him a way out: eat the forbidden meat, and all will be forgiven.',
    'To the onlookers, it seems an easy choice. But Eleazar sees what they do not: that the price of survival might be the loss of the self.',
  ],
  sections: [
    {
      ref: '4 Maccabees 5:1–12',
      title: 'Eleazar\'s Refusal',
      blocks: [
        { kind: 'scripture', chapter: 5, lines: [
          plain(1, 'Now Eleazar was brought forth, a man of great age and knowledge in the law.'),
          plain(4, 'And the king said unto him, Old man, if thou wilt eat of this flesh, I shall set thee free, and thou shalt want for nothing.'),
          plain(8, 'But Eleazar said unto the king, Thou mayest take my life, but thou canst not take my righteousness from me.'),
        ] },
        { kind: 'commentary', id: 'mac4-5-eleazar', html: 'Eleazar is not defiant but clear-eyed. He understands: if he betrays his conscience now, he betrays it forever. To survive at that price is not survival.' },
        { kind: 'hebrew', id: 'mac4-5-zakken', title: 'Zakken — Elder; One Full of Years and Wisdom', script: 'זָקֵן', translit: '<strong>Zakken</strong> · elder; one filled with years and wisdom', description: 'An elder\'s greatest possession is not life but the integrity earned through years of faithfulness. To lose it is to lose everything.' },
        { kind: 'christ', id: 'mac4-5-christ', title: 'Christ Connection — The Rich Young Ruler', html: 'A young man asks Jesus how to have eternal life. Jesus calls him to sell all and follow. The man walks away, unable to surrender what he holds dear.' },
        { kind: 'carry', html: 'What would you need to lose to keep your soul? What compromise seem small but would reshape who you are?' },
        { kind: 'reflection', id: 'mac4-5-righteousness', prompt: 'Eleazar says Antiochus "canst not take my righteousness." Is righteousness something that can be protected? Or does surrendering it mean losing it?' },
      ],
    },
    {
      ref: '4 Maccabees 5:13–38',
      title: 'The Example Set',
      blocks: [
        { kind: 'scripture', chapter: 5, lines: [
          plain(13, 'And Eleazar said further, I am old, and my days are nearly spent. But I shall not turn aside from the truth that I have kept all my life.'),
          plain(20, 'For it is a shame for me to become, by transgression, a teacher of impiety to the young.'),
          plain(34, 'Thus did the old man show unto all that reason, enlightened by piety, can overcome all appetites.'),
        ] },
        { kind: 'commentary', id: 'mac4-5-example', html: 'Eleazar\'s refusal is not for himself alone; it is for the young who watch. He becomes a living sermon about fidelity. His silence under torture will speak louder than any words.' },
        { kind: 'greek', id: 'mac4-5-logos', title: 'Logos — Word; Reason; Divine Speech', script: 'λόγος', translit: '<strong>Logos</strong> · word; reason; the principle of truth', description: 'Eleazar embodies logos—not the word spoken, but the truth lived. His life becomes a word to others.' },
        { kind: 'christ', id: 'mac4-5-christ2', title: 'Christ Connection — The Silent Witness', html: 'Jesus says nothing before His accusers. Yet His silence—His refusal to save Himself—becomes the most powerful testimony.' },
        { kind: 'carry', html: 'What will your steadfastness teach those watching you? Who will see your refusal to compromise?' },
        { kind: 'reflection', id: 'mac4-5-teacher', prompt: 'Eleazar feared becoming "a teacher of impiety." What do your choices teach? What kind of teacher are you?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'The king said: "Old man, eat this flesh and I shall set thee free." Eleazar answered: "Thou mayest take my life, but thou canst not take my righteousness from me."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 5 · Study Guide',
  },
};
