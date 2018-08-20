const app = new Vue({
    el: '#app',
    data: {
        maps : {
            erangel : ["Zharki", "Shooting Rangw", "Severny", "Stalber", "Kameshiki", "Yasnaya Polyana", "Mansion", "Lipvoka", "Prison", "Shelter"],
            miramar : [],
            sanhok : ["Camp Alpha", "Camp Bravo", "Camp Charile", "Bootcamp", "Paradise Resort", "Ruins",
                    "Ha Tinh", "Tat Mok", "Khao", "Mongunai", "Bhan", "Lakawi", "Quarry", "Pai Nan", "Tambang",
                "Na Kham", "Sahmee", "Ban Tai", "Docks"],
        },
        map : 'ERANGEL',
        city : "Random City"
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
        setMap : function (map)
        {
            this.map = map.toUpperCase();
        }
    }
});
