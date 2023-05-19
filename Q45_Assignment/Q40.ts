const make_album = ( artist : string, album : string, tracks? : string | Number ) => {

    if (tracks){
        console.log(`The artist name is ${artist},album name is ${album} And it's track's is ${tracks}`);

    }
    else {
        console.log(`The artist name is ${artist} And album name is ${album}`);
    }

}

const makalbum = make_album ;
makalbum ("Atif Aslam", "Judai");
makalbum ("Rahet Fathe Ali ", "Tarpe", 15);
makalbum ("Nusrat ali khan", "jind jan", 18);
