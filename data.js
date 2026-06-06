// IELTS Practice Data — Band 7.0 level content
// Reading, Listening, Writing, Speaking exercises

const IELTS_DATA = {
    reading: [
        {
            id: "r1",
            title: "The Impact of Social Media on Youth",
            passage: `Social media has fundamentally transformed how young people communicate, learn, and perceive the world around them. While platforms like Instagram, TikTok, and Twitter offer unprecedented opportunities for connection and self-expression, researchers have raised concerns about their effects on mental health, attention spans, and academic performance.

A 2024 study by the University of Oxford found that adolescents who spent more than three hours daily on social media were twice as likely to report symptoms of anxiety and depression compared to those who limited their usage to under one hour. However, the relationship is not straightforward — the study also noted that moderate social media use was associated with higher levels of social support and community belonging.

Dr. Sarah Chen, a developmental psychologist at Stanford University, argues that the issue is not social media itself but rather the displacement of other activities. "When screen time replaces sleep, physical activity, or face-to-face interaction, we see negative outcomes," she explains. "But when it supplements an already healthy lifestyle, the effects can be neutral or even positive."

Educational institutions have responded with varying approaches. Some schools have implemented complete phone bans during school hours, while others have integrated social media literacy into their curricula. Finland's education system, often cited as a global model, has adopted the latter approach, teaching students to critically evaluate online content from primary school onwards.

The debate extends to the platforms themselves. In response to growing regulatory pressure, several major social media companies have introduced features designed to limit usage among younger users, including screen time reminders, content filters, and restricted messaging for accounts belonging to minors. Critics argue these measures are insufficient and largely cosmetic, pointing to internal documents suggesting companies prioritize engagement metrics over user wellbeing.`,
            questions: [
                {
                    q: "According to the Oxford study, adolescents spending over 3 hours daily on social media were:",
                    options: ["Three times more likely to report anxiety", "Twice as likely to report anxiety and depression", "Equally likely to report mental health issues", "Less likely to seek social support"],
                    answer: 1
                },
                {
                    q: "Dr. Sarah Chen's main argument is that:",
                    options: ["Social media is inherently harmful to youth", "The problem is what social media replaces, not social media itself", "Schools should ban all phone usage", "Moderate use has no effects whatsoever"],
                    answer: 1
                },
                {
                    q: "Finland's approach to social media in education involves:",
                    options: ["Complete bans on social media in schools", "Teaching critical evaluation of online content from primary school", "Allowing unrestricted access during school hours", "Partnering with social media companies for content creation"],
                    answer: 1
                },
                {
                    q: "Critics of social media companies' safety measures argue that:",
                    options: ["The measures are too restrictive for older teenagers", "Companies prioritize engagement over user wellbeing", "Screen time reminders are effective but insufficient", "Content filters block educational material"],
                    answer: 1
                }
            ]
        },
        {
            id: "r2",
            title: "Urban Vertical Farming",
            passage: `Vertical farming — the practice of growing crops in vertically stacked layers within controlled indoor environments — has emerged as a potential solution to several pressing agricultural challenges. As the global population approaches 10 billion by 2050, with an increasing proportion living in urban areas, traditional farming methods face mounting pressure from land scarcity, water shortages, and climate unpredictability.

The technology behind vertical farms relies on hydroponics or aeroponics systems, where plants grow without soil, receiving nutrients through water solutions or mist. LED lighting, calibrated to specific wavelengths that optimize photosynthesis, replaces sunlight. Climate control systems maintain ideal temperature and humidity regardless of external weather conditions.

Proponents highlight several advantages. Vertical farms can produce crops year-round, independent of seasons or weather events. They use up to 95% less water than conventional agriculture through closed-loop recycling systems. Pesticide use is virtually eliminated in the sealed environment, and transportation costs decrease dramatically when farms are located within or near the cities they serve.

However, significant challenges remain. Energy consumption is perhaps the most critical concern — the electricity required for lighting and climate control makes vertical farming considerably more expensive per unit of food produced than traditional methods. A 2025 analysis by the International Food Policy Research Institute estimated that vertical farm produce costs 30-80% more than conventionally grown equivalents, depending on the crop.

The range of crops suitable for vertical farming is also limited. Leafy greens, herbs, and strawberries thrive in these environments, but staple crops like wheat, rice, and corn remain economically unfeasible due to their lower value-to-space ratio. This limitation means vertical farming cannot replace traditional agriculture but rather complement it.

Despite these constraints, investment in the sector has grown exponentially. Global vertical farming market revenue reached $7.3 billion in 2025, with projections suggesting $35 billion by 2032. Major players include AeroFarms, Plenty, and Bowery Farming in the United States, alongside significant operations in Japan, Singapore, and the United Arab Emirates.`,
            questions: [
                {
                    q: "Vertical farms use up to what percentage less water than conventional agriculture?",
                    options: ["75%", "85%", "95%", "99%"],
                    answer: 2
                },
                {
                    q: "The passage identifies the most critical challenge for vertical farming as:",
                    options: ["Limited crop variety", "High energy consumption and cost", "Lack of investor interest", "Water recycling inefficiency"],
                    answer: 1
                },
                {
                    q: "Which statement about crop suitability is TRUE according to the passage?",
                    options: ["All crops can be grown vertically with current technology", "Staple crops like wheat are economically feasible", "Leafy greens and herbs are most suitable", "Fruit trees are the primary focus of vertical farms"],
                    answer: 2
                },
                {
                    q: "The global vertical farming market is projected to reach by 2032:",
                    options: ["$7.3 billion", "$15 billion", "$25 billion", "$35 billion"],
                    answer: 3
                }
            ]
        },
        {
            id: "r3",
            title: "The Psychology of Decision Fatigue",
            passage: `Every day, the average adult makes approximately 35,000 decisions, ranging from trivial choices about what to wear to consequential judgments affecting careers and relationships. Psychologists have long recognized that this constant decision-making exacts a cognitive toll — a phenomenon known as decision fatigue.

The concept was first formally studied by social psychologist Roy Baumeister, who demonstrated that the act of making decisions depletes a limited mental resource he termed "ego depletion." In his landmark experiments, participants who had been required to make numerous choices earlier in a session subsequently showed reduced self-control, poorer judgment, and a tendency toward either impulsive decisions or complete decision avoidance.

A particularly striking illustration comes from a 2011 study of Israeli parole board decisions. Researchers found that judges granted parole in approximately 65% of cases heard at the beginning of a session but in nearly 0% of cases heard just before a break. After eating and resting, approval rates returned to 65%. The implication was clear: as decision fatigue accumulated, judges defaulted to the cognitively easier option — maintaining the status quo by denying parole.

The implications extend far beyond courtrooms. In consumer behavior, decision fatigue explains why shoppers are more likely to make impulse purchases at checkout counters — positioned at the end of a shopping trip when willpower is depleted. In healthcare, studies have shown that physicians prescribe unnecessary antibiotics at higher rates toward the end of their shifts.

Several strategies have been proposed to mitigate decision fatigue. Simplifying routine choices — as famously practiced by Steve Jobs with his uniform black turtleneck — preserves cognitive resources for more important decisions. Scheduling critical decisions for morning hours, when mental energy is highest, is another evidence-based approach. Organizations have also begun restructuring workflows to reduce the number of decisions required of individuals, through automation, standardized protocols, and delegation frameworks.`,
            questions: [
                {
                    q: "According to the passage, the average adult makes approximately how many decisions daily?",
                    options: ["10,000", "20,000", "35,000", "50,000"],
                    answer: 2
                },
                {
                    q: "The Israeli parole board study demonstrated that:",
                    options: ["Judges are inherently biased against prisoners", "Decision fatigue causes judges to default to the easier option", "Morning sessions produce worse outcomes", "Food has no effect on judicial decisions"],
                    answer: 1
                },
                {
                    q: "Roy Baumeister's concept of 'ego depletion' refers to:",
                    options: ["A personality disorder affecting decision-makers", "The depletion of a limited mental resource through decision-making", "Physical exhaustion from overwork", "The tendency to make selfish choices"],
                    answer: 1
                },
                {
                    q: "Steve Jobs' practice of wearing the same outfit daily is presented as an example of:",
                    options: ["Poor fashion sense", "Simplifying routine choices to preserve cognitive resources", "Corporate branding strategy", "Decision avoidance disorder"],
                    answer: 1
                }
            ]
        },
        {
            id: "r4",
            title: "Microplastics in the Food Chain",
            passage: `Microplastics — plastic fragments smaller than five millimeters — have become one of the most pervasive environmental contaminants of the 21st century. Originally identified as a concern in marine environments, research has now confirmed their presence in virtually every ecosystem on Earth, from Arctic ice cores to the deepest ocean trenches, and critically, throughout the human food chain.

The pathways through which microplastics enter food are numerous. Agricultural soils absorb them from irrigation water, sewage sludge used as fertilizer, and degrading plastic mulch films. Crops grown in contaminated soil can absorb nanoplastics through their root systems. Seafood is particularly affected — a 2024 meta-analysis found microplastics in 90% of commercially available fish species and 100% of shellfish samples tested globally.

Perhaps most concerning is the discovery of microplastics in drinking water. A World Health Organization report found that bottled water contains, on average, 325 microplastic particles per liter — approximately double the concentration found in tap water. The irony that plastic bottles themselves contribute to this contamination has not been lost on researchers.

The health implications remain partially understood. Laboratory studies have demonstrated that microplastics can cross cellular membranes, accumulate in organs, and trigger inflammatory responses. A 2025 study published in Nature Medicine found a correlation between blood microplastic concentrations and cardiovascular disease risk, though the authors cautioned that causation had not been established.

Current regulatory frameworks are largely inadequate. No country has established legally binding limits on microplastic concentrations in food or water. The European Union has taken the most aggressive stance, banning intentionally added microplastics in cosmetics and proposing monitoring requirements for drinking water, but enforcement mechanisms remain weak.

Reducing exposure at the individual level is challenging given the ubiquity of contamination. Experts recommend minimizing use of plastic food containers (especially when heating food), choosing tap water over bottled water, and increasing consumption of fresh, unpackaged foods. However, they acknowledge that systemic solutions — reducing plastic production, improving waste management, and developing biodegradable alternatives — are ultimately necessary.`,
            questions: [
                {
                    q: "According to the passage, bottled water contains approximately how many microplastic particles per liter?",
                    options: ["100", "200", "325", "500"],
                    answer: 2
                },
                {
                    q: "The 2024 meta-analysis found microplastics in what percentage of shellfish samples?",
                    options: ["75%", "85%", "90%", "100%"],
                    answer: 3
                },
                {
                    q: "The 2025 Nature Medicine study found:",
                    options: ["Microplastics definitively cause heart disease", "A correlation between blood microplastic levels and cardiovascular risk", "No relationship between microplastics and health", "Microplastics only affect the digestive system"],
                    answer: 1
                },
                {
                    q: "Which statement about regulation is TRUE according to the passage?",
                    options: ["Most countries have strict microplastic limits in food", "The EU has banned all plastic packaging", "No country has legally binding limits on microplastics in food", "The WHO has established global standards"],
                    answer: 2
                }
            ]
        },
        {
            id: "r5",
            title: "The Rise of Remote Work",
            passage: `The COVID-19 pandemic accelerated a transformation in work patterns that had been gradually developing for decades. By 2025, an estimated 32% of the global workforce operated in either fully remote or hybrid arrangements — a figure that would have seemed implausible just five years earlier. This shift has profound implications for urban planning, mental health, productivity, and social inequality.

Research on remote work productivity presents a nuanced picture. A Stanford University study tracking 16,000 workers over two years found that fully remote employees were 13% more productive than their office-based counterparts, primarily due to fewer distractions and eliminated commute time. However, a subsequent Microsoft study of 61,000 employees revealed that while individual task completion improved, cross-team collaboration and innovation declined by 25%.

The mental health effects are similarly complex. Remote workers report higher job satisfaction and better work-life balance on average, but also experience increased feelings of isolation and difficulty establishing boundaries between professional and personal life. A 2025 Gallup survey found that remote workers were 40% more likely to report feeling "always on" compared to office workers.

The inequality dimension is perhaps the most troubling. Remote work is disproportionately available to higher-educated, higher-income knowledge workers. Service sector employees, manufacturing workers, and those in developing economies rarely have the option. This creates what economists have termed a "flexibility divide" — where the benefits of location independence accrue primarily to those already privileged.

Cities are adapting to the new reality. Commercial real estate in traditional business districts has seen vacancy rates climb to historic highs, while suburban co-working spaces and "15-minute neighborhoods" — where residents can access work, shopping, and leisure within a 15-minute walk — have gained traction. Some governments have introduced "digital nomad visas" to attract remote workers, recognizing their economic contribution without requiring traditional employment relationships.`,
            questions: [
                {
                    q: "By 2025, what percentage of the global workforce operated remotely or in hybrid arrangements?",
                    options: ["22%", "32%", "42%", "52%"],
                    answer: 1
                },
                {
                    q: "The Stanford study found remote employees were more productive primarily because of:",
                    options: ["Better technology at home", "Fewer distractions and no commute", "More flexible hours", "Less supervision"],
                    answer: 1
                },
                {
                    q: "The 'flexibility divide' refers to:",
                    options: ["The gap between productive and unproductive remote workers", "Remote work benefits accruing mainly to already-privileged workers", "The difference between full-time and part-time remote work", "Timezone challenges in global teams"],
                    answer: 1
                },
                {
                    q: "According to the Gallup survey, remote workers were what percentage more likely to feel 'always on'?",
                    options: ["20%", "30%", "40%", "50%"],
                    answer: 2
                }
            ]
        }
    ],

    writing: [
        {
            id: "w1",
            type: "task2",
            title: "Technology and Education",
            prompt: "Some people believe that technology has made education more accessible and effective, while others argue it has created new problems such as distraction and inequality. Discuss both views and give your own opinion.",
            minWords: 250,
            tips: [
                "Introduction: Paraphrase the question, state both views exist, give your position",
                "Body 1: Discuss how technology improves education (online courses, resources, flexibility)",
                "Body 2: Discuss problems (digital divide, distraction, screen fatigue)",
                "Conclusion: Restate your opinion with a balanced final thought",
                "Use linking words: Furthermore, However, On the other hand, In conclusion"
            ],
            sampleBand7: "Technology has revolutionized the educational landscape, offering unprecedented access to knowledge while simultaneously introducing challenges that previous generations never faced. While I acknowledge the drawbacks, I believe the benefits of educational technology significantly outweigh its disadvantages when implemented thoughtfully..."
        },
        {
            id: "w2",
            type: "task2",
            title: "Environmental Responsibility",
            prompt: "Some people think that individuals can do little to protect the environment and that it is the responsibility of governments and large companies. To what extent do you agree or disagree?",
            minWords: 250,
            tips: [
                "Clearly state your position in the introduction",
                "If you partially agree: dedicate one paragraph to each side",
                "Use specific examples (recycling programs, carbon taxes, consumer choices)",
                "Avoid overly general statements — be specific",
                "Aim for 4 paragraphs: intro, body 1, body 2, conclusion"
            ],
            sampleBand7: "Environmental protection is often framed as a binary choice between individual action and institutional responsibility. However, I would argue that while governments and corporations bear the greater burden due to their scale of influence, individual actions remain meaningful and necessary..."
        },
        {
            id: "w3",
            type: "task2",
            title: "Urbanization",
            prompt: "In many countries, people are moving from rural areas to cities. Why do you think this is happening? What problems can this cause?",
            minWords: 250,
            tips: [
                "This is a 'causes and effects' essay — address both parts equally",
                "Causes: employment, education, healthcare, lifestyle opportunities",
                "Problems: overcrowding, housing costs, rural decline, pollution",
                "Use cause-effect language: 'This leads to...', 'As a result...', 'Consequently...'",
                "Give specific examples from countries you know about"
            ],
            sampleBand7: "The global trend of rural-to-urban migration has accelerated dramatically in recent decades, driven by a combination of economic necessity and the perceived advantages of city life. This essay will examine the primary causes of this phenomenon and the significant challenges it creates..."
        },
        {
            id: "w4",
            type: "task1",
            title: "Line Graph Description",
            prompt: "The graph below shows the number of international students enrolled in universities in four countries (USA, UK, Australia, Canada) between 2000 and 2020. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.",
            minWords: 150,
            tips: [
                "Introduction: Paraphrase what the graph shows (1 sentence)",
                "Overview: State 2-3 main trends (e.g., overall increase, USA dominant)",
                "Body 1: Describe the top performers with specific data",
                "Body 2: Describe the lower performers or notable changes",
                "Use trend language: 'rose sharply', 'remained stable', 'fluctuated', 'peaked at'",
                "Include approximate numbers: 'approximately 600,000', 'roughly doubled'"
            ],
            sampleBand7: "The line graph illustrates the number of international students studying at universities in four English-speaking countries over a twenty-year period from 2000 to 2020. Overall, all four nations experienced growth in international enrollment, with the USA maintaining its position as the leading destination throughout the period..."
        }
    ],

    speaking: [
        {
            id: "s1",
            part: 2,
            title: "Describe a skill you learned",
            prompt: "Describe a skill you learned that you are proud of.\n\nYou should say:\n- What the skill is\n- How you learned it\n- How long it took you to learn\n- And explain why you are proud of this skill",
            thinkTime: 60,
            speakTime: 120,
            tips: [
                "Use the 1-minute preparation time to jot down key points",
                "Structure: What → How → Duration → Why proud",
                "Use past tenses correctly (learned, practiced, took)",
                "Add details and examples to extend your answer",
                "Aim to speak for the full 2 minutes",
                "Use phrases like: 'What I'm particularly proud of is...', 'The reason this matters to me is...'"
            ],
            followUp: ["Do you think this skill will be useful in the future?", "Would you recommend others learn this skill?", "How has this skill changed your daily life?"]
        },
        {
            id: "s2",
            part: 2,
            title: "Describe a place you visited",
            prompt: "Describe a place you have visited that left a strong impression on you.\n\nYou should say:\n- Where it is\n- When you went there\n- What you did there\n- And explain why it left a strong impression",
            thinkTime: 60,
            speakTime: 120,
            tips: [
                "Be specific — name the actual place",
                "Use descriptive adjectives: breathtaking, bustling, serene, overwhelming",
                "Include sensory details: what you saw, heard, smelled",
                "Explain your emotional response",
                "Use narrative tenses: past simple for events, past continuous for background"
            ],
            followUp: ["Would you like to go back there?", "Do you prefer visiting natural places or cities?", "How do you usually choose where to travel?"]
        },
        {
            id: "s3",
            part: 3,
            title: "Discussion: Technology and Society",
            prompt: "Let's talk about technology and its impact on society.",
            questions: [
                "How has technology changed the way people communicate compared to 20 years ago?",
                "Do you think people are too dependent on technology nowadays?",
                "What are the advantages and disadvantages of children using technology from a young age?",
                "How do you think technology will change education in the next 10 years?"
            ],
            tips: [
                "Give extended answers (3-5 sentences minimum)",
                "Use opinion phrases: 'In my view...', 'I would argue that...', 'From my perspective...'",
                "Support opinions with examples or reasons",
                "Show range: use conditionals, comparatives, complex sentences",
                "It's okay to pause briefly to think — say 'That's an interesting question, let me think...'",
                "Acknowledge complexity: 'On one hand... on the other hand...'"
            ]
        },
        {
            id: "s4",
            part: 2,
            title: "Describe a goal you achieved",
            prompt: "Describe a goal you set for yourself and achieved.\n\nYou should say:\n- What the goal was\n- Why you set this goal\n- What you did to achieve it\n- And explain how you felt when you achieved it",
            thinkTime: 60,
            speakTime: 120,
            tips: [
                "Choose a specific, concrete goal (not vague like 'be happier')",
                "Show the process: planning, challenges, persistence",
                "Use time markers: 'Initially...', 'After several weeks...', 'Eventually...'",
                "Express emotions: relieved, ecstatic, proud, satisfied",
                "Connect to personal growth or lessons learned"
            ],
            followUp: ["Do you think it's important to set goals?", "What makes some people better at achieving goals than others?", "Do you prefer short-term or long-term goals?"]
        },
        {
            id: "s5",
            part: 3,
            title: "Discussion: Health and Lifestyle",
            prompt: "Let's discuss health and lifestyle choices.",
            questions: [
                "Why do you think some people find it difficult to maintain a healthy lifestyle?",
                "Should governments do more to promote healthy eating?",
                "How has the concept of 'health' changed over the past few decades?",
                "Do you think mental health is given enough attention in your country?"
            ],
            tips: [
                "Develop each answer with reasons and examples",
                "Use hedging language for opinions: 'tend to', 'it seems that', 'arguably'",
                "Show awareness of different perspectives",
                "Use topic-specific vocabulary: sedentary, well-being, preventive, holistic",
                "Aim for fluency over perfection — self-correct naturally if needed"
            ]
        }
    ],

    listening: [
        // Cambridge 16 — Test 1
        {
            id: "cam16-t1-p1",
            book: "Cambridge 16",
            title: "Cambridge 16 — Test 1, Part 1",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test.1.Part.1.mp3",
            playOnce: true,
            description: "Listen to the audio ONCE only (like the real exam). Answer the questions while listening.",
            questions: [
                { q: "What is the woman's surname?", type: "fill", answer: "Renton" },
                { q: "What is the woman's postcode?", options: ["BH5 2QL", "BH5 2QT", "BH5 2QS", "BH5 2QP"], answer: 0 },
                { q: "The woman wants to book for:", options: ["2 nights", "3 nights", "5 nights", "7 nights"], answer: 2 },
                { q: "She prefers a room with:", options: ["a bath", "a shower", "a balcony", "a sea view"], answer: 3 }
            ]
        },
        {
            id: "cam16-t1-p2",
            book: "Cambridge 16",
            title: "Cambridge 16 — Test 1, Part 2",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test.1.Part.2.mp3",
            playOnce: true,
            description: "Listen ONCE. Choose the correct answer for each question.",
            questions: [
                { q: "The new city library opened:", options: ["two years ago", "five years ago", "ten years ago", "last year"], answer: 1 },
                { q: "The__(?) floor has the children's section:", options: ["ground", "first", "second", "third"], answer: 0 },
                { q: "The library is closed on:", options: ["Mondays", "Sundays", "Wednesdays", "Saturdays"], answer: 1 },
                { q: "The speaker recommends booking a study room:", options: ["online", "by phone", "in person", "by email"], answer: 0 }
            ]
        },
        {
            id: "cam16-t1-p3",
            book: "Cambridge 16",
            title: "Cambridge 16 — Test 1, Part 3",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test.1.Part.3.mp3",
            playOnce: true,
            description: "Listen ONCE. This is a discussion between students. Answer the questions.",
            questions: [
                { q: "The students are discussing their:", options: ["exam results", "research project", "work placement", "group presentation"], answer: 3 },
                { q: "The main problem they identify is:", options: ["lack of time", "insufficient data", "disagreement about the topic", "technical difficulties"], answer: 1 },
                { q: "They decide to focus on:", options: ["environmental impact", "economic factors", "social implications", "historical context"], answer: 0 },
                { q: "The deadline for the project is:", options: ["next week", "in two weeks", "end of the month", "next semester"], answer: 2 }
            ]
        },
        {
            id: "cam16-t1-p4",
            book: "Cambridge 16",
            title: "Cambridge 16 — Test 1, Part 4",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test.1.Part.4.mp3",
            playOnce: true,
            description: "Listen ONCE. This is an academic lecture. Answer the questions.",
            questions: [
                { q: "The lecture is mainly about:", options: ["marine biology", "climate change effects on oceans", "fishing industry", "water pollution"], answer: 1 },
                { q: "According to the lecturer, ocean temperatures have risen by:", options: ["0.5 degrees", "1 degree", "1.5 degrees", "2 degrees"], answer: 1 },
                { q: "The lecturer mentions coral reefs are affected because:", options: ["overfishing", "rising water temperature", "oil spills", "tourism"], answer: 1 },
                { q: "The research was conducted over:", options: ["5 years", "10 years", "15 years", "20 years"], answer: 2 }
            ]
        },
        // Cambridge 17 — Test 1
        {
            id: "cam17-t1-p1",
            book: "Cambridge 17",
            title: "Cambridge 17 — Test 1, Part 1",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/ELT_IELTS17_t1_audio1.mp3",
            playOnce: true,
            description: "Listen ONCE. Complete the form/notes.",
            questions: [
                { q: "The caller wants information about:", options: ["a sports club", "a language course", "a cooking class", "a music lesson"], answer: 0 },
                { q: "The membership costs ___ per month:", options: ["£30", "£35", "£40", "£45"], answer: 2 },
                { q: "Classes are available on:", options: ["weekdays only", "weekends only", "every day", "Monday to Saturday"], answer: 3 },
                { q: "The free trial lasts:", options: ["1 day", "3 days", "1 week", "2 weeks"], answer: 2 }
            ]
        },
        {
            id: "cam17-t1-p2",
            book: "Cambridge 17",
            title: "Cambridge 17 — Test 1, Part 2",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/ELT_IELTS17_t1_audio2.mp3",
            playOnce: true,
            description: "Listen ONCE. Choose the correct answer.",
            questions: [
                { q: "The speaker is talking about:", options: ["a new shopping center", "a community project", "a park renovation", "a housing development"], answer: 2 },
                { q: "The project will be completed by:", options: ["spring", "summer", "autumn", "winter"], answer: 1 },
                { q: "Local residents were consulted via:", options: ["online survey", "public meeting", "door-to-door visits", "all of the above"], answer: 3 },
                { q: "The total budget for the project is:", options: ["£50,000", "£100,000", "£200,000", "£500,000"], answer: 2 }
            ]
        },
        // Cambridge 18 — Test 1 (Section 1)
        {
            id: "cam18-s1-p1",
            book: "Cambridge 18",
            title: "Cambridge 18 — Section 1, Part 1",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/18.section1-part1.mp3",
            playOnce: true,
            description: "Listen ONCE. This is a conversation. Answer the questions.",
            questions: [
                { q: "The conversation is about:", options: ["renting a flat", "booking a hotel", "joining a gym", "opening a bank account"], answer: 0 },
                { q: "The property is located near:", options: ["the city center", "the university", "the train station", "the shopping mall"], answer: 1 },
                { q: "The monthly rent is:", options: ["£400", "£500", "£600", "£700"], answer: 2 },
                { q: "The deposit required is:", options: ["one month's rent", "two months' rent", "£500", "no deposit"], answer: 0 }
            ]
        },
        // Cambridge 19 — Test 1
        {
            id: "cam19-t1-p1",
            book: "Cambridge 19",
            title: "Cambridge 19 — Test 1, Part 1",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test1.Part1.mp3",
            playOnce: true,
            description: "Listen ONCE. Complete the information.",
            questions: [
                { q: "The caller is enquiring about:", options: ["a job vacancy", "a training course", "a volunteer position", "an internship"], answer: 1 },
                { q: "The course starts on:", options: ["Monday", "Wednesday", "Friday", "Saturday"], answer: 0 },
                { q: "The course duration is:", options: ["4 weeks", "6 weeks", "8 weeks", "10 weeks"], answer: 2 },
                { q: "Students need to bring:", options: ["their own laptop", "a notebook", "ID documents", "nothing"], answer: 0 }
            ]
        },
        {
            id: "cam19-t1-p2",
            book: "Cambridge 19",
            title: "Cambridge 19 — Test 1, Part 2",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test1.Part2.mp3",
            playOnce: true,
            description: "Listen ONCE. Choose the correct answer for each question.",
            questions: [
                { q: "The talk is about:", options: ["a museum exhibition", "a local festival", "a new restaurant", "a theater performance"], answer: 1 },
                { q: "The event takes place in:", options: ["January", "March", "June", "September"], answer: 2 },
                { q: "Tickets can be purchased:", options: ["online only", "at the door only", "online and at the door", "from local shops"], answer: 2 },
                { q: "Children under 12:", options: ["pay full price", "get 50% off", "enter free", "are not allowed"], answer: 2 }
            ]
        },
        {
            id: "cam19-t1-p3",
            book: "Cambridge 19",
            title: "Cambridge 19 — Test 1, Part 3",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test1.Part3.mp3",
            playOnce: true,
            description: "Listen ONCE. Academic discussion between students.",
            questions: [
                { q: "The students are preparing for:", options: ["an exam", "a presentation", "a debate", "a field trip"], answer: 1 },
                { q: "Their topic relates to:", options: ["psychology", "economics", "environmental science", "sociology"], answer: 2 },
                { q: "They disagree about:", options: ["the deadline", "which sources to use", "who presents first", "the visual aids"], answer: 1 },
                { q: "The tutor suggests they:", options: ["start over", "divide the work equally", "extend the deadline", "change the topic"], answer: 1 }
            ]
        },
        {
            id: "cam19-t1-p4",
            book: "Cambridge 19",
            title: "Cambridge 19 — Test 1, Part 4",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test1.Part4.mp3",
            playOnce: true,
            description: "Listen ONCE. Academic lecture — most challenging section.",
            questions: [
                { q: "The lecture discusses:", options: ["urban planning", "agricultural innovation", "digital technology", "public health"], answer: 1 },
                { q: "The main advantage mentioned is:", options: ["lower costs", "higher yields", "less labor needed", "better taste"], answer: 1 },
                { q: "The technology was first developed in:", options: ["the 1990s", "the 2000s", "the 2010s", "the 2020s"], answer: 1 },
                { q: "The lecturer's conclusion is that:", options: ["more research is needed", "the technology should be banned", "it will replace traditional farming", "governments should invest more"], answer: 0 }
            ]
        },
        // Cambridge 16 — Test 2
        {
            id: "cam16-t2-p1",
            book: "Cambridge 16",
            title: "Cambridge 16 — Test 2, Part 1",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test.2.Part.1.mp3",
            playOnce: true,
            description: "Listen ONCE. Complete the notes. Write ONE WORD AND/OR A NUMBER.",
            questions: [
                { q: "The woman needs a new ___", type: "fill", answer: "frame" },
                { q: "Reference number: ___", type: "fill", answer: "195" },
                { q: "She will arrange ___", type: "fill", answer: "payment" },
                { q: "The photo is of her ___", type: "fill", answer: "Grandparents" },
                { q: "She wants to change the ___", type: "fill", answer: "colour" }
            ]
        },
        {
            id: "cam16-t2-p2",
            book: "Cambridge 16",
            title: "Cambridge 16 — Test 2, Part 2",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test.2.Part.2.mp3",
            playOnce: true,
            description: "Listen ONCE. Choose the correct answer.",
            questions: [
                { q: "Q11", options: ["A", "B", "C"], answer: 2 },
                { q: "Q12", options: ["A", "B", "C"], answer: 1 },
                { q: "Q13", options: ["A", "B", "C"], answer: 0 },
                { q: "Q14", options: ["A", "B", "C"], answer: 0 }
            ]
        },
        {
            id: "cam16-t2-p3",
            book: "Cambridge 16",
            title: "Cambridge 16 — Test 2, Part 3",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test.2.Part.3.mp3",
            playOnce: true,
            description: "Listen ONCE. Academic discussion. Complete the notes.",
            questions: [
                { q: "Topic of the assignment is the ___", type: "fill", answer: "history" },
                { q: "They need to include examples from ___", type: "fill", answer: "paper" },
                { q: "The focus should be on ___", type: "fill", answer: "humans" },
                { q: "Main factor causing difficulty is ___", type: "fill", answer: "stress" },
                { q: "They will use a ___ to present data", type: "fill", answer: "graph" }
            ]
        },
        {
            id: "cam16-t2-p4",
            book: "Cambridge 16",
            title: "Cambridge 16 — Test 2, Part 4",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test.2.Part.4.mp3",
            playOnce: true,
            description: "Listen ONCE. Academic lecture. Write ONE WORD ONLY.",
            questions: [
                { q: "The lecture is about the importance of ___", type: "fill", answer: "creativity" },
                { q: "Art can be used as a form of ___", type: "fill", answer: "therapy" },
                { q: "Physical activity improves overall ___", type: "fill", answer: "fitness" },
                { q: "Maintaining ___ in life is essential", type: "fill", answer: "balance" },
                { q: "The effects on the ___ are significant", type: "fill", answer: "brain" }
            ]
        },
        // Cambridge 16 — Test 3
        {
            id: "cam16-t3-p1",
            book: "Cambridge 16",
            title: "Cambridge 16 — Test 3, Part 1",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test.3.Part.1.mp3",
            playOnce: true,
            description: "Listen ONCE. Complete the notes. Write ONE WORD AND/OR A NUMBER.",
            questions: [
                { q: "They will go to the ___", type: "fill", answer: "park" },
                { q: "The bag is ___", type: "fill", answer: "blue" },
                { q: "She needs a ___ number", type: "fill", answer: "reference" },
                { q: "The child likes the ___", type: "fill", answer: "story" },
                { q: "Take something in case of ___", type: "fill", answer: "rain" }
            ]
        },
        {
            id: "cam16-t3-p2",
            book: "Cambridge 16",
            title: "Cambridge 16 — Test 3, Part 2",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test.3.Part.2.mp3",
            playOnce: true,
            description: "Listen ONCE. Choose the correct answer.",
            questions: [
                { q: "Q13", options: ["A", "B", "C"], answer: 1 },
                { q: "Q14", options: ["A", "B", "C"], answer: 2 }
            ]
        },
        {
            id: "cam16-t3-p3",
            book: "Cambridge 16",
            title: "Cambridge 16 — Test 3, Part 3",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test.3.Part.3.mp3",
            playOnce: true,
            description: "Listen ONCE. Academic discussion.",
            questions: [
                { q: "Q25: The answer is letter", options: ["A", "B", "C", "D", "E", "F", "G"], answer: 6 },
                { q: "Q26: The answer is letter", options: ["A", "B", "C", "D", "E", "F", "G"], answer: 0 },
                { q: "Q27: The answer is letter", options: ["A", "B", "C", "D", "E", "F", "G"], answer: 1 },
                { q: "Q28: The answer is letter", options: ["A", "B", "C", "D", "E", "F", "G"], answer: 0 }
            ]
        },
        {
            id: "cam16-t3-p4",
            book: "Cambridge 16",
            title: "Cambridge 16 — Test 3, Part 4",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test.3.Part.4.mp3",
            playOnce: true,
            description: "Listen ONCE. Academic lecture. Write ONE WORD ONLY.",
            questions: [
                { q: "The pottery was made by the speaker's ___", type: "fill", answer: "grandmother" },
                { q: "The tradition lasted over a ___", type: "fill", answer: "decade" },
                { q: "They used basic ___", type: "fill", answer: "equipment" },
                { q: "The impact was largely ___", type: "fill", answer: "economic" },
                { q: "The design is very ___", type: "fill", answer: "basic" }
            ]
        },
        // Cambridge 16 — Test 4
        {
            id: "cam16-t4-p1",
            book: "Cambridge 16",
            title: "Cambridge 16 — Test 4, Part 1",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test.4.Part.1.mp3",
            playOnce: true,
            description: "Listen ONCE. Complete the notes. Write ONE WORD AND/OR A NUMBER.",
            questions: [
                { q: "Date of the event: ___", type: "fill", answer: "28th" },
                { q: "Number of guests: ___", type: "fill", answer: "550" },
                { q: "Name of the venue: ___", type: "fill", answer: "Chervil" },
                { q: "Parking is in the ___", type: "fill", answer: "garage" },
                { q: "The view overlooks the ___", type: "fill", answer: "garden" }
            ]
        },
        {
            id: "cam16-t4-p2",
            book: "Cambridge 16",
            title: "Cambridge 16 — Test 4, Part 2",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test.4.Part.2.mp3",
            playOnce: true,
            description: "Listen ONCE. Choose the correct answer.",
            questions: [
                { q: "Q11", options: ["A", "B", "C"], answer: 0 },
                { q: "Q13", options: ["A", "B", "C"], answer: 1 },
                { q: "Q14", options: ["A", "B", "C"], answer: 1 }
            ]
        },
        {
            id: "cam16-t4-p3",
            book: "Cambridge 16",
            title: "Cambridge 16 — Test 4, Part 3",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test.4.Part.3.mp3",
            playOnce: true,
            description: "Listen ONCE. Academic discussion.",
            questions: [
                { q: "Q25:", options: ["A", "B", "C"], answer: 2 },
                { q: "Q26:", options: ["A", "B", "C", "D", "E", "F"], answer: 5 },
                { q: "Q27:", options: ["A", "B", "C", "D", "E", "F", "G"], answer: 3 },
                { q: "Q28:", options: ["A", "B", "C", "D", "E", "F", "G"], answer: 4 }
            ]
        },
        {
            id: "cam16-t4-p4",
            book: "Cambridge 16",
            title: "Cambridge 16 — Test 4, Part 4",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test.4.Part.4.mp3",
            playOnce: true,
            description: "Listen ONCE. Academic lecture. Write ONE WORD ONLY.",
            questions: [
                { q: "The ___ trade was historically important", type: "fill", answer: "spice" },
                { q: "The first ___ was established here", type: "fill", answer: "colony" },
                { q: "Animals were valued for their ___", type: "fill", answer: "fat" },
                { q: "The ___ of the animal is distinctive", type: "fill", answer: "head" },
                { q: "Their ___ is graceful", type: "fill", answer: "movement" }
            ]
        },
        // Cambridge 17 — Test 2
        {
            id: "cam17-t2-p1",
            book: "Cambridge 17",
            title: "Cambridge 17 — Test 2, Part 1",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/ELT_IELTS17_t2_audio1.mp3",
            playOnce: true,
            description: "Listen ONCE. Voluntary work in Southoe village. Write ONE WORD ONLY.",
            questions: [
                { q: "Help with ___ books (times to be arranged)", type: "fill", answer: "collecting" },
                { q: "Help needed to keep ___ of books up to date", type: "fill", answer: "records" },
                { q: "Library is in the ___ Room in the village hall", type: "fill", answer: "West" },
                { q: "Lunch club: Help by providing ___", type: "fill", answer: "transport" },
                { q: "Help with hobbies such as ___", type: "fill", answer: "art" },
                { q: "Next week: Taking Mrs Carroll to ___", type: "fill", answer: "hospital" },
                { q: "Work in the ___ at Mr Selsbury's house", type: "fill", answer: "garden" },
                { q: "19 Oct event: ___", type: "fill", answer: "quiz" },
                { q: "18 Nov dance: checking ___", type: "fill", answer: "tickets" },
                { q: "31 Dec: designing the ___", type: "fill", answer: "poster" }
            ]
        },
        {
            id: "cam17-t2-p2",
            book: "Cambridge 17",
            title: "Cambridge 17 — Test 2, Part 2",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/ELT_IELTS17_t2_audio2.mp3",
            playOnce: true,
            description: "Listen ONCE. Oniton Hall. Choose the correct answer.",
            questions: [
                { q: "Many past owners made changes to:", options: ["A. the gardens", "B. the house", "C. the farm"], answer: 1 },
                { q: "Sir Edward Downes built Oniton Hall because he wanted:", options: ["A. a place for discussing politics", "B. a place to display his wealth", "C. a place for artists and writers"], answer: 2 },
                { q: "Visitors can learn about the work of servants from:", options: ["A. audio guides", "B. photographs", "C. people in costume"], answer: 2 },
                { q: "What is new for children at Oniton Hall?", options: ["A. clothes for dressing up", "B. mini tractors", "C. the adventure playground"], answer: 1 }
            ]
        },
        {
            id: "cam17-t2-p3",
            book: "Cambridge 17",
            title: "Cambridge 17 — Test 2, Part 3",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/ELT_IELTS17_t2_audio3.mp3",
            playOnce: true,
            description: "Listen ONCE. Romeo and Juliet review discussion.",
            questions: [
                { q: "The students think Romeo and Juliet is still relevant because:", options: ["A. it illustrates how easily conflict can start", "B. it deals with problems that families experience", "C. it teaches them about relationships"], answer: 2 },
                { q: "The students found watching Romeo and Juliet in another language:", options: ["A. frustrating", "B. demanding", "C. moving"], answer: 2 },
                { q: "Why do the students think Shakespeare's plays have international appeal?", options: ["A. The stories are exciting", "B. There are recognisable characters", "C. They can be interpreted in many ways"], answer: 2 }
            ]
        },
        {
            id: "cam17-t2-p4",
            book: "Cambridge 17",
            title: "Cambridge 17 — Test 2, Part 4",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/ELT_IELTS17_t2_audio4.mp3",
            playOnce: true,
            description: "Listen ONCE. The impact of digital technology on Icelandic. Write ONE WORD AND/OR A NUMBER.",
            questions: [
                { q: "Icelandic has approximately ___ speakers", type: "fill", answer: "321,000" },
                { q: "Icelandic has a ___ that is still growing", type: "fill", answer: "vocabulary" },
                { q: "Icelandic has its own words for concepts such as web browser and ___", type: "fill", answer: "podcast" },
                { q: "Young speakers are big users of digital technology such as ___", type: "fill", answer: "smartphones" },
                { q: "Young speakers are becoming ___ very quickly", type: "fill", answer: "bilingual" },
                { q: "They are having discussions using only English in the ___ at school", type: "fill", answer: "playground" },
                { q: "They can better identify the content of a ___ in English than Icelandic", type: "fill", answer: "picture" },
                { q: "Tech companies write little Icelandic because of how complicated its ___ is", type: "fill", answer: "grammar" },
                { q: "Government worried young Icelanders may lose their ___ as Icelanders", type: "fill", answer: "identity" },
                { q: "Worried about consequences of children not being ___", type: "fill", answer: "fluent" }
            ]
        },
        // Cambridge 17 — Test 3
        {
            id: "cam17-t3-p1",
            book: "Cambridge 17",
            title: "Cambridge 17 — Test 3, Part 1",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/ELT_IELTS17_t3_audio1.mp3",
            playOnce: true,
            description: "Listen ONCE. Advice on surfing holidays. Write ONE WORD AND/OR A NUMBER.",
            questions: [
                { q: "Recommends surfing for ___ holidays in the summer", type: "fill", answer: "family" },
                { q: "Need to be quite ___", type: "fill", answer: "fit" },
                { q: "Lahinch has some good quality ___ and surf schools", type: "fill", answer: "hotels" },
                { q: "Good surf school at ___ beach", type: "fill", answer: "Carrowniskey" },
                { q: "Surf camp lasts for one ___", type: "fill", answer: "week" },
                { q: "Can also explore the local ___ by kayak", type: "fill", answer: "bay" },
                { q: "Best month to go: ___", type: "fill", answer: "September" },
                { q: "Average temperature in summer: approx ___ degrees", type: "fill", answer: "19" },
                { q: "Wetsuit and surfboard: ___ euros per day", type: "fill", answer: "30" },
                { q: "Also advisable to hire ___ for warmth", type: "fill", answer: "boots" }
            ]
        },
        {
            id: "cam17-t3-p2",
            book: "Cambridge 17",
            title: "Cambridge 17 — Test 3, Part 2",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/ELT_IELTS17_t3_audio2.mp3",
            playOnce: true,
            description: "Listen ONCE. Extended hours childcare service. Choose the correct answer.",
            questions: [
                { q: "How much does childcare cost for a complete afternoon session per child?", options: ["A. £3.50", "B. £5.70", "C. £7.20"], answer: 2 },
                { q: "What does the manager say about food?", options: ["A. Children with allergies should bring their own food", "B. Children may bring healthy snacks with them", "C. Children are given a proper meal at 5 p.m."], answer: 2 },
                { q: "What is different about arrangements in the school holidays?", options: ["A. Children from other schools can attend", "B. Older children can attend", "C. A greater number of children can attend"], answer: 0 }
            ]
        },
        {
            id: "cam17-t3-p3",
            book: "Cambridge 17",
            title: "Cambridge 17 — Test 3, Part 3",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/ELT_IELTS17_t3_audio3.mp3",
            playOnce: true,
            description: "Listen ONCE. Holly's Work Placement Tutorial. Choose the correct answer.",
            questions: [
                { q: "Holly has chosen the Orion Stadium placement because:", options: ["A. it involves children", "B. it is outdoors", "C. it sounds like fun"], answer: 1 },
                { q: "Which aspect of safety does Dr Green emphasise most?", options: ["A. ensuring children stay in the stadium", "B. checking the equipment children will use", "C. removing obstacles in changing rooms"], answer: 0 },
                { q: "What does Dr Green say about the spectators?", options: ["A. They can be hard to manage", "B. They make useful volunteers", "C. They shouldn't take photographs"], answer: 0 },
                { q: "What has affected the schedule in the past?", options: ["A. bad weather", "B. an injury", "C. extra time"], answer: 1 }
            ]
        },
        {
            id: "cam17-t3-p4",
            book: "Cambridge 17",
            title: "Cambridge 17 — Test 3, Part 4",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/ELT_IELTS17_t3_audio4.mp3",
            playOnce: true,
            description: "Listen ONCE. Bird Migration Theory. Write ONE WORD ONLY.",
            questions: [
                { q: "Birds hibernated underwater or buried themselves in ___", type: "fill", answer: "mud" },
                { q: "Redstarts experience the loss of ___", type: "fill", answer: "feathers" },
                { q: "The two species had a similar ___", type: "fill", answer: "shape" },
                { q: "Charles Morton believed birds fly to the ___ in winter", type: "fill", answer: "moon" },
                { q: "A stork was killed which had an African spear in its ___", type: "fill", answer: "neck" },
                { q: "Previously there had been no ___ that storks migrate to Africa", type: "fill", answer: "evidence" },
                { q: "Little was known about the ___ and journeys of migrating birds", type: "fill", answer: "destinations" },
                { q: "Small birds were considered incapable of travelling across huge ___", type: "fill", answer: "oceans" },
                { q: "Ringing depended on what is called the ___ of dead birds", type: "fill", answer: "recovery" },
                { q: "In 1931, the first ___ to show migration of European birds was printed", type: "fill", answer: "atlas" }
            ]
        },
        // Cambridge 17 — Test 4
        {
            id: "cam17-t4-p1",
            book: "Cambridge 17",
            title: "Cambridge 17 — Test 4, Part 1",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/IELTS17_t4_audio1.mp3",
            playOnce: true,
            description: "Listen ONCE. Easy Life Cleaning Services. Write ONE WORD.",
            questions: [
                { q: "Cleaning the ___ throughout the apartment", type: "fill", answer: "floor" },
                { q: "Every week: Cleaning the ___", type: "fill", answer: "fridge" },
                { q: "Ironing clothes — ___ only", type: "fill", answer: "shirts" },
                { q: "Every month: Cleaning all the ___ from the inside", type: "fill", answer: "windows" },
                { q: "Washing down the ___", type: "fill", answer: "balcony" },
                { q: "They can organise a plumber or an ___", type: "fill", answer: "electrician" },
                { q: "Special cleaning for customers allergic to ___", type: "fill", answer: "dust" },
                { q: "Background check carried out by the ___", type: "fill", answer: "police" },
                { q: "All cleaners are given ___ for two weeks", type: "fill", answer: "training" },
                { q: "Customers send a ___ after each visit", type: "fill", answer: "review" }
            ]
        },
        {
            id: "cam17-t4-p2",
            book: "Cambridge 17",
            title: "Cambridge 17 — Test 4, Part 2",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/ELT_IELTS17_t4_audio2.mp3",
            playOnce: true,
            description: "Listen ONCE. Hotel staff retention. Choose the correct answer.",
            questions: [
                { q: "Many hotel managers are unaware that staff often leave because of:", options: ["A. a lack of training", "B. long hours", "C. low pay"], answer: 0 },
                { q: "What is the impact of high staff turnover on managers?", options: ["A. an increased workload", "B. low morale", "C. an inability to meet targets"], answer: 0 },
                { q: "What mistake should managers always avoid?", options: ["A. failing to treat staff equally", "B. reorganising shifts without warning", "C. neglecting to have enough staff during busy periods"], answer: 0 },
                { q: "What unexpected benefit did Dunwich Hotel notice?", options: ["A. a fall in customer complaints", "B. an increase in loyalty club membership", "C. a rise in spending per customer"], answer: 2 }
            ]
        },
        {
            id: "cam17-t4-p3",
            book: "Cambridge 17",
            title: "Cambridge 17 — Test 4, Part 3",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/ELT_IELTS17_t4_audio3.mp3",
            playOnce: true,
            description: "Listen ONCE. Discussion about sporting activities and equipment.",
            questions: [
                { q: "The table tennis bat — comment about its development:", options: ["A. excessive sweating", "B. mass produced for another purpose", "C. people made their own", "D. often had to be replaced", "E. material was expensive", "F. unpopular among spectators", "G. caused injuries", "H. no one liked it at first"], answer: 1 },
                { q: "The cricket helmet:", options: ["A. excessive sweating", "B. mass produced for another purpose", "C. people made their own", "D. often had to be replaced", "E. material was expensive", "F. unpopular among spectators", "G. caused injuries", "H. no one liked it at first"], answer: 5 },
                { q: "The cycle helmet:", options: ["A. excessive sweating", "B. mass produced for another purpose", "C. people made their own", "D. often had to be replaced", "E. material was expensive", "F. unpopular among spectators", "G. caused injuries", "H. no one liked it at first"], answer: 0 },
                { q: "The golf club:", options: ["A. excessive sweating", "B. mass produced for another purpose", "C. people made their own", "D. often had to be replaced", "E. material was expensive", "F. unpopular among spectators", "G. caused injuries", "H. no one liked it at first"], answer: 3 },
                { q: "The hockey stick:", options: ["A. excessive sweating", "B. mass produced for another purpose", "C. people made their own", "D. often had to be replaced", "E. material was expensive", "F. unpopular among spectators", "G. caused injuries", "H. no one liked it at first"], answer: 2 },
                { q: "The football:", options: ["A. excessive sweating", "B. mass produced for another purpose", "C. people made their own", "D. often had to be replaced", "E. material was expensive", "F. unpopular among spectators", "G. caused injuries", "H. no one liked it at first"], answer: 6 }
            ]
        },
        {
            id: "cam17-t4-p4",
            book: "Cambridge 17",
            title: "Cambridge 17 — Test 4, Part 4",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/ELT_IELTS17_t4_audio4.mp3",
            playOnce: true,
            description: "Listen ONCE. Maple syrup production. Write ONE WORD ONLY.",
            questions: [
                { q: "Colour described as ___", type: "fill", answer: "golden" },
                { q: "Very ___ compared to refined sugar", type: "fill", answer: "healthy" },
                { q: "Best growing conditions and ___ are in Canada", type: "fill", answer: "climate" },
                { q: "Used hot ___ to heat the sap", type: "fill", answer: "rock" },
                { q: "Tree trunks may not have the correct ___ until 40 years old", type: "fill", answer: "diameter" },
                { q: "A ___ carries the sap into a bucket", type: "fill", answer: "tube" },
                { q: "Large pans are heated by means of a ___", type: "fill", answer: "fire" },
                { q: "A lot of ___ is produced during evaporation", type: "fill", answer: "steam" },
                { q: "Sugar sand makes the syrup look ___", type: "fill", answer: "cloudy" },
                { q: "A huge quantity of sap is needed to make a ___ of maple syrup", type: "fill", answer: "litre" }
            ]
        },
        // Cambridge 18 — All Tests
        {
            id: "cam18-t1-p2", book: "Cambridge 18", title: "Cambridge 18 — Test 1, Part 2",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/18.section1-part2.mp3",
            playOnce: true, description: "Listen ONCE. Choose the correct answer.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        {
            id: "cam18-t1-p3", book: "Cambridge 18", title: "Cambridge 18 — Test 1, Part 3",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/18.section1-part3.mp3",
            playOnce: true, description: "Listen ONCE. Academic discussion.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        {
            id: "cam18-t1-p4", book: "Cambridge 18", title: "Cambridge 18 — Test 1, Part 4",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/18.section1-part4.mp3",
            playOnce: true, description: "Listen ONCE. Academic lecture.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        {
            id: "cam18-t2-p1", book: "Cambridge 18", title: "Cambridge 18 — Test 2, Part 1",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/18.section2-part1.mp3",
            playOnce: true, description: "Listen ONCE. Complete the notes.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        {
            id: "cam18-t2-p2", book: "Cambridge 18", title: "Cambridge 18 — Test 2, Part 2",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/18.section2-part2.mp3",
            playOnce: true, description: "Listen ONCE. Choose the correct answer.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        {
            id: "cam18-t2-p3", book: "Cambridge 18", title: "Cambridge 18 — Test 2, Part 3",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/18.section2-.part3.mp3",
            playOnce: true, description: "Listen ONCE. Academic discussion.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        {
            id: "cam18-t2-p4", book: "Cambridge 18", title: "Cambridge 18 — Test 2, Part 4",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/18.section2-.part4.mp3",
            playOnce: true, description: "Listen ONCE. Academic lecture.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        {
            id: "cam18-t3-p1", book: "Cambridge 18", title: "Cambridge 18 — Test 3, Part 1",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/18.section3.part1.mp3",
            playOnce: true, description: "Listen ONCE. Complete the notes.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        {
            id: "cam18-t3-p2", book: "Cambridge 18", title: "Cambridge 18 — Test 3, Part 2",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/18.section3.part2.mp3",
            playOnce: true, description: "Listen ONCE. Choose the correct answer.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        {
            id: "cam18-t3-p3", book: "Cambridge 18", title: "Cambridge 18 — Test 3, Part 3",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/18.section3.part3.mp3",
            playOnce: true, description: "Listen ONCE. Academic discussion.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        {
            id: "cam18-t3-p4", book: "Cambridge 18", title: "Cambridge 18 — Test 3, Part 4",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/18.section3.part4.mp3",
            playOnce: true, description: "Listen ONCE. Academic lecture.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        {
            id: "cam18-t4-p1", book: "Cambridge 18", title: "Cambridge 18 — Test 4, Part 1",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/18.section4.part1.mp3",
            playOnce: true, description: "Listen ONCE. Complete the notes.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        {
            id: "cam18-t4-p2", book: "Cambridge 18", title: "Cambridge 18 — Test 4, Part 2",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/18.section4.part2.mp3",
            playOnce: true, description: "Listen ONCE. Choose the correct answer.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        {
            id: "cam18-t4-p3", book: "Cambridge 18", title: "Cambridge 18 — Test 4, Part 3",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/18.section4.part3.mp3",
            playOnce: true, description: "Listen ONCE. Academic discussion.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        {
            id: "cam18-t4-p4", book: "Cambridge 18", title: "Cambridge 18 — Test 4, Part 4",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/18.section4.part4.mp3",
            playOnce: true, description: "Listen ONCE. Academic lecture.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        // Cambridge 19 — Tests 2-4
        {
            id: "cam19-t2-p1", book: "Cambridge 19", title: "Cambridge 19 — Test 2, Part 1",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test2.Part1.mp3",
            playOnce: true, description: "Listen ONCE. Complete the notes.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        {
            id: "cam19-t2-p2", book: "Cambridge 19", title: "Cambridge 19 — Test 2, Part 2",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test2.Part2.mp3",
            playOnce: true, description: "Listen ONCE. Choose the correct answer.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        {
            id: "cam19-t2-p3", book: "Cambridge 19", title: "Cambridge 19 — Test 2, Part 3",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test2.Part3.mp3",
            playOnce: true, description: "Listen ONCE. Academic discussion.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        {
            id: "cam19-t2-p4", book: "Cambridge 19", title: "Cambridge 19 — Test 2, Part 4",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test2.Part4.mp3",
            playOnce: true, description: "Listen ONCE. Academic lecture.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        {
            id: "cam19-t3-p1", book: "Cambridge 19", title: "Cambridge 19 — Test 3, Part 1",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test3.Part1.mp3",
            playOnce: true, description: "Listen ONCE. Complete the notes.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        {
            id: "cam19-t3-p2", book: "Cambridge 19", title: "Cambridge 19 — Test 3, Part 2",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test3.Part2.mp3",
            playOnce: true, description: "Listen ONCE. Choose the correct answer.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        {
            id: "cam19-t3-p3", book: "Cambridge 19", title: "Cambridge 19 — Test 3, Part 3",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test3.Part3.mp3",
            playOnce: true, description: "Listen ONCE. Academic discussion.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        {
            id: "cam19-t3-p4", book: "Cambridge 19", title: "Cambridge 19 — Test 3, Part 4",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test3.Part4.mp3",
            playOnce: true, description: "Listen ONCE. Academic lecture.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        {
            id: "cam19-t4-p1", book: "Cambridge 19", title: "Cambridge 19 — Test 4, Part 1",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test4.Part1.mp3",
            playOnce: true, description: "Listen ONCE. Complete the notes.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        {
            id: "cam19-t4-p2", book: "Cambridge 19", title: "Cambridge 19 — Test 4, Part 2",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test4.Part2.mp3",
            playOnce: true, description: "Listen ONCE. Choose the correct answer.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        {
            id: "cam19-t4-p3", book: "Cambridge 19", title: "Cambridge 19 — Test 4, Part 3",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test4.Part3.mp3",
            playOnce: true, description: "Listen ONCE. Academic discussion.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        {
            id: "cam19-t4-p4", book: "Cambridge 19", title: "Cambridge 19 — Test 4, Part 4",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/Test4.Part4.mp3",
            playOnce: true, description: "Listen ONCE. Academic lecture.",
            questions: [{ q: "Listen carefully and answer the questions.", options: ["A", "B", "C"], answer: 0 }]
        },
        // Cambridge 20 — Test 1
        {
            id: "cam20-t1-p1", book: "Cambridge 20", title: "Cambridge 20 — Test 1, Part 1",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/T1S1.m4a",
            playOnce: true, description: "Listen ONCE. Restaurant recommendations. Write ONE WORD AND/OR A NUMBER.",
            questions: [
                { q: "The Junction: Good for people keen on ___", type: "fill", answer: "fish" },
                { q: "The ___ is a good place for a drink", type: "fill", answer: "roof" },
                { q: "Paloma: ___ food, good for sharing", type: "fill", answer: "Spanish" },
                { q: "A limited selection of ___ food on the menu", type: "fill", answer: "vegetarian" },
                { q: "The ___: At the top of a hotel", type: "fill", answer: "Audley" },
                { q: "All the ___ are very good", type: "fill", answer: "reviews" },
                { q: "Only uses ___ ingredients", type: "fill", answer: "local" },
                { q: "Set lunch costs £___ per person", type: "fill", answer: "30" },
                { q: "Portions probably of ___ size", type: "fill", answer: "average" }
            ]
        },
        {
            id: "cam20-t1-p2", book: "Cambridge 20", title: "Cambridge 20 — Test 1, Part 2",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/T1S2.m4a",
            playOnce: true, description: "Listen ONCE. Heather's pottery class. Choose the correct answer.",
            questions: [
                { q: "Pottery differs from other art forms because:", options: ["A. it lasts longer in the ground", "B. it is practised by more people", "C. it can be repaired more easily"], answer: 0 },
                { q: "Archaeologists identify use of ancient pottery from:", options: ["A. the clay it was made with", "B. the marks that are on it", "C. the basic shape of it"], answer: 1 },
                { q: "Some people join because they want to:", options: ["A. create an item that looks very old", "B. find something they are good at", "C. make something that will outlive them"], answer: 2 },
                { q: "What does Heather value most about being a potter?", options: ["A. its calming effect", "B. its messy nature", "C. its physical benefits"], answer: 0 },
                { q: "Most visitors to Edelman Pottery:", options: ["A. bring friends to join courses", "B. have never made a pot before", "C. try to learn techniques too quickly"], answer: 1 },
                { q: "Heather reminds visitors that they should:", options: ["A. put on their aprons", "B. change their clothes", "C. take off their jewellery"], answer: 2 }
            ]
        },
        {
            id: "cam20-t1-p3", book: "Cambridge 20", title: "Cambridge 20 — Test 1, Part 3",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/T1S3.m4a",
            playOnce: true, description: "Listen ONCE. Loneliness research. Choose the correct answer.",
            questions: [
                { q: "Comparing loneliness to depression, the students:", options: ["A. doubt there will ever be a medical cure", "B. claim the link is overstated", "C. express frustration it's not taken seriously"], answer: 0 },
                { q: "Why start with a personal example?", options: ["A. to explain how difficult loneliness can be", "B. to highlight a situation most students recognise", "C. to emphasise it's more common for men"], answer: 1 },
                { q: "Talking to strangers helps because:", options: ["A. it creates a sense of belonging", "B. it builds self-confidence", "C. it makes people feel more positive"], answer: 0 },
                { q: "They find it hard to understand why solitude is considered:", options: ["A. similar to loneliness", "B. necessary for mental health", "C. an enjoyable experience"], answer: 2 }
            ]
        },
        {
            id: "cam20-t1-p4", book: "Cambridge 20", title: "Cambridge 20 — Test 1, Part 4",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/T1S4.m4a",
            playOnce: true, description: "Listen ONCE. Reclaiming urban rivers. Write ONE WORD ONLY.",
            questions: [
                { q: "Pollution from ___ on the river bank", type: "fill", answer: "factories" },
                { q: "River Thames declared biologically ___", type: "fill", answer: "dead" },
                { q: "Seals and even a ___ have been seen", type: "fill", answer: "whale" },
                { q: "Warehouses converted to restaurants and ___", type: "fill", answer: "apartments" },
                { q: "In LA, plans to build a riverside ___", type: "fill", answer: "park" },
                { q: "Display ___ projects", type: "fill", answer: "art" },
                { q: "In Paris, ___ are created every summer", type: "fill", answer: "beaches" },
                { q: "Over 2 billion passengers travel by ___", type: "fill", answer: "ferry" },
                { q: "Goods transported by barges and electric ___", type: "fill", answer: "bikes" },
                { q: "Or in future, by ___", type: "fill", answer: "drone" }
            ]
        },
        // Cambridge 20 — Test 2
        {
            id: "cam20-t2-p1", book: "Cambridge 20", title: "Cambridge 20 — Test 2, Part 1",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/T2S1.m4a",
            playOnce: true, description: "Listen ONCE. Support for carers. Write ONE WORD.",
            questions: [
                { q: "This can give the carer a ___", type: "fill", answer: "break" },
                { q: "How much ___ the caring involves", type: "fill", answer: "time" },
                { q: "Helping her have a ___", type: "fill", answer: "shower" },
                { q: "Dealing with ___", type: "fill", answer: "money" },
                { q: "Difficulty: loss of ___", type: "fill", answer: "memory" },
                { q: "Difficulty: ___ her", type: "fill", answer: "lifting" },
                { q: "Preventing a ___", type: "fill", answer: "fall" },
                { q: "Transport costs: cost of a ___", type: "fill", answer: "taxi" },
                { q: "Car-related costs: fuel and ___", type: "fill", answer: "insurance" },
                { q: "Help to reduce ___", type: "fill", answer: "stress" }
            ]
        },
        {
            id: "cam20-t2-p2", book: "Cambridge 20", title: "Cambridge 20 — Test 2, Part 2",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/T2S2.m4a",
            playOnce: true, description: "Listen ONCE. Volunteer activities. Choose the correct answer.",
            questions: [
                { q: "Which event requires the largest number of volunteers?", options: ["A. music festival", "B. science festival", "C. book festival"], answer: 1 },
                { q: "Most important requirement for volunteers?", options: ["A. interpersonal skills", "B. personal interest", "C. flexibility"], answer: 0 },
                { q: "New volunteers start in the week beginning:", options: ["A. 2 September", "B. 9 September", "C. 23 September"], answer: 1 },
                { q: "Next annual event for volunteers?", options: ["A. a boat trip", "B. a barbecue", "C. a party"], answer: 0 }
            ]
        },
        {
            id: "cam20-t2-p3", book: "Cambridge 20", title: "Cambridge 20 — Test 2, Part 3",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/T2S3.m4a",
            playOnce: true, description: "Listen ONCE. Human geography discussion.",
            questions: [
                { q: "In her city the main problem is:", options: ["A. crime", "B. housing", "C. unemployment"], answer: 2 },
                { q: "Recent additions to outskirts both students are happy about:", options: ["A. conference centres", "B. sports centres", "C. retail centres"], answer: 0 },
                { q: "Developing disused industrial sites may:", options: ["A. have unexpected costs", "B. damage the environment", "C. destroy historical buildings"], answer: 0 },
                { q: "Masdar City is an example of achieving:", options: ["A. waste recycling", "B. sustainable energy use", "C. free transport"], answer: 1 },
                { q: "About Greenhill Abbots, Colin is uncertain about:", options: ["A. what its objectives were", "B. why there was opposition", "C. how much has been built"], answer: 2 }
            ]
        },
        {
            id: "cam20-t2-p4", book: "Cambridge 20", title: "Cambridge 20 — Test 2, Part 4",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/T2S4.m4a",
            playOnce: true, description: "Listen ONCE. Developing food trends. Write ONE WORD ONLY.",
            questions: [
                { q: "Growth started with ___ of food shared on social media", type: "fill", answer: "photos" },
                { q: "Sales of ___ food brands grew rapidly", type: "fill", answer: "vegan" },
                { q: "Famous ___ are influential", type: "fill", answer: "chefs" },
                { q: "Avocado: ___ were invited to visit growers", type: "fill", answer: "journalists" },
                { q: "Advertising focused on ___ benefits", type: "fill", answer: "health" },
                { q: "Oat milk: Promoted through ___ shops", type: "fill", answer: "coffee" },
                { q: "It appealed to consumers concerned about the ___", type: "fill", answer: "environment" },
                { q: "Norwegian skrei strengthened the ___ of Norwegian seafood", type: "fill", answer: "reputation" },
                { q: "Quinoa success led to an increase in its ___", type: "fill", answer: "price" },
                { q: "Overuse of resources resulted in poor quality ___", type: "fill", answer: "soil" }
            ]
        },
        // Cambridge 20 — Test 3
        {
            id: "cam20-t3-p1", book: "Cambridge 20", title: "Cambridge 20 — Test 3, Part 1",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/T3S1.m4a",
            playOnce: true, description: "Listen ONCE. Furniture Rental Companies. Write ONE WORD AND/OR A NUMBER.",
            questions: [
                { q: "Peak Rentals: Prices range from $105 to $___", type: "fill", answer: "239" },
                { q: "The furniture is very ___", type: "fill", answer: "modern" },
                { q: "Special offer: free ___ with every living room set", type: "fill", answer: "lamp" },
                { q: "___ and Oliver: Mid-range prices", type: "fill", answer: "Aaron" },
                { q: "Also offers renting ___ items", type: "fill", answer: "electronic" },
                { q: "Must have own ___", type: "fill", answer: "insurance" },
                { q: "___ Rentals", type: "fill", answer: "Space" },
                { q: "See the ___ for most up-to-date prices", type: "fill", answer: "app" },
                { q: "___ are allowed within 7 days of delivery", type: "fill", answer: "exchanges" }
            ]
        },
        {
            id: "cam20-t3-p2", book: "Cambridge 20", title: "Cambridge 20 — Test 3, Part 2",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/T3S2.m4a",
            playOnce: true, description: "Listen ONCE. Community archaeology project.",
            questions: [
                { q: "Who started the community project?", options: ["A. castle owners", "B. a national charity", "C. local council"], answer: 1 },
                { q: "How was the gold coin found?", options: ["A. Heavy rain removed soil", "B. Wild rabbits dug it up", "C. Metal detector search"], answer: 0 },
                { q: "What are the team still hoping to find?", options: ["A. everyday pottery", "B. animal bones", "C. pieces of jewellery"], answer: 2 },
                { q: "What was found across the river?", options: ["A. remains of a palace", "B. outline of fields", "C. small huts"], answer: 1 },
                { q: "After work ends this summer, the team will:", options: ["A. prepare a museum display", "B. do a TV programme", "C. organise school visits"], answer: 2 }
            ]
        },
        {
            id: "cam20-t3-p3", book: "Cambridge 20", title: "Cambridge 20 — Test 3, Part 3",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/T3S3.m4a",
            playOnce: true, description: "Listen ONCE. Theatre programmes discussion.",
            questions: [
                { q: "Finn was pleased their topic:", options: ["A. wasn't familiar to module leader", "B. hadn't been chosen by others", "C. wasn't difficult to research"], answer: 1 },
                { q: "A mistaken belief about theatre programmes:", options: ["A. theatres pay companies to produce them", "B. few people buy them", "C. they contain more adverts now"], answer: 0 },
                { q: "In early British theatre, programmes:", options: ["A. were hard to obtain", "B. were given out free", "C. were seen as a contract"], answer: 2 },
                { q: "Compared to 19th-century, 18th-century programmes:", options: ["A. were more original", "B. more colourful", "C. more informative"], answer: 2 },
                { q: "Maya doesn't understand why in the 20th century:", options: ["A. few programmes were printed in USA", "B. British programmes failed to develop", "C. British programmes copied the USA"], answer: 1 }
            ]
        },
        {
            id: "cam20-t3-p4", book: "Cambridge 20", title: "Cambridge 20 — Test 3, Part 4",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/T3S4.m4a",
            playOnce: true, description: "Listen ONCE. Inclusive design. Write ONE WORD ONLY.",
            questions: [
                { q: "Design without the need for any ___", type: "fill", answer: "adaptation" },
                { q: "Universal design caters for ___ problems", type: "fill", answer: "cognitive" },
                { q: "___ which are adjustable", type: "fill", answer: "desks" },
                { q: "___ in public toilets easier to use", type: "fill", answer: "taps" },
                { q: "Designers avoid using ___", type: "fill", answer: "blue" },
                { q: "Commands using mouse, keyboard or ___", type: "fill", answer: "voice" },
                { q: "Seatbelts problematic for ___ women", type: "fill", answer: "pregnant" },
                { q: "PPE unsuitable due to women's ___", type: "fill", answer: "shoulders" },
                { q: "PPE worst for female ___ officers", type: "fill", answer: "police" },
                { q: "Office ___ often too low for women", type: "fill", answer: "temperature" }
            ]
        },
        // Cambridge 20 — Test 4
        {
            id: "cam20-t4-p1", book: "Cambridge 20", title: "Cambridge 20 — Test 4, Part 1",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/T4S1.m4a",
            playOnce: true, description: "Listen ONCE. Advice on family visit. Write ONE WORD AND/OR A NUMBER.",
            questions: [
                { q: "___ Hotel on George Street", type: "fill", answer: "Kings" },
                { q: "Family room per night: £___", type: "fill", answer: "125" },
                { q: "A ___ tour of the city centre", type: "fill", answer: "walking" },
                { q: "A trip by ___ to the old fort", type: "fill", answer: "boat" },
                { q: "Best day to visit Science Museum: ___", type: "fill", answer: "Tuesday" },
                { q: "Exhibition about ___ opening soon", type: "fill", answer: "space" },
                { q: "Clacton Market: good for ___ food", type: "fill", answer: "vegetarian" },
                { q: "Need lunch before ___ p.m.", type: "fill", answer: "2.30" },
                { q: "Save up to ___% on tickets", type: "fill", answer: "75" },
                { q: "Climb Telegraph Hill to see the ___", type: "fill", answer: "port" }
            ]
        },
        {
            id: "cam20-t4-p2", book: "Cambridge 20", title: "Cambridge 20 — Test 4, Part 2",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/T4S2.m4a",
            playOnce: true, description: "Listen ONCE. Football stadium tour — history of football.",
            questions: [
                { q: "1870:", options: ["A. pay for players", "B. goal design change", "C. lights for matches", "D. introduction of goalkeepers", "E. first international match", "F. rule changes", "G. fee for spectators", "H. agreed game length"], answer: 3 },
                { q: "1874:", options: ["A. pay for players", "B. goal design change", "C. lights for matches", "D. introduction of goalkeepers", "E. first international match", "F. rule changes", "G. fee for spectators", "H. agreed game length"], answer: 5 },
                { q: "1875:", options: ["A. pay for players", "B. goal design change", "C. lights for matches", "D. introduction of goalkeepers", "E. first international match", "F. rule changes", "G. fee for spectators", "H. agreed game length"], answer: 1 },
                { q: "1877:", options: ["A. pay for players", "B. goal design change", "C. lights for matches", "D. goalkeepers", "E. international match", "F. rule changes", "G. spectator fee", "H. agreed game length"], answer: 7 },
                { q: "1878:", options: ["A. pay for players", "B. goal design change", "C. lights for matches", "D. goalkeepers", "E. international match", "F. rule changes", "G. spectator fee", "H. agreed game length"], answer: 2 },
                { q: "1880:", options: ["A. pay for players", "B. goal design change", "C. lights for matches", "D. goalkeepers", "E. international match", "F. rule changes", "G. spectator fee", "H. agreed game length"], answer: 6 }
            ]
        },
        {
            id: "cam20-t4-p3", book: "Cambridge 20", title: "Cambridge 20 — Test 4, Part 3",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/T4S3.m4a",
            playOnce: true, description: "Listen ONCE. Handwriting discussion.",
            questions: [
                { q: "Laptops for children with dyslexia:", options: ["A. lack motivation to learn that way", "B. become fluent quickly", "C. react more positively to mistakes"], answer: 2 },
                { q: "About cursive vs print, the woman thinks:", options: ["A. cursive disadvantages some children", "B. print linked to lower performance", "C. teachers prefer traditional approach"], answer: 0 },
                { q: "Poor handwriting's impact on exams:", options: ["A. evidence grades are affected", "B. neat handwriting less important now", "C. candidates write more slowly"], answer: 0 },
                { q: "Man's prediction about handwriting's future:", options: ["A. touch typing taught before writing", "B. children will continue writing by hand", "C. people will dislike handwriting on devices"], answer: 1 },
                { q: "Digital devices make it difficult to:", options: ["A. take detailed notes", "B. spell and punctuate", "C. read old documents"], answer: 1 },
                { q: "Students feel about their own handwriting:", options: ["A. concerned about speed", "B. embarrassed by comments", "C. regretful about lost habit"], answer: 2 }
            ]
        },
        {
            id: "cam20-t4-p4", book: "Cambridge 20", title: "Cambridge 20 — Test 4, Part 4",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/T4S4.m4a",
            playOnce: true, description: "Listen ONCE. Chembe Bird Sanctuary research. Write ONE WORD ONLY.",
            questions: [
                { q: "Birds of prey destroy ___ and other rodents", type: "fill", answer: "rats" },
                { q: "Help prevent farmers being bitten by ___", type: "fill", answer: "snakes" },
                { q: "They encourage ___ in the area", type: "fill", answer: "tourism" },
                { q: "Birds accidentally killed by ___", type: "fill", answer: "traffic" },
                { q: "Electrocution especially when there is ___", type: "fill", answer: "rain" },
                { q: "Farmers may illegally ___ them", type: "fill", answer: "poison" },
                { q: "Providing a ___ for chickens (expensive)", type: "fill", answer: "building" },
                { q: "Frighten birds by keeping a ___", type: "fill", answer: "dog" },
                { q: "Making a ___ with metal objects", type: "fill", answer: "noise" },
                { q: "A ___ of methods is usually most effective", type: "fill", answer: "combination" }
            ]
        }
    ],

    vocabulary: {
        academic: [
            { word: "albeit", meaning: "although; even though", example: "The results were positive, albeit somewhat unexpected." },
            { word: "notwithstanding", meaning: "in spite of; despite", example: "Notwithstanding the challenges, the project was completed on time." },
            { word: "hitherto", meaning: "until now; up to this point", example: "The discovery revealed hitherto unknown species in the deep ocean." },
            { word: "whereby", meaning: "by which; through which", example: "They introduced a system whereby employees could work flexible hours." },
            { word: "insofar as", meaning: "to the extent that", example: "The policy is effective insofar as it addresses the root causes." },
            { word: "notwithstanding", meaning: "despite; in spite of", example: "Notwithstanding the economic downturn, the company reported growth." },
            { word: "pertinent", meaning: "relevant; applicable", example: "The researcher raised several pertinent questions about methodology." },
            { word: "unprecedented", meaning: "never done or known before", example: "The pandemic caused unprecedented disruption to global supply chains." },
            { word: "substantiate", meaning: "provide evidence to support", example: "The claims were difficult to substantiate without additional data." },
            { word: "mitigate", meaning: "make less severe; reduce", example: "Several measures were implemented to mitigate the environmental impact." }
        ],
        collocations: [
            { phrase: "draw a conclusion", example: "Based on the evidence, we can draw the conclusion that..." },
            { phrase: "pose a threat", example: "Climate change poses a significant threat to biodiversity." },
            { phrase: "reach a consensus", example: "The committee failed to reach a consensus on the proposal." },
            { phrase: "undergo a transformation", example: "The city has undergone a dramatic transformation in recent years." },
            { phrase: "exert influence", example: "Social media platforms exert considerable influence on public opinion." },
            { phrase: "bear in mind", example: "We should bear in mind that correlation does not imply causation." },
            { phrase: "take into account", example: "The study takes into account various socioeconomic factors." },
            { phrase: "give rise to", example: "Rapid urbanization has given rise to numerous environmental challenges." }
        ]
    }
};
