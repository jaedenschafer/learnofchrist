import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Jeremiah 6 — The Ancient Paths and the Way
 *
 * "Stand ye in the ways, and see, and ask for the old paths, where is the good
 * way, and walk therein, and ye shall find rest for your souls." The image is
 * geographical: standing at a crossroads, looking back at ancient paths, asking
 * where the good way is. The old paths are not those of outdated tradition but
 * of covenant—the way God established with His people. The good way is the
 * narrow way of obedience. Yet the people refuse: "We will not walk therein."
 * Judgment is coming. The armies approach. The city is under siege. Yet God&apos;s
 * invitation to the ancient path remains open, even as the door closes.
 */
export const JEREMIAH_6: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 6,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  topicTags: ['lament', 'judgment', 'hope', 'calling'],
  opener: {
    topical: true,
    caption: 'Jeremiah 6',
  },
  intros: [
    'Jeremiah 6 contains one of the most penetrating verses in Scripture about the nature of spiritual stagnation and the recovery of faith. God commands: "Stand ye in the ways, and see, and ask for the old paths, where is the good way, and walk therein, and ye shall find rest for your souls." This is not an appeal to tradition for its own sake. This is an appeal to return to the foundation. The old paths are the paths of the covenant, the ancient ways through which God has guided His people from the beginning. To walk in them again is to find rest.',
    'Yet the chapter is also relentless in its description of approaching judgment. The armies of the north are gathered. They are setting up siege. The city will be besieged and taken. The destruction comes not out of nowhere but as the consequence of a people who have heard God&apos;s call and refused it: "But they said, We will not walk therein." The chapter holds together two truths: God&apos;s persistent call to return to the ancient way, and the certainty that those who refuse will face judgment.',
  ],

  sections: [
    {
      ref: 'Jeremiah 6:1–15',
      title: 'Return to the Ancient Way',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(1, 'O ye children of Benjamin, gather yourselves to flee out of the midst of Jerusalem: and blow the trumpet in Tekoa, and set up a sign of fire in Beth-haccerem: for evil appeareth out of the north, and great destruction.'),
            plain(2, 'I have likened the daughter of Zion to a comely and delicate woman.'),
            plain(3, 'The shepherds with their flocks shall come unto her; they shall pitch their tents against her round about; they shall feed every one in his place.'),
            plain(4, 'Prepare ye war against her; arise, and let us go up at noon. Woe unto us! for the day goeth away, for the shadows of the evening are stretched out.'),
            plain(5, 'Arise, and let us go by night, and let us destroy her palaces.'),
            plain(6, 'For thus hath the Lord of hosts said, Hew ye down trees, and cast a mount against Jerusalem: this is the city to be visited; she is wholly oppression in the midst of her.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer6-siege-call',
          html: 'The army approaches—they will pitch tents, feed on what they find. "She is wholly oppression"—God Himself permits the siege. Now the pivot: from siege language to God&apos;s appeal[res:babylonian-chronicle][res:sefaria-jeremiah-6].',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(7, 'As a fountain casteth out her waters, so she casteth out her wickedness: violence and spoil is heard in her; before me continually is grief and wounds.'),
            plain(8, 'Be thou instructed, O Jerusalem, lest my soul depart from thee; lest I make thee desolate, a land not inhabited.'),
            plain(9, 'Thus saith the Lord of hosts, They shall thoroughly glean the remnant of Israel as a vine: turn back thine hand as a grapegatherer into the baskets.'),
            plain(10, 'To whom shall I speak, and give warning, that they may hear? behold, their ear is uncircumcised, and they cannot hearken: behold, the word of the Lord is unto them a reproach; they have no delight in it.'),
            plain(16, 'Thus saith the Lord, Stand ye in the ways, and see, and ask for the old paths, where is the good way, and walk therein, and ye shall find rest for your souls. But they said, We will not walk therein.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer6-old-paths',
          html: 'God&apos;s invitation is to stand at the crossroads and ask for the old paths. This is not nostalgia. The old paths are those established by the covenant, by the law given at Sinai, by the pattern of faithful following that has characterized the righteous throughout Israel&apos;s history. To ask for the good way is to inquire after wisdom, after the path that leads to life and rest. Yet the response is a refusal: "We will not walk therein." This refusal is the core of the problem. It is not ignorance but willful rejection[res:bibleodyssey-jeremiah].',
        },
        {
          kind: 'hebrew',
          id: 'jer6-nacham',
          title: 'Nacham — "Comely" (Beautiful, Delicate)',
          script: 'נַחְמָה',
          translit: '<strong>Nacham</strong> · comely; beautiful; precious',
          description: 'God describes the daughter of Zion as comely and delicate—beautiful, worthy of care and protection. Yet this beauty makes her vulnerable. The metaphor is of a woman who is defenseless before the armies approaching. The beauty itself becomes a reason she will be despoiled. What is precious becomes the object of destruction.',
        },
        {
          kind: 'commentary',
          id: 'jer6-fountain',
          html: 'An image parallel to chapter 2: "As a fountain casteth out her waters, so she casteth out her wickedness." Where a fountain should pour forth living waters, Zion pours forth wickedness. Violence and spoil are heard in the city. Grief and wounds are perpetual. The city that was meant to be a light to the nations has become a fountain of evil.',
        },
        {
          kind: 'commentary',
          id: 'jer6-uncircumcised',
          html: 'God speaks in frustration: "To whom shall I speak? Behold, their ear is uncircumcised, and they cannot hearken." An uncircumcised ear is one that cannot hear, that is closed to God&apos;s word. The people do not merely refuse; they cannot hear. They have made themselves incapable of receiving what God is saying. Their very faculties of perception have been dulled.',
        },
        {
          kind: 'christ',
          id: 'jer6-christ-way',
          title: 'Christ Connection — The Way',
          html: 'In John 14:6, Jesus says, "I am the way, the truth, and the life." The ancient paths point to this one way. Christ does not invent a new way but fulfills the way that was always meant. To walk in Him is to walk in the ancient paths, in the covenant made with Abraham, in the promises of God. And as Jesus promises, those who follow Him shall find rest: "Come unto me, all ye that labour and are heavy laden, and I will give you rest."',
        },
        {
          kind: 'carry',
          html: 'The call to ask for the old paths is a call to discernment. In a world of many ways, many voices, many paths, which is the good way? The answer is not found in novelty or in what feels good in the moment, but in ancient wisdom, in the paths that have been walked by the faithful across generations. Where are you being called to turn back from new paths and ask for the ancient way?',
        },
        {
          kind: 'reflection',
          id: 'jer6-what-path',
          prompt: 'When you find yourself at a crossroads—in a decision, a relationship, a direction—how do you ask for the old paths? What ancient wisdom guides you?',
        },
      ],
    },

    {
      ref: 'Jeremiah 6:16–30',
      title: 'The Siege and the Refusal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(17, 'Also I set watchmen over you, saying, Hearken to the sound of the trumpet. But they said, We will not hearken.'),
            plain(19, 'Hear, O earth: behold, I will bring evil upon this people, even the fruit of their thoughts, because they have not hearkened unto my words, nor to my law, but rejected it.'),
            plain(20, 'To what purpose cometh there to me incense from Sheba, and the sweet cane from a far country? your burnt offerings are not acceptable, and your sacrifices are not sweet unto me.'),
            plain(21, 'Therefore thus saith the Lord, Behold, I will lay stumblingblocks before this people: and the fathers and the sons together shall fall upon them; the neighbour and his friend shall perish.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jeremiah-6-78mid-1',
          html:
            'Jeremiah pivots from the LORD&apos;s warning to his own grief — the watchman has cried out, and now he weeps that no one is listening.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(22, 'Thus saith the Lord, Behold, a people cometh from the north country, and a great nation shall be raised from the sides of the earth.'),
            plain(23, 'They shall lay hold on bow and spear; they are cruel, and have no mercy; their voice roareth like the sea; and they ride upon horses, set in array as men for war against thee, O daughter of Zion.'),
            plain(24, 'We have heard the fame thereof: our hands wax feeble: anguish hath taken hold of us, and pain, as of a woman in travail.'),
            plain(25, 'Go not forth into the field, nor walk by the way; for the sword of the enemy and fear is on every side.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer6-watchmen',
          html: 'God has set watchmen over the people—the prophets who sound the trumpet, who warn of approaching danger. But the people say, "We will not hearken." They refuse even the warning. They reject not only the invitation to return but also the alert that danger is coming. This willful ignorance in the face of clear warning is a kind of spiritual death in itself.',
        },
        {
          kind: 'commentary',
          id: 'jer6-offerings',
          html: 'God then rejects the very practice of sacrifice and worship: "Your burnt offerings are not acceptable, and your sacrifices are not sweet unto me." This is not a rejection of sacrifice itself but of sacrifice offered by those who have not turned from their wickedness. Ritual without repentance is useless. Ceremony without covenant commitment is empty.',
        },
        {
          kind: 'commentary',
          id: 'jer6-north',
          html: 'The description of the coming army is vivid and terrifying. They are a great nation from the north, cruel and without mercy. Their voice roars like the sea. They are set in array for war. And the reaction of the people is one of panic and immobility: "Go not forth into the field, nor walk by the way; for the sword of the enemy and fear is on every side." The city is under siege. There is no escape.',
        },
        {
          kind: 'carry',
          html: 'The chapter teaches that refusal to heed warning comes with a price. God sent prophets. They refused to listen. God set watchmen. They refused to hear the trumpet. The consequence is judgment that comes not as arbitrary punishment but as the natural result of rejecting the only way out. What warnings are you being given? What watchmen are you refusing to hear?',
        },
        {
          kind: 'reflection',
          id: 'jer6-watchmen-hear',
          prompt: 'Who are the watchmen in your life—the people who warn you, who call you back to the ancient paths? Do you hear them? Or are you among those who say, "We will not hearken"?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Stand ye in the ways, and see, and ask for the old paths, where is the good way, and walk therein, and ye shall find rest for your souls.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 6 · Study Guide',
  },  resources: [
    {
      id: 'babylonian-chronicle',
      kind: 'museum',
      source: 'British Museum',
      label: 'Babylonian Chronicle (Jerusalem siege)',
      url: 'https://www.britishmuseum.org/collection/object/Y_EA25091',
      description: 'Cuneiform tablet documenting the Babylonian assault on Jerusalem in 597 and 587 BCE.',
    },
    {
      id: 'sefaria-jeremiah-6',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jeremiah 6 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Jeremiah.6',
      description: 'The Hebrew text of Jeremiah 6 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
