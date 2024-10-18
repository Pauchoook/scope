export interface SpritesMap {
    'sprite': 'google'
  }
export const SPRITES_META: {
           [Key in keyof SpritesMap]: {
             filePath: string;
             items: Record<SpritesMap[Key], {
                viewBox: string,
                width: number, height: number,
             }>
           }
         } = {
    'sprite': {
    filePath: 'sprite.fe3bd037.svg',
    items: {
      'google': {
    viewBox: '0 0 488 512',
    width: 488, height: 512,
  }
    }
}
  };