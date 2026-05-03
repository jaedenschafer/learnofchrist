import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * John 21 — The Risen Christ by the Sea
 *
 * The risen Jesus appears to the disciples at the Sea of Galilee. Peter says: "I
 * go a fishing." They fish all night and catch nothing. Then Jesus appears on the
 * shore and tells them: "Cast the net on the right side of the ship, and ye shall
 * find." They cast, and the net is full of large fishes—153. Jesus prepares
 * breakfast, saying: "Come and dine." Then, three times, He asks Peter: "Lovest
 * thou me?" Three times Peter affirms his love. Each time, Jesus says: "Feed my
 * sheep." The risen Christ restores Peter and commissions him to shepherd.
 */
export const JOHN_21: RichChapterContent = {
  bookSlug: 'john',
  bookName: 'John',
  chapter: 21,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  intros: [
    'After the resurrection, the disciples return to Galilee. They are bewildered, uncertain of their future. Peter says: "I go a fishing." It is a regression, a return to the old life. The other disciples follow. They fish all night and catch nothing. Dawn comes. A figure stands on the shore, though they do not recognize Him. The stranger calls: "Cast the net on the right side of the ship, and ye shall find." They obey, and the net is suddenly heavy with fish—153 large fishes, yet the net does not break. John recognizes: "It is the Lord." Peter, hearing this, throws himself into the water and swims to shore.',
    'Jesus has prepared a charcoal fire with fish and bread. "Come and dine." They breakfast together, the risen Lord with His disciples. Then Jesus turns to Peter, asking three times: "Lovest thou me?" Three denials are answered by three affirmations of love. And with each affirmation, a commission: "Feed my lambs." "Tend my sheep." "Feed my sheep." Peter&apos;s failure is not held against him. He is restored and given the calling he feared he had lost. The gospel ends not with judgment but with restoration, not with abandonment but with commissioning. The risen Christ is present, feeding His sheep, sending His disciples into the world.',
  ],

  sections: [
    /* ─── John 21:1–14 — The Miraculous Catch ──────────────────────────── */
    {
      ref: 'John 21:1–14',
      title: 'Cast the Net on the Right Side',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(1, 'After these things Jesus shewed himself again to the disciples at the sea of Tiberias; and on this wise shewed he himself.'),
            plain(3, 'Simon Peter saith unto them, I go a fishing. They say unto him, We also go with thee. They went forth, and entered into a ship immediately; and that night they caught nothing.'),
            plain(4, 'But when the morning was now come, Jesus stood on the shore: but the disciples knew not that it was Jesus.'),
            plain(6, 'And he said unto them, Cast the net on the right side of the ship, and ye shall find. They cast therefore, and now they were not able to draw it for the multitude of fishes.'),
            plain(11, 'Simon Peter therefore went up, and drew the net to land full of great fishes, an hundred and fifty and three: and for all there were so many, yet was not the net broken.'),
            plain(12, 'Jesus saith unto them, Come and dine. And none of the disciples durst ask him, Who art thou? knowing that it was the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john21-fishing',
          html:
            'Peter decides to return to fishing at the Sea of Tiberias[res:topostext-tiberias-sea]. The risen Christ has appeared, yet uncertainty remains. What now? The disciples follow Peter back to the old occupation. But they fish through the night and catch nothing. Their old way yields emptiness. The nets are empty. The night is long.',
        },
        {
          kind: 'commentary',
          id: 'john21-stranger',
          html:
            'A stranger appears on the shore at dawn. The disciples do not recognize the risen Jesus. He calls: "Cast the net on the right side of the ship, and ye shall find." A simple instruction, yet it requires trust. Why the right side? Why listen to a stranger? Yet they obey. Immediately, the net fills with so many fish they cannot haul it in.',
        },
        {
          kind: 'greek',
          id: 'john21-ektos',
          title: 'Ektos — Right Side',
          script: 'ἐκτὸς',
          translit: '<strong>Ektos</strong> · right side; the side of honor',
          description:
            'The right side is not arbitrary. It is the side of honor, the place of blessing. The miracle is not that there are fish. It is that there are fish where man&apos;s effort alone could not find them. When you follow the risen Christ&apos;s direction, abundance comes.',
        },
        {
          kind: 'commentary',
          id: 'john21-catch',
          html:
            '153 fish. The number is exact, specific. Not a vague multitude, but a particular count. Each fish matters. Each is counted, named, included. This is the harvest of souls. Each believer is known, counted, precious to the risen Christ.',
        },
        {
          kind: 'commentary',
          id: 'john21-not-broken',
          html:
            'The net does not break under the weight of such abundance. It holds. What would burst under such pressure remains intact. The provision is not destructive. It sustains and preserves. The risen Christ&apos;s blessing does not overwhelm or harm. It nourishes.',
        },
        {
          kind: 'commentary',
          id: 'john21-breakfast',
          html:
            '"Come and dine." Jesus has prepared breakfast—fish and bread. He does not sit while His disciples serve. He serves them. The risen Christ is not distant or impersonal. He shares a meal. He nourishes. The ordinary act of eating becomes communion, connection, grace.',
        },
        {
          kind: 'christ',
          id: 'john21-christ-provision',
          title: 'Christ Connection — Provider and Restorer',
          html:
            'The risen Christ provides abundance where human effort fails. He appears where we do not expect. He feeds us. He transforms our empty labor into fruitful witness. He is not a memory or a ghost. He is present, active, providing, restoring.',
        },
        {
          kind: 'carry',
          html:
            'When you labor without Him, the net is empty. When you follow His direction, abundance comes. Do not return to the old fishing. Listen for His voice. Cast your net where He directs. The harvest is His. Your role is obedience.',
        },
        {
          kind: 'reflection',
          id: 'john21-net',
          prompt: 'Where have you been laboring without the risen Christ&apos;s direction? How is He calling you to listen to His voice and cast your net in a new place?',
        },
      ],
    },

    /* ─── John 21:15–25 — Lovest Thou Me? and Restoration ────────────────── */
    {
      ref: 'John 21:15–25',
      title: 'Lovest Thou Me? Feed My Sheep',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            plain(15, 'So when they had dined, Jesus saith to Simon Peter, Simon, son of Jonas, lovest thou me more than these? He saith unto him, Yea, Lord; thou knowest that I love thee. He saith unto him, Feed my lambs.'),
            plain(16, 'He saith to him again the second time, Simon, son of Jonas, lovest thou me? He saith unto him, Yea, Lord; thou knowest that I love thee. He saith unto him, Feed my sheep.'),
            plain(17, 'He saith unto him the third time, Simon, son of Jonas, lovest thou me? Peter was grieved because he said unto him the third time, Lovest thou me? And he said unto him, Lord, thou knowest all things; thou knowest that I love thee. Jesus saith unto him, Feed my sheep.'),
            plain(18, 'Verily, verily, I say unto thee, When thou wast young, thou girdedst thyself, and walkedst whither thou wouldest: but when thou shalt be old, thou shalt stretch forth thy hands, and another shall gird thee, and carry thee whither thou wouldest not.'),
            plain(19, 'This spake he, signifying by what death he should glorify God. And when he had spoken this, he saith unto him, Follow me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john21-lovest',
          html:
            'Three times Jesus asks: "Lovest thou me?" Three times Peter had denied Jesus. Three times now he is asked to confess his love. The rhythm mirrors his failure, yet it is not accusatory. Rather, it is restorative. The wounds are addressed. The healing is deep.',
        },
        {
          kind: 'commentary',
          id: 'john21-feed',
          html:
            'Each time Peter affirms his love, Jesus says: "Feed my lambs." "Tend my sheep." "Feed my sheep."[res:intertextual-shepherd-feed] The commission is clear. Peter&apos;s past failure does not disqualify him. Rather, his love—restored, reaffirmed—qualifies him to shepherd. Leadership flows from love. A pastor is one who loves the flock.',
        },
        {
          kind: 'greek',
          id: 'john21-agape-philo',
          title: 'Agape and Philo — Divine and Brotherly Love',
          script: 'ἀγάπη / φιλέω',
          translit: '<strong>Agape & Philo</strong> · divine love and brotherly affection',
          description:
            'Jesus asks: "Agapas me?" (divine love). Peter responds: "Philo se" (I love you as a brother loves). The first time, Peter cannot claim the highest love. But by the third time, he rests in Christ&apos;s knowledge: "You know all things; you know that I love you." What matters is not the word, but the reality—he is loved and known.',
        },
        {
          kind: 'commentary',
          id: 'john21-stretch',
          html:
            '"When thou shalt be old, thou shalt stretch forth thy hands, and another shall gird thee, and carry thee whither thou wouldest not." Jesus speaks of Peter&apos;s future martyrdom—his hands stretched on a cross, his body carried away. Peter is called not only to feed, but to die. Yet the call is clear: "Follow me."',
        },
        {
          kind: 'commentary',
          id: 'john21-glorify',
          html:
            'Peter&apos;s death will glorify God.[res:bible-odyssey-peter-restoration] His willingness to die as his Lord died is the ultimate expression of love and discipleship. The call to follow carries the implication of cost. Yet it is given after restoration, after forgiveness, after the affirmation of love.',
        },
        {
          kind: 'christ',
          id: 'john21-christ-restore',
          title: 'Christ Connection — Restoration and Commission',
          html:
            'The risen Christ does not merely restore Peter to himself. He restores him to purpose, to calling, to the work he was designed to do. Failure does not end the story. Love overcomes failure. Commission follows restoration. The gospel ends not with judgment but with mission.',
        },
        {
          kind: 'carry',
          html:
            'You may have failed, denied, turned back. Yet the risen Christ calls you by name. He asks: "Do you love me?" Not with accusation, but with restoration. And as you affirm your love, He commissions you: "Feed my sheep." Your past does not disqualify you. Your love qualifies you to serve.',
        },
        {
          kind: 'reflection',
          id: 'john21-follow',
          prompt: 'How has your love for Christ been tested and refined? What is He commissioning you to do as a sign of your love? What would it mean to truly follow Him?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Cast the net on the right side of the ship, and ye shall find. Come and dine. Lovest thou me? Feed my sheep. Follow me.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'John 21 · Study Guide',
  },

  resources: [
    {
      id: 'topostext-tiberias-sea',
      kind: 'study',
      source: 'ToposText',
      label: 'Sea of Tiberias (Lake of Galilee)',
      url: 'https://topostext.org/',
      description: 'Geographical and historical context for the Tiberias region and the fishery that forms the backdrop for John 21.',
    },
    {
      id: 'intertextual-shepherd-feed',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Psalm 23 + Ezekiel 34 ↔ John 21:15–17',
      url: 'https://intertextual.bible/text/ezekiel-34/john-21.15-17',
      description: 'Peter as shepherd, commissioned by Christ, echoing the Old Testament language of pastoral care.',
    },
    {
      id: 'bible-odyssey-peter-restoration',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Peter&apos;s Restoration and Role',
      url: 'https://www.bibleodyssey.org/dictionary/peter/',
      description: 'SBL resource on Peter&apos;s recovery from denial and his commission as shepherd of the flock.',
    },
  ],

  hasHebrew: false,
};
