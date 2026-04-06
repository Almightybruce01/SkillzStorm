import SwiftUI
import UIKit

/// How `ParentalGateView` is shown: sheet (Settings, store, links) vs full-screen overlay (multiplayer lobby).
enum ParentalGatePresentationStyle {
    /// `NavigationStack` + addition — use inside `.sheet`.
    case sheetNavigation
    /// Dark overlay + card + multiplication — use embedded in a `ZStack` (e.g. multiplayer).
    case embeddedFullScreen
}

/// Parental gate for Kids category (Guideline 1.3): adult math verification before web, commerce, or multiplayer.
struct ParentalGateView: View {
    @Environment(\.dismiss) private var dismiss

    var title: String
    var description: String?
    let onSuccess: () -> Void
    var onCancel: (() -> Void)?
    var style: ParentalGatePresentationStyle

    @State private var a = 0
    @State private var b = 0
    @State private var answerText = ""
    @State private var showWrong = false

    @State private var num1 = 12
    @State private var num2 = 12
    @State private var multAnswer = ""
    @State private var showMultError = false
    @State private var attempts = 0

    private var expectedSum: Int { a + b }
    private var expectedProduct: Int { num1 * num2 }

    init(
        title: String = "Ask a parent or guardian",
        description: String? = nil,
        style: ParentalGatePresentationStyle = .sheetNavigation,
        onSuccess: @escaping () -> Void,
        onCancel: (() -> Void)? = nil
    ) {
        self.title = title
        self.description = description
        self.style = style
        self.onSuccess = onSuccess
        self.onCancel = onCancel
    }

    var body: some View {
        switch style {
        case .sheetNavigation:
            sheetNavigationBody
        case .embeddedFullScreen:
            embeddedFullScreenBody
        }
    }

