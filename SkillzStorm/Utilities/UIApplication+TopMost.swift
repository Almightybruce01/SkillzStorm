import UIKit

extension UIApplication {
    /// Returns the frontmost view controller (including sheets and modals) for presenting full-screen ads.
    func topMostViewController() -> UIViewController? {
        guard let scene = connectedScenes.first as? UIWindowScene else { return nil }
        let window = scene.windows.first { $0.isKeyWindow } ?? scene.windows.first
        guard let root = window?.rootViewController else { return nil }
        return Self.topViewController(from: root)
    }

    private static func topViewController(from vc: UIViewController) -> UIViewController {
        if let presented = vc.presentedViewController {
            return topViewController(from: presented)
        }
        if let nav = vc as? UINavigationController, let visible = nav.visibleViewController {
            return topViewController(from: visible)
        }
        if let tab = vc as? UITabBarController, let selected = tab.selectedViewController {
            return topViewController(from: selected)
        }
        return vc
    }
}
