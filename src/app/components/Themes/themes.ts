import {
  andromeda,
  atomone,
  aura,
  bbedit,
  copilot,
  defaultSettingsAndromeda,
  defaultSettingsAtomone,
  defaultSettingsAura,
  defaultSettingsBbedit,
  defaultSettingsCopilot,
  defaultSettingsDracula,
  defaultSettingsEclipse,
  defaultSettingsGithubDark,
  defaultSettingsGithubLight,
  defaultSettingsGruvboxDark,
  defaultSettingsMaterialDark,
  defaultSettingsMaterialLight,
  defaultSettingsMonokai,
  defaultSettingsNoctisLilac,
  defaultSettingsOkaidia,
  defaultSettingsQuietlight,
  defaultSettingsSolarizedLight,
  defaultSettingsTokyoNight,
  defaultSettingsTokyoNightDay,
  defaultSettingsVscodeDark,
  defaultSettingsVscodeLight,
  defaultSettingsXcodeDark,
  defaultSettingsXcodeLight,
  dracula,
  eclipse,
  githubDark,
  githubLight,
  gruvboxDark,
  materialDark,
  materialLight,
  monokai,
  noctisLilac,
  okaidia,
  quietlight,
  solarizedLight,
  tokyoNight,
  tokyoNightDay,
  vscodeDark,
  vscodeLight,
  xcodeDark,
  xcodeLight
} from '@uiw/codemirror-themes-all'
import { Extension } from '@uiw/react-codemirror'

export const darkThemes = {
  andromeda: {
    theme: andromeda,
    colors: defaultSettingsAndromeda
  },
  vscodeDark: {
    theme: vscodeDark,
    colors: defaultSettingsVscodeDark
  },
  aura: {
    theme: aura,
    colors: defaultSettingsAura
  },
  atomone: {
    theme: atomone,
    colors: defaultSettingsAtomone
  },
  copilot: {
    theme: copilot,
    colors: defaultSettingsCopilot
  },
  dracula: {
    theme: dracula,
    colors: defaultSettingsDracula
  },
  githubDark: {
    theme: githubDark,
    colors: defaultSettingsGithubDark
  },
  gruvboxDark: {
    theme: gruvboxDark,
    colors: defaultSettingsGruvboxDark
  },
  monokai: {
    theme: monokai,
    colors: defaultSettingsMonokai
  },
  materialDark: {
    theme: materialDark,
    colors: defaultSettingsMaterialDark
  },
  okaidia: {
    theme: okaidia,
    colors: defaultSettingsOkaidia
  },
  tokyoNight: {
    theme: tokyoNight,
    colors: defaultSettingsTokyoNight
  },
  xcodeDark: {
    theme: xcodeDark,
    colors: defaultSettingsXcodeDark
  }
}

export const lightThemes = {
  bbedit: {
    theme: bbedit,
    colors: defaultSettingsBbedit
  },
  eclipse: {
    theme: eclipse,
    colors: defaultSettingsEclipse
  },
  githubLight: {
    theme: githubLight,
    colors: defaultSettingsGithubLight
  },
  materialLight: {
    theme: materialLight,
    colors: defaultSettingsMaterialLight
  },
  noctisLilac: {
    theme: noctisLilac,
    colors: defaultSettingsNoctisLilac
  },
  quietlight: {
    theme: quietlight,
    colors: defaultSettingsQuietlight
  },
  solarizedLight: {
    theme: solarizedLight,
    colors: defaultSettingsSolarizedLight
  },
  tokyoNightDay: {
    theme: tokyoNightDay,
    colors: defaultSettingsTokyoNightDay
  },
  vscodeLight: {
    theme: vscodeLight,
    colors: defaultSettingsVscodeLight
  },
  xcodeLight: {
    theme: xcodeLight,
    colors: defaultSettingsXcodeLight
  }
}

export const themes = { ...darkThemes, ...lightThemes }

export type IThemes = keyof typeof themes

export interface IThemeState {
  theme: Extension
  colors: typeof defaultSettingsXcodeLight
  name: IThemes
}
