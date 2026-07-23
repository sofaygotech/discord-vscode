---
name: discord-presence
description: Comprehensive management, custom asset keys, multi-editor detection (Antigravity IDE, Cursor, Windsurf, Positron, Trae, Zed, VSCodium, VS Code), privacy guard, and status bar control for Discord Rich Presence by SoFayaGoTech & WISSEM.
---

# Discord Rich Presence Skill

This skill documents the complete architecture, configuration, multi-editor asset mapping, and privacy controls for the Discord Presence VS Code Extension (`discord-vscode`) maintained by **SoFayaGoTech** and **WISSEM**.

## Metadata & Links

- **Publisher**: `SoFayaGoTech`
- **Maintainers**: SoFayaGoTech & WISSEM
- **Repository**: `https://github.com/sofaygotech/discord-vscode.git`

## Key Capabilities & Features

### 1. Multi-Editor Automatic Detection

The extension automatically detects which editor environment it is running inside using `vscode.env.appName`:

- **Antigravity IDE**: `antigravity` (Active) | `idle-antigravity` (Idle)
- **Cursor**: `cursor` (Active) | `idle-cursor` (Idle)
- **Windsurf**: `windsurf` (Active) | `idle-windsurf` (Idle)
- **Positron**: `positron` (Active) | `idle-positron` (Idle)
- **Trae**: `trae` (Active) | `idle-trae` (Idle)
- **Zed**: `zed` (Active) | `idle-zed` (Idle)
- **VSCodium**: `vscodium` (Active) | `idle-vscodium` (Idle)
- **VSCodium Insiders**: `vscodium-insiders` (Active) | `idle-vscodium-insiders` (Idle)
- **VS Code Insiders**: `vscode-insiders` (Active) | `idle-vscode-insiders` (Idle)
- **VS Code Stable**: `vscode` / `visualstudio` (Active) | `idle-vscode` (Idle)

### 2. Smart Privacy Guard (`discord.privacyMode`)

When privacy mode is enabled:

- **Details**: Replaced with `discord.privacyDetails` (default: "This solution is hidden").
- **State**: Hides workspace names, repository links, line numbers, and file names.
- **Large Image Key**: Set to `discord.privacyLargeImageKey` (default: `secret`).
- **Buttons**: All buttons (repository links & custom buttons) are removed.

### 3. Idle & Sleep Transition

- **Idling (No active file)**: Shows editor logo badge (`smallImageKey`) with idle keyboard image (`largeImageKey`) and "Idling" status.
- **Sleeping (Unfocused AFK Timeout)**: Automatically transitions to `sleep` image key with "Sleeping" status when user is inactive.

### 4. Custom Buttons & Remote Repository Link

- Supports attaching up to 2 interactive buttons to the Discord Rich Presence payload.
- Automatically derives GitHub, GitLab, and Bitbucket URLs from Git remotes (`git@` / `ssh://` / `https://`).
- Supports user-configured Custom Button 1 and Custom Button 2.

### 5. Interactive Status Bar Quick Menu (`discord.toggleMenu`) & Commands

Clicking the status bar item opens a QuickPick menu allowing the user to:

- Reconnect to Discord (`discord.reconnect`)
- Toggle Presence On/Off (`discord.enable` / `discord.disable`)
- Clear Discord Activity (`discord.clearActivity`)
- View Live Extension Logs (`discord.showLogs`)

## Asset Key Fallbacks

If custom asset keys (`antigravity`, `vscode-insiders`, etc.) are not uploaded to a custom Discord Developer Portal application, constants map back to standard Discord RPC keys (`visualstudio`, `idle-vscode`, `sleep`, `cursor`) to ensure Discord never displays missing image `?` icons.

## Build & Packaging Commands

```bash
# Code formatting & linting
pnpm run format

# Typecheck and bundle with esbuild
pnpm run build

# Package extension VSIX (bypasses pnpm node_modules check)
pnpm exec vsce package --no-dependencies
```
