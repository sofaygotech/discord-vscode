# Project Agent Guidelines for Discord Presence (`discord-vscode`)

## Repository Overview

This repository contains the Visual Studio Code / Antigravity IDE extension for Discord Rich Presence (`discord-vscode`).
It automatically updates Discord status with active file info, language icons, editor logos, git branch/repo links, and privacy settings.

- **Publisher**: `SoFayaGoTech`
- **Author**: `SoFayaGoTech` (`sofaygotech@gmail.com`)
- **Contributor**: `WISSEM` (`wissemdev@gmail.com`)
- **Repository**: `https://github.com/sofaygotech/discord-vscode.git`

## Environment & Editors Supported

- **Antigravity IDE**: Asset keys `antigravity` (Active) / `idle-antigravity` (Idle)
- **Cursor**: Asset keys `cursor` (Active) / `idle-cursor` (Idle)
- **Windsurf**: Asset keys `windsurf` (Active) / `idle-windsurf` (Idle)
- **Positron**: Asset keys `positron` (Active) / `idle-positron` (Idle)
- **Trae**: Asset keys `trae` (Active) / `idle-trae` (Idle)
- **Zed**: Asset keys `zed` (Active) / `idle-zed` (Idle)
- **VSCodium**: Asset keys `vscodium` (Active) / `idle-vscodium` (Idle)
- **VSCodium Insiders**: Asset keys `vscodium-insiders` (Active) / `idle-vscodium-insiders` (Idle)
- **VS Code Insiders**: Asset keys `vscode-insiders` (Active) / `idle-vscode-insiders` (Idle)
- **VS Code Stable**: Asset keys `vscode` / `visualstudio` (Active) / `idle-vscode` (Idle)

## Key Extension Commands

- `discord.enable`: Enable Discord Presence in workspace
- `discord.disable`: Disable Discord Presence in workspace
- `discord.reconnect`: Reconnect Discord Presence to RPC
- `discord.disconnect`: Disconnect Discord Presence
- `discord.clearActivity`: Instantly clear Discord activity
- `discord.toggleMenu`: Interactive status bar quick pick menu
- `discord.showLogs`: Open live output channel logs

## Core Development Workflows

- **Format & Lint**: `pnpm run format` (runs `tsc --noEmit`, `prettier --write .`, and `eslint --fix`)
- **Build & Bundle**: `pnpm run build` (runs `pnpm run lint` and bundles entry `src/extension.ts` into `dist/extension.cjs` via `esbuild.mjs`)
- **Package VSIX**: `pnpm exec vsce package --no-dependencies` (always include `--no-dependencies` to avoid pnpm symlink errors during packaging)

## Asset Key Fallbacks

If custom asset keys (`antigravity`, `vscode-insiders`, etc.) are not uploaded on a specific Discord Developer Portal app, constants map gracefully back to standard Discord RPC keys (`visualstudio`, `idle-vscode`, `sleep`, `cursor`) to ensure Discord never displays missing image `?` icons.
