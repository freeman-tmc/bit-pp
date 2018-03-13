
class TVShows {

    constructor(shows) {
        this.shows = shows;
    }

}

export function createTVShows(allShows) {
    allShows.length = 12;
    let tvshows = new TVShows(allShows);
    return tvshows;
}


class Show {

    constructor(name, image, showID, seasons, cast, info) {
        this.name = name;
        this.image = image;
        this.showID = showID;
        this.seasons = seasons;
        this.cast = cast;
        this.info = info;
    }
}

export function createShow(name, image, showID, seasons, cast, info) {
    let singleShow = new Show(name, image, showID, seasons, cast, info);
    return singleShow;
}


