import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Jeremiah 34 — Liberty Proclaimed and Broken
 *
 * King Zedekiah proclaims liberty—he frees the slaves. But as the siege
 * pressure eases, he takes back the freedom. The slaves are re-enslaved.
 * The covenant is broken. And God&apos;s response is swift: you have proclaimed
 * liberty to sword, pestilence, and famine. True liberty comes only through
 * Christ, whose freedom cannot be reclaimed or revoked.
 */
export const JEREMIAH_34: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 34,

  estimatedMinutes: { 5: 1, 10: 2, 15: 3 },
  intros: [
    'Jeremiah 34 dramatizes the failure of Israel to live by covenant. The story is stark: King Zedekiah, under pressure from the siege, proclaims a jubilee—he releases all slaves, granting them freedom. This is obedience to God&apos;s law, which required that Hebrew slaves be freed in the seventh year. For a moment, it seems the king has repented, that justice will prevail.',
    'But the siege is lifted. Pharaoh&apos;s army comes to relieve Jerusalem. And immediately, the king takes back what he has given. The slaves are re-enslaved. The covenant is broken. The freedom promised is revoked. And God&apos;s response through Jeremiah is one of judgment: you have proclaimed a liberty you did not mean to keep. Therefore God will proclaim liberty—to the sword, to pestilence, to famine. True liberty cannot be granted by human authority and then reclaimed. True liberty comes only through one whose authority cannot be revoked.',
  ],

  sections: [
    {
      ref: 'Jeremiah 34:8–22',
      title: 'Broken Covenant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            plain(8, 'This is the word that came unto Jeremiah from the Lord, after that the king Zedekiah had made a covenant with all the people which were at Jerusalem, to proclaim liberty unto them;'),
            plain(9, 'That every man should let his manservant, and every man his maidservant, being an Hebrew or an Hebrewess, go free; that none should serve himself of them, to wit, of a Jew his brother.'),
            plain(10, 'Now when all the princes, and all the people, which had entered into the covenant, heard that every one should let his manservant, and every one his maidservant, go free, that none should serve themselves of them any more, then they obeyed, and let them go.'),
            plain(11, 'But afterward they turned, and caused the servants and the handmaids, whom they had let go free, to return, and brought them into subjection for servants and for handmaids.'),
            plain(17, 'Therefore thus saith the Lord; Ye have not hearkened unto me, in proclaiming liberty, every one to his brother, and every man to his neighbour: behold, I proclaim a liberty for you, saith the Lord, to the sword, to the pestilence, and to the famine; and I will make you to be removed into all the kingdoms of the earth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer34-proclaimed',
          html:
            'Zedekiah&apos;s proclamation is itself righteous. It follows God&apos;s law. The people obey. The slaves are freed. For a moment, justice rules. But moment is all it is. When external pressure eases, the king reverses his decree. Those who had tasted freedom are returned to slavery. The covenant of liberty becomes, through its breaking, a covenant of greater bondage.',
        },
        {
          kind: 'commentary',
          id: 'jer34-liberty-false',
          html:
            'God&apos;s response is a mirror image of what they have done. They proclaimed liberty and then revoked it. Now God proclaims a liberty they cannot revoke—liberty to the sword, to pestilence, to famine. This is ironic judgment. They are freed from the obligation to keep slaves, but this freedom brings them no joy, because it comes wrapped in destruction. They are removed into all kingdoms of the earth—dispersed, scattered, their dominion broken.',
        },
        {
          kind: 'christ',
          id: 'jer34-christ-liberty',
          title: 'Christ Connection — The Liberty That Cannot Be Revoked',
          html:
            'Jesus proclaimed in the synagogue at Nazareth, quoting Isaiah, "The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor; he hath sent me to heal the brokenhearted, to preach deliverance to the captives, and recovering of sight to the blind, to set at liberty them that are bruised." But this liberty is not granted by a king who can revoke it. It is purchased by Christ&apos;s blood, sealed by His resurrection, sustained by His intercession. The freedom He gives cannot be taken back. It is eternal.',
        },
        {
          kind: 'carry',
          html:
            'Have you tasted the freedom of God&apos;s grace and then returned yourself to bondage? Have you felt the liberty of forgiveness and then taken yourself back into guilt? The false liberty that can be proclaimed and revoked is no true liberty at all. True freedom—the freedom Christ gives—is permanent, unrevokable, grounded in His own authority and power.',
        },
        {
          kind: 'reflection',
          id: 'jer34-true-liberty',
          prompt: 'Where have you experienced false liberty—freedom that was later taken away or that you took away from yourself? How is Christ&apos;s liberty different? What would it mean to truly believe in a liberty that cannot be revoked?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Behold, I proclaim a liberty for you, saith the Lord, to the sword, to the pestilence, and to the famine. Jesus said, The Spirit of the Lord...hath sent me to preach deliverance to the captives, and to set at liberty them that are bruised.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 34 · Study Guide',
  },

  hasHebrew: false,
};
