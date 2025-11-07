// export const categories = [
//   { id: '1', name: 'Pain Relief', icon: '💊' },
//   { id: '2', name: 'Sports Injury', icon: '⚽' },
//   { id: '3', name: 'Back Pain', icon: '🔙' },
//   { id: '4', name: 'Neck Pain', icon: '👔' },
//   { id: '5', name: 'Joint Pain', icon: '🦴' },
//   { id: '6', name: 'Post Surgery', icon: '🏥' },
// ];
export const categories = [
  { id: '1', name: 'Pain Relief', icon: 'medkit-outline', type: 'Ionicons' },
  { id: '2', name: 'Sports Injury', icon: 'run-fast', type: 'MaterialCommunityIcons' },
  { id: '3', name: 'Back Pain', icon: 'human-back', type: 'MaterialCommunityIcons' },
  { id: '4', name: 'Neck Pain', icon: 'necklace', type: 'MaterialCommunityIcons' },
  { id: '5', name: 'Joint Pain', icon: 'bone', type: 'MaterialCommunityIcons' },
  { id: '6', name: 'Post Surgery', icon: 'hospital-box-outline', type: 'MaterialCommunityIcons' },
];

// export const banners = [
//   {
//     id: '1',
//     title: 'Get 20% Off on First Session',
//     subtitle: 'Book your physiotherapy session today',
//     color: '#F88310',
//   },
//   {
//     id: '2',
//     title: 'Expert Physiotherapists',
//     subtitle: 'Certified professionals at your doorstep',
//     color: '#4CAF50',
//   },
//   {
//     id: '3',
//     title: 'Post-Surgery Care',
//     subtitle: 'Specialized recovery programs',
//     color: '#2196F3',
//   },
// ];

export const banners = [
  {
    id: '1',
    title: 'Get 20% Off on First Session',
    subtitle: 'Book your physiotherapy session today',
    color: '#F88310',
    // New: Add an image URL here
    image: 'https://i.pinimg.com/736x/ac/0e/81/ac0e817b778d4e62c3800a78d2b6ffae.jpg', 
  },
  {
    id: '2',
    title: 'Expert Physiotherapists',
    subtitle: 'Certified professionals at your doorstep',
    color: '#4CAF50',
    // New: Add an image URL here
    image: 'https://i.pinimg.com/1200x/33/7f/d0/337fd04724b4246b16f9a78978f1b71d.jpg',
  },
  {
    id: '3',
    title: 'Post-Surgery Care',
    subtitle: 'Specialized recovery programs',
    color: '#2196F3',
    // New: Add an image URL here
    image: 'https://i.pinimg.com/736x/34/fa/2c/34fa2cf6a49e33a01b87e1831e162661.jpg',
  },
];

