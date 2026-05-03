import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Daniel 6 — The Lions&apos; Den
 *
 * Darius establishes Daniel as one of three presidents over 120 princes. The other
 * princes grow envious and seek to destroy him. They convince the king to make a
 * decree: whoever prays to any god or man save the king shall be cast into the den
 * of lions. Daniel prays three times daily toward Jerusalem regardless. He is cast
 * into the den. But God shuts the lions&apos; mouths. Daniel emerges unharmed. "My God
 * hath sent his angel, and hath shut the lions&apos; mouths, that they have not hurt me."
 * Christ Connection: Christ in the grave; death itself is powerless.
 */
export const DANIEL_6: RichChapterContent = {
  bookSlug: 'daniel',
  bookName: 'Daniel',
  chapter: 6,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  intros: [
    'Darius the Mede decides to set up one hundred and twenty princes over the kingdom, and over these princes three presidents. Daniel is one of the three presidents. He is so distinguished and faithful that the king thinks to set him over the whole realm. But the other presidents and the princes are moved with envy. They seek to find occasion against Daniel, but they can find none. He is faithful. No error or fault is found in him. So they devise a plot. They come before the king and ask him to make a firm decree: whoever shall ask a petition of any God or man for thirty days, save of the king, shall be cast into the den of lions.',
    'Darius signs the writing and the decree. And Daniel, knowing that the writing is signed, goes into his house and prays three times a day toward Jerusalem, as he has done all his life. His enemies watch him pray and bring him before the king. Daniel is cast into the den of lions. But the king says to him, "Thy God whom thou servest continually, he will deliver thee."',
  ],

  sections: [
    {
      ref: 'Daniel 6:10–18',
      title: 'The Prayer and the Pit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(10, 'Now when Daniel knew that the writing was signed, he went into his house; and his windows being open in his chamber toward Jerusalem, he kneeled upon his knees three times a day, and prayed, and gave thanks before his God, as he did aforetime.'),
            plain(11, 'Then these men assembled, and found Daniel praying and making supplication before his God.'),
            plain(12, 'Then they came near, and spake before the king concerning the king&apos;s decree; Hast thou not signed a decree, that every man that shall ask a petition of any God or man within thirty days, save of thee, O king, shall be cast into the den of lions? The king answered and said, The thing is true, according to the law of the Medes and Persians, which altereth not.'),
            plain(13, 'Then answered they and said before the king, That Daniel, which is of the children of the captivity of Judah, regardeth not thee, O king, nor the decree that thou hast signed, but maketh his petition three times a day.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-lion-trust',
          html: '<p>Daniel in the den—envies plot, the king prays, and morning brings deliverance. Trust in God stands when schemes collapse.</p>[res:cyrus-cylinder]',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(14, 'Then the king, when he heard these words, was sore displeased with himself, and set his heart on Daniel to deliver him: and he laboured till the going down of the sun to deliver him out of their hands.'),
            plain(15, 'Then said these men unto the king, Know, O king, that the law of the Medes and Persians is, That no decree nor statute which the king establisheth may be changed.'),
            plain(16, 'Then the king commanded, and they brought Daniel, and cast him into the den of lions. Now the king spake and said unto Daniel, Thy God whom thou servest continually, he will deliver thee.'),
            plain(18, 'Then the king went to his palace, and passed the night fasting: and his sleep went from him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'daniel6-windows-open',
          html: 'Daniel knows the decree. He knows the penalty. He knows that his enemies are watching. And he goes home, opens his windows toward Jerusalem, and kneels to pray three times a day as he has always done. This is not defiance for its own sake. This is faithfulness that acknowledges no authority higher than God. Daniel does not hide his prayer. He does not pray secretly to avoid detection. He prays openly, as if the decree did not exist. He has decided, long before this moment, what his answer would be when the choice came between the king and God[res:sefaria-daniel][res:sefaria-daniel-6].',
        },
        {
          kind: 'hebrew',
          id: 'daniel6-palach',
          title: 'Palach — "Prayed" (Sought/Petitioned)',
          script: 'פָּלַח',
          translit: '<strong>Palach</strong> · to pray; to seek; to petition; to worship',
          description:
            'The word is simple and direct. Daniel palach—he prayed, he sought, he worshipped. Not once, but three times a day, as he had always done. This is not a sudden act of courage. This is the continuation of a lifetime habit. Character is not built in a moment. It is built through daily choices, through the small faithfulness that no one sees, that becomes the foundation when the trial comes.',
        },
        {
          kind: 'commentary',
          id: 'daniel6-darius-dismayed',
          html: 'The king is displeased with himself when he realizes what has happened. He has been trapped by his own pride, by the decree he signed without understanding its implications. He labors until sunset to deliver Daniel, but the decree of the Medes and Persians cannot be changed. The law that seemed to honor the king has become his instrument of torment. He must let Daniel be cast into the den. But notice: he speaks words of faith to Daniel. "Thy God whom thou servest continually, he will deliver thee." The king, who is not of Israel, speaks as if he already believes.',
        },
      ],
    },

    {
      ref: 'Daniel 6:19–28',
      title: 'The Mouths Shut, the Deliverance Sealed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(19, 'Then very early in the morning the king arose, and went in haste unto the den of lions.'),
            plain(20, 'And when he came to the den, he cried with a lamentable voice unto Daniel: and the king spake and said to Daniel, O Daniel, servant of the living God, is thy God, whom thou servest continually, able to deliver thee from the lions?'),
            plain(21, 'Then said Daniel unto the king, O king, live for ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-lion-trust-2',
          html: '<p>The plot unfolds: accusation, the den, angelic deliverance. God&apos;s faithfulness outlasts hatred.</p>',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(22, 'My God hath sent his angel, and hath shut the lions&apos; mouths, that they have not hurt me: forasmuch as before him innocency was found in me; and also before thee, O king, have I done no hurt.'),
            plain(23, 'Then was the king exceeding glad for him, and commanded that they should take Daniel up out of the den. So Daniel was taken up out of the den, and no manner of hurt was found upon him, because he believed in his God.'),
            plain(24, 'And the king commanded, and they brought those men which had accused Daniel, and they cast them into the den of lions, them, their children, and their wives; and the lions had the mastery of them, and brake all their bones in pieces or ever they came at the bottom of the den.'),
            plain(28, 'So this Daniel prospered in the reign of Darius, and in the reign of Cyrus the Persian.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'daniel6-angel',
          html:
            'The angel shuts the lions&apos; mouths. The lions—hungry, fierce, the king&apos;s instrument of execution—are rendered powerless. They cannot hurt Daniel because he is innocent, and because he believed in his God. This is the heart of the story: God does not remove Daniel from the danger. He does not spare him the den. He brings him through it. In the presence of death, in the very jaws of destruction, God protects him. The lions that would devour him are helpless.',
        },
        {
          kind: 'commentary',
          id: 'daniel6-victors',
          html:
            'When Daniel emerges unharmed, the king takes vengeance on those who accused him. They are cast into the den along with their wives and children. And the lions—the very same lions who could not touch Daniel—have dominion over them. They break all their bones before they even reach the bottom. This is not cruelty for its own sake. This is the reversal of plots. Those who dug a pit for Daniel find themselves in it. The accusers become the accused.',
        },
        {
          kind: 'christ',
          id: 'daniel6-christ-grave',
          title: 'Christ Connection — Death Defeated',
          html:
            'Daniel in the lions&apos; den foreshadows Christ in the grave. Death—that great devourer—that king of terrors—is rendered powerless. Christ enters death itself, descends to the grave, and death cannot hold Him. He rises on the third day, unharmed, unbound, alive. Just as the lion&apos;s mouth was shut before Daniel, so death opened its mouth before Christ and could not swallow Him. And what was meant as an instrument of execution became the instrument of victory. The grave that men thought would be Christ&apos;s end became His triumph.',
        },
        {
          kind: 'carry',
          html:
            'The story of Daniel in the den teaches that faithfulness may lead us into the very mouth of danger. It does not guarantee that we will escape the trial. But it promises that we will not be abandoned in the trial. God does not always remove us from the fire or the pit or the lion&apos;s den. But He walks with us through it. And He is faithful to those who are faithful to Him. Whether we are delivered from the trial or through it, the promise remains: "My God hath sent his angel, and hath shut the lions&apos; mouths."',
        },
        {
          kind: 'reflection',
          id: 'daniel6-belief',
          prompt: 'What fears in your life are like a den of lions—things that have the power to destroy you? How would the faith "because he believed in his God" look like in your circumstance?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'My God hath sent his angel, and hath shut the lions&apos; mouths, that they have not hurt me: forasmuch as before him innocency was found in me.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Daniel 6 · Study Guide',
  },  resources: [
    {
      id: 'cyrus-cylinder',
      kind: 'museum',
      source: 'British Museum',
      label: 'Cyrus Cylinder',
      url: 'https://www.britishmuseum.org/collection/object/Y_EA90920',
      description: 'Persian edict of Cyrus authorizing return of exiled peoples (ca. 539 BCE), fulfilling Daniel&apos;s prophecy.',
    },
    {
      id: 'sefaria-daniel',
      kind: 'study',
      source: 'Sefaria',
      label: 'Daniel',
      url: 'https://www.sefaria.org/Daniel',
      description: 'Open-source Hebrew Bible with translations and medieval commentaries.',
    },
    {
      id: 'sefaria-daniel-6',
      kind: 'study',
      source: 'Sefaria',
      label: 'Daniel 6 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Daniel.6',
      description: 'The Hebrew text of Daniel 6 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
