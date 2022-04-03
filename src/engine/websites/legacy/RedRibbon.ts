// Auto-Generated export from HakuNeko Legacy
// See: https://gist.github.com/ronny1982/0c8d5d4f0bd9c1f1b21dbf9a2ffbfec9

//import { Tags } from '../../Tags';
import icon from './RedRibbon.webp';
import { DecoratableMangaScraper } from '../../providers/MangaPlugin';

export default class extends DecoratableMangaScraper {

    public constructor() {
        super('redribbon', `Red Ribbon`, 'https://redribbon.site' /*, Tags.Language.English, Tags ... */);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class RedRibbon extends WordPressMadara {

    constructor() {
        super();
        super.id = 'redribbon';
        super.label = 'Red Ribbon';
        this.tags = [ 'manga', 'portuguese', 'scanlation' ];
        this.url = 'https://redribbon.site';
    }
}
*/