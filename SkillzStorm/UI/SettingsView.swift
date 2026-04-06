import SwiftUI
import UIKit

struct SettingsView: View {
    @Environment(\.dismiss) var dismiss
    @ObservedObject var progress = PlayerProgress.shared
    @ObservedObject var sound = SoundManager.shared
    @State private var showResetConfirm = false
    @State private var showWebPrivacyGate = false
    
    private enum SettingsSheet: Identifiable {
        case freeRewards, privacy, terms
        var id: Int {
            switch self {
            case .freeRewards: return 0
            case .privacy: return 1
            case .terms: return 2
            }
        }
    }
    @State private var activeSheet: SettingsSheet?
    
    var body: some View {
        NavigationStack {
            ZStack {
                StormColors.background.ignoresSafeArea()
                
                List {
                    // Profile
                    Section {
                        HStack(spacing: Storm.isIPad ? 20 : 16) {
                            ZStack {
                                Circle()
                                    .fill(StormColors.heroGradient)
                                    .frame(width: Storm.isIPad ? 80 : 60, height: Storm.isIPad ? 80 : 60)
                                Text("⚡")
                                    .font(.system(size: Storm.isIPad ? 40 : 30))
                            }
                            
                            VStack(alignment: .leading, spacing: 4) {
                                Text("Storm Player")
                                    .font(Storm.isIPad ? .title3.bold() : .headline.bold())
                                    .foregroundColor(.white)
                                Text("Level \(progress.level) • \(progress.totalXP) XP")
                                    .font(Storm.isIPad ? .subheadline : .caption)
                                    .foregroundColor(.white.opacity(0.6))
                                Text("Grade: \(progress.selectedGrade.displayName)")
                                    .font(Storm.isIPad ? .subheadline : .caption)
                                    .foregroundColor(StormColors.neonBlue)
                            }
                        }
                        .listRowBackground(StormColors.surface)
                    }
                    
                    // Grade Selection
                    Section("Grade Level") {
                        ForEach(GradeLevel.allCases) { grade in
                            Button(action: {
                                progress.selectedGrade = grade
                                SoundManager.shared.playButtonTap()
                            }) {
                                HStack {
                                    Text(grade.emoji)
                                    Text(grade.displayName)
                                        .foregroundColor(.white)
                                    Text("(\(grade.subtitle))")
                                        .font(.caption)
                                        .foregroundColor(.white.opacity(0.5))
                                    Spacer()
                                    if progress.selectedGrade == grade {
                                        Image(systemName: "checkmark.circle.fill")
                                            .foregroundColor(StormColors.neonGreen)
                                    }
                                }
                            }
                            .listRowBackground(StormColors.surface)
                        }
                    }
                    
                    // Sound
                    Section("Sound") {
                        Toggle(isOn: Binding(
                            get: { !sound.isMuted },
                            set: { _ in sound.toggleMute() }
                        )) {
                            Label("Sound Effects", systemImage: "speaker.wave.2.fill")
                                .foregroundColor(.white)
                        }
                        .listRowBackground(StormColors.surface)
                        .tint(StormColors.neonBlue)
                    }
                    
                    // Rewards
                    Section("Rewards") {
                        if !progress.isAdFree {
                            Button(action: {
                                SoundManager.shared.playButtonTap()
                                activeSheet = .freeRewards
                            }) {
                                HStack {
                                    Label("Free Rewards", systemImage: "play.rectangle.fill")
                                        .foregroundColor(StormColors.neonGreen)
                                    Spacer()
                                    Text("Watch & Play")
                                        .font(.caption)
                                        .foregroundColor(.white.opacity(0.5))
                                }
                            }
                            .buttonStyle(.borderless)
                            .listRowBackground(StormColors.surface)
                        }
                        
                        
                    }
                    
                    // Stats
                    Section("Statistics") {
                        statRow("Games Played", "\(progress.gamesPlayed)")
                        statRow("Questions Answered", "\(progress.questionsAnswered)")
                        statRow("Accuracy", String(format: "%.1f%%", progress.accuracy))
                        statRow("Current Streak", "\(progress.currentStreak) days")
                        statRow("Total Coins", "\(progress.totalCoins)")
                        statRow("Total XP", "\(progress.totalXP)")
                    }
                    
                    // Legal (Required by App Store & COPPA)
                    Section("Legal") {
                        Button(action: { activeSheet = .privacy }) {
                            HStack {
                                Label("Privacy Policy", systemImage: "hand.raised.fill")
                                    .foregroundColor(.white)
                                Spacer()
                                Image(systemName: "chevron.right")
                                    .font(.caption)
                                    .foregroundColor(.white.opacity(0.3))
                            }
                        }
                        .buttonStyle(.borderless)
                        .listRowBackground(StormColors.surface)
                        
                        Button(action: { activeSheet = .terms }) {
                            HStack {
                                Label("Terms of Service", systemImage: "doc.text.fill")
                                    .foregroundColor(.white)
                                Spacer()
                                Image(systemName: "chevron.right")
                                    .font(.caption)
                                    .foregroundColor(.white.opacity(0.3))
                            }
                        }
                        .buttonStyle(.borderless)
                        .listRowBackground(StormColors.surface)
                        
                        Button(action: { showWebPrivacyGate = true }) {
                            HStack {
                                Label("Privacy on Web", systemImage: "globe")
                                    .foregroundColor(.white)
                                Spacer()
                                Image(systemName: "arrow.up.right.square")
                                    .font(.caption)
                                    .foregroundColor(.white.opacity(0.3))
                            }
                        }
                        .buttonStyle(.borderless)
                        .listRowBackground(StormColors.surface)
                    }
                    
                    // About
                    Section("About") {
                        HStack {
                            Text("Version")
                                .foregroundColor(.white)
                            Spacer()
                            Text("1.0.0")
                                .foregroundColor(.white.opacity(0.5))
                        }
                        .listRowBackground(StormColors.surface)
                        
                        HStack {
                            Text("Total Games")
                                .foregroundColor(.white)
                            Spacer()
                            Text("\(GameCatalog.totalGameCount)")
                                .foregroundColor(.white.opacity(0.5))
                        }
                        .listRowBackground(StormColors.surface)
                        
                        HStack {
                            Text("COPPA Compliant")
                                .foregroundColor(.white)
                            Spacer()
                            Image(systemName: "checkmark.shield.fill")
                                .foregroundColor(StormColors.neonGreen)
                        }
                        .listRowBackground(StormColors.surface)
                    }
                    
                    // Reset
                    Section {
                        Button(action: { showResetConfirm = true }) {
                            Label("Reset All Progress", systemImage: "trash.fill")
                                .foregroundColor(.red)
                        }
                        .listRowBackground(StormColors.surface)
                    }
                }
                .scrollContentBackground(.hidden)
            }
            .navigationTitle("Settings")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button("Done") { dismiss() }
                        .foregroundColor(StormColors.neonBlue)
                }
            }
            .alert("Reset Progress?", isPresented: $showResetConfirm) {
                Button("Cancel", role: .cancel) {}
                Button("Reset", role: .destructive) {
                    let domain = Bundle.main.bundleIdentifier!
                    UserDefaults.standard.removePersistentDomain(forName: domain)
                }
            } message: {
                Text("This will delete all your scores, coins, and progress. This cannot be undone.")
            }
            
            .sheet(item: $activeSheet) { sheet in
                switch sheet {
                case .freeRewards:
                    FreeRewardsView()
                case .privacy:
                    PrivacyPolicyView()
                case .terms:
                    TermsOfServiceView()
                }
            }
            .sheet(isPresented: $showWebPrivacyGate) {
                ParentalGateView(
                    onSuccess: {
                        showWebPrivacyGate = false
                        if let url = URL(string: "https://skillzstorm.com/privacy") {
                            UIApplication.shared.open(url)
                        }
                    },
                    onCancel: { showWebPrivacyGate = false }
                )
            }
        }
        .preferredColorScheme(.dark)
    }
    
    private func statRow(_ label: String, _ value: String) -> some View {
        HStack {
            Text(label)
                .foregroundColor(.white)
            Spacer()
            Text(value)
                .font(.subheadline.bold())
                .foregroundColor(StormColors.neonBlue)
        }
        .listRowBackground(StormColors.surface)
    }
}

