import { basename } from 'node:path';
import type { TextDocument, WorkspaceConfiguration } from 'vscode';
import { workspace, extensions } from 'vscode';
import type { API, GitExtension } from './@types/git';
import {
	ANTIGRAVITY_IMAGE_KEY,
	CURSOR_IMAGE_KEY,
	DEBUG_IMAGE_KEY,
	IDLE_ANTIGRAVITY_IMAGE_KEY,
	IDLE_CURSOR_IMAGE_KEY,
	IDLE_POSITRON_IMAGE_KEY,
	IDLE_TRAE_IMAGE_KEY,
	IDLE_VSCODE_IMAGE_KEY,
	IDLE_VSCODE_INSIDERS_IMAGE_KEY,
	IDLE_VSCODIUM_IMAGE_KEY,
	IDLE_VSCODIUM_INSIDERS_IMAGE_KEY,
	IDLE_WINDSURF_IMAGE_KEY,
	IDLE_ZED_IMAGE_KEY,
	KNOWN_EXTENSIONS,
	KNOWN_LANGUAGES,
	POSITRON_IMAGE_KEY,
	TRAE_IMAGE_KEY,
	VSCODE_IMAGE_KEY,
	VSCODE_INSIDERS_IMAGE_KEY,
	VSCODIUM_IMAGE_KEY,
	VSCODIUM_INSIDERS_IMAGE_KEY,
	WINDSURF_IMAGE_KEY,
	ZED_IMAGE_KEY,
} from './constants';
import { log, LogLevel } from './logger';

let git: API | null | undefined;

type WorkspaceExtensionConfiguration = WorkspaceConfiguration & {
	button1Label: string;
	button1Url: string;
	button2Label: string;
	button2Url: string;
	detailsDebugging: string;
	detailsEditing: string;
	detailsIdling: string;
	enabled: boolean;
	fileExcludePatterns: string[];
	idleTimeout: number;
	largeImage: string;
	largeImageIdling: string;
	lowerDetailsDebugging: string;
	lowerDetailsEditing: string;
	lowerDetailsIdling: string;
	lowerDetailsNoWorkspaceFound: string;
	privacyDetails: string;
	privacyLargeImageKey: string;
	privacyMode: boolean;
	removeDetails: boolean;
	removeLowerDetails: boolean;
	removeRemoteRepository: boolean;
	removeTimestamp: boolean;
	repositoryButtonLabel: string;
	showIdleImage: boolean;
	smallImage: string;
	suppressNotifications: boolean;
	swapBigAndSmallImage: boolean;
	workspaceExcludePatterns: string[];
};

export function getConfig() {
	return workspace.getConfiguration('discord') as WorkspaceExtensionConfiguration;
}

export const toLower = (str: string) => str.toLocaleLowerCase();

export const toUpper = (str: string) => str.toLocaleUpperCase();

export const toTitle = (str: string) => toLower(str).replace(/^\w/, (char) => toUpper(char));

export function resolveFileIcon(document: TextDocument) {
	const filename = basename(document.fileName);
	const findKnownExtension = Object.keys(KNOWN_EXTENSIONS).find((key) => {
		if (filename.endsWith(key)) {
			return true;
		}

		const match = /^\/(?<pattern>.*)\/(?<flags>[gimy]+)$/.exec(key);
		if (!match) {
			return false;
		}

		const regex = new RegExp(match.groups?.pattern as string, match.groups?.flags as string);
		return regex.test(filename);
	});
	const findKnownLanguage = KNOWN_LANGUAGES.find((key) => key.language === document.languageId);
	const fileIcon = findKnownExtension
		? KNOWN_EXTENSIONS[findKnownExtension]
		: findKnownLanguage
			? findKnownLanguage.image
			: null;

	return typeof fileIcon === 'string' ? fileIcon : (fileIcon?.image ?? 'text');
}

export async function getGit() {
	if (git || git === null) {
		return git;
	}

	try {
		log(LogLevel.Debug, 'Loading git extension');
		const gitExtension = extensions.getExtension<GitExtension>('vscode.git');
		if (!gitExtension?.isActive) {
			log(LogLevel.Trace, 'Git extension not activated, activating...');
			await gitExtension?.activate();
		}

		// eslint-disable-next-line require-atomic-updates
		git = gitExtension?.exports.getAPI(1);
	} catch (error) {
		// eslint-disable-next-line require-atomic-updates
		git = null;
		log(LogLevel.Error, `Failed to load git extension, is git installed?; ${error as string}`);
	}

	return git;
}

export function getAppImageKey(appName: string, isDebug: boolean): string {
	if (isDebug) {
		return DEBUG_IMAGE_KEY;
	}

	const lower = toLower(appName);

	if (lower.includes('antigravity')) {
		return ANTIGRAVITY_IMAGE_KEY;
	}

	if (lower.includes('cursor')) {
		return CURSOR_IMAGE_KEY;
	}

	if (lower.includes('windsurf')) {
		return WINDSURF_IMAGE_KEY;
	}

	if (lower.includes('positron')) {
		return POSITRON_IMAGE_KEY;
	}

	if (lower.includes('trae')) {
		return TRAE_IMAGE_KEY;
	}

	if (lower.includes('zed')) {
		return ZED_IMAGE_KEY;
	}

	if (lower.includes('vscodium')) {
		if (lower.includes('insiders')) {
			return VSCODIUM_INSIDERS_IMAGE_KEY;
		}

		return VSCODIUM_IMAGE_KEY;
	}

	if (lower.includes('insiders')) {
		return VSCODE_INSIDERS_IMAGE_KEY;
	}

	return VSCODE_IMAGE_KEY;
}

export function getIdleImageKey(appName: string): string {
	const lower = toLower(appName);

	if (lower.includes('antigravity')) {
		return IDLE_ANTIGRAVITY_IMAGE_KEY;
	}

	if (lower.includes('cursor')) {
		return IDLE_CURSOR_IMAGE_KEY;
	}

	if (lower.includes('windsurf')) {
		return IDLE_WINDSURF_IMAGE_KEY;
	}

	if (lower.includes('positron')) {
		return IDLE_POSITRON_IMAGE_KEY;
	}

	if (lower.includes('trae')) {
		return IDLE_TRAE_IMAGE_KEY;
	}

	if (lower.includes('zed')) {
		return IDLE_ZED_IMAGE_KEY;
	}

	if (lower.includes('vscodium')) {
		if (lower.includes('insiders')) {
			return IDLE_VSCODIUM_INSIDERS_IMAGE_KEY;
		}

		return IDLE_VSCODIUM_IMAGE_KEY;
	}

	if (lower.includes('insiders')) {
		return IDLE_VSCODE_INSIDERS_IMAGE_KEY;
	}

	return IDLE_VSCODE_IMAGE_KEY;
}
