/* 

GPA Calculator by Nuwan94
https://github.com/nuwan94/se-gpa-calculator

*/


var courseName = "Dasturiy injnering TATU UF";

var courseUnits = [{
    year: '1',
    sems: [{
        sem: '1',
        subs: [{
            name: 'Hisoblash asoslari',
            id: 'SENG 11213'
        }, {
            name: 'Dasturlash tushunchalari',
            id: 'SENG 11223'
        }, {
            name: 'Muhandislik fondi',
            id: 'SENG 11232'
        }, {
            name: 'Statistika',
            id: 'SENG 11243'
        }, {
            name: 'Hisoblash uchun aqlli matematika I A',
            id: 'PMAT 11212'
        }, {
            name: 'Professionallar uchun ingliz tili',
            id: 'DELT 11212'
        }]
    },
    {
        sem: '2',
        subs: [{
            name: 'Malumotlar tuzilmalari va algoritmlari',
            id: 'SENG 12213'
        }, {
            name: 'Malumotlar bazasini loyihalash va ishlab chiqish',
            id: 'SENG 12223'
        }, {
            name: 'Obektga yonaltirilgan dasturlash',
            id: 'SENG 12233'
        }, {
            name: 'Dasturiy taminot muhandisligi uchun menejment I',
            id: 'SENG 12242'
        }, {
            name: 'Hisoblash uchun diskret matematika II B',
            id: 'PMAT 12212'
        }, {
            name: 'Professionallar uchun muloqot qobiliyatlari',
            id: 'DELT 12312'
        }]
    }
    ]
},
{
    year: '2',
    sems: [{
        sem: '3',
        subs: [{
            name: 'Kompyuter arxitekturasi va operatsion tizimlari',
            id: 'SENG 21213'
        }, {
            name: 'Dasturiy taminot konstruktsiyalari',
            id: 'SENG 21222'
        }, {
            name: 'Talab muhandisligi',
            id: 'SENG 21233'
        }, {
            name: 'Dasturiy taminotni modellashtirish',
            id: 'SENG 21243'
        }, {
            name: 'Veb-ilovalarni ishlab chiqish',
            id: 'SENG 21253'
        }, {
            name: 'Dasturiy taminot muhandisligi uchun menejment II',
            id: 'SENG 21272'
        }, {
            name: 'Kompyuter tarmoqlari',
            id: 'SENG 24213'
        }, {
            name: 'Interaktiv ilovalarni ishlab chiqish',
            id: 'SENG 21263',
            type: 'o'
        }]
    },
    {
        sem: '4',
        subs: [{
            name: 'Dasturiy taminot arxitekturasi va dizayni',
            id: 'SENG 22212'
        }, {
            name: 'Insonning kompyuter bilan ozaro tasiri',
            id: 'SENG 22223'
        }, {
            name: 'Dasturiy taminotni tekshirish va tasdiqlash',
            id: 'SENG 22233'
        }, {
            name: 'Mobil ilovalarni ishlab chiqish',
            id: 'SENG 22243'
        }, {
            name: 'Ornatilgan tizimlarni ishlab chiqish',
            id: 'SENG 22253',
            type: 'o'
        }, {
            name: 'Matematik usullar',
            id: 'PMAT 22213',
            type: 'o'
        }]
    }
    ]
},
{
    year: '3',
    sems: [{
        sem: '5',
        subs: [{
            id: "SENG 31212",
            name: "Dasturiy ta'minot sifati"
        }, {
            id: "SENG 31222",
            name: "Axborot xavfsizligi"
        }, {
            id: "SENG 31232",
            name: "Dasturiy ta'minot loyihasini boshqarish"
        }, {
            id: "SENG 31242",
            name: "Tizim dizayni loyihasi"
        }, {
            id: "SENG 31252",
            name: "Professional amaliyotlar"
        }, {
            id: "SENG 31262",
            name: "Tadqiqot usullari"
        }, {
            id: "SENG 31282",
            name: "Kompyuter tarmoqlarini boshqarish",
            type: 'o'
        },

        // Not Available for 2015/16
        {
            id: "SENG 31272",
            name: "Narsalar interneti",
            type: 'o'
        }, {
            id: "SENG 31292",
            name: "Korxona axborot tizimlari",
            type: 'o'
        },
        {
            id: "SENG 34222",
            name: "Dasturiy ta'minot jarayoni"
        }, {
            id: "SENG 31313",
            name: "Kengaytirilgan veb-ilovalarni ishlab chiqish",
            type: 'n'
        }, {
            id: "SENG 31323",
            name: "Mobil hisoblash texnologiyalari",
            type: 'm'
        }, {
            id: "SENG 31333",
            name: "Biznes razvedkasi va boshqaruvni qo'llab-quvvatlash tizimlari",
            type: 'd'
        }, {
            id: "SENG 31343",
            name: "Sog'liqni saqlash ma'lumotlarini boshqarish",
            type: 'h'
        }, {
            id: "SENG 31353",
            name: "O'yinni ishlab chiqish texnologiyasi",
            type: 'g'
        }, {
            id: "SENG 31363",
            name: "Biznes tizimlarini modellashtirish va optimallashtirish",
            type: 'b'
        }
        ]
    },
    {
        sem: '6',
        subs: [{
            id: "SENG 34213",
            name: "Tizimlarni rivojlantirish loyihasi"
        }, {
            id: "SENG 32216",
            name: "Amaliyot"
        }]
    }
    ]
}, {
    year: '4',
    sems: [{
        sem: '7',
        subs: [{
            name: 'Dasturiy taminot evolyutsiyasi',
            id: 'SENG 41212'
        }, {
            name: 'Dasturiy taminot korsatkichlari va olchovlari',
            id: 'SENG 41222'
        }, {
            name: 'Raqamli tasvirni qayta ishlash',
            id: 'SENG 41233',
            type: 'o'
        }, {
            name: 'Kengaytirilgan malumotlar bazalari',
            id: 'SENG 41242',
            type: 'o'
        }, {
            name: 'Murakkab kompyuter tarmoqlari',
            id: 'SENG 41252',
            type: 'o'
        }, {
            name: 'Nutq interfeyslari',
            id: 'SENG 41262',
            type: 'o'
        }, {
            name: 'Rasmiy usullar',
            id: 'SENG 41272',
            type: 'o'
        }, {
            id: "SENG 41283",
            name: "Taqsimlangan va bulutli hisoblash",
            type: 'n'
        }, {
            id: "SENG 41293",
            name: "Mobil veb-ilovalarni ishlab chiqish",
            type: 'm'
        }, {
            id: "SENG 41303",
            name: "Katta ma'lumotlar infratuzilmasi",
            type: 'd'
        }, {
            id: "SENG 41313",
            name: "Sog'liqni saqlash axborot tizimlarini loyihalash va ishlab chiqish",
            type: 'h'
        }, {
            id: "SENG 41323",
            name: "O'yinlar dizayni, san'at asarlari va dasturlash",
            type: 'g'
        }, {
            id: "SENG 41333",
            name: "Kompyuterga asoslangan operatsiyalarni boshqarish",
            type: 'b'
        }]
    },
    {
        sem: '8',
        subs: [{
            name: 'Dasturiy taminot xavfsizligi va ishonchliligi',
            id: 'SENG 42212'
        }, {
            name: 'Dasturiy taminot muhandisligi tadqiqot loyihasi',
            id: 'SENG 43216'
        }, {
            name: 'Foydalanish muhandisligi',
            id: 'SENG 42222',
            type: 'o'
        }, {
            name: 'Dasturiy taminotni boshqarish',
            id: 'SENG 42232',
            type: 'o'
        }, {
            name: 'Mashina organish',
            id: 'SENG 42242',
            type: 'o'
        }, {
            name: 'Kompyuter grafikasi',
            id: 'SENG 42252',
            type: 'o'
        }, {
            id: "SENG 42273",
            name: "Semantik veb va ontologik muhandislik",
            type: 'n'
        }, {
            id: "SENG 42283",
            name: "Mobil tarmoqlar",
            type: 'm'
        }, {
            id: "SENG 42293",
            name: "Katta ma'lumotlar tahlili",
            type: 'd'
        }, {
            id: "SENG 42303",
            name: "Tibbiy tasvirlash va biotibbiy signallarni qayta ishlash",
            type: 'h'
        }, {
            id: "SENG 42313",
            name: "O'yin dizayni va animatsiyasi bo'yicha ilg'or mavzular",
            type: 'g'
        }, {
            id: "SENG 42323",
            name: "Biznes jarayonlari muhandisligi",
            type: 'b'
        }]
    }
    ]
}
];