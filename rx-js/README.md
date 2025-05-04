# RxJS

គ្នាយើងធ្លាប់ឆ្ងល់អត់ថា ម៉េចបានយើងអាចបើក file ដែលមានទំហំ 10GB នៅលើ device ដែលមាន RAM ត្រឹម 4GB បាន?

គ្នាយើងធ្លាប់ឆ្ងល់អត់ថា ម៉េចបាន Netflix app អាច play ភាពយន្ត (ប្រភេទ 4K ដែលគេផ្ទុកនៅលើ cloud) បានភ្លាមៗនៅពេលដែលយើងចុចប៊ូតុង play? នៅលើ device ដែលមាន RAM ត្រឹម 4GB បាន?

តើ device របស់យើងគ្រប់គ្រងនូវការ load អ្វីមួយដែលយើងមិនដឹងពីទំហំច្បាស់លាស់យ៉ាងម៉េច?

device ធ្វើការ stream នូវ data ហើយ process វាជាកំណាត់តូចៗ។

## តើ stream ជាអ្វី?

stream គឺជាបណ្តុំនៃ data ដែលយើងមិនដឹងពីទំហំច្បាស់លាស់។

```
Stream = Array + Infinity
```

### ប្រើ Loop

```
for (let i = 0; i < infinite; i++) { 
  const element = stream[i]; 
}
```

បញ្ហាគឺ ធ្វើម៉េចយើងដឹងថា Loop stop ពេលណា?

### ប្រើ Observables

```
Observable = Array + Infinity + Asynchronous
// OR
Observable = Promise + Returns many times
```

```
————— Value 1 ————— Value 2 ————— Value 3 ————— Value 4 —————|—>
```

```
const observable = from([1, 2, 3, 4]); 
  
// 3 states => next, complete, error 
observable.subscribe({ 
  next: (value) => console.log("Next value:", value), 
  complete: () => console.log("Infinity is Done!!!"), 
  error: (err) => console.log("Error", err), 
});
```

JavaScript observable library ដែល popular គឺ RxJS។

## RxJS

```
of(10, 20, 30).subscribe( 
  next => console.log('next:', next), 
  err => console.log('error:', err), 
  () => console.log('the end'), 
);

```

### RxJS Operations

RxJS ផ្តល់ឲ្យយើងនូវ operators មួយចំនួនដែលអាចឲ្យយើង manipulate, transform, combine, and manage observables បាន។

#### RxJS Operations ដែលត្រូវបានគេប្រើច្រើនជាងគេ

##### Observable Creation:

* of()
* from()
* ajax()

##### Combination Operators:

* merge()
* combineLatest()
* forkJoin()

##### Filtering Operators:

* filter()
* distinctUntilChanged()
* debounceTime()

##### Transformation Operators:

* map()
* pluck()
* scan()

##### Error Handling Operators:

* catchError()
* retry()

##### Utility Operators:

* tap()
* delay()
