import SwiftUI

struct ContentView: View {
    @StateObject var progress = PlayerProgress.shared
    @ObservedObject var adManager = AdManager.shared
    @State private var selectedTab = 0
    
    
    var body: some View {
        ZStack {
            StormColors.background
                .ignoresSafeArea()
            
            VStack(spacing: 0) {
                TabView(selection: $selectedTab) {
                    // Home
                    HomeView()
                        .tabItem {
                            Image(systemName: "house.fill")
                            Text("Home")
                        }
                        .tag(0)
                    
                    // Games
                    NavigationStack {
                        GameBrowserView(category: nil)
                    }
                    .tabItem {
                        Image(systemName: "gamecontroller.fill")
                        Text("Games")
                    }
                    .tag(1)
                    
                    // Daily Challenge
                    NavigationStack {
                        DailyChallengeView()
                    }
                    .tabItem {
                        Image(systemName: "calendar")
                        Text("Daily")
                    }
                    .tag(2)
                    
                    // Learning Hub
                    NavigationStack {
                        LearningHubView()
                    }
                    .tabItem {
                        Image(systemName: "book.closed.fill")
                        Text("Learn")
                    }
                    .tag(3)
                    
                    // Store
                    NavigationStack {
                        VRStoreView()
                    }
                    .tabItem {
                        Image(systemName: "cart.fill")
                        Text("Store")
                    }
                    .tag(4)
                    
                    // Profile
                    NavigationStack {
                        SettingsView()
                    }
                    .tabItem {
                        Image(systemName: "person.fill")
                        Text("Profile")
                    }
                    .tag(5)
                }
                .tint(StormColors.neonBlue)
                
                // Banner Ad (auto-hides for ad-free users)
                SmartBannerAd()
            }
        }
        .preferredColorScheme(.dark)
    }
}

#Preview {
    ContentView()
}

// MARK: - Learning Hub

struct LearningResource: Identifiable {
    let id = UUID()
    let title: String
    let url: String
}

struct LearningTopic: Identifiable {
    let id = UUID()
    let emoji: String
    let title: String
    let gradeBand: GradeLevel
    let summary: String
    let readings: [LearningResource]
    let videos: [LearningResource]
    let activities: [String]
}

struct LearningHubView: View {
    @State private var selectedGrade: GradeLevel = .three5
    @State private var search = ""
    
