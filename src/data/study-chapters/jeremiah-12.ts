import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Jeremiah 12 — The Prophet&apos;s Complaint
 *
 * "Wherefore doth the way of the wicked prosper? wherefore are all they happy
 * that deal very treacherously?" This is one of the oldest questions in
 * Scripture, posed also by the psalmists and Job: Why do the wicked prosper?
 * Why do the righteous suffer? Why does God allow injustice? The question is
 * not answered with logic or explanation but with the assertion that Christ
 * understands this complaint intimately. He walked the way of the righteous and
 * was handed over to death. He knew suffering. He knows our lament.
 */
export const JEREMIAH_12: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 12,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  intros: [
    'Jeremiah 12 is one of the rawest, most honest prayers in Scripture. Jeremiah does not ask God for comfort or strength. He asks God why He allows injustice. "Wherefore doth the way of the wicked prosper? wherefore are all they happy that deal very treacherously?" The wicked plant, yet they do not uproot. They grow in wealth and success, yet their hearts remain far from God. Meanwhile, Jeremiah himself, who speaks God&apos;s word, faces persecution. The injustice burns in him.',
    'Yet the interesting thing is that God does not rebuke Jeremiah for the question. He does not demand that Jeremiah trust blindly without asking. Instead, He acknowledges the question and calls Jeremiah to a deeper trust. "If thou hast run with the footmen, and they have wearied thee, then how canst thou contend with horses?" The message is not that the question is wrong, but that Jeremiah must prepare for something harder than he has yet faced. And Christ, who came as the perfectly righteous one, faced the ultimate unfairness: death on a cross.',
  ],

  sections: [
    {
      ref: 'Jeremiah 12:1–6',
      title: 'The Complaint of the Righteous',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(1, 'Righteous art thou, O Lord, when I plead with thee: yet let me talk with thee of thy judgments: Wherefore doth the way of the wicked prosper? wherefore are all they happy that deal very treacherously??'),
            plain(2, 'Thou hast planted them, yea, they have taken root: they grow, yea, they bring forth fruit: thou art near in their mouth, and far from their reins.'),
            plain(3, 'But thou, O Lord, knowest me: thou hast seen me, and tried mine heart toward thee: pull them out like sheep for the slaughter, and prepare them for the day of slaughter.'),
            plain(5, 'If thou hast run with the footmen, and they have wearied thee, then how canst thou contend with horses? and if in the land of peace wherein thou trustedst, they wearied thee, then how wilt thou do in the swelling of Jordan?'),
            plain(6, 'For even thy brethren, and the house of thy father, even they have dealt treacherously with thee; yea, they have called a multitude after thee: believe them not, though they speak fair words unto thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer12-righteous',
          html: 'Jeremiah begins with a profession of faith: "Righteous art thou, O Lord." God is righteous. Yet immediately he launches his complaint: "Yet let me talk with thee of thy judgments." This is the structure of honest prayer—acknowledge God&apos;s righteousness, then ask why the world appears to contradict that righteousness. The wicked prosper. Those who deal treacherously are happy. Where is justice?[res:babylonian-chronicle]',
        },
        {
          kind: 'hebrew',
          id: 'jer12-tzaddik',
          title: 'Tzaddik — "Righteous" (Just, Vindicated)',
          script: 'צַדִּיק',
          translit: '<strong>Tzaddik</strong> · righteous; just; one who acts with integrity',
          description: 'Jeremiah addresses God as tzaddik—righteous, just, acting with perfect integrity. Yet he questions whether God&apos;s righteousness is visible in how the world is ordered. This tension—between God&apos;s claimed righteousness and the apparent injustice of the world—is at the heart of Jeremiah&apos;s complaint.',
        },
        {
          kind: 'commentary',
          id: 'jer12-wearied',
          html: 'God&apos;s response is surprising. He does not answer the question directly. Instead, He tells Jeremiah that what he has faced so far is merely the beginning. "If thou hast run with the footmen, and they have wearied thee, then how canst thou contend with horses?" The trials ahead will be greater than those behind. The complaint Jeremiah makes now will pale in comparison to what is coming[res:lachish-letters][res:sefaria-jeremiah-12].',
        },
        {
          kind: 'commentary',
          id: 'jer12-treachery',
          html: 'Then comes a blow: "For even thy brethren, and the house of thy father, even they have dealt treacherously with thee." Jeremiah&apos;s own family, his own relatives, have turned against him. The persecution he faces is not from strangers but from his own people. Yet God tells him not to believe them even when they speak fair words. Their words are lies meant to deceive him.',
        },
        {
          kind: 'christ',
          id: 'jer12-christ-share',
          title: 'Christ Connection — Sharing the Lament',
          html: 'Christ too faced the question of why the righteous suffer. On the cross, He cried out, "My God, my God, why hast thou forsaken me?" He, the perfectly righteous one, faced the ultimate injustice: death at the hands of those He came to save. He knows Jeremiah&apos;s lament intimately. He too asked, "Wherefore?" And in His resurrection, He vindicated that the righteous God will ultimately bring justice—though not on the timeline we expect.',
        },
        {
          kind: 'carry',
          html: 'This chapter gives permission for honest complaint. Your question "Why do the wicked prosper?" is not rebellion against God. It is a cry for the justice that God Himself claims to care about. Yet the chapter also suggests that the answer is not to be found in a logical explanation but in trusting that God knows you, has tried your heart, and will ultimately vindicate the righteous.',
        },
        {
          kind: 'reflection',
          id: 'jer12-why-prosper',
          prompt: 'What injustice burns in you? Where do you see the wicked prosper while the righteous suffer? How could you bring that complaint to God while still trusting His righteousness?',
        },
      ],
    },

    {
      ref: 'Jeremiah 12:7–17',
      title: 'God&apos;s Own Sorrow',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(7, 'I have forsaken mine house, I have left mine heritage; I have given the dearly beloved of my soul into the hand of her enemies.'),
            plain(8, 'Mine heritage is unto me as a lion in the forest; it crieth out against me: therefore have I hated it.'),
            plain(9, 'Mine heritage is unto me as a speckled bird, the birds round about are against it; come ye, assemble all the beasts of the field, come to devour.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jeremiah-12-78mid-1',
          html:
            'The prophet turns from his question — why do the wicked prosper? — to the LORD&apos;s answer, which does not soothe but presses harder.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(10, 'Many pastors have destroyed my vineyard, they have trodden my portion under foot, they have made my pleasant portion a desolate wilderness.'),
            plain(11, 'They have made it desolate, and being desolate it mourneth unto me; the whole land is made desolate, because no man layeth it to heart.'),
            plain(14, 'Thus saith the Lord against all mine evil neighbours, that touch the inheritance which I have caused my people Israel to inherit; Behold, I will pluck them out of their land, and pluck out the house of Judah from among them.'),
            plain(15, 'And it shall come to pass, after that I have plucked them out I will return, and have compassion upon them, and will bring them again, every man to his heritage, and every man to his land.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer12-forsaken',
          html: 'A remarkable shift: from Jeremiah&apos;s complaint to God&apos;s own grief. "I have forsaken mine house, I have left mine heritage." God Himself speaks of having abandoned His own people to their enemies. The heritage—Israel, God&apos;s own beloved possession—has been given into the hands of enemies. This is God&apos;s sorrow mirrored to Jeremiah.',
        },
        {
          kind: 'commentary',
          id: 'jer12-lion',
          html: 'The image is raw: "Mine heritage is unto me as a lion in the forest; it crieth out against me: therefore have I hated it." The people who were meant to be God&apos;s beloved have become like a roaring lion, hostile and dangerous. God&apos;s response is described as hatred—yet this hatred is the other side of broken love. It is the grief of the spurned beloved.',
        },
        {
          kind: 'carry',
          html: 'The chapter ends with a promise of restoration: after God has plucked out the evil neighbors, He will restore Judah and Israel to their heritage. He will have compassion upon them. The judgment is not final. Even within the sorrow, there is the promise of return. God&apos;s grief carries within it the seed of restoration.',
        },
        {
          kind: 'reflection',
          id: 'jer12-return',
          prompt: 'What would it mean to believe that even in judgment, restoration is possible? That God&apos;s grief over your turning away contains within it the promise of return?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Righteous art thou, O Lord, when I plead with thee: yet let me talk with thee of thy judgments: Wherefore doth the way of the wicked prosper?',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 12 · Study Guide',
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
      id: 'lachish-letters',
      kind: 'archaeology',
      source: 'Israel Museum',
      label: 'Lachish Letters',
      url: 'https://www.imj.org.il/en/collections/lachish-letters',
      description: 'Ancient inscribed potsherds from the Judean siege of Lachish (587 BCE), contemporary with Jeremiah.',
    },
    {
      id: 'sefaria-jeremiah-12',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jeremiah 12 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Jeremiah.12',
      description: 'The Hebrew text of Jeremiah 12 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
