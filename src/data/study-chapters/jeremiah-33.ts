import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Jeremiah 33 — The Branch of Righteousness
 *
 * "Call unto me, and I will answer thee, and shew thee great and mighty
 * things, which thou knowest not." In captivity, the prophet receives a
 * vision of a righteous king—the Branch—who will reign in wisdom and
 * justice. The branch is a figure of growth, of life springing from what
 * seems dead. From the stump of David&apos;s line will grow a king eternal.
 */
export const JEREMIAH_33: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 33,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 6 },
  topicTags: ['lament', 'judgment', 'hope', 'calling'],
  opener: {
    topical: true,
    caption: 'Jeremiah 33',
  },
  intros: [
    'Jeremiah continues to receive visions of restoration even in exile. God tells the prophet to call upon Him—to pray—and promises that He will reveal "great and mighty things" that Jeremiah does not yet know. This is the voice of hope breaking through history. The God who allowed exile is the same God who prepares restoration. And the restoration He promises is not merely political recovery, but the revelation of a righteous king—one who comes from David&apos;s line, who will execute justice, who is described as "the Branch."',
    'The Branch is a messianic title pointing to a descendant of David who will grow from the root of his family. The language echoes Isaiah&apos;s prophecies. The tone is redemptive, hopeful, pointing toward a king who will reign in righteousness. For a people in exile, this is an announcement that their story does not end in captivity. There is a future. There is a king. There is justice.',
  ],

  sections: [
    {
      ref: 'Jeremiah 33:1–13',
      title: 'Call and Answer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            plain(2, 'Thus saith the Lord the maker thereof, the Lord that formed it, to establish it; The Lord is his name;'),
            plain(3, 'Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not.'),
            plain(4, 'For thus saith the Lord, the God of Israel, concerning the houses of this city, and concerning the houses of the kings of Judah, which are thrown down by the mounts, and by the sword;'),
            plain(11, 'But I will cause the captivity of Judah and the captivity of Israel to return, and will build them, as at the first.'),
            plain(12, 'And I will cleanse them from all their iniquity, whereby they have sinned against me; and I will pardon all their iniquities, whereby they have sinned, and whereby they have transgressed against me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer33-call-answer',
          html: 'God opens an invitation: "Call unto me, and I will answer thee." This is not a God distant from His people, unmoved by exile or destruction. This is a God who desires relationship, who positions Himself to be found by those who seek Him. And He promises that in answering, He will reveal "great and mighty things which thou knowest not." The future He has prepared is beyond what the prophet can imagine from the vantage point of exile[res:bibleodyssey-jeremiah][res:sefaria-jeremiah-33].',
        },
        {
          kind: 'commentary',
          id: 'jer33-cleanse',
          html: 'God promises not merely to return the people, but to cleanse them. The exile has been God&apos;s judgment on their sin. But judgment has an end. God will forgive and pardon. To pardon is to release the debt. To cleanse is to remove the stain. The restored people will not return as they were—burdened by guilt. They will return cleansed, forgiven, ready to begin again[res:lachish-letters].',
        },
        {
          kind: 'christ',
          id: 'jer33-christ-cleanse',
          title: 'Christ Connection — The Cleansing Lamb',
          html: 'Jesus came not merely to teach or to lead, but to cleanse. "In whom we have redemption through his blood, the forgiveness of sins." He is the Lamb whose blood removes sin, whose death pays the price, whose resurrection opens the door to a new beginning. We are not merely pardoned through Christ. We are cleansed. The stain is removed. We stand before God not as those who have been forgiven of a debt we still bear, but as those who have been made new.',
        },
        {
          kind: 'carry',
          html: 'God calls you to speak to Him—to pray, to seek, to call upon Him. He promises to answer. You do not pray into a void. You do not seek a God who is distant. The God of all creation positions Himself to be found by those who call. And what He reveals through prayer and faith will astonish you.',
        },
        {
          kind: 'reflection',
          id: 'jer33-call-god',
          prompt: 'What great and mighty thing does God want to show you that you do not yet know? How might you cultivate a practice of calling upon God and waiting for His answer?',
        },
      ],
    },

    {
      ref: 'Jeremiah 33:14–26',
      title: 'The Branch of Righteousness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 33,
          lines: [
            plain(14, 'Behold, the days come, saith the Lord, that I will perform that good thing which I have promised unto the house of Israel and to the house of Judah.'),
            plain(15, 'In those days, and at that time, will I cause the Branch of righteousness to grow up unto David; and he shall execute judgment and righteousness in the land.'),
            plain(16, 'In those days shall Judah be saved, and Jerusalem shall dwell safely: and this is the name wherewith she shall be called, The Lord our righteousness.'),
            plain(17, 'For thus saith the Lord; David shall never want a man to sit upon the throne of the house of Israel;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer33-branch',
          html:
            'The Branch is a figure of continuity and restoration. A branch grows from a root—sometimes from a stump or tree that appears dead. Here, it represents the continuation of David&apos;s line, not through the ordinary succession of earthly kings, but through a figure who will reign in righteousness itself. This Branch will not merely occupy a throne. He will execute judgment and righteousness—he will establish justice, will govern according to God&apos;s standard, will rule with perfect wisdom and mercy.',
        },
        {
          kind: 'hebrew',
          id: 'jer33-tsedek',
          title: 'Tsedek — "Righteousness" (justice, rightness)',
          script: 'צֶדֶק',
          translit: '<strong>Tsedek</strong> · righteousness; justice; rightness; what is right',
          description:
            'Tsedek is not merely moral purity, though it includes that. It is the quality of being right—aligning with God&apos;s standard, establishing justice, setting wrongs to right. When God says the Branch will execute tsedek, He is saying the Branch will make things right—not through force, but through the restoration of what is proper and just.',
        },
        {
          kind: 'commentary',
          id: 'jer33-our-righteousness',
          html:
            'The promise culminates in a name: "The Lord Our Righteousness." The city itself—Jerusalem—will be called by God&apos;s own righteousness. This is not Jerusalem achieving righteousness through its own effort. This is Jerusalem identified with, possessed by, constituted by the righteousness of the Lord. The very name of God becomes the name of the restored city.',
        },
        {
          kind: 'christ',
          id: 'jer33-christ-branch',
          title: 'Christ Connection — The Branch',
          html:
            'Jesus is called "the Branch" in the Gospels. From the stump of Jesse, from the root of David, He grows—not as an earthly king, but as one who reigns forever. He executes righteousness not through coercion but through sacrifice. He is "The Lord Our Righteousness"—not merely righteous in Himself, but our righteousness. Through Him, we are made righteous before God. We do not earn it. We receive it as His gift, His identification of Himself with us, His clothing us in His own justice.',
        },
        {
          kind: 'carry',
          html:
            'The Branch is planted for you. The righteousness of God is offered to you. You are not called to achieve righteousness through your own effort, but to receive it through faith in the one who is called "The Lord Our Righteousness." Your standing before God depends not on your perfect obedience, but on His perfect righteousness—applied to you, credited to you, making you acceptable.',
        },
        {
          kind: 'reflection',
          id: 'jer33-branch-righteousness',
          prompt: 'What does it mean to have "The Lord Our Righteousness" as your identity? How does receiving God&apos;s righteousness as a gift differ from trying to achieve righteousness through your own effort?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Call unto me, and I will answer thee, and shew thee great and mighty things...In those days will I cause the Branch of righteousness to grow up unto David; and he shall execute judgment and righteousness in the land.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 33 · Study Guide',
  },  resources: [
    {
      id: 'bibleodyssey-jeremiah',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Jeremiah',
      url: 'https://www.bibleodyssey.org/passages/main-articles/jeremiah/',
      description: 'Peer-reviewed SBL entry on the prophet Jeremiah and his historical context.',
    },
    {
      id: 'lachish-letters',
      kind: 'archaeology',
      source: 'Israel Museum',
      label: 'Lachish Letters',
      url: 'https://www.imj.org.il/en/collections/lachish-letters',
      description: 'Ancient inscribed potsherds from the Judean siege of Lachish (587 BCE), contemporary with Jeremiah.',
    },
    {
      id: 'sefaria-jeremiah-33',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jeremiah 33 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Jeremiah.33',
      description: 'The Hebrew text of Jeremiah 33 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