    private let topics: [LearningTopic] = [
        LearningTopic(
            emoji: "📝",
            title: "Adjectives & Descriptive Writing",
            gradeBand: .three5,
            summary: "Use vivid words to improve sentence quality and writing clarity.",
            readings: [
                LearningResource(title: "Khan Academy - Intro to adjectives", url: "https://www.khanacademy.org/humanities/grammar"),
                LearningResource(title: "Purdue OWL - Adjective basics", url: "https://owl.purdue.edu/owl/general_writing/grammar/index.html")
            ],
            videos: [
                LearningResource(title: "YouTube - Adjectives explained for kids", url: "https://www.youtube.com/results?search_query=adjectives+for+kids"),
                LearningResource(title: "YouTube - Adjective order", url: "https://www.youtube.com/results?search_query=order+of+adjectives")
            ],
            activities: [
                "Underline adjectives in 10 sentences.",
                "Rewrite 5 bland sentences using 2+ strong adjectives each.",
                "Describe one object using color, size, shape, and feeling words."
            ]
        ),
        LearningTopic(
            emoji: "➗",
            title: "Fractions & Decimals",
            gradeBand: .three5,
            summary: "Build confidence converting and comparing fractions and decimals.",
            readings: [
                LearningResource(title: "Khan Academy - Fractions", url: "https://www.khanacademy.org/math/arithmetic/fraction-arithmetic"),
                LearningResource(title: "Math is Fun - Fractions", url: "https://www.mathsisfun.com/fractions.html")
            ],
            videos: [
                LearningResource(title: "YouTube - Fractions for beginners", url: "https://www.youtube.com/results?search_query=fractions+for+kids"),
                LearningResource(title: "YouTube - Decimal conversion", url: "https://www.youtube.com/results?search_query=fractions+to+decimals")
            ],
            activities: [
                "Solve 12 fraction comparison problems.",
                "Convert 10 fractions to decimals.",
                "Create a pizza fraction drawing for 5 scenarios."
            ]
        ),
        LearningTopic(
            emoji: "📚",
            title: "Reading Comprehension",
            gradeBand: .k2,
            summary: "Improve understanding of stories and informational passages.",
            readings: [
                LearningResource(title: "ReadWorks", url: "https://www.readworks.org/"),
                LearningResource(title: "CommonLit", url: "https://www.commonlit.org/")
            ],
            videos: [
                LearningResource(title: "YouTube - Main idea and details", url: "https://www.youtube.com/results?search_query=main+idea+and+details+for+kids"),
                LearningResource(title: "YouTube - Reading strategies", url: "https://www.youtube.com/results?search_query=reading+comprehension+strategies+students")
            ],
            activities: [
                "Read one short passage and answer who/what/when/where/why.",
                "Write a 3-sentence summary of a story.",
                "Identify 2 facts and 1 opinion from a text."
            ]
        ),
        LearningTopic(
            emoji: "🔬",
            title: "Scientific Method",
            gradeBand: .six8,
            summary: "Practice asking questions, testing hypotheses, and analyzing results.",
            readings: [
                LearningResource(title: "NASA - Scientific method", url: "https://spaceplace.nasa.gov/review/science-fair/scientific-method.html"),
                LearningResource(title: "Science Buddies", url: "https://www.sciencebuddies.org/science-fair-projects/science-fair/steps-of-the-scientific-method")
            ],
            videos: [
                LearningResource(title: "YouTube - Scientific method walkthrough", url: "https://www.youtube.com/results?search_query=scientific+method+for+middle+school"),
                LearningResource(title: "YouTube - Variables in experiments", url: "https://www.youtube.com/results?search_query=independent+and+dependent+variables+students")
            ],
            activities: [
                "Design one mini experiment with hypothesis and variables.",
                "Run observation log for 3 days and graph results.",
                "Write a 1-page conclusion using claim/evidence/reasoning."
            ]
        ),
        LearningTopic(
            emoji: "📐",
            title: "Geometry Basics",
            gradeBand: .six8,
            summary: "Master shapes, area, perimeter, and angles.",
            readings: [
                LearningResource(title: "Khan Academy - Geometry", url: "https://www.khanacademy.org/math/geometry"),
                LearningResource(title: "Math Open Reference", url: "https://www.mathopenref.com/")
            ],
            videos: [
                LearningResource(title: "YouTube - Area and perimeter", url: "https://www.youtube.com/results?search_query=area+and+perimeter+middle+school"),
                LearningResource(title: "YouTube - Angle types", url: "https://www.youtube.com/results?search_query=types+of+angles+lesson")
            ],
            activities: [
                "Calculate area/perimeter for 12 figures.",
                "Measure and classify 15 angles at home.",
                "Design a room layout and compute floor area."
            ]
        ),
        LearningTopic(
            emoji: "🧠",
            title: "Critical Thinking & Logic",
            gradeBand: .nine12,
            summary: "Develop reasoning through argument analysis and logic puzzles.",
            readings: [
                LearningResource(title: "Stanford Encyclopedia of Philosophy - Logic intro", url: "https://plato.stanford.edu/entries/logic-classical/"),
                LearningResource(title: "YourLogicalFallacyIs", url: "https://yourlogicalfallacyis.com/")
            ],
            videos: [
                LearningResource(title: "YouTube - Logical fallacies", url: "https://www.youtube.com/results?search_query=logical+fallacies+explained"),
                LearningResource(title: "YouTube - Critical thinking skills", url: "https://www.youtube.com/results?search_query=critical+thinking+for+students")
            ],
            activities: [
                "Find 5 fallacies in ads or social posts.",
                "Write a claim-evidence-reasoning paragraph.",
                "Solve 10 logic grid puzzles."
            ]
        ),
        LearningTopic(
            emoji: "📖",
            title: "Vocabulary Building",
            gradeBand: .three5,
            summary: "Learn roots, prefixes, and context clues to grow vocabulary.",
            readings: [
                LearningResource(title: "Vocabulary.com", url: "https://www.vocabulary.com/"),
                LearningResource(title: "Merriam-Webster Word of the Day", url: "https://www.merriam-webster.com/word-of-the-day")
            ],
            videos: [
                LearningResource(title: "YouTube - Context clues", url: "https://www.youtube.com/results?search_query=context+clues+lesson"),
                LearningResource(title: "YouTube - Prefixes and suffixes", url: "https://www.youtube.com/results?search_query=prefixes+suffixes+for+students")
            ],
            activities: [
                "Create 20-word weekly vocabulary deck.",
                "Use each new word in a sentence.",
                "Group 15 words by roots/prefixes."
            ]
        ),
        LearningTopic(
            emoji: "📜",
            title: "US History Foundations",
            gradeBand: .six8,
            summary: "Understand key events, causes, and effects in U.S. history.",
            readings: [
                LearningResource(title: "Library of Congress Classroom Materials", url: "https://www.loc.gov/classroom-materials/"),
                LearningResource(title: "History.com topics", url: "https://www.history.com/topics")
            ],
            videos: [
                LearningResource(title: "YouTube - US history timeline", url: "https://www.youtube.com/results?search_query=us+history+timeline+for+students"),
                LearningResource(title: "YouTube - Cause and effect in history", url: "https://www.youtube.com/results?search_query=cause+and+effect+history+lesson")
            ],
            activities: [
                "Build a 10-event timeline with brief notes.",
                "Write one cause/effect paragraph per event.",
                "Create flashcards for 20 key terms."
            ]
        ),
        LearningTopic(
            emoji: "💻",
            title: "Computer Science Basics",
            gradeBand: .nine12,
            summary: "Learn algorithms, decomposition, and coding fundamentals.",
            readings: [
                LearningResource(title: "Code.org curriculum", url: "https://code.org/"),
                LearningResource(title: "CS Unplugged", url: "https://csunplugged.org/en/")
            ],
            videos: [
                LearningResource(title: "YouTube - Intro to algorithms", url: "https://www.youtube.com/results?search_query=introduction+to+algorithms+students"),
                LearningResource(title: "YouTube - Computational thinking", url: "https://www.youtube.com/results?search_query=computational+thinking+for+students")
            ],
            activities: [
                "Write pseudocode for 3 daily tasks.",
                "Solve 5 pattern-based logic problems.",
                "Build one mini game and document debugging steps."
            ]
        ),
        LearningTopic(
            emoji: "💵",
            title: "Financial Literacy",
            gradeBand: .nine12,
            summary: "Practice budgeting, saving, and understanding interest.",
            readings: [
                LearningResource(title: "Consumer Financial Protection Bureau", url: "https://www.consumerfinance.gov/consumer-tools/"),
                LearningResource(title: "Practical Money Skills", url: "https://www.practicalmoneyskills.com/")
            ],
            videos: [
                LearningResource(title: "YouTube - Budgeting for teens", url: "https://www.youtube.com/results?search_query=budgeting+for+teens"),
                LearningResource(title: "YouTube - Compound interest explained", url: "https://www.youtube.com/results?search_query=compound+interest+explained+students")
            ],
            activities: [
                "Create a monthly budget with fixed/flexible costs.",
                "Compute savings growth at 3 interest rates.",
                "Analyze one real-world purchase decision."
            ]
        )
    ]
    
