import LANG from './data/languages.json';

export const CLIENT_ID = '1529281705519747215' as const;

export const KNOWN_EXTENSIONS: { [key: string]: { image: string } } = LANG.KNOWN_EXTENSIONS;
export const KNOWN_LANGUAGES: { image: string; language: string }[] = LANG.KNOWN_LANGUAGES;

export const EMPTY = '' as const;
export const FAKE_EMPTY = '\u200B\u200B' as const;
export const FILE_SIZES = [' bytes', 'KB', 'MB', 'GB', 'TB'] as const;

export const IDLE_VSCODE_IMAGE_KEY = 'idle-vscode' as const;
export const IDLE_VSCODE_INSIDERS_IMAGE_KEY = 'idle-vscode-insiders' as const;
export const IDLE_VSCODIUM_IMAGE_KEY = 'idle-vscodium' as const;
export const IDLE_VSCODIUM_INSIDERS_IMAGE_KEY = 'idle-vscodium-insiders' as const;
export const IDLE_CURSOR_IMAGE_KEY = 'idle-cursor' as const;
export const IDLE_ANTIGRAVITY_IMAGE_KEY = 'idle-antigravity' as const;
export const IDLE_WINDSURF_IMAGE_KEY = 'idle-windsurf' as const;
export const IDLE_POSITRON_IMAGE_KEY = 'idle-positron' as const;
export const IDLE_TRAE_IMAGE_KEY = 'idle-trae' as const;
export const IDLE_ZED_IMAGE_KEY = 'idle-zed' as const;

export const IDLE_IMAGE_KEY = IDLE_VSCODE_IMAGE_KEY;
export const SECRET_IMAGE_KEY = 'secret' as const;
export const SLEEP_IMAGE_KEY = 'sleep' as const;
export const DEBUG_IMAGE_KEY = 'debug' as const;
export const VSCODE_IMAGE_KEY = 'vscode' as const;
export const VSCODE_INSIDERS_IMAGE_KEY = 'vscode-insiders' as const;
export const VSCODIUM_IMAGE_KEY = 'vscodium' as const;
export const VSCODIUM_INSIDERS_IMAGE_KEY = 'vscodium-insiders' as const;
export const CURSOR_IMAGE_KEY = 'cursor' as const;
export const ANTIGRAVITY_IMAGE_KEY = 'antigravity' as const;
export const WINDSURF_IMAGE_KEY = 'windsurf' as const;
export const POSITRON_IMAGE_KEY = 'positron' as const;
export const TRAE_IMAGE_KEY = 'trae' as const;
export const ZED_IMAGE_KEY = 'zed' as const;

export const UNKNOWN_GIT_BRANCH = 'Unknown' as const;
export const UNKNOWN_GIT_REPO_NAME = 'Unknown' as const;
export const PRIVATE_VALUE = 'Private' as const;

export const enum REPLACE_KEYS {
	AppName = '{app_name}',
	CurrentColumn = '{current_column}',
	CurrentErrors = '{current_errors}',
	CurrentLine = '{current_line}',
	CurrentProblems = '{current_problems}',
	CurrentWarnings = '{current_warnings}',
	DirName = '{dir_name}',
	Empty = '{empty}',
	FileExtension = '{file_extension}',
	FileName = '{file_name}',
	FileSize = '{file_size}',
	FullDirName = '{full_dir_name}',
	GitBranch = '{git_branch}',
	GitRepoName = '{git_repo_name}',
	LanguageLowerCase = '{lang}',
	LanguageTitleCase = '{Lang}',
	LanguageUpperCase = '{LANG}',
	TotalLines = '{total_lines}',
	VSCodeWorkspace = '(Workspace)',
	Workspace = '{workspace}',
	WorkspaceAndFolder = '{workspace_and_folder}',
	WorkspaceFolder = '{workspace_folder}',
}

export const enum CONFIG_KEYS {
	Button1Label = 'button1Label',
	Button1Url = 'button1Url',
	Button2Label = 'button2Label',
	Button2Url = 'button2Url',
	DetailsDebugging = 'detailsDebugging',
	DetailsEditing = 'detailsEditing',
	DetailsIdling = 'detailsIdling',
	Enabled = 'enabled',
	FileExcludePatterns = 'fileExcludePatterns',
	IdleTimeout = 'idleTimeout',
	LargeImage = 'largeImage',
	LargeImageIdling = 'largeImageIdling',
	LowerDetailsDebugging = 'lowerDetailsDebugging',
	LowerDetailsEditing = 'lowerDetailsEditing',
	LowerDetailsIdling = 'lowerDetailsIdling',
	LowerDetailsNoWorkspaceFound = 'lowerDetailsNoWorkspaceFound',
	PrivacyDetails = 'privacyDetails',
	PrivacyLargeImageKey = 'privacyLargeImageKey',
	PrivacyMode = 'privacyMode',
	RemoveDetails = 'removeDetails',
	RemoveLowerDetails = 'removeLowerDetails',
	RemoveRemoteRepository = 'removeRemoteRepository',
	RemoveTimestamp = 'removeTimestamp',
	RepositoryButtonLabel = 'repositoryButtonLabel',
	ShowIdleImage = 'showIdleImage',
	SmallImage = 'smallImage',
	SuppressNotifications = 'suppressNotifications',
	SwapBigAndSmallImage = 'swapBigAndSmallImage',
	WorkspaceExcludePatterns = 'workspaceExcludePatterns',
}
