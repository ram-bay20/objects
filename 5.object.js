const bookProtos = {
     summary(){
          return `${this.title} was written by ${this.author} in ${this.year}.`;
     },

     age(){
          const old = new Date().getFullYear()-this.year;
          return `The Book ${this.title} is ${old} years old.`;
     },

     change(newYear){
          this.year = newYear;
          this.revised = true;
     }
}

const book1 = Object.create(bookProtos);
book1.title = 'History of Modern Times';
book1.author = 'C.D.M Ketelby';
book1.year = '1898';

console.log(book1.summary());
console.log(book1.age());
book1.change(1891);
console.log(book1.summary());
console.log(book1.age());

const book2 = Object.create(bookProtos , {
     title: {value: 'My Experiments with my Truth'},
     author: {value: 'Mahatma Gandhi'},
     year: {value: '1938'}
});
//console.log(book2.summary());
//console.log(book2.age());