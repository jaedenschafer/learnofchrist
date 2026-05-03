import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * John 10 — The Good Shepherd
 *
 * Jesus speaks in parables of the shepherd and the sheep. He claims the titles:
 * "I am the door." "I am the good shepherd: the good shepherd giveth his life for
 * the sheep." He knows His own by name. They hear His voice and follow. He lays
 * down His life, not forced, but willingly: "No man taketh it from me, but I lay it
 * down of myself." His ultimate statement: "I and my Father are one." The Jews pick
 * up stones to stone Him for blasphemy.
 */
export const JOHN_10: RichChapterContent = {
  bookSlug: 'john',
  bookName: 'John',
  chapter: 10,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  intros: [
    'Jesus speaks in parable of the sheepfold. The true shepherd enters through the door. The thief and the robber come by another way, to steal, kill, and destroy. But the shepherd enters openly, calls his own sheep by name, and the sheep hear his voice and follow. The door is for the sheep&apos;s entry; Jesus claims He Himself is the door. "I am the door: by me if any man enter in, he shall be saved, and shall go in and out, and find pasture."',
    'Then Jesus reveals Himself further: "I am the good shepherd: the good shepherd giveth his life for the sheep." The hired hand, who has no stake in the flock, flees when the wolf comes. But the good shepherd knows his own by name. He calls them, leads them, lays down his life for them—not by compulsion, but by choice. "No man taketh it from me, but I lay it down of myself." His death is not inflicted; it is offered. And in that offering lies the power of the redemption.',
  ],

  sections: [
    /* ─── John 10:1–21 — The Good Shepherd ────────────────────────────── */
    {
      ref: 'John 10:1–21',
      title: 'I Am the Good Shepherd',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(3, 'To him the porter openeth; and the sheep hear his voice: and he calleth his own sheep by name, and leadeth them out.'),
            plain(7, 'Then said Jesus unto them again, Verily, verily, I say unto you, I am the door of the sheep.'),
            plain(10, 'I am come that they might have life, and that they might have it more abundantly.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john-10-78mid-1',
          html:
            'Jesus speaks of the Good Shepherd and His sheep; He is preparing to speak of laying down His life. The shepherd knows His sheep; His sheep know His voice.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(11, 'I am the good shepherd: the good shepherd giveth his life for the sheep.'),
            plain(14, 'And I know my sheep, and am known of mine.'),
            plain(15, 'As the Father knoweth me, even so know I the Father: and I lay down my life for the sheep.'),
            plain(27, 'My sheep hear my voice, and I know them, and they follow me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john10-door',
          html:
            '"I am the door of the sheep." Jesus does not say He is the shepherd in the distant sense. He is the very doorway through which the sheep enter safety and pasture. To enter through Jesus is to find life, nourishment, and protection. He is both the access point and the sanctuary. All fullness comes through Him.',
        },
        {
          kind: 'commentary',
          id: 'john10-abundance',
          html:
            '"I am come that they might have life, and that they might have it more abundantly." Jesus does not merely preserve life. He elevates it. Abundant life means fullness, meaning, purpose, joy, connection—life as God intended it. This is not mystical escape from the world, but actual fulfillment within it.',
        },
        {
          kind: 'greek',
          id: 'john10-poimen',
          title: 'Poimen — Shepherd',
          script: 'ποιμήν',
          translit: '<strong>Poimen</strong> · shepherd; one who tends sheep; pastor',
          description:
            'The shepherd is protector, guide, and provider. He knows each sheep individually. He calls them by name. The relationship is not generic or distant. It is personal, intimate, particular. When Jesus calls Himself the good shepherd, He claims to know and care for you specifically, not as a statistic but as an individual beloved.',
        },
        {
          kind: 'commentary',
          id: 'john10-life-sheep',
          html:
            '"The good shepherd giveth his life for the sheep."[res:sefaria-psalm-23][res:sefaria-ezekiel-34][res:intertextual-shepherd] This is the distinguishing mark of goodness. Not rule from a distance, but sacrifice in proximity. The shepherd does not demand the sheep risk themselves. He risks himself. He goes first, willing to die so the sheep might live.',
        },
        {
          kind: 'commentary',
          id: 'john10-known',
          html:
            '"I know my sheep, and am known of mine." The relationship is reciprocal. Jesus knows the sheep—not just in general, but each one, with all their particularity, history, struggle. And the sheep know Him. They hear His voice and follow. This is no impersonal arrangement. It is covenant relationship, mutual recognition and love.',
        },
        {
          kind: 'christ',
          id: 'john10-christ-shepherd',
          title: 'Christ Connection — Shepherd and Sacrifice',
          html:
            'Jesus is the good shepherd who gives His life for the sheep. This is the pattern of His entire mission. He does not demand or coerce. He leads and protects. And when the wolf comes, when danger threatens, He steps between danger and the flock. His love is enacted in His willingness to die.',
        },
        {
          kind: 'carry',
          html:
            'You are known by name. Not as a member of a crowd, not as a type or category, but as an individual, particular, irreplaceable person. Jesus knows you. He calls you. He leads you to pasture and protection. Your role is to hear His voice and follow. Can you trust that you are known this intimately?',
        },
        {
          kind: 'reflection',
          id: 'john10-voice',
          prompt: 'How do you hear Jesus&apos; voice? When you follow Him, what abundance of life does He lead you toward?',
        },
      ],
    },

    /* ─── John 10:22–42 — I and My Father Are One ──────────────────────── */
    {
      ref: 'John 10:22–42',
      title: 'I and My Father Are One',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(24, 'Then came the Jews round about him, and said unto him, How long dost thou make us to doubt? If thou be the Christ, tell us plainly.'),
            plain(27, 'My sheep hear my voice, and I know them, and they follow me:'),
            plain(28, 'And I give unto them eternal life; and they shall never perish, neither shall any man pluck them out of my hand.'),
            plain(29, 'My Father, which gave them me, is greater than all; and no man is able to pluck them out of my Father&apos;s hand.'),
            plain(30, 'I and my Father are one.'),
            plain(33, 'The Jews answered him, saying, For a good work we stone thee not; but for blasphemy; and because that thou, being a man, makest thyself God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john10-plainly',
          html:
            'The Jews demand: "If thou be the Christ, tell us plainly." But Jesus has told them—through signs, parables, and explicit declarations. The problem is not lack of clarity but refusal to believe. He has already shown them clearly who He is. What more can clarity add? The issue is not information but will.',
        },
        {
          kind: 'commentary',
          id: 'john10-eternal-life',
          html:
            '"I give unto them eternal life; and they shall never perish, neither shall any man pluck them out of my hand." The gift of eternal life is not a transaction you arrange. It is a gift given by Jesus to those who are His sheep. Once given, it cannot be taken. No one—no power, no force, no circumstance—can snatch you from His hand.',
        },
        {
          kind: 'greek',
          id: 'john10-harpazo',
          title: 'Harpazo — Pluck Out / Snatch Away',
          script: 'ἁρπάζω',
          translit: '<strong>Harpazo</strong> · to snatch; to seize; to take by force',
          description:
            'To pluck out requires force, violation, a power capable of overcoming resistance. Jesus asserts that no power can do this. Once you are in His hand and His Father&apos;s hand, you are secure. The image is of absolute protection, of a grip that cannot be broken.',
        },
        {
          kind: 'commentary',
          id: 'john10-one',
          html:
            '"I and my Father are one." This statement crystallizes the claim. Jesus does not merely work with the Father or obey the Father. He and the Father are one. Their will is one. Their power is one. Their nature is one. In claiming this, Jesus claims equality with God.',
        },
        {
          kind: 'commentary',
          id: 'john10-blasphemy',
          html:
            'The Jews understand perfectly what Jesus claims. "For blasphemy; and because that thou, being a man, makest thyself God." They do not misunderstand. They understand and reject. For them, the claim is blasphemy, a violation of the Most High. They pick up stones to stone Him. The division is complete. Some recognize Him as Lord. Others see Him as a blasphemer worthy of death.',
        },
        {
          kind: 'christ',
          id: 'john10-christ-father',
          title: 'Christ Connection — Unity with the Father',
          html:
            'The foundation of everything Jesus teaches rests on this claim: His unity with the Father. He and the Father work together. They know and protect the sheep together. Their will, their purpose, their love are one. To encounter Jesus is to encounter the Father.',
        },
        {
          kind: 'carry',
          html:
            'Jesus promises that nothing can snatch you from His hand or the Father&apos;s hand. This is not earned security. It is given, covenanted, guaranteed. Your confidence rests not on your own grip but on His. When you are weak, when circumstances overwhelm, when you fear you might slip, remember: you are held in a grip that cannot be broken.',
        },
        {
          kind: 'reflection',
          id: 'john10-pluck',
          prompt: 'What feels like it might snatch you away from Jesus&apos; hand? How does His promise of eternal security in His grip transform your fear?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I am the door. I am the good shepherd: the good shepherd giveth his life for the sheep. I and my Father are one. They shall never perish, neither shall any man pluck them out of my hand.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'John 10 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-23',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 23 — The Lord is My Shepherd',
      url: 'https://www.sefaria.org/Psalms.23',
      description: 'The foundational shepherd psalm with Jewish and Christian interpretations of God&apos;s care.',
    },
    {
      id: 'sefaria-ezekiel-34',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ezekiel 34 — God as Shepherd of Israel',
      url: 'https://www.sefaria.org/Ezekiel.34',
      description: 'The prophet&apos;s vision of God as the true shepherd who gathers and cares for the scattered flock.',
    },
    {
      id: 'intertextual-shepherd',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Psalm 23 + Ezekiel 34 ↔ John 10',
      url: 'https://intertextual.bible/text/psalm-23/john-10',
      description: 'How Jesus fulfills the Old Testament image of the good shepherd.',
    },
  ],

  hasHebrew: false,
};
