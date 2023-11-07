const { trusted } = require('mongoose')
const {DataTypes} = require('sequelize')
const database = require('./database')

const Lugares = database.define('Lugares', {
    id_room:{
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement:true
    },

    "3D":{
        type:DataTypes.BOOLEAN,
        allowNull:false

    },
    "A1": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "A2": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "A3": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "A4": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "A5": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "A6": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "A7": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "A8": {
        type: DataTypes.BOOLEAN,
        defaultValue: false}
,    "B1": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "B2": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "B3": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "B4": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "B5": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "B6": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "B7": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "B8": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "C1": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "C2": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "C3": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "C4": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "C5": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "C6": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "C7": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "C8": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "D1": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "D2": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "D3": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "D4": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "D5": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "D6": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "D7": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "D8": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "E1": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "E2": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "E3": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "E4": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "E5": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "E6": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "E7": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "E8": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "F1": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "F2": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "F3": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "F4": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "F5": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "F6": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "F7": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "F8": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "G1": {
    type: DataTypes.BOOLEAN,
    defaultValue: false},

    "G2": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "G3": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "G4": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "G5": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "G6": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "G7": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "G8": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "H1": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "H2": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "H3": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "H4": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "H5": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "H6": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "H7": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "H8": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "I1": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "I2": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "I3": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "I4": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "I5": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "I6": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "I7": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    "I8": {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
},

"J2": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"J3": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"J4": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"J5": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"J6": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"J7": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"J8": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"K1": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"K2": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"K3": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"K4": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"K5": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"K6": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"K7": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"K8": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"L1": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"L2": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"L3": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"L4": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"L5": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"L6": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"L7": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"L8": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"M1": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"M2": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"M3": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"M4": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"M5": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"M6": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"M7": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
},
"M8": {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
}
})

module.exports = Lugares