    private var filteredTopics: [LearningTopic] {
        topics.filter {
            let gradeMatch = $0.gradeBand == selectedGrade || selectedGrade == .k2 && $0.gradeBand == .three5
            if search.isEmpty { return gradeMatch }
            return gradeMatch && ($0.title.localizedCaseInsensitiveContains(search) || $0.summary.localizedCaseInsensitiveContains(search))
        }
    }
    
    var body: some View {
        ZStack {
            AnimatedStormBackground()
            ScrollView(showsIndicators: false) {
                VStack(spacing: 16) {
                    header
                    gradeSelector
                    searchBar
                    
                    NavigationLink(destination: StudyCoachView()) {
                        coachCard
                    }
                    .buttonStyle(.plain)
                    
                    ForEach(filteredTopics) { topic in
                        NavigationLink(destination: LearningTopicDetailView(topic: topic)) {
                            topicCard(topic)
                        }
                        .buttonStyle(.plain)
                    }
                    
                    Color.clear.frame(height: 40)
                }
                .padding(.horizontal, Storm.isIPad ? 40 : 20)
                .readableWidth()
                .padding(.top, 12)
            }
        }
        .navigationTitle("Learning Hub")
        .navigationBarTitleDisplayMode(.inline)
    }
    
    private var header: some View {
        VStack(spacing: 6) {
            Text("LEARNING CENTER")
                .font(Storm.font(26, weight: .black, design: .rounded))
                .foregroundStyle(StormColors.heroGradient)
            Text("10 topics • readings • videos • activities")
                .font(.caption)
                .foregroundColor(.white.opacity(0.65))
        }
    }
    
