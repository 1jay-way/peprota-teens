// ===== BIBLE STUDY DATABASE =====
const studyDatabase = {
    characters: {
        David: {
            title: "David - Man After God's Heart",
            keyVerse: "1 Samuel 13:14 - 'But now your kingdom will not endure; the Lord has sought out a man after his own heart and appointed him leader of his people.'",
            readingPassage: "1 Samuel 17:1-50 (David and Goliath), Psalm 23 (The Shepherd's Psalm)",
            mainLesson: "David's life teaches us about courage, faith, and repentance. Despite his failures, David maintained a heart devoted to God. He defeated Goliath through faith rather than strength, and he sought God's forgiveness after his mistakes.",
            reflection: "What does it mean to be a person 'after God's heart'? How can you cultivate a heart that seeks God's will even when you make mistakes?",
            memoryVerses: [
                { verse: "1 Samuel 13:14", text: "But now your kingdom will not endure; the Lord has sought out a man after his own heart." },
                { verse: "Psalm 23:1", text: "The Lord is my shepherd, I shall not be in want." }
            ]
        },
        Joseph: {
            title: "Joseph - From Rejection to Redemption",
            keyVerse: "Genesis 50:20 - 'You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives.'",
            readingPassage: "Genesis 37, 39-50 (Joseph's complete story)",
            mainLesson: "Joseph's journey shows us that God works through difficult circumstances. Rejected by his brothers, sold into slavery, yet God used Joseph to save Egypt and his own family. His story demonstrates patience, faithfulness, and forgiveness.",
            reflection: "How did Joseph maintain his faith through betrayal and hardship? What can you learn about trusting God's plan even when life seems unfair?",
            memoryVerses: [
                { verse: "Genesis 50:20", text: "You intended to harm me, but God intended it for good." },
                { verse: "Psalm 37:5", text: "Commit your way to the Lord; trust in him and he will do this." }
            ]
        },
        Moses: {
            title: "Moses - God's Faithful Leader",
            keyVerse: "Exodus 3:11-12 - 'Moses said to God, \"Who am I that I should go to Pharaoh and bring the Israelites out of Egypt?\" And God said, \"I will be with you.\"'",
            readingPassage: "Exodus 1-20 (God calls Moses and leads Israel)",
            mainLesson: "Moses learned that our inadequacies are no obstacle to God's plan. Despite his doubts and hesitations, Moses became one of history's greatest leaders. His life shows us that God equips those He calls and works through our weakness.",
            reflection: "What fears or doubts did Moses have about God's calling? How did God strengthen him? What is God calling you to do despite your fears?",
            memoryVerses: [
                { verse: "Exodus 3:12", text: "And God said, 'I will be with you.'" },
                { verse: "Philippians 4:13", text: "I can do all this through him who gives me strength." }
            ]
        },
        Esther: {
            title: "Esther - Courage for Such a Time as This",
            keyVerse: "Esther 4:14 - 'For if you remain silent at this time, relief and deliverance for the Jews will arise from another place... And who knows but that you have come to your royal position for such a time as this?'",
            readingPassage: "The Book of Esther",
            mainLesson: "Esther's story teaches us about courage, divine providence, and accepting responsibility. Though her name never appears, God worked through her to save the Jewish people. She risked everything to do what was right.",
            reflection: "How did Esther overcome her fear to take action? What responsibility has God placed in your life for 'such a time as this'?",
            memoryVerses: [
                { verse: "Esther 4:14", text: "And who knows but that you have come to your royal position for such a time as this?" },
                { verse: "Proverbs 27:12", text: "The prudent see danger and take refuge, but the simple keep going and pay the penalty." }
            ]
        },
        Paul: {
            title: "Paul - Transformed by Grace",
            keyVerse: "2 Corinthians 5:17 - 'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!'",
            readingPassage: "Acts 9:1-31 (Paul's conversion), 2 Corinthians 12:1-10 (Paul's weakness)",
            mainLesson: "Paul's transformation from persecutor to apostle is a powerful testimony of God's grace. He experienced radical conversion and devoted his life to spreading the Gospel despite suffering. His letters teach us about faith, love, and perseverance.",
            reflection: "How did Paul's encounter with Christ change his entire life direction? What areas of your life need transformation through Christ?",
            memoryVerses: [
                { verse: "2 Corinthians 5:17", text: "If anyone is in Christ, the new creation has come." },
                { verse: "Philippians 3:7-8", text: "But whatever were gains to me I now consider loss for the sake of Christ." }
            ]
        }
    },
    teachings: {
        Faith: {
            title: "Faith - Trust in God's Promises",
            keyVerse: "Hebrews 11:1 - 'Now faith is confidence in what we hope for and assurance about what we do not see.'",
            readingPassage: "Hebrews 11:1-40 (The hall of faith), Romans 10:17 (Faith comes by hearing)",
            mainLesson: "Faith is not blind belief but confident trust in God's character and promises. Biblical faith acts on what God has said, even when circumstances suggest otherwise. Throughout Scripture, faith pleases God and opens doors of blessing.",
            reflection: "What does true faith mean to you? In what areas of your life do you struggle to trust God? How can you grow your faith?",
            memoryVerses: [
                { verse: "Hebrews 11:6", text: "Without faith it is impossible to please God." },
                { verse: "Romans 3:28", text: "We maintain that a person is justified by faith apart from the works of the law." }
            ]
        },
        Prayer: {
            title: "Prayer - Communicating with God",
            keyVerse: "1 Thessalonians 5:17 - 'Pray without ceasing.'",
            readingPassage: "Matthew 6:5-15 (The Lord's Prayer), Philippians 4:4-7 (Prayer and peace)",
            mainLesson: "Prayer is our direct line of communication with God. It's not about using the right words but coming with a sincere heart. Prayer changes us, opens our eyes to God's will, and positions us to receive His blessings.",
            reflection: "How often do you pray? What barriers prevent you from praying more? How can you develop a stronger prayer life?",
            memoryVerses: [
                { verse: "Philippians 4:6", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God." },
                { verse: "James 4:2", text: "You do not have because you do not ask God." }
            ]
        },
        Forgiveness: {
            title: "Forgiveness - Releasing Bitterness",
            keyVerse: "Ephesians 4:32 - 'Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.'",
            readingPassage: "Matthew 18:21-35 (The parable of the unforgiving servant), Colossians 3:12-14",
            mainLesson: "Forgiveness is a choice that releases us from bitterness and frees us to move forward. Christ's example of forgiveness should inspire us to forgive others, not because they deserve it, but because we have been forgiven much.",
            reflection: "Who do you need to forgive? What's holding you back? How can understanding God's forgiveness help you forgive others?",
            memoryVerses: [
                { verse: "Ephesians 4:32", text: "Forgive each other, just as in Christ God forgave you." },
                { verse: "Matthew 6:14-15", text: "For if you forgive other people when they sin against you, your heavenly Father will also forgive you." }
            ]
        },
        Obedience: {
            title: "Obedience - Following God's Will",
            keyVerse: "1 Samuel 15:22 - 'To obey is better than sacrifice, and to heed is better than the fat of rams.'",
            readingPassage: "John 14:15-24 (Jesus on obedience), 1 John 2:3-6",
            mainLesson: "Obedience is the outward expression of our love for God. It's not burdensome legalism but joyful alignment with God's will. Obedience brings blessings, protection, and peace in our lives.",
            reflection: "In what areas do you struggle with obedience to God? What promises does Scripture give to those who obey?",
            memoryVerses: [
                { verse: "John 14:15", text: "If you love me, keep my commands." },
                { verse: "Deuteronomy 28:1-2", text: "If you fully obey the Lord your God and carefully follow all his commands... all these blessings will come on you." }
            ]
        },
        Patience: {
            title: "Patience - Waiting on God's Timing",
            keyVerse: "Romans 15:4-5 - 'For everything that was written in the past was written to teach us, so that through the endurance taught in the Scriptures and the encouragement they provide we might have hope... May the God who gives endurance and encouragement give you the same attitude of mind toward each other.'",
            readingPassage: "James 1:2-4 (Testing produces patience), Psalm 27:14 (Wait for the Lord)",
            mainLesson: "Patience is not passivity but active trust in God's timing. God's delays are not denials. Through waiting, our faith deepens and our character is refined. Patience enables us to see God's perfect purposes unfold.",
            reflection: "What are you waiting for from God right now? How can you develop greater patience? What can you learn during seasons of waiting?",
            memoryVerses: [
                { verse: "Psalm 27:14", text: "Wait for the Lord; be strong and take heart and wait for the Lord." },
                { verse: "James 1:3-4", text: "The testing of your faith produces perseverance. Let perseverance finish its work so that you may be mature and complete." }
            ]
        }
    },
    challenges: {
        Purpose: {
            title: "Finding Your Purpose in Christ",
            keyVerse: "Jeremiah 29:11 - 'For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.'",
            readingPassage: "Proverbs 19:21 (God's purpose), Ephesians 2:10 (Created for good works)",
            mainLesson: "Your purpose isn't something you create but something you discover in relationship with God. God has uniquely designed you with specific gifts for His kingdom. Finding your purpose starts by seeking God first.",
            reflection: "What gifts and talents has God given you? How can you use them for His kingdom? What does your unique purpose look like?",
            memoryVerses: [
                { verse: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the Lord." },
                { verse: "Ephesians 2:10", text: "For we are God's handiwork, created in Christ Jesus to do good works." }
            ]
        },
        'Peer Pressure': {
            title: "Resisting Peer Pressure",
            keyVerse: "2 Timothy 2:22 - 'Flee the evil desires of youth and pursue righteousness, faith, love and peace, along with those who call on the Lord out of a pure heart.'",
            readingPassage: "Romans 12:1-2 (Don't conform), 1 Corinthians 15:33 (Bad company)",
            mainLesson: "Peer pressure is real, but you have the power to resist it through God's strength. Choosing friends who share your values and standing firm in your beliefs protects you from compromise. Your identity in Christ is stronger than others' opinions.",
            reflection: "What peer pressures do you face? How can you choose friends who strengthen your faith? What does it mean to be 'in the world but not of the world'?",
            memoryVerses: [
                { verse: "Romans 12:2", text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind." },
                { verse: "Proverbs 22:24-25", text: "Do not make friends with a hot-tempered person, do not associate with one easily angered." }
            ]
        },
        'Identity in Christ': {
            title: "Understanding Your Identity in Christ",
            keyVerse: "2 Corinthians 5:17 - 'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!'",
            readingPassage: "Ephesians 1:3-14 (Your identity and inheritance), Colossians 3:1-4",
            mainLesson: "Your identity is not determined by what others think, what you do, or how you look. In Christ, you are loved, forgiven, chosen, and destined for greatness. This identity is your foundation for everything else.",
            reflection: "How do you currently identify yourself? How has Christ changed your identity? Where do you struggle to accept your worth in Christ?",
            memoryVerses: [
                { verse: "2 Corinthians 5:17", text: "If anyone is in Christ, the new creation has come." },
                { verse: "1 John 3:1", text: "See what great love the Father has lavished on us, that we should be called children of God!" }
            ]
        },
        Discipline: {
            title: "Spiritual Discipline and Self-Control",
            keyVerse: "1 Timothy 4:7 - 'Rather, train yourself to be godly. For physical training is of some value, but godliness has value for all things, holding promise for both the present life and the life to come.'",
            readingPassage: "Proverbs 25:28 (Lack of self-control), Galatians 5:22-23 (Fruits of the Spirit)",
            mainLesson: "Discipline is choosing to do what's right even when it's difficult. Spiritual discipline strengthens your relationship with God and helps you resist temptation. Like physical training, spiritual discipline requires consistency and practice.",
            reflection: "Where do you lack discipline? What spiritual disciplines could strengthen your faith? How can you start small and build good habits?",
            memoryVerses: [
                { verse: "1 Corinthians 9:25", text: "Everyone who competes in the games goes into strict training." },
                { verse: "2 Timothy 1:7", text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline." }
            ]
        },
        'Social Media': {
            title: "Navigating Social Media as a Christian",
            keyVerse: "Proverbs 22:3 - 'The prudent see danger and take refuge, but the simple keep going and pay the penalty.'",
            readingPassage: "Proverbs 23:23 (Guard your heart), Philippians 4:8 (Think on good things)",
            mainLesson: "Social media can be a tool for good, but it also presents dangers like comparison, pride, gossip, and addiction. As a Christian teen, be intentional about what you consume and share. Guard your mind and heart in this digital age.",
            reflection: "How much time do you spend on social media? Does it strengthen or weaken your faith? What boundaries could you set?",
            memoryVerses: [
                { verse: "Philippians 4:8", text: "Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable—if anything is excellent or praiseworthy—think about such things." },
                { verse: "Proverbs 4:23", text: "Above all else, guard your heart, for everything you do flows from it." }
            ]
        }
    },
    books: {
        Genesis: {
            title: "Genesis - God's Creation and Covenant",
            keyVerse: "Genesis 1:1 - 'In the beginning God created the heavens and the earth.'",
            readingPassage: "Genesis 1-3 (Creation and Fall), Genesis 12 (God's covenant with Abraham)",
            mainLesson: "Genesis establishes foundational truths: God created all things, humans are made in God's image, sin enters the world with consequences, and God's grace and covenant provide hope for redemption. Genesis sets the stage for all of Scripture.",
            reflection: "How does understanding creation affect your view of God? What does the Fall teach us about sin and its consequences? How do God's covenants give us hope?",
            memoryVerses: [
                { verse: "Genesis 1:27", text: "So God created mankind in his own image, in the image of God he created them; male and female he created them." },
                { verse: "Genesis 3:15", text: "And I will put enmity between you and the woman, and between your offspring and hers." }
            ]
        },
        Psalms: {
            title: "Psalms - The Songs of the Heart",
            keyVerse: "Psalm 23:1-3 - 'The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.'",
            readingPassage: "Psalm 23 (The Shepherd), Psalm 42 (Thirsting for God), Psalm 139 (God's intimate knowledge)",
            mainLesson: "Psalms teach us to express our full range of emotions to God—from joy to despair, from praise to lament. They model honest prayer and worship. Psalms remind us of God's faithfulness, protection, and loving care.",
            reflection: "Which Psalm speaks most to your current situation? How can you use Psalms as a prayer guide? What emotions do you need to express to God?",
            memoryVerses: [
                { verse: "Psalm 23:1", text: "The Lord is my shepherd, I lack nothing." },
                { verse: "Psalm 139:14", text: "I praise you because I am fearfully and wonderfully made." }
            ]
        },
        John: {
            title: "John - The Gospel of Jesus' Divinity",
            keyVerse: "John 1:1-3 - 'In the beginning was the Word, and the Word was with God, and the Word was God. He was with God in the beginning. Through him all things were made.'",
            readingPassage: "John 1 (Jesus the Word), John 3:16-17 (God's love), John 15:1-8 (The vine and branches)",
            mainLesson: "John emphasizes Jesus as God incarnate. It shows Jesus' signs (miracles), teachings, and the purpose of belief. John reveals Jesus' intimate relationship with the Father and His love for believers. Believing in Jesus is the central theme.",
            reflection: "What does it mean that Jesus is God's Word? How do John's 'I am' statements deepen your understanding of Jesus? What is your personal response to Jesus?",
            memoryVerses: [
                { verse: "John 3:16", text: "For God so loved the world that he gave his one and only Son." },
                { verse: "John 14:6", text: "I am the way and the truth and the life. No one comes to the Father except through me." }
            ]
        },
        Romans: {
            title: "Romans - Justification by Faith",
            keyVerse: "Romans 3:23-24 - 'for all have sinned and fall short of the glory of God, and all are justified freely by his grace through the redemption that came by Christ Jesus.'",
            readingPassage: "Romans 3:21-31 (Justification), Romans 6 (Freedom from sin), Romans 12:1-2 (Living sacrifice)",
            mainLesson: "Romans systematically explains how salvation works through faith in Christ. It covers sin, grace, justification, and transformed living. Romans helps us understand that we cannot earn salvation but receive it as a gift through faith.",
            reflection: "How does understanding 'justification by faith' change your perspective on salvation? What does 'living as a living sacrifice' mean for your daily life?",
            memoryVerses: [
                { verse: "Romans 6:23", text: "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord." },
                { verse: "Romans 12:1-2", text: "Therefore, I urge you, brothers and sisters, in view of God's mercy, to offer your bodies as a living sacrifice, holy and pleasing to God." }
            ]
        },
        '1 John': {
            title: "1 John - Love and Assurance",
            keyVerse: "1 John 4:7-8 - 'Dear friends, let us love one another, for love comes from God. Everyone who loves has been born of God and knows God. Whoever does not love does not know God, because God is love.'",
            readingPassage: "1 John 1:5-9 (Light and confession), 1 John 4:7-21 (Love one another)",
            mainLesson: "1 John emphasizes three themes: assurance of salvation, obedience as evidence of faith, and love for God and others. John writes to believers who are confused about their faith, providing reassurance and clear indicators of genuine Christianity.",
            reflection: "What assurance does 1 John give about knowing you're saved? How is love the 'litmus test' of genuine faith? How can you grow in love for God and others?",
            memoryVerses: [
                { verse: "1 John 1:9", text: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness." },
                { verse: "1 John 4:9", text: "This is how God showed his love among us: He sent his one and only Son into the world that we might live through him." }
            ]
        }
    }
};

// ===== MEMORY VERSES BANK =====
const memoryVersesBank = [
    { verse: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope." },
    { verse: "Joshua 1:9", text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go." },
    { verse: "Philippians 4:13", text: "I can do all this through him who gives me strength." },
    { verse: "Proverbs 3:5-6", text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." },
    { verse: "2 Timothy 1:7", text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline." },
    { verse: "Philippians 4:8", text: "Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable—think about such things." },
    { verse: "John 3:16", text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." }
];

// ===== ACCORDION FUNCTIONALITY =====
function toggleAccordion(button) {
    const item = button.parentElement;
    const content = item.querySelector('.accordion-content');
    const allItems = document.querySelectorAll('.accordion-item');
    
    // Close all other items
    allItems.forEach(i => {
        if (i !== item) {
            i.querySelector('.accordion-header').classList.remove('active');
            i.querySelector('.accordion-content').classList.remove('active');
        }
    });
    
    // Toggle current item
    button.classList.toggle('active');
    content.classList.toggle('active');
}

// ===== SELECT TOPIC FUNCTIONALITY =====
function selectTopic(topic, category) {
    const data = studyDatabase[category][topic];
    
    // Update study details
    document.getElementById('study-title').textContent = data.title;
    document.getElementById('key-verse').textContent = data.keyVerse;
    document.getElementById('reading-passage').textContent = data.readingPassage;
    document.getElementById('main-lesson').textContent = data.mainLesson;
    document.getElementById('reflection').textContent = data.reflection;
    
    // Show study details, hide welcome
    document.getElementById('welcome-message').style.display = 'none';
    document.getElementById('study-details').classList.remove('hidden');
    document.getElementById('study-details').classList.add('active');
    
    // Update active button styling
    document.querySelectorAll('.topic-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update progress
    updateProgress();
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// ===== SAVE PRAYER =====
function savePrayer() {
    const prayerText = document.getElementById('prayer-notes').value;
    if (prayerText.trim()) {
        // Save to localStorage
        const prayers = JSON.parse(localStorage.getItem('savedPrayers')) || [];
        prayers.push({
            date: new Date().toLocaleString(),
            prayer: prayerText,
            topic: document.getElementById('study-title').textContent
        });
        localStorage.setItem('savedPrayers', JSON.stringify(prayers));
        
        alert('Prayer saved! 🙏');
        document.getElementById('prayer-notes').value = '';
    }
}

// ===== REFRESH MEMORY VERSE =====
function refreshMemoryVerse() {
    const randomIndex = Math.floor(Math.random() * memoryVersesBank.length);
    const verse = memoryVersesBank[randomIndex];
    
    document.getElementById('memory-verse-text').textContent = `"${verse.text}"`;
    document.getElementById('memory-verse-ref').textContent = verse.verse;
    
    // Add animation
    document.querySelector('.memory-verse-card').style.animation = 'none';
    setTimeout(() => {
        document.querySelector('.memory-verse-card').style.animation = 'fadeIn 0.5s ease';
    }, 10);
}

// ===== MARK MEMORY VERSE AS LEARNED =====
function markMemoryVerseLearned() {
    const learnedVerses = JSON.parse(localStorage.getItem('learnedVerses')) || [];
    const currentVerse = document.getElementById('memory-verse-ref').textContent;
    
    if (!learnedVerses.includes(currentVerse)) {
        learnedVerses.push(currentVerse);
        localStorage.setItem('learnedVerses', JSON.stringify(learnedVerses));
        alert('Great job! You marked a memory verse as learned! 🎉');
    } else {
        alert('You already marked this verse as learned!');
    }
}

// ===== UPDATE PROGRESS =====
function updateProgress() {
    // Get completed studies from localStorage
    const completedStudies = JSON.parse(localStorage.getItem('completedStudies')) || [];
    const totalTopics = Object.values(studyDatabase).reduce((sum, cat) => sum + Object.keys(cat).length, 0);
    
    // Calculate overall progress
    const overallPercentage = Math.round((completedStudies.length / totalTopics) * 100);
    
    // Update progress bars
    document.getElementById('overall-percentage').textContent = overallPercentage + '%';
    document.getElementById('overall-progress').style.width = overallPercentage + '%';
    
    // Current study progress (simulate to 75% until completion)
    document.getElementById('current-percentage').textContent = '75%';
    document.getElementById('current-progress').style.width = '75%';
    
    // Update completed count
    document.getElementById('completed-count').textContent = completedStudies.length + ' studies completed';
}

// ===== MARK STUDY AS COMPLETED =====
function markStudyCompleted() {
    const title = document.getElementById('study-title').textContent;
    const completedStudies = JSON.parse(localStorage.getItem('completedStudies')) || [];
    
    if (!completedStudies.includes(title)) {
        completedStudies.push(title);
        localStorage.setItem('completedStudies', JSON.stringify(completedStudies));
        updateProgress();
        alert('Study marked as completed! 🎉');
    }
}

// ===== INITIALIZE PAGE =====
document.addEventListener('DOMContentLoaded', function() {
    // Set random memory verse on page load
    refreshMemoryVerse();
    
    // Initialize progress
    updateProgress();
    
    // Set up memory verse refresh every 7 times a day (approximately every 2 hours for a 12-hour day)
    // For demo purposes, you can adjust this interval
    setInterval(refreshMemoryVerse, 2 * 60 * 60 * 1000); // Every 2 hours
});

// ===== RESPONSIVE NAVIGATION TOGGLE =====
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}
