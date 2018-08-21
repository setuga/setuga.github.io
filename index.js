const app = new Vue({
    el: '#app',
    data: {
        maps : {
            erangel : ["Zharki", "Shooting Rangw", "Severny", "Stalber", "Kameshiki", "Yasnaya Polyana",
                "Mansion", "Lipvoka", "Prison", "Shelter", "School", "Rozhok", "Ruins", "Pochinki", "Gatka",
                "Quarry", "Primorsk", "Ferry Pier", "Farm", "Mylta", "Mylta Power",  "Sosnovka Military Base",
                "Novorepnoye",],
            miramar : ["Ruins", "Alcantara", "Trailer Park", "La Cobreria", "Crater Fields", "Water Treatment",
                "Torre Ahumada", "Cruz del Valle", "Tierra-Bronca", "Campo Militar", "El Azahar", "San Martín",
                "Hacienda del Patron", "Monte Nuevo", "Power Grid", "Graveyard", "Minas Generales", "Junkyard",
                "Impala", "La Bendita", "Pecado", "Ladrillera", "Chumacera", "Los Leones", "Puerto Paraíso",
                "Valle del Mar", "Prison", "Minas del Sur", "Los Higos"],
            sanhok : ["Camp Alpha", "Camp Bravo", "Camp Charile", "Bootcamp", "Paradise Resort", "Ruins",
                    "Ha Tinh", "Tat Mok", "Khao", "Mongunai", "Bhan", "Lakawi", "Quarry", "Pai Nan", "Tambang",
                "Na Kham", "Sahmee", "Ban Tai", "Docks"],
        },
        map : 'ERANGEL',
        city : "Random City",
        timeObj : null,
        count : 0
    },
    methods: {
        randomCity: function ()
        {
            if (this.map === 'ERANGEL')
            {
                this.city = this.maps.erangel[Math.floor(Math.random() * this.maps.erangel.length)]
            }
            else if (this.map === 'MIRAMAR')
            {
                this.city = this.maps.miramar[Math.floor(Math.random() * this.maps.miramar.length)]
            }
            else if (this.map === 'SANHOK')
            {
                this.city = this.maps.sanhok[Math.floor(Math.random() * this.maps.sanhok.length)]
            }
        },
        random : function()
        {
            this.timeObj =  setInterval(() =>
            {
                this.count++;
                this.randomCity();
                if (this.count > 10)
                {
                    clearInterval(this.timeObj);
                    this.count = 0;
                }
            }, 100);
        },
        setMap : function (map)
        {
            this.city = "Random City";
            this.map = map.toUpperCase();
        }
    }
});
