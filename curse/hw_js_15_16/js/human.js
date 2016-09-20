var human = {
    name: "Джон",
    age: 34,
    sex: 'мужчина',
    heigth: '190cm',
    weight: '110kg'
};
var worker = {
    workPlace: 'Винтерфел',
    salary: 100,
    doWork: function() {
        console.log( this.name + ' дерется с врагом возле ' + this.workPlace + 'а');
    }
};

var student = {
    learnPlace: 'Королевская гавань',
    grant: 10,
    seeSerials: function() {
        console.log( this.name + ' смотрит сериал Игра Престолов!');
    }
};
var worker = {
    workPlace: 'Королевская гавань',
    salary: 200,
    doWork: function() {
        console.log( this.name + ' дерется с врагом возле ' + this.workPlace + 'а');
    }
};

var student = {
    learnPlace: 'Лондон',
    grant: 11,
    seeSerials: function() {
        console.log( this.name + ' смотрит сериал Щ.И.Т.!');
    }
};

worker.__proto__ = human;

student.__proto__ = human;