    private var gradeSelector: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 10) {
                ForEach(GradeLevel.allCases) { grade in
                    Button {
                        selectedGrade = grade
                    } label: {
                        Text("\(grade.emoji) \(grade.displayName)")
                            .font(.caption.bold())
                            .foregroundColor(selectedGrade == grade ? .white : .white.opacity(0.7))
                            .padding(.horizontal, 14)
                            .padding(.vertical, 8)
                            .background(selectedGrade == grade ? StormColors.neonBlue.opacity(0.45) : StormColors.surface)
                            .cornerRadius(16)
                    }
                }
            }
        }
    }
    
    private var searchBar: some View {
        HStack(spacing: 10) {
            Image(systemName: "magnifyingglass").foregroundColor(.white.opacity(0.5))
            TextField("Search topics...", text: $search)
                .foregroundColor(.white)
                .autocorrectionDisabled()
        }
        .padding(12)
        .background(StormColors.surface)
        .cornerRadius(14)
    }
    
    private var coachCard: some View {
        HStack(spacing: 12) {
            Image(systemName: "sparkles.rectangle.stack.fill")
                .font(.title2)
                .foregroundColor(StormColors.neonYellow)
                .frame(width: 42, height: 42)
                .background(StormColors.neonYellow.opacity(0.15))
                .cornerRadius(10)
            VStack(alignment: .leading, spacing: 2) {
                Text("AI Study Coach")
                    .font(.headline.bold())
                    .foregroundColor(.white)
                Text("Generate lesson plans + assignments by age and skill gap")
                    .font(.caption)
                    .foregroundColor(.white.opacity(0.6))
            }
            Spacer()
            Image(systemName: "chevron.right.circle.fill")
                .foregroundColor(StormColors.neonYellow)
        }
        .padding(14)
        .glassCard()
    }
    
    private func topicCard(_ topic: LearningTopic) -> some View {
        HStack(alignment: .top, spacing: 12) {
            Text(topic.emoji)
                .font(.system(size: 30))
                .frame(width: 44, height: 44)
                .background(StormColors.surfaceLight)
                .cornerRadius(10)
            
            VStack(alignment: .leading, spacing: 4) {
                Text(topic.title)
                    .font(.headline.bold())
                    .foregroundColor(.white)
                Text(topic.summary)
                    .font(.subheadline)
                    .foregroundColor(.white.opacity(0.7))
                Text("Best for \(topic.gradeBand.displayName)")
                    .font(.caption)
                    .foregroundColor(StormColors.neonBlue)
            }
            Spacer()
        }
        .padding(14)
        .glassCard()
    }
}

struct LearningTopicDetailView: View {
    let topic: LearningTopic
    
    var body: some View {
        ZStack {
            AnimatedStormBackground()
            ScrollView(showsIndicators: false) {
                VStack(alignment: .leading, spacing: 14) {
                    Text("\(topic.emoji) \(topic.title)")
                        .font(Storm.font(24, weight: .black, design: .rounded))
                        .foregroundStyle(StormColors.heroGradient)
                    
                    Text(topic.summary)
                        .font(.subheadline)
                        .foregroundColor(.white.opacity(0.75))
                    
                    resourceSection("Readings", icon: "book.fill", resources: topic.readings, color: StormColors.neonBlue)
                    resourceSection("Videos", icon: "play.rectangle.fill", resources: topic.videos, color: StormColors.neonPink)
                    
                    VStack(alignment: .leading, spacing: 10) {
                        Text("Activities")
                            .font(.headline.bold())
                            .foregroundColor(StormColors.neonGreen)
                        ForEach(topic.activities, id: \.self) { activity in
                            HStack(alignment: .top, spacing: 8) {
                                Image(systemName: "checkmark.circle.fill")
                                    .foregroundColor(StormColors.neonGreen)
                                    .font(.caption)
                                    .padding(.top, 2)
                                Text(activity)
                                    .foregroundColor(.white.opacity(0.85))
                                    .font(.subheadline)
                            }
                        }
                    }
                    .padding(14)
                    .glassCard()
                    
                    Color.clear.frame(height: 20)
                }
                .padding(.horizontal, Storm.isIPad ? 40 : 20)
                .readableWidth()
                .padding(.top, 12)
            }
        }
        .navigationBarTitleDisplayMode(.inline)
    }
    
    @ViewBuilder
    private func resourceSection(_ title: String, icon: String, resources: [LearningResource], color: Color) -> some View {
        VStack(alignment: .leading, spacing: 10) {
            Label(title, systemImage: icon)
                .font(.headline.bold())
                .foregroundColor(color)
            ForEach(resources) { resource in
                GatedExternalResourceLink(title: resource.title, urlString: resource.url, color: color)
            }
        }
        .padding(14)
        .glassCard()
    }
}

