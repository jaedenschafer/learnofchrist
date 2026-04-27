import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 17 — Berea; Paul on Mars Hill
 *
 * Paul travels through Thessalonica and Berea, preaching in the synagogues.
 * In Berea, the Jews are more noble-minded; they receive the word and search
 * the scriptures daily. Later, in Athens, Paul encounters Greek philosophers on
 * Mars Hill. They mock his preaching of resurrection. Paul addresses them with
 * eloquence, speaking of the unknown God and the judgment to come. Some mock,
 * but some believe—including Dionysius the Areopagite.
 */
export const ACTS_17: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 17,

  intros: [
    'In Berea, Paul finds believers of a different character. When he preaches, the Berean Jews receive the word with readiness and search the scriptures daily to see whether these things are so. They do not accept Paul&apos;s teaching on authority alone; they verify it against Scripture. This is the pattern of noble-minded faith: eagerness to hear, tempered by diligence to test.',
    'In Athens, the center of Greek wisdom and philosophy, Paul walks among temples to countless gods and is troubled. The philosophers mock him for preaching Jesus and resurrection, concepts foreign to their worldview. Paul stands on Mars Hill and addresses them, speaking of the "unknown God" they worship in ignorance. His sermon reaches toward them with the same truth: God has made all nations from one blood, and all must give account on the day of judgment.',
  ],

  sections: [
    {
      ref: 'Acts 17:1–15',
      title: 'The Berean Search',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(11, 'These were more noble than those in Thessalonica, in that they received the word with all readiness of mind, and searched the scriptures daily, whether those things were so.'),
            plain(12, 'Therefore many of them believed; also of the honourable women which were Greeks, and of the men, not a few.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts17-noble-minded',
          html:
            'The Berean Jews are described as "more noble." What makes them noble is their combination of openness and discernment. They receive Paul&apos;s message with gladness, yet they do not rest in his authority. They search the scriptures daily. Faith and reason, emotion and intellect, are held together.',
        },
        {
          kind: 'greek',
          id: 'acts17-eugenes',
          title: 'Eugenes — Noble; Well-born',
          script: 'εὐγενής',
          translit: '<strong>Eugenes</strong> · noble; well-born; of good character; discerning',
          description:
            'The Bereans are "eugenes"—noble not because of birth or status, but because of their character. They embody a kind of wisdom that is open to new truth yet grounded in Scripture. They do not swallow teaching uncritically, but neither do they reject it reflexively.',
        },
        {
          kind: 'christ',
          id: 'acts17-christ-testified',
          title: 'Christ Connection — Verified by Scripture',
          html:
            'Paul&apos;s gospel is not a new invention. It is testified to by the scriptures the Bereans know. When the scriptures are searched, Jesus is found throughout them—in the promises, the types, the prophecies. The Berean model shows us: faith that is not afraid of the text, but welcomes the scrutiny of Scripture.',
        },
        {
          kind: 'carry',
          html:
            'Be like the Bereans. Do not simply accept what you are told because an authority says it. Do not reject it out of skepticism. Search the scriptures yourself. Test the teaching against the word of God. This is not doubt; it is diligence. It is faith that trusts God enough to let His word speak.',
        },
        {
          kind: 'reflection',
          id: 'acts17-search',
          prompt: 'What beliefs do you hold without having examined them against Scripture? What would it mean to be more noble-minded—open yet discerning, eager yet careful?',
        },
      ],
    },

    {
      ref: 'Acts 17:22–34',
      title: 'Paul on Mars Hill',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(23, 'For as I passed by, and beheld your devotions, I found an altar with this inscription, TO THE UNKNOWN GOD. Whom therefore ye ignorantly worship, him declare I unto you.'),
            plain(24, 'God that made the world and all things therein, seeing that he is Lord of heaven and earth, dwelleth not in temples made with hands;'),
            plain(26, 'And hath made of one blood all nations of men for to dwell on all the face of the earth, and hath determined the times before appointed, and the bounds of their habitation;'),
            plain(30, 'And the times of this ignorance God winked at; but now commandeth all men every where to repent:'),
            plain(31, 'Because he hath appointed a day, in the which he will judge the world in righteousness by that man whom he hath ordained; whereof he hath given assurance unto all men, in that he hath raised him from the dead.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts17-unknown-god',
          html:
            'Paul is clever. He finds an altar "TO THE UNKNOWN GOD" and uses it as a bridge. The Athenians worship this unknown god out of fear they might offend some god they do not know. Paul announces: that god is the one true God, the creator of heaven and earth. Their ignorance is about to become clarity.',
        },
        {
          kind: 'greek',
          id: 'acts17-paroikeo',
          title: 'Paroikeo — Dwell Among',
          script: 'παροικέω',
          translit: '<strong>Paroikeo</strong> · to dwell among; to live as a stranger; to be dispersed',
          description:
            'Paul speaks of God&apos;s dwelling. The Greeks imagined gods living in temples made by human hands. But the true God does not "dwell" in such structures. He is not contained or domesticated. Yet He does "dwell among" His people—not by limitation, but by covenant and grace.',
        },
        {
          kind: 'christ',
          id: 'acts17-christ-judge',
          title: 'Christ Connection — The Judge Appointed',
          html:
            'Paul speaks of a man appointed by God to judge the world, one whom God has raised from the dead. To the Greek philosophers, this is foolishness. But Paul is uncompromising. Christ is the center of God&apos;s purpose for all humanity. All nations, all times, all judgment flow through Him.',
        },
        {
          kind: 'carry',
          html:
            'We may not worship an unknown god, but we worship gods of our own making—status, comfort, pleasure. Paul invites the Athenians to see that their ignorance is about to become inexcusable. God has revealed Himself fully in Christ. The times of ignorance are over. Repentance is the call to all.',
        },
        {
          kind: 'reflection',
          id: 'acts17-gods',
          prompt: 'What unknown gods are you worshipping—idols you have not named? How might Paul&apos;s call to repentance reach toward you on your own Mars Hill?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'TO THE UNKNOWN GOD. Whom therefore ye ignorantly worship, him declare I unto you. God that made the world and all things therein, seeing that he is Lord of heaven and earth.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 17 · Study Guide',
  },

  hasHebrew: false,
};
