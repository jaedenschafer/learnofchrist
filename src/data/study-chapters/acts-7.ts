import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 7 — Stephen's Sermon and Stoning
 *
 * Stephen, full of grace and power, speaks to the council with a review of
 * Israel&apos;s history—a sermon that lays bare the pattern of resistance to the
 * Holy Ghost. His face shines like an angel&apos;s. But the council grinds their
 * teeth. And in his dying moment, he sees the Son of man standing at the right
 * hand of God, and commits his spirit to Jesus, saying, "Lord, lay not this sin
 * to their charge."
 */
export const ACTS_7: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 7,

  intros: [
    'Stephen, one of seven chosen to distribute aid to widows, is arrested for speaking boldly about Jesus. Brought before the Sanhedrin, he launches into a vast review of Israel&apos;s covenant history—from Abraham through David, from the wilderness wanderings to the building of the Temple. Yet his sermon is not mere history. It is indictment. At every turn, the people have resisted the Holy Ghost and rejected those sent to them. The same pattern, he implies, now unfolds in their rejection of Jesus.',
    'When Stephen finishes, he says he sees the heavens opened and the Son of man standing on the right hand of God. This is no vision of shame or judgment. It is exaltation. Jesus stands—not seated, not distant. He stands to receive the witness of His faithful martyr. And in that moment, facing the enraged council, Stephen prays not for his own salvation, but for theirs: "Lord, lay not this sin to their charge." In his death, as in his life, he reflects the Spirit of Christ.',
  ],

  sections: [
    {
      ref: 'Acts 7:1–19',
      title: 'The God of Glory Appears to Abraham',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(2, 'And he said, Men, brethren, and fathers, hearken; The God of glory appeared unto our father Abraham, when he was in Mesopotamia, before he dwelt in Charran;'),
            plain(4, 'Then came he out of the land of the Chaldaeans, and dwelt in Charran: and from thence, when his father was dead, he removed him into this land, wherein ye now dwell:'),
            plain(5, 'And he gave him none inheritance in it, no, not so much as to set his foot on: yet he promised that he would give it to him for a possession, and to his seed after him, when as yet he had no child.'),
            plain(8, 'And he gave him the covenant of circumcision: and so Abraham begat Isaac, and circumcised him the eighth day; and Isaac begat Jacob; and Jacob begat the twelve patriarchs.'),
            plain(9, 'And the patriarchs, moved with envy, sold Joseph into Egypt: but God was with him,'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts7-god-glory',
          html: 'Stephen calls God "the God of glory"—a phrase that reaches back to the visions of the prophets, particularly Ezekiel&apos;s throne-chariot. From the very beginning, before Israel was a nation, God revealed Himself to Abraham. Yet Abraham received the promise without possessing the land—a foreshadowing of faith as trust in what is not yet seen, not in visible inheritance. The covenant marks the beginning of God&apos;s people, but they are marked by waiting, not by immediate triumph.',
        },
        {
          kind: 'greek',
          id: 'acts7-doxa',
          title: 'Doxa — Glory',
          script: 'δόξα',
          translit: '<strong>Doxa</strong> · glory; splendor; divine radiance; reputation',
          description: 'In the LXX, doxa translates the Hebrew kabod, the weighty, tangible presence of God. It is not abstract reputation, but the visible manifestation of divine power and beauty. When Stephen invokes "the God of glory," he appeals to the entire tradition of theophany—the moments when God breaks through the veil and shows Himself.',
        },
        {
          kind: 'commentary',
          id: 'acts7-joseph-envy',
          html: 'Notice: the patriarchs "moved with envy, sold Joseph into Egypt." Even the ancestors—the heroes of faith—fell into the sin of jealousy and sold one of their own into slavery. Yet God was with Joseph in his affliction. The pattern emerges: Israel resists, but God persists. The brothers meant evil, but God meant it for good.',
        },
      ],
    },

    {
      ref: 'Acts 7:35–53',
      title: 'Always Resisting the Holy Ghost',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(35, 'This Moses whom they refused, saying, Who made thee a ruler and a judge? the same did God send to be a ruler and a deliverer by the hand of the angel which appeared to him in the bush.'),
            plain(38, 'This is he, that was in the church in the wilderness with the angel which spake to him in the mount Sina, and with our fathers: who received the lively oracles to give unto us:'),
            plain(39, 'To whom our fathers would not obey, but thrust him from them, and in their hearts turned back again into Egypt,'),
            plain(51, 'Ye stiffnecked and uncircumcised in heart and ears, ye do always resist the Holy Ghost: as your fathers did, so do ye.'),
            plain(52, 'Which of the prophets have not your fathers persecuted? and they have slain them which shewed before of the coming of the Just One; of whom ye have been now the betrayers and murderers:'),
            plain(53, 'Who have received the law by the disposition of angels, and have not kept it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts7-moses-refused',
          html: 'Moses was rejected by Israel, yet God used him to deliver them. The Sanhedrin is now rejecting the Jesus whom Moses and the prophets foretold. Stephen is not merely recounting history; he is holding up a mirror. The fathers resisted; the listeners are resisting. Resistance to those sent by God is resistance to God Himself.',
        },
        {
          kind: 'greek',
          id: 'acts7-stiffneck',
          title: 'Skleros — Stiffnecked',
          script: 'σκληρός',
          translit: '<strong>Skleros</strong> · hard; stubborn; harsh; resistant to bending',
          description: 'A stiffnecked person cannot turn around. The image is of an ox that resists the yoke, an animal that will not be guided. To be stiffnecked is to be closed to the very movement the Holy Ghost seeks to initiate in the soul.',
        },
        {
          kind: 'christ',
          id: 'acts7-christ-just-one',
          title: 'Christ Connection — The Just One Betrayed and Slain',
          html: 'Stephen cites the prophets&apos; witness to "the coming of the Just One"—the righteous one, the Messiah. The fathers killed the prophets; the present generation kills the Messiah Himself. Jesus is the culmination of the pattern Stephen has laid bare. In Him, all the promises converge, and in His rejection, all of Israel&apos;s resistance to God reaches its climax. Yet even this is not final—it is the pivot point of redemption.',
        },
        {
          kind: 'carry',
          html: 'Stephen does not accuse his killers in order to condemn them, but to awaken them. He shows them the pattern because he hopes they will see themselves in it—and repent. His sermon is a final act of love, an urgent call to stop resisting the God who will not stop pursuing them.',
        },
        {
          kind: 'reflection',
          id: 'acts7-resist',
          prompt: 'Where are you tempted to resist the Holy Ghost? What patterns of closed-heartedness do you see in your own life, and how might you open yourself to God&apos;s ongoing work?',
        },
      ],
    },

    {
      ref: 'Acts 7:54–60',
      title: 'Lord, Lay Not This Sin to Their Charge',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(54, 'When they heard these things, they were cut to the heart, and they gnashed on him with their teeth.'),
            plain(55, 'But he, being full of the Holy Ghost, looked up stedfastly into heaven, and saw the glory of God, and Jesus standing on the right hand of God,'),
            plain(56, 'And said, Behold, I see the heavens opened, and the Son of man standing on the right hand of God.'),
            plain(57, 'Then they cried out with a loud voice, and stopped their ears, and ran upon him with one accord,'),
            plain(58, 'And cast him out of the city, and stoned him: and the witnesses laid down their clothes at a young man&apos;s feet, whose name was Saul.'),
            plain(59, 'And they stoned Stephen, calling upon God, and saying, Lord Jesus, receive my spirit.'),
            plain(60, 'And he kneeled down, and cried with a loud voice, Lord, lay not this sin to their charge. And when he had said this, he fell asleep.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts7-cut-heart',
          html: 'The council is "cut to the heart"—a phrase meaning conviction, the piercing realization of sin. Yet instead of repenting, they rage. They stop their ears, refusing to hear. The same Spirit that fills Stephen with joy now drives the council to murderous fury. The light blinds those who refuse to see.',
        },
        {
          kind: 'commentary',
          id: 'acts7-vision-opened',
          html: 'Stephen&apos;s vision is extraordinary: the heavens are opened, and he sees the glory of God and Jesus "standing on the right hand of God." Throughout Scripture, Jesus is described as seated at God&apos;s right hand. Here, He stands. To stand is to rise to greet someone, to receive them, to honor them. Jesus stands to welcome His first martyr.',
        },
        {
          kind: 'hebrew',
          id: 'acts7-spirit',
          title: 'Ruach — Spirit',
          script: 'רוּחַ',
          translit: '<strong>Ruach</strong> · spirit; wind; breath; divine presence',
          description: 'The Spirit is the breath of God, the living force that animates and moves the believer. Stephen is "full of the Holy Ghost"—not merely indwelt, but overflowing, saturated, empowered by the presence of God. In this fullness, he sees what the council cannot see.',
        },
        {
          kind: 'christ',
          id: 'acts7-christ-receive-spirit',
          title: 'Christ Connection — Receiving the Martyr&apos;s Spirit',
          html: 'As Stephen is stoned, he cries out: "Lord Jesus, receive my spirit." These echo the words of Jesus on the cross: "Father, into thy hands I commend my spirit." Stephen, in his death, mirrors the death of Christ. He calls on Jesus as Lord, commits his spirit to Him, and prays for forgiveness on behalf of his killers. In Stephen, the Spirit of Christ becomes visible.',
        },
        {
          kind: 'carry',
          html: 'Stephen&apos;s final prayer—"Lord, lay not this sin to their charge"—is the deepest act of forgiveness. He dies not crying out for vengeance, but for mercy on those murdering him. And nearby, a young man named Saul holds the cloaks. One day, Saul will remember. The blood of Stephen will water the soil from which the Apostle Paul grows.',
        },
        {
          kind: 'reflection',
          id: 'acts7-forgive',
          prompt: 'Can you imagine praying for forgiveness for those harming you in the moment of suffering? What does Stephen&apos;s intercession reveal about the power of love over fear?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Behold, I see the heavens opened, and the Son of man standing on the right hand of God. Lord, lay not this sin to their charge.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 7 · Study Guide',
  },

  hasHebrew: true,
};
