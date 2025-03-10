const vscode = require("vscode");

function activate(context) {
    function updateTheme() {
        const currentHour = new Date().getHours();
        const theme = (currentHour >= 6 && currentHour < 18) ? "Default Light+" : "Default Dark+";

        vscode.workspace.getConfiguration().update(
            "workbench.colorTheme",
            theme,
            vscode.ConfigurationTarget.Global
        );
    }

    // Run the function on activation
    updateTheme();

    // Check every 5 minutes
    setInterval(updateTheme, 5 * 60 * 1000);

    context.subscriptions.push(
        vscode.commands.registerCommand("autoThemeSwitcher.switchTheme", updateTheme)
    );
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
