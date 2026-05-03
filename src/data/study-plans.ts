export interface StudyDay {
  day: number;
  title: string;
  reading: string;
  readingLink: string;
  focus: string;
}

export interface StudyPlan {
  id: string;
  name: string;
  description: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  icon: string;
  color: string;
  days: StudyDay[];
}

export const studyPlans: StudyPlan[] = [
  {
    id: 'gospel-of-john',
    name: 'Gospel of John Deep Dive',
    description: 'Walk through the entire Gospel of John, one chapter per day. Discover who Jesus is through the eyes of the beloved disciple, exploring signs, sermons, and the heart of the gospel message.',
    duration: '21 days',
    difficulty: 'beginner',
    category: 'Gospel Study',
    icon: '\u2728',
    color: 'frost-chip text-[color:var(--vesper-gold)]',
    days: [
      { day: 1, title: 'The Word Made Flesh', reading: 'John 1', readingLink: '/bible/john/1', focus: 'Jesus is the eternal Word who became human and dwelt among us. Consider what it means that God Himself entered our world.' },
      { day: 2, title: 'Water into Wine', reading: 'John 2', readingLink: '/bible/john/2', focus: 'Jesus performs His first miracle at a wedding in Cana and cleanses the temple. Notice how He reveals His glory through transformation.' },
      { day: 3, title: 'You Must Be Born Again', reading: 'John 3', readingLink: '/bible/john/3', focus: 'Jesus teaches Nicodemus about spiritual rebirth and God\'s love for the world. Reflect on what it means to be born of the Spirit.' },
      { day: 4, title: 'Living Water', reading: 'John 4', readingLink: '/bible/john/4', focus: 'Jesus offers living water to a Samaritan woman, breaking cultural barriers. Consider how Jesus meets people where they are.' },
      { day: 5, title: 'Healing at the Pool', reading: 'John 5', readingLink: '/bible/john/5', focus: 'Jesus heals on the Sabbath and declares His unity with the Father. Reflect on the authority Jesus claims for Himself.' },
      { day: 6, title: 'The Bread of Life', reading: 'John 6', readingLink: '/bible/john/6', focus: 'After feeding five thousand, Jesus declares He is the bread of life. Consider what it means to truly be satisfied in Christ.' },
      { day: 7, title: 'Rivers of Living Water', reading: 'John 7', readingLink: '/bible/john/7', focus: 'Jesus teaches at the Feast of Tabernacles amid growing controversy. Notice how people respond differently to His message.' },
      { day: 8, title: 'The Light of the World', reading: 'John 8', readingLink: '/bible/john/8', focus: 'Jesus forgives an adulterous woman and declares He is the light of the world. Reflect on how truth and grace work together.' },
      { day: 9, title: 'Sight to the Blind', reading: 'John 9', readingLink: '/bible/john/9', focus: 'Jesus heals a man born blind, sparking debate about sin and spiritual sight. Consider what areas of your life need His light.' },
      { day: 10, title: 'The Good Shepherd', reading: 'John 10', readingLink: '/bible/john/10', focus: 'Jesus describes Himself as the Good Shepherd who lays down His life for the sheep. Reflect on what it means to know His voice.' },
      { day: 11, title: 'The Resurrection and the Life', reading: 'John 11', readingLink: '/bible/john/11', focus: 'Jesus raises Lazarus from the dead and declares power over death itself. Consider the depth of Jesus\' compassion and authority.' },
      { day: 12, title: 'Anointed for Burial', reading: 'John 12', readingLink: '/bible/john/12', focus: 'Mary anoints Jesus\' feet and He enters Jerusalem triumphantly. Notice how this chapter turns toward the cross.' },
      { day: 13, title: 'The Servant King', reading: 'John 13', readingLink: '/bible/john/13', focus: 'Jesus washes His disciples\' feet and gives the new commandment to love one another. Reflect on what servant leadership looks like.' },
      { day: 14, title: 'The Way, Truth, and Life', reading: 'John 14', readingLink: '/bible/john/14', focus: 'Jesus comforts His disciples with promises of the Father\'s house and the coming Holy Spirit. Let His peace settle into your heart.' },
      { day: 15, title: 'The True Vine', reading: 'John 15', readingLink: '/bible/john/15', focus: 'Jesus teaches about abiding in Him as branches on a vine. Consider what it means to remain connected to Christ and bear fruit.' },
      { day: 16, title: 'The Helper Will Come', reading: 'John 16', readingLink: '/bible/john/16', focus: 'Jesus prepares the disciples for His departure and the coming of the Holy Spirit. Reflect on how grief can be turned to joy.' },
      { day: 17, title: 'Jesus Prays for Us', reading: 'John 17', readingLink: '/bible/john/17', focus: 'Jesus prays for Himself, His disciples, and all future believers. Marvel at the intimacy of this prayer and that He prays for you.' },
      { day: 18, title: 'The Arrest and Trial', reading: 'John 18', readingLink: '/bible/john/18', focus: 'Jesus is betrayed, arrested, and brought before Pilate. Notice how Jesus remains in control even as events seem to spiral.' },
      { day: 19, title: 'The Crucifixion', reading: 'John 19', readingLink: '/bible/john/19', focus: 'Jesus is crucified and buried. Meditate on the cost of love and the words Jesus spoke from the cross: "It is finished."' },
      { day: 20, title: 'The Resurrection', reading: 'John 20', readingLink: '/bible/john/20', focus: 'Jesus rises from the dead and appears to Mary and the disciples. Let the reality of the resurrection fill you with hope.' },
      { day: 21, title: 'Follow Me', reading: 'John 21', readingLink: '/bible/john/21', focus: 'The risen Jesus restores Peter and commissions the disciples. Hear His invitation to follow Him with renewed purpose.' },
    ],
  },
  {
    id: 'genesis-foundations',
    name: 'Genesis: Foundations of Faith',
    description: 'Explore the first twelve chapters of Genesis and the foundations of everything. From creation to the call of Abraham, discover the origins of God\'s relationship with humanity and His plan of redemption.',
    duration: '12 days',
    difficulty: 'beginner',
    category: 'Old Testament',
    icon: '\uD83C\uDF3F',
    color: 'bg-emerald-50',
    days: [
      { day: 1, title: 'In the Beginning', reading: 'Genesis 1', readingLink: '/bible/genesis/1', focus: 'God creates the heavens and the earth with purpose and order. Reflect on what it means to be made in the image of God.' },
      { day: 2, title: 'The Garden of Eden', reading: 'Genesis 2', readingLink: '/bible/genesis/2', focus: 'God forms man, plants a garden, and establishes relationship. Consider the intimacy God designed between Himself and humanity.' },
      { day: 3, title: 'The Fall', reading: 'Genesis 3', readingLink: '/bible/genesis/3', focus: 'Sin enters the world through disobedience, but God provides a promise of redemption. Notice God\'s grace even in judgment.' },
      { day: 4, title: 'Cain and Abel', reading: 'Genesis 4', readingLink: '/bible/genesis/4', focus: 'The first murder reveals sin\'s spreading consequences. Reflect on how jealousy and anger can take root in the human heart.' },
      { day: 5, title: 'The Line of Adam', reading: 'Genesis 5', readingLink: '/bible/genesis/5', focus: 'A genealogy from Adam to Noah traces God\'s faithfulness across generations. Notice how Enoch walked with God and was taken.' },
      { day: 6, title: 'Corruption and Grace', reading: 'Genesis 6', readingLink: '/bible/genesis/6', focus: 'Wickedness fills the earth, but Noah finds favor with God. Consider what it means to walk faithfully when the world turns away.' },
      { day: 7, title: 'The Flood', reading: 'Genesis 7', readingLink: '/bible/genesis/7', focus: 'God sends the flood as judgment on sin but preserves Noah and his family. Reflect on God\'s justice and His provision of rescue.' },
      { day: 8, title: 'A New Beginning', reading: 'Genesis 8', readingLink: '/bible/genesis/8', focus: 'The waters recede and Noah offers a sacrifice of thanksgiving. Consider the theme of new beginnings and God\'s patience.' },
      { day: 9, title: 'The Covenant with Noah', reading: 'Genesis 9', readingLink: '/bible/genesis/9', focus: 'God establishes a covenant with Noah and sets the rainbow as a sign. Reflect on God\'s promises and faithfulness.' },
      { day: 10, title: 'The Table of Nations', reading: 'Genesis 10', readingLink: '/bible/genesis/10', focus: 'The descendants of Noah spread across the earth. See how God\'s plan encompasses all peoples and nations.' },
      { day: 11, title: 'The Tower of Babel', reading: 'Genesis 11', readingLink: '/bible/genesis/11', focus: 'Humanity\'s pride leads to confusion at Babel. Consider how self-reliance apart from God leads to scattering rather than unity.' },
      { day: 12, title: 'The Call of Abraham', reading: 'Genesis 12', readingLink: '/bible/genesis/12', focus: 'God calls Abram to leave his homeland with a promise of blessing. Reflect on what it means to step out in faith toward the unknown.' },
    ],
  },
  {
    id: 'who-is-jesus',
    name: 'Who Is Jesus?',
    description: 'A focused seven-day journey through key passages in John\'s Gospel that reveal who Jesus truly is. Each day highlights a different facet of His identity, from eternal Word to risen Lord.',
    duration: '7 days',
    difficulty: 'beginner',
    category: 'Topical',
    icon: '\u2720',
    color: 'bg-blue-50',
    days: [
      { day: 1, title: 'The Word Made Flesh', reading: 'John 1', readingLink: '/bible/john/1', focus: 'John introduces Jesus as the eternal Word who was with God and was God. Consider the stunning claim that the Creator became one of us.' },
      { day: 2, title: 'God So Loved the World', reading: 'John 3', readingLink: '/bible/john/3', focus: 'Jesus reveals the heart of the gospel to Nicodemus. Reflect on the depth of God\'s love and the gift of eternal life through His Son.' },
      { day: 3, title: 'The Good Shepherd', reading: 'John 10', readingLink: '/bible/john/10', focus: 'Jesus declares He is the Good Shepherd who knows His sheep and lays down His life for them. Consider the personal nature of His care.' },
      { day: 4, title: 'The Way, Truth, and Life', reading: 'John 14', readingLink: '/bible/john/14', focus: 'Jesus tells His disciples that He is the only way to the Father. Reflect on the exclusivity and the comfort of this promise.' },
      { day: 5, title: 'The True Vine', reading: 'John 15', readingLink: '/bible/john/15', focus: 'Jesus teaches that apart from Him we can do nothing. Consider what it looks like to abide in Christ and bear lasting fruit.' },
      { day: 6, title: 'The Crucifixion', reading: 'John 19', readingLink: '/bible/john/19', focus: 'Jesus willingly goes to the cross and declares "It is finished." Meditate on the sacrifice that purchased your redemption.' },
      { day: 7, title: 'The Resurrection', reading: 'John 20', readingLink: '/bible/john/20', focus: 'Jesus rises from the dead, conquering sin and death. Let Thomas\'s declaration become your own: "My Lord and my God!"' },
    ],
  },
  {
    id: 'psalms-of-comfort',
    name: 'Psalms of Comfort',
    description: 'Six beloved Psalms that speak to the soul in every season. Whether you need encouragement, protection, or praise, these passages remind us of God\'s steadfast love and faithfulness.',
    duration: '6 days',
    difficulty: 'beginner',
    category: 'Devotional',
    icon: '\uD83D\uDC96',
    color: 'bg-rose-50',
    days: [
      { day: 1, title: 'The Blessed Life', reading: 'Psalm 1', readingLink: '/bible/psalms/1', focus: 'The righteous person delights in God\'s Word and prospers like a tree by streams of water. Reflect on what nourishes your spiritual life.' },
      { day: 2, title: 'The Lord Is My Shepherd', reading: 'Psalm 23', readingLink: '/bible/psalms/23', focus: 'David paints a picture of God\'s tender care and provision. Rest in the assurance that you shall not want with the Lord as your shepherd.' },
      { day: 3, title: 'God Is Our Refuge', reading: 'Psalm 46', readingLink: '/bible/psalms/46', focus: 'Even when the earth gives way, God is our refuge and strength. Let the command to "be still and know" quiet your anxious heart.' },
      { day: 4, title: 'Under His Wings', reading: 'Psalm 91', readingLink: '/bible/psalms/91', focus: 'God promises shelter and protection to those who dwell in His presence. Consider the safety found in trusting the Most High.' },
      { day: 5, title: 'Delight in God\'s Word', reading: 'Psalm 119', readingLink: '/bible/psalms/119', focus: 'The longest chapter in the Bible celebrates the beauty and power of God\'s Word. Let it renew your love for Scripture.' },
      { day: 6, title: 'Fearfully and Wonderfully Made', reading: 'Psalm 139', readingLink: '/bible/psalms/139', focus: 'God knows you completely and formed you with intention. Praise Him for the wonder of how He made you and how deeply He knows you.' },
    ],
  },
];

export function getStudyPlanById(id: string): StudyPlan | undefined {
  return studyPlans.find((plan) => plan.id === id);
}

export function getAllStudyPlans(): StudyPlan[] {
  return studyPlans;
}
