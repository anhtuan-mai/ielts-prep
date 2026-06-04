// Cambridge IELTS 17 — Test 1 Listening — EXACT questions and answers from the book
// This file supplements data.js with real Cambridge content

const CAMBRIDGE_17_LISTENING = {
    test1: {
        part1: {
            title: "Cambridge 17 — Test 1, Part 1: Buckworth Conservation Group",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/ELT_IELTS17_t1_audio1.mp3",
            instruction: "Complete the notes below. Write ONE WORD AND/OR A NUMBER for each answer.",
            questions: [
                { num: 1, q: "Making sure the beach does not have ___ on it", type: "fill", answer: "litter" },
                { num: 2, q: "No ___", type: "fill", answer: "dogs" },
                { num: 3, q: "Next task is taking action to attract ___ to the place", type: "fill", answer: "insects" },
                { num: 4, q: "Identifying types of ___", type: "fill", answer: "butterflies" },
                { num: 5, q: "Building a new ___", type: "fill", answer: "wall" },
                { num: 6, q: "Walk across the sands and reach the ___", type: "fill", answer: "island" },
                { num: 7, q: "Wear appropriate ___", type: "fill", answer: "boots" },
                { num: 8, q: "Suitable for ___ to participate in", type: "fill", answer: "beginners" },
                { num: 9, q: "Making ___ out of wood", type: "fill", answer: "spoons" },
                { num: 10, q: "Cost of session (no camping): £___", type: "fill", answer: "35" }
            ]
        },
        part2: {
            title: "Cambridge 17 — Test 1, Part 2: Boat trip round Tasmania",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/ELT_IELTS17_t1_audio2.mp3",
            instruction: "Choose the correct letter, A, B or C.",
            questions: [
                { num: 11, q: "What is the maximum number of people who can stand on each side of the boat?",
                  options: ["A. 9", "B. 15", "C. 18"], answer: 0 },
                { num: 12, q: "What colour are the tour boats?",
                  options: ["A. dark red", "B. jet black", "C. light green"], answer: 2 },
                { num: 13, q: "Which lunchbox is suitable for someone who doesn't eat meat or fish?",
                  options: ["A. Lunchbox 1", "B. Lunchbox 2", "C. Lunchbox 3"], answer: 1 },
                { num: 14, q: "What should people do with their litter?",
                  options: ["A. take it home", "B. hand it to a member of staff", "C. put it in the bins provided on the boat"], answer: 1 },
                { num: 15, q: "Which TWO features of the lighthouse does Lou mention? (Choose TWO letters A-E)",
                  options: ["A. why it was built", "B. who built it", "C. how long it took to build", "D. who staffed it", "E. what it was built with"],
                  answer: [0, 3], type: "multi" },
                { num: 17, q: "Which TWO types of creature might come close to the boat? (Choose TWO letters A-E)",
                  options: ["A. sea eagles", "B. fur seals", "C. dolphins", "D. whales", "E. penguins"],
                  answer: [1, 2], type: "multi" },
                { num: 19, q: "Which TWO points does Lou make about the caves? (Choose TWO letters A-E)",
                  options: ["A. Only large tourist boats can visit them.", "B. The entrances to them are often blocked.", "C. It is too dangerous for individuals to go near them.", "D. Someone will explain what is inside them.", "E. They cannot be reached on foot."],
                  answer: [3, 4], type: "multi" }
            ]
        },
        part3: {
            title: "Cambridge 17 — Test 1, Part 3: Work experience for veterinary science students",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/ELT_IELTS17_t1_audio3.mp3",
            instruction: "Choose the correct letter, A, B or C.",
            questions: [
                { num: 21, q: "What problem did both Diana and Tim have when arranging their work experience?",
                  options: ["A. making initial contact with suitable farms", "B. organising transport to and from the farm", "C. finding a placement for the required length of time"], answer: 0 },
                { num: 22, q: "Tim was pleased to be able to help",
                  options: ["A. a lamb that had a broken leg.", "B. a sheep that was having difficulty giving birth.", "C. a newly born lamb that was having trouble feeding."], answer: 1 },
                { num: 23, q: "Diana says the sheep on her farm",
                  options: ["A. were of various different varieties.", "B. were mainly reared for their meat.", "C. had better quality wool than sheep on the hills."], answer: 1 },
                { num: 24, q: "What did the students learn about adding supplements to chicken feed?",
                  options: ["A. These should only be given if specially needed.", "B. It is worth paying extra for the most effective ones.", "C. The amount given at one time should be limited."], answer: 0 },
                { num: 25, q: "What happened when Diana was working with dairy cows?",
                  options: ["A. She identified some cows incorrectly.", "B. She accidentally threw some milk away.", "C. She made a mistake when storing milk."], answer: 2 },
                { num: 26, q: "What did both farmers mention about vets and farming?",
                  options: ["A. Vets are failing to cope with some aspects of animal health.", "B. There needs to be a fundamental change in the training of vets.", "C. Some jobs could be done by the farmer rather than by a vet."], answer: 2 },
                { num: 27, q: "Medical terminology — What opinion do the students give?",
                  options: ["A. Tim found this easier than expected.", "B. Tim thought this was not very clearly organised.", "C. Diana may do some further study on this.", "D. They both found the reading required for this was difficult.", "E. Tim was shocked at something he learned on this module.", "F. They were both surprised how little is known about some aspects of this."],
                  answer: 0 },
                { num: 28, q: "Diet and nutrition — What opinion do the students give?",
                  options: ["A. Tim found this easier than expected.", "B. Tim thought this was not very clearly organised.", "C. Diana may do some further study on this.", "D. They both found the reading required for this was difficult.", "E. Tim was shocked at something he learned on this module.", "F. They were both surprised how little is known about some aspects of this."],
                  answer: 4 },
                { num: 29, q: "Animal disease — What opinion do the students give?",
                  options: ["A. Tim found this easier than expected.", "B. Tim thought this was not very clearly organised.", "C. Diana may do some further study on this.", "D. They both found the reading required for this was difficult.", "E. Tim was shocked at something he learned on this module.", "F. They were both surprised how little is known about some aspects of this."],
                  answer: 5 },
                { num: 30, q: "Wildlife medication — What opinion do the students give?",
                  options: ["A. Tim found this easier than expected.", "B. Tim thought this was not very clearly organised.", "C. Diana may do some further study on this.", "D. They both found the reading required for this was difficult.", "E. Tim was shocked at something he learned on this module.", "F. They were both surprised how little is known about some aspects of this."],
                  answer: 2 }
            ]
        },
        part4: {
            title: "Cambridge 17 — Test 1, Part 4: Labyrinths",
            audioFile: "https://github.com/anhtuan-mai/ielts-prep/releases/download/audio-v1/ELT_IELTS17_t1_audio4.mp3",
            instruction: "Complete the notes below. Write ONE WORD ONLY for each answer.",
            questions: [
                { num: 31, q: "Mazes are a type of ___", type: "fill", answer: "puzzle" },
                { num: 32, q: "___ is needed to navigate through a maze", type: "fill", answer: "logic" },
                { num: 33, q: "The word 'maze' is derived from a word meaning a feeling of ___", type: "fill", answer: "confusion" },
                { num: 34, q: "Labyrinths have frequently been used in ___ and prayer", type: "fill", answer: "meditation" },
                { num: 35, q: "Ancient carvings on ___ have been found across many cultures", type: "fill", answer: "stone" },
                { num: 36, q: "Ancient Greeks used the symbol on ___", type: "fill", answer: "coins" },
                { num: 37, q: "The largest surviving example of a turf labyrinth once had a big ___ at its centre", type: "fill", answer: "tree" },
                { num: 38, q: "Good for relaxation: walking at an appropriate speed has been shown to reduce ___", type: "fill", answer: "breathing" },
                { num: 39, q: "In a study patients given medication wrapped in ___ absorbed it more quickly", type: "fill", answer: "paper" },
                { num: 40, q: "Also found to reduce levels of ___", type: "fill", answer: "anxiety" }
            ]
        }
    }
};
