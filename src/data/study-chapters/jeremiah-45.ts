import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Jeremiah 45 — A Word to Baruch
 *
 * Baruch has been Jeremiah's faithful scribe and companion through decades of
 * rejection and suffering. He has written down the word of the Lord. He has
 * witnessed Jerusalem's fall. And now he is weary. He wants rest, safety, and
 * honor. God meets him not with rebuke, but with a mirror. "Seekest thou great
 * things for thyself? Seek them not." The deepest contentment comes not from
 * seeking, but from surrender.
 */
export const JEREMIAH_45: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 45,

  estimatedMinutes: { 5: 1, 10: 3, 15: 4 },
  intros: [
    'Jeremiah 45 is one of the shortest chapters in the book, but perhaps one of the most tender. It concerns Baruch, Jeremiah&apos;s faithful scribe. For decades, Baruch has stood beside the prophet. He has transcribed the words of the Lord into a scroll. He has read those words to the people. He has been present through mockery, imprisonment, and the fall of Jerusalem. And now, as the world crumbles around him and exile looms, Baruch is exhausted. He laments: "Woe is me now! for the Lord hath added grief to my sorrow; I fainted in my sighing, and I find no rest."',
    'In response, God gives Baruch a word that cuts to the heart of his pain. It is not a word of comfort in the sense of false assurance. It is a word of diagnosis. Baruch has been seeking great things for himself. He has been looking for honor, safety, rest—a life free from grief and sorrow. And God&apos;s word is simple: "Seekest thou great things for thyself? Seek them not." This is not cruelty. This is the deepest mercy—to show us what we are really seeking, and to offer us something far better.',
  ],

  sections: [
    /* ─── Jeremiah 45:1–5 — The Call to Contentment ───────────────────── */
    {
      ref: 'Jeremiah 45:1–5',
      title: 'Seeking Nothing, Receiving Everything',
      blocks: [
        {
          kind: 'scripture',
          chapter: 45,
          lines: [
            plain(1, 'The word that Jeremiah the prophet spake unto Baruch the son of Neriah, when he had written these words in a book at the mouth of Jeremiah, in the fourth year of Jehoiakim the son of Josiah king of Judah, saying,'),
            plain(3, 'Thou didst say, Woe is me now! for the Lord hath added grief to my sorrow; I fainted in my sighing, and I find no rest.'),
            plain(4, 'Thus shalt thou say unto him, The Lord saith thus; Behold, that which I have built will I break down, and that which I have planted I will pluck up, even this whole land.'),
            plain(5, 'And seekest thou great things for thyself? Seek them not: for, behold, I will bring evil upon all flesh, saith the Lord: but thy life will I give unto thee for a prey in all places whither thou goest.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer45-woe',
          html:
            'Baruch&apos;s lament is profound: "Woe is me now!" He has watched the world fall apart. The kingdom is collapsing. The temple is about to be destroyed. And he is exhausted. "I fainted in my sighing, and I find no rest." He has sighed so much that he has lost strength. He seeks rest but cannot find it. This is not the complaint of a spoiled person. This is the deepest weariness of one who has given everything and watched it come to nothing.',
        },
        {
          kind: 'commentary',
          id: 'jer45-great-things',
          html:
            'God&apos;s response goes straight to the heart: "Seekest thou great things for thyself?" In the midst of a collapsing kingdom, Baruch has been seeking great things—honor, safety, a place of importance. This desire is not sinful, but it is misplaced. God is saying, in effect: "You want great things for yourself, but I am about to break down what I have built and pluck up what I have planted. The whole land is coming down. You cannot have great things for yourself in the ruins of civilization."',
        },
        {
          kind: 'hebrew',
          id: 'jer45-shalal',
          title: 'Shalal — "For a Prey" (Shelal)',
          script: 'שָׁלָל',
          translit: '<strong>Shalal</strong> · prey; spoil; that which is rescued or seized',
          description:
            'The Hebrew word shalal means "prey" or "spoil"—what is taken by force, rescued from ruin, seized as one&apos;s own. God promises Baruch that his life will be given to him as shalal—not because he earned it, not because he deserves it, but as a prize rescued from the wreckage. In a sense, his life itself becomes the spoil of war—preserved when all else is lost.',
        },
        {
          kind: 'carry',
          html:
            'The deepest contentment comes not from seeking great things, but from releasing the need for them. Baruch has been exhausted because he is trying to hold on to something—honor, safety, rest. He is trying to be comfortable in an uncomfortable age. God&apos;s word invites him to a different kind of peace: the peace of surrender. "Your life will be given to you as a prey. That is enough. Stop seeking, and receive what I give."',
        },
        {
          kind: 'reflection',
          id: 'jer45-seek-what',
          prompt: 'What great things are you seeking for yourself? What would change in your life if you released the need for them and simply trusted God&apos;s promise to preserve you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Seekest thou great things for thyself? Seek them not: for...thy life will I give unto thee for a prey in all places whither thou goest.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 45 · Study Guide',
  },
};
