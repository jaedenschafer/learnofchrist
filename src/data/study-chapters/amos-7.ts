import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const AMOS_7: RichChapterContent = {
  bookSlug: 'amos',
  bookName: 'Amos',
  chapter: 7,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 4 },
  intros: [
    'Amos 7 contains a series of visions showing God\'s judgment on Israel. Locusts, fire, and finally a plumbline. Each vision shows the approaching judgment, yet the plumbline is the most significant. God is setting a plumbline in the midst of His people to measure them.',
    'The plumbline is a standard — a measure of straightness, of truth. Israel will be measured against God\'s standard and found wanting. Christ is revealed in the New Testament as this plumbline — the standard by which all things are measured.',
  ],

  bottomShare: {
    label: 'Share Amos 7',
    quote:
      '"Amos, I will set a plumbline in the midst of my people Israel." God measures His people against the standard of His holiness.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Amos 7 · Study Guide',
  },

  sections: [
    {
      ref: 'Amos 7:1–9',
      title: 'The Visions of Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(1, 'Thus hath the Lord God shewed unto me; and, behold, he formed grasshoppers in the beginning of the shooting up of the latter growth; and, lo, it was the latter growth after the king\'s mowings.'),
            plain(2, 'And it came to pass, that when they had made an end of eating the grass of the land, then I said, O Lord God, forgive, I beseech thee: by whom shall Jacob arise? for he is small.'),
            plain(3, 'The Lord repented for this: It shall not be, saith the Lord.'),
            plain(4, 'Thus hath the Lord God shewed unto me: and, behold, the Lord God called to contend by fire, and it devoured the great deep, and did eat up a part.'),
            plain(5, 'Then said I, O Lord God, cease, I beseech thee: by whom shall Jacob arise? for he is small.'),
            plain(6, 'The Lord repented for this: This also shall not be, saith the Lord God.'),
            plain(7, 'Thus he shewed me: and, behold, the Lord stood upon a wall made by a plumbline, with a plumbline in his hand.'),
            {
              number: 8,
              spans: [
                t('And the Lord said unto me, Amos, what seest thou? And I said, A plumbline. Then said the Lord, Behold, I will set a '),
                hp('plumbline in the midst of my people Israel', 'amos7-plumbline'),
                t(': I will not again pass by them any more:'),
              ],
            },
            plain(9, 'And the high places of Isaac shall be desolate, and the sanctuaries of Israel shall be laid waste; and I will rise against the house of Jeroboam with the sword.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'amos7-plumbline',
          html:
            'The plumbline is God\'s standard. It measures what is straight and true. Israel will be measured against this standard. Not just in her external actions but in her very foundation. She will be found out of alignment with God\'s truth. The high places will be desolate. The sanctuaries will be laid waste.',
        },
        {
          kind: 'carry',
          html:
            'God first shows Amos grasshoppers and fire, and Amos intercedes — "O Lord God, forgive, I beseech thee." God relents. But when the plumbline is shown, there is no relenting. This is final judgment. The question is: how are you measured against God\'s plumbline? Are you straight or crooked?',
        },
        {
          kind: 'christ',
          id: 'amos7-christ',
          title: 'Christ Connection — The Plumbline of Holiness',
          html:
            'The plumbline measures what is straight and true. Israel fails the test. Yet Christ is revealed in the New Testament as the plumbline made flesh. Paul calls Him "the image of the invisible God" (Col. 1:15) — the perfect measure of what straightness looks like. And when you stand before that plumbline, you are measured not by your own works but by His. "As many as received him, to them gave he power to become the sons of God" (John 1:12). The plumbline that condemns is also the plumbline that can reshape you, making you straight, making you true.',
        },
        {
          kind: 'reflection',
          id: 'amos7-plumbline-reflection',
          prompt: 'God sets a plumbline in the midst of His people to measure them. How do you measure up against God&apos;s standard? Where are you out of alignment?',
        },
      ],
    },

    {
      ref: 'Amos 7:10–17',
      title: 'The Prophet\'s Witness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(10, 'Then Amaziah the priest of Bethel sent to Jeroboam king of Israel, saying, Amos hath conspired against thee in the midst of the house of Israel: the land is not able to bear all his words.'),
            plain(11, 'For thus Amos saith, Jeroboam shall die by the sword, and Israel shall surely be led away captive out of their own land.'),
            plain(12, 'Also Amaziah said unto Amos, O thou seer, go, flee thee away into the land of Judah, and there eat bread, and prophesy there:'),
            plain(13, 'But prophesy not again any more at Bethel: for it is the king\'s chapel, and it is the king\'s court.'),
            plain(14, 'Then answered Amos, and said to Amaziah, I was no prophet, neither was I a prophet\'s son; but I was an herdman, and a gatherer of sycomore fruit:'),
            plain(15, 'And the Lord took me as I followed the flock, and the Lord said unto me, Go, prophesy unto my people Israel.'),
            plain(16, 'Now therefore hear thou the word of the Lord: Thou sayest, Prophesy not against Israel, and drop not thy word against the house of Isaac.'),
            plain(17, 'Therefore thus saith the Lord; Thy wife shall be an harlot in the city, and thy sons and thy daughters shall fall by the sword, and thy land shall be divided by line; and thou shalt die in a polluted land: and Israel shall surely go into captivity out of their land.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'amos7-witness',
          html:
            'Amaziah tries to silence Amos. But Amos is not a professional prophet with an agenda. He is a shepherd called by God. He cannot help but prophesy. His witness stands. And the judgment he pronounces will come upon those who try to silence him.',
        },
        {
          kind: 'carry',
          html:
            'When God calls you to speak truth, you cannot be silenced by the powerful or the comfortable. Amos was a shepherd, not educated in the schools of the prophets. Yet his word carries weight because it is God\'s word. What truth is God calling you to speak? Are you willing to stand despite opposition?',
        },
        {
          kind: 'reflection',
          id: 'amos7-witness-reflection',
          prompt: 'Amos could not help but prophesy even when opposed. What is God calling you to do despite potential opposition? How will you remain faithful?',
        },
      ],
    },

    {
      ref: 'Amos 7 · All',
      title: 'The Standard of Truth',
      blocks: [
        {
          kind: 'commentary',
          id: 'amos7-theme',
          html:
            'Amos 7 presents God\'s standard of truth — the plumbline. Israel will be measured against it. The prophet who speaks God\'s word cannot be silenced by earthly power. Truth will stand.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
