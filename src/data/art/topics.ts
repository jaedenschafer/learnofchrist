/**
 * Topic taxonomy for biblical artwork.
 *
 * `sceneSlug` (already on every plate) describes what is *depicted* — a narrative
 * scene like "nativity", "crucifixion", "moses", "patriarchs". Topic tags
 * describe what the piece is *about thematically* — "hope", "repentance",
 * "covenant-faithfulness", "judgment", "mercy".
 *
 * The two are orthogonal. A Caravaggio "Crucifixion of St Peter" has
 * sceneSlug='apostles' but topicTags=['suffering','witness','death'].
 *
 * Topic tags drive the Tier-B "(themed)" fallback when a chapter has no
 * chapter-specific plate available. They allow Isaiah's messianic prophecies
 * to render scenes from Christ's life, or a Psalm of lament to show a
 * suffering-themed plate even though there's no Psalm-specific painting.
 *
 * Authors must pick from this controlled vocabulary. The renderer is
 * intentionally lenient with unknown tags (renders nothing, doesn't crash),
 * but `validateTopicTag` is exported for build-time linting.
 *
 * Adding a new topic: add it here with a one-sentence rubric describing
 * exactly when to use it. Vagueness in the rubric here = inconsistent
 * tagging downstream.
 */

export type TopicSlug =
  // ─── God and his character ─────────────────────────────────────────
  | 'sovereignty'              // God's rule over creation, history, kings
  | 'providence'               // God orchestrating events for his purposes
  | 'holiness'                 // separateness, awe, fear of the Lord
  | 'glory'                    // theophany, shekhinah, transfiguration
  | 'faithfulness'             // hesed, covenant-keeping
  | 'mercy'                    // forgiveness, pardon, withholding wrath
  | 'wrath'                    // judgment in motion, plague, sword
  | 'compassion'               // tenderness toward the suffering, the lost
  | 'love'                     // covenant love, agape, divine affection
  // ─── The human condition ──────────────────────────────────────────
  | 'sin'                      // transgression, fall, idolatry
  | 'repentance'               // return, contrition, ashes
  | 'forgiveness'              // received pardon, reconciliation
  | 'suffering'                // affliction, lament, the dark night
  | 'hope'                     // expectation, waiting, dawn imagery
  | 'fear'                     // human fear of God or of trial
  | 'doubt'                    // wrestling, questioning, dark waters
  | 'pride'                    // self-exaltation, Babel, kings unhumbled
  | 'humility'                 // bowed posture, washing of feet, lowliness
  // ─── Christ-centered ──────────────────────────────────────────────
  | 'incarnation'              // Word made flesh, nativity, Emmanuel
  | 'messianic-prophecy'       // OT prophecies fulfilled in Christ
  | 'sacrifice'                // substitution, the Lamb, atonement
  | 'cross'                    // crucifixion, suffering servant
  | 'resurrection'             // empty tomb, risen Lord, new creation
  | 'kingship'                 // Christ enthroned, royal psalms, lion of Judah
  | 'shepherd'                 // shepherd-king, Psalm 23, John 10
  | 'priest'                   // priestly mediation, Hebrews
  | 'second-coming'            // parousia, judgment-day, harvest
  // ─── Worship and life with God ────────────────────────────────────
  | 'prayer'                   // intercession, kneeling, psalmist before God
  | 'praise'                   // song, dance, lifted hands
  | 'lament'                   // tears, ashes, weeping prophet
  | 'thanksgiving'             // gratitude, harvest offerings
  | 'covenant'                 // formal covenants, blood, exchange
  | 'worship'                  // gathered worship, temple, altar
  | 'sabbath'                  // rest, ceasing, seventh-day imagery
  // ─── Wisdom and the moral life ────────────────────────────────────
  | 'wisdom'                   // proverbs, the wise vs. the fool
  | 'folly'                    // the fool, drunkenness, ruin
  | 'justice'                  // mishpat, courts, defending the poor
  | 'righteousness'            // tsedeq, upright walk
  | 'integrity'                // wholehearted devotion, no double-mind
  // ─── Community and people ─────────────────────────────────────────
  | 'family'                   // household, marriage, children
  | 'friendship'               // companions, David and Jonathan
  | 'enemies'                  // persecution, the wicked surrounding
  | 'poverty-and-need'         // the poor, the widow, the orphan
  | 'hospitality'              // welcoming the stranger, table fellowship
  | 'unity'                    // one body, gathered nations
  // ─── The story arc of Scripture ───────────────────────────────────
  | 'creation'                 // beginning, garden, ordering chaos
  | 'fall-and-curse'           // Eden lost, curse on the ground
  | 'exile'                    // displacement, captivity, longing for home
  | 'return'                   // homecoming, restoration, rebuilding
  | 'judgment'                 // final reckoning, weighing, separation
  | 'new-creation'             // restored heavens and earth, eschatological
  // ─── Calling and witness ──────────────────────────────────────────
  | 'calling'                  // commission, theophanic call, prophetic burden
  | 'witness'                  // testimony, martyrdom, declaration
  | 'mission'                  // sent ones, apostolic going-forth
  | 'leadership'               // shepherding the people, kings, elders
  // ─── Battle and deliverance ───────────────────────────────────────
  | 'spiritual-warfare'        // unseen powers, dragon, armor of God
  | 'deliverance'              // rescue, exodus pattern, salvation from sword
  | 'protection'               // refuge, shield, fortress, hiding place
  | 'provision';               // manna, multiplication, the Lord provides