    private var sheetNavigationBody: some View {
        NavigationStack {
            ZStack {
                StormColors.background.ignoresSafeArea()

                VStack(spacing: 20) {
                    Image(systemName: "figure.and.child.holdinghands")
                        .font(.system(size: 44))
                        .foregroundStyle(StormColors.heroGradient)

                    Text(title)
                        .font(.title2.bold())
                        .foregroundColor(.white)
                        .multilineTextAlignment(.center)

                    if let description {
                        Text(description)
                            .font(.subheadline)
                            .foregroundColor(.white.opacity(0.65))
                            .multilineTextAlignment(.center)
                            .padding(.horizontal)
                    } else {
                        Text("To continue, an adult should answer this question:")
                            .font(.subheadline)
                            .foregroundColor(.white.opacity(0.65))
                            .multilineTextAlignment(.center)
                            .padding(.horizontal)
                    }

                    Text("What is \(a) + \(b)?")
                        .font(.system(size: 28, weight: .black, design: .rounded))
                        .foregroundColor(StormColors.neonYellow)

                    TextField("Answer", text: $answerText)
                        .keyboardType(.numberPad)
                        .textContentType(.none)
                        .autocorrectionDisabled()
                        .padding(14)
                        .background(StormColors.surface)
                        .cornerRadius(12)
                        .foregroundColor(.white)
                        .padding(.horizontal, 24)

                    if showWrong {
                        Text("That’s not quite right. Try again or tap Cancel.")
                            .font(.caption)
                            .foregroundColor(StormColors.neonPink)
                            .multilineTextAlignment(.center)
                            .padding(.horizontal)
                    }

                    Button(action: submitAddition) {
                        Text("Continue")
                            .font(.headline.bold())
                            .foregroundColor(.white)
                            .frame(maxWidth: .infinity)
                            .padding(.vertical, 14)
                            .background(StormColors.heroGradient)
                            .cornerRadius(14)
                    }
                    .padding(.horizontal, 24)
                    .padding(.top, 8)

                    Spacer()
                }
                .padding(.top, 24)
            }
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .cancellationAction) {
                    Button("Cancel") {
                        onCancel?()
                        dismiss()
                    }
                    .foregroundColor(StormColors.neonBlue)
                }
            }
            .onAppear {
                if a == 0 && b == 0 {
                    a = Int.random(in: 12...49)
                    b = Int.random(in: 12...49)
                }
            }
        }
        .preferredColorScheme(.dark)
    }

    private var embeddedFullScreenBody: some View {
        ZStack {
            Color.black.opacity(0.85)
                .ignoresSafeArea()
                .onTapGesture { onCancel?() }

            VStack(spacing: 20) {
                Image(systemName: "lock.shield.fill")
                    .font(.system(size: 40))
                    .foregroundStyle(StormColors.heroGradient)

                Text("Parental Verification")
                    .font(.system(size: 22, weight: .black, design: .rounded))
                    .foregroundColor(.white)

                Text(title)
                    .font(.headline)
                    .foregroundColor(StormColors.neonBlue)
                    .multilineTextAlignment(.center)

                if let description {
                    Text(description)
                        .font(.subheadline)
                        .foregroundColor(.white.opacity(0.6))
                        .multilineTextAlignment(.center)
                        .padding(.horizontal, 20)
                }

                Divider().background(Color.white.opacity(0.2))

                Text("To continue, solve this math problem:")
                    .font(.caption)
                    .foregroundColor(.white.opacity(0.5))

                Text("What is \(num1) × \(num2)?")
                    .font(.system(size: 24, weight: .bold, design: .rounded))
                    .foregroundColor(.white)

                TextField("Enter answer", text: $multAnswer)
                    .keyboardType(.numberPad)
                    .font(.title2.bold())
                    .foregroundColor(.white)
                    .multilineTextAlignment(.center)
                    .padding(14)
                    .background(StormColors.surface)
                    .cornerRadius(12)
                    .overlay(
                        RoundedRectangle(cornerRadius: 12)
                            .stroke(showMultError ? StormColors.neonRed : Color.white.opacity(0.1), lineWidth: 1)
                    )
                    .frame(width: 200)

                if showMultError {
                    Text("Incorrect answer. Please try again.")
                        .font(.caption)
                        .foregroundColor(StormColors.neonRed)
                }

                HStack(spacing: 16) {
                    Button(action: { onCancel?() }) {
                        Text("Cancel")
                            .font(.headline)
                            .foregroundColor(.white.opacity(0.6))
                            .padding(.horizontal, 28)
                            .padding(.vertical, 12)
                            .background(StormColors.surface)
                            .cornerRadius(12)
                    }

                    Button(action: verifyMultiplication) {
                        Text("Verify")
                            .font(.headline.bold())
                            .foregroundColor(.white)
                            .padding(.horizontal, 28)
                            .padding(.vertical, 12)
                            .background(StormColors.heroGradient)
                            .cornerRadius(12)
                    }
                }
            }
            .padding(28)
            .background(StormColors.surface)
            .cornerRadius(24)
            .overlay(
                RoundedRectangle(cornerRadius: 24)
                    .stroke(StormColors.neonBlue.opacity(0.3), lineWidth: 1)
            )
            .shadow(color: StormColors.neonBlue.opacity(0.2), radius: 20)
            .padding(30)
        }
        .onAppear {
            num1 = Int.random(in: 12...29)
            num2 = Int.random(in: 12...29)
        }
    }

    private func submitAddition() {
        guard let v = Int(answerText.trimmingCharacters(in: .whitespacesAndNewlines)), v == expectedSum else {
            showWrong = true
            return
        }
        showWrong = false
        dismiss()
        onSuccess()
    }

    private func verifyMultiplication() {
        if Int(multAnswer.trimmingCharacters(in: .whitespacesAndNewlines)) == expectedProduct {
            onSuccess()
        } else {
            showMultError = true
            multAnswer = ""
            attempts += 1
            if attempts >= 3 {
                num1 = Int.random(in: 12...29)
                num2 = Int.random(in: 12...29)
                attempts = 0
            }
        }
    }
}

/// Row that opens Safari only after parental gate succeeds.
struct GatedExternalResourceLink: View {
    let title: String
    let urlString: String
    let color: Color

    @State private var showGate = false

    var body: some View {
        Button {
            showGate = true
        } label: {
            HStack {
                Text(title)
                    .foregroundColor(.white)
                    .font(.subheadline)
                Spacer()
                Image(systemName: "arrow.up.right.square.fill")
                    .foregroundColor(color)
            }
            .padding(.vertical, 6)
        }
        .buttonStyle(.plain)
        .sheet(isPresented: $showGate) {
            ParentalGateView(
                onSuccess: {
                    showGate = false
                    if let url = URL(string: urlString) {
                        UIApplication.shared.open(url)
                    }
                },
                onCancel: { showGate = false }
            )
        }
    }
}
