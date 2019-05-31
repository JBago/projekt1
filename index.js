class Elementi {
    constructor(naziv, godina) {
        this.naziv = naziv;
        this.godina = godina;
    }
}

class Park extends Elementi {
    constructor(naziv, godina, povrsina, brojDrveca){
        super(naziv, godina);
        this.povrsina=povrsina;
        this.brojDrveca=brojDrveca;
        this.gustocaDrveca=brojDrveca/povrsina;
    }
}

class Ulica extends Elementi {
    constructor(naziv, godina, duzina, velicina){
        super(naziv, godina);
        this.velicina=velicina || 3;
        this.duzina=duzina;
    }
}

const parkovi = [
    new Park('Park skojevaca', 1987, 0.2, 215), 
    new Park('Pionirski Park', 1894, 2.9, 3541), 
    new Park('Omladinski Park', 1953, 0.4, 949),
    ];
    
const ulice = [
    new Ulica('Trg Oslobođenja', 1971, 1.1, 4), 
    new Ulica('Gat proleterskih brigada', 1982, 2.7, 1), 
    new Ulica('Beogradska', 1974, 0.8), 
    new Ulica('Lenjingradska', 1982, 2.5, 2),
    new Ulica('Trg Oktobarske revolucije', 1973, 4, 4),
    ];

const ispis = (park, ulica) => {
    let prosjecnaStarost=0; 
    let ukupnaDuzina=0;
    let prosjecnaDuzina=0;
    uliceIz80ih=[];
    console.log("Parkovi: ");
    park.forEach(element => {
        prosjecnaStarost+=2019-element.godina;
        console.log(element.naziv);
        console.log('Godina: ' + element.godina);
        console.log('Površina: ' + element.povrsina + "km");
        console.log('Broj drveća: ' + element.brojDrveca);
        console.log('Gustoća: ' + element.gustocaDrveca + '\n');    
    });
    console.log("Ulice: ");
    ulica.forEach(element => {
        ukupnaDuzina+=element.duzina; 
        console.log(element.naziv);
        if(parseInt((element.godina%100)/10)==8) uliceIz80ih.push(element);
        console.log('Godina: ' + element.godina);
        console.log('Dužina: ' + element.duzina + "km");
        console.log('Veličina: ' + element.velicina  + '\n');
    });
    prosjecnaStarost=(prosjecnaStarost/park.length).toFixed(2);
    ukupnaDuzina=ukupnaDuzina.toFixed(2);
    prosjecnaDuzina=(ukupnaDuzina/ulica.length).toFixed(2);
    return {
        prosjecnaStarost,
        ukupnaDuzina,
        prosjecnaDuzina,
        uliceIz80ih
    }
};

const ispis2 = (park, tip, izraz) => {
    park.sort(function(a, b){return b[tip] - a[tip] });
    park.forEach(element => {
        console.log(element.naziv + ' - ' + element[tip] + izraz);
    });
    console.log('');
}

const izvjestaj = (park, ulica) => {
    const podaci = ispis(park,ulica);
    console.log('Prosječna starost parkova je: ' + podaci.prosjecnaStarost + 'godine \n');
    ispis2(park, "brojDrveca", " drveca");
    ispis2(park, "povrsina", "km^2");
    console.log('Ukupna dužina ulica je: ' + podaci.ukupnaDuzina + 'km \n');
    console.log('Prosječna dužina ulica je: ' + podaci.prosjecnaDuzina + 'km \n');
    console.log('Ulice iz 80ih:');
    podaci.uliceIz80ih.forEach(element => {
        console.log(element.naziv + ' - ' + element.godina);
    });
}

izvjestaj(parkovi, ulice);
