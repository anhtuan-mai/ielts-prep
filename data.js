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
        {
            id: "l1",
            title: "University Library Tour",
            description: "You will hear a librarian giving information to new students about library services. Complete the notes below.",
            questions: [
                { q: "The library is open from 8am to ___ on weekdays.", options: ["9pm", "10pm", "11pm", "midnight"], answer: 2 },
                { q: "Students can borrow up to ___ books at a time.", options: ["5", "8", "10", "12"], answer: 2 },
                { q: "The quiet study area is located on the ___ floor.", options: ["second", "third", "fourth", "fifth"], answer: 1 },
                { q: "To reserve a group study room, students should book at least ___ in advance.", options: ["24 hours", "48 hours", "3 days", "1 week"], answer: 1 }
            ]
        },
        {
            id: "l2",
            title: "Job Interview Preparation",
            description: "You will hear two students discussing preparation for job interviews. Choose the correct answer.",
            questions: [
                { q: "According to the speakers, the most common mistake in interviews is:", options: ["Arriving late", "Not researching the company", "Wearing inappropriate clothes", "Talking too much"], answer: 1 },
                { q: "They recommend practicing answers for ___ before the interview.", options: ["10 minutes", "30 minutes", "1 hour", "2 hours"], answer: 2 },
                { q: "The career center offers mock interviews on:", options: ["Mondays only", "Weekdays", "Tuesdays and Thursdays", "By appointment"], answer: 3 },
                { q: "They suggest bringing ___ copies of your CV to an interview.", options: ["1", "2", "3", "5"], answer: 2 }
            ]
        },
        {
            id: "l3",
            title: "Environmental Lecture",
            description: "You will hear part of a lecture about renewable energy. Choose the correct answer for each question.",
            questions: [
                { q: "The lecturer states that solar energy capacity has ___ in the last decade.", options: ["doubled", "tripled", "quadrupled", "increased tenfold"], answer: 2 },
                { q: "The main disadvantage of wind energy mentioned is:", options: ["High cost", "Noise pollution", "Intermittency", "Land use"], answer: 2 },
                { q: "According to the lecture, which country leads in geothermal energy?", options: ["USA", "Japan", "Iceland", "New Zealand"], answer: 2 },
                { q: "The lecturer predicts renewables will provide ___% of global electricity by 2040.", options: ["40", "50", "60", "70"], answer: 2 }
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
