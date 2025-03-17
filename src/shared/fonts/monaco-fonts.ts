import {
  Anonymous_Pro,
  Azeret_Mono,
  Courier_Prime,
  DM_Mono,
  Fira_Code,
  Fragment_Mono,
  Geist_Mono,
  Inconsolata,
  JetBrains_Mono,
  Kode_Mono,
  Nanum_Gothic_Coding,
  Nova_Mono,
  Roboto_Mono,
  Sometype_Mono,
  Source_Code_Pro,
  Space_Mono,
  Ubuntu_Mono,
  VT323,
  Victor_Mono
} from 'next/font/google'

const sometype_Mono = Sometype_Mono({ subsets: ['latin'], weight: '400' })
const fragment_Mono = Fragment_Mono({ subsets: ['latin'], weight: '400' })
const jetBrains_Mono = JetBrains_Mono({ subsets: ['latin'], weight: '300' })
const anonymous_Pro = Anonymous_Pro({ subsets: ['latin'], weight: '400' })
const firaCode = Fira_Code({ subsets: ['latin'], weight: '400' })
const azeret_Mono = Azeret_Mono({ subsets: ['latin'], weight: '300' })
const dm_Mono = DM_Mono({ subsets: ['latin'], weight: '300' })
const victor_Mono = Victor_Mono({ subsets: ['latin'], weight: '300' })
const space_Mono = Space_Mono({ subsets: ['latin'], weight: '400' })
const source_Code_Pro = Source_Code_Pro({ subsets: ['latin'], weight: '400' })
const roboto_Mono = Roboto_Mono({ subsets: ['latin'], weight: '400' })
const inconsolata = Inconsolata({ subsets: ['latin'], weight: '400' })
const ubuntu_Mono = Ubuntu_Mono({ subsets: ['latin'], weight: '400' })
const courier_Prime = Courier_Prime({ subsets: ['latin'], weight: '400' })
const nanum_Gothic_Coding = Nanum_Gothic_Coding({ subsets: ['latin'], weight: '400' })
const vt323 = VT323({ subsets: ['latin'], weight: '400' })
const geist_Mono = Geist_Mono({ subsets: ['latin'], weight: '400' })
const nova_Mono = Nova_Mono({ subsets: ['latin'], weight: '400' })
const kode_Mono = Kode_Mono({ subsets: ['latin'], weight: '400' })

export const monacoFonts = {
  monospace: space_Mono,
  victor_Mono,
  jetBrains_Mono,
  sometype_Mono,
  fragment_Mono,
  anonymous_Pro,
  firaCode,
  azeret_Mono,
  dm_Mono,
  source_Code_Pro,
  roboto_Mono,
  inconsolata,
  ubuntu_Mono,
  courier_Prime,
  nanum_Gothic_Coding,
  vt323,
  geist_Mono,
  nova_Mono,
  kode_Mono
}
