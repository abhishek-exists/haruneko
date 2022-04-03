// Auto-Generated export from HakuNeko Legacy
// See: https://gist.github.com/ronny1982/0c8d5d4f0bd9c1f1b21dbf9a2ffbfec9

//import { Tags } from '../../Tags';
import icon from './Shakai.webp';
import { DecoratableMangaScraper } from '../../providers/MangaPlugin';

export default class extends DecoratableMangaScraper {

    public constructor() {
        super('shakai', `Shakai`, 'http://shakai.ru' /*, Tags.Language.English, Tags ... */);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class Shakai extends Connector {

    /**
     *
     *
    constructor() {
        super();
        super.id = 'shakai';
        super.label = 'Shakai';
        this.tags = [];
        this.url = 'http://shakai.ru';
    }

    _getMangaList( callback ) {
        callback( new Error( 'Please report this broken website on HakuNeko\'s GitHub project page.' ), undefined );
    }
    _getChapterList( manga, callback ) {
        callback( new Error( 'Please report this broken website on HakuNeko\'s GitHub project page.' ), undefined );
    }
    _getPageList( manga, chapter, callback ) {
        callback( new Error( 'Please report this broken website on HakuNeko\'s GitHub project page.' ), undefined );
    }
}
*/