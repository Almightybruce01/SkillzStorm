import SwiftUI
import Combine

class CrossPlatformLink: ObservableObject {
    static let shared = CrossPlatformLink()

    @Published var linkCode: String
    @Published var isLinked: Bool
    @Published var isSyncing = false
    @Published var lastSyncResult: String?

    private init() {
        let ud = UserDefaults.standard
        if let existing = ud.string(forKey: "linkCode") {
            linkCode = existing
        } else {
            let newCode = CrossPlatformLink.generateCode()
            ud.set(newCode, forKey: "linkCode")
            linkCode = newCode
        }
        isLinked = ud.bool(forKey: "isLinked")
        lastSyncResult = nil
    }

    static func generateCode() -> String {
        let chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
        return String((0..<8).map { _ in chars.randomElement()! })
    }

    func regenerateCode() {
        let newCode = CrossPlatformLink.generateCode()
        linkCode = newCode
        UserDefaults.standard.set(newCode, forKey: "linkCode")
        isLinked = false
        UserDefaults.standard.set(false, forKey: "isLinked")
        lastSyncResult = nil
    }

    @MainActor
    func syncPurchases(code: String? = nil) async {
        // Purchase syncing is intentionally disabled in the iOS app build
        // submitted to App Review.
        isSyncing = false
        lastSyncResult = "Unavailable in this version"
    }
}

struct LinkAccountView: View {
    @Environment(\.dismiss) var dismiss

    var body: some View {
        NavigationStack {
            ZStack {
                AnimatedStormBackground()

                VStack(spacing: 16) {
                    Text("Info")
                        .font(.system(size: 40))
                    Text("Feature Unavailable")
                        .font(.title2.bold())
                        .foregroundColor(.white)
                    Text("This option is disabled in this version.")
                        .font(.subheadline)
                        .foregroundColor(.white.opacity(0.7))
                        .multilineTextAlignment(.center)
                        .padding(.horizontal, 24)
                }
                .padding(24)
                .glassCard()
                .padding(.horizontal, 20)
            }
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .navigationBarTrailing) {
                    Button("Done") { dismiss() }
                        .foregroundColor(StormColors.neonBlue)
                }
            }
        }
        .preferredColorScheme(.dark)
    }
}
