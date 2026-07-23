# Discord Rich Presence for Visual Studio Code & Antigravity IDE

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Publisher](https://img.shields.io/badge/publisher-SoFayaGoTech-purple.svg)
![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)

Connect your coding environment seamlessly to Discord! Automatically display active file icons, editor badges, current workspace names, Git branch details, and interactive custom buttons on your Discord profile in real-time.

---

## 🌟 Key Features

- 🤖 **Multi-Editor Automatic Detection**: Seamlessly supports **Antigravity IDE**, **Cursor**, **Windsurf**, **Positron**, **Trae**, **Zed**, **VSCodium**, and **VS Code**.
- 🔒 **Smart Privacy Guard**: Enable Privacy Mode (`discord.privacyMode`) to mask sensitive project files, workspace names, and repository URLs with secret branding (`secret`).
- 💤 **Idle & Sleep Status Transitions**: Displays an idle keyboard badge when no file is active and automatically transitions to a sleeping state when inactive or AFK.
- 🔘 **Custom Buttons & Git Remote Integration**: Attach up to 2 customizable interactive buttons (e.g. Portfolio, Discord Server) alongside auto-derived GitHub/GitLab/Bitbucket repository links.
- ⚡ **Interactive Status Bar Quick Menu**: Click `$(globe) Connected to Discord` in your status bar to quickly reconnect, toggle presence, clear activity, or view live output logs.
- 🧼 **Clean Non-Git Workspace Handling**: Intelligently displays your workspace name instead of `Branch Unknown` when editing code outside Git repositories.

---

## 🖥️ Supported Environments & Asset Mapping

The extension inspects `vscode.env.appName` to assign the proper editor logo badge and idle status key:

| Editor Environment    | Active Image Key          | Idle Image Key           |
| :-------------------- | :------------------------ | :----------------------- |
| **Antigravity IDE**   | `antigravity`             | `idle-antigravity`       |
| **Cursor**            | `cursor`                  | `idle-cursor`            |
| **Windsurf**          | `windsurf`                | `idle-windsurf`          |
| **Positron**          | `positron`                | `idle-positron`          |
| **Trae**              | `trae`                    | `idle-trae`              |
| **Zed**               | `zed`                     | `idle-zed`               |
| **VSCodium**          | `vscodium`                | `idle-vscodium`          |
| **VSCodium Insiders** | `vscodium-insiders`       | `idle-vscodium-insiders` |
| **VS Code Insiders**  | `vscode-insiders`         | `idle-vscode-insiders`   |
| **VS Code Stable**    | `vscode` / `visualstudio` | `idle-vscode`            |

> _Note: If a custom asset key is not uploaded on a specific Discord Developer Portal app, constants fall back to standard Discord RPC keys (`visualstudio`, `idle-vscode`, `sleep`, `cursor`) to ensure Discord never displays missing image `?` icons._

---

## ⚙️ Extension Settings & Configuration

Configure your Discord presence behavior in your VS Code / Antigravity IDE settings (`settings.json`):

| Setting                        | Default                     | Description                                                |
| :----------------------------- | :-------------------------- | :--------------------------------------------------------- |
| `discord.enabled`              | `true`                      | Enable or disable Discord Rich Presence across workspaces  |
| `discord.detailsEditing`       | `"Editing {file_name}"`     | Top line format when editing code                          |
| `discord.lowerDetailsEditing`  | `"Workspace: {workspace}"`  | Bottom line format when editing code                       |
| `discord.detailsIdling`        | `"Idling"`                  | Top line format when no file is active                     |
| `discord.lowerDetailsIdling`   | `"{empty}"`                 | Bottom line format when no file is active                  |
| `discord.privacyMode`          | `false`                     | Enable privacy guard to hide workspace & file names        |
| `discord.privacyDetails`       | `"This solution is hidden"` | Custom text displayed during privacy mode                  |
| `discord.privacyLargeImageKey` | `"secret"`                  | Custom image key displayed during privacy mode             |
| `discord.idleTimeout`          | `0`                         | Timeout (in seconds) to clear status when AFK (0 disables) |
| `discord.button1Label`         | `""`                        | Label for Custom Button 1                                  |
| `discord.button1Url`           | `""`                        | URL for Custom Button 1                                    |
| `discord.button2Label`         | `""`                        | Label for Custom Button 2                                  |
| `discord.button2Url`           | `""`                        | URL for Custom Button 2                                    |

### 📝 Available Formatting Variables

Use these placeholders inside `detailsEditing`, `lowerDetailsEditing`, or `detailsDebugging`:

- `{file_name}`: Current active file name (e.g. `extension.ts`)
- `{file_extension}`: Extension of current file (e.g. `ts`)
- `{dir_name}`: Parent folder name containing the current file
- `{full_dir_name}`: Relative path to current file folder
- `{workspace}`: Current workspace name
- `{workspace_folder}`: Currently accessed workspace folder name
- `{git_branch}`: Active Git branch name (e.g. `main` or `dev`)
- `{git_repo_name}`: Active Git repository name
- `{current_line}`: Current line number of active cursor
- `{total_lines}`: Total line count of active file
- `{file_size}`: Formatted size of active file (e.g. `14.5 KB`)
- `{empty}`: Renders an invisible unicode space

---

## ⌨️ Extension Commands

Access these commands via the **Command Palette** (`Ctrl+Shift+P` / `Cmd+Shift+P`) or via the status bar menu:

- `discord.enable`: Enable Discord Presence in current workspace
- `discord.disable`: Disable Discord Presence in current workspace
- `discord.reconnect`: Reconnect Discord Presence RPC client
- `discord.disconnect`: Disconnect Discord Presence RPC client
- `discord.clearActivity`: Instantly clear active Discord presence status
- `discord.toggleMenu`: Open the interactive Status Bar Quick Pick menu
- `discord.showLogs`: Open live output channel logs

---

## 🛠️ Building & Packaging from Source

Requires **Node.js** and **pnpm**:

```bash
# Install dependencies
pnpm install

# Code formatting & typecheck
pnpm run format

# Bundle entry src/extension.ts to dist/extension.cjs
pnpm run build

# Package installable .vsix extension file
pnpm exec vsce package --no-dependencies
```

---

## 👥 Authors & License

- **Publisher**: **SoFayaGoTech**
- **Author**: **SoFayaGoTech** ([sofaygotech@gmail.com](mailto:sofaygotech@gmail.com))
- **Contributor**: **WISSEM** ([wissemdev@gmail.com](mailto:wissemdev@gmail.com))
- **Repository**: [https://github.com/sofaygotech/discord-vscode.git](https://github.com/sofaygotech/discord-vscode.git)
- **License**: [MIT License](LICENSE)
