import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 1 — A Nation&apos;s Rebellion and Hope of Restoration
 *
 * The book of Isaiah opens with the voice of God addressing a people in rebellion.
 * "Hear, O heavens, and give ear, O earth: for the Lord hath spoken." Israel has
 * turned from the God who raised them. Yet in the midst of judgment comes an
 * astonishing promise: "Though your sins be as scarlet, they shall be as white as snow."
 * This is the pattern of Isaiah — a people weighed down by their own choices, yet
 * offered the possibility of transformation through God&apos;s mercy.
 */
export const ISAIAH_1: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 1,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 6 },
  intros: [
    'Isaiah stands at a threshold. The prophet is called to speak to a nation that has forgotten its God. Judah offers sacrifices and keeps its appointed feasts, yet their hands are full of blood. They have not ceased their evil; they have not learned to do well. The contradiction is stark — the outward forms of religion continue while the substance has rotted away. This is not a people ignorant of God&apos;s will. This is a people who know and actively turn away.',
    'But the prophet&apos;s message is not one of despair. Woven through the judgment is an invitation: "Come now, and let us reason together, saith the Lord: though your sins be as scarlet, they shall be as white as snow." God calls His people to turn, to listen, to return. The opening chapter of Isaiah establishes both the depth of human rebellion and the depths of God&apos;s willingness to forgive and restore.',
  ],

  sections: [
    {
      ref: 'Isaiah 1:1–9',
      title: 'A Corrupt and Rebellious Nation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'The vision of Isaiah the son of Amoz, which he saw concerning Judah and Jerusalem in the days of Uzziah, Jotham, Ahaz, and Hezekiah, kings of Judah.'),
            plain(2, 'Hear, O heavens, and give ear, O earth: for the Lord hath spoken, I have nourished and brought up children, and they have rebelled against me.'),
            plain(3, 'The ox knoweth his owner, and the ass his master&apos;s crib: but Israel doth not know, my people doth not consider.'),
            plain(4, 'Ah sinful nation, a people laden with iniquity, a seed of evildoers, children that are corrupters: they have forsaken the Lord, they have provoked the Holy One of Israel unto anger, they are gone away backward.'),
            plain(5, 'Why should ye be stricken any more? ye will revolt more and more: the whole head is sick, and the whole heart faint.'),
            plain(9, 'Except the Lord of hosts had left unto us a very small remnant, we should have been as Sodom, and we should have been like unto Gomorrah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah1-vision',
          html:
            'Isaiah&apos;s prophecy begins not with his own thoughts but with a vision. He has seen what God has shown him. This claim — to have received a revelation — sets the tone for everything that follows. Isaiah does not speak from speculation or human wisdom. He speaks from a seeing, a disclosure of reality that transcends ordinary knowledge. The context is specific: the reigns of four kings of Judah. History itself becomes the stage for God&apos;s revelation.',
        },
        {
          kind: 'commentary',
          id: 'isaiah1-rebellion',
          html:
            'God speaks first to the heavens and the earth, as if to call the universe itself as a witness. Then He makes His complaint known: He has nourished and brought up children, and they have rebelled. The language is intimate — children who have turned against their father. The ox and the ass know their masters, but God&apos;s own people have refused to know Him. This is rebellion not born of ignorance but of choice.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah1-pasha',
          title: 'Pasha — "Rebelled"',
          script: 'פָּשַׁע',
          translit: '<strong>Pasha</strong> · to rebel, to transgress, to break covenant',
          description:
            'The Hebrew word pasha means more than simple disobedience. It means to rebel actively, to break covenant, to act in defiance. It appears often in Isaiah and carries the weight of willful transgression — not accident or ignorance, but deliberate turning away from what was known and promised.',
        },
        {
          kind: 'carry',
          html:
            'When God says, "I have nourished and brought up children, and they have rebelled against me," He speaks to something that echoes in every human heart. How many of us have turned away from what we know to be good? How many have chosen the comfort of our rebellion over the cost of obedience? Isaiah begins by naming this truth without excuse — rebellion is not circumstance. It is choice.',
        },
        {
          kind: 'reflection',
          id: 'isaiah1-rebellion-reflect',
          prompt: 'In what area of your life have you rebelled against what you know to be right? What would it take to stop revolting and to return?',
        },
      ],
    },

    {
      ref: 'Isaiah 1:10–20',
      title: 'Ritual Without Righteousness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(11, 'To what purpose is the multitude of your sacrifices unto me? saith the Lord: I am full of the burnt offerings of rams, and the fat of fed beasts; and I delight not in the blood of bullocks, or of lambs, or of he goats.'),
            plain(15, 'And when ye spread forth your hands, I will hide my face from you: yea, when ye make many prayers, I will not hear: your hands are full of blood.'),
            plain(16, 'Wash you, make you clean; put away the evil of your doings from before mine eyes; cease to do evil;'),
            plain(17, 'Learn to do well; seek judgment, relieve the oppressed, judge the fatherless, plead for the widow.'),
            plain(18, 'Come now, and let us reason together, saith the Lord: though your sins be as scarlet, they shall be as white as snow; though they be red like crimson, they shall be as wool.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah1-sacrifices',
          html:
            'Here is one of the sharpest rebukes in Scripture. The people continue their religious practices — their sacrifices, their solemn assemblies, their prayers. But God says He is full of these offerings. They please Him not. Why? Because they are offered by hands "full of blood," by people who have not ceased from doing evil. Ritual without righteousness becomes an insult to the God who receives it.',
        },
        {
          kind: 'commentary',
          id: 'isaiah1-call-return',
          html:
            'God&apos;s response is not condemnation alone. It is a summons to change. "Wash you, make you clean." The language is active, imperative. Repentance is not something God does to a person; it is something a person does, with God&apos;s help. "Put away the evil of your doings." "Cease to do evil." "Learn to do well." And then — the content of righteousness becomes clear: seek justice, relieve the oppressed, defend the fatherless, plead for the widow. True obedience to God is expressed in care for the vulnerable.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah1-tsedaqah',
          title: 'Tsedaqah — "Righteousness" or "Justice"',
          script: 'צְדָקָה',
          translit: '<strong>Tsedaqah</strong> · righteousness, justice, right living, charity',
          description:
            'In Hebrew thought, tsedaqah is not abstract morality. It is right action — treating others as they deserve, caring for the vulnerable, establishing justice. When God calls a people to tsedaqah, He is not calling them to feel virtuous. He is calling them to act in ways that restore and protect human dignity.',
        },
        {
          kind: 'christ',
          id: 'isaiah1-christ-scarlet',
          title: 'Christ Connection — The Crimson Stain Made White',
          html:
            'When Isaiah says, "Though your sins be as scarlet, they shall be as white as snow," he offers an image of transformation that the New Testament writers see fulfilled in Christ. In Revelation 1:5, Christ loves us and washes us from our sins in His own blood. The blood that makes us white is not our own blood or our own tears of repentance — it is the blood of One who stands entirely outside our corruption, who enters into solidarity with our guilt and bears it away. The scarlet becomes white not because we have been scrubbed clean by our own effort, but because we have been washed by the blood of the Lamb.',
        },
        {
          kind: 'reflection',
          id: 'isaiah1-ritual-reflect',
          prompt: 'When you approach God in prayer or worship, what are the "sacrifices" you offer — your time, your words, your presence? Are they expressions of a heart truly devoted to Him and to others, or are they sometimes hollow forms?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Though your sins be as scarlet, they shall be as white as snow; though they be red like crimson, they shall be as wool.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 1:18 · Study Guide',
  },

  hasHebrew: true,
};
