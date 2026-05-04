import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Mark 5 — The Power to Heal and Raise
 *
 * A demon-possessed man, so violent that no one could bind him, encounters Jesus
 * and is healed. A woman who has suffered twelve years with an issue of blood
 * touches Jesus&apos; garment in faith and is healed. Jairus, a ruler of the
 * synagogue, comes begging Jesus to raise his daughter. On the way, Jesus and
 * His disciples encounter a woman at a well. She touches His garment. He turns
 * and says: "Daughter, thy faith hath made thee whole." Then they arrive at
 * Jairus&apos; house to find the child dead. Jesus takes her hand: "Talitha cumi"
 * (Little girl, arise). She rises. Three miracles of healing and restoration. The
 * power of Christ extends to the utterly broken, the ritually unclean, the dead
 * itself.
 */
export const MARK_5: RichChapterContent = {
  bookSlug: 'mark',
  bookName: 'Mark',
  chapter: 5,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  opener: {
    matchTitle: /My Name is Legion/i,
    caption: 'Mark 5',
  },
  intros: [
    'Mark 5 unfolds a symphony of healings. Jesus and His disciples cross the sea and arrive in the region of the Gerasenes. A man possessed with a demon meets them. He is so violently afflicted that no one can bind him, even with chains. He has been driven into the tombs, the dwellings of the dead. But when he sees Jesus, he runs to Him. Jesus casts out the demons, and the man is restored to his right mind. The power of Christ reaches even into the most desperate torment.',
    'As Jesus returns, a woman who has suffered for twelve years with a hemorrhage—unclean under Jewish law, cut off from the community—touches the edge of His garment in desperate faith. Immediately she is healed. Jesus turns, seeking her out, and speaks words of affirmation: "Daughter, thy faith hath made thee whole; go in peace, and be whole of thy plague." Then comes the final act: Jairus, a synagogue ruler, falls at Jesus&apos; feet begging Him to heal his daughter. On the way, the woman with the issue of blood interrupts. But Jesus presses on to Jairus&apos; house. The child is dead. Jesus takes her hand: "Talitha cumi"—Little girl, arise. She rises. The kingdom of Christ reaches into death itself.',
  ],

  sections: [
    /* ─── Mark 5:1–20 — The Demoniac Healed ──────────────────────────── */
    {
      ref: 'Mark 5:1–20',
      title: 'From Bondage to Wholeness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(2, 'And when he was come out of the ship, immediately there met him out of the tombs a man with an unclean spirit,'),
            plain(3, 'Who had his dwelling among the tombs; and no man could bind him, no, not with chains:'),
            plain(5, 'And always, night and day, he was in the mountains, and in the tombs, crying, and cutting himself with stones.'),
            plain(6, 'But when he saw Jesus afar off, he ran and worshipped him,'),
            plain(8, 'For he said unto him, Come out of the man, thou unclean spirit.'),
            plain(15, 'And they come to Jesus, and see him that was possessed with the devil, and had the legion, sitting, and clothed, and in his right mind: and they were afraid.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark5-demon-possessed',
          html:
            'The man is possessed with an unclean spirit[res:bible-odyssey-demon-possession]. He dwells among the tombs—the place of the dead, associated with defilement and separation from the community. He is so violent that no one dares approach. Night and day he cries out and cuts himself. This is not mere mental illness. It is bondage, spiritual possession, a life completely fragmented and enslaved.',
        },
        {
          kind: 'commentary',
          id: 'mark5-demon-recognizes',
          html:
            'When the man sees Jesus, he runs to Him and falls down before Him. Then Jesus asks his name. "My name is Legion: for we are many." A legion was a Roman military unit of several thousand soldiers. The man is possessed by a multitude of demons. Yet when he sees Jesus, even while possessed, he recognizes Jesus as one with power over him. The demons beg not to be cast into the abyss but to enter a herd of swine. Jesus permits it. The swine rush over a cliff and are drowned.',
        },
        {
          kind: 'greek',
          id: 'mark5-daimonia',
          title: 'Daimonia — Demons, Unclean Spirits',
          script: 'δαιμόνια',
          translit: '<strong>Daimonia</strong> · demons; unclean spirits; forces of spiritual bondage',
          description:
            'In the New Testament, demons are understood as spiritual forces that enslave and torment. They are not mere superstition or psychological phenomena. They are real spiritual entities that oppose God&apos;s kingdom. Their presence corrupts, fragments, and defiles.',
        },
        {
          kind: 'commentary',
          id: 'mark5-restored',
          html:
            'After the demons are cast out, the townspeople find the man "sitting, and clothed, and in his right mind." He is no longer violent or self-destructive. He is coherent, calm, restored to rationality and human dignity. This is what healing means—not merely the absence of symptoms, but the restoration of a person to wholeness, to their true self.',
        },
        {
          kind: 'christ',
          id: 'mark5-christ-authority',
          title: 'Christ Connection — Authority Over Darkness',
          html:
            'The casting out of Legion demonstrates that the kingdom of God is not merely a message but a power. It is the power of God breaking into the world and overthrowing the forces that enslave and torment human beings. Christ has authority over the spiritual forces of wickedness. In Him, the captives are set free.',
        },
        {
          kind: 'carry',
          html:
            'The demoniac is restored to his community and becomes a witness to what Jesus has done. He is sent to tell his people the great things the Lord has done for him. Healing always has a communal dimension—we are healed not just for our own sake, but to become witnesses to God&apos;s mercy.',
        },
        {
          kind: 'reflection',
          id: 'mark5-bondage-free',
          prompt: 'In what ways might you be held captive by forces that fragment your peace and joy? What would wholeness look like for you?',
        },
      ],
    },

    /* ─── Mark 5:21–43 — The Woman and the Child ────────────────────── */
    {
      ref: 'Mark 5:21–43',
      title: 'Faith and Touch',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(25, 'And a certain woman, which had an issue of blood twelve years,'),
            plain(26, 'And had suffered many things of many physicians, and had spent all that she had, and was nothing bettered, but rather grew worse,'),
            plain(27, 'When she had heard of Jesus, came in the crowd behind, and touched his garment.'),
            plain(28, 'For she said, If I may touch but his clothes, I shall be whole.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark-5-woman-bleeding',
          html:
            'Twelve years. Twelve years of bleeding. She touches His garment in secret, thinking no one will know. The bleeding stops. But Jesus asks: who touched Me? Her secret becomes her salvation. Shame becomes story.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(29, 'And straightway the fountain of her blood was dried up; and she felt in her body that she was healed of that plague.'),
            plain(34, 'And he said unto her, Daughter, thy faith hath made thee whole; go in peace, and be whole of thy plague.'),
            plain(39, 'When he was come in, he saith unto them, Why make ye this ado, and weep? the damsel is not dead, but sleepeth.'),
            plain(41, 'And he took the damsel by the hand, and said unto her, Talitha cumi; which is, being interpreted, Damsel, I say unto thee, arise.'),
            plain(42, 'And straightway the damsel arose, and walked; for she was of the age of twelve years. And they were astonished with a great astonishment.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark5-woman-issue',
          html:
            'A woman has suffered from hemorrhage for twelve years. In the Jewish law[res:sefaria-hemorrhage-purity], a woman with such an affliction is unclean, cut off from worship and community. She has spent all her money on physicians and only grown worse. She has heard of Jesus and comes in the crowd, hoping just to touch His garment. "If I may touch but his clothes, I shall be whole." This is faith—not mere intellectual belief, but a desperate, reaching-out trust that healing is possible through contact with Jesus.',
        },
        {
          kind: 'commentary',
          id: 'mark5-woman-whole',
          html:
            'She touches the edge of His garment. Immediately the issue of blood is dried up. She feels in her body that she is healed. Jesus immediately perceives that power has gone out of Him. He turns in the crowd and asks: "Who touched my clothes?" The disciples are puzzled—there are crowds all around. But Jesus knows something different has happened. He finds the woman, trembling, and speaks to her: "Daughter, thy faith hath made thee whole; go in peace, and be whole of thy plague." He affirms her faith and her wholeness.',
        },
        {
          kind: 'greek',
          id: 'mark5-dynamis',
          title: 'Dynamis — Power, Strength',
          script: 'δύναμις',
          translit: '<strong>Dynamis</strong> · power; strength; mighty deed; transformation',
          description:
            'Jesus feels that "dynamis had gone out of him"—his power, his transformative strength. The touch of faith draws this power out. It is not manipulative or coercive, but responsive. Faith opens the channel through which God&apos;s healing flows.',
        },
        {
          kind: 'commentary',
          id: 'mark5-jairus-daughter',
          html:
            'While Jesus is still speaking to the woman, messengers arrive from Jairus&apos; house: the child is dead. Why trouble the teacher further? But Jesus tells Jairus: "Be not afraid, only believe." They arrive at the house to find mourning and weeping. Jesus enters with Peter, James, and John. He takes the child by the hand and speaks words in Aramaic: "Talitha cumi"[res:intertextual-death-rising]—Little girl, arise. The child immediately rises and walks. She is restored not only to life but to health and motion.',
        },
        {
          kind: 'christ',
          id: 'mark5-christ-life',
          title: 'Christ Connection — Authority Over Death',
          html:
            'The raising of Jairus&apos; daughter demonstrates that Christ&apos;s power extends beyond sickness into death itself. He does not merely heal. He raises. Death is not the final barrier to His authority. In Him, the boundaries between life and death are not abolished but crossed. Eternal life is not a distant promise but a present reality breaking through.',
        },
        {
          kind: 'carry',
          html:
            'The woman&apos;s faith operates in the midst of desperation and social shame. She is willing to reach out for healing even though the law considers her unclean. Jairus&apos; faith operates in the face of loss and hopelessness. The child is dead. What hope remains? Yet faith persists. These are the faiths that move Jesus—not intellectual assent, but desperate, reaching-out trust.',
        },
        {
          kind: 'reflection',
          id: 'mark5-touch-faith',
          prompt: 'What desperate faith are you being called to live out? Where do you need to reach out and touch the edge of Jesus&apos; garment?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Daughter, thy faith hath made thee whole; go in peace, and be whole of thy plague. Talitha cumi; which is, being interpreted, Damsel, I say unto thee, arise.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Mark 5 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-hemorrhage-purity',
      kind: 'study',
      source: 'Sefaria',
      label: 'Leviticus 15: Laws of Impurity',
      url: 'https://www.sefaria.org/Leviticus.15.25-28?lang=bi',
      description: 'Torah texts defining the twelve-year hemorrhage as rendering the woman ritually unclean and separated from community.',
    },
    {
      id: 'intertextual-death-rising',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Ezekiel 37 ↔ Mark 5:41 (Resurrection)',
      url: 'https://intertextual.bible/search?q=Ezekiel+37+Mark+5+41',
      description: 'Intertextual link connecting Jesus&apos; raising of Jairus&apos; daughter to OT resurrection passages.',
    },
  ],

  hasHebrew: false,
};