struct StudyCoachView: View {
    @State private var studentName = ""
    @State private var age = 10
    @State private var grade: GradeLevel = .three5
    @State private var skillFocus = "Adjectives"
    @State private var teacherGoal = "Write stronger sentences"
    @State private var planText = ""
    
    var body: some View {
        ZStack {
            AnimatedStormBackground()
            ScrollView(showsIndicators: false) {
                VStack(alignment: .leading, spacing: 14) {
                    Text("AI Study Coach")
                        .font(Storm.font(24, weight: .black, design: .rounded))
                        .foregroundStyle(StormColors.heroGradient)
                    
                    coachForm
                    generateButton
                    
                    if !planText.isEmpty {
                        Text("Generated Plan")
                            .font(.headline.bold())
                            .foregroundColor(StormColors.neonYellow)
                        Text(planText)
                            .font(.subheadline)
                            .foregroundColor(.white.opacity(0.9))
                            .padding(14)
                            .glassCard()
                    }
                    
                    Color.clear.frame(height: 20)
                }
                .padding(.horizontal, Storm.isIPad ? 40 : 20)
                .readableWidth()
                .padding(.top, 12)
            }
        }
        .navigationBarTitleDisplayMode(.inline)
    }
    
    private var coachForm: some View {
        VStack(alignment: .leading, spacing: 10) {
            TextField("Student name (optional)", text: $studentName)
                .textFieldStyle(.plain)
                .foregroundColor(.white)
                .padding(10)
                .background(StormColors.surface)
                .cornerRadius(10)
            
            Stepper("Age: \(age)", value: $age, in: 5...18)
                .foregroundColor(.white)
            
            Picker("Grade", selection: $grade) {
                ForEach(GradeLevel.allCases) { g in
                    Text(g.displayName).tag(g)
                }
            }
            .pickerStyle(.segmented)
            
            TextField("Skill struggle (e.g. adjectives, fractions)", text: $skillFocus)
                .textFieldStyle(.plain)
                .foregroundColor(.white)
                .padding(10)
                .background(StormColors.surface)
                .cornerRadius(10)
            
            TextField("Goal (e.g. improve paragraph writing)", text: $teacherGoal)
                .textFieldStyle(.plain)
                .foregroundColor(.white)
                .padding(10)
                .background(StormColors.surface)
                .cornerRadius(10)
        }
        .padding(14)
        .glassCard()
    }
    
    private var generateButton: some View {
        Button {
            planText = buildPlan()
        } label: {
            HStack {
                Image(systemName: "wand.and.stars")
                Text("Generate Lesson Plan + Assignments")
                    .font(.headline.bold())
            }
            .foregroundColor(.white)
            .frame(maxWidth: .infinity)
            .padding(.vertical, 14)
            .background(StormColors.heroGradient)
            .cornerRadius(14)
        }
    }
    
    private func buildPlan() -> String {
        let name = studentName.isEmpty ? "Student" : studentName
        let difficulty: String
        switch grade {
        case .k2: difficulty = "simple words, visuals, and 10-15 minute tasks"
        case .three5: difficulty = "guided practice and short writing responses"
        case .six8: difficulty = "mixed practice, analysis, and paragraph evidence"
        case .nine12: difficulty = "independent analysis and extended writing"
        }
        
        return """
        Student: \(name) (Age \(age), Grade \(grade.displayName))
        Focus Area: \(skillFocus)
        Goal: \(teacherGoal)
        
        7-Day Lesson Plan:
        Day 1: Baseline check (10 questions) and error review.
        Day 2: Mini-lesson + modeled examples (\(difficulty)).
        Day 3: Guided practice in SkillzStorm games related to \(skillFocus).
        Day 4: Targeted correction session (mistake patterns + reteach).
        Day 5: Independent assignment set + reflection.
        Day 6: Timed challenge + confidence rebuild activity.
        Day 7: Re-assessment, compare baseline, and set next goal.
        
        Individual Assignments:
        1) Complete 15 focused practice questions on \(skillFocus).
        2) Write or solve 5 real-world examples related to the topic.
        3) Teach-back task: explain the rule in 5 sentences to a parent.
        4) Complete one SkillzStorm game run and record weak spots.
        5) End-of-week quiz (10 questions) and review missed answers.
        
        Parent Teaching Tips:
        - Use short sessions (15-20 min), then break.
        - Ask the student to explain "why" after each answer.
        - Praise effort + correction, not only perfect scores.
        - Track 2 wins and 1 growth area each day.
        """
    }
}
