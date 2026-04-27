import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 12 — James Killed; Peter Freed by Angel; Herod&apos;s Judgment
 *
 * King Herod Agrippa persecutes the church, killing the apostle James with the
 * sword and imprisoning Peter. Peter sleeps between two guards, chained, awaiting
 * execution. But an angel strikes him awake, his chains fall away, and he walks
 * out of the prison as the guards sleep. Herod, unable to find Peter, executes
 * the guards instead. Later, Herod accepts glory that belongs to God alone, and
 * the Lord strikes him down with a wasting sickness.
 */
export const ACTS_12: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 12,

  intros: [
    'Herod Agrippa is a king with both Jewish authority and Roman backing. He sees the growing power of the church and determines to suppress it through violence. He kills James, son of Zebedee, with the sword. The disciples are devastated. But when Herod arrests Peter, intending to make a public spectacle of his execution, something unexpected happens: the prayers of the church are answered in a way no one could have anticipated.',
    'In prison, Peter sleeps the sleep of the condemned—unafraid, at peace. And in that night, the invisible breaks into the visible. An angel appears. Chains fall away. Doors open. And Peter walks out into the city while his guards sleep, unaware that their prisoner has vanished. The execution theater Herod has staged will be remembered not for the death of the apostle, but for the power of the living God.',
  ],

  sections: [
    {
      ref: 'Acts 12:1–19',
      title: 'The Angel and the Prison',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(3, 'And because he saw it pleased the Jews, he proceeded further to take Peter also. (Then were the days of unleavened bread.)'),
            plain(5, 'Peter therefore was kept in prison: but prayer was made without ceasing of the church unto God for him.'),
            plain(7, 'And, behold, the angel of the Lord came upon him, and a light shined in the prison: and he smote Peter on the side, and raised him up, saying, Arise up quickly. And his chains fell off from his hands.'),
            plain(9, 'And he went out, and followed him; and wist not that it was true which was done by the angel; but thought he saw a vision.'),
            plain(11, 'And when Peter was come to himself, he said, Now I know of a surety, that the Lord hath sent his angel, and hath delivered me out of the hand of Herod, and from all the expectation of the people of the Jews.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts12-prayer',
          html:
            'While Peter sits in prison awaiting execution, the church prays without ceasing. They know the law: tomorrow Peter will be executed. Yet they pray. Not for a miracle—that seems impossible with Roman guards and royal authority—but they pray anyway. The simple act of prayer in the face of an impossible situation becomes the condition for God&apos;s action.',
        },
        {
          kind: 'greek',
          id: 'acts12-akatapaustos',
          title: 'Akatapaustos — Without Ceasing',
          script: 'ἀκατάπαυστος',
          translit: '<strong>Akatapaustos</strong> · unceasing; without rest; continuous',
          description:
            'The prayer of the church is not fitful or occasional. It is unceasing—continuous, relentless, refusing to accept the inevitability of tragedy. This is prayer not as a polite petition, but as a desperate clinging to God in the face of death.',
        },
        {
          kind: 'christ',
          id: 'acts12-christ-deliverer',
          title: 'Christ Connection — The One Who Breaks Chains',
          html:
            'The angel comes from the risen Christ, sent to do what human power cannot do: break chains, open doors, deliver from death. Peter recognizes the liberation as God&apos;s action. "The Lord hath sent his angel, and hath delivered me." Jesus Christ is not a past figure in memory, but the living Lord working in the present through His angels and His Spirit.',
        },
        {
          kind: 'carry',
          html:
            'We face situations that seem impossible: the forces arrayed against us seem too great, the odds too long. The church in Peter&apos;s day prayed in exactly that darkness. And God moved. The miracle did not come because the church had enough faith or prayed the right words. It came because God is faithful to His people, and nothing—no king, no guard, no chain—can stand against His purpose.',
        },
        {
          kind: 'reflection',
          id: 'acts12-impossible',
          prompt: 'What impossible situation are you facing that feels beyond remedy? What would it mean to pray without ceasing, as the church did for Peter, even when deliverance seems impossible?',
        },
      ],
    },

    {
      ref: 'Acts 12:20–25',
      title: 'Herod&apos;s Fall',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(21, 'And upon a set day Herod, arrayed in royal apparel, sat upon his throne, and made an oration unto them.'),
            plain(22, 'And the people gave a shout, saying, It is the voice of a god, and not of a man.'),
            plain(23, 'And immediately the angel of the Lord smote him, because he gave not God the glory: and he was eaten of worms, and gave up the ghost.'),
            plain(24, 'But the word of God grew and multiplied.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts12-glory',
          html:
            'Herod sits on his throne in royal apparel and makes an oration. The people cry out in flattery: "It is the voice of a god, and not of a man." Herod does not refuse the acclamation. He accepts the worship due to God alone. In that moment, he crosses a line that even earthly power cannot cross with impunity.',
        },
        {
          kind: 'greek',
          id: 'acts12-skolex',
          title: 'Skolex — Worm',
          script: 'σκώληξ',
          translit: '<strong>Skolex</strong> · worm; maggot; decay',
          description:
            'The judgment on Herod is immediate and humiliating. He is eaten of worms—his body begins to decay while he yet lives. This is not merely punishment; it is a graphic reversal of his claim to divinity. The flesh that accepted worship decays before his eyes.',
        },
        {
          kind: 'commentary',
          id: 'acts12-word-grows',
          html:
            'In stark contrast, the verse immediately following Herod&apos;s death states: "But the word of God grew and multiplied." The king who sought to suppress the gospel has fallen. But the gospel, far from being suppressed, flourishes. No human power can stand against God&apos;s word.',
        },
        {
          kind: 'christ',
          id: 'acts12-christ-lord',
          title: 'Christ Connection — The Sovereign King',
          html:
            'Jesus Christ is the true King. All other authority serves at His pleasure. Herod accepted worship and died. But Christ&apos;s kingdom cannot be touched by human violence or earthly power. It grows precisely when earthly rulers attempt to suppress it. His is an indestructible kingdom.',
        },
        {
          kind: 'carry',
          html:
            'We live under powers that claim our loyalty and demand our submission. But no earthly authority is ultimate. Christ alone is King. This does not mean we disrespect civil authority, but we remember that every earthly throne is temporary. Our ultimate allegiance is to a kingdom that cannot be shaken.',
        },
        {
          kind: 'reflection',
          id: 'acts12-sovereignty',
          prompt: 'Where have you been giving allegiance to earthly powers—status, reputation, wealth—that Christ is calling you to relinquish? What would it mean to live as though Christ alone is King?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And the angel of the Lord smote him, because he gave not God the glory. But the word of God grew and multiplied.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 12 · Study Guide',
  },

  hasHebrew: false,
};