/**
 * The full list, exported for build-time validation and for the artwork
 * admin/review UI's tag-picker.
 */
export const ALL_TOPICS: readonly TopicSlug[] = [
  'sovereignty', 'providence', 'holiness', 'glory', 'faithfulness', 'mercy',
  'wrath', 'compassion', 'love',
  'sin', 'repentance', 'forgiveness', 'suffering', 'hope', 'fear', 'doubt',
  'pride', 'humility',
  'incarnation', 'messianic-prophecy', 'sacrifice', 'cross', 'resurrection',
  'kingship', 'shepherd', 'priest', 'second-coming',
  'prayer', 'praise', 'lament', 'thanksgiving', 'covenant', 'worship',
  'sabbath',
  'wisdom', 'folly', 'justice', 'righteousness', 'integrity',
  'family', 'friendship', 'enemies', 'poverty-and-need', 'hospitality',
  'unity',
  'creation', 'fall-and-curse', 'exile', 'return', 'judgment',
  'new-creation',
  'calling', 'witness', 'mission', 'leadership',
  'spiritual-warfare', 'deliverance', 'protection', 'provision',
] as const;

const TOPIC_SET = new Set<string>(ALL_TOPICS);

/** True iff `tag` is a valid topic slug. Used by build-time linters. */
export function isValidTopic(tag: string): tag is TopicSlug {
  return TOPIC_SET.has(tag);
}

/**
 * Score the topical overlap between a plate's topicTags and a chapter's
 * topicTags. Higher = better fallback match. Two-tag overlap weighs more
 * than 1; rare-topic matches weigh more than common-topic matches (the
 * "hope" topic on a Job chapter shouldn't be outweighed by "wisdom" if
 * the chapter is primarily about hope).
 */
export function topicOverlapScore(
  plateTags: readonly TopicSlug[] | undefined,
  chapterTags: readonly TopicSlug[] | undefined,
): number {
  if (!plateTags?.length || !chapterTags?.length) return 0;
  const plateSet = new Set(plateTags);
  let score = 0;
  for (let i = 0; i < chapterTags.length; i++) {
    if (plateSet.has(chapterTags[i])) {
      // First-listed chapter topics are weighted higher (chapter author
      // ranks them by salience). Topic at index i contributes (10 - i),
      // floor 1.
      score += Math.max(1, 10 - i);
    }
  }
  return score;
}