export const services = [
  {
    id: '1',
    title: 'Lower Back Pain Relief',
    category: 'Back Pain',
    price: 799, 
    duration: '45 min',
    rating: 4.8,
    reviews: 234,
    image: 'https://i.pinimg.com/1200x/e9/08/b7/e908b70ba54bfce2e51d56963232ef07.jpg',
    description: 'Specialized treatment for chronic lower back pain using advanced techniques including manual therapy, exercises, and pain management strategies.',
    benefits: [
      'Reduces pain and inflammation',
      'Improves mobility and flexibility',
      'Prevents future injuries',
      'Personalized exercise program'
    ],
  },
  {
    id: '2',
    title: 'Sports Injury Recovery',
    category: 'Sports Injury',
    price: 1299,
    duration: '60 min',
    rating: 4.9,
    reviews: 189,
    image: 'https://i.pinimg.com/736x/fc/07/a9/fc07a9589e2bc8fc2e3f6058f5504cda.jpg',
    description: 'Complete rehabilitation program for sports-related injuries. Focuses on quick recovery and performance enhancement.',
    benefits: [
      'Faster recovery time',
      'Strengthens affected areas',
      'Improves athletic performance',
      'Injury prevention techniques'
    ],
  },
  {
    id: '3',
    title: 'Neck Pain Treatment',
    category: 'Neck Pain',
    price: 699,
    duration: '40 min',
    rating: 4.7,
    reviews: 156,
    image: 'https://i.pinimg.com/1200x/91/53/f4/9153f4e921c679cccecb46ccfd2fd3a2.jpg',
    description: 'Effective treatment for neck stiffness, cervical pain, and work-related neck issues.',
    benefits: [
      'Relieves neck stiffness',
      'Improves posture',
      'Reduces headaches',
      'Work-from-home friendly tips'
    ],
  },
  {
    id: '4',
    title: 'Knee Pain Management',
    category: 'Joint Pain',
    price: 899,
    duration: '50 min',
    rating: 4.8,
    reviews: 267,
    image: 'https://i.pinimg.com/736x/bb/c0/51/bbc051578aa737aee65cf1f3ee27845a.jpg',
    description: 'Comprehensive knee pain treatment including strengthening exercises and pain management.',
    benefits: [
      'Reduces knee pain',
      'Strengthens leg muscles',
      'Improves walking ability',
      'Arthritis management'
    ],
  },
  {
    id: '5',
    title: 'Post-Surgery Rehabilitation',
    category: 'Post Surgery',
    price: 1499,
    duration: '60 min',
    rating: 4.9,
    reviews: 145,
    image: 'https://i.pinimg.com/1200x/40/b1/ad/40b1adb6bcaff65325039c026d73cb61.jpg',
    description: 'Specialized post-operative care to ensure smooth recovery and regain full functionality.',
    benefits: [
      'Accelerated healing',
      'Scar tissue management',
      'Strength rebuilding',
      'Pain-free movement'
    ],
  },
  {
    id: '6',
    title: 'Shoulder Pain Relief',
    category: 'Joint Pain',
    price: 849,
    duration: '45 min',
    rating: 4.7,
    reviews: 198,
    image: 'https://i.pinimg.com/1200x/fe/5a/bc/fe5abcf5a52864567bc53ee99c9104e0.jpg',
    description: 'Treatment for frozen shoulder, rotator cuff injuries, and general shoulder pain.',
    benefits: [
      'Increases range of motion',
      'Reduces inflammation',
      'Strengthens shoulder muscles',
      'Daily activity guidance'
    ],
  },
];

export const offers = [
  {
    id: '1',
    title: 'First Session at ₹499',
    discount: '50% OFF',
    validTill: '31 Dec 2025',
    code: 'FIRST50',
  },
  {
    id: '2',
    title: 'Book 5 Sessions Get 1 Free',
    discount: '1 FREE',
    validTill: '15 Dec 2025',
    code: 'PACK5',
  },
  {
    id: '3',
    title: 'Sports Injury Package',
    discount: '30% OFF',
    validTill: '31 Dec 2025',
    code: 'SPORTS30',
  },
];

export const bookings = [
  // {
  //   id: '1',
  //   service: 'Lower Back Pain Relief',
  //   date: '2025-11-10',
  //   time: '10:00 AM',
  //   therapist: 'Dr. Rahul Sharma',
  //   status: 'Confirmed',
  // },
  // {
  //   id: '2',
  //   service: 'Neck Pain Treatment',
  //   date: '2025-11-08',
  //   time: '3:00 PM',
  //   therapist: 'Dr. Priya Singh',
  //   status: 'Completed',
  // },
  {
        id: '1', 
        status: 'Confirmed', 
        service: 'Sports Injury Recovery', 
        therapist: 'Dr. Sarah Johnson', 
        date: '2024-12-15T10:00:00Z', // Full date/time string
        location: 'San Francisco, CA', 
        imageUrl: 'https://i.pinimg.com/736x/bb/c0/51/bbc051578aa737aee65cf1f3ee27845a.jpg' // Replace with a real image URL
    },
    {
        id: '2', 
        status: 'Pending', 
        service: 'Spinal Care', 
        therapist: 'Dr. Michael Chen', 
        date: '2024-12-18T14:30:00Z', // Full date/time string
        location: 'New York, NY', 
        imageUrl: 'https://i.pinimg.com/1200x/fe/5a/bc/fe5abcf5a52864567bc53ee99c9104e0.jpg'
    },
    
];